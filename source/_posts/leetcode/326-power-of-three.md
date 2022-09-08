---
layout:     post
title:      "[LeetCode]326. Power Of Three"
subtitle:   "Math"
date:       2022-08-24
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Math]
categories: [LeetCode]
---

## 敘述

寫每日練習

+ 難度: `Easy`
+ 花費時間: 5 min
+ [題目](https://leetcode.com/problems/power-of-three/)


<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

-   `-231 <= n <= 231 - 1`

**Example 1:**

```=
Input: n = 27
Output: true
```

**Example 2:**

```=
Input: n = 0
Output: false
```

**Example 3:**

```=
Input: n = 9
Output: true
```
</pre></details>

## 筆記

題目的需求很簡單，所以有多種做法可以完成。

### 1. 迴圈作法(直覺)

直覺上來說，怎麼做怎麼來。

javascript
```javascript=
var isPowerOfThree = function (n) {
    // 例外處理
    if (n < 1) return false;

    // 如果 n 可以被 3 整除，那就除下去
    while (n % 3 == 0) {
        n /= 3;
    }

    // 最後除完，看看有沒有等於 1 ，如果等於 1 那就代表成立
    return n == 1;
};
```

### 2. 數學作法

> n = 3^i
> i = log3(n)
> i = log10(n)/log10(3)

按照上面的邏輯，檢查 n 有沒有符合即可。

javascript
```javascript=
var isPowerOfThree = function (n) {
    return ((Math.log10(n) / Math.log10(3)) % 1 == 0);
};
```

### 3. 數學作法(特殊)

上評論區看到的，直接拿題目裡最大的 `power of 3` 跟 n 取餘數檢查。

非常的簡潔，且是最佳的做法

java
```java=
public boolean isPowerOfThree(int n) {
// 1162261467 is 3^19,  3^20 is bigger than int
return (n > 0 && 1162261467 % n == 0);
}
```

## 成績

![](https://i.imgur.com/Aq2G1BX.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre></pre></details>

<!-- ##### 參考資料 -->