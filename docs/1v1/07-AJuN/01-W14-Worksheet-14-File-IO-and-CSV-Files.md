---
title: W14 - Worksheet 14： File IO and CSV Files
icon: python
time: 2022-10-04 19:42:05
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - Python 1v1
    - 澳洲大学一对一
    - 墨尔本大学
tag:
    - 1v1
    - Python 1v1
    - 澳洲大学一对一
    - 墨尔本大学
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

## Forgetful Karaoke

> 健忘的卡拉ok

**Life hack:**  if you're really bad at karaoke and can't remember the words, you can just repeatedly sing one word. If it's the most common word in the song, you'll be right more often than you might think (and may get away with it!).

> 生活小贴士:如果你真的不擅长卡拉 ok，不记得歌词，你可以重复唱一个词。如果它是歌曲中最常见的单词，那么你猜对的次数比你想象的要多(而且可能会侥幸逃脱!)

Write a function `approximate_song(filename)` that reads the lyrics of the song in the file of name filename, and returns the most common word in the song. In the event of a tie, your function should return the word that comes first alphabetically. Assume that words are whitespace-delimited, and use .split() with no stripping of punctuation or folding of case to extract the words from the text.

> 编写一个函数 `approximate_song(filename)`，它读取文件名为 filename 的文件中歌曲的歌词，并返回歌曲中最常见的单词。在平局的情况下，函数应该返回字母顺序排在前面的单词。假设单词是用空格分隔的，并使用 `.split()` 从文本中提取单词，不删除标点符号或折叠大小写。

We have provided lyrics for three songs for you to test your function: somebody.txt, barbrastrelsand.txt, and fakesong.txt. Note these are not the only files we will use to test your code. You can see the contents of these files by clicking on the tabs at the top-right of the page.

> 我们提供了三首歌曲的歌词供您测试您的功能: `some.txt`、`barbrastrelsand.txt` 和 `faksong .txt` 。注意，这些并不是我们用来测试代码的唯一文件。您可以通过单击页面右上角的选项卡查看这些文件的内容。

Outputs should be as below:

> 产出应如下:

```python
>>> approximate_song('somebody.txt1)
'that'
>>> approximate_song("fakesong.txt")
"dum1"
>>> approx-imate_song("arbrastre-isand.txt")
"whooo-oo"
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
