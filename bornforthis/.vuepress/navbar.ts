import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { 
    text: "创作社区", 
    icon: "creative", 
    children: [
      // { text: "Python 在线平台", icon: "edit", link: "https://py.bornforthis.cn/" },
      { text: "Python 在线平台", icon: "creative", link: "https://py.bornforthis.cn/" },
      { text: "数据结构与算法可视化", icon: "discover", link: "https://huangjiabaoaiyc.gitee.io/visualgo/"},
      { text: "Markdown Online", icon: "markdown", link: "https://www.bornforthi.com/markdown-editor/ "},
      { text: "Json Online", icon: "json", link: "https://www.bornforthi.com/json/"},
    ]
  },
  // "/",
  // "/home",
  // { text: "使用指南", icon: "creative", link: "/guide/" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
