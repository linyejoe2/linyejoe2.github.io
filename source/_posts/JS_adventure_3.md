---
layout:     post
title:      "[JaveScript]JS全端大冒險No.3"
subtitle:   "Spread Operator(...)"
date:       2022-01-14
author:     "linyejoe2"
header-style: text
catalog: true
tags: JaveScript
---

#  Spread Operator(...)

Spread Operator(...) 中文稱做拓展運算子，是ES6加入的，用途是**簡化陣列展開**的過程，可以改善以下操作:
- 取值
- 複製
- 合併
- 轉換型態

## 定義

```javascript=
let Arr1 = [1,2,3,4];

console.log(Arr1);
//$ [ 1, 2, 3, 4 ]

console.log(...Arr1);
//$ 1 2 3 4
```

- 展開陣列並轉化為**多個逗點隔開的獨立參數**
- 在陣列前方加上...即可

## 用途

```javascript=
//呼叫函式
myFunction(...iterableObj);

//陣列或字串
[...iterableObj, '4', 'five', 6];

//ECMAScript 2018新增 可用於複製物件
let objClone = { ...obj };
```