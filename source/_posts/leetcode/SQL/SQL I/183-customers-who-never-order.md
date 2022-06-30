---
layout:     post
title:      "[LeetCode]183. Customers Who Never Order"
subtitle:   "SQL I"
date:       2022-06-27
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, SQL I, Subqueries]
---

>[SQL I 筆記撰寫計畫](/2022/06/27/leetcode/SQL/SQL%20I/Starting_write_SQL_I_note/)

## 敘述

這是 `SQL I` 的第一天第四個題目，總共有四題。

+ 難度: `Easy`
+ 花費時間: 5min
+ [題目](https://leetcode.com/problems/customers-who-never-order/)

給你兩張表，一張記錄了客人名字跟他們的編號，另一張是訂單紀錄，組合這兩張表找出**沒有消費過的消費者**。

<!--more-->

Table: `Customers`
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key column for this table.
Each row of this table indicates the ID and name of a customer.
```

Table: `Orders`
```
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
id is the primary key column for this table.
customerId is a foreign key of the ID from the Customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.
```

寫出一個 `SQL query` 來查找那些沒買過東西的人。

<details><summary>點我開啟範例</summary>
<pre>

**Example 1:**

```=
Input: 
Customers table:
+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Orders table:
+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
Output: 
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
```
</pre></details>

## 筆記

一樣是簡單的 select function ，需要注意的是:

1. 他要求最後顯示的 column 是 Customers 所以要在 column 那邊加上一個 `AS Customers` 
2. 兩張表合併，簡單處理我們可以使用 [Subqueries](https://www.w3resource.com/sql/subqueries/understanding-sql-subqueries.php) 如下方。

```sql=
select name as Customers from Customers 
where id not in (select customerId from Orders)
```

## 成績

![](https://i.imgur.com/daF6Ose.png)


