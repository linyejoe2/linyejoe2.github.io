---
layout:     post
title:      "[LeetCode]278. First Bad Version"
subtitle:   "Algorithm I"
date:       2022-06-13 14:05:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Binary Search, interactive]
---

>[Algorithm I 筆記撰寫計畫](https://linyejoe2.github.io/2022/06/13/leetcode/Data%20Structure/Data%20Structure%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第一天第二個題目，總共有三題。

+ 難度: `Easy` 
+ 花費時間: 2hr
+ [題目](https://leetcode.com/problems/first-bad-version/)

你控制著一個專案的版本紀錄，而這個專案在較新的版本出錯了(`Bad Version`)，
不幸的是，專案的每個版本都是構建於上個版本下，所以你需要找出他具體從哪個版本之後就出錯了。

給你一個 api: `isBadVersion` ，你要找出哪個版本是第一個錯誤版本，並且盡量減少呼叫 `isBadVersion` 的次數。

<!--more--> 

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= bad <= n <= 231 - 1`

**Example 1:**

```=
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

**Example 2:**

```=
Input: n = 1, bad = 1
Output: 1
```
</pre></details>

## 筆記

運用 Binary Search 即可，問題是如何寫:

1. 設定左邊(left)為 1 ，右邊(right)為 n 。
2. 只要 right > left 就繼續找。
3. 算出中點(middle) = (right + left) / 2
4. isBadVersion(middle):
    + true: 把右邊移到中間。
    + false: 把左邊移到中間 + 1 ，(因為這個點已經是false了，所以沒有繼續比較的必要，且最後幾位數在比較時會變成 right == left，此時便跳出迴圈)。
5. 回傳 right ，因為right自始自終都是 ture 的那個版本，所以算到最後，他就會剛好是錯誤第一版。


## 程式碼

```js=
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1, right = n;
        while(right > left){
            // console.log('left' + left);
            // console.log("right" + right);
            let middle = Math.floor((right + left) / 2);
            if (isBadVersion(middle)){
                right = middle;
            } else {
                left = middle + 1;
            }
        }
        return right;
    };

};
```

## 成績

![](https://i.imgur.com/yjINF6O.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

1. 切一半，把中間值放進去
    + false: 往右邊找
    + true: 往左邊找
2. 如果沒辦法再往左邊找了，就回傳中間值。

寫到迷失自我，還要多多練習。

</pre></details>

<!-- ##### 參考資料 -->