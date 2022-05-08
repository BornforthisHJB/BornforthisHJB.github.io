---
title: Python 做一个属于自己的web网站「下」
date: 2021-03-05 20:32:18.0
updated: 2022-03-30 23:25:04.789
url: /archives/577.html
categories: - Python 自动化办公实战课「推文系列」
tags: 
---



## 目录

1、准备模型 2、点击交互操作 3、前后分离介绍

## 1、准备模型

上节课是页面的静态展示到浏览器，比较简单。本文学习下数据库后台以及数据展示到网页上。 首先第一个，准备一个 Model 模型。打开你项目中，blog 目录下的 models.py 文件，如下代码：

```python
from django.db import models


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=64, verbose_name="标题")
    abstract = models.CharField(max_length=128, verbose_name="摘要")
    content = models.TextField(verbose_name="内容")

    def __str__(self):
        return "{}".format(self.title)
```

第一行是 models.py 中默认有的，下面是定义了一个 Article 的类，详细介绍下：

*   class 是定义类，类名是 Article，括号内是继承的对象，models.Model，必须有
*   title、abstract 分别是类的两个字段，都是 CharField 字符串类型，声明了最大长度，以及 verbose\_name 别名
*   content 是 TextField 文本类型，并申明了别名，内容
*   def 定义一个**\_\_str\_\_**函数，返回的内容就是当前对象的 title
*   self 是指对象，这个函数是给对象用的，不是给类使用的

定义完成了，这个 Article 就是一个模型，对应数据库中的一张表格。 有了 Model 之后，需要通过两行命令，将模型映射成数据库的表格，命令行分别是：

*   python manage.py makemigrations 读取项目中的所有 Model 模型，映射成中间文件，放在 blog 目录下的 migrations 目录中【可以打开看看，但是千万别改】

![image.png](https://img-blog.csdnimg.cn/img_convert/6c27ae243bd296a55a8ba534d7d464a1.png)

*   python manage.py migrate 读取项目中，所有 migrations 目录下的 py 文件，操作数据库，生成对应的表格。

![image.png](https://img-blog.csdnimg.cn/img_convert/b6f3e2257b06f6f5a845ac9dc2db7ce9.png) 没有报错就是正常，那数据库文件就有对应的表格了。

### 数据库和管理员

**说了半天，数据库在哪？** **我们好像都没有配置？** django 默认的数据库，是 sqlite3，所以是左侧的 db.sqlite3 这个文件。 前面提了句，django 自带后台管理，就是 urls.py 中的 admin 路径，启动 django 后访问 admin 就可以看到，并且通过后台可以管理数据库，但是需要账号密码。链接： [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) ![image.png](https://img-blog.csdnimg.cn/img_convert/58ee64a77302ca388fa0a836908eb024.png) 那我们就需要创建账号，现在来创建一个超级管理员账号，创建账号的命令行是：python manage.py createsuperuser，然后输入账号，邮箱，密码，重复密码就可以了，如下截图： ![image.png](https://img-blog.csdnimg.cn/img_convert/13be138eeca80248d3cd0df9beeaaa43.png) 提示：

*   输入账号，可以看到，然后回车
*   邮箱可以不输入，直接回车
*   输入密码，不会展示，你输入完直接回车即可
*   再次输入密码，将密码再输入一次，回车即可
*   源码文件夹中，默认的账号密码自行创建一个账号即可。

账号密码搞定了，现在可以登录到 admin 后台查看和管理数据了。 ![image.png](https://img-blog.csdnimg.cn/img_convert/86ee32060b20a022799dee6cea4ab7c1.png)

### 配置后台监管

但是这个时候，你应该还看不到 Article 数据，不是没有数据的缘故，是因为创建了 Article、生成了表格，还没有把 Article 交给 admin 监管。 接下来的操作就是把 Article 交给 admin 后台管理。打开 blog 目录下的 admin.py 文件，添加如下代码： ![image.png](https://img-blog.csdnimg.cn/img_convert/f6abbeba228a12367039a0a3e966a1a6.png) 在 admin.py 中，先导入 Article 类，然后使用 admin.site.register(Article) 进行注册，只有注册后的类，admin 后台才可以监控并管理。 ![image.png](https://img-blog.csdnimg.cn/img_convert/5e382818033ee1af2f2a89962ff08372.png) ![image.png](https://img-blog.csdnimg.cn/img_convert/6b260572dca4968f55c9a0a9a11e3a6c.png)

### 添加数据

启动 django 服务，进到后台，就可以看到 Article ，并且进入之后，还可以查看有多少文章，新增文章、修改文章等操作。 请自行添加三篇文章，内容所以，可长可短，有就行。 ![image.png](https://img-blog.csdnimg.cn/img_convert/034c9d8487eaf643b3f0fedcd69944e4.png) 数据这块已经完成了，现在来学习下，从数据库查询全部数据，并渲染到 index.html 文件中。

### View 函数查询数据

这里要打开的文件，是 views.py 和 index.html。views.py 中要做的操作，是查询全部文章，并将文章对象，放到 render 函数中，如下：

```python
from django.shortcuts import render
from .models import Article


# Create your views here.
def index(request):
    articles = Article.objects.all()
    return render(request, 'index.html', {"articles": articles})
```

![image.png](https://img-blog.csdnimg.cn/img_convert/2d0aae8a580fadc74ca42bddab813dec.png) Article.objects.all() 这行代码，是从数据库中，将 Article 模型对应表格中的数据，做个全部的查询，取出全部内容，保存到 articles 变量中。 render() 函数中的第三个参数是字典，这里可以将函数中的变量，传到模板中，然后使用模板语法渲染出来。 接下来是模板中的修改，如下图： ![image.png](https://img-blog.csdnimg.cn/img_convert/37e51729a5d10424f12f20e56b59b4a5.png)

```markup
<div class="col-md">
            {% for article in articles %}
            <div class="panel panel-default">
                <div class="panel-heading">
                    {{article.title}}
                    <a class="btn btn-info btn-xs pull-right" href="article.html">查看</a>
                </div>
                <div class="panel-body">
                    {{article.abstract}}
                </div>
            </div>
            {% endfor %}
```

框中的部分，之前是默认的 4 个 panel 面板，现在改成了 {% %} 和 {{ }} 的组合。

### 模板语法介绍

大括号百分号和双大括号的组合，就是 django 的模板语法，前者是语句，后者是渲染值。 在 html 中，articles 是查询的集合，首先用 for 循环取出每个 article 文章对象，然后在标题和摘要的位置，将 article.title 和 article.abstract 两个属性读取出来放在位置上即可。 for 循环需要有 endfor 结束标签，这样就形成了一个闭环。有一个数据，for 和 endfor 之间的 html 代码，渲染一次；有两个数据，for 和endfor 之间的 html 代码，渲染两次；以此类推，数据越多，渲染的 html 也就越多。

### 效果展示

最后展示下最终效果图： ![image.png](https://img-blog.csdnimg.cn/img_convert/ea313375b8ad0b3e68b0c712410aea34.png)

### 模板日志

最后回到 python manage.py runserver 界面上，每次刷新页面，都会有新的请求和响应产生，在这个界面上，就会记录并展示出来，如下图： ![image.png](https://img-blog.csdnimg.cn/img_convert/802be475b0131fb3e9738b31f96eb458.png) 模板文件有两个，一个是 index.html，另一个是 article.html。 下节课程要做的内容，就是从 index.html 中，点击查看，就跳转到 article.html 模板，并展示你点击的那篇文章内容。 点击不同的文章，展示不同的文章内容。

### 小结

这段的重点是模型+数据库+渲染，流程如下：

1.  新建 Model 模型
2.  通过 makemigrations 和 migrate 命令，将模型映射到数据库中
3.  新建超级管理员账号，命令是 createsuperuser
4.  将模型交给 admin 后台管理
5.  使用超级管理员账号登录后台，在 admin 后台增加几篇文章
6.  view 函数通过 Model 模型查询数据
7.  将数据渲染到 HTML 网页上

数据库内容读取并展示到首页上，首页展示了非常多的文章的标题和摘要，如果要查看内容的话，还得点击文章的查看，进到 article.html 中才可以看到。 ![image.png](https://img-blog.csdnimg.cn/img_convert/33fd449be84c9936e5cf4e3d36f1369a.png) 那点击操作，如何实现？接下来我们来实现这个功能。

## 2、点击交互操作

### 链接的渲染

首先是点击，那个查看按钮，是个 a 标签，点击触发的 href 属性，也就是访问新的链接。 访问新的链接，链接中必须携带当前文章的信息，方便在视图函数层面，查询到具体的文章信息，并渲染到 article.html 中。 传输的信息必须独一无二，不然就会出现。数据库中，每条数据都会自动的携带一个 id，就是数据库的索引，这个信息是独一无二的。 打开 index.html 文件，在 a 标签的 href 属性上，渲染出 article 的 id 属性，如下图： ![image.png](https://img-blog.csdnimg.cn/img_convert/60409aba761b8791c5ddcc652825ea99.png)

### 渲染效果展示

拼接的 url 是 /article/{{article.id}} ，这个 url 是不存在的，后续我们需要添加。 这样渲染出来的结果，是 /article/1、/article/2、/article/3 这样的内容，每篇文章都是不一样的，符合我们的需求。 效果图如下： ![image.png](https://img-blog.csdnimg.cn/img_convert/57d3d7b6a7ed94715573a879888d04f7.png)

### 新建一个对应的请求接收函数

现在打开 views.py ，定义一个新的函数，用于绑定 /article/1 这类的 url。如下代码：

```python
def article_detail(request, id):
    article = Article.objects.get(id=id)
    return render(request, 'article.html', {'article': article})
```

代码解释：

*   函数名是 article\_detail
*   接收两个参数，一个是 request，另一个是 id，这个值需要从 url 中解析出来，django 会自动处理这点
*   根据传入的 id，从数据库中查询到具体的文章对象
*   然后将对象渲染到 article.html 模板上，并返回响应。

代码截图如下： ![image.png](https://img-blog.csdnimg.cn/img_convert/07a18b0fa3adbc6f22b99011f1620b72.png)

### 文章页面渲染

以上就是视图层的逻辑代码。接下来打开 article.html 文件，将文章的属性值，渲染上去，如下图： ![image.png](https://img-blog.csdnimg.cn/img_convert/b23897b363a712a8ba8d10a2acae48b3.png)

```markup
    <div class="panel-heading">
                    <h4>{{article.title}}</h4>
                </div>
                <div class="panel-body">
                    {{article.content}}
                </div>
```

### URL 绑定

视图逻辑函数和模板都准备好了，接下来就是 urls.py 中的注册，绑定 url，先上截图： ![image.png](https://img-blog.csdnimg.cn/img_convert/62400b1d476d68e3a553f65c4e8a8c28.png) 图中框中的部分就是将函数和 url 进行进行绑定。这个比较重要，有难度，代码解释：

*   路径是 article/ ，函数是 article\_detail
*   是申请一类值，int 是数字，id 是参数名，即：是 article 后面跟着的内容，必须是数值且在传入给试图函数的时候，数值传给函数的 id 变量所以函数的括号中，除了 request，还有 id

以上就是 url 的绑定。

### 效果展示

内容全部完成，启动服务器，来看下效果如何，如下截图： ![image.png](https://img-blog.csdnimg.cn/img_convert/1bffb823caf03f5c8a2a1749da336773.png)

### 【选词填空】练习

参数 id 的类型，是类型，是在中定义了。

*   \[ \] template
*   \[ \] int
*   \[ \] url
*   \[ \] str

## 3、前后分离介绍

前后端分离，是个趋势，了解前后端分离，对我们的技术提升，也是有很大帮助的。 Django 的 MTV 模式，是数据库->后端->前端的一整套流程，所有的内容都是一套项目中。 前后端分离的思想，就是前端负责界面交互和美观，后端负责数据管理和数据输出。前端和后端的通信，完全基于 API 来处理。 **什么是 API？** 就是一个后端提供给前端拿数据的 url。 接下来的任务，就是做个 API 接口，访问这个接口，可以拿到数据库中的文章内容。 首先，说明下格式问题。前端找后端要数据，后端给数据，前端拿数据，都是有特定格式的，这种格式是前后端两个规则好的。 所以在这里，以 json 格式为例，json 也是前端编程语言 javascript 的对象结构。 ![image.png](https://img-blog.csdnimg.cn/img_convert/33091e6af31df1b1020d2f97aa8ebc12.png)

### 增加模型函数

django 的 Model 默认不能直接导出 json 的，所以在模型定义里面，预先准备一个函数，将对象转换成 json，如下代码：

```python
from django.db import models


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=64, verbose_name="标题")
    abstract = models.CharField(max_length=128, verbose_name="摘要")
    content = models.TextField(verbose_name="内容")

    def __str__(self):
        return "{}".format(self.title)

    @classmethod
    def articles_to_dict(cls, articles):
        arts = {}
        for article in articles:
            tmp = {}
            tmp['title'] = article.title
            tmp['abstract'] = article.abstract
            tmp['content'] = article.content
            arts[article.id] = tmp
        return arts
```

代码解释：

*   @classmethod 申明这个函数是个类函数
*   articles\_to\_dict 函数名，类函数参数必须有 cls，第二个 articles 是需要传入的值，文章列表
*   for 循环，循环获取每篇文章，做成一个临时的字典 tmp，将标题、摘要、内容做成字典内容
*   然后再把 tmp 字典放到循环外的 arts 大字典内，键值分别是文章的 id 和 tmp 临时字典
*   最后将 arts 字典进行返回
*   这样就可以把传入的对象列表，做成一个大的对象字典了

代码截图： ![image.png](https://img-blog.csdnimg.cn/img_convert/86a41244b0dbe1dffd71ac8834f95ee3.png)

### 对应的 API 函数

有了将对象转换成字典的函数，下面开始定义 api 函数。 api 和 view 不太一样，虽然操作是一样的，但是概念上不同，view 返回网页内容，api 返回纯数据，所以 api 函数放的位置，单独存放到一个 api.py 里面，这个文件需要新建，看上方的效果图。 新建了 api.py 文件后，打开这个文件，新建一个函数，代码如下：

```python
# -*- coding: utf-8 -*-
# @Time    : 2021/3/5 8:08 下午
# @Author  : AI悦创
# @FileName: api.py
# @Software: PyCharm
# @Blog    ：http://www.bornforthis.cn
# @公众号   ：AI悦创
from django.http import JsonResponse
from .models import Article


def export_article(request, id=None):
    if id:
        articles = Article.objects.filter(id=id)
    else:
        articles = Article.objects.all()
    articles_json = Article.articles_to_dict(articles)
    print(articles_json)
    return JsonResponse(articles_json, json_dumps_params={'ensure_ascii': False})
```

对于新手来说，代码还有难度，在这里详细解释下：

*   导入 Article 和 JsonResponse。这个 JsonResponse 就是 json 格式的响应内容
*   然后是函数的定义，函数名是 export\_article，参数是 request 默认，以及一个 id，默认值是 None 为什么要 id，又设置成 None ？这里的思路是，这个函数可以返回特定的某篇文章，或者是返回默认所有文章。所以 id 的值，默认给个 None。等传入 id 时，None 会被覆盖
*   然后判断 id 的值，如果有值，就查询这个 id 所对应的的文章；`Article.objects.filter(id=id)` 是查询 id 匹配的文章，结果是文章列表
*   如果没有，则默认返回全部的文章
*   拿到了文章后，使用类函数 `articles_to_dict()` 将文章对象列表，转换成字典
*   通过 JsonResponse 将文章字典，做成响应直接返回
*   `json_dumps_params={'ensure_ascii':False}` 这个是不转换中文，视觉上看更直观

代码截图如下： ![image.png](https://img-blog.csdnimg.cn/img_convert/caa7bf8c134222a34c96af4647d67bd8.png)

### 绑定 URL

api 函数准备好了，然后是注册和绑定 url，不要忘记了，这个也是需要绑定了，如下图： ![image.png](https://img-blog.csdnimg.cn/img_convert/cb803beb8b38491e4b15063c4be962c5.png) 这里绑定了两个 url，一个是 article/json，这是匹配没有传入 id 时候的访问 url；另一个是 `article/json/<int:id>`，这个是匹配传入 id 时的 url。

### API 接口测试

一切准备就绪，看下访问效果，分别是访问无 id 的 url 和有 id 的 url，如下效果图： ![image.png](https://img-blog.csdnimg.cn/img_convert/016cb01cd5a79e39caad35b571128870.png) 网页中正常展示中文，打开浏览器的调试工具，切换到 Network 网络栏，这个 Json 格式就比较明显了，方便阅读。

### 【选词填空】练习

在 models.py 文件中，@classmethod 的意思\_\_\_\_\_\_\_\_\_是函数，也就是通过类可以直接调用的函数； 没有 @classmethod 的函数，是\_\_\_\_\_\_\_\_\_\_\_\_\_函数，不能通过类调用，只能通过实例调用。

*   \[ \] 实例
*   \[ \] 类