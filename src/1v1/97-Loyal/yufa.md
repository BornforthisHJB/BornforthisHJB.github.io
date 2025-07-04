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

comment: true
lastUpdated: true 
editLink: false
backToTop: true
toc: true
watermark: true
---

你好，我是悦创。

预祝你考试顺利！此内容为提供的速查笔记📒。

- User I/O✅
- User I/O (Advanced)✅
- Documentation (Internal)➖
- Documentation (External)➖
- Testing➖
- Debugging➖
- Selection✅
- Loops✅
- Loops + Selection✅
- Functions✅
- Strings/Lists
- Strings/Lists (Advanced)
- File I/O✅
- CSV files✅
- Dictionaries 
- Dictionaries (Advanced)
- SQL
- 3rd Party Tools

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
my_dict = {'a': 1, 'b': 2, 'c': 3}

my_dict['a'] = 1000  # 修改
print(my_dict)

my_dict['pool'] = 2000  # 添加
print(my_dict)
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

## 6. if

### 6.1 缩进

```python
condition = True
while condition:
    a = 1
    if a < 10:
        print(f"a:>>>{a}")
# 1 tab = 4 space
```

### 6.2 判断用户输入

```python
user_gender = input("请输入您的性别(F/M):")

if user_gender == "F":
    print("你是萌妹子")
elif user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```

改进，使之支持不区分大小写字母：

```python {1}
user_gender = input("请输入您的性别(F/M):").upper()

if user_gender == "F":
    print("你是萌妹子")
elif user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```

```python
user_gender = input()
user_gender = user_gender.upper()

if user_gender == "F":
    print("你是萌妹子")
elif user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```

### 6.3 使用多个 elif 来优化决策流程「elif 可以有多个」

```python
# 输入一个数字
number = int(input("请输入一个数字："))

# 检查数字的范围
if number < 0:
    print("这是一个负数")
elif number == 0:
    print("数字是零")
elif number > 0 and number <= 10:
    print("数字在1到10之间")
elif number > 10 and number <= 20:
    print("数字在11到20之间")
elif number > 20 and number <= 30:
    print("数字在21到30之间")
else:
    print("数字大于30")
```

优化1：

```python
# 输入一个数字
number = int(input("请输入一个数字："))

# 检查数字的范围
if number < 0:
    print("这是一个负数")
elif number == 0:
    print("数字是零")
elif number <= 10:
    print("数字在1到10之间")
elif number <= 20:
    print("数字在11到20之间")
elif number <= 30:
    print("数字在21到30之间")
else:
    print("数字大于30")
```

### 6.4 多重 if 语句

```python
user_gender = input("请输入您的性别 (F/M): ")
user_is_student = input("您是学生吗? (Y/N): ")

if user_gender == 'F':
    if user_is_student == 'Y':
        print("你是萌妹子学生")
    elif user_is_student == 'N':
        print("你是萌妹子")
    else:
        print("输入不正确")
elif user_gender == 'M':
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```



### 6.5 判断用户输入的数据是否是奇数-or-偶数

```python
# 获取用户输入
number = int(input("请输入一个整数: "))

# 使用模运算符来判断奇数还是偶数
if number % 2 == 0:
    print(f"{number} 是偶数。")
else:
    print(f"{number} 是奇数。")
```

上面不是纯数字字符串会报错，我们如何优化代码呢？

```python
# 获取用户输入
number = input("请输入一个整数: ")

# 使用模运算符来判断奇数还是偶数
if number.isdigit() == True:
    if int(number) % 2 == 0:
        print(f"{number} 是偶数。")
    else:
        print(f"{number} 是奇数。")
elif number.isdigit() == False:
    print("不是纯数字")
```

上面代码中，使用到了 `if number.isdigit() == True` 这个语法实际上可以改写成 `if True` 的形式。

```python
# 获取用户输入
number = input("请输入一个整数: ")

# 使用模运算符来判断奇数还是偶数
if number.isdigit():
    if int(number) % 2 == 0:
        print(f"{number} 是偶数。")
    else:
        print(f"{number} 是奇数。")
else:
    print("不是纯数字")
```

### 6.6 编写一个程序，接收三个整数作为输入，并输出其中的最大值。

```python
a = int(input("输入第一个整数: "))
b = int(input("输入第二个整数: "))
c = int(input("输入第三个整数: "))

if a >= b and a >= c:
    print(f"最大的数是 {a}")
elif b >= a and b >= c:
    print(f"最大的数是 {b}")
else:
    print(f"最大的数是 {c}")
```

### 6.7 闰年

编写一个程序，根据用户输入的年份，判断该年份是平年还是闰年。闰年的条件如下：

- 如果年份能被 4 整除但不能被 100 整除，或者能被 400 整除，则是闰年。

如果是闰年，程序还需要进一步判断该年份是不是一个世纪年（即是否能被 100 整除）。输出应包括年份是平年、闰年还是世纪闰年。

```python
# 获取用户输入的年份
year = int(input("请输入一个年份："))

# 判断是否是闰年
if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    # 检查是否是世纪年
    if year % 100 == 0:
        print(f"{year}是世纪闰年")
    else:
        print(f"{year}是闰年")
else:
    print(f"{year}是平年")
```



## 7. loop + if

### 7.1 0~100 的和

```python
total = 0
for i in range(101):
    total += i
print(total)
```

### 7.2 只要偶数的和

```python
# 同时保存奇数和、偶数和
# for+if

odd_total = 0
even_total = 0
for i in range(101):
    if i % 2 == 0:
        even_total += i
    else:
        odd_total += i
print(f'odd total: {odd_total}')
print(f'even total: {even_total}')
```

### 7.3 题目 1：判断奇偶数

编写一个程序，输入一个整数列表，输出其中的奇数，并统计奇数的个数。

示例输入：

```python
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

示例输出：

```python
奇数: [1, 3, 5, 7, 9]
奇数的个数: 5
```

**答案：**

```python
# 定义一个整数列表
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 初始化一个列表，用于存储奇数
odd_numbers = []

# 使用 for 循环遍历每个数字
for num in nums:
    # 判断数字是否为奇数（除以2余数不为0）
    if num % 2 != 0:
        odd_numbers.append(num)  # 将奇数添加到列表中

# 输出结果
print("奇数:", odd_numbers)
print("奇数的个数:", len(odd_numbers))  # 统计奇数的个数
```

### 7.4 题目 2：筛选特定条件的数字

给定一个包含任意整数的列表，编写程序输出其中所有同时满足以下条件的数字：

1. 是3的倍数。
2. 是5的倍数。

示例输入：

```python
[1, 3, 5, 15, 20, 30, 45, 60]
```

示例输出：

```python
满足条件的数字: [15, 30, 45, 60]
```

**答案：**

```python
# 定义一个包含整数的列表
nums = [1, 3, 5, 15, 20, 30, 45, 60]

# 初始化一个列表，用于存储满足条件的数字
filtered_numbers = []

# 使用 for 循环遍历每个数字
for num in nums:
    # 判断数字是否同时是3和5的倍数
    if num % 3 == 0 and num % 5 == 0:
        filtered_numbers.append(num)  # 满足条件的数字添加到列表中

# 输出结果
print("满足条件的数字:", filtered_numbers)
```



### 7.5 题目 3：统计字母出现频率

输入一段英文字符串，编写程序统计每个字母出现的次数（忽略大小写），并输出所有出现次数大于2次的字母及其出现的次数。

示例输入：

```python
"Programming is fun, especially Python Programming!"
```

示例输出：

```python
字母统计: {'p': 4, 'r': 4, 'o': 3, 'g': 4, 'a': 3, 'm': 4, 'i': 4, 'n': 4}
```

提示：

1. 使用`for`循环遍历字符串。
2. 结合`if`条件判断字母是否重复出现。

**答案：**

```python
# 输入一段英文字符串
text = "Programming is fun, especially Python Programming!"

# 将字符串转换为小写，忽略大小写
text = text.lower()

# 初始化一个字典，用于存储字母及其出现次数
letter_count = {}

# 使用 for 循环遍历字符串的每个字符
for char in text:
    # 判断字符是否为字母（忽略标点符号和空格）
    if char.isalpha():
        # 如果字母已经在字典中，则次数加1
        if char in letter_count:
            letter_count[char] += 1
        else:
            # 如果字母不在字典中，则初始化为1
            letter_count[char] = 1

# 筛选出出现次数大于2次的字母
result = {letter: count for letter, count in letter_count.items() if count > 2}

# 输出结果
print("字母统计:", result)
```

## 8. while

### 8.1 while 0～100 之和

```python
```

### 8.2 奇数偶数之和

```python
```

### 8.3 奇偶数判断

获取用户输入，把用户输入的数据转换成对应的类型。

1. 循环
2. 用户输入整数——>整数
3. 用户输入浮点数——>转换成小数
4. Other——>提示❌不合法，重新输入或退出程序

```python
while True:
    user_input = input("Enter a number: ")
    condition = user_input.replace('.', '', 1)
    if user_input.isdigit():
        int_number = int(user_input)
        break
    elif condition.isdigit():
        float_number = float(user_input)
        break
    else:
        print("Invalid input")
```

```python
while True:
    user_input = input("Enter a number: ")
    count_point = user_input.count(".")
    if user_input.isdigit():
        integer = int(user_input)
        break
    elif count_point == 1:
        index = user_input.index(".")
        pre_point = user_input[:index]
        post_point = user_input[index + 1:]
        if pre_point.isdigit() and post_point.isdigit():
            float_point = float(user_input)
            break
    else:
        print("Invalid input")
```

```python
while True:
    a=input("请输入一个数字：")
    condition=a.split(".")

    if a.isdigit():
        print(f"{int(a)}是一个整数")
        break
    elif len(condition)==2 and condition[0].isdigit() and condition[1].isdigit():
        print(f"{float(a)}是一个小数")
        break
    else:
        print("格式不对，请重试")
```

## 9. Functions

::: tabs

@tab 基础语法

1. 函数基本创建

```python
def 函数名称():
    函数内的代码
```

2. 具体例子

```python
def Hello():
    print("欢迎学习Python,利用Python统计学")

# 函数调用
Hello()
```

3. 如果函数需要参数

```python
def Hello(name):
    print("欢迎学习Python,利用Python统计学{}".format(name))

# 函数调用
name = "FD"
Hello(name)

name = "bornforthis"
Hello(name)

Hello("bornforthis")
```

4. 多个参数

```python
def Hello(name, age):
    print("欢迎学习Python,利用Python统计学{}".format(name))
    print(age)

# 函数调用
name = "FD"
Hello(name, 19)

name = "bornforthis"
Hello(name, 20)

age = 200
Hello("bornforthis", age)
```

@tab 小试牛刀

1. 实现一个求和程序

```python
# 实现一个求和程序

sum_fun(12, 90)  # 102
sum_fun(1, 2.1)  # 3.1
```

```python
# 实现一个求和程序
def sum_fun(x, y):
    result = x + y
    print(result)
sum_fun(12, 90)  # 102
sum_fun(1, 2.1)  # 3.1
```

2. 实现简易的计算器

```python
calculate(1, 2, '+')  # 3
calculate(1, 2, '-')  # -1
calculate(1, 2, '*')  # 2
```

@tab return

```python
# # 实现一个求和程序
# def sum_fun(x, y):
#     result = x + y
#     # print(result)
#     return result
# res = sum_fun(12, 90)
# print(res)
#
lst = [1, 2, 3]
def pow():
    index = 0
    for i in lst:
        lst[index] = i ** 2
        index = index + 1
pow()
print(lst)

lst = [1, 2, 3]
def pow():
    新列表 = []
    for i in lst:
        新列表.append(i ** 2)
    return 新列表

结果 = pow()
# print(lst)
print(结果)
```

@tab 小试牛刀

### 题目 1：计算数字列表的平均值

**描述：**
 编写一个名为 `calculate_average` 的函数，该函数接收一个数字列表并返回其平均值。如果列表为空，返回 `None`。

**函数签名：**

```python
def calculate_average(numbers):
    pass
```

**示例：**

```python
print(calculate_average([1, 2, 3, 4, 5]))  # 输出: 3.0
print(calculate_average([]))  # 输出: None
```

```python
def calculate_average(numbers: list) -> float:
    if not numbers:  # 如果列表为空
        return None
    return sum(numbers) / len(numbers)

# 示例测试
print(calculate_average([1, 2, 3, 4, 5]))  # 输出: 3.0
print(calculate_average([]))  # 输出: None
```



### 题目 2：检查字符串是否是回文

**描述：**
 编写一个名为 `is_palindrome` 的函数，该函数接收一个字符串，判断该字符串是否是回文。回文是指正读和反读都一样的字符串。忽略大小写和非字母字符。

**函数签名：**

```python
def is_palindrome(s):
    pass
```

**示例：**

```python
print(is_palindrome("A man, a plan, a canal, Panama"))  # 输出: True
print(is_palindrome("hello"))  # 输出: False
```

------

```python
import re

def is_palindrome(s: str) -> bool:
    # 去除非字母字符并转换为小写
    cleaned = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
    # 判断清理后的字符串是否与其反转相等
    return cleaned == cleaned[::-1]

# 示例测试
print(is_palindrome("A man, a plan, a canal, Panama"))  # 输出: True
print(is_palindrome("hello"))  # 输出: False
```



### 题目 3：生成斐波那契数列

**描述：**
 编写一个名为 `generate_fibonacci` 的函数，该函数接收一个整数 `n`，返回长度为 `n` 的斐波那契数列。如果 `n <= 0`，返回空列表。

**函数签名：**

```python
def generate_fibonacci(n: int) -> list:
    pass
```

**示例：**

```python
print(generate_fibonacci(5))  # 输出: [0, 1, 1, 2, 3]
print(generate_fibonacci(0))  # 输出: []
```

:::

## 10. 文件操作

::: tabs

@tab 1. 文件读取

1. 基础读取

```python
f = open('data.txt', mode='r', encoding='utf-8')  # r 就是 read
content = f.read()  # 一次性读取全部内容
f.close()

print(content)
```

2. readlines()

```python
f = open('data.txt', mode='r', encoding='utf-8')  # r 就是 read
content = f.readlines()
f.close()

print(content)
```

3. 读取文件内容，并求和

```python
# data.txt: 1,2,3,4,5,6,7,8
f = open('data.txt', mode='r', encoding='utf-8')  # r 就是 read
content = f.read()
f.close()

nums = content.split(',')
# print(nums)
total = 0
for num in nums:
    total += int(num)
print(total)
```

4. Q2

```python
f = open('data.txt', mode='r', encoding='utf-8')  # r 就是 read
content = f.readlines()
f.close()

total = 0
for line in content:
    numbers = line.split(',')
    for number in numbers:
        total += int(number)
print(total)
```

```python
f = open('data.txt', mode='r', encoding='utf-8')  # r 就是 read
content = f.readlines()
f.close()
result = []
for line in content:
    new_result = []  # 临时存储
    numbers = line.split(',')
    # print(numbers)
    for number in numbers:
        new_result.append(int(number))
    result.append(new_result)
# print(result)
last = []
for i in range(len(result[0])):
    r = result[0][i] + result[1][i]
    last.append(r)
print(last)
# lst1 = [1, 2, 3, 4, 5]
# lst2 = [1, 2, 3, 4, 5]
# new = []
# new.append(lst1[0] + lst2[0])
# new.append(lst1[1] + lst2[1])
```

@tab 文件的写入

```python
file = open('like.txt', mode='w', encoding='utf-8')
file.write('HHHHhhhhh哈哈哈哈哈哈哈')
file.close()
```

```python
file = open('like.txt', mode='w', encoding='utf-8')
file.write('HHHHhhhhh哈哈哈哈哈哈哈\n')
file.write('HHHHhhhhh哈哈哈哈哈哈哈\n')
file.write('HHHHhhhhh哈哈哈哈哈哈哈\n')
file.close()
```

```python
# file = open('like.txt', mode='w', encoding='utf-8')
# file.write('HHHHhhhhh哈哈哈哈哈哈哈\n')
# file.write('HHHHhhhhh哈哈哈哈哈哈哈\n')
# file.write('HHHHhhhhh哈哈哈哈哈哈哈\n')
# file.close()
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
file = open('数据.txt', 'w', encoding='utf-8')
for i in lst:
    file.write(str(i** 2) + '\n')
file.close()
```

@tab CSV

```python
file = open('data.csv', 'r', encoding = 'utf-8')
contents = file.readlines()
file.close()
# print(content)
for z in contents[1:]:
    print(z.split(','))
```

```python
name,age,class,gender
aiyc,18,一班,男
FD,19,二班,女
bornforthis,21,三班,男
```





:::

## 11. 题目

### Question 1

**Completion of this question demonstrates the skills of User I/O, Variables and For Loops**

In the space below, write code that asks the user for their name, and a number. Then prints a countdown from that number, followed by an encouraging message personalized to them. An example input and output is given on the opposite page. (Hint: Remember that Python always reads user input as a string, and that print only takes strings)

```python
What is your name?: Brian
Where do we start the countdown?: 5
Blastoff in 5
Blastoff in 4
Blastoff in 3
Blastoff in 2
Blastoff in 1
Go Brian Go!
```

**答案：**

```python
# 提问用户的名字
name = input("What is your name?: ")

# 提问用户的倒数起始数字，并转换为整数
start_number = int(input("Where do we start the countdown?: "))

# 使用 for 循环进行倒数
for i in range(start_number, 0, -1):
    print(f"Blastoff in {i}")

# 输出个性化的鼓励信息
print(f"Go {name} Go!")
```



### Question 2

**Completion of this question demonstrates the skills of While Loops and Selection**

In the space below, write a program that plays a guessing game. The first user will input a target number.

The second user will then guess numbers, being told if the number is higher or lower than the target until they get it correct. If the user guesses a value below $0$ or over $100$, the program should tell them that is an invalid guess. The game then outputs the total number of guesses required to find the target number.

A sample input/output is given on the opposite page.

```python
Enter a target number: 42
Enter a guess: 20
Target is higher
Enter a guess: 50
Target is lower
Enter a guess 40
Target is higher
Enter a guess: 45
Target is lower
Enter a guess: 120
Guesses must be between 1-100
Enter a guess: 42
CORRECT! it took you 5 guesses
```

**答案：**

```python
# 输入目标数字
target = int(input("Enter a target number: "))

# 检查目标数字是否有效
if target < 0 or target > 100:
    print("Target must be between 0-100")
else:
    guesses = 0  # 记录猜测次数
    while True:
        guess = int(input("Enter a guess: "))
        if guess < 0 or guess > 100:
            print("Guesses must be between 1-100")
        else:
            guesses += 1  # 每次有效猜测次数加1
            if guess < target:
                print("Target is higher")
            elif guess > target:
                print("Target is lower")
            else:
                print(f"CORRECT! it took you {guesses} guesses")
                break
```



### Question 3

**Completion of this question demonstrates the skills of Loops + Selection, and Nesting Loops**

In the space below, write a program that asks the user how many courses are in a semester. Then the program will ask them for their grades for each course until they get a B or above in at least half of their courses for a semester, at which point the program congratulates them and exits. If at any time the student fails any course, the program stops asking for grades for that semester and moves on to the next semester.

A sample input/output is given on the opposite page.

```python
How many courses are in a semester?: 4
Enter grade for course 1: A
Enter grade for course 2: F
I'm sorry, you didn't pass all of your courses
Enter grade for course 1: B
Enter grade for course 2: C
Enter grade for course 3: D
Enter grade for course 4: C
I'm sorry, you didn't get B or above in at least half of your courses
Enter grade for course 1: A
Enter grade for course 2: B
Enter grade for course 3: A
Enter grade for course 4: C
Congratulations: You got B or above in over half of your courses
```

::: code-tabs

@tab Code1

```python
while True:
    try:
        num_courses = int(input("How many courses are in a semester?: "))
        if num_courses <= 0:
            print("Please enter a positive number.")
            continue
        break
    except ValueError:
        print("Invalid input. Please enter a valid number.")

# 定义成绩转换为分数的方法
def grade_to_score(grade):
    grade = grade.upper()
    if grade == "A":
        return 4
    elif grade == "B":
        return 3
    elif grade == "C":
        return 2
    elif grade == "D":
        return 1
    elif grade == "F":
        return 0
    else:
        return -1

while True:  # 每个学期开始
    grades = []
    for i in range(num_courses):
        while True:  # 确保用户输入有效的成绩
            grade = input(f"Enter grade for course {i + 1}: ").strip()
            score = grade_to_score(grade)
            if score == -1:
                print("Invalid grade. Please enter A, B, C, D, or F.")
            else:
                grades.append(score)
                break
        
        if 0 in grades:  # 如果有一门课挂科，则退出本学期
            print("I'm sorry, you didn't pass all of your courses")
            break
    else:
        # 检查是否有至少一半的课程成绩为 B 或以上
        passed_count = sum(1 for g in grades if g >= 3)
        if passed_count >= (num_courses / 2):
            print("Congratulations: You got B or above in over half of your courses")
            break
        else:
            print("I'm sorry, you didn't get B or above in at least half of your courses")
            continue
    # 如果挂科，直接跳到下个学期
```

@tab Code2

```python
while True:
    try:
        num_courses = int(input("How many courses are in a semester?: "))
        if num_courses <= 0:
            print("Please enter a positive number.")
            continue
        break
    except ValueError:
        print("Invalid input. Please enter a valid number.")

while True:  # 每个学期开始
    grades = []
    for i in range(num_courses):
        while True:  # 确保用户输入有效的成绩
            grade = input(f"Enter grade for course {i + 1}: ").strip().upper()
            
            # 直接处理成绩转换
            if grade == "A":
                score = 4
            elif grade == "B":
                score = 3
            elif grade == "C":
                score = 2
            elif grade == "D":
                score = 1
            elif grade == "F":
                score = 0
            else:
                print("Invalid grade. Please enter A, B, C, D, or F.")
                continue
            
            grades.append(score)
            break  # 有效成绩输入后退出当前循环
        
        if 0 in grades:  # 如果有一门课挂科，则退出本学期
            print("I'm sorry, you didn't pass all of your courses")
            break
    else:
        # 检查是否有至少一半的课程成绩为 B 或以上
        passed_count = sum(1 for g in grades if g >= 3)
        if passed_count >= (num_courses / 2):
            print("Congratulations: You got B or above in over half of your courses")
            break
        else:
            print("I'm sorry, you didn't get B or above in at least half of your courses")
            continue
    # 如果挂科，直接跳到下个学期
```



:::

### Question 4

**Completion of this question demonstrates the skills of Looping over lists, manipulating lists and strings, and functions**

In the space below, write a function that takes a list of strings, a keyword, and a replacement word. The function will count the number of occurrences of the keyword in the list, and also replace all occurrences of that keyword with the replacement word. Example code calling the function is given on the page opposite.

To demonstrate the skill of functions, your function must include proper documentation.

```python
test_list = ['Apple', 'Bear', 'Apple', 'Car']
count = replace_words(test_list, 'Apple', 'Zebra')
print(count) #<-- this will print 2
print(test_list) #<-- this will print ['Zebra', 'Bear', 'Zebra', 'Car']
```

**答案：**

::: code-tabs

@tab Code1

```python
def replace_words(string_list, keyword, replacement):
    """
    Replaces all occurrences of a keyword in a list of strings with a replacement word
    and counts the occurrences of the keyword.

    Args:
        string_list (list of str): The list of strings to be processed.
        keyword (str): The word to be replaced and counted.
        replacement (str): The word to replace the keyword.

    Returns:
        int: The count of occurrences of the keyword in the list.
    
    Example:
        >>> test_list = ['Apple', 'Bear', 'Apple', 'Car']
        >>> count = replace_words(test_list, 'Apple', 'Zebra')
        >>> print(count)  # Outputs: 2
        >>> print(test_list)  # Outputs: ['Zebra', 'Bear', 'Zebra', 'Car']
    """
    # Initialize a counter for the keyword occurrences
    count = 0
    
    # Loop through the list and replace keyword while counting occurrences
    for i in range(len(string_list)):
        if string_list[i] == keyword:
            count += 1
            string_list[i] = replacement
    
    return count

# 测试代码
test_list = ['Apple', 'Bear', 'Apple', 'Car']
count = replace_words(test_list, 'Apple', 'Zebra')
print(count)  # 2
print(test_list)  # ['Zebra', 'Bear', 'Zebra', 'Car']
```

@tab Code2

```python
def replace_words(string_list, keyword, replacement):
    """
    替换字符串列表中所有关键词为指定的替换词，并统计关键词出现的次数。

    参数:
        string_list (list of str): 待处理的字符串列表。
        keyword (str): 要被替换和统计的关键词。
        replacement (str): 用于替换关键词的字符串。

    返回值:
        int: 关键词在列表中出现的次数。

    示例:
        >>> test_list = ['Apple', 'Bear', 'Apple', 'Car']
        >>> count = replace_words(test_list, 'Apple', 'Zebra')
        >>> print(count)  # 输出: 2
        >>> print(test_list)  # 输出: ['Zebra', 'Bear', 'Zebra', 'Car']
    """
    # 初始化计数器，用于统计关键词出现次数
    count = 0
    
    # 遍历字符串列表，通过索引修改内容
    for i in range(len(string_list)):
        # 如果当前元素等于关键词
        if string_list[i] == keyword:
            # 计数器加一
            count += 1
            # 将关键词替换为替换词
            string_list[i] = replacement
    
    # 返回关键词出现的次数
    return count

# 测试代码
test_list = ['Apple', 'Bear', 'Apple', 'Car']
count = replace_words(test_list, 'Apple', 'Zebra')  # 调用函数，替换关键词
print(count)  # 输出: 2
print(test_list)  # 输出: ['Zebra', 'Bear', 'Zebra', 'Car']
```

@tab Code3

```python
def replace_words(string_list, keyword, replacement):
    count = 0
    for i in range(len(string_list)):
        if string_list[i] == keyword:
            count += 1
            string_list[i] = replacement
    return count
test_list = ['Apple', 'Bear', 'Apple', 'Car']
xxxxxx = replace_words(test_list, 'Apple', 'Zebra')  # 调用函数，替换关键词
print(xxxxxx)  # 输出: 2
print(test_list)  # 输出: ['Zebra', 'Bear', 'Zebra', 'Car']

lst = [1, 2, 3, 4]
lst[0] = 'aiyc'
print(lst)
```



:::



## 12. 考前冲刺

| Skills Demonstrated      | Q1   | Q2   | Q3   | Q4   |
| :----------------------- | :--- | :--- | :--- | :--- |
| User I/O                 |      | ✓    |      |      |
| Loops                    | ✓    |      |      |      |
| Selection                |      | ✓    |      |      |
| Loops + Selection        | ✓    |      |      |      |
| Strings/Lists            | ✓    |      |      |      |
| Functions                | ✓    |      |      |      |
| Testing                  | ✓    |      |      |      |
| Documentation (internal) |      | ✓    | ✓    |      |
| Documentation (external) | ✓    |      |      |      |
| File I/O                 |      | ✓    | ✓    |      |
| Dictionaries             |      | ✓    | ✓    |      |
| External Tools           |      | ✓    |      | ✓    |

### 12.1 模拟题

::: tabs

@tab  题目 1: Palindrome 检测器

- **技能要求**：Loops, Strings/Lists, Loops + Selection, Functions, Testing, Documentation (external)

- **描述**：编写一个函数 `is_palindrome(string)`，判断输入字符串是否为回文（正着读和反着读都相同）。

- **要求：**
    1. 使用循环和条件语句实现回文检测。
    2. 提供测试用例验证代码正确性。
    3. 在函数顶部添加外部文档，描述函数的功能、参数和返回值。

- **示例：**

    ```python
    print(is_palindrome("racecar"))  # 输出: True
    print(is_palindrome("hello"))    # 输出: False
    ```

- **答案：**

    ::: code-tabs

    @tab 前置知识

    ```python
    string = 'aiyuechuang'
    index = len(string) - 1
    
    reverse_string = ""
    for i in range(len(string)):
        # print(string[index])
        reverse_string += string[index]
        index -= 1
    print(reverse_string)
    
    
    string = 'aiyuechuang'
    
    reverse_string = ""
    for char in string:
        # print(char)
        reverse_string = char + reverse_string
    print(reverse_string)
    
    string = 'aiyuechuang'
    
    reverse_string = ""
    for i in range(len(string)-1, -1, -1):
        reverse_string += string[i]
    print(reverse_string)
    ```

    

    @tab Code1

    ```python
    def is_palindrome(string):
        """
        判断输入字符串是否为回文。
        
        参数:
            string (str): 输入的字符串。
            
        返回:
            bool: 如果字符串是回文返回 True，否则返回 False。
        """
        string = string.lower().replace(" ", "")  # 忽略大小写并去除空格
        reversed_string = string[::-1]  # 获取反转后的字符串
        return string == reversed_string
    
    # 测试用例
    print(is_palindrome("racecar"))  # 输出: True
    print(is_palindrome("hello"))    # 输出: False
    print(is_palindrome("A man a plan a canal Panama"))  # 输出: True
    ```

    

    @tab Code2

    ```python
    def is_palindrome(string):
        """
        判断输入字符串是否为回文。
        
        参数:
            string (str): 输入的字符串。
            
        返回:
            bool: 如果字符串是回文返回 True，否则返回 False。
        """
        # 转为小写并去除空格
        string = string.lower().replace(" ", "")
        
        # 使用循环比较字符串前后字符
        for i in range(len(string) // 2):
            if string[i] != string[-(i + 1)]:
                return False
        return True
    
    # 测试用例
    def test_is_palindrome():
        """
        测试 is_palindrome 函数。
        """
        assert is_palindrome("racecar") == True, "测试失败: 'racecar'"
        assert is_palindrome("hello") == False, "测试失败: 'hello'"
        assert is_palindrome("A man a plan a canal Panama") == True, "测试失败: 'A man a plan a canal Panama'"
        print("所有测试用例通过！")
    
    # 执行测试
    test_is_palindrome()
    ```

    

    :::

@tab 题目 2: 文件统计器

- **技能要求**：User I/O, Selection, Documentation (internal), File I/O, Dictionaries

- **描述**： 编写一个程序，统计指定文本文件中的单词数量和每个单词出现的次数。

- **要求：**

    - 从用户输入读取文件路径。
    - 使用条件语句检查文件是否存在，若不存在则提示用户重新输入路径。
    - 使用字典存储单词及其出现次数。
    - 在代码中使用内联注释解释关键步骤。

- **示例**：假设文件内容如下：

    ```python
    hello world
    hello programming world
    ```

- **程序输出：**

    ```python
    总单词数: 5
    单词统计:
    hello: 2
    world: 2
    programming: 1
    ```

- **答案：**

    ::: code-tabs

    @tab Code 1

    ```python
    import os
    
    def word_statistics(file_path):
        """
        统计文件中的总单词数和每个单词的出现次数。
        
        参数:
            file_path (str): 文件路径。
            
        返回:
            tuple: 总单词数 (int) 和单词统计 (dict)。
        """
        word_count = {}
        total_words = 0
        
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                words = line.strip().split()
                for word in words:
                    total_words += 1
                    word = word.lower().strip(",.?!")  # 转小写并去除标点符号
                    word_count[word] = word_count.get(word, 0) + 1
        
        return total_words, word_count
    
    # 用户输入文件路径
    while True:
        file_path = input("请输入文件路径: ")
        if os.path.exists(file_path):
            break
        else:
            print("文件不存在，请重新输入。")
    
    # 获取统计信息
    total_words, word_count = word_statistics(file_path)
    
    # 打印结果
    print(f"总单词数: {total_words}")
    print("单词统计:")
    for word, count in word_count.items():
        print(f"{word}: {count}")
    ```

    

    @tab Code 2

    ```python
    ```

    

    :::

:::





















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
