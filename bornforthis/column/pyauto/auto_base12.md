---
title: 12-openpyxl 追加 Excel 数据
date: 2022-07-22 22:50:14
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
prev: auto_base11.md
next: auto_base13.md
backToTop: true
toc: true
---

## 需求说明

xlsxwriter 只能创建新的文件，不能对文件进行数据的追加和读取操作。

需要追加和读取 xlsx 文件，就需要用到 openpyxl 这个库了。安装命令：`pip install openpyxl`。

```cmd
pip install openpyxl
```

使用 openpyxl 完成这面这个需求：

- 读取上面创建好的 `xlsxwriter插入数据和折线图.xlsx` 文件，复制一份，保存到 poenpyxl 插入数据和折线图[copy xlsxwriter].xlsx复制的文件中
- sheet1 保持和源文件的sheet1一致，折线图不画复制的文件中
- 创建一个 sheet2，sheet2 的数据从 sheet1 中拷贝过来
- 随机的增加 1 年的随机数据，也就是 2020 年 1 月至 12 月的日期，数据1和数据2的12个数据随机生成
- 在sheet2中画一个折线图，统计数据1和数据2

需求有四个，有难有易。















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













