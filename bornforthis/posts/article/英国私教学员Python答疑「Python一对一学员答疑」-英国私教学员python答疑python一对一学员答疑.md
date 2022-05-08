---
title: 英国私教学员Python答疑「Python一对一学员答疑」
date: 2022-03-16 22:59:15.0
updated: 2022-03-30 23:18:03.045
url: /archives/418.html
categories: - Python一对一
tags: 
---



你好，我是悦创。 一对一学员答疑题目： 实现一个类，命名为 `Circle()` ，x，y，radius 需要被收集。x 为圆的中心的 x 坐标；y 为圆的中心的 y 坐标；radius 则为圆的半径。实现一个 `overlap(other)` 函数，other 是 `Circle()` 的另一个实例。当该圆和 other 重合了或者碰到对方则返回 True，反之返回 False。 涉及公式： ![](https://img-blog.csdnimg.cn/95970e12116d4debaf3daea1e016604b.png)

```python
# 实现一个类，命名为Circle()，
# x，y，radius需要被收集。
# x为圆的中心的x坐标；y为圆的中心的y坐标；
# radius则为圆的半径。
# 实现一个overlap(other)函数，other是Circle()的另一个实例。
# 当该圆和other重合了或者碰到对方则返回True，反之返回False
import math
class Circle():
    def __init__(self, x, y, radius):
        self.x = x
        self.y = y
        self.radius = radius
    def overlap(self, other):
        if self.x == other.x and self.y == other.y:
            return True
        min_distance = self.radius + other.radius
        distance = math.sqrt((self.x - other.x) ** 2 + (self.y - other.y) ** 2)
        if distance > min_distance:
            return False
        else:
            return True

circle_one = Circle(3, 4, 4)
circle_two = Circle(5, 12, 5)
r = circle_two.overlap(circle_one)
print(r)

circle_one = Circle(3, 4, 4)
circle_two = Circle(5, 13, 5)
r = circle_two.overlap(circle_one)
print(r)
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/795b93358d6741f1a58652a9b1bc93b3.png) [https://www.math10.com/en/geometry/geogebra/geogebra.html](https://www.math10.com/en/geometry/geogebra/geogebra.html)

> C++信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田地区有机会线下上门，其他地区线上。微信：Jiabcdefh AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。QQ、微信在线，随时响应！V：Jiabcdefh