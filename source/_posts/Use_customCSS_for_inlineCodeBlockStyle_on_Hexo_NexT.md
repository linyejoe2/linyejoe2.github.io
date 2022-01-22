---
layout:     post
title:      "[Hexo]運用自訂css調整inline codeblock style"
subtitle:   "Hexo NexT 怎麼調整行內程式碼顏色?"
date:       2022-01-22
author:     "linyejoe2"
header-style: text
description: 前幾天開始嘗試第N次架設自己的Blog(每次都無法持之以恆QQ) 使用了中文社群資源很多的Hexo NexT 但是遇上了一個小問題...
catalog: true
tags: Hexo, NexT, Blog, CSS, SCSS
---

#  運用自訂css調整inline codeblock style

前幾天開始嘗試第N次架設自己的Blog(每次都無法持之以恆QQ) 使用了中文社群資源很多的Hexo NexT 遇上了一個小問題 我用的是深色的主題 而且我已經在config裡配置codeblock的highlight_theme了(如下) 但是inline codeblock居然是白色的(感覺是優化還沒做很好)

![inline codeblock background color is white](https://i.imgur.com/gDzu94b.png)

```yml
codeblock:
  # Code Highlight theme
  # Available values: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # See: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: night eighties #就是這一行調整顏色
  # Add copy button on codeblock
  copy_button:
    enable: false
    # Show text copy result.
    show_result: false
    # Available values: default | flat | mac
    style:
```

看久了真的很矮油(台語) 所以便著手處理 找了網上幾篇文章之後 便找到了類似的自己寫CSS的教學 於是今天就趁這個機會來學怎麼自己寫自己網站的CSS吧!

## 文件配置

首先 themes/next/source/css/ 這就是NexT使用的css資料夾 在裡面建立 _custom/custom.styl
第二步 開啟themes/next/source/css/_schemes/{你的主題 這邊我是選Pisces}/index.styl
在裡面import剛剛建立的新檔案 

```scss
@import '_layout';
@import '_header';
@import '_menu';
@import '_sub-menu';
@import '_sidebar';
@import '../../_custom/custom'; //這邊import
```
最後 我們就可以快樂的在custom裡寫下我們想要的樣式啦! 

```css
code {
    background: #282828 !important;
    margin : auto 2px auto 2px;
    color: rgb(179, 179, 179);
}
```

然後我們就可以得到美美的inline codeblock 完結灑花~

![inline codeblock background color is black (end)](https://i.imgur.com/iRbS8Uk.png)

##### 參考資料
1. [Hexo之Next主题美化代码](https://www.cnblogs.com/LyShark/p/11834144.html)