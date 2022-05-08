---
title: Python3 exec 函数
date: 2022-02-25 20:20:20.0
updated: 2022-03-30 23:30:34.195
url: /archives/617.html
categories: - technolog | Python
tags: 
---



## 描述

exec 执行储存在字符串或文件中的 Python 语句，相比于 eval，exec可以执行更复杂的 Python 代码。

### 语法

以下是 exec 的语法:

```python
exec(object[, globals[, locals]])
```

### 参数

*   object：必选参数，表示需要被指定的 Python 代码。它必须是字符串或 code 对象。如果 object 是一个字符串，该字符串会先被解析为一组 Python 语句，然后再执行（除非发生语法错误）。如果 object 是一个 code 对象，那么它只是被简单的执行。
*   globals：可选参数，表示全局命名空间（存放全局变量），如果被提供，则必须是一个字典对象。
*   locals：可选参数，表示当前局部命名空间（存放局部变量），如果被提供，可以是任何映射对象。如果该参数被忽略，那么它将会取与 globals 相同的值。

### 返回值

exec 返回值永远为 None。

* * *

## 实例

以下展示了使用 exec 的实例：

```python
>>>exec('print("Hello World")')
Hello World
# 单行语句字符串
>>> exec("print ('aiyc.top')")
aiyc.top

#  多行语句字符串
>>> exec ("""for i in range(5):
...     print ("iter time: %d" % i)
... """)
iter time: 0
iter time: 1
iter time: 2
iter time: 3
iter time: 4
```

```python
x = 10
expr = """
z = 30
sum = x + y + z
print(sum)
"""
def func():
    y = 20
    exec(expr)
    exec(expr, {'x': 1, 'y': 2})
    exec(expr, {'x': 1, 'y': 2}, {'y': 3, 'z': 4})

func()
```

输出结果：

```python
60
33
34
```