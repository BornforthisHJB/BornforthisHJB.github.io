---
title: Exam：Foundations of Computing（COMP10001_2022_SM2）
icon: python
time: 2022-11-01 11:52:13
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - Python 1v1
    - 澳洲大学一对一
    - 墨尔本大学
tag:
    - 1v1
    - Python 1v1
    - 澳洲大学一对一
    - 墨尔本大学
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
editLink: false
backToTop: true
toc: true
---

This assignment is locked until Nov 1 at 15:00.

> 此作业锁定到11月1日15:00。



## Question 2

An ngram is a sequence of symbols (such as characters) of length n. Each string can be represented as a sequence of n-grams. For example, `'cat'` can be represented as `'c'`, `'a'`, `'t'` (1-grams, or unigrams), or as `'c'`,` 'ca'`, `'at'`, `'t'` (2-grams, or bigrams). [Note that the first bigram of the word `'cat'` is `'c'`, i.e., a space and c, and the last bigram of the word `'cat'` is `'t'`, i.e., t and a space.]

> 一个 ngram 是长度为 n 的符号序列(如字符)。每个字符串都可以表示为 n 个 gram 的序列。例如，`'cat'` 可以表示为 `'c'`， `'a'`， `'t'` (1克，或字母组合)，或表示为 `'c'`， `'ca'`， `'at'`， `'t'` (2克，或字母组合)。[请注意，单词 “cat” 的第一个重音是 “c”，即一个空格和 c，单词 “cat” 的最后一个重音是 “t”，即 t 和一个空格。]

The function `most_freq_ngrams(_file, nglen=1)` takes a file name _file and the ngram length nglen, processes the file, and returns the top 5 most common ngrams that have at least one symbol specified in the global variable PHONEMES.

> 函数 `most_freq_ngrams(_file, nglen=1)` 接受文件名_file和ngram长度nglen，处理该文件，并返回在全局变量phoneme中至少有一个符号的前5个最常见的ngram。

The input file contains poetry pieces as well as some empty lines or lines with auxiliary information (AABB, ABAB ... etc.). Here is a sample input file (Q2poems.txt):

> 输入文件包含诗歌片段以及一些空行或带有辅助信息的行(AABB, ABAB…等等)。下面是一个示例输入文件(Q2poems.txt):

**Q2poems.txt**

```txt
ABAB

Bid me to weep, and I will weep
While I have eyes to see
And having none, yet I will keep
A heart to weep for thee

ABCB
All in a hot and copper sky
The bloody Sun, at noon,
Right up above the mast did stand,
No bigger than the Moon.

AABB

New life, a little baby, a little star,
The world awaits you near and far
With guidance and loving care
That will keep you safe and happy there.

ABBA

All is luminous, self-existent light
And yet we see it not
Being in mind games caught
Look again hermit, with spherical sight
```

The function reads the file line by line skipping empty lines as well as those that only contain a single word (assuming words are separated by a whitespace character).

> 该函数通过跳过空行和只包含一个单词的行(假设单词由空格字符分隔)来读取文件行。

For example,

```python
>>> most_freq_ngrams('Q2poems.txt')
[('e', 50), ('a', 32), ('i', 30), ('o', 23), ('u', 8)]

>>> most_freq_ngrams('Q2poems.txt', 2)
[('e ', 17), (' a', 12), ('he', 9), ('ee', 8), ('an', 8)]

>>> most_freq_ngrams('Q2poems.txt', 5)
[(' and ', 5), (' weep', 3), (' will', 3), ('will ', 3), ('e    ', 3)]
```

As presented, the lines of the function are out of order in the window to the right. Put the lines in the correct order and introduce appropriate indentation. Note that as an additional constraint, your code must follow PEP8 and should not produce any PEP8 warnings when run.

> 如图所示，在右边的窗口中，函数的行顺序是乱的。把线条按正确的顺序排列，并引入适当的缩进。注意，作为一个附加约束，您的代码必须遵循PEP8，并且在运行时不应该产生任何PEP8警告。

Note: A Counter is a dict subclass, it is a collection where elements are stored as dictionary keys and their counts are stored as dictionary values. most_common(n) returns a list of the n most common elements and their counts from the most common to the least.

> 注意: Counter 是一个 dict 子类，它是一个集合，其中元素被存储为字典键，它们的计数被存储为字典值。Most_common(n)返回n个最常见元素的列表，以及它们从最常见到最不常见的计数。

```python
PHONEMES = 'iauoe'
def most_freq_ngrams(_file, nglen=1):
from collections import Counter
with open(_file, 'r') as reader:
line = ' ' * (nglen - 1) + line.strip() + ' ' * (nglen - 1)
ngrams = Counter()
if len(set(line[i:i + nglen]) & set(PHONEMES)) > 0:
ngrams[line[i:i + nglen]] +=1
for i in range(0, len(line) - nglen + 1):
if len(line) > 0 and ' ' in line:
for line in reader:
return ngrams.most_common(5)
```

![image-20221101121000208](./03-Exam-Foundations-of-Computing-COMP10001_2022_SM2.assets/image-20221101121000208.png)

### 答案

```python
from collections import Counter


def most_freq_ngrams(_file, nglen=1):
    PHONEMES = 'iauoe'
    ngrams = Counter()
    with open(_file, 'r') as reader:
        for line in reader:
            if len(line) > 0 and ' ' in line:
                line = ' ' * (nglen - 1) + line.strip() + ' ' * (nglen - 1)
                for i in range(0, len(line) - nglen + 1):
                    if len(set(line[i:i + nglen]) & set(PHONEMES)) > 0:
                        ngrams[line[i:i + nglen]] += 1

        return ngrams.most_common(5)


if __name__ == '__main__':
    r = most_freq_ngrams('Q2poems.txt')
    print(r)
    r = most_freq_ngrams('Q2poems.txt', 2)
    print(r)
    r = most_freq_ngrams('Q2poems.txt', 5)
    print(r)
```

## Question 4

for 编程 while

```python
def make_pack(weights, _max):
    weights.sort()

    for i in range(2, len(weights)):
        if weights[i] <= sum(weights[:i]):
            return []
    pack = []
    remaining = _max
    for item in weights[::-1]:
        if item <= remaining:
            pack.append(item)
            remaining = remaining - item
    return pack
```



## Question 6

The following function csvdict`(filename)` is intended to read a csv file with the given filename. The first line of the csv file contains the headings of each column in the file. Each subsequent line of the csv file contains an integer value for each column. You can assume that the csv file exists, is correctly formatted, it contains at least one column, it has at least one row of values in addition to the heading row, and each row has the correct number of values.

> 下面的函数csvdict ' (filename) '用于读取具有给定文件名的csv文件。csv文件的第一行包含文件中每个列的标题。csv文件的后续每一行都包含每个列的整数值。您可以假设csv文件存在，格式正确，至少包含一列，除标题行外至少有一行值，并且每行值的数量正确。

The function csvdict`(filename)` should return a dictionary, whose keys correspond to the headings of the columns in the csv file, and the value of each key is the integer sum of the values of the corresponding column.

> 函数 `csvdict'(filename)'` 应该返回一个字典，它的键对应于 csv 文件中列的标题，每个键的值是对应列值的整数和。

For example, if the csv file test `.csv` contains:

> 例如，如果 csv 文件test ' .csv '包含:

```python
col1, col2, col3
12, 2, 101
10, 3, 102
8, 4, 110
```

then csvdict`('test.csv')` will return:

```python
{'col1': 30, 'col2': 9, 'col3': 313}
```

Provide code to insert into each of the numbered boxes in the code below to complete the function as described. Note that your code will be evaluated at the indentation level indicated for each box.

> 提供代码，将其插入到下面代码中的每个编号框中，以完成所述的功能。请注意，您的代码将在每个框所指示的缩进级别上计算。

```python
import csv

def csvdict(filename):
    #    1 
    summary_dict = {}
    reader = csv.reader(open(filename))
    #    2 
        if line_count == 0:
            headings = line
            for val in line:
                #    3 
        else:
            for index in range(len(line)):
                #    4 
        line_count += 1  
#    5
```

![image-20221101122727959](./03-Exam-Foundations-of-Computing-COMP10001_2022_SM2.assets/image-20221101122727959.png)

### 答案

```python
import csv


def csvdict(filename):
    line_count = 0  # 1
    summary_dict = {}
    reader = csv.reader(open(filename))
    for line in reader:  # 2
        if line_count == 0:
            headings = line
            for val in line:
                summary_dict[val] = 0  # 3
        else:
            for index in range(len(line)):
                summary_dict[headings[index]] += int(line[index])  # 4
        line_count += 1
    return summary_dict  # 5


if __name__ == '__main__':
    r = csvdict("q6.csv")
    print(r)
```

## Question 7

Write a function brackets_match`(instring)` that takes a string as input, and returns True if all the brackets in instring match correctly, or False otherwise. You can assume that the input string contains only digits (i.e., '0123456789') and brackets (i.e., '(' and ')').

> 编写一个函数 brackets_match(instring)，它接受一个字符串作为输入，如果instring中的所有方括号都正确匹配则返回 True，否则返回False。您可以假设输入字符串只包含数字(即'0123456789')和括号(即'('和')')。

The brackets in the string are considered to match correctly if for every opening bracket '(' there is a matching closing bracket ')' later in the string, and conversely every closing bracket has a matching opening bracket earlier in the string.

> 如果字符串中后面的每个开始括号'('有一个匹配的结束括号')'，则认为字符串中的括号是正确匹配的，相反，每个结束括号在字符串中较早的时候都有一个匹配的开始括号。

Note that digits can appear anywhere in the string but can be ignored, and instring will always contain one or more brackets.

> 注意，数字可以出现在字符串中的任何位置，但可以忽略，instring 将始终包含一个或多个方括号。

For example:

```python
>>> brackets_match('()')
True
>>> brackets_match('(1)(2)')
True
>>> brackets_match('(1(3))')
True
>>> brackets_match(')((3)')
False
>>> brackets_match('(1)(56))')
False
>>> brackets_match('(1(')
False
```

### 答案

```python
def brackets_match(instring):
    left_parentheses = "("
    right_parentheses = ")"
    # left_parentheses_count = instring.count("(")
    # right_parentheses_count = instring.count(")")
    # if left_parentheses_count == right_parentheses_count:
    #     return True
    # return False
    detail_str = ""
    # sum_count = 0
    for s in instring:
        if not s.isdigit():
            detail_str += s
        else:
            pass
    # print("xxx:>>>", detail_str)
    if detail_str.count("()") != 0:
        # sum_count += detail_str.count("()")
        new_detail_str = detail_str.replace("()", "")
        if new_detail_str:
            if new_detail_str.count("()") != 0:
                # sum_count += new_detail_str.count("()")
                return True
            else:
                return False
        return True
    else:
        return False
    # print(detail_str)


if __name__ == '__main__':
    r1 = brackets_match('()')
    print(r1)
    r2 = brackets_match('(1)(2)')
    print(r2)
    r3 = brackets_match('(1(3))')
    print(r3)
    r4 = brackets_match(')((3)')
    print(r4)
    r5 = brackets_match('(1)(56))')
    print(r5)
    r6 = brackets_match('(1(')
    print(r6)
    r7 = brackets_match('(1())(1)')
    print(r7)
```

## Question 8

Write a function digisum`(num)` that takes a positive integer as its input num, and returns an integer containing a single digit, which is calculated as follows:

> 编写一个函数 digisum ' (num) '，它接受一个正整数作为输入num，并返回一个包含单个数字的整数，其计算方法如下:

- Your function should add up the digits  in num.

> 函数应该将num中的数字相加。

- If the resulting sum is in the range 0 to 9, i.e., the sum has a single digit, then return that sum.

> 如果结果的和在0到9的范围内，也就是说，这个和只有一个数字，那么返回这个和。

- Otherwise, the resulting sum has more than  one digit, so you need to repeat the process by adding up the digits in     the resulting sum.

> 否则，得到的和有不止一个数字，因此您需要通过将得到的和中的数字相加来重复这个过程。

- You need to keep repeating the process of calculating a new sum by adding up the digits in the previous sum until you reach a sum that has a single digit.

> 你需要不断重复计算一个新的和的过程，将前一个和中的数字相加，直到得到一个只有一个数字的和。

For example, if the input num is 8979, the sum of its digits is 8+ 9+7+9=33. Since this sum has more than one digit, we repeat by calculating the sum of its digits 3 + 3 = 6. Since this new sum has a single digit, we return the new sum 6.

> 例如，如果输入的数字是 8979，则其数字的和为 8+ 9+7+9=33。因为这个和不止一个数字，我们重复计算它的数字3 + 3 = 6的和。因为这个新的和只有一位数字，所以我们返回新的和6。

Similarly, if the input num is 999999999999993, the return value is 3, since 9+9+9+9+9+9+9+9+9+9+9+9+9+9+3 = 129, and 1+2+9 = 12, and 1+2 = 3.

> 类似地，如果输入数字为999999999999993，则返回值为3，因为9+9+9+9+9+9+9+9+9+9+9+9+9+9+3 = 129,1+2+9 = 12,1+2 = 3。

For example:

```python
>>> digisum(8979)
6
>>> digisum(999999999999993)
3
>>> digisum(88)
7
>>> digisum(6)
6
```

### 答案

```python
def parse(num):
    num_list = []
    while (num > 0):
        num_list.append(num % 10)
        num = num // 10
    return sum(list(reversed(num_list)))  # 将顺序倒过来


def digisum(num):
    if 0 <= num < 10:
        return num
    value = parse(num)
    while True:
        # print("xsxsxsxsxs", value)
        if 0 <= value < 10:
            # print("if:>>>", value)
            return value
        # else:
        value = parse(value)
        # print("xx", value)
            # break


if __name__ == '__main__':
    r1 = digisum(8979)
    print(r1)
    r2 = digisum(999999999999993)
    print(r2)
    r3 = digisum(88)
    print(r3)
    r4 = digisum(6)
    print(r4)
    r5 = digisum(4567)
    print(r5)
```



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
