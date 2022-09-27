---
layout:     post
title:      "[LeetCode]144. Binary Tree Preorder Traversal"
subtitle:   "Data Structure I"
date:       2022-09-27
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Tree, Depth-First Search, Binary Tree, Recursion, Iteration]
categories: [LeetCode, Data Structure I]
---

> [Algorithm I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/) 第十天第一題，共三題。

+ 難度: `Easy`
+ 花費時間: 10 min
+ 題目: [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

前續遍歷一個二元樹，然後把結果回傳。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ The number of nodes in the tree is in the range `[0, 100]`.
+ `-100 <= Node.val <= 100`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

```=
Input: root = [1,null,2,3]
Output: [1,2,3]
```

**Example 2:**

```=
Input: root = []
Output: []
```

**Example 3:**

```=
Input: root = [1]
Output: [1]
```

</details>

<!-- <details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

</details> -->

## 筆記

這題要練習樹的前序走訪，很簡單，就用深度優先走訪就完事了。

題目有要求要用迴圈的作法，所以遞迴跟迴圈各寫一個解答。

### Recursive

```ts=
function preorderTraversal(root: TreeNode | null, vals: number[] = []): number[] {
  // catch exception
  if (!root) return [];

  // push val to anwsers arr.
  vals.push(root!.val);

  // recursion traversal of tree.
  if (root?.left) preorderTraversal(root.left,vals);
  if (root?.right) preorderTraversal(root.right,vals);

  return vals;
};

```

### iterative

```ts=
function preorderTraversal(root: TreeNode | null): number[] {
  // catch exception
  if (!root) return [];

  // create anwsers arr and push the head val of the tree.
  let vals:number[] = [root?.val];
  // create pre go node list.
  let nodelist : TreeNode[] = [];
  
  // push 1st pre go node to list.
  if (root?.right) nodelist.push(root.right);
  if (root?.left) nodelist.push(root.left);

  // Iteration traversal of tree till there is no node in pre go list.
  while ( nodelist.length > 0) {
    const node = nodelist.pop()!;
    // push val into anwsers arr.
    if (node.val) vals.push(node?.val);
    if (node.right) nodelist.push(node.right);
    if (node.left) nodelist.push(node.left);
  }

  return vals;
};

```

## 成績

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TS iterative|83 ms|75.94%|44.8 MB|28.95%
TS recursive|107 ms|45.11%|44.5 MB|48.12%

![score-image](https://i.imgur.com/ycN8979.png)

迴圈寫法很輕鬆地就得到了高分，側面驗證了遞迴的確會影響效率(最佳化的例外)。

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
