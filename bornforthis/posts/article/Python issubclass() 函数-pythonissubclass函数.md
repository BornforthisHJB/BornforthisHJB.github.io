---
title: Python issubclass() 函数
date: 2022-02-25 20:43:14.0
updated: 2022-03-30 23:30:07.533
url: /archives/591.html
categories: - technolog | Python
tags: 
---



## 描述

**issubclass()** 方法用于判断参数 class 是否是类型参数 classinfo 的子类。

### 语法

以下是 issubclass() 方法的语法:

```python
issubclass(class, classinfo)
```

### 参数

*   class -- 类。
*   classinfo -- 类。

### 返回值

如果 class 是 classinfo 的子类返回 True，否则返回 False。

* * *

## 实例

以下展示了使用 issubclass 函数的实例：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

class A:
    pass
class B(A):
    pass

print(issubclass(B,A))    # 返回 True
```