---
layout:     post
title:      "使用 Geth 建立 POA 私鏈"
date:       2024-11-14
author:     "linyejoe2"
header-style: text
catalog: true
tags: [geth, block chain, 私鏈, ethereum, 區塊鏈]
description: "私鏈作為區塊鏈的應用之一擁有很高的發展性，任何人、單位、機關，都可以建立自己的私鏈來儲存重要資訊，並且私鏈也提供了跟公鏈一樣的以下幾種特性..."
---

# 前言

私鏈作為區塊鏈的應用之一擁有很高的發展性，任何人、單位、機關，都可以建立自己的私鏈來儲存重要資訊，並且私鏈也提供了跟公鏈一樣的以下幾種特性:

+ 不可竄改性(immutable): 任何人都不能竄改已經寫入鏈上的資料，就算修改了，也會在鏈上留下永久性的修改紀錄。
+ 公開性(transparent): 所有數據都被公開記錄在區塊鏈上，只要有辦法存取區塊鏈節點(EtherScan, JSON-RPC)，也就可以查詢這些紀錄。
+ 匿名性(anonymous): 所有錢包都是匿名的，你不能透過錢包得知錢包主人的其他資訊。
+ 共識機制(consensus): 半數鏈上的簽名節點都必須承認某一筆交易，交易才會達成共識，也就是被這條區塊鏈承認，這個機制的好處就是，除了社交工程之外，比較難用黑客技術竄改交易紀錄或偷錢，當然還是有例外(51%攻擊)

今天要實作的是 POA(授權證明) 鏈， POA 也是私鏈最常用的共識機制，以下簡單的分析一下POA 跟其他共識機制(POS, POW)的差別。

1. 交易確認方式: POA 由數個指定的**權威節點**來簽名交易，沒經過同意的其他人是不能加入進來**挖礦**的。
2. 高性能，低延遲: 由於 POA 只能由權威節點簽名交易，不需要大量的計算來驗證交易，因此交易確認速度比起其他共識機制要快，非常適合需要高吞吐量和低延遲的應用，例如供應鏈、物流追蹤等。
3. 中心化: 由於簽名的權力掌握在少數的權威節點手上，也就代表它不再去中心化。
4. 節能: 不需要大量的計算及驗證。

# 前置工作

以下我們把 POA 私鏈簡稱為 POA ，我們要做的是一個權威節點(authority node)，以下簡稱節點，一個 POA 最少只需要一個權威節點就可以運作。

想要做一個 POA ，必須先準備以下的東西:

+ 一台電腦(伺服器)，最好是 linux 作業系統的，筆者使用的是 Ubuntu 22.04.2 LTS(Docker:[alnoda/ubuntu-workspace](https://hub.docker.com/r/alnoda/ubuntu-workspace))
+ Geth 主程式: 從 <https://github.com/ethereum/go-ethereum/tags> 可以下載到，注意 Geth 從版本 1.14 之後就不支持 POA 共識機制了，所以必須使用 1.14 前的，筆者使用的是 [v1.9.25](https://github.com/ethereum/go-ethereum/releases/tag/v1.9.25)
+ 可以自訂連線區塊鏈網路的 ethereum wallet，筆者使用 [MetaMask](https://metamask.io/)

# 安裝並運行 Geth

> 由於筆者使用 Docker 來做練習，不使用 Docker 的可以跳過這節。

## 運行 Docker Container

筆者使用 Docker on windows(WSL) 來練習架設 Geth ，所以我們先來啟動一個 container 。

```bash
# 運行 container
docker run --name space-1 -d -p 3051:3051 -p 30303:30303 -v C:\geth:/root/geth alnoda/ubuntu-workspace

# 用 zsh 進入 container
docker exec -it --user=root space-1 zsh
```

+ --name: container 的名字
+ -d: 背景運行(daemon)
+ -p: 指定 container 跟 host 的埠映射，設定方式是 `-p {host-port}:{container-port}`
  + 3051: 讓使用者連接節點的埠。
  + 30303: Geth 的 p2p port ，讓節點間可以互相搜尋並建立連線的 port ，這個 port 讓我們以後可以擴充我們的 POA ，加入更多的節點。
+ -v: volume ，讓 Geth 裡的資訊可以持久化存取，可以簡單的看成把 `C:\geth` 這個資料夾 mount 到 `/root/geth` 上
+ alnoda/ubuntu-workspace: 指定的 docker image ，我使用的這個 image 讓 docker container 可以像 VM 一樣做一些簡單的沙盒測試。

然後我們 `cd /root/geth` 可以看到筆者把 geth 主程式放在這個資料夾底下:

![container-1](https://i.imgur.com/ZpfqhJi.png)

## 撰寫 genesis.json 

現在我們在 `/root/geth` 目錄底下，有 geth 主程式，我們要撰寫創世區塊 genesis.json ，這個檔案可以幫助 geth 設定鏈的資訊。

`/root/geth/genesis.json`
```json
{
  "config": {
    "chainId": 66,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "istanbulBlock": 0,
    "clique": {
      "period": 0,
      "epoch": 30000
    }
  },
  "alloc": {
    "556c1aaea8c1ec17a544ba6787a346b6bb05fa9e": {
      "balance": "0x52b7d2dcc80cd2e4000000"
    }
  },
  "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000556c1aaea8c1ec17a544ba6787a346b6bb05fa9e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x0000000000000000000000000000000000000000",
  "difficulty": "0x1",
  "gasLimit": "0x77359400",
  "gasUsed": "0x0",
  "nonce": "0x0",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp": "0x5ff27a04"
}
```

+ chainId: 鏈 ID
+ homesteadBlock, eip150Block, eip155Block, eip158Block, byzantiumBlock, constantinopleBlock, petersburgBlock, istanbulBlock: 這些是 Ethereum 歷史上的硬分岔，設為 0 表示啟用這些硬分叉。
+ clique: POA 的一種
  + period: 幾秒生成一個新的區塊，設定為零是因為這是私鏈，我們不希望有空的區塊被產生。
  + epoch: 經過幾個區塊後重新選舉驗證者。
+ alloc: 初始資金要分配給誰，後續我們會修改分配的地址。
+ extraData: 設定 POA 的驗證者是誰，目前是 `0x556c1aaea8c1ec17a544ba6787a346b6bb05fa9e` 這個地址，等等也會修改。
+ coinbase: 礦工地址， POA 沒有礦工。
+ difficulty: 挖出區塊的難度， POA 可以設定為沒有難度。
+ gasLimit: 每個區塊的 gas 上限。
+ gasUsed: 創世區塊使用的 gas 數量。
+ nonce, mixHash, parentHash: 創世區塊默認。

![container-2](https://i.imgur.com/Cr1YAZV.png)

到目前為止我們在 `/root/geth` 裡有 geth 主程式跟創世區塊設定檔 `genesis.json`。

## 創建使用者

`./geth account new` 建立新的使用者(地址)，創建過程會需要使用者輸入密碼。

![container-3](https://i.imgur.com/5Rv6Hmn.png)

將密碼寫入 `/root/geth/password` 裡備用
我們得到了一個新的帳號 0x7d454A2fA9487B563ecc1d96C9339Ce4e74163ED ，現在修改 `genesis.json` ，把 alloc 跟 extraData 裡的地址都改成剛剛創建的地址，如下顯示修改完的檔案:

`genesis.json`

```json
{
  "config": {
    "chainId": 66,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "istanbulBlock": 0,
    "clique": {
      "period": 0,
      "epoch": 30000
    }
  },
  "alloc": {
    "7d454A2fA9487B563ecc1d96C9339Ce4e74163ED": {
      "balance": "0x52b7d2dcc80cd2e4000000"
    }
  },
  "extraData": "0x00000000000000000000000000000000000000000000000000000000000000007d454A2fA9487B563ecc1d96C9339Ce4e74163ED0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x0000000000000000000000000000000000000000",
  "difficulty": "0x1",
  "gasLimit": "0x77359400",
  "gasUsed": "0x0",
  "nonce": "0x0",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp": "0x5ff27a04"
}
```

## 初始化後運行 Geth

使用 `./geth init genesis.json` 初始化創世區塊:

![container-4](https://i.imgur.com/DgObQ3H.png)

可以看到由於筆者使用的是 Docker ，所以在 USB Device 的地方有報錯，不過這不影響 POA 。
最後顯示成功寫入創世狀態。

使用以下指令開始運行 Geth

```sh
./geth \
--miner.gastarget 2000000000 \
--mine \
--allow-insecure-unlock \
--unlock 0x7d454A2fA9487B563ecc1d96C9339Ce4e74163ED \
--password /root/geth/password \
--http \
--http.port 3051 \
--http.api net,eth,web3 \
--networkid 66 \
--http.addr 0.0.0.0 \
--miner.gasprice 0 \
--nousb \
--nodiscover \
--cache 256
```

+ --miner.gastarget: 每個區塊的油錢消耗
+ --mine: 啟用挖礦模式
+ --miner.gasprice: 設置 gas 價格，這邊設置為零代表接受沒有手續費的交易。
+ --allow-insecure-unlock: 可以直接解鎖帳戶
+ --unlock 0x7d454A2fA9487B563ecc1d96C9339Ce4e74163ED: 解鎖我們剛剛創建的帳戶
+ --password: 放置解鎖帳戶用的密碼
+ --http: 啟用 http 交互
+ --http.port: 連線的 port
+ --http.api net,eth,web3: 可以透過 api 使用的功能
+ --http.addr 0.0.0.0: 綁定到所有 interface
+ --networkid: 要跟剛剛 `genesis.json` 裡定義的 chainId 一致
+ --nousb: 禁用 usb 錢包
+ --cache 256: 設置節點快取大小

![alt text](https://i.imgur.com/YMmkfV1.png)

到這邊我們就成功運行一個節點了，可以著手測試。

# 測試 Geth

開啟 MetaMask ，加入 custom network ，參考以下設定:

![alt text](https://i.imgur.com/LIgg9gD.png)

Chain Name: POA
RPC URL: localhost:3051
Chain ID: 66
Token Name: POAT (POA Token)

接著使用 MetaMask 原有的帳號轉 0 POAT 給我們剛剛用 geth 做出來的帳號
(0x7d454A2fA9487B563ecc1d96C9339Ce4e74163ED)看看

![alt text](https://i.imgur.com/kCRssbD.png)

下圖可以看到我們的交易被確認了

![alt text](https://i.imgur.com/MeD6tGg.png)

也可以用 `geth` 的控制台查看 block 有沒有增加

`./geth attach` 進入主控台後 `eth.blockNumber` 看現在的區塊高度是 1

![alt text](https://i.imgur.com/ysDYUo4.png)

最後，我們把剛剛做出來的帳號(0x7d454A2fA9487B563ecc1d96C9339Ce4e74163ED)匯入到 MetaMask ，可以看到有 100,000,000 顆 POAT ，並且我們將 20 POAT 打入另一個帳號

![alt text](https://i.imgur.com/JKwj3KV.png)

![alt text](https://i.imgur.com/GHVFZoE.png)

到這邊，我們就算建立了一個單權威節點的 POA 鏈。
