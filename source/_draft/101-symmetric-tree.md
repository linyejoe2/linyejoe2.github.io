---
layout:     post
title:      "[LeetCode]101. Symmetric Tree"
subtitle:   "Data Structure I"
date:       2022-10-05
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Tree, Binary Tree, Breadth-First Search, Depth-First Search ]
categories: [LeetCode, Data Structure I]
---

> [Algorithm I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/#10-x2F-05-Day-11-Tree) 第十一天第三題，共三題。

+ 難度: `Easy`
+ 花費時間: 10 min
+ 題目: [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

給你一個 `Binary Tree` ，看看這棵樹的左右兩邊是不是輻射對稱的。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ The number of nodes in the tree is in the range `[1, 1000]`.
+ `-100 <= Node.val <= 100`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg)

```=
Input: root = [1,2,2,3,4,4,3]
Output: true
```

**Example 2:**

![example-image-1](https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg)

```=
Input: root = [1,2,2,null,3,null,3]
Output: false
```

</details>

<!-- <details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

</details> -->

## 筆記

檢查輻射對稱，所以我們要分兩個指標，只要他有一個不對稱，就回傳 `false`

題目要求遞迴跟迴圈，所以我們兩個都做。

1. 

## 程式

```ts=
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const stacks: [TreeNode, number][] = [[root, 0]];
  const res: number[][] = [];

  while (stacks.length > 0) {
    // take this node and depth
    const node = stacks[stacks.length - 1][0];
    const depth = (stacks.pop()!)[1];

    // push val into res
    if (!res[depth]) res[depth] = [];
    res[depth].push(node!.val);

    // push child into stacks
    if (node.right) stacks.push([node.right, depth + 1]);
    if (node.left) stacks.push([node.left, depth + 1]);
  }
  return res;
}

```

## 成績

<!-- Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TS iterative|91 ms|74.63%|44.7 MB|18.41%
TS recursive|80 ms|82.21%|43.9 MB|87.98% -->

![score-image](https://i.imgur.com/6YJia9G.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
