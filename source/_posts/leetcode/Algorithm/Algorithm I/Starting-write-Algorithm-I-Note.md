---
layout:     post
title:      "[LeetCode] Algorithm I 筆記撰寫計畫"
subtitle:   "Algorithm I"
date:       2022-06-14 18:10:00
updated:    2022-06-24
author:     "linyejoe2"
header-style: text
catalog: true
# description: ""
tags: [LeetCode, Algorithm]
categories: [LeetCode, Algorithm I]
sticky: 999
project: true
---

> 計畫: [Algorithm I](https://leetcode.com/study-plan/algorithm/)

## 前言

演算法（algorithm），在數學（算學）和電腦科學之中，為任何良定義的具體計算步驟的一個序列，常用於計算、資料處理和自動推理。精確而言，演算法是一個表示爲有限長，列表的有效方法。演算法應包含清晰定義的指令，用於計算函式。

<!--more-->

事情是這樣的，我剛完成 `Data Structure I 筆記撰寫計畫` 裡的 [Day7: Linked List](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/#06-x2F-13-%E7%AC%AC%E4%B8%83%E5%A4%A9) ，但重新整理清單之後，我的題目就被重置了，
原來是 LeetCode 強制規定這些計畫必須要在計劃時間內全部做完，不然就要重做，
我剛好在最後一天做完一半的題目，所以接下來的題目要再等七天才能做了，所以我就來換做 [演算法](https://leetcode.com/study-plan/algorithm/?progress=gxelya3) ~

規則大致相同:

+ 跟著進度每天做答，並記錄在這個 Blog 上。
+ 如果半小時內沒有頭緒，就參考評論區的解法，力求半小時內解完一題！

--------------

## 06/13 Day 1: Binary Search

+ 704\. Binary Search `Easy` [題目](https://leetcode.com/problems/binary-search/) [筆記](/2022/06/13/leetcode/Algorithm/Algorithm%20I/704-binary-search/)
+ 278\. First Bad Version `Easy` [題目](https://leetcode.com/problems/first-bad-version/) [筆記](https:/linyejoe2.github.io/2022/06/13/leetcode/Algorithm/Algorithm%20I/278-first-bad-version/)
+ 35\. Search Insert Position `Easy` [題目](https://leetcode.com/problems/search-insert-position/) [筆記](/2022/06/13/leetcode/Algorithm/Algorithm%20I/35-search-lnsert-position/)

今天學了 Binary Search ，三題做完有由不懂到懂的感覺，所以你也可以發現我的成績是慢慢成長的，第二題小卡關，所以最後有參考評論區，整體來說有學到東西，非常好學習~

--------------

## 06/14 Day 2 Two Pointers

+ 977\. Squares of a Sorted Array `Easy` [題目](https://leetcode.com/problems/squares-of-a-sorted-array/) [筆記](/2022/06/14/leetcode/Algorithm/Algorithm%20I/977-squares-of-a-sorted-array/)
+ 189\. Rotate Array `Medium` [題目](https://leetcode.com/problems/rotate-array/) [筆記](/2022/06/14/leetcode/Algorithm/Algorithm%20I/189-rotate-array/)

今天雖然題目是 Two Pointers ，但是使用的解法完全沒有學到 Two Pointers 呢，之後再補上吧~

--------------

## 06/15 Day 3 Two Pointers

+ 283\. Move Zeroes `Easy` [題目](https://leetcode.com/problems/move-zeroes/) [筆記](/2022/06/15/leetcode/Algorithm/Algorithm%20I/283-move-zeroes/)
+ 167\. Two Sum II - Input Array Is Sorted `Medium` [題目](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) [筆記](/2022/06/15/leetcode/Algorithm/Algorithm%20I/167-two-sum-ii-input-array-is-sorted/)

第一題 283. Move Zeroes 自己只想出了內建函式的快速寫法，想不到怎麼用 Two Pointers 寫，於是參考了下評論區，雖然寫出來了，不過思路果然很難猜到，再努力吧~

第二題 167. Two Sum II
有想過兩種做法

1. 兩個指針分別從頭跟尾開始遍歷
2. 先找到中間，然後從中間開始往頭尾遍歷
但是最後都沒寫出來，快升天了，最後參考了一下評論區的做法，的確是從頭尾開始，但是一次只動一個指針，運用的是題目**兩個數字加起來等於答案，且第一個數字一定小於第二個數字**的特性。

--------------

## 06/16 Day 4 Two Pointers

+ 344\. Reverse String `Easy` [題目](https://leetcode.com/problems/reverse-string/) [筆記](/2022/06/16/leetcode/Algorithm/Algorithm%20I/344-reverse-string/)
+ 557\. Reverse Words in a String III `Easy` [題目](https://leetcode.com/problems/reverse-words-in-a-string-iii/) [筆記](/2022/06/16/leetcode/Algorithm/Algorithm%20I/557-reverse-words-in-a-string-iii/)

這次的筆記 06/16 就寫好了，但拖到 06/24 才上線，假日去參加了 [kuso game jam 2022](https://www.facebook.com/TWKusoGameJam/) ，最後做出來的 game 果然也很糞，還有隊友喝太多一直狂吐，在這邊 shout out to 我兄弟大狗。

--------------

## 06/24 Day 5 Two Pointers

+ 876\. Middle of the Linked List `Easy` [題目](https://leetcode.com/problems/middle-of-the-linked-list/) [筆記](/2022/06/24/leetcode/Algorithm/Algorithm%20I/876-middle-of-the-linked-list/)
+ 19\. Remove Nth Node From End of List `Medium` [題目](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) [筆記](/2022/06/24/leetcode/Algorithm/Algorithm%20I/19-remove-nth-node-from-end-of-list/)

今天是 Two Pointers 最後一天，今天的題目反而我覺得比較簡單，可能是因為 Linked List 的結構非常好懂吧~
對 Linked List 有一點認識的人可以先看第二題，看不懂再去看第一題。

--------------

## 08/15 Day 6 Sliding Window

+ 3\. Longest Substring Without Repeating Characters `Medium` [題目](https://leetcode.com/problems/longest-substring-without-repeating-characters/) [筆記](/2022/08/15/leetcode/Algorithm/Algorithm%20I/3-longest-substring-without-repeating/)
+ 567\. Permutation in String `Medium` [題目](https://leetcode.com/problems/permutation-in-string/) [筆記](/2022/08/15/leetcode/Algorithm/Algorithm%20I/567-permutation-in-string/)

--------------

## 08/29 Day 7 Breadth-First Search / Depth-First Search

+ 733\. Flood Fill `Easy` [題目](https://leetcode.com/problems/flood-fill/) [筆記](/2022/08/29/leetcode/Algorithm/Algorithm%20I/733-flood-fill/)
+ 695\. Max Area of Island `Medium` [題目](https://leetcode.com/problems/max-area-of-island/) [筆記](/2022/08/29/leetcode/Algorithm/Algorithm%20I/695-max-area-of-island/)

--------------

## 08/30 Day 8 Breadth-First Search / Depth-First Search

+ 617\. Merge Two Binary Trees `Easy` [題目](https://leetcode.com/problems/merge-two-binary-trees/) [筆記](/2022/08/30/leetcode/Algorithm/Algorithm%20I/617-merge-two-binary-trees/)
+ 116\. Populating Next Right Pointers in Each Node `Easy` [題目](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) [筆記](/2022/08/30/leetcode/Algorithm/Algorithm%20I/116-populating-next-right-pointers-in-each-node/)

--------------

## 09/05 Day 9 Breadth-First Search / Depth-First Search

+ 542\. 01 Matrix `Medium` [題目](https://leetcode.com/problems/01-matrix/) [筆記](/2022/09/07/leetcode/Algorithm/Algorithm%20I/542-01-matrix/)
+ 994\. Potting Oranges `Medium` [題目](https://leetcode.com/problems/rotting-oranges) [筆記](http://localhost:4000/2022/09/07/leetcode/Algorithm/Algorithm%20I/994-rotting-oranges/)

--------------

## 09/01 Day 10 Recursion / Backtracking

+ 21\. Merge Two Sorted Lists `Easy` [題目](https://leetcode.com/problems/merge-two-sorted-lists/) [筆記](/2022/06/10/leetcode/Data%20Structure/Data%20Structure%20I/21-merge-two-sorted-lists/)
+ 206\. Reverse Linked List `Easy` [題目](https://leetcode.com/problems/reverse-linked-list/) [筆記](/2022/09/01/leetcode/Algorithm/Algorithm%20I/206-reverse-linked-list/)

第一題之前在 [Data Structure I](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/#06-x2F-13-%E7%AC%AC%E4%B8%83%E5%A4%A9) 也有做到，這次就來補充其他寫法。

--------------

## 09/05 Day 11 Recursion / Backtracking

+ 77\. Combinations `Medium` [題目](https://leetcode.com/problems/combinations/) [筆記](/2022/09/05/leetcode/Algorithm/Algorithm%20I/77-combinations/)
+ 46\. Permutations `Medium` [題目](https://leetcode.com/problems/permutations/) [筆記](/2022/09/13/leetcode/Algorithm/Algorithm%20I/46-permutations/)
+ 784\. Letter Case Permutation `Medium` [題目](https://leetcode.com/problems/letter-case-permutation/) [筆記](/2022/09/14/leetcode/Algorithm/Algorithm%20I/784-letter-case-permutation/)

--------------

## 09/13 Day 12 Dynamic Programming

+ 70\. Climbing Stairs `Easy` [題目](https://leetcode.com/problems/climbing-stairs/) [筆記](/2022/09/12/leetcode/Algorithm/Algorithm%20I/70-climbing-stairs/)
+ 198\. House Robber `Medium` [題目](https://leetcode.com/problems/house-robber/) [筆記](/2022/09/14/leetcode/Algorithm/Algorithm%20I/198-house-robber/)
+ 120\. Triangle `Medium` [題目](https://leetcode.com/problems/triangle/) [筆記](/2022/09/21/leetcode/Algorithm/Algorithm%20I/120-triangle/)

--------------

## 09/13 Day 13 Bit Manipulation

+ 231\. Power of Two `Easy` [題目](https://leetcode.com/problems/power-of-two/) 筆記
+ 191\. Number of 1 Bits `Easy` [題目](https://leetcode.com/problems/number-of-1-bits/) 筆記

--------------

## 09/13 Day 14 Bit Manipulation

+ 190\. Reverse Bits `Easy` [題目](https://leetcode.com/problems/reverse-bits/) 筆記
+ 136\. Single Number `Easy` [題目](https://leetcode.com/problems/single-number/) 筆記
