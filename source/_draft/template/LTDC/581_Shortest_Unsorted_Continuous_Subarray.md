---
layout:     post
title:      "[LTDC]581. Shortest Unsorted Continuous Subarray"
subtitle:   "LeetCode Daily Challenge"
date:       2022-05-03
author:     "linyejoe2"
header-style: text
catalog: true
tags: LeetCode
---

# 敘述

輸入一個陣列，你需要找出這個陣列裡升冪排序的最小子陣列，來讓整個陣列升冪排序，其他元素不動。
<!--more-->
時間複雜度可以到 `O(n)`

**限制:**

-  `1 <= nums.length <= 104`
-  `-105 <= nums[i] <= 105`

**Example 1:**

```=
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

**Example 2:**

```=
Input: nums = [1,2,3,4]
Output: 0
```

**Example 3:**

```=
Input: nums = [1]
Output: 0
```


# 筆記

初步構想
設定一個陣列最小值(min)
和一個最大值(max)
然後只要arr[min+1] < arr[min] && arr[max-1] > arr[max] 
就回傳 arr[min - max]
就可以了

上方是理想情況，但實際上會遇到幾種特殊狀況
1. 陣列原本就排序好了。
`let arr = [1, 2, 3, 4];`
2. 陣列只有一個。
`let arr = [1];`
3. 重複的值，以下列出由前往後看會遇到的狀況，由後往前看同理。
```js=
let arr1 = [1, 2, 2, 1, 4, 5]; // 這時應該回傳 [2, 2, 1].length 也就是 3 
let arr2 = [1, 2, 2, 3, 4, 5]; // 這時應該回傳 0
let arr3 = [1, 2, 2, 3, 1, 5]; // 這時應該回傳 [2, 2, 3, 1].length = 4
let arr3 = [1, 2, 2, 4, 3, 5]; // 這時應該回傳 [4, 3].length = 2
let arr4 = [1, 3, 3, 3, 5, 2, 4, 4, 3, 10, 9, 9, 9, 10, 12, 19] // 綜合情況 回傳 12
```
綜上所述 1. 2. 我們都可以用簡單的判斷式解決，3. 就比較麻煩，
當我們遇到 `min + 1 === min` 時，用一個 minTemp 存取 min 的 index ，然後繼續往後看，
如果有比 minTemp 小的數，那就回傳 minTemp


# 程式碼

# 成績

##### 參考資料