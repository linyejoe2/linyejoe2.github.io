---
layout:     post
title:      "[LeetCode]566. Reshape the Matrix"
subtitle:   "Data Structure I"
date:       2022-06-02 16:11:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第四天第二個題目，總共有兩題。

+ 難度: `Easy`
+ 花費時間: 1小時
+ [題目](https://leetcode.com/problems/reshape-the-matrix/)

> 在 MATLAB 裡有一個很好用的 function 叫做 `reshape` ，用途是把一個 `m x n matrix` 轉換成另一個不同的格式，但是資料是一樣的。

<!--more-->

傳入一個 `m x n matrix` 還有兩個數字，第一個數字代表 rows 的長度，第二個數字代表 columns 的長度，回傳轉換後的 matrix

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 100
- -1000 <= mat[i][j] <= 1000
- 1 <= r, c <= 300

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/04/24/reshape1-grid.jpg)

```=
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/04/24/reshape2-grid.jpg)

```=
Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
```
</pre></details>

## 筆記

原本陣列長怎樣不重要，只要陣列的 length 一樣，那就可以回傳他想要的東西。

這個題目我把他拆成幾部份:

#### 1. 例外處理

比較 `mat` 跟 `r` * `c` 有沒有一樣，如果不一樣，就直接回傳原陣列。

#### 2. 扁平化陣列

使用 [`Array.prototype.flat()`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 攤平陣列

#### 3. 放入資料

把攤平後的陣列塞進他想要的 matrix 裡，然後回傳。



## 程式碼

```js=
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    var reshapedMat = [];

    var flatedMat = mat.flat(Infinity);

    if (flatedMat.length != r * c) return mat;

    for (var i = 0; i < r; i++) {
        reshapedMat.push([]);
        for (var j = 0; j < c; j++) {
            reshapedMat[i].push(flatedMat.shift());
        }
    }
    return reshapedMat;
};
```

## 成績

![](https://i.imgur.com/ARIrwT2.png)


<!-- ##### 參考資料 -->