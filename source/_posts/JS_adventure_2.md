---
layout:     post
title:      "[JaveScript]JS全端大冒險No.2"
subtitle:   "簡單介紹JS資料型別(data type)"
date:       2022-01-12
author:     "linyejoe2"
header-style: text
catalog: true
tags: JaveScript, JS全端大冒險
---

#  簡單介紹JS資料型別(data type)

JS在資料型別上有以下幾種特點
1. 弱型別(loosely typed):JS宣告變數時不需要特別指定型別 類似的語言有PHP Python等等
<!--more-->
JS一共有7種資料型別
```javascript=
// 1. 布林
const booleanData = true;

// 2. Null空集合
const nullData = null;

// 3. undefined未定義
const undefinedData = undefined;

// 4. 數字
const numberData = 1;

// 5. 大數字BigInt
const bigintData = 9007199254740992n;

// 6. 字串String
const stringData = 'str';

// 7. Symbol
const symbolData = Symbol("sym");
```