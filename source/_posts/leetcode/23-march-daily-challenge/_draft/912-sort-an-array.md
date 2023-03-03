---
layout:     post
title:      "[LeetCode]912. Sort an Array"
subtitle:   "Daily Challenge"
date:       2023-03-01
author:     "linyejoe2"
header-style: text
catalog: true
# description:
tags: [LeetCode, Daily Challenge, Array, Sort]
categories: [LeetCode, 2023 march daily challenge]
---

<!-- >[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/) -->

## 敘述

+ 難度: `Medium`
+ 花費時間:
+ [題目](https://leetcode.com/problems/sort-an-array/)

給你一個包含數字的陣列叫做 `nums` ，把陣列排序好後回傳出來，不能使用 `built-in function` (但其實他也偵測不到)，並且盡量想辦法優化空間。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

+ `1 <= nums.length <= 5 * 10^4`
+ `-5 * 10^4 <= nums[i] <= 5 * 10^4`

**Example 1:**

```=
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
```

**Example 2:**

```=
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
```

</pre></details>

## 初見

這題是最基礎的排序題，比較不一樣的是他**會有重複的數字**，基本上用各種排序法即可完成。

題目下方列出了幾個方法

+ Merge Sort
+ Heap Sort
+ Bucket Sort
+ Radix Sort
+ Counting Sort

還有幾個題目沒列的方法

+ Quick Sort
+ Bubble Sort

## 筆記

### Bubble Sort

最簡單的排序法，步驟如下：

1. 宣告一個排序完成旗標
2. 旗標 = true (不需要換)
3. 遍歷陣列兩兩比較，有需要換等等就要再重新遍歷一次陣列(旗標 = false)
4. 最後等旗標 == true 時回傳陣列

`TypeScript:`

```typescript
function sortArray(nums: number[]): number[] {
  let successful = false

  while (successful == false) {

    successful = true

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp

        successful = false
      }
    }
  }
  return nums
};
```

`C++:`

```cpp
class Solution {
public:
    vector<int> sortArray(vector<int> &nums) {
        bool successfullySort = false;
        while (successfullySort == false) {
            successfullySort = true;
            for (int i = 0; i < nums.size() - 1; i++) {
                if (nums[i] > nums[i + 1]) {
                    int temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;
                    successfullySort = false;
                }
            }
        }
        return nums;
    }
};
```

最後是全部都 time out

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TypeScript|Time Limit Exceeded|N|N|N
C++|Time Limit Exceeded|N|N|N

### Quick Sort

`TypeScript:`

```typescript
function sortArray(nums: number[]): number[] {
  if (nums.length < 2) return nums

  let pivot = nums[Math.floor(nums.length / 2)]
  let less: number[] = [], greater: number[] = [], equal: number[] = []
  for (const num of nums) {
    if (num < pivot) less.push(num)
    if (num > pivot) greater.push(num)
    if (num == pivot) equal.push(num)
  }

  return ([...sortArray(less), ...equal, ...sortArray(greater)])
};
```

也是 time out

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
TypeScript|Time Limit Exceeded|N|N|N

<!-- <details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

</pre></details> -->

<!-- ##### 參考資料 -->