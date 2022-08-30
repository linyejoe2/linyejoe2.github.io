---
layout:     post
title:      "[LeetCode]617. Merge Two Binary Trees"
subtitle:   "Algorithm I"
date:       2022-08-30
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Tree, Depth-First Search, Breadth-First Search, Binary Tree]
---

>[Algorithm I 筆記撰寫計畫](https://linyejoe2.github.io/2022/06/13/leetcode/Data%20Structure/Data%20Structure%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第八天第一個題目，總共有兩題。

+ 難度: `Easy`
+ 花費時間: 20 min
+ [題目](https://leetcode.com/problems/merge-two-binary-trees/)

給你兩個 `Binary Tree` `root1` 跟 `root2` ，把這兩個 `Tree` 合併之後再回傳即可。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

+ `m == grid.length`
+ `n == grid[i].length`
+ `1 <= m, n <= 50`
+ `grid[i][j]` is either `0` or `1`.

**Example 1:**

![example-1-jpg](https://assets.leetcode.com/uploads/2021/02/05/merge.jpg)

```=
Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]
```

**Example 2:**

```=
Input: root1 = [1], root2 = [1,2]
Output: [2,2]
```

</pre></details>

## 筆記

`Tree` 遍歷很基本的練習，寫了兩個版本，
第一個版本是有建立一個新的 `Tree` 來儲存合併後的數據(比較直覺)。
第二個版本是直接修改 `root1` (in-place)，更能節省空間。

```TS=
/**
 * TreeNode 定義
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
```

### TS Recursion to mergedTrees

```TS=
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) return null;

  return moveToNext(root1, root2);
};

function moveToNext(root1: TreeNode | null, root2: TreeNode | null, mergedTrees: TreeNode = new TreeNode(0)): TreeNode {
  mergedTrees.val = (root1?.val ? root1.val : 0) + (root2?.val ? root2.val : 0);

  if (root1?.left || root2?.left) {
    mergedTrees.left = new TreeNode(0);
    moveToNext((root1?.left ? root1?.left : null), (root2?.left ? root2.left : null), mergedTrees.left);
  }
  if (root1?.right || root2?.right) {
    mergedTrees.right = new TreeNode(0);
    moveToNext((root1?.right ? root1?.right : null), (root2?.right ? root2.right : null), mergedTrees.right);
  }

  return mergedTrees;
};
```

### TS Recursion to root1

```TS=
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1 && !root2) return null;

    return moveToNext(root1?root1:undefined, root2);
};

function moveToNext(root1: TreeNode = new TreeNode(0), root2: TreeNode | null): TreeNode {
    root1.val = (root1?.val ? root1.val : 0) + (root2?.val ? root2.val : 0);

    if (root1?.left || root2?.left) {
        if (!root1?.left) root1.left = new TreeNode(0);
        moveToNext((root1?.left ? root1?.left : null), (root2?.left ? root2.left : null));
    }
    if (root1?.right || root2?.right) {
        if (!root1?.right) root1.right = new TreeNode(0);
        moveToNext((root1?.right ? root1?.right : null), (root2?.right ? root2.right : null));
    }

    return root1;
};
```

## 成績

![](https://i.imgur.com/kxv7HLR.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

</pre></details>

<!-- ##### 參考資料 -->