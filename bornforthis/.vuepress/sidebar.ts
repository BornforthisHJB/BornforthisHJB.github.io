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
	"/column/data_analysis": [
		{ 
			text: "阶段一：快速掌握数据分析必备技能",
			icon: "state",
			collapsable: true,
			children: [
				{
					text: "第1周 走进数据分析",
					collapsable: true,
					children: [
						{
							text: "第1章 认识互联网数据分析",
							collapsable: true,
							children: [
								"01",
							]
						}
					]
				}
			]
		}
	],
	// "/learning_web/": [
	// 	"",
	// 	"01",
	// ],
	"/column/TensorFlow/零基础实战机器学习/": [
		{
			text: "开篇词 (1讲)",
			collapsable: true,
			children: [
				""
			]
		},
		{
			text: "准备篇 (4讲)",
			collapsable: true,
			children: [
				"01",
			]
		}
	],
	"/column/Programmingthinking/": [
		{
			text: "试听",
			collapsable: true,
			children: [
				"",
				"01",
			]
		}
	],
	"/dedao/01-Xue-Zhaofengs-economics-class/": [
		{
			text: "课前必读(1讲)",
			collapsable: true,
			children: [
				"",
				"01",
			]
		}
	],
	"/column/Fifth_brother_photography_class/": [
		"",
	],
	"/column/PPT/": [
		"note",
		{ 
			text: "卷一：零基础学习 PPT",
			collapsable: true,
			children: [
				"",
				"01",
			]
		},
		{
			text: "卷二：PPT 改丑计划",
			collapsable: true,
			children: [
				""
			]
		},
	],
	"/posts/": "structure",
	"/posts/html": "structure",
	// "/Open_up_your_pattern/": [
	// 	"01",
	// 	"02"
	// ],
	"/Open_up_your_pattern/": "structure",
	"/column/web/": [
		"catalogue",
		{
			text: "Web 前端入门扫盲课程",
			collapsable: true,
			children: [
				{ 
					text: "第一章 Web 概述", 
					collapsable: true,
					children: [
						"",
						"base_01",
						"base_02",
					],
				},
				{
					text: "第二章 HTML 入门",
					collapsable: true,
					children: [
						"base_03",
						"base_04",
						"base_05",
						"base_06",
					]
				},
				{
					text: "第三章 CSS 入门",
					collapsable: true,
					children: [
						"base_07",
						"base_08",
						"base_09",
					]
				},
				{
					text: "第四章 JavaScript 入门",
					collapsable: true,
					children: [
						"base_10",
						"base_11",
						"base_12",
					]
				}
			],
		},
		{
			text: "前端工程师2022版",
			collapsable: true,
			children: [
				{
					text: "阶段一：前端基础入门",
					collapsable: true,
					children: [
						"txk_01.md",
					]
				}
			]
		}
	],
	"/column/photography/": [
		{ 
			text: "器材基础Plus",
			collapsable: true,
			children: [
				{
					text: "学前班",
					collapsable: true,
					children: [
						"",
						"01",
						"02",
					]
				}
			]
		}
		
	],
	"/column/pdf/": [
		{ 
			text: "IT类",
			collapsable: true,
			children: [
				"",
			],
		}
	],
	"/column/tijie/": [
		"",
		{ 
			text: "牛客网",
			collapsable: true,
			children: [
				{ 
					text: "华为机试",
					collapsable: true,
					children: [
						"nkw_hw01",
						"nkw_hw02",
						"nkw_hw03",
						"nkw_hw04",
					]
				}
			]
		},
		{ 
			text: "一本通",
			collapsable: true,
			children: [
				"ybt_py01",
				"ybt_py02",
				"ybt_py03",
				"ybt_py04",
				"ybt_py05",
				"ybt_py06",
				"ybt_py07",
				"ybt_py08",
				"ybt_py09",
				"ybt_py10",
				"ybt_py11",
				"ybt_py12",
				"ybt_py13",
				"ybt_py14",
				"ybt_py15",
				"ybt_py16",
				"ybt_py17",
				"ybt_py18",
				"ybt_py19",
				"ybt_py20",
				"ybt_py21",
				"ybt_py22",
				"ybt_py23",
				"ybt_py24",
				"ybt_py25",
			],
		}
	],
	"/column/py/Python_tutorial/": [
		{ 
			text: "Python 基础",
			collapsable: true,
			children: [
				"",
			]
		},
		{
			text: "Python 通用教程",
			collapsable: true,
			children: [
				{
					text: "第 1 章 入门准备",
					collapsable: true,
					children: [
						"mk_py01",
						"mk_py02",
						"mk_py03",
						"mk_py04",
					],
				},
				{
					text: "第 2 章 通用语言特性",
					collapsable: true,
					children: [
						"mk_py05",
						"mk_py06",
					]
				}
			],
		}
	],
	"/column/cookdinner/": [
		{ 
			text: "2022年6月",
			children: [
				"01-yogurt",
				"02-Orange_peel_coke_chicken_wings",
				"03-Shredded_hot_and_sour_potato",
				"04-Braise_in_soy_sauce_chicken_wings",
				"05-Sauted-Shredded-Pork-in-Sweet-Bean-Sauce",
			],
		}
	],
	"/column/pyauto/gkk/": [
		"",
	],
	"/column/pyauto/": [
		"",
		{
			text: "卷一：办公自动化 BASE",
			collapsable: true,
			children: [
				{ 
					text: "一、 Python 自动化办公",
					collapsable: true,
					children: [
						"auto_base01",
						"auto_base02",
					],
				},
				{
					text: "二、Python 环境安装",
					collapsable: true,
					children: [
						"auto_base03",
						"auto_base04",
					],
				},
				{
					text: "三、Python 自动化处理 Excel",
					collapsable: true,
					children: [
						"auto_base05",
						"auto_base06",
						"auto_base07",
						"auto_base08",
						"auto_base09",
						"auto_base10",
						"auto_base11",
					],
				}
				
			],
		},
		{
			text: "课前准备",
			collapsable: true,
			children: [
			"auto_01",

		],
	}
	],
	"/column/tkinter/" :[
		{ 
		  text: "FQA",
		  // 可选的, 设置分组是否可以折叠，默认值是 false,
		  collapsable: true,
		//   link: "https://bornforthis.cn/onepython.html",
		  children: [
			"tearoff",
		  ]
		},],
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
		"hw1",
		"q2",
		"q3",
		"q4",
		"q5",
		"q6",
		"hw_word_game",
      ]
    },
	{
		text: "章节答案",
		collapsable: true,
		children: [
			"answer1",
			"answer2",
			"answer3",
			"answer4",
			"answer5",
			"answer6",
		],
	},
	{
		text: "专项练习",
		collapsable: true,
		children: [
			"special_variabl",
			"special_yunsuanfu",
			"special_for",
		],
	},
	{
		text: "技巧点拨",
		collapsable: true,
		children: [
			"skill_pycharm1",
			"skill_ipython1",
		],
	},
	{
		text: "补充知识",
		collapsable: true,
		children: [
			"requirements",
			"radix_point",
			"format"
		],
	},
	{
		text: "FQA",
		collapsable: true,
		children: [
			"faq1",
		],
	},
		  ],

	"/column/playback/": [
		{
			text: "2022年",
			collapsable: true,
			children: [
				"",
				"01-Tommy",
				"02-LKW",
				"03-20220610",
			],
		}
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
				{ text: "03-悦创随笔", icon: "debug", link: "s1_03"},
				{ text: "04-如何被动过万收入", icon: "debug", link: "s1_04"},
		]},
		{ 
			text: "模块一：爬虫基础原理", 
			collapsable: true,
			children: [
				"s2_01",
				// {
				// 	text: "02-什么是网络爬虫",
				// 	collapsable: true,
				// 	link: "s2_02",
				// 	icon: "debug",
				// 	children: [
				// 		"s2_0201",
				// 	],
				// }
				"s2_02",
				"s2_03",
				"s2_04",
				"s2_05",
				
			],
		},
		{ 
			text: "补充",
			collapsable: true,
			children: [
				"replenish01",
				{ text: "02-更智能的延迟插件", icon: "debug", link: "replenish02"},
				"replenish03",
			],
		},
	],
    });
