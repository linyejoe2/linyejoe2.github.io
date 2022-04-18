---
layout:     post
title:      "到底怎麼寫好函式的說明"
subtitle:   "語言包含:C#"
date:       2022-03-07
author:     "linyejoe2"
header-style: text
catalog: true
tags: C#, Csharp
---

# 引言

註解，通常被工程師用來寫下一些自己想看但是不想給電腦看的東西。

- //TODO
- //system.print('1');
- //哈哈哈我是註解啦

但是註解也有一些特別的用途
例如幫我們寫的程式加上說明，以方便之後維護或是你有一大堆function要引用時知道哪個是幹嘛用的，
但程式碼五花八門，他們的註解寫法也各不相同，所以就來看我幫你們寫好的統整吧哈哈哈!

<!--more-->
# 目錄

- [C#](#C#)
- [Python](#Python)

# C#

C# 可以使用一種XML標記的方法來撰寫說明，有以下兩種寫法
- 在每行備註前面使用三個斜線`///`來使用
- 使用/\*\*和\*\*/把說明包住(適用單行與多行註解)

```c#
/// <summary>Class <c>Point</c> models a point in a two-dimensional
/// plane.</summary>
///
public class Point 
{
    /// <summary>method <c>draw</c> renders the point.</summary>
    void draw() {...}
}
```

```c#
/** <summary>Class <c>Point</c> models a point in a two-dimensional
plane.</summary>
**/
public class Point 
{
    /// <summary>method <c>draw</c> renders the point.</summary>
    void draw() {...}
}
```

## XML標記規則速查表

Tag|目的
-|-
[`<c>`]()|以類似程式碼的字形設定文字
[`<code>`](#code)|程式碼
[`<example>`](#example)|範例
[`<exception>`]()|例外狀況
[`<param>`](#param)|描述參數
[`<summary>`](#summary)|描述類型或類型的成員



## `<c>`
行內程式碼(inline) 如markdown中的行內程式碼區塊

```c#
```



## `<code>`
一段程式碼 如markdown中的程式碼區塊

語法:
```xml
    <code>source code or program output</code>
```

範例:
```C#
    /**<summary>This method changes the point's location by
       the given x- and y-offsets.
    <example>For example:
    <code>
       Point p = new Point(3,5);
       p.Translate(-1,3);
    </code>
    results in <c>p</c>'s having the value (2,8).
    </example>
    </summary>
    **/    
    public void Translate(int xor, int yor) {
        X += xor;
        Y += yor;
    }   
```

## `<example>`
在說明內寫入簡單的範例，一般也會使用到[`<code>`](#code)

語法:
```xml
    <example>description</example>
```

範例:
```c#
    /** 
    <summary>This method changes the point's    location by
        the given x- and y-offsets.
    <example>For example:
    <code>
       Point p = new Point(3,5);
       p.Translate(-1,3);
    </code>
    results in <c>p</c>'s having the value  (2,8).
    </example>
    </summary> 
    **/
    
    public void Translate(int xor, int yor) {
        X += xor;
        Y += yor;
    }   
```

## `<param>`
這個標記是用來描述方法、函式或索引子的參數。

語法:
```xml
<param name="name">description</param>
```

範例:
```C#
/** <summary>This method changes the point's location to
/    the given coordinates.</summary>
/ <param name="xor">the new x-coordinate.</param>
/ <param name="yor">the new y-coordinate.</param>
**/
public void Move(int xor, int yor) {
    X = xor;
    Y = yor;
}
```

## `<summary>`
在說明內寫入簡單的範例，一般也會使用到[`<code>`](#code)

語法:
```xml
    <summary>description</summary>
```

範例:
```c#
/// <summary>This constructor initializes the new Point to (0,0).</summary>
public Point() : this(0,0) {
}
```

# Python


##### 參考資料
1. [文件註解](https://docs.microsoft.com/zh-tw/dotnet/csharp/language-reference/language-specification/documentation-comments#introduction)