---
layout:     post
title:      "[LeetCode]1873. Calculate Special Bonus"
subtitle:   "SQL I"
date:       2022-06-28
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, SQL I]
categories: [LeetCode, SQL I]
---

>[SQL I 筆記撰寫計畫](/2022/06/27/leetcode/SQL/SQL%20I/Starting_write_SQL_I_note/)

## 敘述

這是 `SQL I` 的第二天第一個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 30min
+ [題目](https://leetcode.com/problems/calculate-special-bonus/)

你是某公司的 PM ，你有一張表紀錄每個員工還有他們的薪水，現在你要發獎金給他們，而且是一個很有趣的分配方式...

<!--more-->

Table: `Employees`
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| name        | varchar |
| salary      | int     |
+-------------+---------+
employee_id is the primary key for this table.
Each row of this table indicates the employee ID, employee name, and salary.
```

獎金只有發與不發，要發就是 100% ，不發就是 0 ，只有完全符合以下兩個條件的員工才值得得到獎金:
1. 他的名字(`name`)不能是以 M 開頭。
2. 他的編號(`employee_id`)不能是偶數。


**Example 1:**

```=
Input: 
Employees table:
+-------------+---------+--------+
| employee_id | name    | salary |
+-------------+---------+--------+
| 2           | Meir    | 3000   |
| 3           | Michael | 3800   |
| 7           | Addilyn | 7400   |
| 8           | Juan    | 6100   |
| 9           | Kannon  | 7700   |
+-------------+---------+--------+
Output: 
+-------------+-------+
| employee_id | bonus |
+-------------+-------+
| 2           | 0     |
| 3           | 0     |
| 7           | 7400  |
| 8           | 0     |
| 9           | 7700  |
+-------------+-------+
Explanation: 
employee_id = 2 和 8 的員工沒有獎金，因為他們的 employee_id 是偶數(太慘了)。
employee_id = 3 的員工沒有獎金，因為他名字是 M 開頭(太慘了)。
其他的人都可以享有 100% 薪水的獎金
```


## 筆記

### case 方法

在查詢欄位寫 case ，滿足就代入薪水，不滿足就代入 0 。

```sql=
select
    employee_id,
    case
        when (MOD(employee_id, 2) <> 0)
        and (name not like 'M%') then salary
        else 0
    end bonus
from
    Employees
order by
    employee_id
```

### math 方法

這個方法很微妙，查出來的薪水欄位乘於(薪水欄位除於二的餘數)，然後再乘於(名字不包含M的人)，具體 SQL 如下:

```sql=
select
    employee_id,
    salary * MOD(employee_id, 2) * (name NOT LIKE 'M%') as bonus
from
    Employees
order by
    employee_id
```

## 成績

case 方法
![](https://i.imgur.com/kkZf8QF.png)

math 方法
![](https://i.imgur.com/Ez5NPBj.png)


##### 參考資料

[Two solutions - MSSQL](https://leetcode.com/problems/calculate-special-bonus/discuss/2205261/Two-solutions-MSSQL)
[MySQL | Without Case And IF | 100 % Runtime](https://leetcode.com/problems/calculate-special-bonus/discuss/2204003/MySQL-or-Without-Case-And-IF-or-100-Runtime)