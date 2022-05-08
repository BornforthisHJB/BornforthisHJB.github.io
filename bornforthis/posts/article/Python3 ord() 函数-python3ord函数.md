---
title: Python3 ord() 函数
date: 2022-02-25 20:25:33.0
updated: 2022-03-30 23:30:39.879
url: /archives/623.html
categories: - technolog | Python
tags: 
---



## 描述

ord() 函数是 chr() 函数（对于 8 位的 ASCII 字符串）的配对函数，它以一个字符串（Unicode 字符）作为参数，返回对应的 ASCII 数值，或者 Unicode 数值。

### 语法

以下是 ord() 方法的语法:

```python
ord(c)
```

### 参数

*   c -- 字符。

### 返回值

返回值是对应的十进制整数。

* * *

## 实例

以下展示了使用 ord() 方法的实例：

```python
>>>ord('a')
97
>>> ord('€')
8364
>>>
```