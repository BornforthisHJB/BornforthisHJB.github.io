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