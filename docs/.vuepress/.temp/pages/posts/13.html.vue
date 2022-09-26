<template><div><p>你好，我是悦创。</p>
<h1 id="操作数据库" tabindex="-1"><a class="header-anchor" href="#操作数据库" aria-hidden="true">#</a> 操作数据库</h1>
<h2 id="连接数据库" tabindex="-1"><a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a> 连接数据库</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql -uroot -proot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看当前使用的数据库👇" tabindex="-1"><a class="header-anchor" href="#查看当前使用的数据库👇" aria-hidden="true">#</a> 查看当前使用的数据库👇</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show databases;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看所有数据库👇" tabindex="-1"><a class="header-anchor" href="#查看所有数据库👇" aria-hidden="true">#</a> 查看所有数据库👇</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>select database();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看数据库使用端口" tabindex="-1"><a class="header-anchor" href="#查看数据库使用端口" aria-hidden="true">#</a> 查看数据库使用端口</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show variables like 'port';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看数据库编码" tabindex="-1"><a class="header-anchor" href="#查看数据库编码" aria-hidden="true">#</a> 查看数据库编码</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show variables like 'character%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>character_set_client</code> 为客户端编码方式
<code v-pre>character_set_connection</code> 为建立连接使用的编码
<code v-pre>character_set_database</code> 为数据库的编码
<code v-pre>character_set_results</code> 为结果集的编码
<code v-pre>character_set_server</code> 为数据库服务器的编码</p>
<h1 id="操作表" tabindex="-1"><a class="header-anchor" href="#操作表" aria-hidden="true">#</a> 操作表</h1>
<h2 id="查看数据库表信息" tabindex="-1"><a class="header-anchor" href="#查看数据库表信息" aria-hidden="true">#</a> 查看数据库表信息</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show tables;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show tables from book;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show columns from reader;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看表结构信息" tabindex="-1"><a class="header-anchor" href="#查看表结构信息" aria-hidden="true">#</a> 查看表结构信息</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>desc reader;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看数据表当时创建表的语句" tabindex="-1"><a class="header-anchor" href="#查看数据表当时创建表的语句" aria-hidden="true">#</a> 查看数据表当时创建表的语句</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show create table reader;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改表结构" tabindex="-1"><a class="header-anchor" href="#修改表结构" aria-hidden="true">#</a> 修改表结构</h2>
<p><code v-pre>alter table</code> 表名 add 列名 类型/约束; 添加字段</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>alter table students add birthday datetime default '2012-12-12 12:12:12';
alter table students add birthday datetime default '2008-08-08 12:12:12';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>alter table</code> 表名 modify 列名 类型及约束; 修改字段，字段名称不会被重新命名</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>alter table students modify brithday date default '2012-12-12';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>alter table</code> 表名 <code v-pre>change</code> 原列名 新列名 类型及约束; 修改字段，字段名会被重新命名，即修改原列名</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>alter table students change birthday birth date default '2012-12-12';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>修改表删除字段</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>alter table students drop birth;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>tudents | CREATE TABLE `students` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `age` tinyint(3) unsigned DEFAULT '0',
  `high` decimal(5,2) DEFAULT '0.00',
  `gender` enum('男','女','中性','保密') DEFAULT NULL,
  `cls_id` int(10) unsigned NOT NULL,
  `brith` date DEFAULT '2011-11-11',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除表</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>drop table students;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="操作数据" tabindex="-1"><a class="header-anchor" href="#操作数据" aria-hidden="true">#</a> 操作数据</h1>
<p><strong>数据增删改查</strong></p>
<p><code v-pre>insert [into]</code>  表名 <code v-pre>values</code> (值1，值2，…)</p>
<p>全列插入 值和表的字段的顺序一一对应,全列插入在实际开发中用的不多，如果表结构一旦发生变化，全列插入就会报错；</p>
<p>占位符：只有主键字段才有占位符的概念 ，其表示为 0，default ，null</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>insert into students values (0,'小乔',18,180.00,'女',2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果多敲了一个回车，弄成了两个数据，现在我们把它改删除一个</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>delete from students -&gt; where id=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>指定列插入</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; insert into students
    -&gt; (name,age,high,gender)
    -&gt; values
    -&gt; ('张飞',20,190.00,'女');
Query OK, 1 row affected, 1 warning (0.03 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多行插入 批量插入 insert into 表名（列1，…） values (值1，…),(值2，…)…</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; insert into students
    -&gt; values
    -&gt; (0,'孙尚香',18,180.00,'女',2),
    -&gt; (1,'孙悟空',15,170.00,'男',2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; insert into students
    -&gt; (name,age,high,gender)
    -&gt; values
    -&gt; ('八戒',20,175.00,'男'),
    -&gt; ('悟空',22,180.00,'男');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改 update</strong></p>
<p>where 表示修改的范围</p>
<p>update 表名 set 列 1 = 值1，列2 = 值2…[where 条件]</p>
<p>没有 where 进行条件限制就是 全表更新</p>
<div class="language-url ext-url line-numbers-mode"><pre v-pre class="language-url"><code><span class="token path">mysql</span>> update students set age=20;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加 where 条件进行限制的</p>
<p><strong>删除,物理删除,delect from tbname [where 条件判断]</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>delete from students  where id =4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查询表的数据</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>select *from students;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


