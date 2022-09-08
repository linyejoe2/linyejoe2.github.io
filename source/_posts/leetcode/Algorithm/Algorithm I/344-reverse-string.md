---
layout:     post
title:      "[LeetCode]344. Reverse String"
subtitle:   "Algorithm I"
date:       2022-06-16 11:20:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Two Pointers]
categories: [LeetCode, Algorithm, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第四天第一個題目，總共有兩題。

+ 難度: `Easy` 
+ 花費時間: 30min
+ [題目](https://leetcode.com/problems/reverse-string/)

傳入一個包含字母的陣列，把陣列原地(in-place)反轉。

空間複雜度必須為 O(1)

<!--more-->



<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= s.length <= 105`
-   `s[i]` is a [printable ascii character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).


**Example 1:**

```=
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**

```=
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```
</pre></details>

## 筆記

這道題使用 Two Pointer 非常的簡單，作法如下:

+ Pointer 1: 遍歷陣列到中間
+ Pointer 2: 反向遍歷陣列到中間

每次迴圈把指針 element 交換，再推進 Pointer 。

```js=
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let temp;
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }

    // console.log(s)
};
```

下面也有更簡單的做法，一行完成，哈哈哈。

```js=
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse();
};
```

## 成績

Two Pointers 成績
![](https://i.imgur.com/kZ5HgK4.png)


內建函式 reverse() 寫法成績
![](https://i.imgur.com/Oclfd2Z.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->