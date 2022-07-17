---
title: 04-如何运行 Python 代码？
date: 2022-07-17 21:17:24
author: AI悦创
isOriginal: true
category: Python 合集
tag:
    - Python 合集
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
prev: mk_py03.md
next: mk_py05.md
backToTop: true
toc: true
---

![img](./mk_py04.assets/5d5686c0000163c506400359.jpg)

> 人的影响短暂而微弱，书的影响则广泛而深远。——普希金

上节课我带着大家来让 Python 在我们的电脑上安家落户。既然安装成功了，那么使用起来也不是问题。运行 Python 代码有两种方式。一种是直接在 Python 解释器中的输入代码，然后就地执行它（也就是交互模式）。另一种是把 Python 代码保存到文件中，之后去执行这个文件。



## 交互模式执行 Python 代码

先来看下如何在交互模式下执行 Python 代码。首先进入 Python 解释器交互模式，进入方法是：

- 使用 Linux 和 MacOS 的读者在命令行（虚拟终端）中执行命令

```python
python3
```

- 使用 Windows 的读者在命令行（CMD）中执行命令

```python
python
```

之后你会看一些版本和帮助信息：

> ➜ ~ python3 Python 3.7.3 (default, Mar 27 2019, 09:23:15)
> [Clang 10.0.1 (clang-1001.0.46.3)] on darwin
> Type “help”, “copyright”, “credits” or “license” for more information.
> \>>>

这便是 Python 解释器交互模式，上例中左下角的 `>>>` 表示这里是输入代码的地方，此时正在等待你的输入。试着输入一些内容，然后按回车键去执行它：

```python
12345 + 54321
```

> \>>> 12345 + 54321
> 66666

```python
'apple' + 'pen'
```

> \>>> ‘apple’ + ‘pen’
> ‘applepen’

可以看到，按下回车键后解释器会立即执行刚才输入的代码，并直接将执行结果输出出来。

## 执行 Python 文件

再来看下如何执行 Python 文件。所谓 Python 文件，其实就是保存 Python 代码的文件，通常将其文件后缀名约定为 `.py`。

> 扩展：其实用别的后缀名甚至不用后缀名都是可以的，但是既然是约定，那么大家就该遵守。`.py` 后缀能很清晰的表明这是 Python 文件。

我们来创建一个文件，如 `today.py`，然后把以下代码拷贝进去：

```python
import datetime

today = datetime.date.today().strftime('%Y{}%m{}%d{}').format(*'年月日')
print('今天是：' + today)
```

然后通过 Python 命令来执行这个 `today.py` 文件：

- Windows 下执行：

```cmd
python today.py
```

> C:> python today.py
> 今天是：2022年07月17日

- Linux 和 MacOS 下执行：

```python
python3 today.py
```

> ➜ ~ python3 today.py
> 今天是：2022年07月17日

> 注意：上述文件使用的是省略了路径前缀的相对路径形式，执行命令前须先进入到 Python 文件所在目录（即确保工作目录和文件所在目录一致），否则解释器会找不到该文件。也可以直接使用绝对路径的形式，如 `python C:\Users\happy\today.py`，此时无需考虑工作目录。



## 交互模式执行和 Python 文件执行的差别

显而易见，Python 代码的交互模式执行和文件执行在使用形式上是不同的。除此之外，在输出结果的方式上这两种方法也存在一些不同。

比如代码：

```python
12345 + 54321
```

在交互模式下执行时，计算结果会被直接输出出来：

> 

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
