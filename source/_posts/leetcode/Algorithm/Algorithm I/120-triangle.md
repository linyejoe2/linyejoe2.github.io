---
layout:     post
title:      "[LeetCode]120. Triangle"
subtitle:   "Algorithm I"
date:       2022-09-21
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Array, Dynamic Programming, Iteration]
categories: [LeetCode, Algorithm I]
---

> [Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/#09-x2F-13-Day-12-Dynamic-Programming) 第十二天第三題，共三題。

+ 難度: `Medium`
+ 花費時間: 3 hr
+ 題目: [120. Trangle](https://leetcode.com/problems/triangle/)

給你一個用巢狀陣列表示的數字三角形，你不知道三角形有多大，從三角形頭部走到底部，然後把走過的所有數字加起來，請問哪個路徑最終加總的數字最小。

<!--more-->

每次只能走這個當前位置的下面，或是下面的前面，如下面的範例：

```rust
[[1],
 [2, 3]
 [4, 5, 1]]
```

假設目前走到 `2` 那麼接著只能走 `4` (當前位置的下面) 或是 `5` (當前位置下面的前面)
所以上面這個例子的答案其實是 `1 + 3 + 1 = 5`

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ `1 <= triangle.length <= 200`
+ `triangle[0].length == 1`
+ `triangle[i].length == triangle[i - 1].length + 1`
+ `-104 <= triangle[i][j] <= 104`

**Example 1:**

<!-- ![example-image-1](https://assets.leetcode.com/uploads/2019/02/16/oranges.png) -->

```=
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
```

**Example 2:**

<!-- ![example-image-2](https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg) -->

```=
Input: triangle = [[-10]]
Output: -10
```

</details>

## 筆記

這題一樣要找規律，這題的規律是，從最上面不知道下層的狀況，來看下面的例子：

```rust
[[1],
 [2, 3]
 [4, 5, 1]]
```

最直覺的從上面開始遍歷，然後選最小的走，會選到 `1 + 2 + 4 = 7` ，但其實 `1 + 3 + 1 = 5` 才是最小的路徑。

所以如果我們要解決最上面不知道下層的狀況，有幾種可能的做法：

1. 窮舉：
   我不知道下面的狀況沒關係，我就全部都走一遍，然後存起來最後比大小。
   這種做法是可以，但效率太差，且有更好的做法。
2. 從底部開始做：
   既然我一開始就知道底部的數字是多少了，我是不是可以從 **最底部開始找最小** 的往上加。

順著這個思路，再綜合題目的要求，可以再推導出，所謂 **最底部開始找最小** 是針對每個上層元素來說最小的底層元素。
所以就可以整理出以下做法。

1. 從最後第二排開始往最上排做 for
2. 假設每排的每個元素 = i , 下排的元素 = i'
   + `i += Math.min(i', i' + 1)`
   + i 會等於自己加上下排兩個元素裡找最小的。
3. 一直 for 到最上面一排，回傳最上層的元素(只有一個)。

```TS=
function minimumTotal(triangle: number[][]): number {
  // Catch Execption
  if (triangle.length === 1) return triangle[0][0];

  // Iteration update cell value till reach the top of triangle.
  for (let row = triangle.length - 2; row > 0; row--) {
    for (let col = 0; col < triangle[row].length ; col ++) {
      // update by the less one
      triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col]);
    }
  }

  // through the triangle was been update, than the top of triangle shoud be the ans.
  return triangle[0][0];
};

```

## 成績

![score-image](https://i.imgur.com/POTW0yi.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
