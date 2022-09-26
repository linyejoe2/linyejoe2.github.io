---
layout:     post
title:      "[LeetCode]83. Remove Duplicates from Sorted List"
subtitle:   "Data Structure I"
date:       2022-09-22
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure, Linked List, Iteration]
categories: [LeetCode, Data Structure I]
---

> [Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/#09-x2F-13-Day-12-Dynamic-Programming) 第八天第二題，共兩題。

+ 難度: `Easy`
+ 花費時間: 30 min
+ 題目: [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

給你一個 `Linked List` 的 `head` ，刪除所有重複的節點，然後回傳新的 `Linked List`

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ The number of nodes in the list is in the range `[0, 300]`.
+ `-100 <= Node.val <= 100`
+ The list is guaranteed to be **sorted** in ascending order.

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)

```=
Input: head = [1,1,2]
Output: [1,2]
```

**Example 2:**

![example-image-2](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)

```=
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

**Definition for singly-linked list.**

```TS=
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
```

</details>

## 筆記

這題簡單的讓我們練習了一下 `Linked List`

步驟如下

1. 遍歷 `List`
2. 每個 `Node` 都跟 `Node.next` 做比較
   + 如果相等: 把 `Node.next` 指向 `Node.next.next` 重複直到不相等
3. 回傳 `Head`

TS iterative solution.

```TS=
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head;// 當前節點

  // 遍歷 list
  while (node?.next) {
    // 重複把 node.next 指向 node.next.next 直到 val 不相等
    while (node.next && node.val === node.next.val) {
      node.next = node.next.next;
    }
    node = node.next;
  }
  return head;
};

```

Java recursive solution.

```Java=
class Solution {

  public ListNode deleteDuplicates(ListNode head) {
    traverse(head);
    return head;
  }

  public void traverse(ListNode node) {
    if (node == null || node.next == null) return;
    if (node.val == node.next.val) {
      node.next = node.next.next;
      traverse(node);
    } else {
      node = node.next;
      traverse(node);
    }
  }
}

```

## 成績

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
Java|1 ms|80.63%|43.9 MB|73.27%
TypeScript|77 ms|95.35%|45.4 MB|22.74%

![score-image](https://i.imgur.com/8bC4qQ9.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
