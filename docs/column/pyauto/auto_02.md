---
title: 02-导读｜入门Python的必备知识
date: 2022-10-13 23:24:44
author: AI悦创
isOriginal: true
category: Python 办公自动化
tag:
    - Python 办公自动化
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

咱们这个课程是用 Python 解决办公低效问题，但是即使你从来没有用过 Python，甚至没有任何的编程语言基础，也完全可以学会这门课。

为了解决你的语言问题，我特意准备了这节课。我会给你讲解 Python 的五个最基础的语法知识，包括运行环境配置、变量、数据类型、控制语句和使用函数库的方法。

这节课的内容也不需要你马上掌握，其中提到的一些关键知识，我会在后面的课程中详细讲解，包括它们的使用场景和具体用处。 **学完这节课，你只要能对 Python 有一个初步的了解，可以看懂基本的 Python 代码就行了。**

当然，如果你有一定的 Python 语言基础，那么这节课就相当于给你巩固复习了，帮你查漏补缺。

## 运行环境配置

我们先从 Python 的运行环境配置开始说起。初学者面对的最大难题，就是如何让自己的 Python 程序运行起来。

一般情况下，运行的 Python 代码会被保存到一个以.py 作为扩展名的文件中，也就是 Python 脚本文件。要想让 Python 程序运行，我们需要打开终端应用程序（在 Windows 中开始 - 运行 -cmd.exe）：

```python
python3 /py文件所在的路径/xxx.py
或
cd /py文件所在的路径
python3 xxx.py
```

这段代码中，`xxx.py` 就是我们编写好的 Python 脚本文件，Python3 是 Python 脚本文件的解释器，它会把我们编写好的代码翻译给计算机，让计算机去执行。

在运行程序的过程中，有两点需要注意。

第一，Windows 和 macOS 默认是没有安装 Python 解释器的，所以你需要通过 [Python 官方网站](https://www.python.org/downloads/) 下载不同操作系统下的 Python 解释器。关于 Python 的版本，我建议你使用官方建议的最新稳定版本，下载后直接安装就可以使用了。

第二，Python3 解释器需要在字符终端下运行。

以 macOS 系统为例，你需要打开终端来运行python3 -V 命令来验证 Python 解释器是否安装成功，如果显示了 Python 解释器的版本，那说明安装是成功的。如果提示没有找到这个命令，你需要重新安装，并注意安装过程中是否有错误提示信息。

```python
python3 -V # 执行的命令 
Python 3.9.1 # 返回的结果
```

搭建 Python 的开发环境，是运行一切程序的基础。无论你现在手边电脑操作系统是哪一种，我都建议你马上行动，先按照刚刚讲解的步骤，正确地安装和设置 Python 开发环境。这样在之后的课程中，你就能马上跟着我的讲解进行操作了。

## 变量

在正确配置好 Python 的开发环境之后，咱们继续学习一个重要概念：变量。

变量这个词来源于数学，在编程语言中，变量主要是用来存储计算结果或表示值的抽象概念。

计算机中的变量都有一个名字，我们把它称为变量名。这个名字一般是根据变量的英文名进行人为命名的，一般多用简短且易于记忆的名字。比如，我在课程中会使用 `src_path`、`dst_path` 两个变量表示操作源文件路径和目标文件路径。

我们还可以为变量指定一段数据，这段数据称作变量的值。计算机处理的数据很大一部分来源于用户输入的数据和运算的结果数据，如果这部分数据需要跟踪，我们就可以将数据存储在变量中。























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







