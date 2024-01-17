---
title: 07-dict NoteBook
icon: yongyan
date: 2024-01-02 09:27:44
author: AI悦创
isOriginal: true
category: 
    - Python notebook
tag:
    - Python 1v1
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## 1. 如何创建一个电话簿

我们现在有下面的联系人：

| 姓名        | 手机号 |
| ----------- | ------ |
| 李雷        | 123456 |
| 韩梅梅      | 132456 |
| 大卫        | 154389 |
| Mr.Liu      | 131452 |
| Bornforthis | 180595 |
| Alexa       | 131559 |

如何用以往学过的知识构建一个具有用户输入查询功能的电话簿。

> 变量、数字型、列表、元组、字符串。

程序运行效果：

- 测试一：

```python
Enter your search name: 李雷
The 李雷 phone number is: 123456
```

- 测试二：

```python
Enter your search name: Bornforthis
The Bornforthis phone number is: 180595
```

::: code-tabs

@tab Code1

```python
names = ['李雷', '韩梅梅', '大卫', 'Mr.Liu', 'Bornforthis', 'Alexa']
phones = ['123456', '132456', '154389', '131452', '180595', '131559']

# 获取用户输入
search_name = input("Enter your search name: ")
position = names.index(search_name)
print(f"The {search_name} phone number is: {phones[position]}")
```

@tab Code2

```python
phonebooks = ['李雷', '123456', '韩梅梅', '132456', '大卫', '154389', 'Mr.Liu', '131452', 'Bornforthis', '180595', 'Alexa', '131559']

# 获取用户输入
search_name = input("Enter your search name: ")
position = phonebooks.index(search_name)
print(f"The {search_name} phone number is: {phonebooks[position + 1]}")
```

@tab Code3

```python
names = ['李雷', '韩梅梅', '大卫', 'Mr.Liu', 'Bornforthis', 'Alexa']
phones = ['123456', '132456', '154389', '131452', '180595', '131559']
phonebooks = list(zip(names, phones))

# 获取用户输入
search_name = input("Enter your search name: ")
position = names.index(search_name)
print(f"The {search_name} phone number is: {phonebooks[position][1]}")
```

:::

由上面的问题应该要了解两个点：

1. 如何用已有的知识去完成未知的新任务，毕竟不可能包含全部各种需求所需要的数据类型类型；
2. 字典存在意义，从上面题目完成后应该要 get 到。

## 2. 字典结构

- 用 **<span style="color:orange">花括号</span>** 表示字典
- 字典内每一项都有两个元素组成：**<span style="color:orange">key 和 value</span>**
    - `{key: value, key: value}`
- 各个项用 **<span style="color:orange">逗号</span>** 隔开

```python
phone_numbers = {'李雷': '1234', '韩梅梅': '3456', '马冬梅': '0123'}
print(phone_numbers['李雷'])

# ---output---
1234
```

## 3. 字典结构 key & value

- key 和 value 是一一对应，同一个键只能有一个对应的值
- 键的类型是不可变的；
- value 的类型是任意的；

```python
names = {'name': '李雷', 'numbers': '1234', 'name': '韩梅梅', True: 'bool', 2: 'int'}
print(names)

# ---output---
{'name': '韩梅梅', 'numbers': '1234', True: 'bool', 2: 'int'}
```

- 如果 key 用列表则报错：

```python
names = {['name']: '李雷', 'numbers': '1234'}
print(names)

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/44-liuchengyang/look.py", line 8, in <module>
    names = {['name']: '李雷', 'numbers': '1234'}
TypeError: unhashable type: 'list'
```

## 4. 用字典 dict 函数创建字典

- 方法一：根据其他序列新建字典

```python
message = [('lilei', 98), ('hanmeimei', 99)]
list_to_dict = dict(message)
print(list_to_dict)

# ---output---
{'lilei': 98, 'hanmeimei': 99}
```

- 方法二：根据关键字参数新建字典

```python
d = dict(lilei=98, hanmeimei=99)
print(d)

# ---output---
{'lilei': 98, 'hanmeimei': 99}
```

::: info 上面两种创建字典的方法，有什么优缺点？

上面方法一的方法，可以更好的适配字典的各种数据类型情况。why？——因为结构是列表里面放元组，而元组的 0 号位放 key，1 号位放 value。所以，只要是不可变的数据类型都可以放在 0 号位。

反之对比上面方法二：第一个位置必须是“变量”，不能是其它数据类型。举个例子：

```python
d = dict(lilei=98, hanmeimei=99)  # 看起来正常
d = dict('lilei'=98, 'hanmeimei'=99)  # 看起来怎么样？
```

上面第二行代码，看起来就很奇怪了，一共有两个值一个值是 `'lilei'` 另一个值 `98` 两个都是值，可以用 98 赋值给另一个值吗？——显然是不行的。我们的赋值是需要把一个值赋值给一个变量「有空间」。

所以，第二种方法虽然可以实现创建字典，但是对于字典 key 的各种情况并不能完全支持。

> Output 时第二种的 key 只能得到字符串

:::

## 5. 访问字典数据

### 5.1 中括号访问

- 利用中括号加要查询的 key

```python
grade = {'李雷': '98', '韩梅梅': '99'}
print(grade['李雷'])  # 98
```

### 5.2 上面的提取方法存在问题

在提取不存在的 key 的时候，会报错：

```python
grade = {'李雷': '98', '韩梅梅': '99'}
print(grade['马冬梅']) 

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/44-liuchengyang/look.py", line 9, in <module>
    print(grade['马冬梅'])
KeyError: '马冬梅'
```

就像我们查询电话簿的时候，没找到会返回：未找到。

![](./07-python-dict.assets/image-20240103194907771.png)



### 5.3 使用 .get() 解决

当使用 `get` 方法时，需要提供一个键（key），方法会返回与该键关联的值。如果该键在字典中不存在，`get` 方法将返回 `None`，或者你可以指定一个默认值，如果键不存在，则返回这个默认值。

这是 `get` 方法的基本语法：

```python
value = dictionary.get(key, default_value)
```

- `key`：你想要检索的键。
- `default_value`：（可选）如果键不存在时返回的值。如果未提供此参数，默认值为 `None`。

下面是一个使用 `get` 方法的例子：

```python
# 创建一个简单的字典
my_dict = {'name': 'Alice', 'age': 25}

# 使用 get 访问一个存在的键
print(my_dict.get('name'))  # 输出: Alice

# 使用 get 访问一个不存在的键，并提供默认值。
# 如果没有提供第二个参数，则返回 None
print(my_dict.get('gender', 'Not Specified'))  # 输出: Not Specified
```

在第一个 `get` 调用中，我们访问了键 `'name'`，它在字典中存在，因此返回了对应的值 `'Alice'`。在第二个调用中，我们试图访问键 `'gender'`，它在字典中不存在，因此返回了我们指定的默认值 `'Not Specified'`。

## 6. 更新字典的数据

字典修改或添加数据原则：有则改之，无则加勉「无则添加」

![](./07-python-dict.assets/image-20240103084218923.png)

```python
grade = {'李雷': '98', '韩梅梅': '99'}
grade['韩梅梅'] = 100
print(grade)

grade['马冬梅'] = '95'
print(grade)

# ---output---
{'李雷': '98', '韩梅梅': 100}
{'李雷': '98', '韩梅梅': 100, '马冬梅': '95'}
```

## 7. 字典删除

![](./07-python-dict.assets/image-20240103084956419.png)

```python
grade = {'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}
print(grade)

# ---output---
{'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}
```

```python
grade = {'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}

del grade['李雷'] # 删除李雷
print(grade)

# ---output---
{'韩梅梅': '99', '马冬梅': '95'}
```

```python
grade = {'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}
del grade['李雷']
grade.clear()  # 清空字典
print(grade)


# ---output---
{}
```

```python
grade = {'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}
del grade['李雷']
grade.clear()  # 清空字典
del grade
print(grade)

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/44-liuchengyang/look.py", line 12, in <module>
    print(grade)
NameError: name 'grade' is not defined
```

## 8. 字典结构嵌套字典

嵌套：将一系列字典存储在列表中，或将列表作为值存储在字典中。

- 字典列表
- 在字典中存储列表
- 在字典中存储字典

### 8.1 字典列表

> 由字典构成的列表

```python
student1 = {'name': '李雷', 'age': 18, 'grade': 98}
student2 = {'name': '韩梅梅', 'age': 19, 'grade': 99}
student3 = {'name': '韩梅梅', 'age': 18, 'grade': 95}
students = [student1, student2, student3]
print(students)

# ---output---
[{'name': '李雷', 'age': 18, 'grade': 98}, {'name': '韩梅梅', 'age': 19, 'grade': 99}, {'name': '韩梅梅', 'age': 18, 'grade': 95}]
```

:::: tip 小试牛刀：通过提取 students 来得到 韩梅梅的分数

::: code-tabs

@tab Code1

```python
print(students[2]['grade'])
```

@tab Code2

```python
print(students[2].get('grade'))
```

:::

中括号和 get 的选择依据：看数据是否是确定的，如果是确定的优先使用中括号提取。否则，使用 get。

::::

### 8.2 在字典中存储列表

```python
favorite_class = {
    '李雷': ['数学', '英语'],
    '韩梅梅': ['语文'],
    '马冬梅': ['计算机', '物理', '数学'],
}
print(favorite_class['李雷'])
print(favorite_class['李雷'][0])

# ---output---
['数学', '英语']
数学
```

### 8.3 在字典中存储字典

```python
# 用一个字典表示一个学生信息
student1 = {'name': 'lilei', '成绩': '98', '实验班': True}

# 用一个字典表示全班学生信息
class1 = {
    '李雷': {'成绩': '98', '实验班': True},
    '韩梅梅': {'成绩': '95', '实验班': False},
}
print(class1['李雷'])
print(class1['李雷']['成绩'])
```

## 9. 字典常见方法

### 9.1 .pop(key)

删除特定的键对值。

```python
# 用一个字典表示一个学生信息
student = {'name': 'lilei', '成绩': '98', '实验班': True}
print(student)
student.pop('实验班')  # 必须填写要删除的 key
print(student)

# ---output---
{'name': 'lilei', '成绩': '98', '实验班': True}
{'name': 'lilei', '成绩': '98'}
```

### 9.2 .keys()

获取字典中所有的键。

```python
student = {'name': 'lilei', '成绩': '98', '实验班': True}
keys = student.keys()
print(keys)
print(list(keys))

# ---output---
dict_keys(['name', '成绩', '实验班'])
['name', '成绩', '实验班']
```

### 9.3 .values()

获取字典中所有的值。

```python
student = {'name': 'lilei', '成绩': '98', '实验班': True}
values = student.values()
print(values)
print(list(values))


# ---output---
dict_values(['lilei', '98', True])
['lilei', '98', True]
```

### 9.4 .items()

获取字典的键对值。

```python
student = {'name': 'lilei', '成绩': '98', '实验班': True}
values = student.items()
print(values)
print(list(values))


# ---output---
dict_items([('name', 'lilei'), ('成绩', '98'), ('实验班', True)])
[('name', 'lilei'), ('成绩', '98'), ('实验班', True)]
```

### 9.5 in

1. 默认情况是判断 key 在字典中

```python
dict1 = {'name': '李雷', 'age': 19}
print('name' in dict1)

# ---output---
True
```

2. 使用 keys 实现纯粹判断

```python
dict1 = {'name': '李雷', 'age': 19}
print('name' in dict1.keys())

# ---output---
True
```

3. 使用 values 实现纯粹判断

```python
dict1 = {'name': '李雷', 'age': 19}
print('name' in dict1.values())

# ---output---
False
```





















