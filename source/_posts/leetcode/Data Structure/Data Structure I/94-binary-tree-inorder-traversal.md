---
layout:     post
title:      "[LeetCode]94. Binary Tree Inorder Traversal"
subtitle:   "Data Structure I"
date:       2022-09-30
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Tree, Depth-First Search, Binary Tree, Recursion, Iteration]
categories: [LeetCode, Data Structure I]
---

> [Algorithm I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/#09-x2F-27-Day-10-Tree) 第十天第二題，共三題。

+ 難度: `Easy`
+ 花費時間: 30 min
+ 題目: [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

中續遍歷一個二元樹，然後把結果回傳。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ The number of nodes in the tree is in the range `[0, 100]`.
+ `-100 <= Node.val <= 100`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

```=
Input: root = [1,null,2,3]
Output: [1,3,2]
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

這題要練習樹的中序走訪，遵照以下步驟：

1. 有左子節點拿左子節點
2. 沒有左子結點就退回去父節點，拿退回去的那個節點
3. 拿右節點

題目有要求要用迴圈的作法，所以遞迴跟迴圈各寫一個解答。

### Recursive

```ts=
function inorderTraversal(root: TreeNode | null, result: number[] = []): number[] {
  if (root) {
    // 有左節點找左節點
    inorderTraversal(root.left, result);
    // 沒有左節點了就把當前值塞進去
    result.push(root.val);
    // 找右節點
    inorderTraversal(root.right, result);
  }
  return result;
}

```

### iterative

```ts=
function inorderTraversal(root: TreeNode | null): number[] {
  // 答案陣列
  const result: number[] = [];
  // 儲存走過的父節點
  const traverseds: TreeNode[] = [];

  // 只要現在的 head 還有值，或是走過的節點還有值，就繼續跑
  while (root || traverseds.length > 0) {
    // 節點還有值，就把節點塞進去，然後往左走。
    if (root) {
      traverseds.push(root);
      root = root.left;
    } else {
      // 當節點沒有值了，就把當前節點的上個節點的值拿出來，然後往右節點走。
      root = traverseds.pop()!;
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
}

```

## 成績

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TS iterative|73 ms|90.15%|44.4 MB|53.69%
TS recursive|88 ms|73.51%|43.8 MB|96.60%

![score-image](https://i.imgur.com/NnAlRoZ.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
