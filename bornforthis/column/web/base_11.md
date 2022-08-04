---
title: 12-JavaScript 基础知识
date: 2022-08-04 22:59:50
author: AI悦创
isOriginal: true
category: web 专栏
tag:
    - web 专栏
icon: network
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
prev: base_10.md
next: base_12.md
backToTop: true
toc: true
---

## 条件语句

**条件语句是一种代码结构。**

它用来测试表达式的真假并根据测试结果运行不同的代码。

**if...else 是最常用的条件语句。** 请看示例：

```javascript
let bestchoice = 'bornforthis.cn';
if (bestchoice === 'bornforthi.com') {
    alert('随时随地学编程'); 
} else {
    alert('容我再想想'); 
}
```

以上代码的含义是：

将 `bornforthis.cn` 赋值给 bestchoice（最佳选择）；

对 `if(...)` 中的表达式进行测试，用等于运算符 `==` 来比较 bestchoice 和 `bornforthis.cn` 是否相等；

如果返回为真（true）,则反馈第一个代码块——随时随地学编程；

如果返回为假（else）,则跳过第一个代码块，执行第二个代码块——容我再想想。

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_10/base_10-2.html" target="_blank">尝试一下</a></button>



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









