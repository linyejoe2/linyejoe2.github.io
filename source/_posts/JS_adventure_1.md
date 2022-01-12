---
layout:     post
title:      "[JaveScript]JS全端大冒險No.1_JS認定的資料格式"
subtitle:   "by linyejoe2"
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
// $ 1

let stringArr = ['a','B','',null,undefined];

stringArr.forEach(element => {
    if (element) console.log(element);
})
// "a" "B"

let objArr = [{},{key:''},{key:null},{undefined}];

objArr.forEach(element => {
    if (element) console.log(element);
})
// 全部都成立

let arrArr = [[],[''],[null],[undefined],[0],['',0]];

arrArr.forEach(element => {
    if (element) console.log(element);
})
// 全部都成立
```

所以經過上面的驗證，可以得知JS的資料只要遇到下方這四種狀況，就為false，其他則為true

    1. null
    2. undefined
    3. ''
    4. 0

> 巢狀Object及Array則不能直接從最外面判斷，需要寫**深度判斷**。