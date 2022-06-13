---
layout:     post
title:      "[LeetCode]704. Binary Search"
subtitle:   "Algorithm I"
date:       2022-06-13 10:30:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm]
---

>[Algorithm I 筆記撰寫計畫](https://linyejoe2.github.io/2022/06/13/leetcode/Data%20Structure/Data%20Structure%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第一天第一個題目，總共有三題。

+ 難度: `Easy` 
+ 花費時間: 半小時
+ [題目](https://leetcode.com/problems/binary-search/)

給你一個順序排列的陣列，跟一個目標數字，回傳目標數字在陣列中的 `index` 如果不存在，回傳 `-1`

<!--more-->

把時間複雜度控制在 `O(log n)`

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= nums.length <= 104`
-   `-104 < nums[i], target < 104`
-   All the integers in `nums` are **unique**.
-   `nums` is sorted in ascending order.

**Example 1:**

```=
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

**Example 2:**

```=
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```
</pre></details>

## 筆記

題目有提到必須把時間複雜度控制在 `O(log n)` ，會讓我想要用類似 Merge Sort 的方式尋找:

1. 檢查原陣列頭尾是否包含 `target`
2. 把原陣列切一半，檢查切一半的陣列頭尾是否包含 `target` ，選擇有的那個
3. 重複做 2.
4. 得到答案，或是沒有答案，回傳 -1

## 程式碼

```js=
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target, index = 0) {
    console.log(nums)

    // 如果頭是 target 的話就回傳 index
    if (nums[0] == target) return index;
    // 如果尾是 target 的話就回傳陣列長度
    if (nums[nums.length - 1] == target) return index + nums.length - 1;

    // 如果做到剩一個還沒有就回傳 -1
    if (nums.length == 1 && nums[0] != target) return -1;

    // 切一刀
    const middle = Math.floor(nums.length / 2);

    // 分出左邊
    const left = nums.slice(0, middle);

    // 分出右邊
    const right = nums.slice(middle, nums.length);

    // 如果左邊有值，就進去找左邊
    if (left[0] <= target && left[left.length - 1] >= target) return search(left, target, index);

    // 如果右邊有值，就進去找右邊，但是index記得加上前面的長度
    if (right[0] <= target && right[right.length - 1] >= target) return search(right, target, index + left.length);

    // 例外處理 ex:search([0,3],2)
    return -1
};
```

## 成績

雖然我自認為寫的不錯，但成績狠狠的打臉我，以後有機會再看看評論區的大大是怎麼做的吧！

![](https://i.imgur.com/tM63zgI.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->