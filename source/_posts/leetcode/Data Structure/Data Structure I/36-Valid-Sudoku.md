---
layout:     post
title:      "[LeetCode]36. Valid Sudoku"
subtitle:   "Data Structure I"
date:       2022-06-06
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure]
categories: [LeetCode, Data Structure I]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第五天第一個題目，總共有兩題。

+ 難度: `Medium`
+ 花費時間: 1小時
+ [題目](https://leetcode.com/problems/valid-sudoku/)

傳入一個 `9X9 Sudoku board` (9x9 數獨)，然後你要判斷傳入的數獨是否合法，合法傳出 `true` ， 不合法傳出 `false` 。

<!--more-->

合法判斷:
1. 每一行的 1-9 數字都不能重複，而要剛好可以填滿 1-9 。
2. 每一列的 1-9 數字都不能重複，而要剛好可以填滿 1-9 。
3. 每 `3X3 sub-boxes` 的 1-9 數字都不能重複，而要剛好可以填滿 1-9 。

> 數獨可以是合法但是無解的，本題是要判斷合不合法，不用判斷有沒有解。

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `board.length == 9`
-   `board[i].length == 9`
-   `board[i][j]` is a digit `1-9` or `'.'`.

**Example 1:**

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

```=
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```

**Example 2:**

```=
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: 左上角 3x3 的方格內有重複的 8 。
```
</pre></details>

## 筆記

可以使用 JS 的 `Set` ， `Set` 的功能是可以存入不重複的值，然後再用 `Set.prototype.has()` 這個函式去判斷是否有存在值，效用類似 JS 裡的 `Array.prototype.indexOf() = -1` 。

遍歷一次陣列，在遍歷的同時就把每個值的資料存入 `Set` 裡 ，要注意幾件事:
1. 每個值同時都是一行、一列、一個 `sub-boxes` 的值，所以要存入三次，判斷三次。
2. 避開值為 . 的欄位。

## 程式碼

```js=
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const chkSet = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') { // 避開值為 . 的欄位。
                // 判斷是否有重複(chkSet 內已經有值) 就回傳 false 。
                if (chkSet.has(j + 'row' + board[i][j]) ||
                    chkSet.has(i + 'col' + board[i][j]) ||
                    chkSet.has(parseInt(i / 3) + ":" + parseInt(j / 3) + 'box' + board[i][j])) {
                    // console.log((j + 'row' + board[i][j]) + chkSet.has(j + 'row' + board[i][j]));
                    // console.log((i + 'col' + board[i][j]) + chkSet.has(i + 'col' + board[i][j]));
                    // console.log((parseInt(i / 3) + ":" + parseInt(j / 3) + 'box' + board[i][j]) + chkSet.has(parseInt(i / 3) + parseInt(j / 3) + 'box' + board[i][j]));
                    return false;

                }
                // 如果通過判斷，就把這次的值加進去
                chkSet.add(j + 'row' + board[i][j]); // ex: 0row5false
                chkSet.add(i + 'col' + board[i][j]); // ex: 0col5false
                chkSet.add(parseInt(i / 3) + ":" + parseInt(j / 3) + 'box' + board[i][j]); // ex: 0:0box5false
            }
        }
    }
    return true;
};
```

## 成績

![](https://i.imgur.com/SwMATrw.png)

<!-- ##### 參考資料 -->