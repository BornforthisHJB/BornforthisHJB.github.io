---
title: 02-悦创带你现场 coding 小游戏【主角打怪-文字游戏】
date: 2022-05-09 09:07:00
author: AI悦创
isOriginal: true
category: Python 私教练习题【基础】
tag:
    - Python 基础练习题
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
prev: README.md
next: 02.md
backToTop: true
toc: true
---

1. 游戏名称：主角打怪-文字游戏
2. 一个玩家【Player】、一个敌人【Enemy】
3. 敌人和玩家互相攻击
4. 玩家可以选择攻击也可以选择防守，敌人也一定会攻击，防守受到的攻击为：十分之一
5. 敌人的攻击数值随机【random】

```python
# -*- coding: utf-8 -*-
# @Author: clela
# @Date:   2020-03-31 14:13:35
# @Last Modified by:   clela
# @Last Modified time: 2020-04-01 17:51:50
import random
# 1
class Creature():
    def attack(self):
        # 我希望得到一个随机的攻击数值
        attack_value = random.randint(0, 50)
        return attack_value
```

上面我们类创建好了之后，我接下来就需要实例化了：

```python
player = Creature()
enemy = Creature()
```

对于游戏的设定我们一般要判断用户和敌人的状态，也就是活着还是死了(玩家或者敌人)，也就是不断地判断，那这个时候需要什么呢？很明显是需要一个 `while` 循环在这里的。我们定义一个 `not_dead()` 函数来判断：

```python
while player.not_dead() and enemy.not_dead():
    pass
```

所以这就需要给玩家和敌人设定一个初始的值(初始的生命值)也就是需要在类的实例化的时候传入设定的生命值，比如：玩家生命值：`100` ，敌人：`80`，既然我们要添加初始的值，那接下来就需要编写类的初始化。

```python
player = Creature(100)
enemy = Creature(80)
```

类的初始化，我们接下来使用 `hp`  来存储用户初始化的血量。(使用 `self.hp` 来存储用户和敌人的血量)

```python
class Creature():
    def __init__(self, hp):
        self.hp = hp
```

这个时候，我们游戏就有了生命值了，接下来就是要判断玩家和敌人的游戏状态：

```python
# 写法一：
def not_dead(self):
    if self.hp <= 0:
        return False
    else:
        return True
# 写法二
def not_dead(self):
    if self.hp <= 0:
        return False
    return True
```

那接下来就继续编写，`not_dead()` 返回的值是 `True`，那么游戏继续继续进行。

又因为我们的游戏是用户的输入来获取操作，所以需要在 while 循环中添加用户输入：

###### 这里我就写的简单点，就不判断用户输入的是否符合规则，我们这里就先默认用户输入是对的，课后自行添加！

```python
while player.not_dead() and enemy.not_dead():
    user_input = input("Attack or Defence(A/D):")
 
    if user_input == "A":
        player_attack_value = player.attack()
        enemy_attack_value = enemy.attack()
```

那现在我们获取到了玩家的攻击值和敌人的攻击值，我们就需要来减少生命值。

所以，接下来我们编写一个 `being_attack()` 生命值减少的规则：

```python
enemy.being_attack(player_attack_value)
player.being_attack(enemy_attack_value)
```

这个时候我们就需要添加一个受到攻击的函数：

```python
def being_attack(self, attack_value):
    self.hp = self.hp - attack_value
```

接下来，我们要编写的是，当用户输入防守的时候操作，当玩家选择防守的时候，那就只剩下敌人的攻击值，受到的攻击值减少十分之一：

```python
elif user_input == "D":
    enemy_attack_value = enemy.attack()*0.1
    player.being_attack(enemy_attack_value)
```

那么有没有觉得少了点什么呢？也就是游戏状态，而这个游戏状态应该写在什么位置呢？

那就是玩家的选择之前，实时的看见玩家和敌人的生命值：

```python
player.show_status()
enemy.show_status()
```

编写所需要的函数：

```python
def show_status(self):
    print(self.hp)
```

现在我们需要知道那个是用户哪个个敌人，所以我们就需要在在初始化的地方添加自定义的用户名称：

```python
player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")
```

那我们就需要编写类的初始化的部分：

```python
def __init__(self, hp, name):
    self.hp = hp
    self.name = name
```

接下来就需要写一个，显示名称和血量了，所以我们需要修改函数 `show_status()` ：

```python
def show_status(self):
    print("{}' hp is {}.".format(self.name, self.hp))
```

现在我们主程序就编写结束了。我们还要判断谁输谁赢：

```python
if player.not_dead():
    print("You Win!")
else:
    print("You Lose")
```

程序源代码可关注公众号：**AI悦创**，后台回复：文字游戏即可获取！

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)













