---
layout:     post
title:      "[LeetCode]3. Longest Substring Without Repeating Characters"
subtitle:   "Algorithm I"
date:       2022-08-15
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Hash Table, Sliding Window]
categories: [LeetCode, Algorithm, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第六天第一個題目，總共有兩題。

+ 難度: `Medium`
+ 花費時間: 1 小時
+ [題目](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

Given a string `s`, find the length of the **longest substring** without repeating characters.

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

-   `0 <= s.length <= 5 * 104`
-   `s` consists of English letters, digits, symbols and spaces.

**Example 1:**

```=
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```=
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```=
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```
</pre></details>

## 筆記

這題要用到 `Hash Table` 跟 `Sliding Window`
`Sliding Window` 的重點是何時收斂。

在這題，我們每加入一個 `char` 到 `sSet` 裡，就會跟第一個值比較，
所以，**如果新加入的值有重複，就進入收斂模式，收斂到新加入的這個值沒有跟 set 裡的值重複**，掌握這個重點，問題就迎刃而解了。

## 程式碼

```java=
public int lengthOfLongestSubstring(String s) {
    int count = 0;
    int l = 0; // left
    int r = 0; // right
    HashSet<Character> sSet = new HashSet<Character>();
    
    for (r = 0; r < s.length();) {
        if (!sSet.contains(s.charAt(r))) {
            sSet.add(s.charAt(r));
            count = Math.max(count, sSet.size());
            r++;
        }else {
            sSet.remove(s.charAt(l++));
        }
    }
    return count;
}
```

## 成績

![](https://i.imgur.com/RwWXJEQ.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->