import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
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
        ]
      }
      
    ]
  },
]);
