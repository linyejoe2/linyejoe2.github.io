---
layout:     post
title:      "[JaveScript]JS全端大冒險No.6"
subtitle:   "如何在JS中把有小數點的數值四捨五入到小數點後兩位?"
date:       2022-01-21
author:     "linyejoe2"
header-style: text
catalog: true
tags: JaveScript, RegEx, JS全端大冒險
---

#  如何在JS中把有小數點的數值四捨五入到小數點後兩位?

假設我們有`[123,123.005,123.49598347,0]`這樣的一個陣列，我想把陣列裡的數值都算到小數點後第2位，而且要四捨五入，得到類似`[123,123.01,123.5,0]`的陣列，我可以怎麼做呢?
<!--more-->


## 1. 使用正規表達式

先寫出一個正規表達式，偵測
+ 如果有小數點，那小數點後的位數只能到2位
+ 如果沒有小數點，那就直接過關(group1)
> 正規表達式究竟該怎麼寫，怎麼讀，請按[這邊](#//TODO)

```javascript
let regforTest = /(^.*.\...)|(^.*.)/;
```

接著 我們對目標陣列使用`filter()`回傳符合正規表達式的數值，就會得到答案如下:

```js
let numArr = [123,123.005,123.49598347,0];

numArr.forEach((element,index) =>{
    let match = regforTest.exec(element);
    if (match[1]){
        numArr[index] = match[1];
    }else {
        numArr[index] = match[2];
    }
})

console.log(numArr);// [123,123.00,123.49,0]
```

到小數點後這個目標是達成了，但是卻我們不需要小數點後多餘的00，於是改良一下這個語法，運用`parseFloat()`自動刪除多餘的00:
```js
let numArr = [123,123.005,123.49598347,0];

numArr.forEach((element,index) =>{
    let match = regforTest.exec(element);
        if (match[1]){
        numArr[index] = parseFloat(match[1].toString());
    }else {
        numArr[index] = parseFloat(match[2].toString());
    }
})

console.log(numArr);// [123,123,123.49,0]
```
到這一步，總算是成功刪到剩兩位了，如果你只想要簡單的**完全進位**那到這邊就可以啦!

```js
// 使用正規表達式 完整程式碼
let numArr = [123,123.005,123.49598347,0];

let regforTest = /(^.*.\...)|(^.*.)/;

numArr.forEach((element,index) =>{
    let match = regforTest.exec(element);
        if (match[1]){
        numArr[index] = parseFloat(match[1].toString());
    }else {
        numArr[index] = parseFloat(match[2].toString());
    }
})

console.log(numArr);
```

--------------
但是如果你想要學的是四捨五入的進位，那你可能還要接著看下去。

## 2. 直接寫一個函式判斷進位!

<!-- TODO -->

##### 參考資料
1. [在 JavaScript 中將數字四捨五入到小數點後兩位](https://www.delftstack.com/zh-tw/howto/javascript/javascript-round-to-2-decimal-places/)