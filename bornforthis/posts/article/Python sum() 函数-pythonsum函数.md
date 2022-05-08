---
title: Python sum() 函数
date: 2022-02-25 20:28:50.0
updated: 2022-03-30 23:30:25.773
url: /archives/610.html
categories: - technolog | Python
tags: 
---



## 描述

**sum()** 方法对序列进行求和计算。

### 语法

以下是 sum() 方法的语法:

```python
sum(iterable[, start])
```

### 参数

*   iterable -- 可迭代对象，如：列表、元组、集合。
*   start -- 指定相加的参数，如果没有设置这个值，默认为0。

### 返回值

返回计算结果。

* * *

## 实例

以下展示了使用 sum 函数的实例：

```python
>>>sum([0,1,2])  
3  
>>> sum((2, 3, 4), 1)        # 元组计算总和后再加 1
10
>>> sum([0,1,2,3,4], 2)      # 列表计算总和后再加 2
12
```

```python
import numpy as np

a = np.array([[1,2],[3,4]])

# 按行相加，并且保持其二维特性
print(np.sum(a, axis=1, keepdims=True))

# 按行相加，不保持其二维特性
print(np.sum(a, axis=1))
```

输出：

```python
array([[3], [7]])
array([3, 7])
```