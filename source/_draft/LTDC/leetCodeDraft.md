---
layout:     post
title:      "[LeetCode]"
subtitle:   "Algorithm I"
date:       2022-06
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm]
---

>[Algorithm I 筆記撰寫計畫](https://linyejoe2.github.io/2022/06/13/leetcode/Data%20Structure/Data%20Structure%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第一天第一個題目，總共有三題。

+ 難度: `Easy` `Medium` `Hard`
+ 花費時間: 
+ [題目]()


<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 100
- -1000 <= mat[i][j] <= 1000
- 1 <= r, c <= 300

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
</pre></details>

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

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->