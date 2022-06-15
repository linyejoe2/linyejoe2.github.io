---
layout:     post
title:      "[LeetCode]350. Intersection of Two Arrays II"
subtitle:   "Data Structure I"
date:       2022-06-01
author:     "linyejoe2"
header-style: text
catalog: true
description: 傳入兩個陣列，回傳這兩個陣列的交集。
tags: [LeetCode, Data Structure, Two Pointers]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第三天第一個題目，總共有兩個。

+ 難度: `Easy`
+ 花費時間: 1小時
+ [題目](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

傳入兩個陣列，回傳這兩個陣列的交集，回傳值不用排序。

**限制:**

-  `1 <= nums1.length, nums2.length <= 1000`
-  `0 <= nums1[i], nums2[i] <= 1000`

**Example 1:**

```=
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**

```=
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

## 筆記

使用 Two Pointers 就可以解決這個問題。

1. 把兩個陣列排序好
2. 找出比較小的那個陣列，為主要陣列 `mainArr` (主要陣列跑完就可以得到所有答案了)，另一個為比較陣列 `compArr`
3. 比較指標
    + 如果指標相同，那就把值加進 Result ，然後把兩個指標都往後推一位。
    + 如果 `mainArr` 值比較大，那就把 `compArr` 加一，然後把迴圈加一(因為主要陣列的值沒有用到)然後繼續比較。
    + 相反亦同，但是不用把迴圈加一了， 因為這是比較用的陣列。

## 程式碼

```js=
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function (nums1, nums2) {
    var mainIndex = 0,
        compIndex = 0;
    var resultArr = [];

    nums1 = nums1.sort((a, b) => {
        return a - b;
    });
    nums2 = nums2.sort((a, b) => {
        return a - b;
    });
    // console.log("nums1: ", nums1)
    // console.log("nums2: ", nums2)

    if (nums1.length < nums2.length) {
        for (var i = 0; i < nums1.length; i++) {
            // console.log("mainIndex: " + mainIndex)
            // console.log("compIndex: " + compIndex)
            // 如果指標相同，那就把值加進 Result ，然後把兩個指標都往後推一位。
            if (nums1[mainIndex] === nums2[compIndex]) {
                resultArr.push(nums1[mainIndex]);
                mainIndex += 1;
                compIndex += 1;
                // 如果 `mainArr` 值比較大，那就把 `compArr` 加一，然後把迴圈加一(因為值沒有找到)然後繼續比較。
            } else if (nums1[mainIndex] > nums2[compIndex]) {
                compIndex += 1;
                i--;
            } else if (nums1[mainIndex] < nums2[compIndex]) {
                mainIndex += 1;
            }
        }
    } else {
        for (var j = 0; j < nums2.length; j++) {
            // console.log("mainIndex: " + mainIndex)
            // console.log("compIndex: " + compIndex)
            if (nums2[mainIndex] === nums1[compIndex]) {
                resultArr.push(nums2[mainIndex]);
                mainIndex += 1;
                compIndex += 1;
            } else if (nums2[mainIndex] > nums1[compIndex]) {
                compIndex += 1;
                j--;
            } else if (nums2[mainIndex] < nums1[compIndex]) {
                mainIndex += 1;
            }
        }
    }
    return resultArr;
};
```

## 成績

![](https://i.imgur.com/ihYYNK2.png)

<!-- ##### 參考資料 -->