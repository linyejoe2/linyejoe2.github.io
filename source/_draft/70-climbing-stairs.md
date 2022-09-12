---
layout:     post
title:      "[LeetCode]70. Climbing Stairs"
subtitle:   "Algorithm I"
date:       2022-09-12
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Math, Dynamic Programming, Memoization]
categories: [LeetCode, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第十二天第一個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間:
+ [題目](https://leetcode.com/problems/climbing-stairs/)

你面前有一個 `n` 階的樓梯，你一次可以走一步或是兩步，請算出你總共有幾種爬法。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

-   `1 <= n <= 45`

**Example 1:**

<!-- ![example-image-1](https://assets.leetcode.com/uploads/2019/02/16/oranges.png) -->

```=
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

<!-- ![example-image-2](https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg) -->

```=
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

</details>

<details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

DP 的重點就是找規律，所以通常我會先沙盤推演一波找規律，如果我沒有什麼想法的話。

下面是我沙盤推演 `test case` 從 1 ~ 6

```rust
1 // n = 1, count = 1
1
2 // n = 2, count = 2
11 2
3 // n = 3, count = 3
111 12 21
4 // n = 4, count = 5 從這步開始可以看出他有斐波那契的跡象
1111 211 121 112 22
5 // n = 5, count = 8
11111 2111 1211 1121 1112 221 212 122
6 // n = 6, count = 13
111111 21111 12111 11211 11121 11112 2211 2121 2112 1221 1122 1212 222
```

由上方沙盤推演就可以得出，答案就會等於對 n 做斐波那契。

</details>

## 筆記

這題只要有找到規律，就會知道這題要用斐波那契去做。

斐波那契指的是: 下一個值 = 上兩個值相加。

```rust
// 第一階，走一步
1 ways
// 第二階，可以走兩步或是走兩次一步
2 ways
// 第三階開始，用斐波那契對前兩個數字相加
1 + 2 = 3 ways
// 第四階
2 + 3 = 5 ways
// 第五階
3 + 5 = 8 ways
```

TypeScript 實做:

```TS=
function climbStairs(n: number): number {
  let a = 1, b = 1, c = 1;
  for (let i = 0; i < n; i++) {
    c = a + b;
  }
};
```

## 成績

![score-image](https://i.imgur.com/KYXTmMZ.png)

<!-- ##### 參考資料 -->

<!-- + [discuss](https://leetcode.com/problems/01-matrix/discuss/1369741/C%2B%2BJavaPython-BFS-DP-solutions-with-Picture-Clean-and-Concise-O(1)-Space) -->
