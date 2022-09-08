---
layout:     post
title:      "[LeetCode]189. Rotate Array"
subtitle:   "Algorithm I"
date:       2022-06-14 11:42:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Two Pointers]
categories: [LeetCode, Algorithm, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第二天第二個題目，總共有兩題。

+ 難度: `Medium` 
+ 花費時間: 2hr
+ [題目](https://leetcode.com/problems/rotate-array/)

給你一個陣列 nums ，和一個數字 k ，把陣列由前反轉 k 次，不用回傳任何東西，原地修改陣列(in place)

<!--more-->

至少有三種方式可以完成。

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= nums.length <= 105`
-   `-231 <= nums[i] <= 231 - 1`
-   `0 <= k <= 105`


**Example 1:**

```=
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
翻轉第一個值到最前面: [7,1,2,3,4,5,6]
翻轉第二個值到最前面: [6,7,1,2,3,4,5]
翻轉第三個值到最前面: [5,6,7,1,2,3,4]
```

**Example 2:**

```=
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```
</pre></details>

## 筆記

#### 第一種作法: JS 內建函式

這作法算是有點作弊，使用到了三個 JS 內建函式，分別是:

1. [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice): 在此處的用法是把陣列從後面第 k 位的位置分離出新的陣列。
2. [Spread syntax \(...\)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax): 展開運算子，可以把陣列展開。
3. [Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift): 把資料加到陣列的最前面。

那把這三個步驟結合起來，就可以寫出過程了。

```js=
var rotate = function (nums, k) {
    // 例外處理 ex: rotate([1,2],5)
    k = k % nums.length;

    nums.unshift(...nums.splice(-k));
};
```

<!-- TODO -->

## 成績

JS 內建函式
![](https://i.imgur.com/HzjdQRz.png)


<!-- ##### 參考資料 -->