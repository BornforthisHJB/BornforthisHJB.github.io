import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  "/", // 主页
  { text: "主页",  icon: "home",  link: "/" },

  {
    text: "父亲",
    icon: "C",
    children: [
      "/",  // 威力给你体现，还是可以直接存放我们的链接
      { text: "我是主页儿子", icon: "home", link: "#"},
      {
        text: "我是儿子分组",
        icon: "home",
        children: [
          { text: "哈哈哈", icon: "home", link: "#"},
          { text: "哈哈哈", icon: "home", link: "#"},
          { text: "哈哈哈", icon: "home", link: "#"},
          { text: "哈哈哈", icon: "home", link: "#"},
          { text: "哈哈哈", icon: "home", link: "#"},
        ]
      }
    ]
  }
  
  // {
  //   text: "C 专栏",
  //   icon: "c",
  //   link: "/c-course/01",
  // }
  
]);
