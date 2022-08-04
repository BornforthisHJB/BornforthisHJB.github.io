---
title: 09-CSS 基本知识
date: 2022-08-02 23:15:22
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
prev: base_07.md
next: base_09.md
backToTop: true
toc: true
---

## CSS 盒模型的应用

CSS 布局主要就是基于盒模型。每个占据页面空间的块都能有这样的属性：

- **padding: 内边距。** 它围绕着内容的空间。「清除内容周围的区域，内边距是透明的。」
- **border: 边框。** 它紧接着内边距的线。
- **margin: 外边距。** 它围绕元素外部的空间。

![image-20220802231929105](./base_08.assets/image-20220802231929105.png)

---

不同部分的说明：

- **Margin(外边距)** - 清除边框外的区域，外边距是透明的。
- **Border(边框)** - 围绕在内边距和内容外的边框。
- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。
- **Content(内容)** - 盒子的内容，显示文本和图像。

为了正确设置元素在所有浏览器中的宽度和高度，你需要知道的盒模型是如何工作的。

![CSS box-model](./base_08.assets/box-model.gif)

## 更改背景颜色

以下这条 CSS 规则可以帮助你将整个界面的颜色设置为任意的颜色。

```css
html {
    background-color: #00539F;
}
```

案例中的 `#00539F` 是什么呢？效果如下：

![image-20220804120410871](./base_08.assets/image-20220804120410871.png)

它是颜色的十六进制编码。它能够把你想要展示的颜色准确的告诉浏览器。

**怎么获取这些颜色编码呢？**

打开百度，输入关键字“在线取色器”。有许多网站可查询颜色编码。获取颜色编码的过程大同小异，如图所示：

![image-20220803100830625](./base_08.assets/image-20220803100830625.png)

## 文档格式设置

以下代码可以控制 `<body>` 元素的格式样式：

```css
body {
    width: 600px;
	margin: 0 auto;
	background-color: #FF9500;
    border: 5px solid black;
}
```

以上每个属性的含义是：

- `width: 600px;`  —— body 元素的宽度保持 600 像素。
- `margin: 0 auto;`  —— 为 margin 或 padding 等属性设置两个值，第一个值代表元素的上、下方向（本例设置为 0）；第二个值代表左、右两边（本例中的 auto 是特殊值，含义是水平方向左右对称）。
- `background-color: #FF9500; `—— 它指定元素的背景颜色。
- `padding: 0 20px 20px 20px;` —— 内边距设置的四个值。用于给网页内容的四周制造一些空白空间。这些空间为上方、右边、下方，左边的内边距，像素为 20。它们的值按照上、右、下、左的顺序排列。
- `border: 5px solid black;`  —— 直接为 body 设置 5 像素的黑色实线边框。

















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









