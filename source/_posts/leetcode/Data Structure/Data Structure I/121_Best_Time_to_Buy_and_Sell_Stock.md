---
layout:     post
title:      "[LeetCode]121. Best Time to Buy and Sell Stock"
subtitle:   "Data Structure I"
date:       2022-06-01
author:     "linyejoe2"
header-style: text
catalog: true
description: 找到一個最好的時間點(價格最低)買進股票，再找到一個最好的時機(價格最高)賣出，把賣出價減去買入價回傳。
tags: [LeetCode, Data Structure]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第三天第二個題目，總共有兩個。

+ 難度: `Easy`
+ 花費時間: 4小時
+ [題目](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

傳入一個陣列，模擬一個股票每天的價格，這個陣列有以下特性:
+ 第一項是第一天，第二項是第二天，以此類推。
+ 每項的數字就是當天的價格，不懂的可以看範例。

找到一個最好的時間點(價格最低)買進股票，再找到一個最好的時機(價格最高)賣出，把賣出價減去買入價回傳。

<details><summary>點我開啟限制與範例</summary>
<pre>
**限制:**

-  `1 <= prices.length <= 10^5`
-  `0 <= prices[i] <= 10^4`

**Example 1:**

```=
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: 第二天買入價格最好(1元)，然後持有三天之後在第五天賣出(6元)，
這樣得到的利潤就是 6-1=5 所以我們回傳最後答案 5 。
```

**Example 2:**

```=
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: 在這個例子裡，怎麼買都是賠錢的，所以就不買了，回傳 0 (至少比賠錢好)
```
</pre></details>

## 筆記

~~最一開始想到了暴力解的方法，遍歷兩次陣列，把每個值以及他可以獲得的最好價格算出來，然後價格最高的那個回傳。~~ 
上面的方法 timeout 了，所以只能認真想 O(n) 的解法了。

#### 掌握規律

間單來說，這是一題考 `Dynamic Programming` 的題目，需要把握的一個規律就是:
**如果有答案，那麼賣出的值就一定要比買入的值大。**

#### 原解法

這個寫法可以看成是上面的暴力解融合起來，我們先來拆解暴力解步驟看看:
1. 遍歷一次陣列。
2. 內圈再遍歷一次陣列，找如果第一步的 index 是買入價時，最好的賣出價。

#### Dynamic Programming 解法！

上面兩步直覺寫就是 O(n^2) ，但其實這兩個迴圈如果參照**如果有答案，那麼賣出的值就一定要比買入的值大**，的規律，就可以用一次遍歷完成，步驟如下:
1. 設定最小值 `minPrice` (預設是最大，這樣才可以越來越小)，及最大獲利 `maxProfit` (0)
2. 遍歷陣列:
    1. 如果陣列當前值比 `minPrice` 小，就覆寫 `minPrice` 
    2. 如果陣列當前值減去 `minPrice` 得出來的獲利比 `maxProfit` 大，就覆寫 `maxProfit` 

但是注意這個寫法有個 Bug ，那就是如果題目要求的是買入時跟賣出時的 value ，那會有 `exception` ，原因如下:

```=
Input: prices = [10, 2, 200, 1, 100]
Output: [1, 200]
Expect: [2, 200]
Explanation: 會發生這種狀況就是因為，這題為了加速運算過程，
需要完全遍歷一遍 prices 更新 minPrice ，
所以如果後面有比答案更小的 value 存在，那麼其實這時候的 minPrice 就會變成錯誤的值了。

Input: prices = [10, 100, 1000, 1, 100]
Output: [1, 1000]
Expect: [100, 1000]
Explanation: 這個示範也是同理。
```


## 程式碼

```js=
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var minPrice = Number.MAX_VALUE;
    var maxProfit = 0;
    for (var i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}
```

## 成績

![](https://i.imgur.com/B5iPjiq.png)


<!-- ##### 參考資料 -->