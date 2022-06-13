---
layout:     post
title:      "[LeetCode]21. Merge Two Sorted Lists"
subtitle:   "Data Structure I"
date:       2022-06-10 10:12:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure, Linked List, Merge Sort]
---

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

限制裡有一行寫著 (Both `list1` and `list2` are sorted in **non-decreasing** order.) ，所以我會會使用 `Merge Sort` ，做出自己的 `Sorted Linked list` 後回傳。

## 程式碼

```ts=
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

這個寫法多半就是正解了，但還有一個問題，就是我有宣告新的 List 來存資料，但其實可以用原來的兩個 List 就好，這樣可以節省很大部分的空間還有一點時間，以後有機會再把他完善。

<!-- TODO -->

![](https://i.imgur.com/CCWx9z5.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>


<!-- ##### 參考資料 -->