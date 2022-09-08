---
layout:     post
title:      "[LeetCode]116. Populating Next Right Pointers in Each Node"
subtitle:   "Algorithm I"
date:       2022-08-30
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Tree, Depth-First Search, Breadth-First Search, Binary Tree, Linked List]
categories: [LeetCode, Algorithm, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第八天第二個題目，總共有兩題。

+ 難度: `Medium`
+ 花費時間: 2 hr
+ [題目](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)

給你一個 `perfect binary tree` ，把每個左邊節點的 next 對應到右邊節點上，沒有右邊節點就對應到 null ，最後把整個 `tree` 回傳。

> `perfect binary tree`: 完美的二元樹，沒有缺失的節點

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

+ The number of nodes in the tree is in the range `[0, 212 - 1]`.
+ `-1000 <= Node.val <= 1000`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2019/02/14/116_sample.png)

```=
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

**Example 2:**

```=
Input: root = []
Output: []
```

</pre></details>

## 筆記

有兩個方法可以做這題：

假設

+ 父節點 = `root`
+ 左節點 = `left`
+ 右節點 = `right`

### 1. DFS

`left` 很好想， `left.next` 就等於 `right` ，
但這題目的重點在 `right` ， `right` 會跨樹，所以要透過 `root` 指定到旁邊那棵樹的 `left`
所以這個做法的重點是

**`right.next = root.next.left`**

程式碼: TypeScript 實作

```TS
function connect(root: TreeNode | null): TreeNode | null {
    // 例外處理
    if (!root) return root;

    // 左節點的 next = 右節點
    if (root.left && root.right) root.left.next = root.right;

    // 右節點的 next = 父節點的 next 的 左節點 | null
    if (root.right) root.right.next = root.next?.left ? root.next.left : null;

    // 遞迴
    connect(root.left);
    connect(root.right);

    return root;
};
```

### 2. flatting to Array

由於題目限定了 `tree` 為 `perfect binary tree` ，所以可以直接把 `tree` 扁平化，把每個節點都拿出來放進 Array

然後遍歷 Array 增加層數資訊即可

程式碼: TypeScript 實作

```TS=
function connect(root: TreeNode | null): TreeNode | null {
    // 例外處理
    if (!root) return root;

    // 扁平化
    let rootArr = flattingTreetoArray(root);

    // 陣列裡每二的平方加入 null (層數資訊)
    let answerArr: (TreeNode | null)[] = [];
    for (let i = 0; rootArr.length > 0; i++) {
        // 1. 把這層抽出來: rootArr.slice(0, 1 << i)
        // 2. 把他併入 answerArr
        answerArr = answerArr.concat(rootArr.slice(0, 1 << i));
        // 3. 在 answerArr 裡插入結束標記
        answerArr.push(null);
        // 在 rootArr 裡刪掉剛剛合併完的資料
        rootArr = rootArr.slice(1 << i, rootArr.length + 1);
    };

    let tempNode = root;
    while (true) {
        // 把自己從陣列裡 shift 出來
        answerArr.shift();

        // 如果陣列都跑完了，就跳出去
        if (answerArr.length <= 0) return root;

        if (answerArr[0] === null) {
            // 如果下一個 val 是 null ，那就放 null 然後刪掉
            tempNode.next = answerArr.shift()!;
        } else {
            // 如果不是 null ，那就不要刪掉(因為等等要跑)
            tempNode.next = answerArr[0];
        }

        // 再跑下個節點
        tempNode = answerArr[0]!;
    }
};

/**
 * 傳入完美二元樹，傳出攤平後的陣列
 * @param root 傳入的完美二元樹
 * @param nodeArr 攤平後的陣列
 * @param appendArr 待執行的陣列 BFS  
 * @returns nodeArr
 */
function flattingTreetoArray(
    root: TreeNode, nodeArr: (TreeNode | null)[] = [], appendArr: TreeNode[] = []): (TreeNode | null)[] {
    nodeArr.push(root);

    if (root.left) appendArr.push(root.left);
    if (root.right) appendArr.push(root.right);

    if (appendArr.length === 0) return nodeArr;
    return flattingTreetoArray(appendArr.shift()!, nodeArr, appendArr);
}
```

## 成績

DFS

![score-image](https://i.imgur.com/GIqDaaJ.png)

flatting to Array

![score-image-2](https://i.imgur.com/doYHQ4e.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

</pre></details>

<!-- ##### 參考資料 -->