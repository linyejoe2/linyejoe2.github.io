---
layout:     post
title:      "[LeetCode]627. Swap Salary"
subtitle:   "SQL I"
date:       2022-06-30
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, SQL I]
categories: [LeetCode, SQL I]
---

>[SQL I 筆記撰寫計畫](/2022/06/27/leetcode/SQL/SQL%20I/Starting_write_SQL_I_note/)

## 敘述

這是 `SQL I` 的第二天第二個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 30min
+ [題目](https://leetcode.com/problems/swap-salary/)

給你一張表 `Salary` ，這張表包含 sex 欄位註明性別，但上個工程師好像粗心大意不小心把所有男性跟女性搞相反了，
請**使用一個 update 語法**讓這張表 sex 欄位的男性與女性互換。

<!--more-->

Table: `Salary`
```
+-------------+----------+
| Column Name | Type     |
+-------------+----------+
| id          | int      |
| name        | varchar  |
| sex         | ENUM     |
| salary      | int      |
+-------------+----------+
id is the primary key for this table.
The sex column is ENUM value of type ('m', 'f').
The table contains information about an employee.
```

**Example 1:**

```=
Input: 
Salary table:
+----+------+-----+--------+
| id | name | sex | salary |
+----+------+-----+--------+
| 1  | A    | m   | 2500   |
| 2  | B    | f   | 1500   |
| 3  | C    | m   | 5500   |
| 4  | D    | f   | 500    |
+----+------+-----+--------+
Output: 
+----+------+-----+--------+
| id | name | sex | salary |
+----+------+-----+--------+
| 1  | A    | f   | 2500   |
| 2  | B    | m   | 1500   |
| 3  | C    | f   | 5500   |
| 4  | D    | m   | 500    |
+----+------+-----+--------+
Explanation: 
(1, A) and (3, C) were changed from 'm' to 'f'.
(2, B) and (4, D) were changed from 'f' to 'm'.
```


## 筆記

UPDATE 語法搭配 CASE 即可

```sql=
UPDATE
    Salary
SET sex = 
    CASE sex
        WHEN 'm' THEN 'f'
        WHEN 'f' THEN 'm'
    END
```

## 成績

![](https://i.imgur.com/ReThTib.png)
