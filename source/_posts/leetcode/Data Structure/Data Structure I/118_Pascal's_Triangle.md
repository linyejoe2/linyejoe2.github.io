---
layout:     post
title:      "[LeetCode]118. Pascal's Triangle"
subtitle:   "Data Structure I"
date:       2022-06-02 10:55:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure]
---

## 敘述

>[Data Structure I 筆記撰寫計畫](https://linyejoe2.github.io/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

這是 `Data Structure I` 的第四天第一個題目，總共有兩題。

+ 難度: `Easy` 
+ 花費時間: 2小時
+ [題目](https://leetcode.com/problems/pascals-triangle/)

給你一個數字，回傳總列數等同這個數字的帕斯卡三角 (`Pascal's triangle`)

<!--more-->

>帕斯卡三角: 一個帕斯卡三角的下面每個值都是左上方跟右上方兩個值的合

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-  1 <= numRows <= 30

**Example 1:**

```=
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

**Example 2:**

```=
Input: numRows = 1
Output: [[1]]
```
</pre></details>

## 筆記

這又是一題考 `Dynamic Programming` 的題目。

這次寫的時候完全靠自己的感覺，沒想到第一次寫完就 run 過而且取得不錯的成績，我真的太開心啦~

#### 規律

DP 就是要先找規律，帕斯卡三角的規律就是，每下個 row 的值都是上面 row 的值位移一之後相加，像下面的例子:

```=
[1,3,3,1] 假設這行是帕斯卡三角的某行，那他的下一行就會是

    1 3 3 1
+     1 3 3 1
-------------
=   1 4 6 4 1
```

#### 優化規律

觀察一下上面的算式，我們可以推導出一個更優化的邏輯，就是，**每下一行的第二個值開始都會是他本身加上前面那個值**，像下面的例子:

```=
[1,3,3,1] 假設這行是帕斯卡三角的某行，那他的下一行就會是

index = 1 => value = 1 // 因為他是第一個值，所以不用修改，一定會是1
index = 2 => value = value + (index = 2-1 的 value) = 4
index = 3 => value = value + (index = 3-1 的 value) = 6
index = 4 => value = value + (index = 4-1 的 value) = 4
最後再補上 1 就會有下一行的值了。
= [1,4,6,4,1]
```

## 程式碼

```js=
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // 不管怎樣一定有 1
    let PascalsArr = [
        [1]
    ];

    for (let i = 0; i < numRows - 1; i++) {
        PascalsArr.push(getNextRow(PascalsArr[i]));
    }
    return (PascalsArr);
};

function getNextRow(Arr) {
    let tempArr = Arr.map((element, index, array) => {
        if (index != 0) {
            return element = element + array[index - 1];
        }
        return element;
    });
    tempArr.push(1);
    return (tempArr);
}

console.log(generate(5))
```

## 成績

![](https://i.imgur.com/EAPJzb5.png)


<!-- ##### 參考資料 -->