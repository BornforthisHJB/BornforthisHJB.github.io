---
title: 01-为什么 switch case 语句需要加入 break
time: 2022-09-09 14:53:29
icon: java
author: AI悦创
isOriginal: true
category: 
    - Java体系课
    - Java FQA
tag:
    - Java体系课
    - Java FQA
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
backToTop: true
toc: true
---

假设我们有如下这样一个 switch 语句：

```java
public class demo {
    public static void main(String[] args) {
        int n = 1;
        switch (n) {
            case 1:
                System.out.println(1);
            case 2:
                System.out.println(2);
            case 3:
                System.out.println(3);
            default:
                System.out.println("Default");
        }
    }
}
```

输出：

```java
1
2
3
Default
```

当我们在执行上面的方法时，如果我们传入的参数是 1，那么会输出 1、2、3 和 default，如果传入的参数是 2，那么会输出 2、3 和default，这是为什么呢？

这是因为 switch 的 case 语句是用来根据满足条件从确定的行开始执行的，如果不加入 break 语句跳出 switch 逻辑，则会一直往下执行，这也是为什么上面的测试代码会出现传入参数为 2 时会输出 2、3 和 default。

为此，我们也可以看一下上面的代码编译后的 class 文件，通过 eclipse 打开后，我们可以看到如下内容：

