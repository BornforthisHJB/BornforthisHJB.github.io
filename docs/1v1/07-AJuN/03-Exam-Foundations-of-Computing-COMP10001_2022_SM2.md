---
title: Exam：Foundations of Computing（COMP10001_2022_SM2）
icon: python
time: 2022-11-01 11:52:13
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
editLink: false
backToTop: true
toc: true
---

This assignment is locked until Nov 1 at 15:00.

> 此作业锁定到11月1日15:00。



## Question 2

An ngram is a sequence of symbols (such as characters) of length n. Each string can be represented as a sequence of n-grams. For example, `'cat'` can be represented as `'c'`, `'a'`, `'t'` (1-grams, or unigrams), or as `'c'`,` 'ca'`, `'at'`, `'t'` (2-grams, or bigrams). [Note that the first bigram of the word `'cat'` is `'c'`, i.e., a space and c, and the last bigram of the word `'cat'` is `'t'`, i.e., t and a space.]

> 一个 ngram 是长度为 n 的符号序列(如字符)。每个字符串都可以表示为 n 个 gram 的序列。例如，`'cat'` 可以表示为 `'c'`， `'a'`， `'t'` (1克，或字母组合)，或表示为 `'c'`， `'ca'`， `'at'`， `'t'` (2克，或字母组合)。[请注意，单词 “cat” 的第一个重音是 “c”，即一个空格和 c，单词 “cat” 的最后一个重音是 “t”，即 t 和一个空格。]

The function `most_freq_ngrams(_file, nglen=1)` takes a file name _file and the ngram length nglen, processes the file, and returns the top 5 most common ngrams that have at least one symbol specified in the global variable PHONEMES.

> 函数 `most_freq_ngrams(_file, nglen=1)` 接受文件名_file和ngram长度nglen，处理该文件，并返回在全局变量phoneme中至少有一个符号的前5个最常见的ngram。

The input file contains poetry pieces as well as some empty lines or lines with auxiliary information (AABB, ABAB ... etc.). Here is a sample input file (Q2poems.txt):

> 输入文件包含诗歌片段以及一些空行或带有辅助信息的行(AABB, ABAB…等等)。下面是一个示例输入文件(Q2poems.txt):

**Q2poems.txt**

```txt
ABAB

Bid me to weep, and I will weep
While I have eyes to see
And having none, yet I will keep
A heart to weep for thee

ABCB
All in a hot and copper sky
The bloody Sun, at noon,
Right up above the mast did stand,
No bigger than the Moon.

AABB

New life, a little baby, a little star,
The world awaits you near and far
With guidance and loving care
That will keep you safe and happy there.

ABBA

All is luminous, self-existent light
And yet we see it not
Being in mind games caught
Look again hermit, with spherical sight
```

The function reads the file line by line skipping empty lines as well as those that only contain a single word (assuming words are separated by a whitespace character).

> 该函数通过跳过空行和只包含一个单词的行(假设单词由空格字符分隔)来读取文件行。

For example,

```python
>>> most_freq_ngrams('Q2poems.txt')
[('e', 50), ('a', 32), ('i', 30), ('o', 23), ('u', 8)]

>>> most_freq_ngrams('Q2poems.txt', 2)
[('e ', 17), (' a', 12), ('he', 9), ('ee', 8), ('an', 8)]

>>> most_freq_ngrams('Q2poems.txt', 5)
[(' and ', 5), (' weep', 3), (' will', 3), ('will ', 3), ('e    ', 3)]
```

As presented, the lines of the function are out of order in the window to the right. Put the lines in the correct order and introduce appropriate indentation. Note that as an additional constraint, your code must follow PEP8 and should not produce any PEP8 warnings when run.

> 如图所示，在右边的窗口中，函数的行顺序是乱的。把线条按正确的顺序排列，并引入适当的缩进。注意，作为一个附加约束，您的代码必须遵循PEP8，并且在运行时不应该产生任何PEP8警告。

Note: A Counter is a dict subclass, it is a collection where elements are stored as dictionary keys and their counts are stored as dictionary values. most_common(n) returns a list of the n most common elements and their counts from the most common to the least.

> 注意: Counter 是一个 dict 子类，它是一个集合，其中元素被存储为字典键，它们的计数被存储为字典值。Most_common(n)返回n个最常见元素的列表，以及它们从最常见到最不常见的计数。

```python
PHONEMES = 'iauoe'
def most_freq_ngrams(_file, nglen=1):
from collections import Counter
with open(_file, 'r') as reader:
line = ' ' * (nglen - 1) + line.strip() + ' ' * (nglen - 1)
ngrams = Counter()
if len(set(line[i:i + nglen]) & set(PHONEMES)) > 0:
ngrams[line[i:i + nglen]] +=1
for i in range(0, len(line) - nglen + 1):
if len(line) > 0 and ' ' in line:
for line in reader:
return ngrams.most_common(5)
```

![image-20221101121000208](./03-Exam-Foundations-of-Computing-COMP10001_2022_SM2.assets/image-20221101121000208.png)

## 答案

```python
from collections import Counter


def most_freq_ngrams(_file, nglen=1):
    PHONEMES = 'iauoe'
    ngrams = Counter()
    with open(_file, 'r') as reader:
        for line in reader:
            if len(line) > 0 and ' ' in line:
                line = ' ' * (nglen - 1) + line.strip() + ' ' * (nglen - 1)
                for i in range(0, len(line) - nglen + 1):
                    if len(set(line[i:i + nglen]) & set(PHONEMES)) > 0:
                        ngrams[line[i:i + nglen]] += 1

        return ngrams.most_common(5)


if __name__ == '__main__':
    r = most_freq_ngrams('Q2poems.txt')
    print(r)
    r = most_freq_ngrams('Q2poems.txt', 2)
    print(r)
    r = most_freq_ngrams('Q2poems.txt', 5)
    print(r)
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
