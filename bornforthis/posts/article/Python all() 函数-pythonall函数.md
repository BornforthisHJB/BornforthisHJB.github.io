---
title: Python all() 函数
date: 2022-02-25 17:22:35.0
updated: 2022-03-30 23:25:04.782
url: /archives/575.html
categories: - technolog | Python
tags: 
---



## 描述

all() 函数用于判断给定的可迭代参数 iterable 中的所有元素是否都为 TRUE，如果是返回 True，否则返回 False。 元素除了是 0、空、None、False 外都算 True。 函数等价于：

```python
def all(iterable):
    for element in iterable:
        if not element:
            return False
    return True
```

Python 2.5 以上版本可用。

### 语法

以下是 all() 方法的语法:

```Python
all(iterable)
```

### 参数

*   iterable -- 元组或列表。

### 返回值

如果 iterable 的所有元素不为 0、''、False 或者 iterable 为空，`all(iterable)` 返回 True，否则返回 False； **注意：**空元组、空列表返回值为 True，这里要特别注意。

* * *

## 实例

以下展示了使用 `all()` 方法的实例：

```python
>>> all(['a', 'b', 'c', 'd'])  # 列表list，元素都不为空或0
True
>>> all(['a', 'b', '', 'd'])   # 列表list，存在一个为空的元素
False
>>> all([0, 1，2, 3])          # 列表list，存在一个为0的元素
False

>>> all(('a', 'b', 'c', 'd'))  # 元组tuple，元素都不为空或0
True
>>> all(('a', 'b', '', 'd'))   # 元组tuple，存在一个为空的元素
False
>>> all((0, 1, 2, 3))          # 元组tuple，存在一个为0的元素
False

>>> all([])             # 空列表
True
>>> all(())             # 空元组
True
```