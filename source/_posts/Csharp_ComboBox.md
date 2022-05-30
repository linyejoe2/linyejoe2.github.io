---
layout:     post
title:      "[C#]ComboBox使用方法"
subtitle:   ""
date:       2022-03-07
author:     "linyejoe2"
header-style: text
catalog: true
tags: [C#, Csharp]
---

#  ComboBox使用方法
<!--more-->
- [新增下拉項目(Add)](#%e6%96%b0%e5%a2%9e%e4%b8%8b%e6%8b%89%e9%a0%85%e7%9b%ae(Add))

## 新增下拉項目(Add)

```c#
comboBox1.Items.Add(new ComboBoxItem("1", "C#"));
comboBox1.Items.Add(new ComboBoxItem("2", "Java"));
comboBox1.Items.Add(new ComboBoxItem("3", "PHP"));
comboBox1.Items.Add(new ComboBoxItem("4", "Python"));
```


##### 參考資料
1. [ComboBox 控制元件的用法教程](https://www.itread01.com/article/1478683541.html)
2. [如何? 使用 ComboBox 控制項？ (C#)](https://docs.microsoft.com/zh-tw/aspnet/web-forms/overview/ajax-control-toolkit/combobox/how-do-i-use-the-combobox-control-cs)