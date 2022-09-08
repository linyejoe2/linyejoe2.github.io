---
layout:     post
title:      "[LeetCode]1757. Recyclable and Low Fat Products"
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

這是 `SQL I` 的第一天第二個題目，總共有四題。

+ 難度: `Easy`
+ 花費時間: 1min
+ [題目](https://leetcode.com/problems/recyclable-and-low-fat-products/)

因為你很環保，而且你不想要吃會變胖的食物，所以
給你一張表 `Products` 找出這張表裡符合:

1. low_fats 等於 'Y'
2. recyclable 等於 'Y'

的食物，然後你就可以開心的把他們吃下肚

<!--more-->

Table: `Products`
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |
+-------------+---------+
product_id is the primary key for this table.
low_fats is an ENUM of type ('Y', 'N') where 'Y' means this product is low fat and 'N' means it is not.
recyclable is an ENUM of types ('Y', 'N') where 'Y' means this product is recyclable and 'N' means it is not.
```



**Example 1:**

```=
Input: 
Products table:
+-------------+----------+------------+
| product_id  | low_fats | recyclable |
+-------------+----------+------------+
| 0           | Y        | N          |
| 1           | Y        | Y          |
| 2           | N        | Y          |
| 3           | Y        | Y          |
| 4           | N        | N          |
+-------------+----------+------------+
Output: 
+-------------+
| product_id  |
+-------------+
| 1           |
| 3           |
+-------------+
Explanation: Only products 1 and 3 are both low fat and recyclable.
```


## 筆記

簡單的 select function:

```sql=
select product_id from Products 
where low_fats = "Y" # 如果 low_fats 欄位是 Y 
and recyclable = "Y" # 而且 如果 recyclable 欄位是 Y   我就把他抓出來
```

## 成績

![](https://i.imgur.com/jMHSLNG.png)


<!-- ##### 參考資料 -->