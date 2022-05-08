---
title: Python help() 函数
date: 2022-02-25 16:42:44.0
updated: 2022-03-30 23:30:04.294
url: /archives/590.html
categories: - technolog | Python
tags: 
---



## 描述

**help()** 函数用于查看函数或模块用途的详细说明。

## 语法

help 语法：

```Python
help([object])
```

参数说明：

*   object -- 对象；

## 返回值

返回对象帮助信息。

## 实例

以下实例展示了 help 的使用方法：

```python
>>>help('sys')             # 查看 sys 模块的帮助
……显示帮助信息……

>>>help('str')             # 查看 str 数据类型的帮助
……显示帮助信息……

>>>a = [1,2,3]
>>>help(a)                 # 查看列表 list 帮助信息
……显示帮助信息……

>>>help(a.append)          # 显示list的append方法的帮助
……显示帮助信息……
```