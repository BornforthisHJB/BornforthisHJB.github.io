import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { 
    text: "关于悦创",
    icon: "people",
    link: "/intro",
  },
  { 
    text: "专栏",
    icon: "workingDirectory",
    // link: "/home",
    children: [
      { 
        text: "IT 文档主页",
        children: [
          "/column",
          { text: "私教回放", icon: "play", link: "/column/playback/"},
          { text: "Python 合集", icon: "python", link: "/column/py/Python_tutorial/"},
          { text: "Python 私教", icon: "python", link: "/column/py/basequestion/"},
          { text: "Web 专栏", icon: "network", link: "/column/web"},
          { text: "Python 办公自动化", icon: "python", link: "/column/pyauto"},
          { text: "题解", icon: "code", link: "/column/tijie"},
          { text: "公开课资料", icon: "blog", link: "/column/pyauto/gkk/"},
          { text: "编程思维", icon: "read", link: "/column/Programmingthinking/"},
          { text: "零基础学习机器学习", icon: "centos", link: "/column/TensorFlow/零基础实战机器学习/"},
          { text: "数据分析", icon: "state", link: "/column/data_analysis/01"},
        ]
      },
      { 
        text: "程序员的私房菜",
        children: [
          { text: "私房菜", link: "/column/cookdinner/01-yogurt"},
        ]
      },
      {
        text: "艺术",
        children: [
          { text: "摄影", icon: "compare", link: "/column/photography/"},
          { text: "五哥摄影课堂", icon: "compare", link: "/column/Fifth_brother_photography_class/"},
          { text: "PPT 教程", icon: "slides", link: "/column/PPT/"},
        ],
      },
      {
        text: "得到",
        children: [
          { text: "薛兆丰的经济学课", icon: "blog", link: "/dedao/01-Xue-Zhaofengs-economics-class/"},
        ]
      }
    ]
  },
  { 
    text: "悦创社区", 
    icon: "creative", 
    children: [
      {
        text: "在线平台",
        children: [
          // { text: "Python 在线平台", icon: "edit", link: "https://py.bornforthis.cn/" },
          { text: "Python 在线平台", icon: "creative", link: "https://py.bornforthis.cn/" },
          { text: "数据结构与算法可视化", icon: "discover", link: "https://huangjiabaoaiyc.gitee.io/visualgo/"},
          { text: "Markdown Online", icon: "markdown", link: "https://bornforthis.cn/markdown-editor/ "},
          { text: "Json Online", icon: "json", link: "https://bornforthis.cn/json/"},
          { text: "m3u8 播放器", icon: "preview", link: "https://bornforthis.cn/m3u8"},
          { text: "进制在线转换", icon: "tool", link: "https://bornforthis.cn/tool"},
          { text: "HTML Online", icon: "network", link: "https://bornforthis.cn/html_online/"},
          { text: "格式在线转换", icon: "network", link: "https://convertio.co/zh/"},
        ]
      },
      {
        text: "文章平台",
        children: [
          { text: "CSDN", link: "https://aiyuechuang.blog.csdn.net/"},
          { text: "知乎", link: "https://www.zhihu.com/people/aiyuechuang"},
          { text: "掘金", link: "https://juejin.cn/user/2305051222344061"},
          { text: "思否", link: "https://segmentfault.com/u/aiyc"},
          { text: "51CTO博客", link: "https://blog.51cto.com/aiyc"},
          { text: "medium", link: "https://medium.com/@aiyuechuang"},
          { text: "腾讯云社区", link: "https://cloud.tencent.com/developer/user/7111610"},
          { text: "阿里云社区", link: "https://developer.aliyun.com/profile/expert/a65od3nwohg4i"},
          { text: "博客园", link: "https://www.cnblogs.com/bornforthis/"},
          { text: "墨天轮", link: "https://www.modb.pro/u/482441"},
          { text: "留言", link: "https://comment.bornforthis.cn/"},
          { text: "悦兮小栈", link: "https://comment.blovey.art/"},
          { text: "评论管理", link: "https://comment.bornforthis.cn/ui"},
          { text: "Stackoverflow", link: "https://stackoverflow.com/users/19551173/ai%e6%82%a6%e5%88%9b"},
          { text: "Mdnice", link: "https://mdnice.com/user/417729638227"},
          { text: "AI悦创随笔1", link: "/posts/12.html"},
          { text: "随笔2", link: "/essays"},
          { text: "摄影", link: "https://huangjiabaoaiyc.gitee.io/img/"},
          // { text: "随笔", children: [{ text: "AI悦创随笔1", link: "https://bornforthis.cn/posts/12.html"}, { text: "随笔2", link: "/essays"}]},
        ]
      },
      { 
        text: "Git",
        children: [
          { text: "Github", icon: "github", link: "https://gitee.com/huangjiabaoaiyc"},
          { text: "Gitee", icon: "gitee", link: "https://gitee.com/huangjiabaoaiyc"},
          { text: "vercel", icon: "gitee", link: "https://vercel.com/"},
        ]
      },
      
    ]
  },
  {
    text: "私教计划",
    icon: "alias",
    link: "https://www.yuque.com/docs/share/d94147a1-57f8-4750-b436-d657b0a4531c?#gCUv",
  },
  {
    text: "在线课堂",
    icon: "view",
    children: [
      { text: "网易云课堂主页", icon: "view", link: "https://study.163.com/provider/480000002277025/course.htm"},
      { text: "AI悦创·讲师主页", icon: "view", link: "https://m.study.163.com/user/1144240044.htm"},
      { text: "51CTO", icon: "view", link: "https://edu.51cto.com/lecturer/13952552.html"},
      { text: "录课悲惨经历", icon: "view", link: "/Record_the_class"}
    ]
  },
  { 
    text: "开源Py库",
    icon: "workingDirectory",
    link: "https://pypi.org/user/Bornforthis/",
  },
  { 
    text: "友情链接",
    icon: "alias", 
    children: [
      {
        text: "开发本站", 
        // icon: "diagram",
        // link: "https://bornforthis.cn",
        children: [
          { text: "Vue", icon: "vue", link: "https://v2.vuepress.vuejs.org/zh/"},
          { text: "主题", icon: "vue", link: "https://vuepress-theme-hope.github.io/v2/zh/"},
          { text: "Waline", icon: "waline", link: "https://waline.js.org/"},
          { text: "iconfont", link: "https://www.iconfont.cn/"},
          { text: "Leancloud", link: "https://leancloud.app/"},
          { text: "变更日志", icon: "time", link: "/changelog"},
          { text: "Vercel", link: "https://vercel.com/dashboard"},
          { text: "turingapi", link: "http://www.turingapi.com/"},
          { text: "1v1官网", link: "https://www.class1v1.com/"},
        ],
      },
      { 
        text: "审美",
        icon: "eye",
        children: [
          { text: "Unsplash", icon: "pic", link: "https://unsplash.com/"},
          { text: "Dribbble", icon: "emoji", link: "https://dribbble.com/"},
        ]
      },
      { 
        text: "悦创视频平台", 
        icon: "play",
        children: [
          { text: "哔哩哔哩", link: "https://space.bilibili.com/405961705"},
          { text: "YouTube", link: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg"},
          { text: "抖音", link: "https://www.douyin.com/user/MS4wLjABAAAAXMiezc1TmBxz0zFxeqmWHo3JpceLXlMChTLU4cHFMCA"},
          { text: "西瓜视频", link: "https://www.ixigua.com/home/2049088928100061"},
          { text: "今日头条", link: "https://www.toutiao.com/c/user/token/MS4wLjABAAAA0lL5AB1qcqjHTRzZskVepIpHq_GlaDZqSs5DG1qjRpCBxyXEniSGIGiIIEFXrXme/?source=mine_home&log_from=1c726ddbc65f6_1655376345491&wid=1655376400664"},
          { text: "CSDN 视频", link: "https://blog.csdn.net/qq_33254766?type=video"},
          { text: "知乎视频", link: "https://www.zhihu.com/people/aiyuechuang/zvideos"},
          { text: "摄影课程", link: "https://list.youku.com/albumlist/show/id_68857050"},

        ]
      },
    ],
  },
  {
    text: "Plan",
    icon: "any", 
    link: "/plan",
  },
  {
    text: "谷歌学术助手",
    icon: "any", 
    link: "/vpn",
  },
]);
