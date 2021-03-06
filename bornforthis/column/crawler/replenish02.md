---
title: 02-还没用异步，爬取就速度太快？更智能的延迟插件
date: 2020-08-08 12:02:30
author: AI悦创
isOriginal: true
category: Python 网络爬虫专栏
tag:
    - Crawler
icon: debug
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
prev: replenish01.md
next: replenish03.md
backToTop: true
toc: true
---

## 1. 前言

> 要想“看见”，就得从蒙昧中睁开眼来。这才是最困难的地方，因为蒙昧就是我自身，想石头一样成了心里的坝。

你好，我是悦创。 最近好久没更新公众号了，一直在啃代理池也快啃完一些了，然后发现公众号终于邀请小悦开通付费阅读体验，为此，就先来分享一下延迟插件的实现。

其实，很忐忑。因为，别人付费之后发现不值这个钱亏了，就会流失好不容易攒起来的关注率。所以付费得保证绝对原创与精品。 上一篇，我带你手摸手入门了 App 爬虫，可是问题来了，或许你没有想到，但这个问题确实存在，也就是爬虫速度要是过快该怎么办？心理嘀咕：我还没用异步呢，就速度太快封 IP ，心理不是滋味。代理使用的话也还不至于，那有没有什么好的方法呢？肯定是有的！ **群友也遇到了类似的问题：**

::: details 聊天记录图片

 ![](./replenish02.assets/20200531115153-16524187103587.jpg) 

![](./replenish02.assets/20200531115706-16524187773518.jpg)

:::


> **题外话：** 不要报名很多机构课程水课太多，老师基本上就是水时间的，水也没事，重点老师自己啥也不懂！希望小白不要轻易入坑，要入门资源可以关注公众号：AI悦创，加小编好友。

你们细品，细细品，我不希望你们被割韭菜还不自知，这不是简单的会与不会的问题...... 一般没有实际工作经验的，只会使用 `time.sleep()`  对于小白入门来说，能想到用这个方法是值得表扬的。而当小白问老师的时候，老师回答：`time.sleep()`  ，那这个回答太不负责任也是没有任何经验就来当老师了。

## 2. 你能得到什么？

**本文已经实现：**

1.  代码封装；
2.  直接使用即可；
3.  讲解原理；
4.  面试官问：爬虫速度过快，你如何解决？（看完你就可以回答啦）；
5.  一般插件的功能是很专一的，当个文件只实现一个功能；

**未实现：**

1.  并未实现进一步优化；
2.  因为本人数学能力有限，数学大佬如果有更好的解决策略可以点击阅读原文留下你的方法；

## 3. 实现

### 3.1 原理讲解

爬虫速度过快，被封 IP 这是非常常见的，那这个被封的逻辑，你们是否有具体捋过呢？我来给大家简单的捋一捋，一个网站把你的 IP 封禁（BAN），无非就以下几点：

1.  在一个时间段中请求的次数过多被封禁；
2.  同一个 IP 访问同一个主站的请求间隔过短或者说太过于相同从而被封禁；

所谓，赚钱的方法都写在宪法里面了，那解决的方法都写着问题里面了。 **解决方法也很简单：**

1.  避免对使用同一个 IP 请求也就是换 IP 但是我们本文不是讲这个的；
2.  避免对过快的请求同一个主站；
3.  让每个 get 请求的间隔有所不同；

最简单的方法，也就上面开头所说的：直接使用 **time.sleep()** 不过，聪明人都知道有时候不一定是需要睡眠相同时间的，这样显然是太浪费时间和资源了。

### 3.2 导库

这里我们讲主要使用 Python 当中的 time 模块，但实现的方法不一样，不会是简单的使用 **time.sleep()** 而是会利用这个 **time.sleep()** 来实现更加智能的延迟插件。 需要导入以下库，以下库皆不用安装都是 Python 内置库：

```python
from urllib import parse
from datetime import datetime 
import time,requests
```

*   `from urllib import parse` ：解析 URL
*   `from datetime import datetime` ：获取时间（标注时间）时间加减
*   `import time,requests` ：time 实现睡眠 requests 爬虫库

### 3.3 主体代码实现

#### 1. DelayWait

这里因为我们需要自己 DIY 一个插件，所以需要创建一个类 `DelayWait` ，来使用。也方便之后的调用，不必重复编写。 我们并为这个类进行初始化，初始化如下：

```python
class DelayWait:
    def __init__(self, delay = 3):
        self.delay = delay
        self.urls = dict()
```

**上面代码看不懂？别急，我来解释！** 这个其实从上面就可以看见，我们设置了延迟的时间的变量 `self.delay = delay` ， 创建了一个 `self.urls = dict()` 来存储各种 url。

*   内置函数初始化： \_\_init\_\_
*   一般来说，在我们实行这个类的的时候，就会自动执行这个类的初始化函数（它是第一个执行的）
*   初始化参数（初始化属性，属性：对象的某个静态特征）
*   `delay = 3` , 每次延迟 3 秒；
*   `self.urls = dict()` ，存储各种 URL

#### 2. wait

接下来我们来编写个等待函数 `wait` ，和上面一样，还是先来看看代码然后进行解析：

```python
    def wait(self, url):
        netloc = parse.urlparse(url).netloc
        lastOne = self.urls.get(netloc)
        if lastOne and self.delay>0:
            timeWait = self.delay - (datetime.now()-lastOne).seconds
            if timeWait>0:
                time.sleep(timeWait)
        self.urls[netloc] = datetime.now()
```

我也来一行一行解析，带你读懂它：

1.  `netloc = parse.urlparse(url).netloc`

*   函数：对象的某个动态能力
*   解析我们的 URL，来对比每次访问的主站，是否是同一个主站，同一个就是使用该延迟插件，不是就不用啦！因为，我们封 IP 其实就是，快速重复访问同一个网站,才有可能被封；

2.  `lastOne = self.urls.get(netloc)`

*   我们上一步请求的网址是什么，看有没有这个主站；
*   这里的 `get('', null)` 是字典的一个方法，使用 get 来查询字典中的数据，如果这个数据存在，则返回改键对应的值。
*   不存在则返回：预先设定的内容：null；

3.  `if lastOne and self.delay>0:`

*   如果，我们上一次请求过的话，就执行这个语句

4.  `timeWait = self.delay - (datetime.now()-lastOne).seconds`

*   本次访问和上一次访问的时间差；
*   seconds 转换为秒；
*   解析:
    *   如果两次请求的时间差 `(datetime.now()-lastOne)` 非常小,表明,两次请求的时间间隔,非常小；
    *   所以,以每次请求 delay 所设定的时间为标准.如果得出来的差为 3s (举例)那就不执行延迟；
    *   如果差小于 3s 则执行与 3s 相差的时间的差.

5.  `self.urls[netloc] = datetime.now()`

*   为字典 urls 添加：键对值：主站:对应添加的时间

## 4. 完整代码

上面其实就已经实现了完成了，使用直接调用即可，今天也刚刚好可以开通付费阅读，就试一试。 **有兴趣可以支持一下小编，不付费也不影响实现这个插件，上面已经是完整的代码操作，下面的是合在一起的代码。** 以及简单的使用演示。

```python
# -*- coding: utf-8 -*-
# @Author     ：AI悦创
# @DateTime   ：2019/9/14  15:42 
# @FileName   ：延迟插件解析与使用.PY
# @Function   ：功能
# Development_tool   ：PyCharm
# <-------import data-------------->
from urllib import parse # 解析 URL
from datetime import datetime  # 获取时间（标注时间）时间加减
import time,requests # time 实现睡眠 # requests  爬虫库

# 一般插件的功能是很专一的，当个文件只实现一个功能
class DelayWait:
    # 内置函数初始化： __init__
    # 一般来说，在我们实行这个类的的时候，就会自动执行这个类的初始化函数（它是第一个执行的）
    def __init__(self, delay = 3):
        # 初始化参数（初始化属性，属性：对象的某个静态特征）
        # delay = 3 ,每次延迟 3 秒；
        self.delay = delay # 延迟时间
        self.urls = dict() # 存储各种 URL

    # 函数：对象的某个动态能力
    def wait(self, url):
        # 解析我们的 URL，来对比每次访问的主站，是否是同一个主站，同一个就是使用该延迟插件，不是就不用啦！
        # 因为，我们封 IP 其实就是，快速重复访问同一个网站,才有可能被封
        netloc = parse.urlparse(url).netloc

        # 我们上一步请求的网址是什么，看有没有这个主站。
        # 这里的 get('', null) 是字典的一个方法，使用get来查询字典中的数据，如果这个数据存在，则返回改键对应的值。
        # 不存在则返回：预先设定的内容：null
        lastOne = self.urls.get(netloc)

        # 如果，我们上一次请求过的话，就执行这个语句
        if lastOne and self.delay>0:
            # 本次访问和上一次访问的时间差.
            timeWait = self.delay - (datetime.now()-lastOne).seconds
            # seconds 转换为秒
            # 解析:
            #   如果两次请求的时间差(datetime.now()-lastOne)非常小,表明,两次请求的时间间隔,非常小.
            #   所以,以每次请求 delay 所设定的时间为标准.如果得出来的差为 3s(举例)那就不执行延迟,
            #   如果差小于 3s 则执行与 3s 相差的时间的差.
            if timeWait>0:
                time.sleep(timeWait)

        # 为字典 urls 添加：键对值：主站:对应添加的时间
        self.urls[netloc] = datetime.now()
```

每行代码的含义都已经写在上面了，可以自行修改优化，那如何使用呢？ **使用方法，也很简单：**

```python
urls = ['http://www.baidu.com']*10
d = DelayWait()
for url in urls:
    html = requests.get(url)
    d.wait(url)
    print(html.status_code)
```

可以自行导入到其他的爬虫代码中来实现。或者不会导入也可以直接写在同一个代码文件中，因为本公众号不支持留言，如果你有问题可以点击阅读原文进行留言。还可以加小编好友，拉你入群。

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