---
layout:     post
title:      "[LeetCode]567. Permutation In String"
subtitle:   "Algorithm I"
date:       2022-08-15
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Hash Table, Sliding Window, Two Pointers]
categories: [LeetCode, Algorithm, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第六天第二個題目，總共有兩題。

+ 難度: `Medium`
+ 花費時間: 3 小時
+ [題目](https://leetcode.com/problems/permutation-in-string/)

Given you two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1` , otherwise return `false`.

> permutation: 字母重組字

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

-   `1 <= s1.length, s2.length <= 104`
-   `s1` and `s2` consist of lowercase English letters.

**Example 1:**

```=
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

**Example 2:**

```=
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```
</pre></details>

## 筆記

本來這題我想要用 `Hash Map` 做，但是想破頭有點問題，所以最後參考了評論區，評論區的一個做法我覺得很有意思，他運用了英文的編碼，直接把編碼出現次數存在陣列裡，然後存放的位置就是那個編碼的碼數，這直接解決了某個 `char` 重複多次的問題。

然後先用兩個 `Array` 存下 `s1` 長度的字串邊碼，然後再運用 `Sliding Window` 去看兩個 `Array` 是否一樣，不一樣就把 `Window` 繼續往下一個 `index` 前進，直到最後都還是不一樣就回傳 `false` 著實精妙。

## 程式碼

```java=
public boolean checkInclusion(String s1, String s2) {
    if (s1.length() > s2.length()) return false;
    int[] s1Arr = new int[26];
    int[] s2Arr = new int[26];
    
    for (int i = 0; i < s1.length(); i++){
        s1Arr[s1.charAt(i) - 'a']++;
        s2Arr[s2.charAt(i) - 'a']++;
    }
    
    if (Arrays.equals(s1Arr, s2Arr)) return true;
    
    int right = s1.length();
    int left = 0;
    
    while (right < s2.length()) {
        s2Arr[s2.charAt(right) - 'a']++;
        s2Arr[s2.charAt(left) - 'a']--;
        if (Arrays.equals(s1Arr, s2Arr)) return true;
        
        right++;
        left++;
    }
    
    return false;
}
```

## 成績

![](https://i.imgur.com/LmtSHLF.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->