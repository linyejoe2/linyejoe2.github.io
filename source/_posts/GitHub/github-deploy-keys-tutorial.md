---
layout:     post
title:      "怎麼建立及使用 GitHub Deploy Keys"
# subtitle:   "jQuery控制HTML表單元素"
date:       2022-10-14
author:     "linyejoe2"
header-style: text
catalog: true
tags: [github, ssh]
categories: [GitHub]
description: "在使用 GitHub 的時候常常看到可以使用 SSH 來操作 repo ，但是不知道怎麼用的話，看這篇就對了！<br>跟小夥伴一起使用 GitHub 時，每次都只能使用 https 來連接遠端伺服器(也就是 GitHub )，今天就來教大家怎麼建立及使用 GitHub Deply Keys ，然後快樂的用 ssh 來操作 repo !"
---

# 怎麼建立及使用 GitHub Deploy Keys

跟小夥伴一起使用 GitHub 時，每次都只能使用 https 來連接遠端伺服器(也就是 GitHub )，今天就來教大家怎麼建立及使用 GitHub Deply Keys ，然後快樂的用 ssh 來操作 repo !

首先，要建立 Deploy Keys 之前，必須先有一個 repository ，這邊使用我新建立的專案如下：

![GitHub-Repo-GoPlayground](https://i.imgur.com/ga1anpt.png)

這是一個讓我練習 `Golang` 的專案。

在還沒建立 Deploy Keys 之前，我們可以先試試看現在用 SSH 會怎麼樣，這邊我們使用的 `GUI Client` 是 [`TortoiseGit`]

> 如果你想使用其他的 `GUI Client` 可以參考[這份官方文件](https://git-scm.com/downloads/guis)～

![tortioseGit-Git-clone-when-non-sshkey](https://i.imgur.com/5OjmWf4.png)

按下 ok

跳出了一個錯誤，跟我們說沒有足夠的權限存取專案。

![tortioseGit-Git-clone-when-non-sshkey-err-msg](https://i.imgur.com/jBDwYgF.png)

接著我們就來把這個問題解決吧～

## 建立 `Deploy Keys`

### 開啟 `GitHub` 裡加入 `Deploy Keys` 的畫面

> `Deploy Keys` 是一串 `SSh key` ，可以用在很多地方。

`Deploy Keys` 是分專案建立的，所以首先我們先打開要建立 `Deploy Keys` 的專案，點擊工具列的 `Settings`

![open-github-to-repo-setting](https://i.imgur.com/7cRv9rM.png)

然後我們要點擊左邊功能列裡的 `Deploy keys`

![github-on-deploy-keys](https://i.imgur.com/ratAggU.png)

這時可以看到畫面上，我們還沒有任何 Deploy keys

點擊右方 `Add deploy key` 按鈕跳出以下畫面

![add-deploy-key](https://i.imgur.com/JN3UV20.png)

這個地方就是我們要輸入 `Deploy Key` 的地方，這時我們必須使用到 `SSH-keygen` 來產生 `SSH key` 或是有些人會說金鑰

### 使用 `SSH-keygen` 產生 `SSH key`

此次教學使用 [`puTTYgen`] 簡單，快速。

開啟 [`puTTYgen`] ：

![puTTYgen](https://i.imgur.com/qJQZ11f.png)

下方是加密的演算法，我推薦使用中下紅框處的 ECDSA ，勾選起來。

設定好後就可以按左方紅框處的 `Generate` 了，按完之後 [`puTTYgen`] 會提示你在程式內移動滑鼠，這時 [`puTTYgen`] 會按照滑鼠的軌跡生成獨一無二的 `SSH Key` ，就是下方的 `Key` 裡面的東東，還會生成一份私鑰，但是不會顯示出來。

![ssh-key](https://i.imgur.com/41LnP1C.png)

點擊下方紅框處 `Save private key` ，把私鑰先儲存起來，這時他會提示我們沒有加密，沒關係，因為這是要給 GitHub 使用的。

> 私鑰請儲存在安全的地方，也不要放到網路上，避免被其他人盜用！

![private-key](https://i.imgur.com/T9pcEHJ.png)

### 把產生出來的 `Public key` 放到 `GitHub` 上

下方紅框處就是產生出來的 `Public key` 我們把他複製起來

![public-key](https://i.imgur.com/16G6xih.png)

貼上到剛剛第一步打開的畫面，如下：

![github-deploy-keys-add-public-key](https://i.imgur.com/DExwvaL.png)

然後把紅框處的 Title 填下，可以填你喜歡的就好，如果你需要寫入權限的話， `Allow write access` 記得打勾，全部做完如下：

![github-deploy-keys-add-title](https://i.imgur.com/HpX1Nx8.png)

點擊 `Add key` ，這時你就可以看到成功建立 `Deploy keys` 了！

![successfully-add-deploy-key](https://i.imgur.com/43elqH7.png)

## 使用 `Deploy Keys`

### `clone` 一份 `repository`

打開剛剛失敗的 [`TortoiseGit`] 畫面，勾選 `Load Putty Key` ，把剛剛儲存起來的 `private key` 導入到裡面，如下：

![tortoisegit-with-putty-key](https://i.imgur.com/qzHl4MM.png)

接著按下 `OK` 試試看！

![successfully-clone](https://i.imgur.com/csVhs3a.png)

成功！

### `push` 到 `GitHub` 上

我用 `Golang` 寫了一個簡單的程式如下：

![go-hello-world](https://i.imgur.com/trhxnOq.png)

接著我們嘗試把這個程式 `push` 到 `GitHub` 上

先 `commit` ，由於這步是在本地端，所以用不到 `Deploy Key`

![torotisegit-commit](https://i.imgur.com/pLm4Wyu.png)

接著 `push` 到 `GitHub` 上，這時會看到下方可以選擇 `Autoload Putty Key`

![torotisegit-push](https://i.imgur.com/EYtni47.png)

按下 `OK`

![tortoisegit-push-success](https://i.imgur.com/TTb0qig.png)

> 如果在加入 `Deploy Key` 的時候沒有勾選 `Allow write access` ，那麼在這步就會失敗了。

可以看到已經成功了，這時我們到 `GitHub` 上去看看檔案是否有被更動

![github-push-success](https://i.imgur.com/sf8cLFy.png)

可以看到檔案的確有被更動，到此就大功告成啦！

[`puTTYgen`]:https://www.puttygen.com/
[`TortoiseGit`]:https://tortoisegit.org/
