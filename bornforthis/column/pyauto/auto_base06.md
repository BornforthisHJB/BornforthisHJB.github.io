---
title: 06-Python 追加 Excel 数据
date: 2022-07-12 11:49:53
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
prev: auto_base05.md
next: auto_base07.md
backToTop: true
toc: true
---

## xlutils 库的安装

你好，我是悦创。

### 需求

往“**虚假用户数据.xls**”里面，追加额外的 50 条用户数据，就是**标题+数据**，达到150条。

### 思路

- xlrd 是读取 Excel 文件的库
- xlwt是写入Excel的库

如果使用以上两个库，可以一边读取，一边写入新文件。

不过在此，有另一个方便使用的库，库名是xlutils，安装命令：`pip install xlutils`。

安装好之后，开始写代码，完成追加50条数据的需求。



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













