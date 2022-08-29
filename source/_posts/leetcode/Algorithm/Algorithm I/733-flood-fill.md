---
layout:     post
title:      "[LeetCode]733. Flood Fill"
subtitle:   "Algorithm I"
date:       2022-08-29
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Array, Depth-First Search, Breadth-First Search, Matrix]
---

>[Algorithm I 筆記撰寫計畫](https://linyejoe2.github.io/2022/06/13/leetcode/Data%20Structure/Data%20Structure%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第七天第一個題目，總共有兩題。

+ 難度: `Easy`
+ 花費時間: 20 min
+ [題目](https://leetcode.com/problems/flood-fill/)

給你一個 `MxN Matrix` 還有一個指定的點位 (`sr`, `sc`) 從點位開始，相鄰的點位如果跟原點位同數字的話，就把相鄰的點位替換成目標數字。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

+ `m == image.length`
+ `n == image[i].length`
+ `1 <= m, n <= 50`
+ `0 <= image[i][j], color < 216`
+ `0 <= sr < m`
+ `0 <= sc < n`

**Example 1:**

![example-1-jpg](https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg)

```=
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
```

**Example 2:**

```=
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.
```

</pre></details>

## 筆記

圖型搜索法的練手題，基本沒難度，就是讓你練習怎麼去做搜尋的，這題的題意要用廣度或是深度優先搜尋都沒問題。

基本邏輯如下:

1. 看當前這格是不是跟起點一樣
   + 是: 把這格換成目標數字，然後走下步
   + 不是: 跳出
2. 把 sr, sc 分別加減等於四個方向的下一個目標，然後檢查他。

這題有一個重點是，由於替換後的數字就不會等於原數字了，所以基本上題目已經**強制避免讓你走到走過的地方**，這在很多高級題目上是不會有的。

## JS DFS Recursion

```JS=
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function (image, sr, sc, color) {
    // 錯誤處理
    if (image[sr][sc] === color) return image;

    // 跑廣度優先
    const src = moveToNext(image, sr, sc, color, image[sr][sc]);

    return (src ? src : image);
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} targetNum
 * @param {number} startNum
 */
function moveToNext(image, sr, sc, targetNum, startNum) {
    // 如果這格不是原數字，就別再往下查了
    if (image[sr] === undefined || image[sr][sc] === undefined || image[sr][sc] != startNum) return false;

    //// 如果是，就替換，然後再查他四周
    // 替換
    image[sr][sc] = targetNum;
    // 查他四周
    moveToNext(image, sr + 1, sc, targetNum, startNum);
    moveToNext(image, sr, sc + 1, targetNum, startNum);
    moveToNext(image, sr - 1, sc, targetNum, startNum);
    moveToNext(image, sr, sc - 1, targetNum, startNum);

    return image;
};
```

## Java BFS iteration

```Java=
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        if(image[sr][sc] == color) return image;
        
        Queue<int[]> searchQueue = new LinkedList<int[]>();
        searchQueue.offer(new int[]{sr, sc});
        
        int startNum = image[sr][sc];
        
        while (!searchQueue.isEmpty()) {
            int[] nowNum = searchQueue.poll();
            if (image[nowNum[0]][nowNum[1]] != color) {
                // 把當前值換成目標數字
                image[nowNum[0]][nowNum[1]] = color;
                
                // 添加周圍的目標到 Queue 裡
                if (_validator(image, nowNum[0] + 1, nowNum[1], startNum)) searchQueue.offer(new int[]{nowNum[0] + 1, nowNum[1]});
                if (_validator(image, nowNum[0], nowNum[1] + 1, startNum)) searchQueue.offer(new int[]{nowNum[0], nowNum[1] + 1});
                if (_validator(image, nowNum[0] - 1, nowNum[1], startNum)) searchQueue.offer(new int[]{nowNum[0] - 1, nowNum[1]});
                if (_validator(image, nowNum[0], nowNum[1] - 1, startNum)) searchQueue.offer(new int[]{nowNum[0], nowNum[1] - 1});
            }
        }
        
        return image;
    }
    
    // 檢查下一格有沒有必要查
    private boolean _validator(int[][] arr, int sr, int sc, int startNum) {
        if (sr < 0 || sc < 0 || // 小於陣列
            sr >= arr.length || sc >= arr[0].length || // 大於陣列
           arr[sr][sc] != startNum // 不是我們要查的目標
           ) return false; 
        return true;
    }
}
```

## 成績

![](https://i.imgur.com/DOohjYK.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

</pre></details>

<!-- ##### 參考資料 -->