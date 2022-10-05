---
layout:     post
title:      "[LeetCode]102. Binary Tree Level Order Traversal"
subtitle:   "Data Structure I"
date:       2022-10-05
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Tree, Binary Tree, Breadth-First Search, Iteration ]
categories: [LeetCode, Data Structure I]
---

> [Algorithm I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/#10-x2F-05-Day-11-Tree) 第十一天第一題，共三題。

+ 難度: `Easy`
+ 花費時間: 10 min
+ 題目: [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

給你一個 `Binary Tree` ，按照層級遍歷他，並回傳遍歷值的結果。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ The number of nodes in the tree is in the range `[0, 2000]`.
+ `-1000 <= Node.val <= 1000`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```=
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

**Example 2:**

```=
Input: root = [1]
Output: [[1]]
```

**Example 3:**

```=
Input: root = []
Output: []
```

</details>

<!-- <details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

</details> -->

## 筆記

定義:

+ `res`: 答案陣列
+ `stacks`: 等待處理的節點陣列
+ `depth`: 節點的深度

步驟:

1. 把節點放到 `stacks` ，設定深度為 `0` (一點都不深)
2. 進入迴圈，直到 `stacks` 沒有存貨
   1. 拿出 `stacks` 最後一個 `node`
   2. 拿出深度
   3. 把 `node.val` 放進 `res`
   4. 塞入 `node.right` 至 `res` (深度加一)
   5. 塞入 `node.left` 至 `res` (深度加一)
3. 回傳 `res`

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
