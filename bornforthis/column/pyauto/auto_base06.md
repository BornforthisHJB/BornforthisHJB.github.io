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

往“**虚假用户数据.xls**”里面，追加额外的 50 条用户数据，就是**标题+数据**，达到 150 条。

### 思路

- xlrd 是读取 Excel 文件的库
- xlwt 是写入 Excel 的库

如果使用以上两个库，可以一边读取，一边写入新文件。

不过在此，有另一个方便使用的库，库名是 xlutils，安装命令：`pip install xlutils`。

```cmd
pip install xlutils
```

安装好之后，开始写代码，完成追加 50 条数据的需求。

## 书写代码

1. 导入所需的库，分别是 xlrd 和 xlutils

```python
import xlrd
from xlutils.copy import copy
```

2. 使用 xlrd 打开文件，然后 xlutils 赋值打开后的 workbook，如下代码：

```python
wb = xlrd.open_workbook('虚假用户数据.xls', formatting_info=True)
xwb = copy(wb)
```

wb 对象是 workbook，xwb 也是 workbook，但是后者可以写操作，前者不可以。

3. 有了 workbook 之后，就开始指定 sheet，并获取这个 sheet 的总行数。

```python
sheet = xwb.get_sheet('第一个sheet')
rows = sheet.get_rows()
length = len(rows)
print(length)  # 输出 100
```

指定名称为“**第一个sheet**”的 sheet，然后获取全部的行，并输出总量，就得到了 sheet 中有 100 行。

（4）有了具体的行数，然后保证原有数据不变动的情况下，从第101行写数据。101行的索引是100，索引循环的起始数值是100。









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













