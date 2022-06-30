---
layout:     post
title:      "[LeetCode]196. Delete Duplicate Emails"
subtitle:   "SQL I"
date:       2022-06-30
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, SQL I]
---

>[SQL I 筆記撰寫計畫](/2022/06/27/leetcode/SQL/SQL%20I/Starting_write_SQL_I_note/)

## 敘述

這是 `SQL I` 的第二天第三個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 10min
+ [題目](https://leetcode.com/problems/delete-duplicate-emails/)

給你一張表 `Person` ，這張表裡存了一堆 email ，但是裡面有些 email 是重複的，現在請你撰寫一個 DELETE 語法來刪除這些重複的 email 資料。 

<!--more-->

Table: `Person`
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key column for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.
```

**Example 1:**

```=
Input: 
Person table:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Output: 
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
Explanation: john@example.com is repeated two times. We keep the row with the smallest Id = 1.
```


## 筆記

1. 先 SELECT 出不重複的 email ，這邊使用的是 `GROUP BY email` 再加上 `MIN(id)` ，同理，使用 MAX() 也可以。
2. 遍歷 Person 這張表，如果這行資料並不在第一步 SELECT 出來的表裡，就把他刪掉。

```sql=
DELETE FROM
    Person
WHERE
    id NOT IN (
        SELECT
            MIN(id)
        FROM
            Person
        GROUP BY
            email
    )
```

## 成績

![](https://i.imgur.com/DVMLUZt.png)
