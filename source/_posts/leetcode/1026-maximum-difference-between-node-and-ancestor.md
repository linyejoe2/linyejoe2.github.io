---
layout:     post
title:      "[LeetCode]1026. Maximum Difference Between Node and Ancestor"
subtitle:   "Daily Challenge"
date:       2022-12-09
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Depth-First Search, Tree, Binary Tree ]
categories: [LeetCode]
---

+ 難度: `Medium`
+ 花費時間: 20 min
+ 題目: [1026. Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/)

給定你一個 `Binary Tree` ，假定我們要求一個數 `v` ， `v` 的定義是這個樹的父節點減去子節點取絕對值，而我們要找出最大的 `v`

+ 設 `a` 為任一父節點， `b` 為任一子節點
+ `v = |a - b|`
<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ The number of nodes in the tree is in the range `[2, 5000]`.
+ `0 <= Node.val <= 10^5`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2020/11/09/tmp-tree.jpg)

```=
Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
```

**Example 2:**

![example-image-1](https://assets.leetcode.com/uploads/2020/11/09/tmp-tree-1.jpg)

```=
Input: root = [1,null,2,null,0,3]
Output: 3
```

**Definition for  a binary tree node.**

```TS=
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
```

</details>

<!-- <details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

</details> -->

## 筆記

1. 深度優先遍歷陣列
2. 找出最大跟最小的值
3. 每次訪問都比大小，如果更大就更新結果
4. 回傳結果

## 程式

```ts=
function maxAncestorDiff(root: TreeNode | null): number {
    return _dfs(root!)
};

function _dfs(root: TreeNode, max = Number.MIN_VALUE, min = Number.MAX_VALUE, res: number = 0): number {
    if (root.val > max) max = root.val
    if (root.val < min) min = root.val

    res = Math.max(Math.abs(max - min), res)
    if (root.left) res = Math.max(_dfs(root.left, max, min, res))
    if (root.right) res = Math.max(_dfs(root.right, max, min, res))
    return res
}

```

## 成績

<!-- Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TS iterative|91 ms|74.63%|44.7 MB|18.41%
TS recursive|80 ms|82.21%|43.9 MB|87.98% -->

![score-image](https://i.imgur.com/5r3jarm.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
