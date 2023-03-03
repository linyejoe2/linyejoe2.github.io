---
layout:     post
title:      "[LeetCode]28. Find the Index of the First Occurrence in a String"
subtitle:   "Daily Challenge"
date:       2023-03-03
author:     "linyejoe2"
header-style: text
catalog: true
# description:
tags: [LeetCode, Daily Challenge, Two Pointers, String]
categories: [LeetCode, 2023 march daily challenge]
---

<!-- >[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/) -->

## 敘述

+ 難度: `Medium`
+ 花費時間: 10 分鐘
+ [題目](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)

給你一個包含英文的陣列 `haystack` ，再給你一個包含英文的陣列 `needle`

找出 `needle` 有沒有存在於 `haystack` 裡，有的話就回傳第一個值的索引。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

+ `1 <= haystack.length, needle.length <= 10^4`
+ `haystack` and `needle` consist of only lowercase English characters.

**Example 1:**

```=
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

**Example 2:**

```=
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```

</pre></details>

## 初見

想要用 `Two Pointers` 來做

## 筆記

使用 `Sliding Window` 來做

1. 判斷 `needle[0]` 是否等於 `haystack[i]`
   1. 如果等於: 進入 Window 內部比較，如果都等於，代表有正解，回傳 `haystack[i]`
   2. 如果不等於: Window 橫移一格 => i += 1

`TypeScript:`

```typescript
function strStr(haystack: string, needle: string): number {
  // let j = 0, k = 0

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // if equal to needle's head
    if (haystack[i] == needle[0]) {
      try {
        for (let j = 0; j < needle.length; j++) {
          // recursive check needle's word
          if (haystack[i + j] != needle[j]) throw undefined
        }
        return i
      } catch (e) { }
    }
  }

  return -1
};
```

雖然通過了，但是效果比較不好。

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TypeScript|147 ms|5.52%|50.4 mb|5.16%

### 　改良

改用另一種寫法

1. 迴圈平移 `Window`
2. 每次都檢查 `Window` 裡面有沒有相等
3. 有就回傳

`TypeScript`

```ts
function strStr(haystack: string, needle: string): number {
  // Sliding Window
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // recursive check needle's word
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] != needle[j]) break
      if (j == needle.length - 1) return i
    }
  }

  return -1
};
```

`C++`

```c++
class Solution {
public:
    int strStr(string haystack, string needle) {
        int m = needle.length();
        int n = haystack.length();
        for (int i = 0; i <= n - m; i++) {
            for (int j = 0; j < m; j++) {
                if (haystack[i + j] != needle[j]) break;
                if (j == m - 1) return i;
            }
        }
        return -1;
    }
};
```

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TypeScript|60 ms|94.13%|42.9 mb|73.13%
C++|4 ms|38.84%|6.3 mb|69.99%

<!-- <details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

</pre></details> -->

<!-- ##### 參考資料 -->