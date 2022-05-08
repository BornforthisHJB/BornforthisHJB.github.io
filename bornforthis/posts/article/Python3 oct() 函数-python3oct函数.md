---
title: Python3 oct() 函数
date: 2022-02-25 19:40:22.0
updated: 2022-03-30 23:30:39.88
url: /archives/624.html
categories: - technolog | Python
tags: 
---



## 描述

**oct()** 函数将一个整数转换成 8 进制字符串，8 进制以 **0o** 作为前缀表示。

## 语法

oct 语法：

```Python
oct(x)
```

参数说明：

*   x -- 整数。

## 返回值

返回 8 进制字符串。

## 实例

以下实例展示了 oct 的使用方法：

```python
>>> oct(10)
'0o12'
>>> oct(20)
'0o24'
>>> oct(15)
'0o17'
```