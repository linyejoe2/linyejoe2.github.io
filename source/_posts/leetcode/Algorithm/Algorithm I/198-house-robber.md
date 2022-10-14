---
layout:     post
title:      "[LeetCode]198. House Robber"
subtitle:   "Algorithm I"
date:       2022-09-14
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Array, Dynamic Programming, Recursive]
categories: [LeetCode, Algorithm I]
---

> [Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/#09-x2F-13-Day-12-Dynamic-Programming) 第十二天第二題，共三題。

+ 難度: `Medium`
+ 花費時間: 3 hr
+ 題目: [198. House Robber](https://leetcode.com/problems/house-robber/)

你是一個專業強盜，今晚要搶一排住戶，這排住戶有相連報警系統，如果同時有兩間相鄰的屋子被搶，就會報警。

給你一個包含每棟住戶家裡有多少錢的陣列，請算出在不觸動警報下，你最多可以搶到多少錢。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ `1 <= nums.length <= 100`
+ `0 <= nums[i] <= 400`

**Example 1:**

<!-- ![example-image-1](https://assets.leetcode.com/uploads/2019/02/16/oranges.png) -->

```=
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

**Example 2:**

<!-- ![example-image-2](https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg) -->

```=
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
```

</details>

<details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

原本做到了逐步更新，但最後有點問題，看了下評論區的解答。

------------ 有問題的逐步更新的做法 --------------

```rust
// case 1
[5, 2, 3, 4, 2, 4] // input
[5,       4,    4] // = 13

// case 2
[1, 3, 9, 8, 1, 3] // input
[   3,    8,    3] // = 14
```

case 1 我們可以發現，答案不一定是純奇數或是偶數(不用每隔一間都搶)

case 2 我們可以發現，就算是陣列裡最大的數字( 9 )也不一定會被搶到。

我想用逐步更新的方式做這題

最後這個做法被下面這個 test case 給擊敗了

`[2, 3, 2]` 由於我最後做出來是 `[0, 3, 0]` 所以失敗了。

```TS=
function rob(nums: number[]): number {
  let robbeds: number[] = [nums[0]];

  // 正向遍歷，如果準備要搶的下一家比現在已經搶完的有錢，就把現在這間的錢還回去，改搶下面那間。
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > robbeds[i - 1]) {
      // 如果這間比較有錢，就把上間的錢還回去，改搶這間。
      robbeds[i - 1] = 0;
      robbeds[i] = nums[i];
    } else {
      // 如果這間比較沒錢，那就不搶了。
      robbeds[i] = 0;
    }
  }

  // 反向遍歷，再反的檢查一次有沒有更多錢的家，有就去搶，然後一樣把搶完的錢還回去。
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] >= robbeds[i + 1]) {
      robbeds[i + 1] = 0;
      robbeds[i] = nums[i];
    }
  }

  // 最後再正向檢查一次，
  for (let i = 0; i < nums.length; i++) {
    // 如果有連續三家都沒有搶的，就去搶中間那家。
    if (robbeds[i] === 0 && robbeds[i] === robbeds[i - 1] && robbeds[i] === robbeds[i + 1]) robbeds[i] = nums[i];

    // 頭尾兩家分別檢查。
    if (i === 0 && robbeds[i] === 0 && robbeds[i + 1] === 0) robbeds[i] = nums[i];
    if (i === nums.length - 1 && robbeds[i] === 0 && robbeds[i - 1] === 0) robbeds[i] = nums[i];
  }

  console.log(robbeds);
  return robbeds.reduce((sum, cur) => sum + cur, 0);
};
```

</details>

## 筆記

這題一樣要找規律，我有找到 **比較搶的錢那個比較多就去搶哪個** ，但是我沒有 **把搶的錢統計** 起來。

正確的規律是，如果我搶了現在這家 (`i`) ，那麼我就不能搶前面那家 (`i - 1`) ，但是我可以放心的搶前面第二家 (`i - 2`) ，並且，我可以 **留下前面第二家開始往前算所有我搶過的錢**，這是重點的部分。

所以，你可以想像成，小偷從第一間開始走，然後有搶就收進包包，收到最後，把包包裡有多少錢回傳即可。

這部分參考了[評論區的討論][discuss]，我覺得寫得很好。

```TS=
function rob(nums: number[], i: number = 1): number {
  // 如果整排都搶完了，就回家。
  if (i === nums.length) return nums[nums.length];
  /**
   * 如果要搶現在這間，就要放棄前面那間搶完的錢。
   * 相反的，如果搶了前面那間，則不能搶現在這家，所以總共搶了多少會跟走到上一間房時一樣。
   */
  nums[i] = Math.max((nums[i - 2] ? nums[i - 2] : 0) + nums[i], nums[i - 1]);
  
  // 遞迴
  return rob(nums, i + 1);
};

```

## 成績

![score-image](https://i.imgur.com/kcXtKez.png)

##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.
