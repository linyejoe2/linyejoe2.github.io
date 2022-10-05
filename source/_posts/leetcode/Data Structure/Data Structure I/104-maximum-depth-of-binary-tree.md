---
layout:     post
title:      "[LeetCode]104. Maximum Depth of Binary Tree"
subtitle:   "Data Structure I"
date:       2022-10-05
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Tree, Binary Tree, Breadth-First Search, Depth-First Search, Iteration, Recursion ]
categories: [LeetCode, Data Structure I]
---

> [Algorithm I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/#10-x2F-05-Day-11-Tree) 第十一天第二題，共三題。

+ 難度: `Easy`
+ 花費時間: 5 min
+ 題目: [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

給你一個 `Binary Tree` ，回傳他的深度。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ The number of nodes in the tree is in the range `[0, 10^4]`.
+ `-100 <= Node.val <= 100`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

```=
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

**Example 2:**

```=
Input: root = [1,null,2]
Output: 2
```

</details>

<!-- <details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

</details> -->

## 筆記

這題題目要求非常簡單，回傳深度。

嘗試用 `DFS` 跟 `BFS` 兩種方式做。

### DFS

DFS 相對簡單，就左右比大小就好。

```ts=
function maxDepth(root: TreeNode | null): number {
  function _dfs(node: TreeNode, depth = 1): number {
    // 如果這個結點沒有左節點也沒有右節點了，就直接回傳這個節點的深度
    if (!node.left && !node.right) return depth;
    // 回傳左右比大小的深度
    return Math.max(node.left ? _dfs(node.left, depth + 1) : 0, node.right ? _dfs(node.right, depth + 1) : 0);
  }
  // 回傳比大小的結果
  return root ? _dfs(root) : 0;
}

```

### BFS

概念跟 [\[LeetCode\]102. Binary Tree Level Order Traversal](/2022/10/05/leetcode/Data%20Structure/Data%20Structure%20I/102-binary-tree-level-order-traversal/#%E7%AD%86%E8%A8%98) 很像，把深度存起來，但是這次用的不同的資料結構。

```ts=
function maxDepth(root: TreeNode | null): number {
  // 錯誤處理
  if (!root) return 0;

  // 設定答案深度跟 stack
  let maxDepth = 0;
  const stack: { node: TreeNode, depth: number }[] = [{ node: root, depth: 1 }];

  // 跑到 stack 沒貨
  while (stack.length > 0) {
    // 拿出深度跟節點
    const depth = stack[stack.length - 1].depth;
    const node = (stack.pop())!.node;

    // 有子節點就繼續往下找
    if (node.left || node.right) {
      if (node.left) stack.push({ node: node.left, depth: depth + 1 });
      if (node.right) stack.push({ node: node.right, depth: depth + 1 });
      // 沒有子節點了才做深度比較。
    } else maxDepth = Math.max(maxDepth, depth);
  }
  return maxDepth;
}

```

## 成績

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
BFS|73 ms|96.84%|46.7 MB|27.31%
DFS|120 ms|45.26%|46.8 MB|27.31%

![score-image](https://i.imgur.com/yIBat8v.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
