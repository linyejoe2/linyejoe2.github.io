---
layout:     post
title:      "[LeetCode]242. ValidAnagram"
subtitle:   "Data Structure I"
date:       2022-06-07 01:23:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure, Hash Table]
---

>[Data Structure I 筆記撰寫計畫](https://linyejoe2.github.io/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/Starting_write_Data_Structure_I_note/)

## 敘述

這是 `Data Structure I` 的第六天第三個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 1小時
+ [題目](https://leetcode.com/problems/valid-anagram/)

傳入兩個字串 `s` 與 `t` ，如果 `s` 是 `t` 的字謎的話，回傳 `true` ，如果不是，回傳 `false` 。

<!--more-->

>[字謎(`anagram`)](https://zh.wikipedia.org/zh-tw/%E6%98%93%E4%BD%8D%E6%9E%84%E8%AF%8D%E6%B8%B8%E6%88%8F): 是指將原本的詞字母重組後得到另一個詞。

<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= s.length, t.length <= 5 * 104`
-   `s` and `t` consist of lowercase English letters.


**Example 1:**


```=
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```=
Input: s = "rat", t = "car"
Output: false
```


</pre></details>

## 筆記

使用類似 383. Ransom Note 的做法，先遍歷一次 `s` 做出 `s` 的 `HashTable` ，然後再遍歷一次 `t` 刪除值，如果刪光了就回傳 `true` ，如果刪到一半沒得刪那就回傳 `false` 。

## 程式碼

```js=
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length != t.length) return false;

    let sMap = new Map;
    for (let i = 0; i < s.length; i++) {
        if (sMap.get(s[i]) != undefined) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        } else {
            sMap.set(s[i], 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (sMap.get(t[i])) {
            sMap.set(t[i], sMap.get(t[i]) - 1);
        } else {
            return false;
        }
    }
    return true;
};
```

## 成績

![](https://i.imgur.com/vedoT7B.png)


<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

</pre></details>

<!-- ##### 參考資料 -->

