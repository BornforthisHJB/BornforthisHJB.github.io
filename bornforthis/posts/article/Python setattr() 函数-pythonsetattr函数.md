---
title: Python setattr() 函数
date: 2022-02-25 16:49:52.0
updated: 2022-03-30 23:30:22.894
url: /archives/608.html
categories: - technolog | Python
tags: 
---



## 描述

**setattr()** 函数对应函数 [getattr()](https://www.bornforthis.cn/2378.html)，用于设置属性值，该属性不一定是存在的。

## 语法

setattr() 语法：

```Python
setattr(object, name, value)
```

## 参数

*   object -- 对象。
*   name -- 字符串，对象属性。
*   value -- 属性值。

## 返回值

无。

## 实例

以下实例展示了 setattr() 函数的使用方法： 对已存在的属性进行赋值：

```python
>>>class A(object):
...     bar = 1
... 
>>> a = A()
>>> getattr(a, 'bar')          # 获取属性 bar 值
1
>>> setattr(a, 'bar', 5)       # 设置属性 bar 值
>>> a.bar
5
```

如果属性不存在会创建一个新的对象属性，并对属性赋值：

```python
>>>class A():
...     name = "runoob"
... 
>>> a = A()
>>> setattr(a, "age", 28)
>>> print(a.age)
28
>>>
```