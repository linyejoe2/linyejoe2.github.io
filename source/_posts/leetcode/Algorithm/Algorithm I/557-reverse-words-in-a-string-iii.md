---
layout:     post
title:      "[LeetCode]557. Reverse Words in a String III"
subtitle:   "Algorithm I"
date:       2022-06-16 18:33:00
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Algorithm, Two Pointers]
categories: [LeetCode, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第四天第二個題目，總共有兩題。

+ 難度: `Easy` 
+ 花費時間: 
+ [題目](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

給你一個字串(s)，把這個字串反轉之後回傳，字串裡的空格不用反轉。

<!--more-->



<details><summary>點我開啟限制與範例</summary>
<pre>

**限制:**

-   `1 <= s.length <= 5 * 104`
-   `s` is a [printable ascii character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).
-   `s` 的前後不會有空格
-   `s` 一定會有至少一個字母
-   `s` 裡的所有空格都是單格空格


**Example 1:**

```=
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

**Example 2:**

```=
Input: s = "God Ding"
Output: "doG gniD"
```
</pre></details>

## 筆記

### 內建函式作法

使用到了 JS 內建函式:

1. [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split): 把字串按照你指定的 separator 分割，然後存在陣列裡。
2. [Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse): 把陣列反轉。
3. [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join): 把陣列按照你指定的 Separator 合併，存成字串

```js=
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitS = s.split(" ");
    let reversedS = [];
    for (let i  =0 ; i in splitS; i ++){
        reversedS.push(splitS[i].split("").reverse().join(""))
    }
    
    return reversedS.join(" ")
};

```


## 成績

內建函式 reverse() 寫法成績

![](https://i.imgur.com/bSt1BZt.png)

<details style=''><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

+ 內建函式作法

這個做法寫的太複雜了，導致跑出來成績非常不理想

1. 把字串以空格切分後放進陣列
2. 遍歷陣列每個元素都做 reverse
3. 組回字串
4. 回傳字串

```js=
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversedS ;
    for (let ele of s.split(' ')){
        ele = reverseWord(ele)
        if (!reversedS){
            reversedS = ele;
        }else{
            reversedS += ' ' + ele;
        }
    }
    
    return reversedS
};

function reverseWord(word){
    let s = word.split('');
    let reversedWord = '';
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
    for (let i of s){
        reversedWord += i;
    }
    return reversedWord;
}
```

![](https://i.imgur.com/p1R9bZ7.png)

</pre></details>

<!-- ##### 參考資料 -->