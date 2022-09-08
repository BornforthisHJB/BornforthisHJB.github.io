---
title: 01-CITS1401 Computational Thinking with Python
icon: python
time: 2022-09-08 17:12:16
author: AI悦创
isOriginal: true
category: 
    - Python 1v1
tag:
    - Python 1v1
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

# Project 1 Semester 2 2022

## Project 1: 

## Submission deadlines: 

**5:00 pm, Friday 16th September, 2022**

Value: **15%** of CITS1401.

*To be completed individually.*

You should construct a Python 3 program containing your solution to the following problem and submit 

your program electronically on Moodle. The name of the file containing your code should be your student 

ID e.g. 12345678.py. No other method of submission is allowed. Your program will be automatically run on 

Moodle for sample test cases provided in the project sheet if you click the “check” link. However, your 

submission will be tested thoroughly for grading purposes after the due date. Remember you need to

submit the program as a single file and copy-paste the same program in the provided text box. You have 

only one attempt to submit so don’t submit if you are not satisfied with your attempt. All open submissions 

at the time of the deadline will be automatically submitted. There is no way in the system to open the 

closed submission and reverse your submission.

You are expected to have read and understood the University's guidelines on academic conduct. In 

accordance with this policy, you may discuss with other students the general principles required to

understand this project, but the work you submit must be the result of your own effort. Plagiarism

detection, and other systems for detecting potential malpractice, will therefore be used. Besides, if what 

you submit is not your own work then you will have learnt little and will therefore, likely, fail the finalexam.

You must submit your project before the deadline listed above. Following UWA policy, a late penalty of 5% 

will be deducted for each day (or part day), after the deadline, that the assignment is submitted. No 

submissions will be allowed after 7 days following the deadline except approved special consideration 

cases.

---

**Overview**

Face recognition (FR) is one the most widely known and used non-intrusive biometric which helps in 

identifying people. Given the identity of a known person, the goal of an FR system is to recognize the same 

person in a different scenario, for example while displaying a different expression. You can read this paper 

to understand more about FR under different expressions

Your task is to help the researchers in analysing eight geodesic (surface) and eight 3D Euclidian distances 

between a few facial landmarks across four expressions **'Neutral', 'Angry', 'Disgust', 'Happy'**. These 

distances on one face (in Neutral expression) can then be used to calculate similarity with the same face in 

different expressions or with other faces in the data set to see which faces are closer to (or look like) the 

reference face. Table 1 provides the details of each landmark while Figure 1 shows their location on the 

face. Table-2 gives you the details of the distances which will be used. 

The attached csv (comma separated values) file has the eight geodesic and 3D Euclidian distances for the 

four expressions mentioned above for each person. For the sake of simplicity, the **Distance** numbers are 

given instead of their names. For example, *Inner-canthal width* is distance number 1 and Lower jaw width

is distance number 8. Yourtask istowrite a programwhich fulfills the following requirements. 

**Table 1** : Details of the Facial landmarks

![image-20220908192014220](./01-CITS1401-Computational-Thinking-with-Python.assets/image-20220908192014220.png)

![image-20220908192104211](./01-CITS1401-Computational-Thinking-with-Python.assets/image-20220908192104211.png)

**Requirements (i.e. what your program should do)**

**Input:**

Your program must define the function **main** with the following syntax:

def main(csvfile, adultID, Option):

The input arguments to this function are:

- csvfile: The name oftheCSVfilecontaining the data of individuals which needs to be analysed.

| Adult ID | Expression | Distance | GDis        | LDis        |
| -------- | ---------- | -------- | ----------- | ----------- |
| E001     | Neutral    | 1        | 48.44795743 | 32.13047933 |

The first row of the CSV file contains the headers “Adult ID”, “Expression”, “Distance”, “GDis” and 

“LDis”. From the second row, the first value of each row contains the de-identified adult ID, the 

expression displayed by the face, distance number (refer to Table-2), the geodesic distance and 

the 3D Euclidean distance. We do not have prior knowledge about the number of subjects we 

have to analyse (i.e. the number of rows) that the CSV file contains. Adult ID and Expression are 

strings, Distance is an integer while the remaining values are floats.

- adultID: The ID number of the adult we have to analyse. Remember that the ID is a string and 

    is case sensitive.

- Option: The input argument that decides the type of analysis required. It can take only one of

    the two string inputs: “stats” or “FR”. Ifthe third input argument is “stats”, then the objective

    of the program is to carry out some statistical analysis of the adult whose ID is given in the second 

    argument. Otherwise, if the third input argument is “FR” then the objective is to perform face 

    recognition by calculating the cosine similarity between the reference ID and other subjects.

**Output:**

The function is required to return the following outputs in the order provided below:

When the third input argument is *“stats”* then for the adult given in the input argument “adultID”

1. **OP1**- A list of lists containing the minimum (non-zero) and maximum GDis and LDis of each distance 

    across the four expressions. For example, the minimum (non-zero) intercanthal width (geodesic and 3D 

    Euclidean) in Neutral, Angry, Disgust and Happy expressions. There will be 8 lists inside the main list 

    and each list will have four elements in the following order : [minimum GDis, maximum GDis, minimum 

    LDis, maximum LDis]. The distances must be in the same order as given in Table-2.

2. **OP2**- A list of lists containing the difference between the geodesic and 3D Euclidean distances for each 

    expression. There will be 4 lists inside the main list and each list will have eight elements.

3. **OP3**- A list containing the **average** geodesic distance of the eight distances across the four expressions. 

    This list will have 8 elements.

4. **OP4**- A list containing the **standard deviation** of the 3D Euclidean distance of the eight distances across 

    the four expressions. This list will have 8 elements. The formula to calculate standard deviation is 

    provided at the end of this project sheet.

When the third input argument is “FR”:

You will calculate the cosine similarity between the geodesic distances of the neutral expression of 

reference adultID and the geodesic distances of the remaining expressions of the same ID as well as the 

neutral expressions of the remaining subjects in the dataset. Your output will be:

1. The ID of the person with which the reference face has the maximum cosine similarity, and
2. The maximum cosine similarity value. The formula to calculate cosine similarity is provided at the end of this project sheet.

All returned lists should have the values in order. For example, for OP2, the main list has 4 sub-lists which 

should be ordered according to the expressions **'Neutral', 'Angry', 'Disgust', 'Happy'.** Inside each sub-list 

are 8 elements for the distances which must be ordered as per Table-2. All returned numeric outputs (both in lists and individual) must contain values rounded to four decimal places (if required to be rounded off). 

Do not round the values during calculations. Instead round them only at the time when you save them into the final output variables.

## Examples:

Download the **ExpData_Sample.csv** file from the folder of Project 1 on LMS or Moodle. Some examples of how you can call your program from the Python shell (and examine the results it returns) are:

```python
>>> OP1,OP2,OP3,OP4 = main('ExpData_Sample.csv','E001','stats')
>>> OP1 
[[45.0087, 48.448, 29.9972, 32.9404], [104.1724, 110.913, 93.9636, 98.5776], [33.9933, 39.7572, 34.695, 40.0872], [49.5445, 66.477,31.0483, 34.1107], [5.5607, 9.7036, 5.4345, 9.3448], [7.4147, 8.9331, 7.4147, 8.7645], [150.0258, 175.289, 118.1052, 127.0695], [137.8113, 154.4196, 107.0492, 111.6436]]
```

```python
>>> OP2
[[16.3175, 10.2088, -0.5075, 34.6928, 0.3588, 0.0187, 48.2195, 46.5544], 
[15.2932, 12.3354, -0.33, 18.4962, 0.1669, 0.1686, 39.2716, 45.8233], 
[13.1529, 9.3969, -0.7016, 27.0089, 0.3791, 0.0, 39.5195, 36.9674], 
[15.4137, 10.9684, -0.6347, 24.5052, 0.1262, 0.2101, 31.9206, 26.9959]]
```

```python
>>> OP3
[46.7753, 106.8638, 37.9698, 58.3879, 7.5469, 8.1489,160.8882, 148.6113]
```

```python
>>> OP4
[1.0775, 1.6565, 2.2229, 1.1442, 1.408, 0.6276, 3.5032, 1.8129]
```

```python
>>> ID,cossim = main('ExpData_Sample.csv','E001','FR')
```

```python
>>> ID
'A004'
```

```python
>>> cossim
0.9992
```

## 第一阶段答案

### 读取

首先要解决文件读取：

```python
path = "data/ExpData_Sample.csv"
f = open(path, "r")
content = f.read()
# print(content)
content_lst = content.split("\n")
```

接下来，把每列的数据处理出来，以便后续操作：

```python
# for text in content_lst[1:]:
for text in content_lst:
#     print(text.split(","))
    list_text = text.split(",")
    if len(list_text) == 5:
        ID, Expression, Distance, Gdis, Ldis = list_text
        if Distance.replace(".", "").isdigit():
            ID, Expression, Distance, Gdis, Ldis = ID, Expression, float(Distance), float(Gdis), float(Ldis)
```

> 上面为了去除第一行的 head 使用的方法为：判断是否为纯数字。我更推荐下面编写成函数所用的代码方法，切片提取。`content_lst[1:]`。

写代码建议：先实现基本的然后再改写成函数。

```python
def main(csvfile, adultID="", Option=""):
    """
        csvfile: 文件路径
        adultID: 用户 ID
        Option：用户操作
        data_lst: 初步读取数据且处理的结果
    """
    data_lst = []
    f = open(csvfile, "r")
    content_lst = f.read().split("\n")
    f.close()
    for text in content_lst[1:]:
        list_text = text.split(",")
        if len(list_text) == 5:
#             ID, Expression, Distance, Gdis, Ldis = list_text[0], list_text[1], float(list_text[2]), float(list_text[3]), float(list_text[4])
            data_lst.append([list_text[0], list_text[1], float(list_text[2]), float(list_text[3]), float(list_text[4])])
    return data_lst
#     return opt1, "", "", "" 
    
            
path = "data/ExpData_Sample.csv"
main(path)
```

这里处理的数据的逻辑是把每个数据按原本的数据来进行修改。「列表嵌套」

```python
def main(csvfile, adultID="", Option=""):
    """
        csvfile: 文件路径
        adultID: 用户 ID
        Option：用户操作
        data_lst: 初步读取数据且处理的结果
    """
    data_lst = []
    f = open(csvfile, "r")
    content_lst = f.read().split("\n")
    f.close()
    for text in content_lst[1:]:
        list_text = text.split(",")
        if len(list_text) == 5:
            data_lst.append([list_text[0], list_text[1], int(list_text[2]), float(list_text[3]), float(list_text[4])])
    # 筛选出所需要处理的数据，并存入 select_list 列表
    select_list = []
    for text_lst in data_lst:
        # if adultID == text_lst[0]:
        if adultID in text_lst:
            select_list.append(text_lst)
#     print(select_list)
    # 寻找 min_Gdis, max_Gdis, min_Ldis, max_Ldis 共有两两种方法
    # 方法一：使用判断 if
#     min_Gdis, max_Gdis, min_Ldis, max_Ldis = select_list[0][3], select_list[0][3], select_list[0][4], select_list[0][4]
    # 最简单、容易理解的是使用 list
    Gdis_lst_1 = []
    Gdis_lst_2 = []
    Gdis_lst_3 = []
    Gdis_lst_4 = []
    Gdis_lst_5 = []
    Gdis_lst_6 = []
    Gdis_lst_7 = []
    Gdis_lst_8 = []
    for s_detail in select_list:
        if 1 in s_detail:
            Gdis_lst_1.append(s_detail[3])
#             Gdis_lst.append(s_detail) # 快速验证代码是否实现
        elif 2 in s_detail:
            Gdis_lst_2.append(s_detail[3])
        elif 3 in s_detail:
            Gdis_lst_3.append(s_detail[3])
        elif 4 in s_detail:
            Gdis_lst_4.append(s_detail[3])
        elif 5 in s_detail:
            Gdis_lst_5.append(s_detail[3])
        elif 6 in s_detail:
            Gdis_lst_6.append(s_detail[3])
        elif 7 in s_detail:
            Gdis_lst_7.append(s_detail[3])
        else:
            Gdis_lst_8.append(s_detail[3])
            
#     print(Gdis_lst)
    print(max(Gdis_lst_1), min(Gdis_lst_1))
    print(max(Gdis_lst_2), min(Gdis_lst_2))
    print(max(Gdis_lst_3), min(Gdis_lst_3))
    print(max(Gdis_lst_4), min(Gdis_lst_4))
    print(max(Gdis_lst_5), min(Gdis_lst_5))
    print(max(Gdis_lst_6), min(Gdis_lst_6))
    print(max(Gdis_lst_7), min(Gdis_lst_7))
    print(max(Gdis_lst_8), min(Gdis_lst_7))
            
path = "data/ExpData_Sample.csv"
main(path, adultID="A002")
```





### OP1



## Assumptions:

Your program can assume the following: 

- Anything that is meant to be a string (i.e. header row) will be a string, and anything that is meant to be a number (i.e. data) will be a number.
- The order of columns in each row will follow the order of the headings provided in the first row. 
- The data of each individual adult will always be contiguous. It will never be spread out randomly.
- The data for each expression will always be contiguous and in the order: **'Neutral', 'Angry', 'Disgust',** **'Happy'.**
- The data for distance may or may not be in order as in Table-2. For example, it is possible that the 6th distance of a particular expression is listed first and the 1st distance is listed last.
- Distances can never be negative or zero. If any distance is negative or equal to zero, then replace it with 50.
- No data will be missing in the csv file.
- The **main()** function will always be provided with valid input parameters.
- The formula for standard deviation and for calculating cosine similarity can be found at the end of the project sheet.

![image-20220908182040558](./01-CITS1401-Computational-Thinking-with-Python.assets/image-20220908182040558.png)











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