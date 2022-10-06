---
title: Homework Problem \#2 - Arctic Ice
icon: python
time: 2022-10-06 18:15:28
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 1v1
    - 物理
tag:
    - python 1v1
    - 1v1
    - 物理
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

- [/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/problem_2.ipynb](/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/problem_2.ipynb)

- [/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/day_2.ipynb](/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/day_2.ipynb)

**Hand-in format:** IPython Notebook or python program. Submit via email.

As a reminder: please make sure your code is clean, documentated, and understandable. Make sure it runs without errors.

> **提交格式:** IPython Notebook或python程序。通过电子邮件提交。
>
> 作为一个提醒:请确保您的代码是干净的、有文档记录的和可理解的。确保它没有错误地运行。

## Background

The purpose of this problem is to become familiar with loading, manipulating, and analyzing image-like data, plotting it. We will use a dataset collected by the AMSR-E instrument [Aqua](http://en.wikipedia.org/wiki/Aqua_%28satellite%29) satellite.

> 这个问题的目的是熟悉加载、操作和分析类似图像的数据，并绘制它。我们将使用AMSR-E仪器[Aqua](http://en.wikipedia.org/wiki/Aqua_%28satellite%29)卫星收集的数据集。

The data consists of maps of the concentration of ice in the Arctic collected between 2006 and 2011. The data obtained from the [amsr database](http://www.iup.uni-bremen.de/seaice/amsr/) and converted into a single HDF5 file format.

> 这些数据由2006年至2011年收集的北极冰浓度地图组成。从[amsr数据库](http://www.iup.uni-bremen.de/seaice/amsr/)获得的数据，并转换为单一的HDF5文件格式。

## Part 1 - Examining a single map

> 第1部分-检查单个地图

Begin by examining the HDF5 file - you can use `h5ls` at the command line, or `h5py` inside the notebook.

> 从检查HDF5文件开始-你可以在命令行中使用' h5ls '，或者在笔记本中使用' h5py '。

> If you don't remember how to open HDF5 files, and read datasets from HDF5 files, look at our Day 2 lecture.

> 如果你不记得如何打开 HDF5 文件，并从 HDF5 文件中读取数据集，请参考我们第2天的课程。

> There are many datasets, each with a name of the format `YYYYMMDD`, giving the data. Each dataset is a single map (i.e. 2D array), where the values give the ice concentration (fraction, from 0.0 to 100.0) in that pixel of the map. Careful of NaN values!

> 有许多数据集，每个数据集的名称格式为“YYYYMMDD”，用于提供数据。每个数据集都是一个单一的地图(即2D数组)，其中的值给出了地图像素中的冰浓度(从0.0到100.0的分数)。小心NaN值!

Read one of the maps, and plot it with Matplotlib.

> 阅读其中一张地图，并使用Matplotlib绘制它。

Note: to get the correct orientation, you need the `origin='lower'` argument for `imshow()`. Include a colorbar. Remove the tick labels (`0`, `100`, and so on, indicating pixel number) since they are not useful.

> 注意:为了获得正确的方向，你需要' origin='lower' '参数为' imshow() '。包括一个colorbar。删除标记(“0”、“100”等，表示像素数)，因为它们没有用。

## 答案





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
