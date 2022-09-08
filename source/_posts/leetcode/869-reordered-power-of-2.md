---
layout:     post
title:      "[LeetCode]869. Reordered Power of 2"
subtitle:   "LeetCoding Challenge"
date:       2022-08-26
author:     "linyejoe2"
header-style: text
catalog: true
tags: [LeetCode, Math, LeetCoding Challenge]
categories: [LeetCode]
---

## 敘述

寫每日練習

+ 難度: `Medium`
+ 花費時間: 30 min
+ [題目](https://leetcode.com/problems/reordered-power-of-2/)

給你一個數字 `n` ，找出這個數字在任何排列下(前面不能為零)如果有 2 的冪次就回傳 `true` 沒有則回傳 `false` 。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

-   `1 <= n <= 109`

**Example 1:**

```=
Input: n = 1
Output: true
```

**Example 2:**

```=
Input: n = 10
Output: false
```

</pre></details>

## 筆記

看到題目是數學就昏頭轉向了，於是參考了下評論區非常精妙的解答(窮舉)，這題主要有幾個重點。

+ 題目限制 `n` 最大是 10^9 ，意即如果他有解，最大也會是 10^9(base 10) == 2^30(base 2)
+ 如果真的有符合的，那麼那個數字做排序之後會跟 `n` 做排序之後一樣。

所以重點就是，如果有答案，那麼 `n.sort()` 會跟 2^30(base 2) 裡面某個數字轉十進位後作 `sort()` 一樣。

我自己直覺上會想要窮舉 `n` 的排序，再去檢查，但其實**直接窮舉 2^30(base 2) 然後做排序**再比較是最快的(因為總共也才 31 個)。

### JavaScript

```JS=
var reorderedPowerOf2 = function(n) {
    // 先把 n 轉成字串後做排序
    let sortedN = n.toString().split("").sort().join();

    // 再窮舉 2^30(base 2)
    for (let i = 0; i < 30; i++){
        // 一樣把他換成字串方便排序
        let sortedBinaryToDecimal = (1 << i).toString().split("").sort().join();
        
        // 把排序過的兩個數字做比較
        if (sortedN === sortedBinaryToDecimal) return true;
    }
    
    // 最後跑完還是沒有答案就回傳 false
    return false;
};
```

## 成績

JS 成績
![](https://i.imgur.com/qJPUtcK.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre></pre></details>

##### 參考資料

+ [Discuss: multiple language solution](https://leetcode.com/problems/reordered-power-of-2/discuss/1120106/JS-Python-Java-C%2B%2B-or-Easy-Short-Solution-w-Explanation)