---
layout:     post
title:      "[JSP]JSP標準標籤庫(JSTL)"
subtitle:   "你可以使用JSTL來處理一些通用性的任務，類似JSP裡的Jquery"
date:       2022-02-11
author:     "linyejoe2"
header-style: text
catalog: true
tags: JSP, HTML
---

#  JSP標準標籤庫(JSTL)

JSTL標籤分為五個類別(功能)
+ core標籤
+ 格式化標籤
+ SQL標籤
+ XML標籤
+ JSTL函數
<!--more-->


## JSTL庫安裝

### 下載JSTL庫
從[Apache標準標籤庫](http://archive.apache.org/dist/jakarta/taglibs/standard/binaries/)中下載**jakarta-taglibs-standard-1.1.2.zip**(Windows)或是**jakarta-taglibs-standard-1.1.2.tar.gz**(Linux)
再把壓縮檔lib的內容複製至服務的/WEB-INF/lib/中
tld也複製至程式的/WEB-INF/tld/中即可

### 引用JSTL庫

編輯/WEB-INF/web.xml 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="2.4" 
    xmlns="http://java.sun.com/xml/ns/j2ee" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee 
        http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">
    <jsp-config>
    <taglib>
    <taglib-uri>http://java.sun.com/jsp/jstl/fmt</taglib-uri>
    <taglib-location>/WEB-INF/fmt.tld</taglib-location>
    </taglib>
    <taglib>
    <taglib-uri>http://java.sun.com/jsp/jstl/fmt-rt</taglib-uri>
    <taglib-location>/WEB-INF/fmt-rt.tld</taglib-location>
    </taglib>
    <taglib>
    <taglib-uri>http://java.sun.com/jsp/jstl/core</taglib-uri>
    <taglib-location>/WEB-INF/c.tld</taglib-location>
    </taglib>
    <taglib>
    <taglib-uri>http://java.sun.com/jsp/jstl/core-rt</taglib-uri>
    <taglib-location>/WEB-INF/c-rt.tld</taglib-location>
    </taglib>
    <taglib>
    <taglib-uri>http://java.sun.com/jsp/jstl/sql</taglib-uri>
    <taglib-location>/WEB-INF/sql.tld</taglib-location>
    </taglib>
    <taglib>
    <taglib-uri>http://java.sun.com/jsp/jstl/sql-rt</taglib-uri>
    <taglib-location>/WEB-INF/sql-rt.tld</taglib-location>
    </taglib>
    <taglib>
    <taglib-uri>http://java.sun.com/jsp/jstl/x</taglib-uri>
    <taglib-location>/WEB-INF/x.tld</taglib-location>
    </taglib>
    <taglib>
    <taglib-uri>http://java.sun.com/jsp/jstl/x-rt</taglib-uri>
    <taglib-location>/WEB-INF/x-rt.tld</taglib-location>
    </taglib>
    </jsp-config>
</web-app>
```

## Core標籤程式庫

|標籤|描述|
|---|---|
|[<c:out>](#lt-c-out-gt)|輸出EL資料|
|[<c:if>](#lt-c-if-gt)|if判斷成功才顯示內容|
|TODO||

--------------------------------

## <c:out>

### 語法
```jsp
<c:out value="<string>" default="<string>" escapeXml="<true|false>"/>
```

### 屬性
其中需要填入三個屬性

|Attribute|description|Required|Default|
|-|-|-|-|
|value|要输出的内容|Yes|None|
|default|輸出默認值|No|body|
|escapeXml|是否忽略XML特殊字符|No|true|

### 示範
```jsp
<c:out value="${paramaction. }" default="no values" /></c:out>
```
此結果若paramaction不存在,就顯示no values的內容

--------------------------------

## <c:if>

### 語法
```jsp
<c:if test="<boolean>" var="<string>" scope="<string>">
   ...
</c:if>
```

### 屬性
其中需要填入三個屬性

|Attribute|description|Required|Default|
|-|-|-|-|
|test|條件|Yes|None|
|var|儲存條件結果|No|None|
|scope|作用域|No|page|

### 示範
```jsp
<c:if test="${param.action == 'add'}">
 <table>
 <tr>
   <td>name:<input type="text" name="name" /></td>
 </tr>
 <tr>
   <td>number:<input type="text" name="number" /></td>
 </tr>
 </table>
</c:if>
```
此結果若param.action不等於"add",就不顯示c:if內部內容

##### 參考資料
1. [菜鳥教程](https://www.runoob.com/jsp/jsp-jstl.html)
2. [JSTL - Core <c:out> Tag](https://www.tutorialspoint.com/jsp/jstl_core_out_tag.htm)
3. [30 days JSP & Servlet學習紀錄](https://ithelp.ithome.com.tw/articles/10186941)