---
title: 悦创奶茶店开业大吉
date: 2022-06-15 23:03:42
author: AI悦创
isOriginal: true
category: Python 合集
tag:
    - Python 合集
icon: python
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
prev: false
next: q1.md
backToTop: true
toc: true
---

> 机智如你，这样你就可以更加专注的投入到学习中去，准备好我们就可以扬帆远航啦~

你好，我是悦创。先带你们认识一下 Python 这个神奇的工具。

一说起 Python，大家总会联想到近来超火爆的人工智能，没错，Python 就是人工智能的入门基础。

废话少说，悦创现在就带你感受一下使用 Python 实现人工智能。

有了 Python，你不光可以和**人类**对话，还可以和**机器人**对话，可别小瞧了机器人的智商~

![img](./README.assets/eec7c55447ce39942d9a45afe5b78874.png)

我们来试着和可爱的机器人，悦创宝宝说说话吧~

```python
import json
import urllib.request

api_url = "http://openapi.turingapi.com/openapi/api/v2"
text_input = input('我：')

req = {
    "perception":
    {
        "inputText":
        {
            "text": text_input
        },

        "selfInfo":
        {
            "location":
            {
                "city": "上海",
                "province": "上海",
                "street": "文汇路"
            }
        }
    },

    "userInfo":
    {
        "apiKey": "ef6f308833d5426696cc3502735c13af",
        "userId": "OnlyUseAlphabet"
    }
}
# print(req)
# 将字典格式的req编码为utf8
req = json.dumps(req).encode('utf8')
# print(req)

http_post = urllib.request.Request(api_url, data=req, headers={'content-type': 'application/json'})
response = urllib.request.urlopen(http_post)
response_str = response.read().decode('utf8')
# print(response_str)
response_dic = json.loads(response_str)
# print(response_dic)

intent_code = response_dic['intent']['code']
results_text = response_dic['results'][0]['values']['text']
print('Turing的回答：')
print('code：' + str(intent_code))
print('text：' + results_text)
```



