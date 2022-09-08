---
layout:     post
title:      "[LeetCode]1484. Group Sold Products By The Date"
subtitle:   "SQL I"
date:       2022-06-30
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, SQL I]
categories: [LeetCode, SQL, SQL I]
---

>[SQL I 筆記撰寫計畫](/2022/06/27/leetcode/SQL/SQL%20I/Starting_write_SQL_I_note/)

## 敘述

這是 `SQL I` 的第三天第二個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 30
+ [題目](https://leetcode.com/problems/group-sold-products-by-the-date/)

老闆給你一張表 `Activities` ，裡面記載了他在某天賣出了什麼產品，他現在希望你針對這張表作出一張報表，符合以下格式...

<!--more-->

Table: `Activities`
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| sell_date   | date    |
| product     | varchar |
+-------------+---------+
There is no primary key for this table, it may contain duplicates.
Each row of this table contains the product name and the date it was sold in a market.
```

格式如下:
+ 按照 sell_date 統計當天賣出多少產品，然後把賣出的產品放在 products 欄位。
+ 一天同一件產品只計算一次。
+ products 欄位內的產品必須按照 lexicographically order 來排序。
+ 整個 select 按照 sell_date 由小到大排序。

lexicographically

**Example 1:**

```=
Input: 
Activities table:
+------------+------------+
| sell_date  | product     |
+------------+------------+
| 2020-05-30 | Headphone  |
| 2020-06-01 | Pencil     |
| 2020-06-02 | Mask       |
| 2020-05-30 | Basketball |
| 2020-06-01 | Bible      |
| 2020-06-02 | Mask       |
| 2020-05-30 | T-Shirt    |
+------------+------------+
Output: 
+------------+----------+------------------------------+
| sell_date  | num_sold | products                     |
+------------+----------+------------------------------+
| 2020-05-30 | 3        | Basketball,Headphone,T-shirt |
| 2020-06-01 | 2        | Bible,Pencil                 |
| 2020-06-02 | 1        | Mask                         |
+------------+----------+------------------------------+
Explanation: 
For 2020-05-30, Sold items were (Headphone, Basketball, T-shirt), we sort them lexicographically and separate them by a comma.
For 2020-06-01, Sold items were (Pencil, Bible), we sort them lexicographically and separate them by a comma.
For 2020-06-02, the Sold item is (Mask), we just return it.
```


## 筆記

這邊用到三個 `built-in functions` 分別是:
+ [COUNT()](https://www.w3schools.com/sql/sql_count_avg_sum.asp): 計算筆數
+ [GROUP_CONCAT()](https://www.w3resource.com/mysql/aggregate-functions-and-grouping/aggregate-functions-and-grouping-group_concat.php): (這是 MySQL 特有的 function) 把 GROUP BY 的所有欄位用 `,` 組合起來。

先 SELECT GROUP BY sell_date ，然後 product 的部分需要 DISTINCT ，因為一天同一件產品只計算一次。

```sql=
SELECT
    sell_date,
    COUNT(DISTINCT product) as num_sold, # 算出產品數量
    GROUP_CONCAT(DISTINCT product) as products # 把當天賣出的產品列出來
FROM
    Activities
GROUP BY
    sell_date;
```

## 成績

![](https://i.imgur.com/qbaUlsX.png)

##### 參考資料

[MySQL Order by Product name AND Sell date](https://leetcode.com/problems/group-sold-products-by-the-date/discuss/692814/MySQL-Order-by-Product-name-AND-Sell-date)