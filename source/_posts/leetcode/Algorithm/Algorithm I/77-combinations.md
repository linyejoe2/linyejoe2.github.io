---
layout:     post
title:      "[LeetCode]77. Combinations"
subtitle:   "Algorithm I"
date:       2022-09-05
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Backtracking, Recursion]
categories: [LeetCode, Algorithm, Algorithm I]
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第十一天第一個題目，總共有三題。

+ 難度: `Medium`
+ 花費時間: 4 hr
+ [題目](https://leetcode.com/problems/combinations/)

給你兩個數字 `n` 與 `k` 。
返回一個陣列，列出在 `1` 到 `n` 之間的所有不重複的 `k` 組數字。

<!--more-->

<details><summary>點我開啟限制與範例</summary>
    <pre>

**限制:**

+ `1 <= n <= 20`
+ `1 <= k <= n`

**Example 1:**

<!-- ![example-image-1](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg) -->

```=
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
```

**Example 2:**

<!-- ![example-image-2](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg) -->

```=
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
```

</pre></details>

<details><summary>點我開啟思路</summary>
    <pre>

<p class="text-h2"> 思路 </p>

====================以下全錯======================

這題是要訓練 `Backtracking` ，意思就是要一直不停的對我的答案陣列做檢查，沒有的話再塞入答案陣列。

k 一定會少於 n

雖然這題有說 ans can be any order ，但是我想到一點，不管我排出了怎麼樣的數字，全部都跑過一次 `sort()` ，這樣就不會有重複的問題。

建立一個 map ， k 為幾這個 map 就有幾個 key ，然後往 map 裡塞值，最後再放進答案

```
4 1

1 2 3 4

4 3

123 124 234

4 2

12 13 14 23 24 34

5 2

12 13 14 15 23 24 25 34 35 45

7 3

123 124 125 126 127 234 235 236 237 345 346 347 456 457 567
```

透過上面的數字觀察，我發現，每個數字出現次數一定符合 `n - k + 1` 這個數字，除了當 k 是 1 的時候

</pre></details>

## 筆記

`Backtracking` 回朔法

回朔法的關鍵是，先沿著一條路走到底，然後再回到上個節點重作

回朔法有以下幾個特色

+ 通常會寫成 DFS 的樣子

回朔法的框架必須要有以下幾個條件

+ 選擇清單: 有什麼選擇的清單
+ 選路: 選擇一個子層前往
+ 返回: 回到父層
+ 終止條件: 到達決策樹邊界，通常會接著 `return`(此題來說是 `k = 2` 時會到達決策樹邊界)

以這題來說，每個節點等於選擇的數字，他的所有子節點等於可選擇的數字，於是我們可以設想出以下的選擇樹

假設 `n = 4`, `k = 2`

+ `root node`
  + 選擇清單: `1 ~ (n = 4)`
  + 選路: `[1, 2, 3, 4] => 1`
  + 當前組合: `[]`
  + 返回: 無，因為是 `root`
  + 終止條件: 不會觸發
+ `1`
  + 選擇清單 `2 ~ 4`
  + 選路: `[2, 3, 4] => 2`
  + 當前組合: `[1]`
  + 返回: 當這個節點的選路全部被選完，則會觸發返回，撤銷選擇 `1` ，然後選擇 `2`
  + 終止條件: 不會觸發
+ `2`
  + 當前組合: `[1, 2]`
  + 終止條件: 由於組合已經滿了，所以觸發這條路線的終止條件。

## 程式

```TS
function combine(n: number, k: number): number[][] {
  let resultArr: number[][] = [];

  // 深度優先走訪每個節點
  function _dfs(start: number, currentResult: number[] = []) {

    // 終止條件
    if (currentResult.length === k) {
      // 把當前組合塞入答案陣列( resultArr )
      resultArr.push([...currentResult]);
      // 終止這條路線
      return;
    }

    // 每 for 一次，會選擇一個不同的節點進入
    for (let i = start; i <= n; i++) {
      // 進入一個節點
      currentResult.push(i);
      // 遍歷這個節點的子節點
      _dfs(i + 1, currentResult);
      // 撤銷進入這個節點(返回上一層)
      currentResult.pop();
    }

    return;
  }

  _dfs(1)

  return resultArr;
};
```

## 成績

![score-image](https://i.imgur.com/lLR8oZm.png)

<details><summary>點我開啟舊寫法/失敗寫法</summary>
<pre>

```TS
function combine(n: number, k: number): number[][] {
    let ansArr: number[][] = [];
    let ansStrArr: string[] = [];

    // 如果只求一位，那麼就把答案塞一塞之後就可以回傳了
    if (k === 1) {
        for (let i = 1; i <= n; i++) {
            ansArr.push([i]);
        }
        return ansArr;
    }

    // 算每個數字會在答案中出現多少次的算式，通過觀察規律可以得到這個算式
    let m = n - k + 1;

    // 宣告 Map: key = 1 ~ n 的所有數字都有, val = 這個數字的存貨(就是上面算出來的 m )
    const ansNumMap = new Map<number, number>();
    for (let i = 1; i <= n; i++) {
        ansNumMap.set(i, m);
    }

    let ansArrIndex = 0;
    while (ansArrIndex) {
        ansArr[ansArrIndex] = [];

        for (let i = 1; i <= n; i++) {
            // 如果 ansNumMap 裡還有值
            if (ansNumMap.get(i)) {

                // 檢查他有沒有在現在這個組合中 && 他還有沒有存貨在 map 裡
                if (ansArr[ansArrIndex].indexOf(i) === -1 && ansNumMap.get(i)! > 0) {
                    // 把他塞到答案的這個組合中
                    ansArr[ansArrIndex].push(i);
                }
            }

            // 如果已經塞滿了，就做重複檢查
            if (ansArr[ansArrIndex].length === k) {
                // 如果已經有這個組合了，就把他刪掉，然後重來
                if (ansStrArr.indexOf(ansArr[ansArrIndex].join("")) != -1) {
                    ansArr[ansArrIndex] = [];
                    continue;
                }

                // 塞一個進去，就要減少一個存貨
                ansNumMap.set(i, ansNumMap.get(i)! - 1);

                // 如果沒有存貨了，就把這個 key 刪掉
                if (ansNumMap.get(i) === 0) ansNumMap.delete(i);

                // 如果沒有，就把組合加進 ansStrArr 然後跳過這個迴圈
                ansStrArr.push(ansArr[ansArrIndex].join(""));
                break
            };

            // 塞一個進去，就要減少一個存貨
            ansNumMap.set(i, ansNumMap.get(i)! - 1);

            // 如果沒有存貨了，就把這個 key 刪掉
            if (ansNumMap.get(i) === 0) ansNumMap.delete(i);


        }

        // 如果 Map 裡都空了，代表全部找完了，就回傳答案。
        if (ansNumMap.size === 0) return ansArr;
        console.log(ansNumMap.size);
        console.log(ansArr);

        // 把答案陣列往後推一位
        ansArrIndex++;
    }
};
```

</pre></details>

##### 參考資料

+ [Backtracking 回溯法 – 陪你刷題](https://haogroot.com/2020/09/21/backtracking-leetcode/)
+ [discuss](https://leetcode.com/problems/combinations/discuss/794032/PythonJSGo-by-DFS-%2B-backtracking-w-Hint)
