---
layout:     post
title:      "[JaveScript]JS全端大冒險No.1"
subtitle:   "JS認定的資料格式"
date:       2022-01-11
author:     "linyejoe2"
header-style: text
catalog: true
tags: JaveScript, HTML
---

#  JS認定的資料格式

JS跟大多數的語言一樣，都可以用if(data)的簡寫來判斷資料是否存在。
<!--more-->


## if判斷

```javascript=
let numArr = [0,1,'',null,undefined];

numArr.forEach(element => {
    if (element) console.log(element);
})
```

##### 參考資料
1. [在 JavaScript 中將數字四捨五入到小數點後兩位](https://www.delftstack.com/zh-tw/howto/javascript/javascript-round-to-2-decimal-places/)
2. [\[JS\]Array、Object排序 排大小](https://mrcodingroom.freesite.host/jsarray%E3%80%81object%E6%8E%92%E5%BA%8F-%E6%8E%92%E5%A4%A7%E5%B0%8F/)