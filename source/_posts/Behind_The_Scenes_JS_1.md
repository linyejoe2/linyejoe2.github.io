---
layout:     post
title:      "[JaveScript] Behind The Scenes JS深度解析 NO.1"
subtitle:   "Hoisting in JS"
date:       2022-01-25
author:     "linyejoe2"
header-style: text
catalog: true
tags: [JaveScript, Behind The Scenes JS深度解析]
---

#  Hoisting in JS

在JS中我們可以**先撰寫呼叫函式的程式碼，再撰寫函式的宣告部分**，但程式碼仍會**正常運作**，對於寫習慣JS的人可能習以為常，但 Behind The Scenes 你真的知道在這之中發生了什麼事嗎?
<!--more-->

## What is Hoisting(什麼是**提升**)

首先，我們先來看一段程式碼。

```js
console.log(x);
getY();

var x = 'x'; 

function getY() {
    console.log('y');
}
```

<!-- TODO -->

##### 參考資料
1. [Hoisting in JavaScript](https://www.youtube.com/watch?v=Fnlnw8uY6jo&t=916s)
2. [JavaScript 中的 Hoisting 是什麼意思？let const var 的差異居然是這個？](https://shubo.io/javascript-hoisting/#javascript-hoisting-%E6%8F%90%E5%8D%87)