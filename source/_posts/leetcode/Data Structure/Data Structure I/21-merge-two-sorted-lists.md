---
layout:     post
title:      "[LeetCode]21. Merge Two Sorted Lists"
subtitle:   "Data Structure I"
date:       2022-06-10
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure, Linked List, Merge Sort]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第八天第二個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 3小時
+ [題目](https://leetcode.com/problems/merge-two-sorted-lists/)

傳入兩個 `Linked List` 的 head ， Merge 這兩個 `Linked List` 到一個 `Sorted Linked list`
然後回傳 `Sorted Linked list` 的 head 。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   The number of nodes in both lists is in the range `[0, 50]`.
-   `-100 <= Node.val <= 100`
-   Both `list1` and `list2` are sorted in **non-decreasing** order.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg]()

```=
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**


```=
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**


```=
Input: list1 = [], list2 = [0]
Output: [0]
```
</pre></details>

## 筆記

### Java In-place iteration

使用 Java 寫的版本，差別在更易懂，且是 In-place

使用四個指針:

+ `head` : 指向答案 `list` 的開頭，方便等等回傳答案。
+ `nextNode` : 指向現在要合併的節點。

### TypeScript Merge-list iteration

>這是第一次寫這個題目時寫出來的，宣告了多餘的 `Merge-list`

限制裡有一行寫著 (Both `list1` and `list2` are sorted in **non-decreasing** order.) ，所以我會使用 `Merge Sort` ，做出自己的 `Sorted Linked list` 後回傳。

TypeScript

```ts
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 例外處理 mergeTwoLists([], []): []
    if (!list1 && !list2) return list1;

    let mergedSortedList = new ListNode();


    if ((list1 && list1.val != null && list2 && list2.val != null && list1.val < list2.val) || (!list2)) {
        mergedSortedList.val = list1.val;
        list1 = list1.next;
    } else {
        mergedSortedList.val = list2.val;
        list2 = list2.next;
    }

    let outList = mergedSortedList;

    while (true) {

        if (list1) {
            if (list2 == null || list1.val <= list2.val) {
                // console.log("list1.val: " + list1.val);

                mergedSortedList.next = new ListNode(list1.val);
                mergedSortedList = mergedSortedList.next;

                list1 = list1.next;
            }
        }

        if (list2) {
            if (list1 == null || list2.val < list1.val) {
                // console.log("list2.val: " + list2.val);

                mergedSortedList.next = new ListNode(list2.val);
                mergedSortedList = mergedSortedList.next;

                list2 = list2.next;
            }
        }

        // 如果兩個都跑完了，就回傳 mergedSortedList
        if ((!list1) && (!list2)) return outList;
    }
};
```




## 成績


![](https://i.imgur.com/CCWx9z5.png)

<!-- ##### 參考資料 -->