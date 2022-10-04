---
title: Number System Conversion
date: 2022-10-03 00:51:07
author: AI悦创
isOriginal: true
category: 
    - Number System
    - Number System Conversion
tag:
    - Number System
    - Number System Conversion
icon: python
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

你好，我是悦创。

As we know, the number system is a form of expressing the numbers. In **number system conversion**, we will study to convert a number of one base, to a number of another base. There are a variety of [number systems](https://byjus.com/maths/number-system/) such as binary numbers, decimal numbers, hexadecimal numbers, octal numbers, which can be exercised.

> 我们知道，数制是表示数字的一种形式。在数制转换中，我们将学习如何将一个进位的数转换为另一个进位的数。有各种各样的[数字系统](https://byjus.com/maths/number-system/)，如二进制数、十进制数、十六进制数、八进制数，可以进行练习。

In this article, you will learn the conversion of one base number to another base number considering all the base numbers such as decimal, binary, octal and hexadecimal with the help of examples. Here, the following number system conversion methods are explained.

> 在本文中，通过示例的帮助，您将学习一个基数到另一个基数的转换，考虑到所有的基数，如十进制、二进制、八进制和十六进制。在这里，解释下列数字系统转换方法。

- Binary to Decimal Number System

> 二进制到十进制的数字系统

- Decimal to Binary Number System

> 十进制到二进制的数字系统

- Octal to Binary Number System

> 八进制到二进制数系统

- Binary to Octal Number System

> 二进制到八进制数字系统

- Binary to Hexadecimal Number System

> 二进制到十六进制的数字系统

- Hexadecimal to Binary Number System

> 十六进制到二进制数系统

Get the pdf of number system with a brief description in it. The general representation of number systems are;

> 获取数字系统的 pdf，其中有一个简短的描述。数系的一般表示是:

Decimal Number – Base 10 – $N_{10}$

> 十进制数-以10为基数- N10

Binary Number – Base 2 – $N_{2}$

> 二进制数-以2为基数- $N_{2}$

Octal Number – Base 8 – $N_{8}$

> 八进制-以8为基数- $N_{8}$

Hexadecimal Number – Base 16 – $N_{16}$

> 十六进制数-以16为基数 - $N_{16}$

## Number System Conversion Table

> 数字系统转换表

| Binary Numbers | Octal Numbers「八进制数」 | Decimal Numbers「十进制数」 | Hexadecimal Numbers「十六进制数字」 |
| -------------- | ------------------------- | --------------------------- | ----------------------------------- |
| 0000           | 0                         | 0                           | 0                                   |
| 0001           | 1                         | 1                           | 1                                   |
| 0010           | 2                         | 2                           | 2                                   |
| 0011           | 3                         | 3                           | 3                                   |
| 0100           | 4                         | 4                           | 4                                   |
| 0101           | 5                         | 5                           | 5                                   |
| 0110           | 6                         | 6                           | 6                                   |
| 0111           | 7                         | 7                           | 7                                   |
| 1000           | 10                        | 8                           | 8                                   |
| 1001           | 11                        | 9                           | 9                                   |
| 1010           | 12                        | 10                          | A                                   |
| 1011           | 13                        | 11                          | B                                   |
| 1100           | 14                        | 12                          | C                                   |
| 1101           | 15                        | 13                          | D                                   |
| 1110           | 16                        | 14                          | E                                   |
| 1111           | 17                        | 15                          | F                                   |

## Number System Conversion Methods

> 数字系统转换方法

Number system conversions deal with the operations to change the base of the numbers. For example, to change a decimal number with base 10 to binary number with base 2. We can also perform the arithmetic operations like addition, subtraction, multiplication on the number system. Here, we will learn the methods to convert the number of one base to the number of another base starting with the decimal number system. The representation of number system base conversion in general form for any base number is;

> 数字系统转换处理改变数字基数的操作。
>
> 例如， **将以 10 为基数的十进制数更改为以 2 为基数的二进制数。** 
>
> 我们还可以在数字系统上进行加减乘等算术运算。在这里，我们将从十进制数字系统开始学习将一个进位数转换为另一个进位数的方法。对于任何底数，一般形式的数制底数转换表示为:

$(Number)_{b} = d_{n-1} d_{n-2}—–.d_{1} d_{0} . d_{1} d_{2} —- d_{m}$

In the above expression, dn-1 dn-2—–.d1 d0 represents the value of integer part and d-1 d-2 —- d-m represents the fractional part.

> 在上面的表达式中，$d_{n-1} d_{n-2}——$。D1 d0表示整数部分的值，d-1 d-2——d-m表示小数部分的值。

Also, dn-1 is the Most significant bit (MSB) and d-m is the Least significant bit (LSB).

> 同样，dn-1是最有效位(MSB)， d-m是最不有效位(LSB)。

Now let us learn, conversion from one base to another.

> 现在让我们学习一下，从一个进制到另一个进制的转换。



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
