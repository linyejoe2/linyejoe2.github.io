---
layout:     post
title:      "[LeetCode]35. Search Insert Position"
subtitle:   "Algorithm I"
date:       2022-06-13 17:48:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Binary Search]
categories: [LeetCode, Algorithm, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第一天第三個題目，總共有三題。

+ 難度: `Easy` 
+ 花費時間: 1hr
+ [題目](https://leetcode.com/problems/search-insert-position/)

傳入一個陣列包含由小到大排序好的不重複數字，和一個目標，如果目標在陣列中，回傳目標的 index ，如果不在，回傳目標應該要插入的 index 。 

<!--more--> 

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= nums.length <= 104`
-   `-104 <= nums[i] <= 104`
-   `nums` contains **distinct** values sorted in **ascending** order.
-   `-104 <= target <= 104`

**Example 1:**

```=
Input: nums = [1,3,5,6], target = 5
Output: 2
```

**Example 2:**

```=
Input: nums = [1,3,5,6], target = 2
Output: 1
```

**Example 3:**

```=
Input: nums = [1,3,5,6], target = 7
Output: 4
```
</pre></details>

## 筆記

運用 Binary Search 即可:

1. 設定左邊(left)為 0 ，右邊(right)為 nums.length - 1 。
2. 只要 right > left 就繼續找。
3. 算出中點(middle) = (right + left) / 2
4. 比較 nums[mid] 跟 target:
    + nums[mid] < target: 把左邊移到中間 + 1
    + nums[mid] > target: 把右邊移到中間
    + nums[mid] = target: 回傳 mid
5. 比較 nums[right] < target: 回傳 right + 1 
    + 因為如果 target 不存在在陣列，那麼要回傳他應該插入哪，
    + 若最後的 target 比 nums[right] 大，那他應該插在 right 後面，所以要 + 1
    + 若沒有 他應該插在 right 的位置，(不用做判斷，會被第 6 步接住。)
6. 回傳 right


## 程式碼

```js=
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        // console.log('left: ' + left);
        // console.log('right: ' + right);
        // console.log('mid: ' + mid);
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid 
        } else if (nums[mid] == target) return mid;
    }
    if (nums[right] < target) return right + 1;

    return right;
};
```

## 成績

![](https://i.imgur.com/StUXdBd.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

</pre></details>

<!-- ##### 參考資料 -->