---
title: Assignment # 2
icon: java
time: 2022-10-01 07:23:10
author: AI悦创
isOriginal: true
category: 
    - Java 1v1
    - web 1v1
    - 纽约大学一对一
tag:
    - Java 1v1
    - web 1v1
    - 纽约大学一对一
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

## POLICY & RULES

### ACADEMIC INTEGRITY

The Department of Computer Science believes that academic integrity is a core principle of education. According to the Center for Academic Integrity (www.academicintegrity.org), academic integrity begins as a commitment to five fundamental values: honesty, trust, fairness, respect and responsibility. These values begin with the individual and extend to others in the community of learning. In the classroom, they give rise to the following concrete but non-exhaustive rules for student behavior:

- Students are to do all assignments individually, with no collaboration or sharing of work, unless the instructor explicitly permits collaboration. If the instructor does not explicitly permit collaboration and one student shows or gives his/her work to another, then both students are considered to be cheating. Students may not use work provided by any person outside the class or by any external source such as the Web. Furthermore, students may not solicit other people to do assignments (in whole or in part) for them.
- When an instructor permits collaboration on an assignment, then collaboration is permitted only to the degree and in the respects that he/she specifies. Each assignment that is done collaboratively must state that it was done collaboratively and must list the collaborators.
- External sources, including published materials or material on the Web, may be used in assignments only to the extent permitted by the instructor. If such a source is used, the assignment must include an attribution to the source. Ideas, algorithms, text, code, and experimental results all require proper attribution.
- A student may not submit the same assignment to two different classes, whether in the same semester or in different semesters, without the explicit permission of both instructors.
- During an exam, students must not communicate in any way, nor use any materials or technology not explicitly permitted by the instructor. One student may not look at another student's test. If one student allows another student to look at his/her test, both students are considered to be cheating.
- A student may not attempt to gain possession of or look at an exam before the start of the exam.

Disciplinary actions can vary in severity and can result in probation or termination from the program. Students involved in academic misconduct incidents are no longer eligible for academic program support jobs (such as grader, tutor, etc.) in our department. See the CAS page on [academic integrity ](https://cas.nyu.edu/content/nyu-as/cas/academic-integrity.html)for more information.

## Introduction to Computer Science

::: center

## CSC1-UA- 0101

**Due date is 10/4 by 11:55 PM**

**Updated on 9/29**

**Methods are not required for this assignment!**

:::

## Code of Conduct

All assignments are graded, meaning we expect you to adhere to the academic integrity standards of NYU. To avoid any confusion regarding this, we will briefly state what is and isn’t allowed when working on an assignment.

Any document and program code that you submit must be fully written by yourself. You can, of course, discuss your work with fellow students, as long as these discussions are restricted to general solution techniques. Put differently, these discussions should not be about concrete code you are writing, nor about specific results you wish to submit. When discussing an assignment 

with others, this should never lead to you possessing the complete or partial solution of others, regardless of whether the solution is in paper or digital form, and independent of who made the solution. That means, you are also not allowed to possess solutions by someone from a different year or course, by someone from another university, or code from the Internet, etc. This also implies that there is never a valid reason to share your code with fellow students, and that there is no valid reason to publish your code online in any form.

Every student is responsible for the work they submit. If there is any doubt during the grading about whether a student created the assignment themselves (e.g. if the solution matches that of others), we reserve the option to let the student explain why this is the case. In case doubts remain, or we decide to directly escalate the issue, the suspected violations will be reported to the academic administration according to the policies of NYU (see [https://cs.nyu.edu/home/undergrad/policy.html](https://cs.nyu.edu/home/undergrad/policy.html)).



## Assignment # 2 Details

**Part 1 (50 points): Weaving a Kilim Carpet Application Weaving a Kilim Carpet Application using loops and nested loops: Save as Part1.java**

> 第1部分(50分):使用循环和嵌套循环编织 Kilim Carpet 应用程序:保存为 Part1.java

Kilims are woven carpets which generally use symmetrical designs. For this assignment, instead of using a loom, wool, and a shuttle, we are asking you to produce a pattern of your own design using loops and nested loops. 

> Kilims 是一种编织地毯，通常采用对称的设计。在这个作业中，我们不是使用织布机、羊毛和梭子，而是要求你使用循环和嵌套循环来制作你自己设计的图案。

Write a program to weave **your own Kilim carpet** with 30 rows by 30 columns. The patterns should be **designed by you (it should be different than the design of carpet below**). **Your carpet though MUST include at least one diamond shape, checkerboards, and squares** (See example below for these patterns). **Also, use other characters such as $ or % or + or @ rather than a “\*” to weave the rug. Make sure not to copy the entire pattern from the below rug or copy patterns from another student**! Show your creativity by weaving a different design while meeting the requirements mentioned above. You will get extra credit for excellent design and added features.

> 编写一个程序来编织你自己的 30 行 30 柱的 Kilim 地毯。图案应该是你自己设计的(应该和下面地毯的图案不一样)不过，你的地毯至少要有一种菱形、棋盘格和正方形的图案(见下面的例子)。此外，使用其他字符，如 $ 或 % 或 + 或 @ 而不是“*”来编织地毯。确保不要从下面的地毯复制整个图案或从其他学生复制图案!在满足上述要求的同时，通过编织不同的设计来展示你的创造力。优秀的设计和增加的功能将获得额外的学分。

**Here is a 12th Century Moroccan Kilim Carpet sample pattern made of 25 rows and 36 columns:**

**(This design is made up of stars (asterisks) and spaces, please ignore the border, color, and the shading effect):**

> 这是一张12世纪的摩洛哥Kilim地毯样品图案，25行36柱(这个图案由星号和空格组成，请忽略边框、颜色和阴影效果):

![image-20221002115755664](./06-Weaving-a-Kilim-Carpet-Application.assets/image-20221002115755664.png)



**Here are the requirements:** 

- Every print statement should print no more than one character such as '*' or one space ' '.  Do not use statements such as: `print("************************************")` but rather use loops for every repetition. 

> 每个打印语句应该打印不超过一个字符，例如'*'或一个空格' '。不要使用语句如: `print ("************************************")` 而是每个重复循环使用。

- Use loops and nested loops to produce these patterns. 

> 使用循环和嵌套循环来生成这些模式。

- You can't use control structure such as switch or if/ else if /else in your program.

> 不能在程序中使用switch或if/ else if/ else等控制结构。

- You have to design your own carpet (different than the carpet from above). 

> 你必须自己设计地毯(与上面的地毯不同)。

- Your carpet MUST include at least one diamond shape, checkerboards, and squares. (see example from above for these patterns).

> 你的地毯至少要有一种菱形、棋盘格和正方形。(参见上面的例子了解这些模式)。

- Some of the patterns are repeated; you might want to first isolate the elements in the design (eg. the first two rows, the "checkerboard" elements, the triangle) and then combine them to form the "rug". 

> 有些模式是重复的;你可能想要首先分离设计中的元素(例如。前两行，“棋盘”元素，三角形)，然后将它们组合成“地毯”。

- If the Dimond is too difficult to produce as one pattern, you can break it into 4 triangles or apply any solution you see fit as long you comply with the assignment’s requirements. 

> 如果菱形很难制作成一个图案，你可以把它分成4个三角形，或者应用任何你认为适合的解决方案，只要你符合作业的要求。

## 解题

### 1. 一行一行分析「第一行」

![image-20221002165218970](./06-Weaving-a-Kilim-Carpet-Application.assets/image-20221002165218970.png)

上面的 `*` 有几个？—— 36

```python
In [1]: s = len("中米米米米米米米米米米米本米米本米米本米米本米米本米米本米米本米米本米米") # 长度和上图是一样的，但是我使用图片识别直接提取的，所以字符串内容你不用管。

In [2]: s
Out[2]: 36
```

```java
public class Example2 {
    public static void main(String[] args) {
        for (int i = 0; i < 36; i++) {
            System.out.print("*");
        }
        System.out.println("");  // 换行
    }
}
```

输出：

```java
************************************

```

### 2. 第二行

![image-20221002170100625](./06-Weaving-a-Kilim-Carpet-Application.assets/image-20221002170100625.png)

3 * 6 = 18

![image-20221002171127155](./06-Weaving-a-Kilim-Carpet-Application.assets/image-20221002171127155.png)

```java
public class Example2 {
    public static void main(String[] args) {
        // 第一行
        for (int i = 0; i < 36; i++) {
            System.out.print("*");
        }
        System.out.println("");  // 换行

        // 第二行 显而易见使用循环嵌套
        for (int i = 0; i < 3; i++) {
            System.out.print("*");
        }
        for (int i = 0; i < 3; i++) {
            System.out.print(" ");
        }
    }
}
```

输出：

<img src="./06-Weaving-a-Kilim-Carpet-Application.assets/image-20221002171204901.png" alt="image-20221002171204901" style="zoom:25%;" />

```java
************************************
***   
```

显而易见，这是单次循环生成的结果，那我们接下来可以实现多次循环。「也就是，在这两个循环外面包裹一次循环」

![image-20221002172029729](./06-Weaving-a-Kilim-Carpet-Application.assets/image-20221002172029729.png)

```java
public class Example2 {
    public static void main(String[] args) {
        // 第一行
        for (int i = 0; i < 36; i++) {
            System.out.print("*");
        }
        System.out.println("");  // 换行

        // 第二行 显而易见使用循环嵌套
        for (int index = 0; index < 2; index++) {
            for (int i = 0; i < 3; i++) {
                System.out.print("*");
            }
            for (int i = 0; i < 3; i++) {
                System.out.print(" ");
            }
        }
    }
}
```

输出：

```java
************************************
***   ***   ***   ***   ***   ***   
```

那还有一行？怎么弄？copy 一份，在写一个？——再嵌套吧！「谁叫你们老师要嵌套」

![image-20221002200919182](./06-Weaving-a-Kilim-Carpet-Application.assets/image-20221002200919182.png)

```java
public class Example2 {
    public static void main(String[] args) {
        // 第一行
        for (int i = 0; i < 36; i++) {
            System.out.print("*");
        }
        System.out.println("");  // 换行

        // 第二行 显而易见使用循环嵌套
        for (int j = 0; j < 2; j++) {
            for (int index = 0; index < 6; index++) {
                for (int i = 0; i < 3; i++) {
                    System.out.print("*");
                }
                for (int i = 0; i < 3; i++) {
                    System.out.print(" ");
                }
            }
            System.out.println("");
        }
    }
}
```









## Save it as Part2.java

Number system helps to represent numbers used for humans and computers. Computers, in general, use binary numbers 0 and 1 to keep the calculations simple and to keep the amount of necessary circuitry less, which results in the least amount of space, energy consumption and cost. 

When we type any letter or word, the computer translates them into numbers (binary, base 2) since computers can understand only numbers. A computer can understand only a few symbols called digits and these symbols describe different values depending on the position they hold in the number. In general, the binary number system is used in computers. However, the octal, decimal and hexadecimal systems are also used sometimes. Numbers can be represented in any of the number system categories like binary, decimal, hex, etc. Number conversion is extremely important for computer scientist and therefor, you are asked to build an application to convert between these four number systems mentioned here. I’m aware that there are many of these programs posted on the web but you MUST produce your own as we have access to plagiarism software that allows us to detect plagiarism from the web and from any other student work from past years or this year. Please refer to the plagiarism policy posted on the syllabus. 

**The following is a diagram of converting numbers from 1 to 15 in all four number systems:**







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