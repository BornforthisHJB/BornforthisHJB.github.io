---
title: Assignment 2-HTML
icon: network
time: 2022-09-22 21:00:00
author: AI悦创
isOriginal: true
category: 
    - web 1v1
    - 1v1
    - 纽约大学一对一
tag:
    - web 1v1
    - 1v1
    - 纽约大学一对一
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

## Instructions

In this assignment, you will create a three-page website about yourself. The focus at this stage of the development process is on describing web page content with HTML.

> 在这项作业中，你将创建一个三页的关于你自己的网站。开发过程的这个阶段的重点是用 HTML 描述网页内容。

## Project Setup

Create a new directory (folder) on your computer called “Assignment2”. Place HTML and image files associated with your new website inside of this directory. The home page of your new website should be named “index.html”. Other pages can be named as you like, but should reflect the content of the page. Remember that all file and directory names should be limited to letters, numbers, and dashes and be lowercase, with no spaces.

> 在您的计算机上创建一个名为“Assignment2”的新目录(文件夹)。将与您的新网站相关的 HTML 和图像文件放在这个目录中。新网站的首页应该命名为“index.html”。其他页面可以根据您的喜好命名，但应该反映页面的内容。请记住，所有文件和目录名都应该限制为字母、数字和破折号，并且要小写，不能有空格。

When your website is finished, you will upload the “Assignment2” directory, along with its contents, to your i6 account. Your new website will then be available at: i6.cims.nyu.edu/~netid/Assignment2/

当你的网站完成后，你将上传“Assignment2”目录，以及它的内容，到你的i6帐户。您的新网站将可以在以下网址访问:i6.cims.nyu.edu/~netid/Assignment2/

## Your Website

Three HTML web pages—about you—form the heart of the current assignment. Any combination of your background, interests, or experiences will do as long as it is autobiographical. You are to write these pages using a plain text editor such as [Brackets](http://brackets.io/), [Visual Studio Code](https://code.visualstudio.com/), or [Sublime Text](https://www.sublimetext.com/). The focus of this assignment is on describing web page content with HTML; refrain from styling the pages until the next assignment, CSS.

> 三个关于你的 HTML 网页构成了当前作业的核心。只要是自传式的，任何你的背景、兴趣或经历的结合都可以。您将使用纯文本编辑器编写这些页面，如[括号](http://brackets.io/)， [Visual Studio Code](https://code.visualstudio.com/)，或[Sublime text](https://www.sublimetext.com/)。这个作业的重点是用 HTML 描述网页内容;在下一个任务——CSS 之前，不要对页面进行样式化。

Here is a list of required elements you should include in these pages.

> 下面是这些页面中应该包含的必要元素的列表。

- There should be semantic text elements on each page, including but not limited to paragraph () and heading (, , etc.) text.

> 每个页面上都应该有语义文本元素，包括但不限于段落()和标题(，等)文本。

- The pages should link to each other with “relative” URLs.

> 页面应该通过“相对”url相互链接。

- Each page should also include at least one “absolute” URL linking to an external website.

> 每个页面还应该包括至少一个“绝对”链接到外部网站的URL。

- You should include at least one image (JPG, PNG, GIF, or SVG) on each page. (We’ve not covered image editing yet but feel free to use images from your camera or smartphone as well as images downloaded from the web.)

> 每个页面上至少应该包含一张图片(JPG、PNG、GIF或SVG)。(我们还没有讲到图像编辑，但你可以随意使用你的相机或智能手机上的图像，也可以使用从网上下载的图像。)

- You should include an HTML list somewhere on one of your pages; this can be an ordered, unordered, or description list.

> 你应该在你的某个页面上包含一个HTML列表;这可以是有序、无序或描述列表。

- There should be semantic section elements on each page, including but not limited to ``, ``, and.

> 每个页面上都应该有语义节元素，包括但不限于' '、' '和。

Pay close attention to your HTML tags and be sure to test your pages locally in an up-to-date web browser as you code them. You can also check your HTML code using the [W3C Markup Validation Service](https://validator.w3.org/).

> 密切关注你的HTML标记，并确保在你编写代码时在最新的web浏览器中进行本地测试。您也可以使用[W3C标记验证服务](https://validator.w3.org/)检查您的 HTML 代码。



## Publishing Your Site

Upload your “me” directory, including the HTML and the image files, to the i6 Unix server with an SFTP client such as [Cyberduck](https://cyberduck.io/), [Fetch](https://www.nyu.edu/life/information-technology/getting-started/software.html), [WinSCP](http://winscp.net/), or [Transmit](https://panic.com/transmit/). Your files should go in the same “public_html” directory that your assignments page is in, but within the subdirectory called “Assignment2”. Test your pages again in the browser once they are live on the web server to make sure they are accessible. Your new website should be available at: i6.cims.nyu.edu/~netid/Assignment2/

> 通过SFTP客户端(如[Cyberduck](https://cyberduck.io/)、[Fetch](https://www.nyu.edu/life/information-technology/getting-started/software.html)、[WinSCP](http://winscp.net/)或[Transmit](https://panic.com/transmit/))将“me”目录(包括HTML和图像文件)上传到i6 Unix服务器。你的文件应该和你的作业页面放在同一个“public_html”目录中，但是放在名为“Assignment2”的子目录中。一旦你的页面在web服务器上上线，就在浏览器中再次测试它们，以确保它们是可访问的。您的新网站应该是:i6.cims.nyu.edu/~netid/Assignment2/

Finally, create a link from the “HTML” line of your assignments directory to the home page of your new website.

> 最后，从作业目录的“HTML”行创建一个链接到新网站的主页。

### 1. 修改第一次作业的 index.html

```html
<!DOCTYPE html>
<html>
<meta charset="utf-8">
  <head>
      <title>Your name goes here</title>
  </head>
  <body>
    <p>Your name and any other text you would like goes here.</p>
  <p>Student name ZU YAN QU</p>
  <hr>
  <h1>This my HomeWork Web link.</h1>
  <ol>
    <li><a href="https://i6.cims.nyu.edu/~zq2076/Assignment2/">曲祖延：Assignment2/</a></li>
  </ol>
  </body>
</html>
```



## Submitting Your Assignment

Submit the following via [Brightspace](https://newclasses.nyu.edu/). 

> 通过[Brightspace](https://newclasses.nyu.edu/)提交以下内容。

- The URL to your pages in the general form of i6.cims.nyu.edu/~netid/

> 您的页面的URL一般形式为i6.cims.nyu.edu/~netid/

- A compressed archive containing all the files of your new website

> 一个压缩档案，包含你的新网站的所有文件

Please note that you are required to submit files along with URLs in order to receive credit for your work.

> 请注意，您需要提交文件和url，以便为您的工作获得学分。



## Grading

This assignment is worth 10 points.

- A new website of at least three pages about the student. (3 points)
- Website should be in its own subdirectory called “Assignment2” and the home page should be an “index.html” file. (1 point)
- Each page should include semantic text elements, including both paragraph and heading text. (1 point)
- Pages should link to each other with relative URLs; each page should also include an absolute URL linking to an external website; and the assignments directory should link to the home page of the “Assignment2” website. (2 points)
- Each page should include at least one image in JPG, PNG, GIF, or SVG format. (1 point)
- At least one of the new pages should include an ordered, unordered, or description list (1 point)
- There should be semantic section elements on each page, including , , and .(1 point)

*Points may be deducted for improperly formed HTML elements.*

## Start Date

- Sep 22, 2022 7:02 AM

## Due Date

- Sep 29, 2022 8:00 AM

## Submit Assignment

- Files to submit
- **(0) file(s) to submit  After uploading, you must click Submit to complete the submission.**



## 代码 index.html

### head

```html
<head>
    <meta charset="UTF-8">
    <title>This is my Assignment 2!</title>
    <meta name="description" content="This is a website about about delicious snacks that you can eat really late at night.">
    <meta name="keywords" content="snacks,pizza,pasta,cereal,web design,nyu,so amazing">
    <meta name="author" content="AndersonHJB Cleland">
    <!--
        标签定义及使用说明
        元数据（Metadata）是数据的数据信息。
        <meta> 标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析。
        META元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者及其他元数据。
        元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用。
        -->
</head>
```

### body

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>This is my Assignment 2!</title>
    <meta name="description" content="This is a website about about delicious snacks that you can eat really late at night.">
    <meta name="keywords" content="snacks,pizza,pasta,cereal,web design,nyu,so amazing">
    <meta name="author" content="AndersonHJB Cleland">
    <!--
        标签定义及使用说明
        元数据（Metadata）是数据的数据信息。
        <meta> 标签提供了 HTML 文档的元数据。元数据不会显示在客户端，但是会被浏览器解析。
        META元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者及其他元数据。
        元数据可以被使用浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务调用。
        -->
</head>
<body>
    <h1>Welcome to My Love!</h1>
    <header>
        <!--
            HTML <a> 标签
            <a> 标签定义超链接，用于从一个页面链接到另一个页面
            <a> 元素最重要的属性是 href 属性，它指的我们点击后访问的链接
            未被访问的链接带有下划线而且是蓝色的
            已被访问的链接带有下划线而且是紫色的
            活动链接带有下划线而且是红色的
        -->
<!--        <a href="index.html">访问主页</a>-->
        <a href="index.html"><img src="static/img/logo.png" height="350" width="350" alt="主页 logo"></a>
        <nav>
            <!--
                <nav> 标签定义导航链接部分
                并不是所有的 HTML 文档都要使用到 <nav> 元素,只作为导航链接的区域
            -->
            <ol>
                <li><a href="pizza.html">Pizza</a></li>
                <li><a href="pasta.html">Pasta</a></li>
                <li><a href="cereal.html">Cereal</a></li>
            </ol>
<!--            <ul>-->
<!--                <li><a href="pizza.html">Pizza</a></li>-->
<!--                <li><a href="pasta.html">Pasta</a></li>-->
<!--                <li><a href="cereal.html">Cereal</a></li>-->
<!--            </ul>-->
<!--            <ul>-->
<!--                <a href="pizza.html">Pizza</a> |-->
<!--                <a href="pasta.html">Pasta</a> |-->
<!--                <a href="cereal.html">Cereal</a> |-->
<!--            </ul>-->

        </nav>
        <h1>喝奶奶～吃饭饭～睡觉觉～❤️</h1>
    </header>
    <hr>
    <section>
        <article>
            <h2>要抱抱❤️</h2>
            <img src="static/img/hug.jpeg" alt="要抱抱❤️">
        </article>
        <hr>
        <article>
            <h2>要亲亲❤️</h2>
            <img src="static/img/kiss.jpeg" alt="要亲亲❤️">
        </article>
        <hr>
        <article>
            <h2>扑倒你❤️</h2>
            <img src="static/img/snap-back.jpeg" alt="扑倒你❤️">
        </article>
    </section>
    <footer>
        <hr>
        <p>Thanks ©<a href="https://bornforthis.cn" target="_blank">Thanks AndersonHJB</a></p>
        <!--
        target:
            _blank: 在新窗口中打开被链接的文档
            _self: 默认，在相同的浏览器框中打开链接的网站
        -->
        <p><a href="./index.html" target="_self">Go Back</a> to my website home.</p>
    </footer>
</body>
</html>
```

## 其他页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>我的披萨🍕</title>
    <meta name="description" content="This is a xxxx">
    <meta name="keywords" content="xxxxxxx">
    <meta name="author" content="AndersonHJB">
<!--    <link rel="shortcut icon" href="https://store.steampowered.com/favicon.ico" type="image/x-icon">-->
    <link rel="shortcut icon" href="static/img/hug.jpeg" type="image/x-icon">
</head>
<body>
    <header>
        <a href="index.html"><img src="static/img/logo.png" height="350" width="350" alt="主页 logo"></a>
        <nav>
            <ol>
                <li><a href="pizza.html">Pizza</a></li>
                <li><a href="pasta.html">Pasta</a></li>
                <li><a href="cereal.html">Cereal</a></li>
            </ol>
        </nav>
        <h1>xxxxxxxxx</h1>
    </header>

    <section>
        <h2>xxxxx</h2>
        <img src="static/img/cereal.jpg" alt="lxlsslslsl">
        <p>xxxx<br>x</p>
        <h3>xxxxxxxx</h3>
        <ul>
            <li>dddwdwdwdwd</li>
            <li>dddwdwdwdwd</li>
            <li>dddwdwdwdwd</li>
            <li>dddwdwdwdwd</li>
        </ul>
    </section>
    <footer>
        <hr>
        <p>Thanks ©<a href="https://bornforthis.cn" target="_blank">Thanks AndersonHJB</a></p>
        <!--
        target:
            _blank: 在新窗口中打开被链接的文档
            _self: 默认，在相同的浏览器框中打开链接的网站
        -->
        <p><a href="./index.html" target="_self">Go Back</a> to my website home.</p>
    </footer>
</body>
</html>
```

## 代码下载

<button name="button" style="color: black"><a href="/曲祖延/Assignment2-HTML/KAI-HTML.zip" target="_blank">答案</a></button>

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