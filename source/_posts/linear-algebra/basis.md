---
layout:     post
title:      "[線性代數] Basis (基)(基向量)"
date:       2024-11-07
author:     "linyejoe2"
header-style: text
catalog: true
tags: [線性代數, basis, 基, 基向量, basis vector]
description: "基(basis) 是線性代數中的核心概念之一..."
---

# 前言

**基**(basis) 是線性代數中的核心概念之一。基的概念起源於我們想要在一個向量空間中找到一組向量，使其能夠**生成**(span)整個空間，並且每個向量之間都是**線性獨立**(linear Independence)的。這一組向量集合可以用來表示空間中的任意向量，使得我們能夠對向量進行更簡單的操作和理解。

基廣泛應用於許多領域，如工程、物理、電腦科學和數據分析。在軟體工程中，特別是與計算和優化有關的應用中。

# 定義

設 V 為一個在域 F 裡的向量空間，設 I 是在 V 裡的 Basis 向量的索引的集合，一組向量 $B = \{v_i\}_{i \in I} \subseteq V$ 稱為 V 的 Basis

> 域 F 指的就是某一個數域，例如實數 $\mathbb{R}$ 或是複數 $\mathbb{C}$


### Linear Independence (線性無關)

存在有限個純量 ${a_i​}⊆F$，對於每個在 $B$ 裡的子集 ${v_i}$ 來說

$$
\sum_{i \in I} a_i v_i = 0 \Rightarrow a_i = 0 \text{ for all } i \in I.
$$

### Spanning Property (生成律)

存在有限個純量 ${b_i​}⊆F$

$$
v = \sum_{i \in I} b_i v_i.
$$

- 線性無關: 對於所有在 I  裡的 i 來說，若 ${a_i}$ 乘上 ${v_i}$ 的結果加總 = 0 ，則所有的 ${a_i}$ 都是 0
  - 白話文來講，對於這幾個 $v_i$ 來說，可以讓他們加總 = 0 的常量 $a_i$ 一定不能是 0 以外的任何數。
  - 反例: 對於集合 $[(1,2),(2,4)]$ 來說，存在 [-2, 1] 讓 $-2(1,2) + 1(2,4) = -6 + 6 = 0$ ，則這時 $a_i \neq 0$
  - 這邊的 0 指的是零向量 $0_v$
- 生成律: 對於所有在 I 裡的 i 來說，在空間裡的任意一個向量 ${v \in V}$，必定可以用 ${b_i}$ 乘上 ${v_i}$ 的和來表示。
- 代數解釋
  - $F$: 某一個數域
  - $V$: (vector space) 在 $F$ 裡的向量空間
  - $v , v \in V$: (vector) 在 $V$ 裡的任意向量
  - $I$: 所有的基向量的索引集合
  - $i, i \in I$: 任意的基向量索引
  - $B = v_i$: 在 $V$ 裡的所有基向量

![image.png](https://i.imgur.com/7QTsXE0.png)

用以上的圖來舉例，$\begin{bmatrix}
1 & 0 & -2\\
0 & 1 & 1
\end{bmatrix}$ 任取兩個都可表示為這個二維空間的 Basis vector ，我們用 $\begin{bmatrix}
0 & -2\\
1 & 1
\end{bmatrix}$ 驗證上面兩個定義

1. 線性無關: 設常量 $[a_1,a_2] = [0,0]$ ，$0(0,1) + 0(-2,1) = 0$ ，而 $[a_1,a_2]$  在這裡只能是 0
2. 生成率: 我們可以用這兩個基向量來表示 $(1,0)$ : $-\frac{1}{2} (-2,1) + \frac{1}{2} (0,1) = (1,-\frac{1}{2}) + (0, \frac{1}{2}) = (1,0)$

# 性質

- 一個空間裡最少可以表示該空間的基向量總數就是該空間的維度
  - 二維空間 = 最少兩個基向量
  - 三維空間 = 最少三個基向量

# 應用

考慮以下問題：

設 $V$ 為 $\mathbb{R}^3$ 空間，且有三個向量 $\mathbf{v}_1 = (1, 0, 0)$、$\mathbf{v}_2 = (0, 1, 0)$、$\mathbf{v}_3 = (0, 0, 1)$。證明 $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$ 是 $\mathbb{R}^3$ 的基底，並使用這組基底表示向量 $\mathbf{w} = (3, 2, 5)$。

解答：

1. $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$ 中的向量彼此獨立。
2. 任意 $\mathbb{R}^3$ 中的向量都可以表示為 $a_1\mathbf{v}_1 + a_2\mathbf{v}_2 + a_3\mathbf{v}_3$，因此滿足生成性。
3. 所以，這組向量是 $\mathbb{R}^3$ 的基底。
4. 對於 $\mathbf{w} = (3, 2, 5)$，我們可以將其表示為：$\mathbf{w} = 3\mathbf{v}_1 + 2\mathbf{v}_2 + 5\mathbf{v}_3$。
