---
title: 02-Java 字符串和数字间的转换
time: 2022-10-08 00:11:33
icon: java
author: AI悦创
isOriginal: true
category: 
    - Java体系课
    - Java FQA
tag:
    - Java体系课
    - Java FQA
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

## 一、字符串转数字

1. 通过基本类型对应的包装类则可以实现把字符串转换成基本类型。Java 为 8 种基本类型都提供了对应的包装类：[boolean](https://so.csdn.net/so/search?q=boolean&spm=1001.2101.3001.7020) 对应Boolean、byte 对应 Byte、short 对应Short、int 对应 Integer、long 对应 Long、char 对应 Character、float 对应 Float、double 对应 Double，8 个包装类都提供了一个 `parseXxx(String str)` 静态方法用于将字符串转换成基本类型。（**注意：如果字符串不是数值型字符串，转换将导致一个运行时错误。**）

```java
String s = "123";

byte b = Byte.parseByte(s);
short t = Short.parseShort(s);
int i = Integer.parseInt(s);
long l = Long.parseLong(s);
Float f = Float.parseFloat(s);
Double d = Double.parseDouble(s);
boolean bo = Boolean.parseBoolean(s);
char c = Character.parseCharacter(s);
```







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

