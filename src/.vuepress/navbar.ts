import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "R-Course", icon: "cib-r", link: "/R-Course/" },
  { 
    text: "Python", 
    icon: "python",
    children: [
      { text: "All", icon: "python", link: "/Python/" },
      { text: "NoteBook", icon: "notebook", link: "/Python/NoteBook/" },
      { text: "Assignment", icon: "code", link: "/Python/Assignment/" },
      { text: "Python 核心", icon: "python", link: "/Python/Python-core-technology-and-practice/" },
      { text: "basequestion", icon: "python", link: "/Python/basequestion/" },
    ]
   },
]);
