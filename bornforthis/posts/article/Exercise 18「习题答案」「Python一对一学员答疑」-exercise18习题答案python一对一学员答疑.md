---
title: Exercise 18「习题答案」「Python一对一学员答疑」
date: 2022-03-09 23:33:02.0
updated: 2022-03-30 23:21:32.317
url: /archives/493.html
categories: - 一对一教学
tags: 
---



# Exercise 18「中英文」

1.  一个二次方数字代表一个整数的二次方，例如1，4，9 和 16。写一个当 n 是一个二次方数字的时候返回 True 的函数，反之则返回 False。请给这个函数取名为 `isSquare(n)`。假设 n 是大于或等于 1.

A square number is an integer that is the square of an integer, e.g., 1, 4, 9 and 16. Write a function that returns True if n is a square number otherwise the function should return False. Name the function isSquare(n). Assume n is greater than or equal to 1. **原代码：**

```python
# Q1
def isSquare(n):
    square = False
    if n >= 1:
        number = n ** 0.5
        if int(number ** 2) == n:
            square = True
        else:
            square = False
        print(square)
    else:
        print("Wrong input. Please enter the number equal or greater than 1.")
```

**修改后的代码：**

```python
def isSquare(n):
    if n < 1:
        print("Wrong input. Please enter the number equal or greater than 1.")
    else:
        number = n ** 0.5
        if int(number ** 2) == n:
            return True
        else:
            return False
```

**扩展：题目添加一个条件：对 n 的数据类型进行判断。**

```python
def isSquare(n):
    if isinstance(n, int):
        if n < 1:
            print("Wrong input. Please enter the number equal or greater than 1.")
        else:
            number = n ** 0.5
            if int(number ** 2) == n:
                return True
            else:
                return False
    else:
        pass
```

**优化，使用 not**

```python
def isSquare(n):
    if not isinstance(n, int):
        return False
    elif n < 1:
        print("Wrong input. Please enter the number equal or greater than 1.")
        return False
    else:
        number = n ** 0.5
        if int(number ** 2) == n:
            return True
        else:
            return False
```

2.  写一个会返回字符串中间字符的函数。请给该函数取名为 `midpoint(word)` 。如果 word 拥有的字符数量为偶数，则该函数应该返回两个中间的字符。假设 word 是最少有一个字符，单个字符的中间字符为该字符。例如 `midpoint("apple")` 应该返回 p. 然而 `midpoint("public")` 应该返回 bl.

Write a function that returns the middle character of a string. Name the function midpoint(word). If word has an even number of characters, the function should return the two centre characters. Assume word is at least a single character long and the midpoint of a single character is the character. For example, midpoint(‘‘apple’’) should return p. However, midpoint(‘‘public’’) should return bl. **原代码：**

```python
def midpoint(word):
    length = len(word)
    loc = length // 2
    if length % 2 == 0:
        print(word[loc-1], word[loc])

    elif length % 2 == 1:
        print(word[loc])

    elif length == 1:
        print(word)
```

**修改后的代码：**

```python
def midpoint(word):
    length = len(word)
    loc = length // 2
    remainder = length % 2
    if remainder == 0:
        return word[loc-1], word[loc]
    elif remainder == 1:
        return word[loc]
    else:
        return word
```

3.  写一个在一个字符串中返回每个其他字母的函数，从第一个字符开始。请命名该函数为 `abbreviation(word)`。假设 word 有最少一个字符，当 word 只有一个字符的时候，该字符则是该 word 的缩写。例如当 `word = "bars"`，该函数需要返回 br。

Write a function that returns every other letter in a string, starting with the first letter. Name the function abbreviation(word). Assume word has at least on character and the abbreviation of a single character is the character. For example, given bars, the function should return br.

```python
def abbreviation(word):
    print(word[::2])

abbreviation("apple")
```

4.  写一个可打印 n 尺寸的加法表并命名该函数为 `summationTable(x)` . 例如 `summationTable(3)` 应该输出以下结果。

![在这里插入图片描述](https://img-blog.csdnimg.cn/1cc31ec940e748258f92f0663450a20d.png)

```python
def summationTable(x):
    print("x", end=" ")
    for i in range(x+1):
        print(i, end=" ")
    print()
    for j in range(x+1):
        print(j, end=" ")
        for k in range(x+1):
            print(j+k, end=" ")
        print()
```

5.  实现一个类，名为 Box。Box 类应该有以下属性：`items(一个 list)`，width，length 和 height。

这个类应该有以下的方法： • 在 `__init__` 函数应该定义 width，length 和 height；以及初始化一个空的 list 且命名为 items； • 创建 `addItem(item)` 函数：可以添加 item 进 items 列表里 • 创建 `getVolume()` 函数：返回 box 的体积 • 创建 `same(other)` 函数：以一个 list 的形式返回该 box 和其他 box 中相同的元素。Other 是 Box 类的一个实例。举一个例子，当该箱子有 `["apples", "oranges"]`，other box 有 `["apples", "bananas"]`，则 `same(other)` 将返回 `["apples"]`。

8.  Implement a class, Box. The Box class should have the following attributes: items (a list), width, length and height.

The class should also have the following methods:

*   A constructor that takes: width, length, and height; the constructor should define and initialise items as an empty list.
    
*   addItem(item) that appends item to the list items
    
*   getVolume() that returns the volume of the box
    
*   same(other) that returns a list of elements that the box has that are also found in the other box. That is, the parameter, other, is an object of type Box. For example, if the box has \[“apples”, “oranges”\] and the other box has \[“apples”, “bananas”\] then same(other) would return \[“apples”\]
    

```python
class Box():
    def __init__(self, width, length, height):
        self.items = []
        self.width = width
        self.length = length
        self.height = height

    def addItem(self, item):
        self.items.append(item)


    def getVolume(self):
        volume = self.width * self.length * self.height
        return volume

    def same(self, other):
        set1 = set(other.items)
        intersection = list(set1 & set(self.items))
        return intersection


lst1 = Box(width=1, length=2, height=3)
lst1.addItem("apples")
lst1.addItem("oranges")
print(lst1.items)
# lst2 = Box()
lst2 = Box(width=1, length=2, height=3)
lst2.addItem("apples")
lst2.addItem("oranges")
lst2.addItem("aiyc")
print(lst2.items)
print(lst2.same(lst1))
```

> AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。QQ、微信在线，随时响应！V：Jiabcdefh