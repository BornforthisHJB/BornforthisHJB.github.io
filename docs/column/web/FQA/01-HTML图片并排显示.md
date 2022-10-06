---
title: 01-实战之 HTML: 把两张图片并排（行）显示
date: 2022-09-30 11:57:06
author: AI悦创
isOriginal: true
category: 
    - web 专栏
    - Web FQA
tag:
    - web 专栏
    - Web FQA
icon: web
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

## 更改方式

你好，我是悦创。

```html
<table>
    <tr>
        <td><img src=pic1.jpg border=0></td>
        <td><img src=pic2.jpg border=0></td>
    </tr>
</table>
```

`<table> 标签定义 HTML 表格。`

简单的 HTML 表格由 table 元素以及一个或多个 tr、th 或 td 元素组成。

tr 元素定义表格行，th 元素定义表头，td 元素定义表格单元（列）。

**eg:**

```html
#武汉疫情明星捐款# 都说正能量的偶像影响正能量的粉丝，在这次疫情中，肖战的“小飞侠”们为武汉捐款捐物。<br />
<br />
无奈的是很多人竟认为这与肖战无关，不断指责谩骂肖战。<br />
<br />
那些说话不负责任的键盘侠可曾想过，正是因为肖战超强的号召力，小飞侠们才团结一致，和偶像一同进步，成为最好的自己！<br />
<br />
武汉疫情牵动数万中国人的心，在援助武汉的过程中，很多新生代艺人发挥了他们超强的影响力和号召力，这才应该是大家关注焦点，而不是道德绑架，无意义的攀比。#娱乐最前沿#<br />
<table><tr><td><img src="http://pics0.baidu.com/feed/3801213fb80e7bec8452feb4ec529d3e9a506b5a.jpeg?token=d894eb7dbd20433ef1f32cee1417c72c&s=38925CDEC41259D4C69FBAB90300101A" border=0></td><td><img src="http://pics0.baidu.com/feed/94cad1c8a786c917275f1bcd0a4154c93ac7576c.jpeg?token=7a1e0c10b5815d46ff118cfd3030b98a&s=8811C7101D4A44C85640E4C90300B0B3" border=0></td><td><img src="http://pics0.baidu.com/feed/a50f4bfbfbedab648d670745344a8bc578311ea4.jpeg?token=456c456ae52687b62572daba95933d54&s=A3A19A0954035EEF361C299F0300D0A3" border=0></td></tr></table>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-5.html" target="_blank">尝试一下</a></button>



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
