---
title: instance 和 object 完全是一种东西吗
date: 2024-11-28 21:04:07
author: AI悦创
isOriginal: true
icon: blog
sticky: false
star: false
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
watermark: true
---

在 Java 中，`instance` 和 `object` 有一定的联系，但并不是完全一样的东西。它们的区别主要在于语义和使用场景。

## 1. Object（对象）

- 定义：Object 指的是根据某个类创建出来的具体实例，存在与内存中。

- 特点：

    - 它是类的具体实现。

    - 通过 new 关键字（或其他方式，如：反射、克隆等）创建。

    - 例如：

        ```java
        /**
         * @ClassName: Mian
         * @Description: TODO
         * @Author: AI悦创
         * @Date: 2024/11/28 21:08
         * @Version: V1.0
         * @Blog: https://bornforthis.cn
         */
        
        class Person {
            String name;
        }
        public class Mian {
            public static void main(String[] args) {
                Person p = new Person();
            }
        }
        ```

    - 在上述代码中，`p` 是 `Person` 类的对象。

## 2. Instance（实例）

















::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
