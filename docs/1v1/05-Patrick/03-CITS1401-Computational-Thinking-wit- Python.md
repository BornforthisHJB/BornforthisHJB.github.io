---
title: 03-CITS1401 Computational Thinking with Pytho
icon: python
time: 2022-10-18 12:34:35
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

**Project 2:** 

**Submission deadlines:** **5:00 pm, Friday 21****st** **October 2022**

Value: **20%** of CITS1401.

*To be completed individually.*

You should construct a Python 3 program containing your solution to the following problem and submit your program electronically on Moodle. The name of the file containing your code should be your student ID e.g. 12345678.py. No other method of submission is allowed. Your program will be  automatically run on Moodle for sample test cases provided in the project sheet if you click the  “check” link. However, your submission will be tested thoroughly for grading purposes after the due  date. Remember you need to submit the program as a single file and copy-paste the same program in the provided text box. You have only one attempt to submit so don’t submit if you are not satisfied with your attempt. All open submissions at the time of the deadline will be automatically submitted. There is no way in the system to open the closed submission and reverse your submission. 

>   你应该构造一个包含以下问题解决方案的 Python 3程序，并在 Moodle 上以电子方式提交你的程序。包含你的代码的文件名应该是你的学生 ID，例如12345678.py。不允许以其他方式提交。如果单击“检查”链接，您的程序将自动在Moodle上运行，以获得项目表中提供的示例测试用例。但是，在截止日期之后，您的提交将被彻底测试，以达到评分目的。记住，您需要将程序作为单个文件提交，并在提供的文本框中复制粘贴相同的程序。你只有一次提交的尝试，所以如果你对你的尝试不满意，就不要提交。截止日期时所有公开提交的作品将自动提交。系统中没有办法打开已关闭的提交并撤销您的提交。

You are expected to have read and understood the University's guidelines on academic conduct. Following this policy, you may discuss with other students the general principles required to understand this project, but the work you submit must be the result of your own effort. Plagiarism detection, and other systems for detecting potential malpractice, will therefore be used. Besides, if what you submit is not your own work then you will have learned little and will, therefore, likely, fail the final exam.

>   你必须阅读并理解学校的学术行为准则。按照这个政策，你可以和其他学生讨论理解这个项目所需的一般原则，但你提交的作业必须是你自己努力的结果。因此，将使用剽窃检测和其他检测潜在渎职行为的系统。此外，如果你提交的不是你自己的作业，那么你就会学到很少，因此，很可能期末考试不及格。

You must submit your project before the submission deadline listed above. Following UWA policy, a late penalty of 5% will be deducted for each day (24 hours), after the deadline, that the assignment is submitted. No submissions will be allowed after 7 days following the deadline except approved special consideration cases.

>   您必须在上述提交截止日期之前提交您的项目。根据UWA的政策，在提交作业的截止日期之后，每天(24小时)将扣除5%的滞纳金。除获批准的特别考虑个案外，申请人不得在截止日期后7天内提交任何资料。

**Overview**

Impressed by your performance in Project-1, the scientists at UWA seek your help in another exciting project. Historically, facial asymmetry and distances between certain facial points (also called) landmarks have been linked to facial beauty and attractiveness (you can read this paper to find out more). This project will help the scientists in measuring facial asymmetry and distances between certain landmarks on the face.

>   你在项目1中的表现给UWA的科学家们留下了深刻的印象，他们在另一个令人兴奋的项目中寻求你的帮助。从历史上看，面部的不对称和某些面部点(也称为)之间的距离与面部的美丽和吸引力有关(你可以阅读这篇文章了解更多)。这个项目将帮助科学家测量面部的不对称性和面部某些地标之间的距离。

Your task is to find out facial asymmetry between 6 significant facial landmarks and also calculate 6 linear distances between certain landmarks on the face. Facial asymmetry is calculated by flipping the face on its longer axis and subtracting the mirrored landmark values from the original. Table 1 provides the details of each landmark, while Figures 1 and 2 show their location on the original and mirrored face. Table-2 gives you the details of the distances to be calculated. Remember these distances are between the landmarks mentioned in Table-1. Since the face is flipped on it axis, the asymmetry at the nose tip must always be zero i.e. 3D linear distance between “Prn” on original and mirrored faces is zero. We will use the asymmetry of this landmark as a control point.

>   你的任务是找出6个重要面部标志之间的面部不对称，并计算出脸部某些标志之间的6个线性距离。面部不对称的计算方法是在较长的轴上翻转面部，并从原始的图像中减去镜像的地标值。表1提供了每个地标的详细信息，而图1和图2显示了它们在原始和镜像表面上的位置。表2给出了要计算的距离的详细信息。记住这些距离是表1中提到的地标之间的距离。因为脸在它的轴上翻转，鼻尖的不对称必须总是零，即“Prn”在原始和镜像脸之间的3D线性距离为零。我们将利用这个地标的不对称性作为控制点。













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

