---
layout:     post
title:      "[LeetCode]88. Merge Sorted Array"
subtitle:   "Data Structure I"
date:       2022-05-31
author:     "linyejoe2"
header-style: text
catalog: true
description: 輸入兩個由小到大排序好的陣列及各自的長度，把第二個陣列的值放入第一個陣列中並且排序好即可，不用回傳。
tags: [LeetCode, Data Structure]
categories: [LeetCode, Data Structure, Data Structure I]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第二天第二個題目，總共有兩個。

+ 難度: `Easy`
+ 花費時間: 3小時
+ [題目](https://leetcode.com/problems/merge-sorted-array/)

輸入兩個由小到大排序好的陣列及各自的長度，把第二個陣列的值放入第一個陣列中並且排序好即可，不用回傳。

第一個陣列後面已經按照結果大小把0補齊了，方便原地計算 `in-place`

**限制:**

-   `nums1.length == m + n`
-   `nums2.length == n`
-   `0 <= m, n <= 200`
-   `1 <= m + n <= 200`
-   `-10^9 <= nums1[i], nums2[j] <= 10^9`

**Example 1:**

```=
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

**Example 2:**

```=
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

**Example 3:**

```=
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

**Follow-Up:** 這道題時間複雜度可以寫到 `O(m + n)`

## 筆記

這題其實就是 `Marge Sort` 最後合併的部分，所以我們就使用 `Marge Sort` 的方式，比較每個陣列的第一筆資料，比較小的放入 `nums1` 比較大的繼續比較，直到全部比較完，這樣就完成時間複雜度 `O(m + n)` 啦。

實際花費的時間比想像中的久很多，最後卡在 `in-place` 做不出來，所以只好去評論區看看大家是怎麼寫的。


## 程式碼

```js=
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    m -= 1;
    n -= 1
    for (let i = nums1.length -1; i >= 0; i--) {

        // 如果這次比較 nums1 比 nums2 大，那就把 nums1 當前 index 的 element 取出來然後塞入 nums1 的當前 index
        if ( m > -1 && nums1[m] >= nums2[n]) {
            nums1[i] = nums1[m];
            m -= 1;


            // 如果這次比較 nums2 比 nums1 大，那就把 nums2 當前 index 的 element 取出來然後塞入 nums1 的當前 index ，然後把 nums1 放進 nums2 原來的位置
        } else if (n > -1) {
            nums1[i] = nums2[n];
            n -= 1;
        }
    }
};
```

## 成績

![](https://i.imgur.com/iWPgv0k.png)
