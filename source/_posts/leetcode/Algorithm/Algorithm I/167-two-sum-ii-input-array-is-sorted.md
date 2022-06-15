---
layout:     post
title:      "[LeetCode]167. Two Sum II - Input Array Is Sorted"
subtitle:   "Algorithm I"
date:       2022-06-15 13:51:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Two Pointers]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第三天第二個題目，總共有兩題。

+ 難度: `Medium` 
+ 花費時間: 2hr
+ [題目](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

傳入一個正序排列的陣列(numbers)和一個目標數字(target)，找出陣列裡的兩個數字相加剛好等於 target ，然後回傳這兩個數字索引值組成的陣列。

<!--more-->



<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `2 <= numbers.length <= 3 * 104`
-   `-1000 <= numbers[i] <= 1000`
-   `numbers` is sorted in **non-decreasing order**.
-   `-1000 <= target <= 1000`
-   測試陣列只會剛好有一個答案



**Example 1:**

```=
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: 2 + 7 = 9 所以回傳 2 的索引值跟 7 的索引值 = [1, 2]
```

**Example 2:**

```=
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

**Example 3:**

```=
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```
</pre></details>

## 筆記

由於題目已經把陣列由大到小排好了，
所以使用 Two-pointers 來實做，思路如下:

+ Pointer 1: 一開始先指定陣列裡的最小值，如果兩個 Pointer 指的 value 相加小於 target ，那麼就把這個指標往後推(+1)。
+ Pointer 2: 一開始先指定陣列裡的最大值，如果兩個 Pointer 指的 value 相加大於 target ，那麼就把這個指標往前推(-1)。

如果兩個加起來等於 target ，那就回傳。

## 程式碼

```js=
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let pointer = 0,
        pointer2 = numbers.length - 1;
    let half = Math.floor(target / 2);

    while (true) {
        if (numbers[pointer] + numbers[pointer2] > target) {
            pointer2--;
        } else if (numbers[pointer] + numbers[pointer2] < target) {
            pointer++;
        } else return [pointer, pointer2];
    }
};
```

## 成績

![](https://i.imgur.com/kZ5HgK4.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->