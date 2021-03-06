---
title: 04-HTML 概述
date: 2022-07-13 00:01:55
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
prev: base_02.md
next: base_04.md
backToTop: true
toc: true
---

## HTML 是谁？它做什么工作？

HTML 不是一门编程语言，而是一种用来告知浏览器如何组织网页的**标记语言**。

> HTML 称为超文本标记语言，是一种标识性的语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的 Internet 资源连接为一个逻辑整体。HTML 文本是由 HTML 命令组成的描述性文本，HTML 命令可以说明文字，图形、动画、声音、表格、链接等。

HTML **由一系列的元素组成**，这些元素用于组成网页上的模块。如果把网页比喻成房子，网页中使用的元素就像造房子时使用的一块块砖（原材料）。如下面的代码块由 `<head>` 元素，`<title>` 元素共同构成了网页的头部模块。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>
```

**注意：** 以上代码块中的 `<meta charset ="utf-8">` 并不会出现在网页的头部。它是编码格式，它告诉告诉浏览器用什么方式打开代码。

头部的效果：

![image-20220713215158944](./base_03.assets/image-20220713215158944.png)

## 学习 HTML 的重点

学习 HTML 把握 2 个重点：**标签和属性。**

HTML 的标签大约几十个。每个标签有几个属性。在初学阶段，你不需要将它全部记下来。你只需记住最常用的十几个即可。

当你在实践中，遇到生疏的标签或属性时，请查阅 `w3cschool.cn` 的手册：[https://www.w3cschool.cn/htmltags/html-reference.html](https://www.w3cschool.cn/htmltags/html-reference.html)

对照列表中的例子用起来就能解决实际的问题了。

【单选题】以下关于 HTML 描述准确的是？

- [ ] HTML 是超文本标记语言，超文本标记语言是入门级的编程语言。
- [x] HTML 是由一系列元素构成的超文本标记语言。
- [ ] HTML是由一系列元素构成的编程语言。

## HTML 的元素构成及属性

HTML 的元素构成如图：

![HTML概述](./base_03.assets/HTML概述.png)

- **开始标签：** 开始标签包含元素的名称（本例为 P元素），被一对尖括号“`<>`”包围。它表示元素从这里开始 ， 本例则表示段落由此开始。

- **结束标签： ** 与开始标签相似，结束标签多了符号“`/`”。它表示元素在这里结束，在本例中表示段落由此结束。
- **内容：** 元素的内容。本例是文本描述：**猎豹其实是一只萌萌哒萨摩耶**。

**因此：**

  **一个完整元素=开始标签+内容+结束标签。**

元素还可以包含属性。**属性就是元素的额外信息**，这些信息不会出现在网页的内容中。

![HTML概述-02](./base_03.assets/HTML概述-02-7790609.png)

本例中，属性“`class`”额外说明了 `<p>` 元素的识别名字，“`class` ”可以用作识别 `<p>` 元素的样式以及其它信息。

元素属性必须包含：

- **空格：** 在元素和属性之间必须有一个空格。如果一个元素同时具有多个属性，属性之间也用空格隔开。
- **符号“=”：** 属性后面紧跟着一个符号“`=`”。
- **值：** “`=`”后面必须有一个属性值。它由一对引号`""`包围。

关于属性的值，有三个细节需要注意：

- **必须在英文状态下，输入引号。**
- **可使用双引号也可使用单引号。但是，双引号和单引号不得在一个属性值里混用。**

如：下面的语法是错误的。

![image-20220714171356444](./base_03.assets/image-20220714171356444.png)

- **如果在属性值中已使用了双引号，双引号里面的内容还需要引用，则得使用单引号。**

![img](./base_03.assets/1566786065971127.png)

【排序】怎么排列才能正确显示 `<em>` 元素？

```html
<em>我自横刀向天笑，去留肝胆两昆仑。</em>
```

【单选题】代码：`<a href="https://bornforthis.cn">随时随地学编程</a>`， 哪部分是属性的值？

- [ ] `href="https://www.w3cschool.cn"`
- [ ] 随时随地学编程
- [ ] `<a></a>`
- [x] `"https://bornforthis.cn"`

## 元素的嵌套

**把元素放到其他元素中被替换元素的层叠。**

如：在文本“我叫猎豹。我是一只萨摩耶。”中，提示“萨摩耶”。

我们可以将 `<strong>` 元素嵌入在 `<p>` 元素中。

点击“**[尝试一下](https://bornforthis.cn/web_run/web_column/01.html)**”，查看效果。：<button name="button" style="color: black"><a href="https://bornforthis.cn/web_run/web_column/01.html" target="_blank">尝试一下</a></button>

```html
<p>我叫猎豹。我是一只<strong>萨摩耶</strong>。</p>
```

你发现“`萨摩耶`”这个词在开头中被**加粗**了，对吗？

加粗，就是 `<strong>` 元素发挥的效果。

从上面的例子可以知道：

`<p>标签先开始，<strong>标签再开始。`

`</strong>` 标签**先结束**，`</ p>` 标签**再结束**。

按此顺序，才能制造 `<strong>` 元素嵌入在 `<p>` 元素之内的效果。

如果不按规则编写开始和结束标签，浏览器就会猜测你的代码错误，但它很有可能猜错。

点击“尝试一下”，看看下面的例子：

```html
<p>我的名字叫猎豹。我是一只<strong>萨摩耶</p>。</strong>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03.html" target="_blank">尝试一下</a></button>

你发现句号被单独列为一行了，对吗？

这就是层叠顺序错误的结果。

【排序】将 `<em>` 元素嵌套在 `<p>` 元素中强调句子"`沐春风,惹红尘一身`"中的“**沐春风，**”，正确排序的是？

> **HTML 着重元素** (`<em>`) 标记出需要用户着重阅读的内容， `<em>` 元素是可以嵌套的，嵌套层次越深，则其包含的内容被认定为越需要着重阅读。
>
> **请注意：** 通常地，该元素会被浏览器展示为斜体文本， 但是，它不应该仅仅用于应用斜体样式；为此目的，请使用 CSS 样式。使用 `cite` 元素标记作品的标题（书籍，戏剧，歌曲等）；它通常也采用斜体样式，但具有不同的含义。使用 `<strong>` 元素标记比周围文本更重要的文本。

- [ ] 惹红尘一身。
- [ ] 沐春风，
- [ ] `</p>`
- [ ] `</em>`
- [ ] `<em>`
- [ ] `<p>`

```html
<p><em>沐春风,</em>惹红尘一身</p>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-1.html" target="_blank">尝试一下</a></button>

## 块级元素和内联元素

在 HTML 中有两种元素类别：块级元素和内联元素。

- **块级元素** ：其代码如**块状显示**。块级元素通常用于展示页面上层结构化的内容。如：进行，列表，导航菜单，页脚等。中，但可嵌入在其他块级元素中。
- **内联元素：**它常出现在块级元素中并包裹着一小部分文档内容。内联元素在形式上通常**如行状显示。**它通常出现在一堆文字之间。如，超链接元素 `<a>` ，专有元素 `<em>` 元素和 `<strong>` 元素都是内联元素。

如下面这段文字介绍：

第一周杰伦是歌手。第二周杰伦是音乐制作人。第三周杰伦是电影导演。

点击“**尝试一下**”，查看内联元素 `<em>` 的效果。

```html
<em>周杰伦是歌手。</em><em>周杰伦是音乐制作人。</em><em>周杰伦是电影导演。</em>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-2.html" target="_blank">尝试一下</a></button>

内联元素 `<em>` 使关于周杰伦的介绍如**行状**显示。

再点击下面的“**尝试一下**”，查看块级元素 `<p>` 的效果。

```html
<p>周杰伦是歌手。</p><p>周杰伦是音乐制作人。</p><p>周杰伦是电影导演。</p>
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-3.html" target="_blank">尝试一下</a></button>

相同的内容，块级元素如**块状**显示。

#### 之前：内联元素运行效果

![image-20220716092933554](./base_03.assets/image-20220716092933554.png)

#### 之后：块级元素运行效果

![image-20220716093001963](./base_03.assets/image-20220716093001963.png)

## 空元素

一个完整元素=开始标签+内容+结束标签

以上公式并不能适用所有的HTML元素。

一些元素只有一个标签，元素的标签内附有一些额外信息。这样的元素叫做“**空元素**”。

`<img>` 就是一个空元素。它通常被插入一张一张指定的图片。

点击“**尝试一下**”，看看空元素 `<img>` 的运行效果。

```html
<img src="https://bornforthis.cn/gzh.jpg">
```

<button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-4.html" target="_blank">尝试一下</a></button>

你看到这张图片了吗？

![image-20220716094109125](./base_03.assets/image-20220716094109125.png)

它是由 `<img>` 元素中的属性 `src =""` 双引号内的地址，向浏览器指定了一张图片。

空元素 `<img>`，虽然没有内容和结束标签，但它也依然可以运行出效果。





























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









