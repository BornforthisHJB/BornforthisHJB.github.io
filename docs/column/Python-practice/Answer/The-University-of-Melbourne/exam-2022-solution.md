---
title: exam-2022-solution「The University of Melbourne」
date: 2022-10-30 19:58:13
author: AI悦创
isOriginal: true
category: 
    - Python 练习答案
    - 墨尔本大学
    - The University of Melbourne
tag:
    - Python 练习答案
    - 墨尔本大学
    - The University of Melbourne
icon: python
sticky: false
star: false
password: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
---

## Question 1

**(a) Output value: 'grin'**

```python
print("grinabc"[:4])
```



## Question 2

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/10/28 22:23
# @Author  : AI悦创
# @FileName: demo.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# def name_similarity(name1, name2, maxn=3):
#     matches = 0
#     sim_list = []
#     for n in range(2, maxn + 1):
#         if len(name1) >= n:
#             for start in range(0, len(name1) - (n - 1)):
#                 ngram = name1[start: start + n]
#                 if ngram in name2:
#                     matches += 1
#             sim_list.append(matches / len(name1) - (n - 1))
#             if sim_list:
#                 return sum(sim_list) / len(sim_list)
#         return 0.0
def name_similarity(name1, name2, maxn=4):
    sim_list = []
    for n in range(2, maxn):
        if len(name1) >= n:
            matches = 0
            for start in range(0, len(name1) - (n - 1)):
                ngram = name1[start:start + n]
                if ngram in name2:
                    matches += 1
            sim_list.append(matches/(len(name1) - (n - 1)))
    if sim_list:
        return sum(sim_list)/len(sim_list)
    return 0.0

if __name__ == '__main__':
    r = name_similarity('toto', 'totoro')
    r1 = name_similarity('tim', 'totoro')
    r2 = name_similarity('totoro', 'toto')
    r3 = name_similarity('', 'totoro')
    print(r)
    print(r1)
    print(r2)
    print(r3)
```

## Question3

```python
SUIT = 1

BLACK = 0
RED = 1

SUIT_COLOURS = {'S': BLACK,
                'H': RED,
                'D': RED,
                'C': BLACK}


def same_colour(cards):
    for i in range(len(cards)):
        if i == 0:
            colour = SUIT_COLOURS[cards[i][SUIT]]
        elif SUIT_COLOURS[cards[i][SUIT]] != colour:
            return False
    return True

def same_colour1(cards):
    i = 0
    while i < len(cards):
        if i == 0:
            colour = SUIT_COLOURS[cards[i][SUIT]]
            i += 1
        elif SUIT_COLOURS[cards[i][SUIT]] != colour:
            return False
    return True
```

## Question 4

```python
from collections import defaultdict


def wiz_study_length(prereq_list: list, final='WIZ90001'):
    prereqs = defaultdict(list)
    for subject in prereq_list:
        prereqs[subject[0]].append(subject[1])

    semesters = 0
    cur_prereqs = [final]

    while cur_prereqs:
        new_prereqs = []
        for subject in cur_prereqs:
            if subject in prereqs:
                new_prereqs += prereqs[subject]
        cur_prereqs = new_prereqs
        semesters += 1
    return semesters


if __name__ == '__main__':
    r = wiz_study_length([('WIZ90001', 'WIZ40027'), ('WIZ90001', 'WIZ20003')])
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