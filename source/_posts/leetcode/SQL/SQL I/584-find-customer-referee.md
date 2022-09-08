---
layout:     post
title:      "[LeetCode]584. Find Customer Referee"
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

這是 `SQL I` 的第一天第三個題目，總共有四題。

+ 難度: `Easy`
+ 花費時間: 1min
+ [題目](https://leetcode.com/problems/find-customer-referee/)

給你一張表 Customer ，找出裡面 referee_id 不是 2 的。

<!--more-->

Table: `Customer`
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| referee_id  | int     |
+-------------+---------+
id is the primary key column for this table.
Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.
```

**Example 1:**

```=
Input: 
Customer table:
+----+------+------------+
| id | name | referee_id |
+----+------+------------+
| 1  | Will | null       |
| 2  | Jane | null       |
| 3  | Alex | 2          |
| 4  | Bill | null       |
| 5  | Zack | 1          |
| 6  | Mark | 2          |
+----+------+------------+
Output: 
+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
```

## 筆記

簡單的 select function 如下:

```sql=
select name from Customer
where referee_id <> 2 # 大於小於 2 的
or referee_id is null # null 並不大於小於 2 因此單獨處理
```

## 成績

![](https://i.imgur.com/gbGhiUH.png)



<!-- ##### 參考資料 -->