---
layout:     post
title:      "[LeetCode]2269. Find the K-Beauty of a Number"
subtitle:   "Sliding Window"
date:       2022-08-23
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Sliding Window]
---



## 敘述

之前寫了兩題比較難的 `Sliding Window` ，覺得自己還沒有到很熟悉，所以找了幾題來練習。

+ 難度: `Easy`
+ 花費時間: 30 min
+ [題目](https://leetcode.com/problems/find-the-k-beauty-of-a-number/)

給你兩個數字 `num` 跟 `k` ，前者是你要處理的數字，後者是 `substring` 的寬度，
依照 `Sliding Window` 的原理，在 `num` 裡取出所有大小為 `k` 的 `substring` ，回傳**這些值之中可以整除 num 的值的數量**。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

-   `1 <= num <= 109`
-   `1 <= k <= num.length` (taking `num` as a string)

**Example 1:**

```=
Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "24" from "240": 24 is a divisor of 240.
- "40" from "240": 40 is a divisor of 240.
Therefore, the k-beauty is 2.
```

**Example 2:**

```=
Input: num = 430043, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "43" from "430043": 43 is a divisor of 430043.
- "30" from "430043": 30 is not a divisor of 430043.
- "00" from "430043": 0 is not a divisor of 430043.
- "04" from "430043": 4 is not a divisor of 430043.
- "43" from "430043": 43 is a divisor of 430043.
Therefore, the k-beauty is 2.
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

這題很明顯的告訴你他用到 `Sliding Window`
並且思路也不難，基本上算是練手題。

1. 設定 `window` 左邊，右邊基本上就是左邊 + k ，所以也不用設。
2. 把每個當下的 `window` 拿出來跟 `num` 比，沒有餘數就可以把 `count` + 1 了

## 程式碼


java
```java=
public int divisorSubstrings(int num, int k) {
  String numString = String.valueOf(num);
  int left = 0; 
  int window = 0;
  int count = 0;

  while (left + k < numString.length() + 1) {
    for (int i = left; i < left + k; i++) {
      window = window * 10 + Integer.parseInt(String.valueOf(numString.charAt(i)));
    }
    if (window != 0 && num % window == 0) count++;
    left++;
    window = 0;
  }
  return (count);
}
```

TS
```typescript=
function divisorSubstrings(num: number, k: number): number {
    let left = 0;
    let window: number = 0;
    let count = 0;

    while ((left + k) < num.toString().length + 1) {
        for (let i = left; i < (left + k); i++) {
            window = window * 10 + parseInt(num.toString().charAt(i));
        }
        if (num % window === 0) count++;
        console.log(window);
        left++;
        window = 0;
    }
    return count;
};
```

## 成績

![](https://i.imgur.com/3qt5Xge.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>



</pre></details>

<!-- ##### 參考資料 -->