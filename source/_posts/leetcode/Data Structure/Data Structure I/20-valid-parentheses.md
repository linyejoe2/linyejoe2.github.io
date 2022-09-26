---
layout:     post
title:      "[LeetCode]20. Valid Parentheses"
subtitle:   "Data Structure I"
date:       2022-09-22
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, String, Stack]
categories: [LeetCode, Data Structure I]
---

> [Algorithm I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/#09-x2F-23-Day-9-Linked-List) 第九天第一題，共兩題。

+ 難度: `Easy`
+ 花費時間: 5 min
+ 題目: [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ `1 <= s.length <= 104`
+ `s` consists of parentheses only `'()[]{}'`.

**Example 1:**

<!-- ![example-image-1](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg) -->

```=
Input: s = "()"
Output: true
```

**Example 2:**

<!-- ![example-image-2](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg) -->

```=
Input: s = "()[]{}"
Output: true
```

**Example 3:**

<!-- ![example-image-2](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg) -->

```=
Input: s = "(]"
Output: false
```

</details>

## 筆記

這題要訓練 `stack` 的運用，解題步驟如下：

1. 建立一個 `stack` ，運用他 `LIFO` 的特性，我們可以很好的對剛插入的值進行比較。
2. 遍歷 `s`
3. 遇到左括弧( `'(', '[', '{'` )，都塞進去 `stack`
4. 遇到右括弧( `')', ']', '}'` )，就檢查 `stack` 最後一個值，
   + 如果一樣，就把這個值刪掉( `pop()` )
   + 如果不一樣，代表這個字串不合法，回傳 `false`
5. 最後檢查 `stack` 裡還有沒有值，有就傳 `false` ，沒有就傳 `true`

Java iterative solution.

```Java=
class Solution {
  public boolean isValid(String s) {
    // Create stack for search.
    Stack<Character> stack = new Stack<Character>();

    // Push first element to avoid exception.
    stack.push(s.charAt(0));

    // travel tho s.
    for (int i = 1; i < s.length(); i++) {

      // if taking [')', '}', ']'], than we check what if stack top is the other part, if is, we pop the other part.
      if ((s.charAt(i) == '}' && !stack.isEmpty() && stack.peek() == '{') ||
        (s.charAt(i) == ']' && !stack.isEmpty() && stack.peek() == '[') ||
        (s.charAt(i) == ')' && !stack.isEmpty() && stack.peek() == '(')
      ) stack.pop(); 

      // if taking ['(', '{', '['], we put this element into stack.
      else if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{'

      // if not matching by top two rule, we return false.
      ) stack.push(s.charAt(i));
      else return false;
    }
    
    // if stack stil contain element that mean this test case is invalid, we return false.
    if (!stack.empty()) return false;

    return true;
  }
}

```

## 成績

<!-- Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
Java|1 ms|80.63%|43.9 MB|73.27%
TypeScript|77 ms|95.35%|45.4 MB|22.74% -->

![score-image](https://i.imgur.com/q0BJAkn.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
