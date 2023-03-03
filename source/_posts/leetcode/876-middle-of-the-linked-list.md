---
layout:     post
title:      "[LeetCode]876. Middle of the Linked List"
subtitle:   "Daily Challenge"
date:       2022-12-05
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Linked List, Two Pointer ]
categories: [LeetCode]
---

+ 難度: `Easy`
+ 花費時間: 5 min
+ 題目: [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

給你一個 `Linked List` ，回傳他的中間，如果他的中間有兩個，就回傳第二個。
<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

-   The number of nodes in the list is in the range `[1, 100]`.
-   `1 <= Node.val <= 100`

**Example 1:**

![example-image-1](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)

```=
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
```

**Example 2:**

![example-image-1](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)

```=
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
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

<!-- <details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

</details> -->

## 筆記

這題非常好做，幾乎算是秒殺題，只要你會 `Two Pointer` 的基礎邏輯就好：

1. 設置一個領先旗標跟一個滯後旗標
2. 領先旗標一次跳兩個節點，滯後旗標一次跳一個節點
3. 領先旗標觸底之後如果前面還有一個節點，那就回傳滯後旗標的 `next`
4. 領先旗標如果剛好跳到終點，那就回傳滯後旗標的 `node`

## 程式

```ts=
function middleNode(head: ListNode | null): ListNode | null {
  let leadP = head, delayP = head
  while (leadP?.next?.next) {
    leadP = leadP.next.next
    delayP = delayP!.next
  }
  if (leadP?.next) return delayP!.next
  return delayP
}

```

## 成績

<!-- Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TS iterative|91 ms|74.63%|44.7 MB|18.41%
TS recursive|80 ms|82.21%|43.9 MB|87.98% -->

![score-image](https://i.imgur.com/yQ1CxD5.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
