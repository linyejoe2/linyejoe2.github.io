---
layout:     post
title:      "[LeetCode]145. Binary Tree Postorder Traversal"
subtitle:   "Data Structure I"
date:       2022-10-03
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Tree, Depth-First Search, Binary Tree, Recursion, Iteration]
categories: [LeetCode, Data Structure I]
---

> [Algorithm I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/#09-x2F-27-Day-10-Tree) 第十天第三題，共三題。

+ 難度: `Easy`
+ 花費時間: 30 min
+ 題目: [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

後續遍歷一個二元樹，然後把結果回傳。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ The number of nodes in the tree is in the range `[0, 100]`.
+ `-100 <= Node.val <= 100`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

```=
Input: root = [1,null,2,3]
Output: [3,2,1]
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

這題要練習樹的後序走訪，遵照以下步驟：

1. 先拿左節點
2. 再拿右節點
3. 最後拿父節點

題目有要求要用迴圈的作法，所以遞迴跟迴圈各寫一個解答。

### Recursive

```ts=
function postorderTraversal(root: TreeNode | null, res: number[] = []): number[] {
  // 有值就往內走
  if (root) {
    // 左邊有值就往左邊走
    postorderTraversal(root.left, res);
    // 右邊有值就往右邊走
    postorderTraversal(root.right, res);
    // 左右都走完了，塞回去
    res.push(root.val);
  }
  return res;
};

```

### iterative

```ts=
function postorderTraversal(root: TreeNode | null): number[] {
  // 例外處理
  if (!root) return [];
  // 答案陣列
  let result: number[] = [];
  // 待處理的節點
  let stack: TreeNode[] = [root];

  // 只要 stack 裡還有節點，就繼續跑
  while(stack.length > 0) {
    // 把最後一個節點拿出來
    let node = stack.pop()!;
    // 把這個節點的值放進答案陣列的最前面
    result.unshift(node.val);
    // 如果他有左右，就放進 stack 裡等待處理
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return result;
};

```

## 成績

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TS iterative|91 ms|74.63%|44.7 MB|18.41%
TS recursive|80 ms|82.21%|43.9 MB|87.98%

![score-image](https://i.imgur.com/RpH1kId.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
