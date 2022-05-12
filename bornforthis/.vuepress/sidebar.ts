import { sidebar } from "vuepress-theme-hope";

// export default sidebar({
//   "/column/": [
// 		"",
// 		{
// 		  // 必要的，分组的标题文字
// 		  text: "Markdown 快速入门教程",
// 		   // 可选的, 分组标题对应的图标
// 		  icon: "creative",
// 		  // 可选的, 分组标题对应的链接
// 		  link: "/column/md/",
// 		  // 可选的，会添加到每个 item 链接地址之前
// 		  prefix: "md/",
// 		  // 可选的, 设置分组是否可以折叠，默认值是 false,
// 		  collapsable: true,
// 		  // 必要的，分组的子项目
// 		  children: [
// 			"01",
// 			"02",
// 			],
// 		},
//     { 
//       text: "Python 基础入门课程计划",
//       prefix: "py/basequestion/",
//       children: [
//         "q1"
//       ]
//     },
// 		  ],
//     });

export default sidebar({
  "/column/md/": [
		"",
		{
		  // 必要的，分组的标题文字
		  text: "Markdown 快速入门教程",
		   // 可选的, 分组标题对应的图标
		  icon: "creative",
		  // 可选的, 分组标题对应的链接
		  link: "/column/md/",
		  // 可选的, 设置分组是否可以折叠，默认值是 false,
		  collapsable: true,
		  // 必要的，分组的子项目
		  children: [
			"01",
			"02",
			"03",
			],
		},],
    "/column/py/basequestion/" :[
    { 
      text: "Python 基础入门课程计划",
	  // 可选的, 设置分组是否可以折叠，默认值是 false,
	  collapsable: true,
	//   link: "https://bornforthis.cn/onepython.html",
      children: [
		"",
        "q1",
		"q2",
		"hw_word_game",
      ]
    },
	{
		text: "答案",
		collapsable: true,
		children: [
			"answer1",
			"answer2",
		],
	},
		  ],

	"/column/crawler/": [
		"",
		{
			text: "开篇词",
			collapsable: true,
			children: [
				{ text: "01-Python 环境搭建", icon: "debug", link: "s1_01"},
				// "s1_01",
				{ text: "02-为什么做？", icon: "debug", link: "s1_02"},

		]
},],
    });
