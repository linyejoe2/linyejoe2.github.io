---
layout:     post
title:      "[LeetCode]53. Maximum Subarray"
subtitle:   "Data Structure I"
date:       2022-05-30
author:     "linyejoe2"
header-style: text
catalog: true
description: 輸入一個包含數字的陣列，找出裡面總和最大的 `subarray` ，並回傳。
tags: [LeetCode, Data Structure]
categories: [LeetCode, Data Structure I]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/)

## 敘述

這是 `Data Structure I` 的第一天第二個題目，總共有兩個。

+ 難度: `Easy`
+ 花費時間: 1小時
+ [題目](https://leetcode.com/problems/maximum-subarray/)

輸入一個包含數字的陣列，找出裡面總和最大的 `subarray` ，並回傳。

**限制:**

-  `1 <= nums.length <= 10^5`
-  `-10^4 <= nums[i] <= 10^4`

**Example 1:**

```=
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1]
```

**Example 2:**

```=
Input: nums = [5,4,-1,7,8]
Output: 23
```

## 筆記

自己想了大概半小時，後來參考了評論區的做法。
時間複雜度為: `O(n)`
重點在於最大值一定會是原陣列裡某個特定的起點以及終點，那
+ 起點以前的值相加一定會是負數(因為是負數才會導致最大總和變小)
+ 終點以後的值也是同理，一定是負數。
所以做法是
1. 如果前兩個值相加是負數，那就把第二個值設為新的起點，反覆做直到不會是負數，然後把現在的總和放入 `currentSum` 及 `maxSum`
2. 把 `currentSum` 跟後面那個值一樣做比較，如果後面的值比 `currentSum` 大，那就再設定新的起點。
3. 後面就沒有特別找終點，單純把數值加上去，如果有大過 `maxSum` 就覆蓋過去。
4. 最後回傳。

## 程式碼

```js=
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var currentSum = 0;
    var maxSum = nums[0];
    for (var i = 0; i < nums.length; i++){
        currentSum = Math.max((currentSum + nums[i]), nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum
};
```

## 成績

![](https://i.imgur.com/bGaqF9C.png)

<!-- ##### 參考資料 -->
