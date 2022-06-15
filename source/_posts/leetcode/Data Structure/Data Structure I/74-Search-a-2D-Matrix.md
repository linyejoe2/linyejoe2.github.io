---
layout:     post
title:      "[LeetCode]74. Search a 2D Matrix"
subtitle:   "Data Structure I"
date:       2022-06-06
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第五天第二個題目，總共有兩題。

+ 難度: `Medium`
+ 花費時間: 10分鐘
+ [題目](https://leetcode.com/problems/search-a-2d-matrix/)

傳入一個 `mxn matrix` 與一個目標 ，你要寫出一個盡量高效的算法在 `mxn matrix` 裡找出他要的目標，並且只要回傳目標是否存在， `mxn matrix` 有以下特性:
+  `mxn matrix` 裡的所有值都是由左到右順序排序的。
+  每一行的第一個值都會比上一行的最後一個值大。

<!--more-->


<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `m == matrix.length`
-   `n == matrix[i].length`
-   `1 <= m, n <= 100`
-   `-104 <= matrix[i][j], target <= 104`

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/05/mat.jpg)



**Example 2:**

![](https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg)

```=
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```
</pre></details>

## 筆記

看到他上面的特性我就很有想法，遍歷外圈陣列，比較每個內圈陣列的最後一個值，直到那個值比 `target` 大，再進入內圈找有沒有值，如果沒有值就回傳 `true` ，有就回傳 `false` 。

#### 範例

```=
Input: 
matrix = 
[[1,3,5,7],
[10,11,16,20],
[23,30,34,60]], 
target = 11
```

我們要在這個 matrix 裡面找 11:
1. 第一個陣列最後一個值: 7
2. 7 < 11 => 跳過這個陣列
3. 第二個陣列最後一個值: 20
4. 20 > 11 => 遍歷這個陣列:
    + 如果有找到 11 => 回傳 `true`
    + 如果沒有找到 11 => 回傳 `false`


## 程式碼

```js=
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++){
        if (matrix[i][matrix[i].length - 1] == target) return true;
        if (matrix[i][matrix[i].length - 1] > target){
            for (let j =  0; j < matrix[i].length;j++){
                if (matrix[i][j] == target) return true;
            }
            return false;
        } 
    }
    return false;
};
```

## 成績

![](https://i.imgur.com/tSDmWAX.png)


<!-- ##### 參考資料 -->