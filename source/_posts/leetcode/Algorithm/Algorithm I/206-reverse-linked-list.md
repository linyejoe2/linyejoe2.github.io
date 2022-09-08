---
layout:     post
title:      "[LeetCode]206. Reverse Linked List"
subtitle:   "Algorithm I"
date:       2022-09-01
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Linked List, Recursion]
categories: [LeetCode, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)
## 敘述

這是 `Algorithm I` 的第十天第二個題目，總共有兩題。

+ 難度: `Easy`
+ 花費時間: 5 min
+ [題目](https://leetcode.com/problems/reverse-linked-list/)

給你一個 `Linked List` 將其反轉之後回傳。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

+ The number of nodes in the list is the range `[0, 5000]`.
+ `-5000 <= Node.val <= 5000`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```=
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**

![example-image-2](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```=
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**

```=
Input: head = []
Output: []
```

</pre></details>

## 筆記

這題沒什麼限制，所以應該很多方法都可以做，這邊提供兩個方法

### 1. Array iteration

這是我自己想到的方法，我相信也是相對直觀的。

1. 遍歷 `Linked-list` 把所有的 `Node` 存進 `Array`
2. 從 `Array` 的最後一個值開始，把 `next` 指向 `Array` 的上一個值。

TypeScript

```TS=
function reverseList(head: ListNode | null): ListNode | null {
    // 例外處理
    if (!head) return null;

    // 建立一個 Arr 儲存所有 Node
    let NodeArr: ListNode[] = [];

    // 遍歷一次 linked-list 把所有節點放進 Arr
    let nextNode = head;
    while (true) {
        NodeArr.push(nextNode);
        if (nextNode.next) {
            nextNode = nextNode.next;
        } else break;
    }

    // 先噴出最後一顆，我們不需要
    NodeArr.pop();

    // 遍歷 Arr 把 next 做回去
    head = nextNode;
    for (let i = NodeArr.length - 1; i > 0; i--) {
        // 噴出 Arr 最後一顆
        nextNode.next = NodeArr.pop()!;
        nextNode = nextNode.next;
    }

    // 防止迴圈
    nextNode.next = null;

    return head;
};
```

### 2. In-place iteration

有點類似 `two-pointers` 的概念

1. 宣告兩個指針存取當前的 `head` 跟 `head.next` = `nextHead`
2. 宣告一個 `tempNode` 佔存 `nextHead.next`
3. `nextHead.next` 指向 `haed`
4. `head` 往後推
5. `nextHead` 往後推
6. 重複上述步驟直到 `nextHead == null`

Java

```Java=
public ListNode reverseList(ListNode head) {
    // 例外處理
    if (head == null) return head;

    // 先存下 next
    ListNode nextHead = head.next;

    // 把 head.next 指向 null 避免迴圈
    head.next = null;

    while (nextHead != null) {
        //// 很簡單的轉換
        // 先存下 next
        ListNode tempNode = nextHead.next;
        // 把 nextHead.next 往前指
        nextHead.next = head;
        // 把 head 往後推
        head = nextHead;
        // 把 nextHead 往後推
        nextHead = tempNode;
    }

    return (head);
}
```

還有 recursion 版本的，但是都大同小異，就等下次遇到這個題目再來做就好。

## 成績

![score-image](https://i.imgur.com/YBVpi6s.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

</pre></details>

<!-- ##### 參考資料 -->