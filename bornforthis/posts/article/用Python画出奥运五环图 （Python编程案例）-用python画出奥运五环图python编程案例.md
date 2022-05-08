---
title: 用Python画出奥运五环图 （Python编程案例）
date: 2022-02-17 17:33:05.0
updated: 2022-03-30 23:18:03.267
url: /archives/422.html
categories: - Python Turtle
tags: 
---



你好，我是悦创。

## 1\. 画出奥运五环图，代码如下：

```python
import turtle
turtle.width(10)
turtle.color("blue")
turtle.circle(50)

turtle.color("black")
turtle.penup()
turtle.goto(120, 0)
turtle.pendown()
turtle.circle(50)

turtle.color("red")
turtle.penup()
turtle.goto(240, 0)
turtle.pendown()
turtle.circle(50)

turtle.color("yellow")
turtle.penup()
turtle.goto(60, -50)
turtle.pendown()
turtle.circle(50)

turtle.color("green")
turtle.penup()
turtle.goto(180, -50)
turtle.pendown()
turtle.circle(50)
```

执行结果如下图所示： ![在这里插入图片描述](https://img-blog.csdnimg.cn/43f73c263c1f44309434e2ecd0b3ac48.png) 在线执行网站：[https://turtle.bornforthis.cn/#/](https://turtle.bornforthis.cn/#/)

## 2\. 定义多点坐标_绘出折线_并计算起始点和终点距离

```python
import turtle
import math

# 定义多个点的坐标
x1, y1 = 100, 100
x2, y2 = 100, -100
x3, y3 = -100, -100
x4, y4 = -100, 100

# 绘制折线
turtle.penup()
turtle.goto(x1, y1)
turtle.pendown()

turtle.goto(x2, y2)
turtle.goto(x3, y3)
turtle.goto(x4, y4)

# 计算起始点和终点的距离
distance = math.sqrt((x1-x4)**2 + (y1-y4)**2)
turtle.write(distance)
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/3e220597f69e4c94b09616b939292b8e.png)