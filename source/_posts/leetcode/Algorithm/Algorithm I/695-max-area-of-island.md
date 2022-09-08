---
layout:     post
title:      "[LeetCode]695. Max Area of Island"
subtitle:   "Algorithm I"
date:       2022-08-29
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Array, Depth-First Search, Breadth-First Search, Matrix, Union Find]
categories: [LeetCode, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第七天第二個題目，總共有兩題。

+ 難度: `Medium`
+ 花費時間: 1.5 hr
+ [題目](https://leetcode.com/problems/max-area-of-island/)

給你一個 `MxN Matrix` `grid` ，找出裡面最大的孤島，然後回傳孤島的大小。

<!--more-->

`grid` 裡只會有 0 跟 1 ， 0 代表海， 1 代表陸地。

孤島必須滿足四邊都是海。

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

+ `m == grid.length`
+ `n == grid[i].length`
+ `1 <= m, n <= 50`
+ `grid[i][j]` is either `0` or `1`.

**Example 1:**

![example-1-jpg](https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg)

```=
Input: grid = [
            [0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
```

**Example 2:**

```=
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
```

</pre></details>

## 筆記

1. 遍歷陣列找到有 1 的
2. 對 1 做搜尋找出他的大小，然後更新答案
3. 每塊走過的地都塞進 set 裡，等等直接比有塞過就跳過。
4. 回傳答案

## 程式碼

```js=
function maxAreaOfIsland(grid: number[][]): number {
  let row = 0;
  let col = 0;

  let maxAreaLand = 0;

  // key 是 row ， vol 是 col
  let visitedMap: Map<number, number[]> = new Map;

  for (row; row < grid.length; row++) {
    for (col; col < grid[0].length; col++) {
      // 如果是海，就跳過
      if (grid[row][col] === 0) continue;

      // 跑遞迴找最大
      maxAreaLand = Math.max(dfs(grid, row, col, visitedMap), maxAreaLand);
    }
    col = 0;
  }

  return maxAreaLand;
};

function dfs(grid: number[][], row: number, col: number, visitedMap: Map<number, number[]>, count: number = 0): number {
  // 如果是海，或是有看過，就跳過
  if (!grid[row] || !grid[row][col] || grid[row][col] === 0 || !chkVisited(visitedMap, row, col)) return 0;

  count++;
  count += dfs(grid, row + 1, col, visitedMap);
  count += dfs(grid, row - 1, col, visitedMap);
  count += dfs(grid, row, col + 1, visitedMap);
  count += dfs(grid, row, col - 1, visitedMap);

  return count;
}

function chkVisited(visitedMap: Map<number, number[]>, row: number, col: number): boolean {
  // 如果已經看過他，就跳過
  if (visitedMap.get(row) && visitedMap.get(row)?.indexOf(col) != -1) return false;

  // 加入走過的 Map
  if (!visitedMap.get(row)) {
    visitedMap.set(row, [col]);
  } else {
    visitedMap.get(row)?.push(col);
  }
  return true;
}
```

## 成績

![](https://i.imgur.com/kxv7HLR.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

</pre></details>

<!-- ##### 參考資料 -->