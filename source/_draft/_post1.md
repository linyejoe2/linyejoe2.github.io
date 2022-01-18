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

## if判斷


```javascript=
let numArr = [0,1,'',null,undefined];

numArr.forEach(element => {
    if (element) console.log(element);
})
```