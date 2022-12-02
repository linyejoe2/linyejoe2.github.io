---
layout:     post
title:      "[LeetCode]1657. Determine if Two Strings Are Close"
subtitle:   "LeetCoding Challenge"
date:       2022-12-02
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Map, String ]
categories: [LeetCode]
---

+ 難度: `Medium`
+ 花費時間: 30 min
+ 題目: [1657. Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/)

給你兩個字串 `word1` 與 `word2` ，判斷這兩個字串是否 [相似]

兩個 [相似] 的字串必須在進行以下兩個操作之後可以相等，這兩個操作都可以做無數次。

1. 交換兩個字母
2. 把字串內的某字母與字串內的另一個某字母互換

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ `1 <= word1.length, word2.length <= 10^5`
+ `word1` and `word2` contain only lowercase English letters.

**Example 1:**

```=
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
```

**Example 2:**

```=
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
```

**Example 3:**

```=
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
```

</details>

<!-- <details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

</details> -->

## 筆記

雖然題目說得很玄學，但是其實就是簡單的幾個限制：

1. 兩串文字必須長度一模一樣
2. 兩串文字內含的字母數量必須一模一樣
3. 每個字母分別計算出字母的數量，最後兩邊是合的上的

滿足以上三個條件，就一定有題目所謂 [相似] 的字串。

綜合上述，我認為使用 `map` 會是最簡單最快速的作法。

## 程式

```ts=
function closeStrings(word1: string, word2: string): boolean {
  // 1. length check
  if (word1.length != word2.length) return false

  // 2. create map
  let word1Map: Map<string, number> = new Map()
  let word2Map: Map<string, number> = new Map()
  for (let i = 0; i < word1.length; i++) {
    if (!word1Map.has(word1[i])) {
      word1Map.set(word1[i], 1)
    } else {
      word1Map.set(word1[i], word1Map.get(word1[i])! + 1)
    }
    if (!word2Map.has(word2[i])) {
      word2Map.set(word2[i], 1)
    } else {
      word2Map.set(word2[i], word2Map.get(word2[i])! + 1)
    }
  }

  // 3. char check
  let word1Char = [...word1Map.keys()]
  for (let ele of word1Char) {
    if (!word2Map.has(ele)) return false
  }

  // 4. count check
  let word1Count = [...word1Map.values()]
  let word2Count = [...word2Map.values()]
  for (let ele of word1Count) {
    if (word2Count.indexOf(ele) != -1) {
      word2Count = word2Count.slice(0, word2Count.indexOf(ele)).concat(word2Count.slice(word2Count.indexOf(ele) + 1))
    } else {
      return false
    }
  }
  return word2Count.length === 0
}

```

## 成績

<!-- Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TS iterative|91 ms|74.63%|44.7 MB|18.41%
TS recursive|80 ms|82.21%|43.9 MB|87.98% -->

![score-image](https://i.imgur.com/VQC1wQ7.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
