---
layout:     post
title:      "[LeetCode]595. Big Countries"
subtitle:   "SQL I"
date:       2022-06-27
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, SQL I]
categories: [LeetCode, SQL, SQL I]
---

>[SQL I 筆記撰寫計畫](/2022/06/27/leetcode/SQL/SQL%20I/Starting_write_SQL_I_note/)

## 敘述

這是 `SQL I` 的第一天第一個題目，總共有四題。

+ 難度: `Easy`
+ 花費時間: 1min
+ [題目](https://leetcode.com/problems/big-countries/)

給你一張表 `World` ，找出裡面的 `Big` 國。

一個 `Big` 國的定義:
+ 面積超過三百萬平方公里
**或是**
+ 人口超過兩千五百萬人

<!--more-->

Table: `World`
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | int     |
+-------------+---------+
name is the primary key column for this table.
Each row of this table gives information about the name of a country, the continent to which it belongs, its area, the population, and its GDP value.
```

**Example 1:**

```=
Input: 
World table:
+-------------+-----------+---------+------------+--------------+
| name        | continent | area    | population | gdp          |
+-------------+-----------+---------+------------+--------------+
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
+-------------+-----------+---------+------------+--------------+
Output: 
+-------------+------------+---------+
| name        | population | area    |
+-------------+------------+---------+
| Afghanistan | 25500100   | 652230  |
| Algeria     | 37100000   | 2381741 |
+-------------+------------+---------+
```

## 筆記

這個題目出的比較嚴謹，給你很多沒用的欄位，當然我們只要注意在那些影響成為大國條件的欄位就好。
`or` 條件代表 or 之前的條件成立，或是之後的條件成立，都把資料抓出來。

```sql=
select name, population, area from World 
where area >= 3000000
or population >= 25000000
```

## 成績

![](https://i.imgur.com/wW9fYlD.png)


<!-- ##### 參考資料 -->