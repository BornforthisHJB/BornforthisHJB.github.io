---
title: 02-Python cs project
icon: python
time: 2022-10-13 11:02:24
author: AI悦创
isOriginal: true
category: 
    - Python 1v1
tag:
    - Python 1v1
sticky: false
star: false
password: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## 1. 词频分析

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/13 11:05
# @Author  : AI悦创
# @FileName: demo.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
def make_dictionary(filename):
	try:
		file = open(filename, "r")
		textoffile = file.read()
	except FileNotFoundError:
		print("The file was not found.")
	textoffile = textoffile.lower()
	# print(textoffile)
	for textoffiles in textoffile:
		# print(textoffiles)
		textoffiles = textoffile.strip()
		# print(textoffiles)
	# 	print(textoffiles)
		words = textoffiles.split("\n")
		# print(words)
		wdict = {}
		for word in words:
			if len(word) >= 1:
				if word in wdict:
					wdict[word] += 1
				else:
					wdict[word] = 1
			else:
				pass
		return wdict


# Testing with the example data in the question
dictionary = make_dictionary('data/data2.txt')
print(dictionary)
for key in sorted(dictionary.keys()):
	print(key + ': ' + str(dictionary[key]))
	print(key + ': ' + str(dictionary[key]))
```

[/05-Patrick/02-02-CS-shaoshuai-Python-cs](/05-Patrick/02-02-CS-shaoshuai-Python-cs/)



## 2. Question 2

Define a function my_enumerate(items) that behaves in a similar way to the built-in enumerate function. It should return a list of tuples (i, item) where item is the ith item, with 0 origin, of the list items (see the examples below). Check the test cases for how the function should work. Your function must not call python's inbuilt enumerate function.

>   定义一个函数 my_enumerate(items)，其行为方式与内置的 enumerate 函数类似。它应该返回元组(i, item)的列表，其中 item 是列表项的第 i 个项，原点为0(参见下面的示例)。检查测试用例以了解该功能应该如何工作。你的函数不能调用 python 的内置 enumerate 函数。



```python
```









欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)