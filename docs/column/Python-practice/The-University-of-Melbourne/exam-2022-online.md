---
title: Python exam-2022-online「The University of Melbourne」
date: 2022-10-30 19:45:26
author: AI悦创
isOriginal: true
category: 
    - Python 练习
tag:
    - Python 练习
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

## Question1

Construct a **single** Python expression which evaluates to the following values, and incorporates the specified operations in each case (executed in any order).

> 构造一个 Python 表达式，求值为以下值，并在每种情况下合并指定的操作(以任何顺序执行)。

**(a) Output value: 'grin'**

Required operations:

> 要求操作:

1. string slicing

> 字符串分割

2. string indexing

> 字符串索引

**(b) Output value: True**

Required operations:

1. range() function

2. in

**(c) Output value: 2**

Required operations:

1. (float) division

2. integer division

**(d) Output value: 0**

Required operations:

1. dictionary lookup

> 字典查找

2. .pop() method

3. list indexing

**(e) Output value:  'ace'**

Required operations:

1. items method

2. list indexing

3. tuple indexing











## Question 变成 while loop

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
```

答案：

```python
SUIT = 1

BLACK = 0
RED = 1

SUIT_COLOURS = {'S': BLACK,
                'H': RED,
                'D': RED,
                'C': BLACK}


# def same_colour(cards):
#     for i in range(len(cards)):
#         if i == 0:
#             colour = SUIT_COLOURS[cards[i][SUIT]]
#         elif SUIT_COLOURS[cards[i][SUIT]] != colour:
#             return False
#     return True

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

## Question 排序

Sandy has enrolled in a Bachelor of Magical Arts. In order to graduate, they must complete the subject WIZ90001 Advanced Wizardry. However, this subject has a number of prerequisites, each of which must be completed before they can take WIZ90001. Each of those subjects in turn may have its own prerequisites, and so on.

> 桑迪已经注册了魔法艺术学士学位。为了毕业，他们必须完成 WIZ90001 高级魔法课程。但是，本主题有许多先决条件，在学习WIZ90001之前必须完成每一个先决条件。这些学科中的每一门都可能有自己的先决条件，以此类推。

Given a particular list of prerequisite requirements, the function `wiz_study_length(prereq_list, final='WIZ90001')` is intended to calculate the minimum number of semesters it will take Sandy to graduate. The arguments are:

> 给定一个特定的先决条件要求列表，函数 `wiz_study_length(prereq_list, final='WIZ90001')` 用于计算 Sandy 毕业所需的最小学期数。的参数是:

- `prereq_list` , a list of `(subject, prerequisite)` tuples specifying that prerequisite must be completed before     enrolling in subject. Note that a subject may have more than one     prerequisite.

> Prereq_list，一个(subject，先决条件)元组列表，指定在注册 subject 之前必须完成先决条件。注意，一个主题可能有多个先决条件。

- final, the target subject to     complete, with a default value of 'WIZ90001'.

> final是要完成的目标主题，默认值为'WIZ90001'。

Any subject that appears as a prerequisite in a prereq_list tuple but does not appear as a subject can be assumed to have no prerequisites. Furthermore, we assume that Sandy has capacity to take as many subjects as required each semester, as long as they have completed their prerequisites.

> 在prereq_list元组中作为先决条件出现但不作为主题出现的任何主题都可以假定为没有先决条件。此外，我们假设Sandy有能力每学期选修要求的课程，只要他们完成了他们的先决条件。

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





