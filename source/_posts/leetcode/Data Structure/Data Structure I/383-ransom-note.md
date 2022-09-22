---
layout:     post
title:      "[LeetCode]383. Ransom Note"
subtitle:   "Data Structure I"
date:       2022-06-07
updata:     2022-08-25
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Data Structure]
categories: [LeetCode, Data Structure I]
---

>[Data Structure I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/)

## 敘述

每日一題剛好寫到這題，於是嘗試使用 Java 重寫。

-------------底下原文---------------

這是 `Data Structure I` 的第六天第二個題目，總共有三題。

+ 難度: `Easy`
+ 花費時間: 1小時半
+ [題目](https://leetcode.com/problems/ransom-note/)

給你兩個字串 `ransomNote` 以及 `magazine` ，如果可以用 `magazine` 裡的字符構建出 `ransomNote` 
那麼就回傳 `true` ， 不行就回傳 `false` 。

<!--more-->


<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= ransomNote.length, magazine.length <= 105`
-   `ransomNote` and `magazine` 只會有小寫英文字母。


**Example 1:**


```=
Input: ransomNote = "a", magazine = "b"
Output: false
```

**Example 2:**

```=
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

**Example 3:**

```=
Input: ransomNote = "aa", magazine = "aab"
Output: true
```
</pre></details>

## 筆記

### JS: Object 做法

建立一個 Object 如下:

```js=
{
    magazine 字串內的每個字符:字符出現次數
}
```

遍歷 `ransomNote` 只要有字符就把字符數減一，沒有就回傳 `false`

```js=
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let countObj = {};

    // 先遍歷 magazine ，建立字符集
    for (let i in magazine) {
        // 如果字符已經存在，那就加一
        if (countObj[magazine[i]]) {
            countObj[magazine[i]]++
        } else {
            countObj[magazine[i]] = 1;
        };
    }

    // 遍歷 ransomNote 
    for (let i in ransomNote) {
        if (countObj[ransomNote[i]] && countObj[ransomNote[i]] > 0) {
            countObj[ransomNote[i]]--
        }else{
            return false;
        }
    }
    return true;
};
```

### Java: HashMap 做法

基本邏輯跟 JS: Object 一樣，只是換成 HashMap 實現

```Java=
public boolean canConstruct(String ransomNote, String magazine) {
    HashMap<Integer, Integer> chkMap = new HashMap<Integer, Integer>();
    
    // 先遍歷一次建立 Map
    for (int i = 0; i < ransomNote.length(); i++) {
        // char to int
        int ele = ransomNote.charAt(i);

        // 如果 map 裡已經有值，那就把值往上加一，沒有就建立
        chkMap.put(ele, (chkMap.get(ele) != null) ? (chkMap.get(ele) + 1) : 1);
    }
    
    // 再遍歷一次刪 Map 裡的值
    for (int i = 0; i < magazine.length(); i++) {
        // char to int
        int ele = magazine.charAt(i);

        // 如果還有值，就把值減一，如果值 <= 0 就刪掉這個 key
        if (chkMap.get(ele) != null) {
            chkMap.put(ele, chkMap.get(ele) - 1);
            if (chkMap.get(ele) <= 0) chkMap.remove(ele);
        }

        // 檢查如果 Map 空了就回傳
        if (chkMap.isEmpty()) return true;
    }
    
    // 整塊跑完還沒空就傳 false
    return false;
}
```

## 成績

成績不是很理想，一定有更好的做法，以後再來把他補完吧~


![](https://i.imgur.com/ougIfkY.png)



<details><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

+ 筆記

把 `ransomNote` 裡的每個字符都拉出來找有沒有在 `magazine` 裡，
有的話就兩邊都刪掉。
沒有的話就直接回傳 `false` 。

+ 程式碼

```js=
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++){
        if (magazine.indexOf(ransomNote[i]) != -1 ) {
          magazine = magazine.replace(ransomNote[i],'');
        }else{
            return false
        }
    }
    return true
};
```

+ 成績

time out ，所以這個方法失敗了

</pre></details>

##### 參考資料

[JS Solution - Runtime 90.53% faster](https://leetcode.com/problems/ransom-note/discuss/2119993/JS-Solution-Runtime-90.53-faster)