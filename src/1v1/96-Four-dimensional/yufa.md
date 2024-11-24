---
title: Python 语法速查「考试辅助」
date: 2024-11-24 19:42:04
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

你好，我是悦创。

预祝你考试顺利！此内容为提供的速查笔记📒。

## 1. 字符串

### 1.1 input 获取用户输入

`input()` 是一个内置函数，用于从用户获取输入。

------

#### 1.1.1 基本用法

```python
name = input("请输入你的名字: ")
print(f"你好, {name}!")
```

- **功能**：`input()` 会等待用户输入内容，直到按下 Enter 键。
- **返回值**：返回用户输入的内容，数据类型是字符串 (`str`)。

#### 1.1.2 特点

1. **输入的默认类型是字符串**： 无论用户输入的内容是数字、文字还是其它形式，`input()` 返回的内容始终是字符串。

    ```python
    age = input("请输入你的年龄: ")
    print(type(age))  # 输出 <class 'str'>
    ```

    - 如果需要整数或浮点数，可以显式转换类型：

        ```python
        age = int(input("请输入你的年龄: "))  # 转为整数
        height = float(input("请输入你的身高: "))  # 转为浮点数
        ```

2. **显示提示信息**： `input()` 的参数是提示用户输入的信息。

    ```python
    city = input("请输入你所在的城市: ")
    print(f"你在 {city}。")
    ```

    - 提示信息会直接显示在终端，提供直观的输入引导。

3. **阻塞式操作**： 在用户按下 Enter 之前，程序会暂停执行后续代码。

4. **适合简单交互**： `input()` 常用于轻量交互式脚本中，例如需要用户提供配置或回答问题。

#### 1.1.3 示例：多个输入

- 获取多个值可以用多个 `input()`：

    ```python
    name = input("请输入你的名字: ")
    age = int(input("请输入你的年龄: "))
    print(f"你的名字是 {name}，年龄是 {age} 岁。")
    ```

- 或者使用 `split()` 获取一行输入的多个值：

    ```python
    name, age = input("请输入你的名字和年龄 (用空格分隔): ").split()
    print(f"名字: {name}, 年龄: {age}")
    ```

#### 1.1.4 常见场景

1. **密码输入（简单示例）**：

    ```python
    password = input("请输入密码: ")
    if password == "12345":
        print("密码正确")
    else:
        print("密码错误")
    ```

2. **用户选项交互**：

    ```python
    choice = input("请选择功能 (1: 登录, 2: 注册, 3: 退出): ")
    if choice == "1":
        print("登录功能")
    elif choice == "2":
        print("注册功能")
    elif choice == "3":
        print("退出程序")
    else:
        print("无效选项")
    ```

#### 1.1.5 总结

1. 默认返回字符串，需要类型转换时需手动处理。
2. 输入验证和异常处理可以提高程序的健壮性。



### 1.2 字符串的常用内置函数表

以下是 Python 字符串常用的内置函数的表格，包括函数名、说明和代码示例：

| **函数名**         | **说明**                                     | **代码示例**                                                 |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| `str.lower()`      | 将字符串转换为小写字母。                     | `print("Hello World!".lower())` ➡️ `hello world!`             |
| `str.upper()`      | 将字符串转换为大写字母。                     | `print("Hello World!".upper())` ➡️ `HELLO WORLD!`             |
| `str.capitalize()` | 将字符串的首字母转换为大写，其他字母小写。   | `print("hello world!".capitalize())` ➡️ `Hello world!`        |
| `str.title()`      | 将字符串的每个单词的首字母大写。             | `print("hello world!".title())` ➡️ `Hello World!`             |
| `str.strip()`      | 去掉字符串首尾的空格或指定字符。             | `print("  hello  ".strip())` ➡️ `hello`                       |
| `str.lstrip()`     | 去掉字符串左边的空格或指定字符。             | `print("  hello  ".lstrip())` ➡️ `hello  `                    |
| `str.rstrip()`     | 去掉字符串右边的空格或指定字符。             | `print("  hello  ".rstrip())` ➡️ `  hello`                    |
| `str.replace()`    | 替换字符串中的子字符串。                     | `print("hello world".replace("world", "Python"))` ➡️ `hello Python` |
| `str.split()`      | 按指定分隔符拆分字符串，返回列表。           | `print("a,b,c".split(","))` ➡️ `['a', 'b', 'c']`              |
| `str.join()`       | 用指定字符串连接列表中的元素。               | `print("-".join(["a", "b", "c"]))` ➡️ `a-b-c`                 |
| `str.find()`       | 返回子字符串首次出现的索引，找不到返回 -1。  | `print("hello world".find("world"))` ➡️ `6`                   |
| `str.index()`      | 返回子字符串首次出现的索引，找不到抛出异常。 | `print("hello world".index("world"))` ➡️ `6`                  |
| `str.startswith()` | 检查字符串是否以指定前缀开头，返回布尔值。   | `print("hello world".startswith("hello"))` ➡️ `True`          |
| `str.endswith()`   | 检查字符串是否以指定后缀结尾，返回布尔值。   | `print("hello world".endswith("world"))` ➡️ `True`            |
| `str.isalpha()`    | 检查字符串是否全是字母，返回布尔值。         | `print("hello".isalpha())` ➡️ `True`                          |
| `str.isdigit()`    | 检查字符串是否全是数字，返回布尔值。         | `print("123".isdigit())` ➡️ `True`                            |
| `str.isalnum()`    | 检查字符串是否全是字母或数字，返回布尔值。   | `print("hello123".isalnum())` ➡️ `True`                       |
| `str.isspace()`    | 检查字符串是否全是空白字符，返回布尔值。     | `print("   ".isspace())` ➡️ `True`                            |
| `str.zfill()`      | 在字符串左侧填充零，达到指定宽度。           | `print("42".zfill(5))` ➡️ `00042`                             |
| `str.format()`     | 使用格式化字符串填充变量值。                 | `print("Hello, {}".format("World"))` ➡️ `Hello, World`        |
| `str.count()`      | 返回子字符串在字符串中出现的次数。           | `print("hello world".count("o"))` ➡️ `2`                      |

















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
