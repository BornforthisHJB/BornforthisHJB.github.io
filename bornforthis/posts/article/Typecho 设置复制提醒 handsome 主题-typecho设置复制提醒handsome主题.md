---
title: Typecho 设置复制提醒 handsome 主题
date: 2020-03-29 14:02:45.0
updated: 2022-03-30 22:56:55.3
url: /archives/138.html
categories: - 网站搭建
tags: 
---



你好，我是悦创。

1.  自定义 js
    
    ```
    
    document.body.oncopy = function() {layer.msg('复制成功，若要转载请务必保留本文链接！');};
    ```
    
2.  自定义头部
    
3.  把下面文件解压放到网站根目录
    
    ```
    > https://www.lanzous.com/iarbtqd
    ```