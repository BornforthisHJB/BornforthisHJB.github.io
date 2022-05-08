---
title: 一台电脑上的git同时使用两个github账户
date: 2022-02-15 12:18:33.0
updated: 2022-03-30 23:18:02.979
url: /archives/417.html
categories: - GitHub
tags: 
---



你好，我是悦创。

## 需求：

有多个 Github 账号时，想在 Git 上同时使用，两者互不干扰。

## 解决方案

### 一、生成两个 SSH key

这里以两个账号的配置为例，多于两个账号的情况配置和两个账号一样，所以学会了两个账号怎么配置了，再多账号也是一样可以顺利配置成功的。 根据你的 Github 账号，分别生成对应的 key。为了方便举例，这里使用 “one” 和 “two” 两个账户。下同。 生成 SSH key 的具体命令如下：

```bash
ssh-keygen -t rsa -C "one@gmail.com"
ssh-keygen -t rsa -C "two@gmail.com"
```

ssh-keygen是linux命令，可以让两个机器之间使用ssh而不需要用户名和密码。 运行上面命令需要注意几点：

1.  运行命令后不要一路回车，分别在第一次对话出现 “`Enter file in which to save the key`” 的时候输入文件名（此处文件名为 `id_rsa` 和 `id_rsa_two` ），第二次会话是让你输密码，一般回车密码设置为空就好了。第三次再次确认密码，同样回车，这样会生成如下图的文件：

![在这里插入图片描述](https://img-blog.csdnimg.cn/a4fd6b86e35d411a9879b5be0cbc78e8.png) 两份包含私钥和公钥的 4 个文件，后缀为 `.pub` 的文件为公钥文件。

2.  linux 或 mac 用户一定要在 `~/.ssh` 路径下运行命令行，不然生成的文件不会出现在当前目录，Windows用户则在“ `C:\Users\用户名\.ssh` ”目录下运行命令行。

### 二、创建 config 文件并配置

继续在 `.ssh` 目录下创建 config 文件，在 config 文件中添加以下内容：

```bash
# one(one@gmail.com)
Host one.github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_one
User one

# two(two@gmail.com)
Host two.github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_two
User two
```

这里说明一下配置各字段的含义

```bash
Host myhost（这里是自定义的host简称，以后连接远程服务器就可以用命令ssh myhost）
HostName 主机名可用ip也可以是域名(如:github.com或者bitbucket.org)
Port 服务器open-ssh端口（默认：22,默认时一般不写此行）
PreferredAuthentications   配置登录时用什么权限认证--可设为publickey,password publickey,keyboard-interactive等
IdentityFile 证书文件路径（如~/.ssh/id_rsa_*)
User 登录用户名(如：git)
```

每个账号单独配置一个Host，每个Host要取一个别名，一般为每个Host主要配置HostName和IdentityFile两个属性，配置完保存即可。 Host 的名字可以自定义名字，不过这个会影响 git 相关命令，例如：`Host mygithub` 这样定义的话，使用命令 `git clone git@mygithub:PopFisher/AndroidRotateAnim.git`，`git@后面紧跟的名字改为mygithub`。

### 三、部署 SSH key

这里以配置 Github 为例，分别登陆两个 github 账号，进入`Settings –> SSH and GPG keys`，点击"`new SSH key`"， 把下面两个公钥（`.pub`文件）的内容分别添加到相应的 Github 账号中，其中 Title 为自定义的名字，Key 为 `.pub` 文件的内容，最后点击“ `Add SSH key` ”即可。 ![在这里插入图片描述](https://img-blog.csdnimg.cn/a6a3b96bd1354115aa46948e699f7100.png)

### 四、远程测试

输入以下命令进行测试

```bash
ssh -T git@one.github.com
ssh -T git@two.github.com
```

此处 "`one.github.com`" 和“ `two.github.com` ”为 config 文件中你配置的 Host 名字 运行命令后如果出现“`Hi xxxx! You’ve successfully authenticated, but GitHub does not provide shell access.`”，其中“`xxxx`”为你配置的 User 名字，这时恭喜你，配置成功了~

### 五、使用

1.  clone 代码到本地

*   原来的写法为：

```bash
git clone git@github.com: one的用户名/learngit.git
```

*   现在的写法为：

```bash
git clone git@one.github.com: one的用户名/learngit.git
git clone git@two.github.com: two的用户名/learngit.git
```

2.  为仓库设置局部的用户名和邮箱：

```bash
# 取消全局 用户名/邮箱 配置
git config --global --unset user.name
git config --global --unset user.email

# 单独为每个repo设置 用户名/邮箱
git config user.name "one_name" ; git config user.email "one_email"
git config user.name "two_name" ; git config user.email "two_email"
```

3.  上述都成功后，会发现钥匙会由灰变绿。

![在这里插入图片描述](https://img-blog.csdnimg.cn/3b2f5ea3f86e4412befb7c59ad8ff377.png)

> AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。QQ、微信在线，随时响应！V：Jiabcdefh

![在这里插入图片描述](https://img-blog.csdnimg.cn/07ff2f3b4b444f339e26542c30996521.png)