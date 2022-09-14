---
layout:     post
title:      "[LeetCode]784. Letter Case Permutation"
subtitle:   "Algorithm I"
date:       2022-09-14
author:     "linyejoe2"
header-style: text
catalog: true
tags: [LeetCode, Bit Manipulation, Depth-First Search, Backtracking]
categories: [LeetCode, Algorithm I]
---

[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/#09-x2F-05-Day-11-Recursion-x2F-Backtracking) 第十一天第三題，總共有三題。

+ 難度: `Medium`
+ 花費時間: `2 hr`
+ 題目: [784. Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/)

給你一個字串 `s` 回傳 `s` 裡所有字母都有大寫跟小寫兩種寫法的話，會有幾種可能的字串，把全部字串放在一個陣列裡回傳。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ `1 <= s.length <= 12`
+ `s` consists of lowercase English letters, uppercase English letters, and digits.

**Example 1:**

<!-- ![example-image-1](https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg) -->

```=
Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
```

**Example 2:**

<!-- ![example-image-2](https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg) -->

```=
Input: s = "3z4"
Output: ["3z4","3Z4"]
```

</details>

<details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

建立一個 index i = 0
建立一個 s 的 陣列 = sArr

1. 終止條件
  若 i == sArr.length  回傳當前的 sArr

1. 檢查 sArr[i]
   1. 若是數字 直接遞迴 i + 1
   2. 若是字母
      遞迴 sArr[i] 大寫跟小寫各一次

</details>

## 筆記

雖然這題被放在 `Backtracking` 裡，但我沒有什麼感覺，這題我選擇用 `DFS` 來作答。

遍歷字串，只會遇到兩種狀況

1. 遇到數字
2. 遇到字母

當我們遇到數字時，就直接再更深入一層(檢查下一個字元)。
當我們遇到字母時，就把那個字母分別轉為大寫跟小寫，然後分別更深入一層。

最後我們拿滿 `s` 大小時，就把答案傳出來。

## 程式

```TS
function letterCasePermutation(s: string): string[] {
  let answerArr: string[] = [];
  function permute(sArr: string[], i = 0) {
    /**
     * accept case
     * when i equal sArr.length, that mean we get a non-repetitive answer case
     */
    if (i === sArr.length) {
      answerArr.push(sArr.join(""));
      return;
    }

    if (/[a-zA-Z]/.test(sArr[i])) {
      permute([...sArr.slice(0, i), sArr[i].toLowerCase(), ...sArr.slice(i + 1)], i + 1);
      permute([...sArr.slice(0, i), sArr[i].toUpperCase(), ...sArr.slice(i + 1)], i + 1);
    } else {
      permute(sArr, i + 1);
    }
    return;
  }

  permute(s.split(""));

  return answerArr;
};

```

## 成績

![score-image](https://i.imgur.com/mK38LEf.png);

<!-- ##### 參考資料

+ [discuss](https://leetcode.com/problems/01-matrix/discuss/1369741/C%2B%2BJavaPython-BFS-DP-solutions-with-Picture-Clean-and-Concise-O(1)-Space) -->