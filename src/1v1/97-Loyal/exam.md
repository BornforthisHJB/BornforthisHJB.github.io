---
title: THE HONG KONG POLYTECHNIC UNIVERSITY DEPARTMENT OF COMPUTING EXAMINATION comp final exam 23-24
date: 2024-12-05 17:31:10
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

> 香港理工大学计算机系模拟考试卷

## Section B: Fill in the Blanks Questions

### Question 17

What is the output of the following program?

```python
str1 = "COMP1012"
print(str1[1:4], str1[:2], str1[2:], str1[0:-2], str1[:-1])
```



### Question 18

Fill in the blanks in the program to output the following pattern.

To help you understand the format, we VISUALIZED the SPACES using a marker ▓.

```python
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

::: code-tabs

@tab Code1

```python
n = __________
num = 1
for i in range(__________):
    num = 1
    for j in range(__________):
        print(__________, end=__________)
        num = num + 1
    print("\r")
```

@tab Solution

```python
n = 5
num = 1
for i in range(n):
    num = 1
    for j in range(i + 1):
        print(num, end=" ")
        num = num + 1
    print("\r")
```

@tab Code2

```python
"""
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
"""
n = 5
num = 1
for i in range(n):  # 控制层数
    for j in range(1, i + 2):
        print(j, end=' ')
    print("\r")
```

@tab Code3

```python
n = 5
num = 1
for i in range(n):  # 控制层数
    for j in range(i + 1):
        print(j, end=' ')
    print("\r")
```



:::



### Question 19

Write a Python program to get a user-defined input (input from the user) of temperature and convert a given temperature to Celsius or Fahrenheit. The user should input the temperature in the format `{d} {s}`.

**For the output:**

The input temperature and the temperature converted to Celsius should be stored in a file called `file1.txt` and the input temperature and the temperature converted to Fahrenheit should be stored in a file called `file2.txt`.

**Rules:**

1. The input format for `{s}` could be lower or upper case letters.  
   **Example**: F or f and C or c.

2. You should use appropriate equations as from the below figure and you should only write one program which incorporates all the above features.

3. You must implement all the logic by yourself instead of using third-party libraries (e.g., NumPy). Otherwise, you will get a zero mark for this task even if the result is correct.

**Equation:**  


$$
\frac{C}{5} = \frac{F - 32}{9}
$$

$$
C = \frac{5 \cdot (F - 32)}{9}
\\
F = \frac{9 \cdot C + (32 \cdot 5)}{5}
$$



**Sample Input and Output 1**

```python
The input temperature is 45f  
The temperature in Celsius is 7 degrees.

# output
Input the temperature you like to convert?  
45f
```



**Sample Input and Output 2**

```python
The input temperature is 60C  
The temperature in Fahrenheit is 140 degrees.

# output
Input the temperature you like to convert?  
60C
```





### Question 20



## Grammar

### 1. for loop

::: tabs

@tab 基础语法

### 1. 循环遍历列表

```python
lst = ['a', 'b', 'c', 'd', 'e']
for i in lst:
    print(i)
```

### 2. 把列表里面的所有元素进行平方

```python
lst = [10, 221, 302, 41, 5, 6]
n = 0
for i in lst:
    # print(i)
    lst[n] = i ** 2
    n = n + 1
print(lst)
```

@tab range

### 1. range 基本语法

```python
# for i in range(10):
#     print(i)
# for i in range(3, 10):
#     print(i)
for i in range(0, 10, 2):
    print(i)
```

### 2. 0~100 之和

```python
n = 0
for i in range(101):
    n += i
print(n)
```

:::

### 2. if

::: tabs

@tab 基础语法

```python
user_gender = input("请输入您的性别(F/M):")

if user_gender == "F":
    print("你是萌妹子")
elif user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```

@tab 多个if

```python
user_gender = input("请输入您的性别(F/M):")

if user_gender == "F":
    print("你是萌妹子")
if user_gender == "M":
    print("你是糙汉子")
if user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```

@tab 0～100奇偶分别之和

```python
m = 0
n = 0
for i in range(101):
    if i % 2 != 0:
        m += i

    elif i % 2 == 0:
        n += i
print(m, n)
```

@tab 判断用户输入的数据是否是奇数 or 偶数

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
    if number % 2 == 0:
        print(f"{number} 是偶数。")
    else:
        print(f"{number} 是奇数。")
elif number.isdigit() == False:
    print("不是纯数字")
```

```python
# 获取用户输入
number = input("请输入一个整数: ")

# 使用模运算符来判断奇数还是偶数
if number.isdigit():
    if number % 2 == 0:
        print(f"{number} 是偶数。")
    else:
        print(f"{number} 是奇数。")
else:
    print("不是纯数字")
```

```python
# 获取用户输入
number = input("请输入一个整数: ")

# 使用模运算符来判断奇数还是偶数
if not number.isdigit():
    print("不是纯数字")
elif number % 2 == 0:
    print(f"{number} 是偶数。")
else:
    print(f"{number} 是奇数。")
```

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





:::



### 3. 文件操作

::: tabs

@tab 文件读取

### 一次性读取全部内容

```python
f = open("text.txt", mode="r")
content = f.read()  # 一次性读取全部内容
print(content)
f.close()
```

```python
The input temperature is 45f  
The temperature in Celsius is 7 degrees.

# output
Input the temperature you like to convert?  
45f
```

### 逐行读取

```python
f = open("text.txt", mode="r")
content = f.readlines()
print(content)
f.close() 
```

```python
['The input temperature is 45f  \n', 'The temperature in Celsius is 7 degrees.\n', '\n', '# output\n', 'Input the temperature you like to convert?  \n', '45f']
```

@tab 文件写入

```python
f = open("text.txt", mode="w", encoding="utf-8")
f.write("哈哈哈哈\n\n")
f.write("黑河\n\n")
f.write("呵呵呵")

f.close()

"""
哈哈哈哈哈


黑河

呵呵呵
"""
```



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
