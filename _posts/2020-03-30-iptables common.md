---
layout:     post
title:      "iptables 入門"
subtitle:   "iptables 平民攻略"
date:       2020-03-30
author:     "Qing"
header-style: text
catalog: true
tags:
    - linux
    - iptables
    - NAT
---

# 前奏
>有人曾經問過我，怎麼樣的電腦最安全，我回他，不連網的電腦最安全。

這當然是玩笑話，在現在這個時代，網路已經成為我們生活中不可或缺的一個部份了，
在網路上也充斥著各式各樣的危險，為了應付這些危險，電腦有防火牆來保護你的電腦
免於遭到主動攻擊，而在linux主機上，這個防火牆就叫做netfilter，而我們用來管理netfilter的程式就叫iptables(2.2版以前是用[ipchains](https://zh.wikipedia.org/wiki/Ipchains))


# iptables 元件組成

Iptables 分成 ip 跟 tables ，可以理解成不同的桌子(tables)上面放著幾張單子(chains)，單子上寫了IP address和ports還有一些相關的動作(action)。一個還沒被配置的iptables應該會長像下面這樣:
```bash=
root@debian:~# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
 
Chain FORWARD (policy ACCEPT)
target     prot opt source               destination
 
Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```

你可以看到上面有上個主要的chains:

- **INPUT** - 所有進入的連線(目標是本機)
- **FORWARD** - 所有被本機轉送的連線
- **OUTPUT** - 所有出去的連線(來源是本機)

Chains後面的 **(policy ACCEPT)** 是指ACCEPT是這個chain的default policy，所以當沒有符合的規則的話，就會直接ACCEPT，所以可以說是完全沒有保護。以下有三種基本規則可以使用:


- **預設ACCEPT所有的連線，並且deny那些你不想要他通過的連線** - 不推薦這個做法，因為你不太有辦法deny所有的你不想讓它通過的連線。
- **預設DROP or REJECT所有的連線，並且allow那些你想讓它通過的連線** - 這個做法會比較好，但是他有一些缺陷，如果你在你的規則裡寫入了一些小錯誤，你可以非常輕鬆的denying所有連線，包括你自己(如果你是用遠端連線)，所以下一種作法是我比較推薦的。
- **預設ACCEPT所有的連線，一條明確的規則DROP所有連線，再allow你想通過的連線** - 這是一個融合了前兩條，預設ACCEPT，所以如果出了什麼問題，你可以很輕鬆的透過SSH或任何遠端連線進入伺服器排錯，同時也可以DROP所有沒有符合規則的連線，Allowing那些**你知道，並且是你需要用到的**的連線會帶來相對最好的保護性。

>常見的table有 **FILTER** **NAT** **MANGLE** 使用-t選項來調用他們



# 在iptables中加入新的規則

有兩種方法可以加入新的規則到iptables裡，其一是插入(**insert**)到chain的開頭，另一種是附加(**append**)到chain的結尾。

iptables的規則套用是由上到下的，當搜索到一條符合的規則，就不會再往下套用規則，當全部搜索完還是沒有套用規則時，就會套用預設規則。

## Inserting a New Rule

假設現在要加入一條**允許任何人透過port 22連線到我的伺服器**的規則到iptables。Port 22是SSH使用的port。

```bash=
root@debian:~# iptables -I INPUT -i eth0 -p tcp --dport 22 -j ACCEPT
root@debian:~# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh
```

假設這台電腦的Public IP被設定在eth0這個interface上面，而且eth0也具有連網的能力，我們來解讀一下上面的指令:

- I - insert規則
- i - interface (eth0)
- p - protocol (tcp or udp)
- dport 22 - 目的port 22，與他相對應的有sport，用在要指定來源port時。
- j - jump，根據指定的動作執行，在這個例子裡用的是ACCEPT

可想而知，這條規則一點用都沒有，因為我們最後的default規則是ACCEPT，所以就算連線沒符合這條規則也會經由default規則通過，所以接下來讓我們用**append**來完善iptables

## Appending Rules

現在要加上一條規則來阻擋進入的連線，但是只要阻擋**我們不會用到，而且這條連線是對我們有害的**。舉例，當你開啟一個網站，你就會發送一個請求，然後你會接收到一個回覆，這個回覆是進入你的伺服器的，所以，在INPUT裡，必須要有一個規則去允許他進入。

首先，我們需要加上一條規則來允許已經建立連線的服務。

```bash=
root@debian:~# iptables -A INPUT -i eth0 -m conntrack  --ctstate ESTABLISHED,RELATED -j ACCEPT
root@debian:~# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh
ACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED
```

>這條指令中的-m conntrack --ststate ESTABLISHED,RELATED是一行

現在我們已經允許了會使用到的主動連線(SSH)，和由本機主動建立連線的服務，剩下的就可以全部deny掉了。

```bash=
root@debian:~# iptables -A INPUT -i eth0 -p tcp -j DROP
root@debian:~# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh
ACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED
DROP       tcp  --  anywhere             anywhere
```

>請記住，當上面的規則不符合時，才會搜尋下一行規則，而最後會是預設規則。

有兩種方法可以拒絕連線

1. 你可以使用**DROP**，就像把自己偽裝成一個空號一樣，不回應任何訊息給發出連線方，最後對於對方來說，這個地址就像空號一樣，是不存在的。
2. 第二種方法是使用**REJECT**，就像一個忙線的電話一樣，對於對方來說，你就像是一個可以連線的地址，只是現在被拒絕連線的，REJECT還有一個可選的訊息，預設是"ICMP port unreachable"。

## 存檔

iptables的規則是會在reboot後消失的，如果你不想要每次重開機都要重新設定的話，就要把你的規則存檔:
>sudo iptables-save > /etc/iptables/iptables.conf 

有存檔是不夠的，還要讀檔才會生效
>sudo iptables-restore < /etc/iptables/iptables.conf

如果你想要免去讀檔的困擾(我就懶)，那就把讀檔的指令放在開機執行檔裡，例:/etc/rc.local

# iptables參數

```bash=
Usage: iptables -[ACD] chain rule-specification [options]
 iptables -I chain [rulenum] rule-specification [options]
 iptables -R chain rulenum rule-specification [options]
 iptables -D chain rulenum [options]
 iptables -[LS] [chain [rulenum]] [options]
 iptables -[FZ] [chain] [options]
 iptables -[NX] chain
 iptables -E old-chain-name new-chain-name
 iptables -P chain target [options]
 iptables -h (print this help information)

Commands:
Either long or short options are allowed.
 --append -A chain Append to chain
 --check -C chain Check for the existence of a rule
 --delete -D chain Delete matching rule from chain
 --delete -D chain rulenum Delete rule rulenum (1 = first) from chain
 --insert -I chain [rulenum] Insert in chain as rulenum (default 1=first)
 --replace -R chain rulenum Replace rule rulenum (1 = first) in chain
 --list -L [chain [rulenum]] List the rules in a chain or all chains
 --list-rules -S [chain [rulenum]] Print the rules in a chain or all chains
 --flush -F [chain] Delete all rules in chain or all chains
 --zero -Z [chain [rulenum]] Zero counters in chain or all chains
 --new -N chain Create a new user-defined chain
 --delete-chain
 -X [chain] Delete a user-defined chain
 --policy -P chain target Change policy on chain to target
 --rename-chain
 -E old-chain new-chain
 Change chain name, (moving any references)
Options:
 --ipv4 -4 Nothing (line is ignored by ip6tables-restore)
 --ipv6 -6 Error (line is ignored by iptables-restore)
[!] --protocol -p protocol protocol: by number or name, eg. tcp
[!] --source -s address[/mask][...]source specification
[!] --destination -d address[/mask][...]destination specification
[!] --in-interface -i input name[+]network interface name ([+] for wildcard)
 --jump -j target target for rule (may load target extension)
 --goto -g chain jump to chain with no return
 --match -m match extended match (may load extension)
 --numeric -n numeric output of addresses and ports
[!] --out-interface -o output name[+]
 network interface name ([+] for wildcard)
 --table -t table table to manipulate (default: filter)
 --verbose -v verbose mode
 --wait -w [seconds] maximum wait to acquire xtables lock before give up
 --wait-interval -W [usecs] wait time to try to acquire xtables lock
 default is 1 second
 --line-numbers print line numbers when listing
 --exact -x expand numbers (display exact values)
[!] --fragment -f match second or further fragments only
 --modprobe=<command> try to insert modules using this command
 --set-counters PKTS BYTES set the counter during insert/append
[!] --version -V print package version.
```
# 尾奏

iptable完全沒有這麼簡單，其他諸如參數還有模組以後會再寫。


### 參考資料

[主要參考](https://code.tutsplus.com/tutorials/the-linux-firewall--net-31748)

[參數表參考](https://stackoverflow.max-everyday.com/2017/09/linux-firewall-iptables/?unapproved=1731&moderation-hash=81d72672db4e6b72e680df99f1b9cdb7#comment-1731)

[10分鐘學會IPTables](https://https://gigenchang.wordpress.com/2014/04/19/10%E5%88%86%E9%90%98%E5%AD%B8%E6%9C%83iptables/)

[LINUX 技術手札](https://www.opencli.com/linux/iptables-command)
