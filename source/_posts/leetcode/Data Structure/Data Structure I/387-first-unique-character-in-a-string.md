---
layout:     post
title:      "[LeetCode]387. First Unique Character in a String"
subtitle:   "Data Structure I"
date:       2022-06-07 09:30:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure]
categories: [LeetCode, Data Structure, Data Structure I]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第六天第一個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 1小時
+ [題目](https://leetcode.com/problems/first-unique-character-in-a-string/)

給你一個字串，找到裡面第一個沒有重複的字並且回傳他的 `index` ，如果不存在，那就回傳 `-1`

<!--more-->


<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= s.length <= 105`
-   `s` consists of only lowercase English letters.

**Example 1:**


```=
Input: s = "leetcode"
Output: 0
```

**Example 2:**

```=
Input: s = "loveleetcode"
Output: 2
```

**Example 3:**

```=
Input: s = "aabb"
Output: -1
```
</pre></details>

## 筆記

解題思路是遍歷一次陣列把所有的子字符跟他的 index 都放在 Object 裡做比較，應該有更好的做法。

<!-- TODO -->

建立一個 Object 存放如下資料:

```js=
{
    字串內的每個子字符:子字符的 index
}
```

寫一個迴圈遍歷字串:
1. 每遇到一個文字就放入 Object
2. 比較當前 index 跟 [String.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) 
    + 如果不一樣: Object 裡的值就改成 -1
    + 如果一樣: 不做事
迴圈結束
+ 如果 Object 裡還有資料: 回傳他的 index
+ 如果沒有: 回傳 -1


## 程式碼

```js=
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let compareObj = {};
    for (let i = 0; i < s.length; i++) {
        if (compareObj[s[i]] != undefined && compareObj[s[i]] != i) {
            compareObj[s[i]] = -1;
        } else {
            compareObj[s[i]] = i;
        }

        // console.log('i: ' + i ,compareObj)
    }
    for (let i in compareObj) {
        if (compareObj[i] != -1) return compareObj[i];
    }
    return -1;

};
```

## 成績

![](https://i.imgur.com/FD5C6LD.png)


<!-- ##### 參考資料 -->