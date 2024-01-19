import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "R-Course", icon: "cib-r", link: "/R-Course/" },
  { 
    text: "Python", 
    icon: "python",
    children: [
      { text: "All", icon: "python", link: "/Python/" },
      { text: "NoteBook", icon: "Note", link: "/Python/" },
    ]
   },
]);
