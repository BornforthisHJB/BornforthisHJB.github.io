---
title: Fiddler设置手机代理
date: 2020-05-31 09:15:00.0
updated: 2022-03-30 23:09:02.523
url: /archives/248.html
categories: - technolog | - 爬虫 | Python 爬虫 App
tags: 
---



你好，我悦创。 这回我来补充一下群友遇到的问题： ![](https://images-aiyc-1301641396.cos.ap-guangzhou.myqcloud.com/20200531104147.png) 首先需要点击 `Tools->options->Connections->Allow remote computers to connect` 设置好之后，需要打开你的手机，在手机设置里把手机的代理设置为电脑端的IP和端口，因为不同手机的设置环境不同，这里需要你自行百度，假设我们电脑地址为 192.168.1.1，在手机配置好代理之后，打开手机浏览器，输入192.168.1.1：8888，会出现如下界面 ![img](https://images-aiyc-1301641396.cos.ap-guangzhou.myqcloud.com/20200531091249 "img") 点击最下边的  
FiddlerRoot centificate，下载并且安装证书。 最后浏览手机APP百度外卖，就可以在电脑端抓包了。 ![img](https://images-aiyc-1301641396.cos.ap-guangzhou.myqcloud.com/20200531091252 "img")