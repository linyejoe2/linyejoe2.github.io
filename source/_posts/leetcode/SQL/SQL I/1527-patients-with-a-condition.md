---
layout:     post
title:      "[LeetCode]1527. Patients With a Condition"
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

這是 `SQL I` 的第三天第三個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 5min
+ [題目](https://leetcode.com/problems/patients-with-a-condition/)

你有一張表 `Patients` 裡面記載了許多病人的名字還有他們有什麼病，現在你只想看到那些有型一糖尿病的病人...

<!--more-->

Table: `Activities`
```
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| patient_id   | int     |
| patient_name | varchar |
| conditions   | varchar |
+--------------+---------+
patient_id is the primary key for this table.
'conditions' contains 0 or more code separated by spaces. 
This table contains information of the patients in the hospital.
```

有型一糖尿病的病人，他們的病症裡一定會有以 `DIAB1` 開頭的病症。

**Example 1:**

```=
Input: 
Patients table:
+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 1          | Daniel       | YFEV COUGH   |
| 2          | Alice        |              |
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 |
| 5          | Alain        | DIAB201      |
+------------+--------------+--------------+
Output: 
+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 | 
+------------+--------------+--------------+
Explanation: Bob and George both have a condition that starts with DIAB1.
```


## 筆記

這題還滿無腦的，兩種狀況
1. DIAB1 在中間，那他就會是 ` DIAB1` 的形式，前後再加上 % 就可以捕捉這類狀況
2. DIAB1 在最前面，換句話說前面會沒有空格，於是我們用 `DIAB1%` 來捕捉這類情況

```sql=
SELECT * FROM Patients
WHERE
    conditions like '% DIAB1%'
OR
    conditions like 'DIAB1%'
```

## 成績

![](https://i.imgur.com/0TPo8wY.png)

<!-- ##### 參考資料 -->
