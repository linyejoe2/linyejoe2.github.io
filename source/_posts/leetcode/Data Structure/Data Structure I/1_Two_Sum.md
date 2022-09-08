---
layout:     post
title:      "[LeetCode]1. Two Sum"
subtitle:   "Data Structure I"
date:       2022-05-31
author:     "linyejoe2"
header-style: text
catalog: true
description: 輸入一個包含數字的陣列(nums)及一個目標數字(target)，回傳包和兩個位於原陣列內的數字的陣列，這兩個數字相加要等於目標數字。
tags: [LeetCode, Data Structure]
categories: [LeetCode, Data Structure, Data Structure I]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第二天第一個題目，總共有兩個。

+ 難度: `Easy`
+ 花費時間: 10分鐘
+ [題目](https://leetcode.com/problems/two-sum/)

輸入一個包含數字的陣列(nums)及一個目標數字(target)，回傳包和兩個位於原陣列內的數字的陣列，這兩個數字相加要等於目標數字。

**限制:**

-  `2 <= nums.length <= 10^4`
-  `-10^9 <= nums[i] <= 10^9`
-  `-10^9 <= target <= 10^9`
-  **Only one valid answer exists.**

**Example 1:**

```=
Input: nums = [2,7,11,15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```=
Input: nums = [3,2,4], target = 6
Output: [1, 2]
```

**Follow-Up:** 這道題時間複雜度可以寫到 `O(n^2)` 以下。

## 筆記

這題剛好是 `＃1` ，以前剛寫 LeetCode 時就寫過這題了，這次來嘗試寫出更好的成績。
最簡單的邏輯，遍歷兩次 `nums` 把兩次的值相加，只要一有答案就 `return` ，這樣就有答案了。

這次寫出來的東西跟上次差不多，解題思路如下:
1. 先 for 一次 `nums`
2. target - 當前的 element 得出來的值，拿去比較:
    + 值有存在在 `nums` 裡。
    + 值的 index 不等於當前 index 。
3. 一通過就 return


## 程式碼

```js=
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++){
        var num2IndexTemp = nums.indexOf(target - nums[i])
        if (num2IndexTemp != -1 && num2IndexTemp != i) return [i, num2IndexTemp];
    }
};
```

## 成績

![](https://i.imgur.com/NuAKKtz.png)

## 04/21/2022 程式碼與成績

這是以前剛接觸 LeetCode 時寫的。

```js=
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let ans = [];
    nums.forEach((element, index, array) => {
        if (array.indexOf(target - element) != -1 && ans.length === 0 && index != array.indexOf(target - element)) {
            ans = [index, array.indexOf(target - element)];
        }
    })
    return ans;
};
```

![](https://i.imgur.com/Iiv42MO.png)

<!-- ##### 參考資料 -->
