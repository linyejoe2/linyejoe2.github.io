---
layout:     post
title:      "[LeetCode]283. Move Zeroes"
subtitle:   "Algorithm I"
date:       2022-06-15 10:15:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Two Pointers]
categories: [LeetCode, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第三天第一個題目，總共有兩題。

+ 難度: `Easy` 
+ 花費時間: 30min
+ [題目](https://leetcode.com/problems/move-zeroes/)

傳入一個包含數字的陣列(nums)，把所有的 0 排到最後，同時保持原排序。

<!--more-->

必須 in-place 修改 nums

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= nums.length <= 104`
-   `-231 <= nums[i] <= 231 - 1`


**Example 1:**

```=
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**

```=
Input: nums = [0]
Output: [0]
```
</pre></details>

## 筆記

### 第一種作法: JS 內建函式

思路如下
1. 定義 numsLength 儲存原陣列大小。
2. 把 nums 裡的 0 去掉。
3. 跑迴圈把 0 塞回到 nums 的最後，直到 nums.length == numsLength

使用到了 JS 內建函式:

1. [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter): 過濾掉陣列裡的 0
2. [Spread syntax \(...\)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax): 展開運算子，可以把陣列展開。
3. [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice): 在此處的用法是把刪除 0 之後的陣列塞回原陣列，來達到 in-place。

```js=
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // 定義 numsLength 儲存原陣列大小。
    let numsLength = nums.length;

    // 把 nums 裡的 0 去掉。
    nums.splice(0, nums.length, ...nums.filter(element => element != 0))

    // 跑迴圈把 0 塞回到 nums 的最後，直到 nums.length == numsLength
    while (numsLength > nums.length) {
        nums.push(0);
    }

    // console.log(nums)
};
```

### 第二種作法: Two Pointers

> 要注意，這題可以這樣寫是因為題目沒有要求 0 的順序，因為用這種寫法實際上最後結果的 0 不是按照原本的排序的。

遍歷一次陣列，把所有不是零的值跟延遲指標交換，這樣就完成了。

+ Pointer 1: 主指標(mainPointer): 遍歷整個陣列。
+ Pointer 2: 延遲指標(delayPointer): 指向最後一個非零元素該去的位置，每當一個非零元素跟他原本的指向的元素交換，就後推一位。

```js=
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    // 主指標跑整個 nums, 延遲指標跑所有的非 0 element
    let mainPointer = 0,
        delayPointer = 0,
        tempNum;

    while (mainPointer < nums.length) {
        // 只要這個 element 不是 0 ，那麼就要把這個值跟最前面 delayPointer 指的 element 交換
        if (nums[mainPointer] != 0) {

            // 簡單的交換步驟
            tempNum = nums[delayPointer];
            nums[delayPointer] = nums[mainPointer];
            nums[mainPointer] = tempNum;

            delayPointer++
        }

        mainPointer++
    }

    // console.log(nums);
};
```

## 成績

JS 內建函式: 因為沒有使用 Two Pointers ，所以可以明顯的看出空間複雜度非常的糟糕。
![](https://i.imgur.com/j1SNuNV.png)

Two Pointers: 
![](https://i.imgur.com/oVeH5BE.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->