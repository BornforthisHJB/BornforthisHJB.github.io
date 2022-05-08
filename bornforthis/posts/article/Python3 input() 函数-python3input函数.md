---
title: Python3 input() 函数
date: 2022-02-25 19:37:21.0
updated: 2022-03-30 23:30:36.899
url: /archives/622.html
categories: - technolog | Python
tags: 
---



Python3.x 中 input() 函数接受一个标准输入数据，返回为 string 类型。

> **注意：**在 Python3.x 中 raw\_input() 和 input() 进行了整合，去除了 raw\_input( )，仅保留了input( )函数，其接收任意任性输入，将所有输入默认为字符串处理，并返回字符串类型。

### 函数语法

```python
input([prompt])
```

参数说明：

*   prompt: 提示信息

### 实例

```python
>>>a = input("input:")
input:123                  # 输入整数
>>> type(a)
<class 'str'>              # 字符串
>>> a = input("input:")    
input:aiyuechuang              # 正确，字符串表达式
>>> type(a)
<class 'str'>             # 字符串
```

### input() 接收多个值

```python
#!/usr/bin/python
#输入三角形的三边长
a,b,c = (input("请输入三角形三边的长：").split())
a= int(a)
b= int(b)
c= int(c)

#计算三角形的半周长p
p=(a+b+c)/2

#计算三角形的面积s
s=(p*(p-a)*(p-b)*(p-c))**0.5

#输出三角形的面积
print("三角形面积为：",format(s,'.2f'))
```

以上实例执行输出结果为：

```Python
请输入三角形三边的长：3 4 5
三角形面积为： 6.00
```