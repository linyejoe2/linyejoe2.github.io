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
---

>[Algorithm I 筆記撰寫計畫](/2022/06/14/leetcode/Algorithm/Algorithm%20I/Starting-write-Algorithm-I-Note/)

## 敘述

這是 `Algorithm I` 的第十一天第一個題目，總共有三題。

+ 難度: `Medium`
+ 花費時間:
+ [題目](https://leetcode.com/problems/combinations/?envType=study-plan&id=algorithm-i)

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

<!-- **Example 3:**

```=
Input: head = []
Output: []
``` -->

</pre></details>

## 思路

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

## 筆記

這題沒什麼限制，所以應該很多方法都可以做，這邊提供兩個方法

### 1. Array iteration

這是我自己想到的方法，我相信也是相對直觀的。

1. 遍歷 `Linked-list` 把所有的 `Node` 存進 `Array`
2. 從 `Array` 的最後一個值開始，把 `next` 指向 `Array` 的上一個值。

TypeScript

```TS=
function reverseList(head: ListNode | null): ListNode | null {
    // 例外處理
    if (!head) return null;

    // 建立一個 Arr 儲存所有 Node
    let NodeArr: ListNode[] = [];

    // 遍歷一次 linked-list 把所有節點放進 Arr
    let nextNode = head;
    while (true) {
        NodeArr.push(nextNode);
        if (nextNode.next) {
            nextNode = nextNode.next;
        } else break;
    }

    // 先噴出最後一顆，我們不需要
    NodeArr.pop();

    // 遍歷 Arr 把 next 做回去
    head = nextNode;
    for (let i = NodeArr.length - 1; i > 0; i--) {
        // 噴出 Arr 最後一顆
        nextNode.next = NodeArr.pop()!;
        nextNode = nextNode.next;
    }

    // 防止迴圈
    nextNode.next = null;

    return head;
};
```

### 2. In-place iteration

有點類似 `two-pointers` 的概念

1. 宣告兩個指針存取當前的 `head` 跟 `head.next` = `nextHead`
2. 宣告一個 `tempNode` 佔存 `nextHead.next`
3. `nextHead.next` 指向 `haed`
4. `head` 往後推
5. `nextHead` 往後推
6. 重複上述步驟直到 `nextHead == null`

Java

```Java=
public ListNode reverseList(ListNode head) {
    // 例外處理
    if (head == null) return head;

    // 先存下 next
    ListNode nextHead = head.next;

    // 把 head.next 指向 null 避免迴圈
    head.next = null;

    while (nextHead != null) {
        //// 很簡單的轉換
        // 先存下 next
        ListNode tempNode = nextHead.next;
        // 把 nextHead.next 往前指
        nextHead.next = head;
        // 把 head 往後推
        head = nextHead;
        // 把 nextHead 往後推
        nextHead = tempNode;
    }

    return (head);
}
```

還有 recursion 版本的，但是都大同小異，就等下次遇到這個題目再來做就好。

## 成績

![score-image](https://i.imgur.com/YBVpi6s.png)

<details style='display:none;'><summary>點我開啟舊寫法/失敗寫法</summary>
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

<!-- ##### 參考資料 -->