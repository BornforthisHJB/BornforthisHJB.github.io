import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/HomeWork": "structure",
  // "/R-Course/": "structure",
  // "/note/": "structure",
  "/Python/Python-core-technology-and-practice": [
    {
      text: "开篇词",
      collapsible: true,
      icon: "python",
      children: [
        "00",
      ],
    },
    {
      text: "基础篇",
      icon: "python",
      collapsible: true,
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
      ],
    },
  ]
});
