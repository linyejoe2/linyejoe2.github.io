---
layout:     post
title:      "[LeetCode]876. Middle of the Linked List"
subtitle:   "Algorithm I"
date:       2022-06-24
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Two Pointers, linked list]
categories: [LeetCode, Algorithm, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 第五天第一個題目，總共有兩題。

+ 難度: `Easy` 
+ 花費時間: 30min
+ [題目](https://leetcode.com/problems/middle-of-the-linked-list/)

給你一個 linked list 的 head ，回傳 linked list 正中央的 node ，如果 linked list 是偶數的話，就回傳中間第二個值。

<!--more-->



<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   The number of nodes in the list is in the range `[1, 100]`.
-   `1 <= Node.val <= 100`


**Example 1:**

![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)

```=
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)

```=
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
```
</pre></details>

## 筆記

這道題稍微看一下題目就看的出來，是為了 Two Pointer 特別設計的，一個 Pointer 一次走一步，另一個一次兩步，等另一個走到 List 最後，再回傳第一個就好。

作法如下:

+ mainPointer: 一次兩步，直到撞到最後
+ delayPointer: 一次一步， mainPointer 撞到最後，就回傳值。

```js=
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let middleNode = function(head) {
    let mainPointer = head;
    let delayPointer = head;
    while (mainPointer) {
        if (!mainPointer.next) break;
        delayPointer = delayPointer.next;
        if (!mainPointer.next.next) break;
        mainPointer = mainPointer.next.next;
    }
    return delayPointer;
};
```

## 成績

![](https://i.imgur.com/hTDGIxR.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->