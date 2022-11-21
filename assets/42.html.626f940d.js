import{_ as a}from"./gzh.b03adfd2.js";import{_ as d}from"./zsxq.77f6dc86.js";import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as u,a as e,d as n,b as s,e as l,r as o}from"./app.b0eae2c5.js";const c="/assets/截屏2020-10-22-16.24.49.4dfaf182.png",v="/assets/截屏2020-10-22-16.25.09.0807cbce.png",b="/assets/截屏2020-10-22-16.05.38.327217e4.png",m="/assets/截屏2020-10-22-16.09.48.14b38b46.png",h="/assets/截屏2020-10-22-16.36.32.90f0cb16.png",p="/assets/截屏2020-10-22-16.39.46.810f0c0b.png",_="/assets/截屏2020-10-22-16.48.09.5e4b6d03.png",g="/assets/截屏2020-10-22-16.56.15.0973a081.png",S="/assets/截屏2020-10-23-09.47.32.30da1f7a.png",f="/assets/截屏2020-10-23-09.55.13.8e7a4635.png",C={},A=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),n(" 准备工作")],-1),q=e("h3",{id:"在线平台的准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在线平台的准备","aria-hidden":"true"},"#"),n(" 在线平台的准备")],-1),R=e("p",null,"你好，我是悦创。",-1),L=e("p",null,"准备：",-1),x=e("li",null,"VPS 一台并装好主流的系统（作者演示用 CentOS）",-1),y={href:"https://www.v2rayssr.com/yumingreg.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.v2rayssr.com/go?url=https://youtu.be/4JVIfkRgfw4",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"本地平台的准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本地平台的准备","aria-hidden":"true"},"#"),n(" 本地平台的准备")],-1),O=e("ul",null,[e("li",null,"PVE（Esxi）下创建的虚拟机VPS")],-1),N=e("h3",{id:"前端项目地址",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前端项目地址","aria-hidden":"true"},"#"),n(" 前端项目地址")],-1),M={href:"https://github.com/CareyWang/sub-web",target:"_blank",rel:"noopener noreferrer"},P=e("h3",{id:"后端项目地址",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#后端项目地址","aria-hidden":"true"},"#"),n(" 后端项目地址")],-1),V={href:"https://github.com/tindy2013/subconverter",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"在-cloudflare-解析两个域名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在-cloudflare-解析两个域名","aria-hidden":"true"},"#"),n(" 在 Cloudflare 解析两个域名")],-1),F=e("strong",null,"前端",-1),G={href:"http://sub.v2rayssr.com",target:"_blank",rel:"noopener noreferrer"},W=e("strong",null,"后端",-1),I={href:"http://suc.v2rayssr.com",target:"_blank",rel:"noopener noreferrer"},B=l('<p>（PS：若是为了你的服务器安全，建议一定开启小云朵，也就是开启CDN）</p><p><img src="'+c+'" alt="img" loading="lazy"></p><p>设置 Cloudflare 的 SSL/TLS 为以下配置</p><p><img src="'+v+`" alt="img" loading="lazy"></p><h2 id="搭建-sub-web-前端" tabindex="-1"><a class="header-anchor" href="#搭建-sub-web-前端" aria-hidden="true">#</a> 搭建 Sub-Web 前端</h2><h3 id="更新系统并安装-node-与-yarn" tabindex="-1"><a class="header-anchor" href="#更新系统并安装-node-与-yarn" aria-hidden="true">#</a> 更新系统并安装 Node 与 Yarn</h3><p>依次运行下面四行代码，若是 Debian/Ubuntu 系统，请自行替换下面前两行命令中的 <code>yum</code> 为 <code>apt</code></p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>yum update -y
yum install -y curl wget sudo nodejs git
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令执行完毕以后，请运行下面的代码查询 Node 与 Yarn 是否安装成功，若是成功会返回版本号，如下图。</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>node -v
yarn --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt="img" loading="lazy"></p><h3 id="下载并安装-sub-web" tabindex="-1"><a class="header-anchor" href="#下载并安装-sub-web" aria-hidden="true">#</a> 下载并安装 Sub-Web</h3><p>拉取 sub-web 程序，并进入 sub-web 文件夹</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>git clone https://github.com/CareyWang/sub-web.git
cd sub-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目目录中安装构建依赖项，构建的过程稍微有点长</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 webpack 运行 Web 客户端以进行本地开发。</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>yarn serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),D={href:"http://xn--ip-fr5c86lx7z:8080/",target:"_blank",rel:"noopener noreferrer"},E=l('<p><img src="'+m+'" alt="img" loading="lazy"></p><h3 id="修改默认后端地址" tabindex="-1"><a class="header-anchor" href="#修改默认后端地址" aria-hidden="true">#</a> 修改默认后端地址</h3><p>找到 <code>VPS /root/sub-web/src/views/Subconverter.vue</code> 文件</p><p>找到 257行 <code>backendOptions:</code>（写博客的时候是这行），替换后面的 <code>http://127.0.0.1:25500/sub?</code> 为 <code>https://suc.v2rayssr.com/sub?</code></p><p><strong>（注意两个地方：域名为你刚才准备的后端域名，是 https 而非 http）</strong></p><p><img src="'+h+`" alt="img" loading="lazy"></p><h3 id="更换远程规则" tabindex="-1"><a class="header-anchor" href="#更换远程规则" aria-hidden="true">#</a> 更换远程规则</h3><p>因为这个版本更新以后，规则方面很少，经常用到的一些经典的 ACL4SSR 的规则并没有集成，大家可以看看，若是有，就不需要这样操作。</p><p>VPS找到 <code>/root/sub-web/src/views/Subconverter.vue</code> 文件，找到 258行 <code>remoteConfig: [</code>（写博客的时候是这行），敲下回车，插入下面内容。若是不清楚，请看 本期讲解的视频：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>{
            label: &quot;ACL4SSR&quot;,
            options: [
              {
                label: &quot;ACL4SSR_Online 默认版 分组比较全 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_AdblockPlus 更多去广告 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_NoAuto 无自动测速 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_NoReject 无广告拦截规则 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_Mini 精简版 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_Full 全分组 重度用户使用 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_Full_NoAuto.ini 全分组 无自动测速 重度用户使用 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Online_Full_Netflix 全分组 重度用户使用 奈飞全量 (与Github同步)&quot;,
                value:
                  &quot;https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini&quot;
              },
              {
                label: &quot;ACL4SSR 本地 默认版 分组比较全&quot;,
                value: &quot;config/ACL4SSR.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Mini 本地 精简版&quot;,
                value: &quot;config/ACL4SSR_Mini.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速&quot;,
                value: &quot;config/ACL4SSR_Mini_NoAuto.ini&quot;
              },
              {
                label: &quot;ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback&quot;,
                value: &quot;config/ACL4SSR_Mini_Fallback.ini&quot;
              },
              {
                label: &quot;ACL4SSR_BackCN 本地 回国&quot;,
                value: &quot;config/ACL4SSR_BackCN.ini&quot;
              },
              {
                label: &quot;ACL4SSR_NoApple 本地 无苹果分流&quot;,
                value: &quot;config/ACL4SSR_NoApple.ini&quot;
              },
              {
                label: &quot;ACL4SSR_NoAuto 本地 无自动测速 &quot;,
                value: &quot;config/ACL4SSR_NoAuto.ini&quot;
              },
              {
                label: &quot;ACL4SSR_NoAuto_NoApple 本地 无自动测速&amp;无苹果分流&quot;,
                value: &quot;config/ACL4SSR_NoAuto_NoApple.ini&quot;
              },
              {
                label: &quot;ACL4SSR_NoMicrosoft 本地 无微软分流&quot;,
                value: &quot;config/ACL4SSR_NoMicrosoft.ini&quot;
              },
              {
                label: &quot;ACL4SSR_WithGFW 本地 GFW列表&quot;,
                value: &quot;config/ACL4SSR_WithGFW.ini&quot;
              }
            ]
          },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置完毕刷新前端网页" tabindex="-1"><a class="header-anchor" href="#配置完毕刷新前端网页" aria-hidden="true">#</a> 配置完毕刷新前端网页</h3><p>配置完毕以后，程序会自动更新，再次刷新前端网页，会出现刚才添加的相关规则，如图所示：</p><p><img src="`+p+`" alt="img" loading="lazy"></p><p>至此，我们的前端搭建完毕，我们现在需要打包，生成一个发布目录</p><p>首先停止调试程序，CTRL+C ，退出当前调试，然后执行下面的命令进行打包：</p><blockquote><p>若是不会停止，请断开VPS，重新连接VPS以后，输入 <code>cd sub-web</code> 在执行下面的命令</p></blockquote><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>yarn build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行以下打包命令，在 <code>/root/sub-web</code> 下面会生成一个 <code>dist</code> 目录，这个目录即为网页的发布目录。</p><p><img src="`+_+`" alt="img" loading="lazy"></p><h2 id="安装bt面板并设置网站" tabindex="-1"><a class="header-anchor" href="#安装bt面板并设置网站" aria-hidden="true">#</a> 安装BT面板并设置网站</h2><p>CentOS 系统运行下面的命令安装宝塔面板</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>yum install -y wget &amp;&amp; wget -O install.sh http://download.bt.cn/install/install_6.0.sh &amp;&amp; sh install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),J={href:"https://www.bt.cn",target:"_blank",rel:"noopener noreferrer"},T=l(`<p>Ubuntu安装命令</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh &amp;&amp; sudo bash install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Debian安装命令</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh &amp;&amp; bash install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+'" alt="img" loading="lazy"></p>',5),j={href:"https://www.v2rayssr.com/go?url=https://www.youtube.com/watch?v=4JVIfkRgfw4&t=633s",target:"_blank",rel:"noopener noreferrer"},Q=l(`<h2 id="subconverter后台搭建" tabindex="-1"><a class="header-anchor" href="#subconverter后台搭建" aria-hidden="true">#</a> SubConverter后台搭建</h2><h3 id="下载并解压后端程序" tabindex="-1"><a class="header-anchor" href="#下载并解压后端程序" aria-hidden="true">#</a> 下载并解压后端程序</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>cd /root
wget https://github.com/tindy2013/subconverter/releases/download/v0.6.3/subconverter_linux64.tar.gz
tar -zxvf subconverter_linux64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成以后，在 <code>/root</code> 文件夹下会多出一个 <code>subconverter</code> 的文件夹，这个就是我们的后端程序</p><h3 id="修改配置文件参数" tabindex="-1"><a class="header-anchor" href="#修改配置文件参数" aria-hidden="true">#</a> 修改配置文件参数</h3><p>现在我们需要修改后端配置文件中的一些参数</p><p>找到VPS文件 <code>/root/subconverter/pref.ini</code> ，找到如下参数进行修改</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>api_access_token=123123dfsdsdfsdfsdf            #随意设置自己知道就行
managed_config_prefix=https://suc.v2rayssr.com  #设置成我们刚刚解析的后端域名
listen=127.0.0.1                                #这里改成 127.0.0.1 进行反代
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建服务进程并启动" tabindex="-1"><a class="header-anchor" href="#创建服务进程并启动" aria-hidden="true">#</a> 创建服务进程并启动</h3><p>接下来我们需要创建一个服务，让VPS每次重启或是开机自动运行后端程序</p><p>找到VPS目录 <code>/etc/systemd/system</code>，创建一个名为 <code>sub.service</code> 的文件</p><p>打开文件，贴入以下内容，保存。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>[Unit]
Description=A API For Subscription Convert
After=network.target
 
[Service]
Type=simple
ExecStart=/root/subconverter/subconverter
WorkingDirectory=/root/subconverter
Restart=always
RestartSec=10
 
[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查运行状态以及设置开机自启</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl daemon-reload
systemctl start sub
systemctl enable sub
systemctl status sub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),U={href:"https://suc.v2rayssr.com",target:"_blank",rel:"noopener noreferrer"},Y=l('<p><img src="'+S+'" alt="img" loading="lazy"></p><h2 id="后记" tabindex="-1"><a class="header-anchor" href="#后记" aria-hidden="true">#</a> 后记</h2><p>到这里，我们也就搭建完毕了，大家可以在前端订阅自己的SSR/V2RAY/TROJAN机场链接或是自建的的节点链接进行转换了。</p><p>转换成功以后，复制订阅地址，输入到浏览器，打开，会得到如下的画面（若是教程帮助了你，不妨转发订阅点赞。）</p><p><img src="'+f+'" alt="img" loading="lazy"></p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="'+a+'" alt="" loading="lazy"></p></details>',7),$={class:"custom-container info"},H=e("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),K=e("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),X=e("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),Z={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},ee=e("p",null,"方法二：微信：Jiabcdefh",-1),ne=e("p",null,[e("img",{src:d,alt:"",loading:"lazy"})],-1);function ie(se,le){const i=o("ExternalLinkIcon");return r(),u("div",null,[A,q,R,L,e("ul",null,[x,e("li",null,[n("域名托管到 Cloudflare （"),e("a",y,[n("不会点击这里"),s(i)]),n("）")]),e("li",null,[n("解析两个域名（一个用于前端，一个用于后端，不会"),e("a",w,[n("看视频"),s(i)]),n("）")])]),k,O,N,e("p",null,[e("a",M,[n("https://github.com/CareyWang/sub-web"),s(i)])]),P,e("p",null,[e("a",V,[n("https://github.com/tindy2013/subconverter"),s(i)])]),z,e("p",null,[F,n(" 我们使用 "),e("a",G,[n("sub.v2rayssr.com"),s(i)]),n(" 进行解析")]),e("p",null,[W,n(" 我们使用 "),e("a",I,[n("suc.v2rayssr.com"),s(i)]),n(" 进行解析")]),B,e("p",null,[n("到目前为止，浏览器访问 "),e("a",D,[n("http://服务器ip:8080/"),s(i)]),n(" 应该可以进行前端 sub-web 的预览了。")]),E,e("p",null,[n("Debian/Ubuntu 系统运行下面的命令安装宝塔面板，或是直接访问官网查询安装代码 ："),e("a",J,[n("点击访问"),s(i)])]),T,e("p",null,[n("关于宝塔环境的安装以及相关的站点设置和反向代理，请"),e("a",j,[n("查看视频"),s(i)]),n("，这边步骤比较多，所以博文选择跳过。")]),Q,e("p",null,[n("到这里，后端也就搭建完毕了，我们现在可以在浏览器里面访问我们的后端了 "),e("a",U,[n("https://suc.v2rayssr.com"),s(i)]),n(" （正常的话，会返回下面的图例）")]),Y,e("div",$,[H,K,X,e("p",null,[n("方法一："),e("a",Z,[n("QQ"),s(i)])]),ee]),ne])}const ue=t(C,[["render",ie],["__file","42.html.vue"]]);export{ue as default};
