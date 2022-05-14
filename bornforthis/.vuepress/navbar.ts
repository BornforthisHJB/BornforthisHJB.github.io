import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { 
    text: "关于悦创",
    icon: "people",
    link: "/intro",
  },
  "/home",
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
          { text: "腾讯云社区", link: "https://cloud.tencent.com/developer/user/7111610"},
          { text: "留言", link: "https://comment.bornforthis.cn/"},
          { text: "评论管理", link: "https://comment.bornforthis.cn/ui"},
        ]
      },
      { 
        text: "Git",
        children: [
          { text: "Github", icon: "github", link: "https://gitee.com/huangjiabaoaiyc"},
          { text: "Gitee", icon: "gitee", link: "https://gitee.com/huangjiabaoaiyc"},
        ]
      },
      
    ]
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
        ],
      }
    ],
  }
]);
