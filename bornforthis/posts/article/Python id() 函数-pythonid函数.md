---
title: Python id() 函数
date: 2022-02-25 18:27:58.0
updated: 2022-03-30 23:30:04.293
url: /archives/589.html
categories: - technolog | Python
tags: 
---



## 描述

**id()** 函数返回对象的唯一标识符，标识符是一个整数。 CPython 中 **id()** 函数用于获取对象的内存地址。

## 语法

id 语法：

```Python
id([object])
```

参数说明：

*   object -- 对象。

## 返回值

返回对象的内存地址。

## 实例

以下实例展示了 id 的使用方法：

```python
>>>a = 'runoob'
>>> id(a)
4531887632
>>> b = 1
>>> id(b)
140588731085608
```