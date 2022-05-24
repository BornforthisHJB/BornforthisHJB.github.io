---
title: 02-Python 保留指定位数的小数
date: 2022-05-24 23:19:00
author: AI悦创
isOriginal: true
category: Python 补充知识
tag:
    - Python 补充知识
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
prev: requirements.md
next: false
backToTop: true
toc: true
---

你好，我是悦创。

学过编程我们都知道，无论什么语言，其实都是相通的，，当我们学会了并掌握好了一种语言后，我们再去了解另外一种语言，其实就很容易了。 

## 1. ''%.2f' %f 方法(推荐)

```python
In [1]: f = 1.23456

In [2]: '%.4f' % f
Out[2]: '1.2346'

In [3]: '%.3f' % f
Out[3]: '1.235'

In [4]: '%.2f' % f
Out[4]: '1.23'

In [5]: # 等价于下面的代码

In [6]: print('%.4f' % f)
1.2346

In [7]: print('%.3f' % f)
1.235

In [8]: print('%.2f' % f)
1.23
```

::: info 提示

这个方法会进行四舍五入。

:::

## 2. format 函数(推荐)

```python
In [10]: format(1.23456, '.2f')
Out[10]: '1.23'

In [11]: format(1.23456, '.3f')
Out[11]: '1.235'

In [12]: format(1.23456, '.4f')
Out[12]: '1.2346'

In [13]: # 等价于

In [14]: print(format(1.23456, '.2f'))
1.23

In [15]: print(format(1.23456, '.3f'))
1.235

In [16]: print(format(1.23456, '.4f'))
1.2346
```

::: info 提示

这个方法会进行四舍五入。

:::

## 3. round() 函数

其实这个方法不推荐大家使用，查询资料发现里面的坑其实很多，python2 和 python3 里面的坑还不太一样，在此简单描述一下 python3对应的坑的情况。

```python
a = 1.23456
b = 2.355
c = 3.5
d = 2.5
print(round(a, 3))
print(round(b, 2))
print(round(c))
print(round(d))
```

输出结果：

````python
1.235   # 1.23456 最终向前进位了
2.35    # 2.355 居然没进位
4       # 最终 3.5 居然变为 4 了
2       # 最终 2.5 取值变为 2
````

（1）通过上面的函数，看着是不是很晕，感觉 `round(x, n)` 函数是否进位也没看出是啥规律；
（2）`round(x, n)` 函数中，是否进位或四舍五入，取决于 n 位以及 n+1 位小数的值；
（3）只有当 n+1 位数字是 5 的时候，容易混淆，如果 n 为偶数，则 n+1 位数是5，则进位，例如 `round(1.23456, 3)` 最终变为 1.235
（4）如果 n 为奇数，则 n+1 位是数 5，那不进位，例如 `round(2.355, 2)`，最终为 2.35
（5）如果 n 为 0，即没有填写 n 的时候，最终结果与上面相反，即整数部分为偶数的时候，小数位 5 不进位，例如： `round(2.5)` 变为2。
（6）整数部分为奇数的时候，小数位 5 进位。（ `round(3.5)` 变为 4）

## 4. 不进行四舍五入，直接进行截断

（1）可以放大指定的倍数，然后取整，然后再除以指定的倍数。

```python
#保留三位小数截断 python3
print(int(1.23456 * 1000) / 1000 )
```

(2) 使用字符串截取，截取小数点后指定的位数

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



