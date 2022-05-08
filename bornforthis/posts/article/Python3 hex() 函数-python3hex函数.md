---
title: Python3 hex() 函数
date: 2022-02-25 17:27:30.0
updated: 2022-03-30 23:30:36.898
url: /archives/621.html
categories: - technolog | Python
tags: 
---



## 描述

**hex()** 函数用于将一个指定数字转换为 16 进制数。

## 语法

hex 语法：

```Python
hex(x)
```

参数说明：

*   x -- 一个整数

## 返回值

返回一个字符串，以 `0x` 开头。

## 实例

以下实例展示了 hex 的使用方法：

```python
>>>hex(255)
'0xff'
>>> hex(-42)
'-0x2a'
>>> hex(12)
'0xc'
>>> type(hex(12))
<class 'str'>      # 字符串
```