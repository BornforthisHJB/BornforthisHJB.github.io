---
title: 02-Python 保留指定位数的小数
date: 2022-05-24 23:19:00
author: AI悦创
isOriginal: true
category: Python 补充知识
tag:
    - Python 补充知识
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
prev: requirements.md
next: false
backToTop: true
toc: true
---

## 1. ''%.2f' %f 方法(推荐)

```python
In [1]: f = 1.23456

In [2]: '%.4f' % f
Out[2]: '1.2346'

In [3]: '%.3f' % f
Out[3]: '1.235'

In [4]: '%.2f' % f
Out[4]: '1.23'

In [5]: # 等价于下面的代码

In [6]: print('%.4f' % f)
1.2346

In [7]: print('%.3f' % f)
1.235

In [8]: print('%.2f' % f)
1.23
```

::: info 提示

这个方法会进行四舍五入。

:::

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



