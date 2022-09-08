---
layout:     post
title:      "[LeetCode]977. Squares of a Sorted Array"
subtitle:   "Algorithm I"
date:       2022-06-14 11:11:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Two Pointers]
categories: [LeetCode, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第二天第一個題目，總共有兩題。

+ 難度: `Easy` 
+ 花費時間: 1hr
+ [題目](https://leetcode.com/problems/squares-of-a-sorted-array/)

傳入一個陣列(array)，把陣列裡的所有數字開平方，然後排序平方完的陣列，之後回傳排序完的陣列。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= nums.length <= 104`
-   `-104 <= nums[i] <= 104`
-   `nums` is sorted in **non-decreasing** order.


**Example 1:**

```=
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

**Example 2:**

```=
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```
</pre></details>

## 筆記

#### 第一種作法: JS 內建函式

這作法算是有點作弊，使用到了兩個 JS 內建函式，分別是:
1. [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): 負責把陣列裡的值平方後傳出。
2. [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): 負責排序平方完的陣列。

```js=
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    nums = nums.map(x => x * x).sort((a,b)=> a - b);
   return nums;
};
```

<!-- TODO -->

## 成績

JS 內建函式
![](https://i.imgur.com/jDEy8nv.png)
