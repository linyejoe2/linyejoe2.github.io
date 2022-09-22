---
layout:     post
title:      "[LeetCode]203. Remove Linked List Elements"
subtitle:   "Data Structure I"
date:       2022-06-10
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure, Linked List]
categories: [LeetCode, Data Structure I]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/)

## 敘述

這是 `Data Structure I` 的第八天第三個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 1小時
+ [題目](https://leetcode.com/problems/remove-linked-list-elements/)

傳入一個 `Linked List` 的 head ，然後再傳入一個數字，移除這個 `Linked List` 裡所有等於這個數字的節點，然後回傳 head 。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   The number of nodes in the list is in the range `[0, 10^4]`.
-   `1 <= Node.val <= 50`
-   `0 <= val <= 50`


**Example 1:**

![https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg]()

```=
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
```

**Example 2:**

```=
Input: head = [], val = 1
Output: []
```

**Example 3:**

```=
Input: head = [7,7,7,7], val = 7
Output: []
```
</pre></details>

## 筆記

判斷 `head.next.val` 是否是要被移除的，如果是，那就把 `head.next` 連結到 `head.next.next` ，這樣就等於是 `remove this node` 了。

## 程式碼

```js=
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val, outHead) {

    if (head && !outHead && head.val == val) {
        while (head.val == val) {
            head = head.next;
            if (head == null) return head;
        }
        outHead = head;
    } else if (!outHead) {
        outHead = head;
    }

    if (!head || !head.next) return outHead ? outHead : head;

    if (head.val == val) {
        head = head.next;
    } else if (head.next.val == val) {
        while (head.next && head.next.val == val) {
            head.next = head.next.next;
        }
    }

    return removeElements(head.next, val, outHead);
};
```

## 成績



![](https://i.imgur.com/CCWx9z5.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>


<!-- ##### 參考資料 -->