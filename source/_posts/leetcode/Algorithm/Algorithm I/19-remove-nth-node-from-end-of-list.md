---
layout:     post
title:      "[LeetCode]19. Remove Nth Node From End of List"
subtitle:   "Algorithm I"
date:       2022-06-24
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Two Pointers, linked list]
categories: [LeetCode, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 第五天第二個題目，總共有兩題。

+ 難度: `Medium` 
+ 花費時間: 1hr
+ [題目](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

給你一個 linked list 的 head 和一個數字 n ，刪除這個 List 從後面數過來的第 n 個 node 然後回傳 head 。

<!--more-->



<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   The number of nodes in the list is `sz`.
-   `1 <= sz <= 30`
-   `0 <= Node.val <= 100`
-   `1 <= n <= sz`



**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```=
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Example 2:**

```=
Input: head = [1], n = 1
Output: []
```

**Example 3:**

```=
Input: head = [1,2], n = 1
Output: [1]
```
</pre></details>

## 筆記

Two Pointer 作法如下:

+ mainPointer: 一次一步，遍歷列表。
+ delayPointer: 一次一步，但晚 mainPointer n+1 步出發。

當 mainPointer 走到底時，把delayPointer的 next 換成 next.next 然後回傳 head 。

+ 例外處理: 當迴圈跑完 delayPointer 都沒有動的時候，這就代表 n > List.length - 1 所以這個時候我們要判斷:
    1. n == List.length => 回傳 temp.next (代表他移除的正好就是 head)
    2. n == List.length - 1 => 一樣回傳 head 但是要把第二個 node 移除。

```js=
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let tempHead = head;
    let mainPointer = head;
    let delayPointer = head;
    
    // 例外處理
    let flag = false;
    
    while (mainPointer){
        if (n == 0) flag = true;
        if (n + 1 > 0){
            n--
            mainPointer = mainPointer.next;
        }else{
            mainPointer = mainPointer.next;
            delayPointer = delayPointer.next;
        }
    }
    
    if (!flag) return tempHead.next;
    
    if (delayPointer.next) delayPointer.next = delayPointer.next.next;
    return tempHead;
};
```

## 成績

![](https://i.imgur.com/vX56B9j.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->