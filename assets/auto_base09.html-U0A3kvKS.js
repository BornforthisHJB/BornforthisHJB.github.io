import{_ as t}from"./gzh-X2g0OvFa.js";import{_ as s}from"./zsxq-YQJ_sFB4.js";import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as g,c as p,a as i,b as a,d as r,e as c}from"./app-MefrU-Ok.js";const l="/assets/image-20220717104603622-2y7kq53B.png",m="/assets/image-20220717104952779-dtiRJGFA.png",d="/assets/image-20220717120252540-bIORE71B.png",f="/assets/image-20220717120453407-Un7PXnlw.png",_="/assets/image-20220717133154926-JzXZepfT.png",u="/assets/image-20220717133809389-8UwFtzrc.png",h="/assets/image-20220717133940556-kT3_yUG_.png",b="/assets/image-20220717134958299-wqKfDSGC.png",x="/assets/image-20220717135817135-qRtyBl4v.png",q="/assets/image-20220717141101312-mhgA0p_6.png",y="/assets/image-20220717141230058-PAK2QfNm.png",z="/assets/image-20220717141304198-8xJW9KAO.png",k="/assets/image-20220717141702850-FkTHSw3M.png",w={},A=c('<h2 id="sqlitestudio-介绍" tabindex="-1"><a class="header-anchor" href="#sqlitestudio-介绍"><span>sqlitestudio 介绍</span></a></h2><p>本节内容的目的，是教大家如何在非代码的情况下，创建 sqlite3 数据库文件和表格编辑操作。</p><p>既然不写代码，就肯定需要借助软件来操作。本节课对应的源码中，准备好了 windows、macos、linux 三个系统的 sqlitestudio 软件，如下图：</p><figure><img src="'+l+'" alt="image-20220717104603622" tabindex="0" loading="lazy"><figcaption>image-20220717104603622</figcaption></figure><blockquote><p>windows 使用 zip；macos 使用 dmg；linux 使用 tar.xz；</p></blockquote><p>sqlitestudio 是一款绿色软件，安装你的操作系统所对应的 sqlitestudio 软件，然后执行，就可以得到启动界面。</p><figure><img src="'+m+'" alt="image-20220717104952779" tabindex="0" loading="lazy"><figcaption>image-20220717104952779</figcaption></figure><h2 id="新建-sqlite-数据库文件" tabindex="-1"><a class="header-anchor" href="#新建-sqlite-数据库文件"><span>新建 sqlite 数据库文件</span></a></h2><p>点击左上角的数据库，选择添加数据库，则会弹框，让你选择某个数据库文件，或者创建一个新的 sqlite 文件</p><figure><img src="'+d+'" alt="image-20220717120252540" tabindex="0" loading="lazy"><figcaption>image-20220717120252540</figcaption></figure><p>点击黄色的文件夹，是指打开某个存在的 sqlite 文件。</p><p>点击 <code>绿色的+</code> ，是新建一个 sqlite 文件，并且你也需要指定存储的具体位置。</p><p>选择在三个 sqlitestudio 安装包旁边，新建一个名为 <code>first.db</code> 的文件，如下截图：</p><figure><img src="'+f+'" alt="image-20220717120453407" tabindex="0" loading="lazy"><figcaption>image-20220717120453407</figcaption></figure><p>并且，文件也有对应的生成。</p><figure><img src="'+_+'" alt="image-20220717133154926" tabindex="0" loading="lazy"><figcaption>image-20220717133154926</figcaption></figure><h2 id="新增数据" tabindex="-1"><a class="header-anchor" href="#新增数据"><span>新增数据</span></a></h2><p>回到 sqlitestudio 软件界面，打开刚新建的 <code>first.db</code> ，里面什么都没有，表格是空的，现在来新建一个表格。</p><p>鼠标右键点击 Tables，然后选择新建表格，在新出的界面中，写表格名、字段名和字段类型，如下图：</p><p><strong>方法一：</strong></p><figure><img src="'+u+'" alt="image-20220717133809389" tabindex="0" loading="lazy"><figcaption>image-20220717133809389</figcaption></figure><p><strong>方法二：</strong></p><figure><img src="'+h+'" alt="image-20220717133940556" tabindex="0" loading="lazy"><figcaption>image-20220717133940556</figcaption></figure><hr><figure><img src="'+b+'" alt="image-20220717134958299" tabindex="0" loading="lazy"><figcaption>image-20220717134958299</figcaption></figure><figure><img src="'+x+'" alt="image-20220717135817135" tabindex="0" loading="lazy"><figcaption>image-20220717135817135</figcaption></figure><p>Table Name 表格名，输入具体名称。最上方框中的那个按钮，是增列字段的按钮，点击按钮弹出中间的字段信息，输入字段名、类型、大小等。</p><p>这里写了id title content author 四个字段信息，然后点击绿色的勾，保存表格即可。</p><figure><img src="'+q+'" alt="image-20220717141101312" tabindex="0" loading="lazy"><figcaption>image-20220717141101312</figcaption></figure><figure><img src="'+y+'" alt="image-20220717141230058" tabindex="0" loading="lazy"><figcaption>image-20220717141230058</figcaption></figure><p>保存了文件，重新刷新页面，就可以查看数据栏，如下：</p><figure><img src="'+z+'" alt="image-20220717141304198" tabindex="0" loading="lazy"><figcaption>image-20220717141304198</figcaption></figure><figure><img src="'+k+'" alt="image-20220717141702850" tabindex="0" loading="lazy"><figcaption>image-20220717141702850</figcaption></figure><p>点击<code>绿色的+</code>号，然后增加几条数据，方便我们下节课的代码练习。图中有三条。</p><p>sqlitestudio 也要保留，方便我们下节课，查看代码练习的数据变化结果。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details>',37),v={class:"hint-container info"},I=i("p",{class:"hint-container-title"},"AI悦创·编程一对一",-1),B=i("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),J=i("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),N={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},T=i("p",null,"方法二：微信：Jiabcdefh",-1),P=i("figure",null,[i("img",{src:s,alt:"",tabindex:"0",loading:"lazy"}),i("figcaption")],-1);function Q(C,E){const e=n("ExternalLinkIcon");return g(),p("div",null,[A,i("div",v,[I,B,J,i("p",null,[a("方法一："),i("a",N,[a("QQ"),r(e)])]),T]),P])}const R=o(w,[["render",Q],["__file","auto_base09.html.vue"]]);export{R as default};
