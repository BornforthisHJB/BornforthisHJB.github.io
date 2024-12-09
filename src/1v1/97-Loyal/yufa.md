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

### 1.0 字符串元素提取

1. 提取单个元素

    ```python
    string = 'bornforthis'
    select = string[0]
    print(select) # 输出：b
    ```

2. 提取多个元素

    ```python
    string = 'bornforthis'
    select = string[0:3]
    print(select) # 输出：bor
    ```

3. 提取多个不连续的数据

    ```python
    string = 'bornforthis'
    select = string[0:11:2]
    print(select) # 输出：brfrhs
    ```

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



## 2. 列表

### 2.0 列表的基本操作

#### 2.0.1 列表的元素提取

1. 提取单个元素

    ```python
    lst = [1, 2, 3]
    select = lst[0] # 数字 1 的下标是 0
    print(select)  # 输出：1
    ```

2. 提取连续的数据

    ```python
    lst = ['apple', 'banana', 'watermelon', 'plum']
    select = lst[1:3]
    print(select)  # 输出：['banana', 'watermelon']
    ```

3. 提取不连续的数据

    ```python
    lst = ['apple', 'banana', 'watermelon', 'plum']
    select = lst[0:4:2]
    print(select)  # 输出：['apple', 'watermelon']
    ```

4. 列表元素倒过来

    ```python
    lst = ['apple', 'banana', 'watermelon', 'plum']
    select = lst[::-1]
    print(select)  # 输出：['plum', 'watermelon', 'banana', 'apple']
    ```


### 2.1 添加元素

#### 2.1.1 `.append()`

- **功能**: 在列表末尾添加单个元素。

- 用法:

    ```python
    lst = [1, 2, 3]
    lst.append(4)
    print(lst)  # [1, 2, 3, 4]
    ```

#### 2.1.2 `.extend()`

- **功能**: 在列表末尾添加另一个可迭代对象中的所有元素。

- 用法:

    ```python
    lst = [1, 2, 3]
    lst.extend([4, 5])
    print(lst)  # [1, 2, 3, 4, 5]
    ```

#### 2.1.3 `.insert()`

- **功能**: 在指定位置插入一个元素。

- 用法:

    ```python
    lst = [1, 2, 3]
    lst.insert(1, 'a')
    print(lst)  # [1, 'a', 2, 3]
    ```

### 2.2 删除元素

#### 2.2.1 `.remove()`

- **功能**: 删除列表中第一个匹配的指定值。

- 用法:

    ```python
    lst = [1, 2, 3, 2]
    lst.remove(2)
    print(lst)  # [1, 3, 2]
    ```

#### 2.2.2 `.pop()`

- **功能**: 删除指定索引位置的元素，并返回该元素。若不指定索引，默认删除最后一个元素。

- 用法:

    ```python
    lst = [1, 2, 3]
    last_item = lst.pop()
    print(last_item)  # 3
    print(lst)        # [1, 2]
    ```

#### 2.2.3 `clear()`

- **功能**: 清空列表。

- 用法:

    ```python
    lst = [1, 2, 3]
    lst.clear()
    print(lst)  # []
    ```

### 2.3 查找元素

#### 2.3.1 `.index()`

- **功能**: 返回第一个匹配值的索引位置。

- 用法:

    ```python
    lst = [1, 2, 3, 2]
    idx = lst.index(2)
    print(idx)  # 1
    ```

#### 2.3.2 `.count()`

- **功能**: 统计列表中某个元素出现的次数。

- 用法:

    ```python
    lst = [1, 2, 3, 2]
    count = lst.count(2)
    print(count)  # 2
    ```

### 2.4 修改列表顺序

#### 2.4.1 `.reverse()`

- **功能**: 原地反转列表。

- 用法:

    ```python
    lst = [1, 2, 3]
    lst.reverse()
    print(lst)  # [3, 2, 1]
    ```

#### 2.4.2 `.sort()`

- **功能**: 对列表进行排序（升序）。可通过参数实现降序或自定义排序。

- 用法:

    ```python
    lst = [3, 1, 2]
    lst.sort()
    print(lst)  # [1, 2, 3]
    
    lst.sort(reverse=True)
    print(lst)  # [3, 2, 1]
    ```

### 2.5 复制列表 `copy()`

- **功能**: 返回列表的浅拷贝。

- 用法:

    ```python
    lst = [1, 2, 3]
    new_lst = lst.copy()
    print(new_lst)  # [1, 2, 3]
    ```

### 2.6 获取列表长度 `.len()`

- **功能**: 返回列表的长度。

- 用法:

    ```python
    lst = [1, 2, 3]
    print(len(lst))  # 3
    ```

### 2.7 示例综合应用

```python
lst = [1, 3, 5]

# 添加操作
lst.append(7)
lst.extend([9, 11])
lst.insert(1, 2)

# 删除操作
lst.remove(3)
popped = lst.pop(0)

# 查找操作
print(lst.index(5))
print(lst.count(5))

# 排序与反转
lst.sort()
lst.reverse()

# 长度与复制
print(len(lst))
new_lst = lst.copy()

# 打印结果
print(lst)
print(new_lst)
```



## 3. for 循环

Python 的 `for` 循环用于遍历**可迭代对象**（如列表、字符串、字典、集合、元组等），或者用于执行一段代码块的多次重复操作。以下是详细讲解：

### 3.1 基本语法

```python
for 变量 in 可迭代对象:
    执行的代码块
```

- **变量**：每次循环时，从可迭代对象中提取的元素会赋值给这个变量。
- **可迭代对象**：可以是列表、元组、字符串、字典等。
- **代码块**：循环体中需要执行的代码。

### 3.2 常见使用场景

#### 3.2.1 遍历列表

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

**输出**：

```
apple
banana
cherry
```

#### 3.2.2 遍历字符串

```python
text = "hello"
for char in text:
    print(char)
```

**输出**：

```
h
e
l
l
o
```

#### 3.2.3 遍历字典

遍历字典的**键**、**值**或**键值对**。

```python
person = {"name": "Alice", "age": 25, "city": "New York"}

# 遍历键
for key in person:
    print(key)

# 遍历值
for value in person.values():
    print(value)

# 遍历键值对
for key, value in person.items():
    print(key, value)
```



### 3.3 结合`range()`函数

`range()` 是生成一系列数字的函数，常用于生成索引或循环计数。

#### 3.3.1 基本用法

```python
for i in range(5):  # 生成 0 到 4 的数字
    print(i)
```

**输出**：

```
0
1
2
3
4
```

#### 3.3.2 带起始值和步长

```python
for i in range(1, 10, 2):  # 从 1 开始，步长为 2，生成 1, 3, 5, 7, 9
    print(i)
```

**输出**：

```
1
3
5
7
9
```

### 3.4 `for` 循环中的常用控制语句

#### 3.4.1  `break`

提前终止循环。

```python
for i in range(5):
    if i == 3:
        break
    print(i)
```

**输出**：

```
0
1
2
```

#### 3.4.2 `continue`

跳过当前循环的剩余代码，直接进入下一次循环。

```python
for i in range(5):
    if i == 3:
        continue
    print(i)
```

**输出**：

```
0
1
2
4
```

#### 3.4.3 `else`

当 `for` 循环没有被 `break` 中断时，执行 `else` 中的代码。

```python
for i in range(5):
    print(i)
else:
    print("循环完成")
```

**输出**：

```
0
1
2
3
4
循环完成
```

### 3.5 嵌套循环

`for` 循环可以嵌套使用，用于处理二维或多维数据。

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in matrix:
    for num in row:
        print(num, end=" ")
```

**输出**：

```
1 2 3 4 5 6 7 8 9
```

------

### 3.6 总结

- **优点**：简单易用，适合遍历各种数据结构。
- 注意点：
    1. 如果循环目标是空对象，`for` 循环不会执行。
    2. 在循环中修改可迭代对象时要小心，可能会引发意外行为。



## 4. while 循环

在Python中，`while` 循环是一种基本的循环结构，它会反复执行一段代码，只要给定的条件为真。`while` 循环的语法如下：

```python
while 条件:
    循环体代码
```

### 4.1 关键点

1. **条件判断**：`while` 循环会先检查条件，如果条件为 `True`，则执行循环体；如果条件为 `False`，则终止循环。
2. **循环体**：包含需要重复执行的代码块，通常会改变条件，以防止死循环。
3. **死循环**：如果条件永远为 `True`，循环将永不结束（除非中间有终止语句，如 `break`）。



### 4.2 示例 1：基本使用

```python
i = 1
while i <= 5:  # 当 i 小于等于 5 时，执行循环
    print(f"当前值为 {i}")
    i += 1  # 更新 i，防止死循环
```

**输出：**

```
当前值为 1
当前值为 2
当前值为 3
当前值为 4
当前值为 5
```



### 4.3 示例 2：`break` 和 `continue`

- **`break`**：用于提前退出循环。
- **`continue`**：跳过当前循环的剩余代码，直接进入下一次循环。

```python
i = 1
while i <= 10:
    if i == 6:
        print("遇到6，退出循环")
        break  # 提前退出循环
    print(f"当前值为 {i}")
    i += 1
```

**输出：**

```
当前值为 1
当前值为 2
当前值为 3
当前值为 4
当前值为 5
遇到6，退出循环
```

------

```python
i = 0
while i < 5:
    i += 1
    if i == 3:
        print("跳过3")
        continue  # 跳过剩余的代码，进入下一次循环
    print(f"当前值为 {i}")
```

**输出：**

```
当前值为 1
当前值为 2
跳过3
当前值为 4
当前值为 5
```

------

### 4.4 示例 3：死循环

```python
while True:  # 条件永远为 True
    print("这是一个死循环，按 Ctrl+C 停止")
```

这个循环永远不会结束，除非手动终止（如按下 `Ctrl+C`）。

------

### 4.5 示例 4：使用 `while` 实现输入验证

```python
password = ""
while password != "12345":  # 直到输入正确密码为止
    password = input("请输入密码：")
    if password != "12345":
        print("密码错误，请重试")
print("密码正确，欢迎进入系统")
```



### 4.6 注意事项

1. 确保条件能变为 `False`：
    - 如果条件始终为 `True` 且没有 `break`，会造成死循环。
2. 代码块的缩进：
    - 循环体的代码块需要缩进，通常使用 4 个空格。

## 5. 字典

在 Python 中，字典（`dict`）是一种用于存储键值对的数据结构。字典循环主要用来遍历字典中的键（`keys`）、值（`values`）或者键值对（`items`）。以下是字典循环的几种常见用法和它们的特点：

### 5.0 字典的提取和修改、添加

```python
```



### 5.1 遍历键（Keys）

默认情况下，用 `for` 循环直接遍历字典，会遍历它的键。

```python
my_dict = {'a': 1, 'b': 2, 'c': 3}

for key in my_dict:
    print(f"键: {key}")
```

等价于：

```python
for key in my_dict.keys():
    print(f"键: {key}")
```

输出：

```
键: a
键: b
键: c
```



### 5.2 遍历值（Values）

通过 `dict.values()` 方法可以遍历字典的值。

```python
for value in my_dict.values():
    print(f"值: {value}")
```

输出：

```
值: 1
值: 2
值: 3
```



### 5.3 遍历键值对（Key-Value Pairs）

使用 `dict.items()` 方法可以同时获取字典的键和值。

```python
for key, value in my_dict.items():
    print(f"键: {key}, 值: {value}")
```

输出：

```
键: a, 值: 1
键: b, 值: 2
键: c, 值: 3
```



### 5.4 使用 `enumerate()` 在字典循环中获取索引

虽然字典本身没有顺序，但如果需要索引，可以配合 `enumerate()` 使用：

```python
for index, (key, value) in enumerate(my_dict.items()):
    print(f"索引: {index}, 键: {key}, 值: {value}")
```

输出：

```
索引: 0, 键: a, 值: 1
索引: 1, 键: b, 值: 2
索引: 2, 键: c, 值: 3
```



### 5.5 条件过滤循环

可以在循环时加条件过滤，只处理满足条件的键或值。

例如，筛选值大于 1 的键值对：

```python
for key, value in my_dict.items():
    if value > 1:
        print(f"键: {key}, 值: {value}")
```

输出：

```
键: b, 值: 2
键: c, 值: 3
```



### 5.6 字典嵌套循环

如果字典的值本身是另一个字典，可以使用嵌套循环遍历。

```python
nested_dict = {
    'group1': {'a': 1, 'b': 2},
    'group2': {'c': 3, 'd': 4},
}

for group, sub_dict in nested_dict.items():
    print(f"组: {group}")
    for key, value in sub_dict.items():
        print(f"  键: {key}, 值: {value}")
```

输出：

```
组: group1
  键: a, 值: 1
  键: b, 值: 2
组: group2
  键: c, 值: 3
  键: d, 值: 4
```

### 5.7 注意事项

1. **顺序**：从 Python 3.7 开始，字典的插入顺序默认会被保留。
2. **性能**：直接访问字典的键、值或项（`keys()`、`values()`、`items()`）的时间复杂度为 $O(1)$。





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
