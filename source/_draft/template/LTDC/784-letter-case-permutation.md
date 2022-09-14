---
layout:     post
title:      "[LeetCode]784. Letter Case Permutation"
subtitle:   "Algorithm I"
date:       2022-09-14
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Bit Manipulation, Depth-First Search, Backtracking]
categories: [LeetCode, Algorithm I]
---

<!-- >[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

這是 `Algorithm I` 的第十一天第三個題目，總共有三題。 -->

[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/) 第十一天第三題，總共有三題。

+ 難度: `Medium`
+ 花費時間: 2 hr
+ 題目: [784. Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/)

給你一個字串 `s` 回傳 `s` 裡所有字母都有大寫跟小寫兩種寫法的話，會有幾種可能的字串，把全部字串放在一個陣列裡回傳。

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ `1 <= nums.length <= 6`
+ `-10 <= nums[i] <= 10`
+ All the integers of `nums` are **unique**.

**Example 1:**

<!-- ![example-image-1](https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg) -->

```=
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

**Example 2:**

<!-- ![example-image-2](https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg) -->

```=
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

**Example 3:**

```=
Input: nums = [1]
Output: [[1]]
```

</details>

<details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

用選擇樹 `Backtracking` 的方式去做答

1. 選一個根元素
2. 在剩下的元素裡選一個
3. 重複步驟二直到選完
4. 把現在選好的陣列放入答案陣列

終止條件: 全部選完

撤銷選擇

</details>

## 筆記

因為這題也是屬於 `Backtracking` 類型的題目，所以用跟 [77. Combinations] 一樣的方法來作即可。

## 程式

```TS
function permute(nums: number[]): number[][] {
  let permutations: number[][] = [];
  function _dfs(preGoPath: number[], visitedPath: number[] = []): void {
    // 退出條件
    if (visitedPath.length === nums.length) {
      permutations.push(visitedPath);
      return;
    }

    // 選父層的 node 然後把可選的選項 (path) 丟入子層
    for (let i = 0; i < preGoPath.length; i++) {
      // 把選到的 node 放進 visitedPath 中
      visitedPath.push(preGoPath[i]);

      // 把剩下的丟進遞迴， visitedPath 需要解構賦值，避免互相影響
      _dfs(preGoPath.slice(0, i).concat(preGoPath.slice(i + 1)), [...visitedPath]);

      // 重選父層 node
      visitedPath.shift();
    }
    return;
  }
  _dfs(nums);

  return permutations;
};

```

## 成績

![score-image](https://i.imgur.com/ozQYcxz.png);

<!-- ##### 參考資料

+ [discuss](https://leetcode.com/problems/01-matrix/discuss/1369741/C%2B%2BJavaPython-BFS-DP-solutions-with-Picture-Clean-and-Concise-O(1)-Space) -->

[77. Combinations]: /2022/09/05/leetcode/Algorithm/Algorithm%20I/77-combinations/
