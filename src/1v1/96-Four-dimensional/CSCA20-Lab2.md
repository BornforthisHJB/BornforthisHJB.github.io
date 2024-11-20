---
title: CSCA20 - Lab 2
date: 2024-11-20 19:21:19
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

::: center

## CSCA20 - Lab 2

#### Data Types & Strings

:::

## 1. Learning Objectives

In this lab, we’re working with converting between data types, working with built-in string meth-ods, and learning how to find new information in the Python Docs.



## 2. Quiz

This week will be our first one with a quiz. Your tutorial will start with a review of the lab 1 material. So make sure you arrive on-time, log into the lab computers and load up your lab 1 solution. Your TAs will then ask you to make a small modification to your solution to prove that you truly understood the material from the lab.

A few things to note:

- The modification will be something small and simple enough that if you understood and completed the lab on your own, you’ll be fine.
- You will only have 10 minutes to make the modification, so ensure that you’ve arrived on time, and are ready to go, and also that you’re familiar enough with your own solution that you don’t need to spend the 10 minutes re-reading the handout.

This is the way the quizzes will work for future tutorials. If you can’t complete the quiz, don’t worry, you will get plenty more opportunities to demonstrate your skills in later quizzes, just make sure you’re really understanding your own solutions moving forward.

## 3. Demonstration & Evaluation

Successfully completing this lab and the accompanying quiz (next week) will demonstrate the skills of user input/output, and variables. Note that if you have already demonstrated input/output in Lab 1, you don’t need to demonstrate that specific skill again, but as we mentioned last week, some of the fundamentals will have many chances for demonstration.



## 4. Prelab

You can now get basic input from and send output to the user, so let’s make sure we’re ready to start playing with strings. For the start of your lab, you should show up with code that can ask the user for a word and a number, and will then print True if the word has more characters than the number. e.g.;

```python
Type a word: hi
How many letters? 7
False
Type a word: supercalifragilisticexpialidocious
How many letters? 7
True
```

Are you confused that you don’t know how to make something print True or False based on the value of variables?

Good thing we know how to look up this sort of thing in the python docs. (Hint: 6.10. Compar-isons)

## 5. The Scenario

The Unbelievably Trained Security Council (UTSC) wants you to build them a program to help their password crackers learn how to... well.. crack passwords. The program will allow the trainer to input a password, and then the trainee will go through 3 rounds of attempts to crack the password.

## 6. Round 1

After the trainer has entered the password, the trainee will be allowed to guess 5 letters. For each letter, the system will print True if that letter is in the password, or False if it isn’t.

## 7. Round 2

Now that the trainee knows (hopefully) the letters in the password, they will be prompted to enter the letters and their predicted positions (e.g., I think ’X’ is in position 3), and will be told True if the letter is in that position, and False otherwise. The trainee will get 5 chances to guess in this round.

## 8. Round 3

At this point, the trainee has 5 chances to input the whole password. If the guessed password is correct, the system will print True. If a guess is incorrect, the program will print False (note: even if the trainee guesses correctly on the first try, the system will still prompt for all five attempts).







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

