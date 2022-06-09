---
layout:     post
title:      "[LeetCode]141. Linked List Cycle"
subtitle:   "Data Structure I"
date:       2022-06-08
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure, Two Pointers, Hash Table]
---

## 敘述

這是 `Data Structure I` 的第八天第一個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 2小時
+ [題目](https://leetcode.com/problems/linked-list-cycle/)

傳入一個 `Linked List` 的 head ，判斷這個 `Linked List` 是否循環(某個 next 指到前面的 val)

[Linked List 介紹](https://chupai.github.io/posts/200427_ds_linkedlist/)

<!--more-->

如果他有迴圈就回傳 `true` ，如果沒有就回傳 `false` 。

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   The number of the nodes in the list is in the range `[0, 104]`.
-   `-105 <= Node.val <= 105`
-   `pos` is `-1` or a **valid index** in the linked-list.

**Example 1:**

![https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png]()

```=
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

**Example 2:**

![https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png]()

```=
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

**Example 3:**

![https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png]()

```=
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```
</pre></details>

## 筆記

使用 `Two Pointers` 就可以解決這個問題，但是我沒有想到 `Two Pointers` 的寫法，我很抱歉 TAT

#### 複雜度

`Two Pointers`:
+ 時間複雜度: O(n)
+ 空間複雜度: O(1)

`Hash Table`
+ 時間複雜度: O(n)
+ 空間複雜度: O(n)

我用的 `Hash Table` 寫出了兩種不同的程式碼，但都成績很差，因為 `Two Pointers` 算這題的正解， `Hash Table` 只能算是可以寫。

<!-- two pointers 寫法 TODO -->

解題思路也非常清晰易懂，遍歷一次陣列然後同時檢查 `head` 是否有在 `Hash Table` 裡，步驟如下:
+ 遍歷陣列:
    1. 檢查 `head` 跟 `head.next` 是否存在:
        + 只要一個不存在 > `return false`
    2. 檢查 `head` 是否有在 `Hash Table` :
        + 如果有 > `return true` 代表有迴圈。
    3. 把 `head` 放入 `Hash Table`
    4. 把 `head` 指向 `head.next`


## 程式碼

#### Iterate Style

```js=
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function (head) {
    // let headMap = new Map;
    let headArr = [];

    while (head && head.next){
        // console.log("head.val: " + head.val)
        // console.log("head.next: " + head.next)
        // console.log("headArr: ", headArr)

        if (headArr.indexOf(head) != -1) return true;

        headArr.push(head);

        head = head.next;
    }
    return false
};
```

#### Recursive Style

```js=
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // let headMap = new Map;
    let headArr = [];

    return loopHead(head, headArr);
};

function loopHead(head, headArr) {

    if (!head || !head.next) return false;
    if (headArr.indexOf(head) != -1) return true;

    headArr.push(head);

    return loopHead(head.next, headArr);
}
```

## 成績

![](https://i.imgur.com/ihYYNK2.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->