---
title: Python3 ascii() 函数
date: 2022-02-25 18:41:17.0
updated: 2022-03-30 23:30:30.688
url: /archives/614.html
categories: - technolog | Python
tags: 
---



## 描述

`ascii()` 函数类似 `repr()` 函数, 返回一个表示对象的字符串, 但是对于字符串中的非 ASCII 字符则返回通过 repr() 函数使用 `\x`, `\u` 或 `\U` 编码的字符。 生成字符串类似 Python2 版本中 `repr()` 函数的返回值。

* * *

## 语法

以下是 ascii() 方法的语法:

```Python
ascii(object)
```

* * *

## 参数

*   object -- 对象。

* * *

## 返回值

返回字符串。

* * *

## 实例

以下展示了使用 ascii() 方法的实例：

```Python
>>> ascii('runoob')
"'runoob'"
```