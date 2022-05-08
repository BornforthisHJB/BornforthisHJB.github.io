---
title: Python3 sorted() 函数
date: 2022-02-25 18:39:03.0
updated: 2022-03-30 23:30:42.583
url: /archives/628.html
categories: - technolog | Python
tags: 
---



## 描述

**sorted()** 函数对所有可迭代的对象进行排序操作。

> **sort 与 sorted 区别：** sort 是应用在 list 上的方法，sorted 可以对所有可迭代的对象进行排序操作。 list 的 sort 方法返回的是对已经存在的列表进行操作，而内建函数 sorted 方法返回的是一个新的 list，而不是在原来的基础上进行的操作。

## 语法

sorted 语法：

```Python
sorted(iterable, key=None, reverse=False)  
```

参数说明：

*   iterable -- 可迭代对象。
*   key -- 主要是用来进行比较的元素，只有一个参数，具体的函数的参数就是取自于可迭代对象中，指定可迭代对象中的一个元素来进行排序。
*   reverse -- 排序规则，reverse = True 降序 ， reverse = False 升序（默认）。

## 返回值

返回重新排序的列表。

## 实例

以下实例展示了 sorted 的最简单的使用方法：

```python
>>> sorted([5, 2, 3, 1, 4])
[1, 2, 3, 4, 5]                      # 默认为升序
```

你也可以使用 list 的 `list.sort()` 方法。这个方法会修改原始的 list（返回值为 None）。通常这个方法不如 `sorted()` 方便-如果你不需要原始的 list， `list.sort()` 方法效率会稍微高一些。

```python
>>> a=[5,2,3,1,4]
>>> a.sort()
>>> a
[1,2,3,4,5]
```

另一个区别在于 `list.sort()` 方法只为 list 定义。而 `sorted()` 函数可以接收任何的 iterable。

```python
>>> sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'})
[1, 2, 3, 4, 5]
```

利用 key 进行倒序排序：

```python
>>> example_list = [5, 0, 6, 1, 2, 7, 3, 4]
>>> result_list = sorted(example_list, key=lambda x: x*-1)
>>> print(result_list)
[7, 6, 5, 4, 3, 2, 1, 0]
>>>
```

要进行反向排序，也通过传入第三个参数 reverse=True：

```python
>>> example_list = [5, 0, 6, 1, 2, 7, 3, 4]
>>> sorted(example_list, reverse=True)
[7, 6, 5, 4, 3, 2, 1, 0]
```

以下是个更复杂的实例，对奖牌榜就行排序，数据里面包含了15个国家的金、银、铜数据，使用 **\\n** 作为分隔符：

```python
s = "德国 10 11 16\n意大利 10 10 20\n荷兰 10 12 14\n法国 10 12 11\n英国 22 21 22\n中国 38 32 18\n日本 27 14 17\n美国 39 41 33\n俄罗斯奥委会 20 28 23\n澳大利亚 17 7 22\n匈牙利 6 7 7\n加拿大 7 6 11\n古巴 7 3 5\n巴西 7 6 8\n新西兰 7 6 7"
stodata = s.split('\n',-1)

# 使用sorted
para = {}

for line in range(len(stodata)):
    # 每一行数据
    data = stodata[line].split(' ')
    print(data)
    # 组装数据结构para={'China': [], 'Russia': []}
    para[data[0]] = [int('-' + i) for i in data[1:]]
# 开始排序(x[1]代表奖牌数目, x[0]代表国家)
new_para = sorted(para.items(), key=lambda x: (x[1], x[0]))
print()

c=[]
for i in new_para:
     c.append((i[0]))
for j in range(15):
    print(f"{(j+1):2d}  {c[j]}")
```

输出结果为：

```python
['德国', '10', '11', '16']
['意大利', '10', '10', '20']
['荷兰', '10', '12', '14']
['法国', '10', '12', '11']
['英国', '22', '21', '22']
['中国', '38', '32', '18']
['日本', '27', '14', '17']
['美国', '39', '41', '33']
['俄罗斯奥委会', '20', '28', '23']
['澳大利亚', '17', '7', '22']
['匈牙利', '6', '7', '7']
['加拿大', '7', '6', '11']
['古巴', '7', '3', '5']
['巴西', '7', '6', '8']
['新西兰', '7', '6', '7']

 1  美国
 2  中国
 3  日本
 4  英国
 5  俄罗斯奥委会
 6  澳大利亚
 7  荷兰
 8  法国
 9  德国
10  意大利
11  加拿大
12  巴西
13  新西兰
14  古巴
15  匈牙利
```