---
title: 悦创奶茶店开业大吉
date: 2022-06-15 23:03:42
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
prev: false
next: q1.md
backToTop: true
toc: true
---

> 机智如你，这样你就可以更加专注的投入到学习中去，准备好我们就可以扬帆远航啦~

## 前言

你好，我是悦创。先带你们认识一下 Python 这个神奇的工具。

一说起 Python，大家总会联想到近来超火爆的人工智能，没错，Python 就是人工智能的入门基础。

废话少说，悦创现在就带你感受一下使用 Python 实现人工智能。

有了 Python，你不光可以和**人类**对话，还可以和**机器人**对话，可别小瞧了机器人的智商~

![img](./README.assets/eec7c55447ce39942d9a45afe5b78874.png)

我们来试着和可爱的机器人，悦创宝宝说说话吧~

首先，现在你电脑的命令行输入如下命令安装我开发的库：

```python
pip install TuringRobots
```

安装之后，如下代码使用：

```python
from TuringRobots import TuringRobots

times = 1
print('你好，我是聊天机器人-小悦。\n有人说我有10岁人类的智商，你想试试吗？\n我可以回答你3个问题，来吧。')
while True:
    userinput = input('第{}个问题：'.format(times))
    print('小悦：' + TuringRobots(userinput, over_print=False)[1])
    if userinput == '再见' or times >= 3:
        print('小悦：我要走了，祝你学得快乐，再见！')
        break
    times += 1
```

输出示例：

```python
你好，我是聊天机器人-小悦。
有人说我有10岁人类的智商，你想试试吗？
我可以回答你3个问题，来吧。
第1个问题：你是谁？
小悦：在下图灵机器人，请多多指教。
第2个问题：你是谁？
小悦：聪明又善解人意的小悦就是我了
第3个问题：再见
小悦：你是要先溜了吗？
小悦：我要走了，祝你学得快乐，再见！

Process finished with exit code 0
```

刚才和你聊天的是一个10岁人类智商的机器人，是不是还蛮有趣的？

区区几行代码就能做出一个机器人？Python就是这么简单易学！

当然，简单易学并不影响 Python 的强大，在信息时代，在人工智能、数据分析、自动化控制、系统开发等各个领域都有 Python 的身影。

![img](./README.assets/8548532f4a20f82e279613323a59c2d1.png)

这些都是能用 Python 实现的，甚至还不止这些。相信屏幕前的你此刻已经暗暗立下了目标，当然，无论你想选择什么方向，都得先扎扎实实的打好 Python 基础。

那学这个到底赚不赚钱呢？当然！岗位需求量非常大，在这个人才过剩的时代，各大公司还是疯狂的在寻觅懂编程和人工智能的员工，并且给出相当丰厚的工资！

![img](./README.assets/4395f54f4526bb7cc89801ed8cf28170.png)

![img](./README.assets/bdd42555f809654c84ca35f9040a8bde.png)

不光技术人员，在如今自动化办公的趋势下，很多非技术人员以及业界大佬，也都开始了 Python 之旅，比如销售、财务、运营、分析师等。

所以，你不用担心自己学不会，无法就业，或者不适合自己，大胆的迈出第一步吧，相信你在小悦的带领下，一定能掌握这个有趣强大的技能。

接下来我们会讲基础知识，比如【print 函数】、【变量】、【数据类型】、【input 函数】等等，起初的知识会比较简单，大家可以很快学会并且上手练习。

等学到后面，你们就可以用各种模块和库，随心所欲实现你的需求啦~

在正式开始课程之前，这里还有非常好用的学 Python 三大武器，一定要非常认真的阅读。

## 第一大武器：[在线编辑器](https://py.bornforthis.cn/#/)：[https://py.bornforthis.cn/#/](https://py.bornforthis.cn/#/)

![image-20220620162931624](./README.assets/image-20220620162931624.png)

在基础课阶段，我们统一使用线上编程环境，可以节省掉繁琐的安装步骤~等学好了再安装也不晚。

此处划重点---在程序员的神秘世界，上图被称为【编辑器】，左上框叫【代码编辑区】，可以写代码，左下的框叫【终端】，可以显示代码运行之后的东西。记住以后就可以和程序员 battle 啦o(*￣▽￣*)ブ。右边是为了给小盆友设计的渲染 turtle 库。

在代码框写好代码之后，我们点击**【开始】**按钮，如果运行失败，可以留言并自行 debug 一波，当然你也可以选择跳过，继续学习后续内容。

遇到不会的问题，可以点**【求助】**按钮，扫码分享到微信群，助教就可以看到你的代码帮你解答。

让我们试着运行另外一个人工智能相关的代码案例熟悉一下，一起感受图像识别的魅力~

据说，学习 Python 的都是善良可爱的宝宝，小悦怎么知道的呢？下图这个戴粉色帽子的小可爱告诉我的：

![img](./README.assets/c0ff24a1a2081faaff6fb4feeebf5c88.png)

这是学习 Python 的同学们之间广为流传的一个表情包，虽然学习路上荆棘密布，但是小可爱们还是很善良，而且善良到炸 O(∩_∩)O哈哈~

小悦觉得图片中的这段文字不错，想把它们摘抄下来，但是苦于图片中的文字不能直接复制，这该怎么办呢？别担心，Python 来帮忙。

你可以使用 Python 识别上面图片中的文字，点击运行下面的代码就好，除此之外你不需要做任何操作，看看输出的结果~
