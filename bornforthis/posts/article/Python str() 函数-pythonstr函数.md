---
title: Python str() 函数
date: 2022-02-25 20:11:50.0
updated: 2022-03-30 23:30:25.773
url: /archives/611.html
categories: - technolog | Python
tags: 
---



## 描述

`str()` 函数将对象转化为适于人阅读的形式。

### 语法

以下是 `str()` 方法的语法:

```python
class str(object='')
```

### 参数

*   object -- 对象。

### 返回值

返回一个对象的string格式。

* * *

## 实例

以下展示了使用 `str()` 方法的实例：

```python
>>>s = 'aiyc'
>>> str(s)
'aiyc'
>>> dict = {'aiyc': 'aiyc.top', 'google': 'google.com'};
>>> str(dict)
"{'google': 'google.com', 'aiyc': 'aiyc.top'}"
>>>
```