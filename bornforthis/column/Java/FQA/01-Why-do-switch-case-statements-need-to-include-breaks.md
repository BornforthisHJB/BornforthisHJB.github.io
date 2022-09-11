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

## 前言

一个小姐姐拿着一个 switch 的选择题来问我。

你好，我们在研究 switch 之前呢，我要给你介绍一下 javap。—— javap 是 jdk 自带的一个工具，可以反编译，也可以查看 java 编译器生成的字节码，是分析代码的一个好工具。

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

为此，我们也可以看一下上面的代码编译后的 class 文件，我们可以看到如下内容：

```java
public static void main();  
   0  iload_0 [n]  
   1  tableswitch default: 49  
        case 1: 28  
        case 2: 35  
        case 3: 42  
  28  getstatic java.lang.System.out : java.io.PrintStream [22]  
  31  iconst_1  
  32  invokevirtual java.io.PrintStream.println(int) : void [28]  
  35  getstatic java.lang.System.out : java.io.PrintStream [22]  
  38  iconst_2  
  39  invokevirtual java.io.PrintStream.println(int) : void [28]  
  42  getstatic java.lang.System.out : java.io.PrintStream [22]  
  45  iconst_3  
  46  invokevirtual java.io.PrintStream.println(int) : void [28]  
  49  getstatic java.lang.System.out : java.io.PrintStream [22]  
  52  ldc <String "Default"> [33]  
  54  invokevirtual java.io.PrintStream.println(java.lang.String) : void [35]
```

上面编译后的语句每行前面的数字是程序的指定序号，我们可以把它简单的理解为行号，我们可以看到数字为 1 的那行定义了一个  switch 指定，其默认会跳到 49 行，如果传入的参数是 1 则跳到 28 行执行，如果是 2 则跳到 35 行执行，如果是 3 则跳到 42 行执行。

那么我们先来看程序的第 28 行到 32 行，其对应的就是调用 `System.out.println` 输出 1，完了后没有特殊的指令，程序是会继续顺序执行的，也就是会依次执行 35、38、直到 57 行结束。

如果我们把源程序的 case 语句末端都加上 break 语句，如下这样：

```java
public class demo {
    public static void main(String[] args) {
        int n = 2;
        switch (n) {
            case 1:
                System.out.println(1);
                break;
            case 2:
                System.out.println(2);
                break;
            case 3:
                System.out.println(3);
                break;
            default:
                System.out.println("Default");
                break;
        }
    }
}
```

 那么对应的编译的 class 文件通过，编辑器打开后可以看到如下内容：

```java
public static void main();  
   0  iload_0 [n]  
   1  tableswitch default: 58  
        case 1: 28  
        case 2: 38  
        case 3: 48  
  28  getstatic java.lang.System.out : java.io.PrintStream [22]  
  31  iconst_1  
  32  invokevirtual java.io.PrintStream.println(int) : void [28]  
  35  goto 66  
  38  getstatic java.lang.System.out : java.io.PrintStream [22]  
  41  iconst_2  
  42  invokevirtual java.io.PrintStream.println(int) : void [28]  
  45  goto 66  
  48  getstatic java.lang.System.out : java.io.PrintStream [22]  
  51  iconst_3  
  52  invokevirtual java.io.PrintStream.println(int) : void [28]  
  55  goto 66  
  58  getstatic java.lang.System.out : java.io.PrintStream [22]  
  61  ldc <String "Default"> [33]  
  63  invokevirtual java.io.PrintStream.println(java.lang.String) : void [35]  
  66  return
```

我们可以看到 switch 语句默认会执行 58 行，如果传入的参数是 1 则会执行 28 行，如果是 2 则会从 38 行开始执行，接着我们可以看到 28 行开始是执行的 `System.out.println(1)` 的逻辑，完了后会顺序执行到 35 行，35 行的指令是会引导程序执行到第 66 行，也就是跳出了 switch 逻辑，对应我们的测试代码就是程序结束了。这也是为什么我们在使用 switch 语句时通常需要在每个 case 语句结束时加入 break 指令的原因。

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

