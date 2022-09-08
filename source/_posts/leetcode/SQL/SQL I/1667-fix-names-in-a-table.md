---
layout:     post
title:      "[LeetCode]1667. Fix Names in a Table"
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

這是 `SQL I` 的第三天第一個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 5min
+ [題目](https://leetcode.com/problems/fix-names-in-a-table/)

給你一張表 `Users` ，這張表記載了很多 user 的名字，但是也包含很多的大小寫轉換錯誤，現在希望你撰寫一個 SELECT 語法，要顯示符合**規範**的名字。

<!--more-->

Table: `Users`
```
+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| user_id        | int     |
| name           | varchar |
+----------------+---------+
user_id is the primary key for this table.
This table contains the ID and the name of the user. The name consists of only lowercase and uppercase characters.
```

規範如下:
+ 首字母大寫
+ 其餘的小寫

**Example 1:**

```=
Input: 
Users table:
+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | aLice |
| 2       | bOB   |
+---------+-------+
Output: 
+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | Alice |
| 2       | Bob   |
+---------+-------+
```


## 筆記

這邊用到三個 `built-in functions` 分別是:
+ [LOWER()](https://www.w3schools.com/sql/func_sqlserver_lower.asp): 負責把括弧內的字串轉為小寫。
+ [UPPER()](https://www.w3schools.com/sql/func_sqlserver_upper.asp): 同理，負責把括弧內的字串轉為大寫。
+ [SUBSTRING()](https://www.w3schools.com/sql/func_sqlserver_substring.asp): 負責把字串照你要的長度切開。

接著，我們搜索 name 的時候就把他的首字跟後面的字切開，然後首字轉大寫，後面的字轉小寫即可。

```sql=
SELECT
    user_id,
    UPPER(SUBSTR(name, 1, 1)) || LOWER(SUBSTR(name, 2, 99)) AS name
FROM
    Users
ORDER BY
    user_id
```

## 成績

![](https://i.imgur.com/Bp1uuVW.png)
