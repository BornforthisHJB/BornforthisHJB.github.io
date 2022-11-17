import{_ as i}from"./gzh.b03adfd2.js";import{_ as l}from"./zsxq.77f6dc86.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,a as s,d as n,b as a,e as c,r as d}from"./app.09b201ca.js";const p="/assets/1620.094b5587.png",u="/assets/1620.fdd3f50e.jpeg",m="/assets/1620-20221112112045648.f131263a.jpeg",v={},b=s("h2",{id:"步骤",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#步骤","aria-hidden":"true"},"#"),n(" 步骤")],-1),k={href:"http://brew.sh/",target:"_blank",rel:"noopener noreferrer"},h=s("li",null,[s("code",null,"brew doctor"),n(" 确认brew在正常工作。")],-1),y=s("li",null,[s("code",null,"brew update"),n(" 更新包。")],-1),g=s("code",null,"brew install mysql",-1),_={href:"https://cloud.tencent.com/product/cdb?from=10680",target:"_blank",rel:"noopener noreferrer"},w=c('<p><img src="'+p+`" alt="img" loading="lazy"></p><p>其中运行 <code>mysql_secure_installation</code> 可以设置密码</p><p>运行 <code>brew service start mysql</code> 可以后台启动 mysql 运行 <code>mysql.server start</code> 前台启动 mysql (关闭控制台，服务停止)</p><ol start="5"><li>按照 brew 的提示运行 <code>mysql_secure_installation</code> 设置密码，运行后会报错：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token operator">&gt;</span> mysql_secure_installation

Securing the MySQL server deployment.

Enter password <span class="token keyword">for</span> user root:
Error: Can<span class="token string">&#39;t connect to local MySQL server through socket &#39;</span>/tmp/mysql.sock&#39; <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个错误是因为 MySQL 服务还没启动</p><ol start="6"><li>启动 MySQL 服务</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql.server start 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+u+`" alt="img" loading="lazy"></p><p>在我的机器上第一次没报错，以后运行此命令有可能会报权限错误。尝试修改权限但是最后还是不行，最后采用 sudo 启动解决此问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mysql.server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+`" alt="img" loading="lazy"></p><ol start="7"><li>设置密码</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果报权限错误执行 <code>sudo mysql_secure_installation</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD PLUGIN can be used to <span class="token builtin class-name">test</span> passwords
and improve security. It checks the strength of password
and allows the <span class="token function">users</span> to <span class="token builtin class-name">set</span> only those passwords <span class="token function">which</span> are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?

Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No: y

There are three levels of password validation policy:

LOW    Length <span class="token operator">&gt;=</span> <span class="token number">8</span>
MEDIUM Length <span class="token operator">&gt;=</span> <span class="token number">8</span>, numeric, mixed case, and special characters
STRONG Length <span class="token operator">&gt;=</span> <span class="token number">8</span>, numeric, mixed case, special characters and dictionary                  <span class="token function">file</span>
// 这里提示选一个密码强度等级
Please enter <span class="token number">0</span> <span class="token operator">=</span> LOW, <span class="token number">1</span> <span class="token operator">=</span> MEDIUM and <span class="token number">2</span> <span class="token operator">=</span> STRONG: <span class="token number">1</span>
Please <span class="token builtin class-name">set</span> the password <span class="token keyword">for</span> root here.
// 然后按照所选的密码强度要求设定密码
New password:

Re-enter new password:

Estimated strength of the password: <span class="token number">50</span>
Do you wish to <span class="token builtin class-name">continue</span> with the password provided?<span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> y
 <span class="token punctuation">..</span>. Failed<span class="token operator">!</span> Error: Your password does not satisfy the current policy requirements

New password:

Re-enter new password:

Estimated strength of the password: <span class="token number">100</span>
Do you wish to <span class="token builtin class-name">continue</span> with the password provided?<span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> y
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created <span class="token keyword">for</span> them. This is intended only <span class="token keyword">for</span>
testing, and to <span class="token function">make</span> the installation go a bit smoother.
You should remove them before moving into a production
environment.
// 这里删除默认无密码用户
Remove anonymous users? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> y
Success.


Normally, root should only be allowed to connect from
<span class="token string">&#39;localhost&#39;</span><span class="token builtin class-name">.</span> This ensures that someone cannot guess at
the root password from the network.
// 禁止远程root登录，我选的是不禁止。因为我的mac上的数据库不会放到公网上，也不会存什么敏感数据
Disallow root login remotely? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> no

 <span class="token punctuation">..</span>. skipping.
By default, MySQL comes with a database named <span class="token string">&#39;test&#39;</span> that
anyone can access. This is also intended only <span class="token keyword">for</span> testing,
and should be removed before moving into a production
environment.

// 这里删除默认自带的test数据库
Remove <span class="token builtin class-name">test</span> database and access to it? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> y
 - Dropping <span class="token builtin class-name">test</span> database<span class="token punctuation">..</span>.
Success.

 - Removing privileges on <span class="token builtin class-name">test</span> database<span class="token punctuation">..</span>.
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> y
Success.

All done<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>连接 MySQL</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>最后特别注意启动方式的问题：</strong></p><p>运行 <code>brew service start mysql</code> 可以后台启动 mysql</p><p>运行 <code>mysql.server start</code> 前台启动 mysql</p><p>如果提示权限问题使用 sudo 指令，我的笔记本上如果不加此指令各种权限问题。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+i+'" alt="" loading="lazy"></p></details>',24),f={class:"custom-container info"},q=s("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),S=s("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),L=s("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),N={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},x=s("p",null,"方法二：微信：Jiabcdefh",-1),Y=s("p",null,[s("img",{src:l,alt:"",loading:"lazy"})],-1);function P(M,Q){const e=d("ExternalLinkIcon");return t(),r("div",null,[b,s("ol",null,[s("li",null,[n("安装 Homebrew，详细步骤参见 "),s("a",k,[n("Homebrew"),a(e)]),n(" 官网。")]),h,y,s("li",null,[g,n(" 安装 "),s("a",_,[n("mysql"),a(e)]),n("。")])]),w,s("div",f,[q,S,L,s("p",null,[n("方法一："),s("a",N,[n("QQ"),a(e)])]),x]),Y])}const D=o(v,[["render",P],["__file","03.html.vue"]]);export{D as default};
