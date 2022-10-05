---
title: Homework Problem \#1 - DNA sequencing
icon: python
time: 2022-10-05 21:18:48
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 1v1
tag:
    - python 1v1
    - 1v1
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

**Hand-in format:** IPython Notebook or python program. Submit via email.

> **提交格式:** IPython Notebook 或 python 程序。通过电子邮件提交。

As a reminder: please make sure your code is clean, documentated, and understandable. Make sure it runs without errors.

> 作为一个提醒:请确保您的代码是干净的、有文档记录的和可理解的。确保它没有错误地运行。

## Background

[DNA](http://en.wikipedia.org/wiki/DNA) is a molecule that encodes genetic instructions for living organisms. DNA typically takes the form of double-stranded helix: each strand corresponds to a sequence of *nucleotides*.

> [DNA](http://en.wikipedia.org/wiki/DNA) 是一种为生物体编码遗传指令的分子。DNA 通常采用双链螺旋结构:每条链对应一个核苷酸序列。

Each nucleotide consists of a nucleobase (guanine, adenine, thymine, or cytosine) attached to sugars, which are in turn separated from each other by phosphate groups:

> 每个核苷酸由附在糖上的一个碱基(鸟嘌呤、腺嘌呤、胸腺嘧啶或胞嘧啶)组成，这些碱基又由磷酸基彼此分离:

![DNA_Structure+Key+Labelled.pn_NoBB](./01-Homework-Problem-DNA-sequencing.assets/DNA_Structure+Key+Labelled.pn_NoBB.png)

The nucleobases are commonly referred to with the letters:

> 碱基通常用字母表示:

* `G` (guanine)

> “G”(鸟嘌呤)

* `A` (adenine)

> A(腺嘌呤)

* `T` (thymine) and 

> (胸腺嘧啶)和“T”

* `C` (cytosine).

> “C”(胞嘧啶)。

The nucleobases form pairs (or "complements"): `G` pairs with `C`, and `T` pairs with `A`. 

> 碱基形成一对(或“补体”):“G”对与“C”，“T”对与“A”。

The information content of a piece of DNA is therefore commonly represented as a string, giving a sequence of nucleobases, such as `GATTACACCTCATTATAAA`.

> 因此，一段 DNA 的信息内容通常被表示为一个字符串，给出一个碱基序列，如 “GATTACACCTCATTATAAA”。

In this problem set, we will be working with fake genetic data, since real-life data often has added complications, but the functions and techniques uses here are the same or very similar to techniques used on real data.

> 在这个问题集中，我们将处理假的基因数据，因为现实生活中的数据通常会增加复杂性，但这里使用的功能和技术与真实数据中使用的技术相同或非常相似。



## Part 1

### Question 1

The **reverse complement** of DNA is found by reversing the DNA sequence, then replacing each base by its complement. For example, the reverse complement of `ATGCGGC` is `GCCGCAT`.

> DNA 的逆补体是通过颠倒 DNA 序列，然后用其补体替换每个碱基来发现的。例如，' ATGCGGC '的反向补语是' GCCGCAT '。

Write a Python function `reverse_complement()` that takes a DNA sequence as a string, and returns the reverse complement. Test your function, then find and print the reverse complement of the following sequence:

> 编写一个Python函数' reverse_complement() '，它接受一个DNA序列作为字符串，并返回反向补体。测试你的函数，然后找到并打印以下序列的逆补:

    ATGCGCGGATCGTACCTAATCGATGGCATTAGCCGAGCCCGATTACGC

Note that this function is not needed for the remaining questions below.

> 注意，下面其余的问题不需要这个函数。







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
