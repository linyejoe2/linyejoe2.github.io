---
layout:     post
title:      "[JaveScript]JS全端大冒險No.4"
subtitle:   "jQuery控制HTML表單元素"
date:       2022-01-17
author:     "linyejoe2"
header-style: text
catalog: true
tags: [JaveScript, JS全端大冒險, jQuery]
---

#  jQuery控制HTML表單元素

jQuery可以輕鬆的獲取及控制HTML元素，這也是他受到前端工程師廣泛喜愛的原因之一，今天我們來整理一下jQuery如何實現對Form Element的**CRUD**，主要有以下幾個元素:
<!--more-->
- \<input> :我個人 應該也是所有人寫前端最常用到的元素
    - type="text" :文字輸入欄
    - type="checkbox" :核取方塊(打勾,多選)
    - type="radio" :選取按鈕(圈圈,單選)
- \<select>, \<option>
    - select 宣告下拉式選單的範圍
    - option 宣告選項

## HTML示範表單
```htmlembedded=
<div>
    <!--文字輸入 -->
    <input type="text" id='inputDataID'>
</div>
<div>
    <!--核取方塊 -->
    <input type="checkbox" name="checkBox1" id="checkBox1ID">
    <label for="checkBox1ID" value="I am checkBox1">checkBox1</label>
    <input type="checkbox" name="checkBox2" id="checkBox2ID">
    <label for="checkBox2ID" value="I am checkBox2">checkBox2</label>
</div>
<div>
    <!--選取按鈕 -->
    <input type="radio" name="radioButtonGroup" id="radioButton1ID" value="I am radioButton1">
    <label for="radioButton1ID">radioButton1</label>
    <input type="radio" name="radioButtonGroup" id="radioButton2ID" value="I am radioButton2">
    <label for="radioButton2ID">radioButton2</label>
    <input type="radio" name="radioButtonGroup" id="radioButton3ID" value="I am radioButton3">
    <label for="radioButton3ID">radioButton3</label>
</div>
<div>
    <!--下拉式選單 -->
    <select id="selectGroup">
        <option id="option0ID" value=""></option>
        <option id="option1ID" value="I am Option 1">Option 1</option>
        <option id="option2ID" value="I am Option 2">Option 2</option>
        <option id="option3ID" value="I am Option 3">Option 3</option>
    </select>
</div>
<div>
    <button id="sandRequest">sand</button>
</div>
<div>
    <label id="result"></label>
</div>
```

## 獲取值(Read)

jQuery可以用下面這兩行簡單的程式碼來獲取HTML element的值(value)或是文字(text)
```javascript=
$("#inputDataID").text(); //取出文字
$("#option1ID").val(); //取出值
```
其中 
+ 錢字符($)代表引用jQuery 
+ #inputDataID透過ID選取element(當然你想用class或是name 甚至直接指定element tag都可以)
+ text()取出element裡的文字(如果要取出value的話則要寫成val()

## 修改值(Update)

## 增加element(Create)

## 刪除element(Delete)