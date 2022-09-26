---
layout:     post
title:      "[LeetCode]232. Implement Queue using Stacks"
subtitle:   "Data Structure I"
date:       2022-09-26
author:     "linyejoe2"
header-style: text
catalog: true
# description: 
tags: [LeetCode, Stack, Queue, Design]
categories: [LeetCode, Data Structure I]
---

> [Algorithm I 筆記撰寫計畫](/2022/05/30/leetcode/Data%20Structure/Data%20Structure%20I/starting-write-data-structure-i-note/#09-x2F-23-Day-9-Linked-List) 第九天第二題，共兩題。

+ 難度: `Easy`
+ 花費時間: 10 min
+ 題目: [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)

使用最多兩個 `Stacks` 來建構一個 `Queue`

<!--more-->

<details><summary>點我開啟限制與範例</summary>

**限制:**

+ `1 <= x <= 9`
+ At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
+ All the calls to `pop` and `peek` are valid.

**Example 1:**

<!-- ![example-image-1](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg) -->

```=
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

</details>

<!-- <details><summary>點我開啟思路</summary>

<p class="text-h2"> 思路 </p>

</details> -->

## 筆記

使用兩個 `stack` 。

+ `mainStack` : 儲存所有資料。
+ `subStack` : 當需要存取資料時，把 `mainStack` 的資料全部 `pop()` 到這，這樣最後一個 pop() 進來的資料，其實就是第一個被放進 `mainStack` 的資料，也就達到了題目要的效果。

```Java=
class MyQueue {
  private Stack<Integer> _mainStack;// store val as stack.
  private Stack<Integer> _subStack;// when pop or peek, reverse mainStack to subStack to simulate queue.

  public MyQueue() {
    _mainStack = new Stack<Integer>();
    _subStack = new Stack<Integer>();
  }

  public void push(int x) {
    _mainStack.push(x);
  }

  public int pop() {
    while (!_mainStack.empty()) {
      _subStack.push(_mainStack.pop());
    }

    int popVal = _subStack.pop();

    while (!_subStack.empty()) {
      _mainStack.push(_subStack.pop());
    }

    return popVal;
  }

  public int peek() {
    while (!_mainStack.empty()) {
      _subStack.push(_mainStack.pop());
    }

    int popVal = _subStack.peek();

    while (!_subStack.empty()) {
      _mainStack.push(_subStack.pop());
    }

    return popVal;
  }

  public boolean empty() {
    return (_mainStack.empty());
  }
}

```

下面也提供 `TypeScript` 的寫法。

```TS=
class MyQueue {
  private _val: number[] = [];

  constructor() {}

  push(x: number): void {
    this._val.push(x);
  }

  pop(): number {
    return this._val.shift()!;
  }

  peek(): number {
    return this._val[0];
  }
,
  empty(): boolean {
    return (this._val.length === 0);
  }
}

```

## 成績

Language|Runtime|Beats|Memory Usage|Beats
-|-|-|-|-
Java|0 ms|100%|39.8 MB|99.19%
TypeScript|89 ms|69.74%|43.1 MB|49.67%

![score-image](https://i.imgur.com/q5zeZPR.png)

<!-- ##### 參考資料

+ [discuss]

[discuss]: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems. -->
