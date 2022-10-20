---
title: Wugs
icon: python
time: 2022-10-20 13:09:41
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - Python 1v1
    - 澳洲大学一对一
    - 墨尔本大学
tag:
    - 1v1
    - Python 1v1
    - 澳洲大学一对一
    - 墨尔本大学
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

![image-20221020131355774](./02-Wugs.assets/image-20221020131355774.png)



In terms of the project, we wil experiment with abstract creatures called ``wugs''.

>   在这个项目中，我们将用被称为“wugs”的抽象生物进行实验。

Def. ``Wug'': a mythical little creature that looks rather like a bird, used in the so-called [Wug Test](https://en.wikipedia.org/wiki/Wug_Test) to investigate the acquisition of the plural form in English-speaking children.

>   Def。“Wug”:一种看起来很像鸟的神秘小生物，被用于所谓的“Wug测试”(https://en.wikipedia.org/wiki/Wug_Test)中，用来调查说英语的儿童对复数形式的习得。

For example, kids might be prompted with ``a wug'' and asked to produce a plural form of the word. Should it be '/wʌgz/', '/wʌgs/', or '/wʌgɨz/'?

>   例如，孩子们可能会被提示“a wug”，并被要求说出这个词的复数形式。它应该是'/wʌgz/'， '/wʌgs/'，还是'/wʌgɨz/'?

In the project, we will use wugs in order to avoid any bias towards evolution and reproduction of particular species.

>   在项目中，我们将使用wugs，以避免对特定物种的进化和繁殖的任何偏见。

## Wug Characteristics

>   Wug特点

Each wug has the following four binary characteristics:

>   每个wug具有以下四个二进制特征:

-   Intelligence (0 – Normal, 1 – Outstanding)

>   智力(0 -正常，1 -优秀)

-   Beauty (0 – Normal, 1 – Outstanding)

>   美貌(0 -普通，1 -卓越)

-   Strength (0 – Normal, 1 – Outstanding)

>   强度(0 -正常，1 -优异)

-   Speed (0 – Normal, 1 – Outstanding) And they can either be male (M) or female (F), this is encoded in one more characteristic, ``Sex''.

>   速度(0 -正常，1 -突出)他们可以是男性(M)或女性(F)，这是编码在另一个特征，“性别”。

Each wug is represented as a tuple comprising a list of 0s/1s (its genome) and a character (its sex; F/M).

>   每个wug都表示为一个元组，由0 /1(它的基因组)和一个字符(它的性别;F / M)。

## Wug Genome

Characteristic levels (Normal/Outstanding) of an individual wug are determined by its genome.A genome is a sequence comprising 16 genes.
Each gene is expressed as a single bit, i.e. can be either zero (0) or one (1).

>   单个wug的特征水平(正常/突出)由其基因组决定。基因组是由16个基因组成的序列。
>   每个基因都表示为单个位，即可以是0(0)或1(1)。

A sample genome:

>   基因组样本:

![image-20221020132231671](./02-Wugs.assets/image-20221020132231671.png)











































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
