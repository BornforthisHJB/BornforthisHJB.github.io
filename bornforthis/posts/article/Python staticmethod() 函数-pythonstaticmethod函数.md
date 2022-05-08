---
title: Python staticmethod() 函数
date: 2022-02-25 19:43:31.0
updated: 2022-03-30 23:30:22.892
url: /archives/606.html
categories: - technolog | Python
tags: 
---



python staticmethod 返回函数的静态方法。 该方法不强制要求传递参数，如下声明一个静态方法：

```Python
class C(object):
    @staticmethod
    def f(arg1, arg2, ...):
        ...
```

以上实例声明了静态方法 **f**，从而可以实现实例化使用 **C().f()**，当然也可以不实例化调用该方法 **C.f()**。

### 函数语法

```Python
staticmethod(function)
```

参数说明：

*   无

实例

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

class C(object):
    @staticmethod
    def f():
        print('aiyc');

C.f();          # 静态方法无需实例化
cobj = C()
cobj.f()        # 也可以实例化后调用
```

以上实例输出结果为：

```
aiyc
aiyc
```

staticmethod 参数要求是 Callable, 也就是说 Class 也是可以的：

```python
class C1(object):
    @staticmethod
    class C2(object):
        def __init__(self, val = 1):
            self.val = val
        def shout(self):
            print("Python世界第%d!"%self.val)
tmp = C1.C2(0)
print(type(tmp))    # 输出 : <class '__main__.C1.C2'>
tmp.shout()         # 输出 : Python世界第0!
```