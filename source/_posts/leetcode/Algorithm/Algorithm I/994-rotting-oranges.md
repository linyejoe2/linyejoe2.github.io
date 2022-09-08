---
layout:     post
title:      "[LeetCode]994. Rotting Oranges"
subtitle:   "Algorithm I"
date:       2022-09-07
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Array, Dynamic Programming, Breadth-First Search, Matrix]
categories: [LeetCode, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第九天第二個題目，總共有兩題。

+ 難度: `Medium`
+ 花費時間: 2 hr
+ [題目](https://leetcode.com/problems/01-matrix/)

給你一個 `MxN binary matrix` `mat` ，返回一個 `MxN matrix` 計算每個非零的值跟最近的零的距離，然後取代在他的值上。

上下左右才算相鄰，側面的就算要走兩格了。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ `m == mat.length`
+ `n == mat[i].length`
+ `1 <= m, n <= 104`
+ `1 <= m * n <= 104`
+ `mat[i][j]` is either `0` or `1`.
+ There is at least one `0` in `mat`.

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg)

```=
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
```

**Example 2:**

![example-image-2](https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg)

```=
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
```

</details>

<details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

==========bfs 解法==========

1. 遍歷陣列
   + 把 1 改成 -1
   + 把 2 改成 -2
2. 遍歷陣列
   + 遇到 -2 就進入 bfs 函式
3. 遍歷陣列 
   + 如果還有 -1 就回傳 false
   + 回傳最大值

bfs 函式
1. bfs 找上下左右
2. 如果是 -2 就直接改現在的大小
3. 如果不是 -2 就比大小，取最小的
   1. 假設最小的是他現在的值，就不繼續往下找
   2. 假設最小的是 root 現在走到的值，就繼續找

</details>

## 筆記

### BFS 更新走的步數到 `Matrix` 裡

+ 對每個腐爛的橘子做 BFS ，從腐爛的那顆開始往外擴散，每走完一圈都把腐爛到的橘子記上腐爛的輪數。
+ 遍歷陣列
  + 找到 `Matrix` 裡腐爛輪數最大的橘子，回傳輪數
  + 或是找到還沒腐爛的，回傳 -1 代表沒有腐爛完全

範例

```rust
// 傳入值
[[2,1,2,1,1]
,[1,1,1,1,0]
,[2,1,0,1,1]
,[1,1,1,1,0]]

// 開始前把 2 換成 -2 ， 1 換成 -1 ，避免影響計算。
[[-2,-1,-2,-1,-1]
,[-1,-1,-1,-1, 0]
,[-2,-1, 0,-1,-1]
,[-1,-1,-1,-1, 0]]

// 從第一顆橘子開始汙染，所有被汙染到的橘子都會填上被汙染的回合數 (第一顆橘子本身已經被汙染了，所以是0)
[[ 0, 1,-2, 5, 6]
,[ 1, 2, 3, 4, 0]
,[-2, 3, 0, 5, 6]
,[ 5, 4, 5, 6, 0]]

// 從第二顆橘子開始汙染，
// 現在要開始比大小，如果他比較小，代表他的污染速度比第一顆橘子汙染的還快，所以他會先汙染到，
// 如果他比較大，代表他會比較較晚才汙染到，所以就不繼續汙染下去了
[[ 0, 1, 0, 1, 2]
,[ 1, 2, 1, 2, 0]
,[-2, 3, 0, 3, 6]
,[ 5, 4, 5, 4, 0]]

// 從第三顆橘子開始汙染，
// 繼續比大小
[[ 0, 1, 0, 1, 2]
,[ 1, 2, 1, 2, 0]
,[ 0, 1, 0, 3, 6]
,[ 1, 2, 3, 4, 0]]

// 最後沒有可以汙染的橘子了，開始計算最大步數，同時檢查有沒有還沒被汙染到的橘子。
[[ 0, 1, 0, 1, 2]
,[ 1, 2, 1, 2, 0]
,[ 0, 1, 0, 3, 6]
,[ 1, 2, 3, 4, 0]]
```

TypeScript 實做:

```TS=
function orangesRotting(grid: number[][]): number {
  // key is row, val is Array of col in this row.
  let visitedMap: Map<number, number[]>;

  function chkVisited(row: number, col: number): boolean {
    // chk if has val than return visited.
    if (visitedMap.get(row) && visitedMap.get(row)?.indexOf(col) != -1) return true;

    //add this cell into visitedMap.
    if (visitedMap.has(row)) {
      visitedMap.get(row)?.push(col);
    } else {
      visitedMap.set(row, [col]);
    }

    return false;
  }

  function eatting(row: number, col: number, preEatArr: number[][] = [[row, col, 0]]): void {
    // validate
    if ((grid[row] && grid[row][col]) && // legal and not 0
      grid[row][col] != -2 && // not rottened
      // is fresh or previous path count is bigger than now road
      (grid[row][col] === -1 || grid[row][col] > preEatArr[0][2]) &&
      !chkVisited(row, col) // never visite
    ) {
      // change path count
      grid[row][col] = preEatArr[0][2];

      // push preEatCell into path list
      preEatArr.push([row - 1, col, preEatArr[0][2] + 1]);
      preEatArr.push([row, col + 1, preEatArr[0][2] + 1]);
      preEatArr.push([row + 1, col, preEatArr[0][2] + 1]);
      preEatArr.push([row, col - 1, preEatArr[0][2] + 1]);

      // take this cell out 
      preEatArr.shift();

      while (preEatArr.length > 0) {
        // find path
        eatting(preEatArr[0][0], preEatArr[0][1], preEatArr);
      }
    }
    // take this cell out, close this path
    preEatArr.shift();
  }

  // iterate first time to reset cell num
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) grid[row][col] = -1;
      if (grid[row][col] === 2) grid[row][col] = -2;
    }
  }

  // iterate second time to do bfs
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === -2) {
        grid[row][col] = 1
        visitedMap = new Map;
        eatting(row, col);
      }
    }
  }

  // iterate third time to take big path
  let bigPath = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // if have fresh orange return -1
      if (grid[row][col] === -1) return -1;

      // compare for the biggest num
      bigPath = Math.max(bigPath, grid[row][col]);
    }
  }

  return bigPath;
};

```

## 成績

![score-image](https://i.imgur.com/KYXTmMZ.png)

<!-- ##### 參考資料 -->

<!-- + [discuss](https://leetcode.com/problems/01-matrix/discuss/1369741/C%2B%2BJavaPython-BFS-DP-solutions-with-Picture-Clean-and-Concise-O(1)-Space) -->
