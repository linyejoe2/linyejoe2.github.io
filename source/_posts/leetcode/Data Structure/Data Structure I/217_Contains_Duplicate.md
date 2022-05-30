---
layout:     post
title:      "[LeetCode]217. Contains Duplicate"
subtitle:   "Data Structure I"
date:       2022-05-30
author:     "linyejoe2"
header-style: text
catalog: true
description: 輸入一個包含數字的陣列，如果裡面有兩個以上重複的數字，那就回傳 `true`
tags: LeetCode, Data Structure, 
---

## 敘述

這是 `Data Structure I` 的第一天第一個題目，總共有兩個。

+ 難度: `Easy`
+ 花費時間: 10分鐘
+ [題目](https://leetcode.com/problems/contains-duplicate/)

輸入一個包含數字的陣列，如果裡面有兩個以上重複的數字，那就回傳 `true` ，如果沒有，就回傳 `false` 。

**限制:**

-  `1 <= nums.length <= 10^5`
-  `-10^9 <= nums[i] <= 10^9`

**Example 1:**

```=
Input: nums = [1, 2, 3, 1]
Output: true
```

**Example 2:**

```=
Input: nums = [1, 2, 3, 4]
Output: false
```

## 筆記

先把傳進來的 Array 做一次 `sort` ，然後遍歷一次比較當前值及他的下一個值，如果有重複的就回傳 `true` 。

## 程式碼

```js=
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums = nums.sort();
    
    for (var i = 0; i < nums.length - 1; i ++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
};
```

## 成績

![](https://i.imgur.com/8lxJDsJ.png)

<!-- ##### 參考資料 -->