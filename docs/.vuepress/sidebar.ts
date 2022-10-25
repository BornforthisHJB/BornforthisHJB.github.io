import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
		"",
		"intro",
		{
			text: "私教笔记",
			icon: "1v1-4",
			link: "/1v1/",
		},
		"home",
		{
			text: "Python一对一教学",
			icon: "python",
			link: "onepython",
		},
		{
			text: "Python 体系课",
			icon: "python",
			link: "1v1-txk",
		},
		"friendship-link",
		"Record_the_class",
		"plan",
		"vpn",
		"learning_web",

	],
	"/blog/vuepress/": "structure",
	"/ps/": [
		"01",
		"02",
	],
	"/column/Python-core-technology-and-practice/": [
		{
			text: "开篇词",
			icon: "python",
			children: [
				"01",
			],
		},
		{
			text: "基础篇",
			icon: "python",
			children: [
				"13",
			],
		}
	],
	"/column/摄影入门课/": [
		{
			text: "开篇词 (1讲)",
			collapsable: true,
			icon: "cameraadd",
			children: [
				"",
			]
		}
	],
	
	"/1v1/03-Dannie": [
		{
			text: "阶段一:Python基础",
			collapsable: true,
			icon: "python",
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
			]
		}
	],
	"/1v1/07-AJuN": [
		"01-W14-Worksheet-14-File-IO-and-CSV-Files",
		"02-Wugs"
	],
	"/1v1/06-KAI/": [
		{
			text: "一、Web",
			icon: "network",
			children: [
				{ text: "01-Assignment-1-Unix", icon: "network", link: "01-Assignment-1-Unix"},
				{ text: "02-Assignment2-HTML", icon: "network", link: "04-Assignment2-HTML"},
				{ text: "03-Assignment3-CSS", icon: "network", link: "05-Assignment3-CSS"},
				{ text: "04-Assignment4 Raster Graphics", icon: "network", link: "08-Assignment4-Raster-Graphics"},
			]
		},
		{
			text: "二、Java",
			icon: "java",
			children: [
				"",
				{ text: "02-Part-1-Birth-Date-Application-30-pts", icon: "java", link: "02-Part-1-Birth-Date-Application-30-pts"},
				{ text: "03-Mac-Windows命令行编写Java", icon: "java", link: "03-Mac-Windows命令行编写Java"},
				{ text: "06-Weaving-a-Kilim-Carpet-Application", icon: "java", link: "06-Weaving-a-Kilim-Carpet-Application"},
				{ text: "07-Assignment-3-java", icon: "java", link: "07-Assignment-3-java"},
			]
		}
	],
	"/1v1/09-liujiahui": [
		{
			text: "Java",
			icon: "java",
			children: [
				"01-Coursework-1-Property-Viewer",
				"01-Coursework-1-Property-Viewer-zh",
			]
		}
	],
	"/1v1/08-LionGuo": [
		{
			text: "Python HW",
			icon: "python",
			children: [
				"01-Homework-Problem-DNA-sequencing",
				"02-Homework-Problem-2-Arctic-Ice",
				"03-Homework-Problem-3-Finding-an-exoplanet",
			]
		}
	],
	"/1v1/02-yuebao": [
		{
			text: "2022年",
			icon: "jihua2",
			collapsable: true,
			children: [
				"01-Plan",
			],
		}
	],
	"/1v1/05-Patrick/": [
		{
			text: "HomeWork",
			icon: "python",
			children: [
				"01-CITS1401-Computational-Thinking-with-Python",
				"02-CS-shaoshuai-Python-cs",
				"03-CITS1401-Computational-Thinking-wit-Python",
			]
		}
	],
	"/column/Java/": [
		{
			text: "第一章 Java编程基础 (30讲)",
			collapsable: true,
			icon: "java",
			children: [
				"chapter01/01",
				"chapter01/02",
				"chapter01/03",
				"chapter01/04",
				"chapter01/05",
				"chapter01/06",
				"chapter01/07",
				"chapter01/08",
				"chapter01/09",
				"chapter01/10",
				"chapter01/11",
				"chapter01/12",
			],
		},
		{
			text: "FQA",
			collapsable: true,
			icon: "java",
			children: [
				"FQA/01-Why-do-switch-case-statements-need-to-include-breaks",
				"FQA/03-for-generate-rhombus",
				"FQA/05-Java-trim()方法",
			]
		}
	],
	"/column/tianchi/": [
		{
			text: "Python 入门与实践",
			icon: "python",
			collapsable: true,
			children: [
				"Python/Python01"
			],
		}
	],
	"/1v1/01-Thomas-hw-note/": [
		{
			text: "搭建个人博客",
			collapsable: true,
			children:[
				"02-Cocos",
				"03-web02",
				"04-web03",
				"05-web04",
				"06-web05",
				"07-web06",
				"08-web07",
				"09-web08",
				"10-web09",
				"11-web10",
				"12-web11",
			]
		},
		{
			text: "Python 基础",
			collapsable: true,
			children: [
				"01-Variable",
				{ text: "02-初识数据类型", icon: "python", link: "13-Python01"}

			]
		}
	],
	"/column/python60/": [
		"01",
		"02",
		"03",
		"04",
		"05",
	],
	"/archives/" : "structure",
	"/blog/crawler/": "structure",
	"/blog/2022/": "structure",
	"/column/data_analysis": [
		{ 
			text: "阶段一：快速掌握数据分析必备技能",
			icon: "zhuzhuangtu",
			collapsable: true,
			children: [
				{
					text: "第1周 走进数据分析",
					collapsable: true,
					children: [
						{
							text: "第1章 认识互联网数据分析",
							// collapsable: true,
							children: [
								"week1/01",
								"week1/02",
							]
						},
						{
							text: "第2章 常见的数据类型",
							children: [
								"week1/03",
								"week1/04",
								"week1/05",
								"week1/06",
								"week1/07",
								"week1/08",
								"week1/09",
							]
						}
					]
				}
			]
		},
		{
			text: "pyecharts",
			collapsable: true,
			children: [
				"pyecharts/01",
				"pyecharts/02",
			]
		},
		{
			text: "FAQ",
			collapsable: true,
			children: [
				"FAQ/01-Excel中$.md",
				"FAQ/02"
			]
		},
		{
			text: "Math Base",
			collapsable: true,
			children: [
				{ text: "01-平均差", icon: "zhuzhuangtu", link: "Math/01-mean-deviation"},
				{ text: "02-标准差和方差", icon: "zhuzhuangtu", link: "Math/02-standard-deviation"}
				
			]
		},
		{
			text: "数据分析45讲",
			collapsable: true,
			children: [
				{ 
					text: "Introduction (Lecture 1)",
					children: [
						"Data-analysis-practice-45-lectures/Phase-one/01",
					]
				},
				{
					text: "Module 2: Data Analysis Algorithms (20 lectures)",
					children: [
						"Data-analysis-practice-45-lectures/Phase-three/17",
					]
				}
				
			]
		}
	],
	// "/learning_web/": [
	// 	"",
	// 	"01",
	// ],
	"/column/data-structure/": [
		{
			text: "阶段一：算法与数据结构基础",
			collapsable: true,
			children: [
				{
					text: "第1周 线性查找法",
					collapsable: true,
					children: [
						{
							text: "第1章 欢迎大家来到算法与数据结构的世界",
							children: [
								"week1/01",
								"week1/02",
							]
						}
					]
				}
			]
		}
	],
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
				"02",
				"03",
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
			text: "卷一:零基础学习 PPT",
			collapsable: true,
			children: [
				"",
				"01",
			]
		},
		{
			text: "卷二:PPT 改丑计划",
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
			// icon: "Web",
			collapsable: true,
			children: [
				{ 
					text: "第一章 Web 概述", 
					icon: "Web",
					// collapsable: true,
					children: [
						"base/",
						"base/base_01",
						"base/base_02",
					],
				},
				{
					text: "第二章 HTML 入门",
					icon: "Web",
					// collapsable: true,
					children: [
						"base/base_03",
						"base/base_04",
						"base/base_05",
						"base/base_06",
					]
				},
				{
					text: "第三章 CSS 入门",
					icon: "Web",
					// collapsable: true,
					children: [
						"base/base_07",
						"base/base_08",
						"base/base_09",
					]
				},
				{
					text: "第四章 JavaScript 入门",
					icon: "Web",
					// collapsable: true,
					children: [
						"base/base_10",
						"base/base_11",
						"base/base_12",
					]
				}
			],
		},
		{
			text: "前端工程师2022版",
			// icon: "Web",
			collapsable: true,
			children: [
				{
					text: "阶段一：前端基础入门",
					collapsable: true,
					children: [
						{
							text: "第1周: HTML5 基础语法与标签",
							collapsable: true,
							children: [
								{
									text: "前置引导课（课前必看）",
									collapsable: true,
									children: [
										{
											text: "第1章 课程简介",
											children: [
												"txk/week1/txk_01",
												"txk/week1/txk_02",
												"txk/week1/txk_03",
											]
										},
										{
											text: "第2章 前端开发行情与课程体系介绍",
											// collapsable: true,
											children: [
												"txk/week1/txk_04",
												"txk/week1/txk_05",
												"txk/week1/txk_06",
												"txk/week1/txk_07",
												"txk/week1/txk_08",
											]
										},
										{
											text: "第3章 开发工具和环境准备",
											children: [
												"txk/week1/txk_09",
												"txk/week1/txk_10",
												"txk/week1/txk_11",
											]
										},
										{
											text: "第4章 课程总结",
											children:[
												"txk/week1/txk_12",
											],
										},
									]
								},
								{
									text: "HTML5语法与基础标签",
									collapsable: true,
									children: [
										{
											text: "第1章 课程简介",
											children: [
												"txk/week1/txk_13",
											],
										},
										
									]
								},
								
							]
						},
						
					]
				}
			]
		},
		{
			text: "电子教辅",
			collapsable: true,
			children: [
				"book/html-01",
			]
		},
		{
			text: "FAQ",
			collapsable: true,
			children: [
				"FAQ/01-HTML图片并排显示",
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
					// collapsable: true,
					children: [
						"",
						"01",
						"02",
						"03",
						"04",
						"05",
						"06",
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
					// collapsable: true,
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
			text: "2022年",
			children: [
				"01-yogurt",
				"02-Orange_peel_coke_chicken_wings",
				"03-Shredded_hot_and_sour_potato",
				"04-Braise_in_soy_sauce_chicken_wings",
				"05-Sauted-Shredded-Pork-in-Sweet-Bean-Sauce",
				"06-paihuanggua",
				"07-糖醋虾仁",
				"08-煎山药",
				"10-蒜蓉荷兰豆",
				"11-番茄牛腩",
				"12-paihuanggua2",
				"13-虾仁滑蛋",
				"14-洋葱炒牛肉",
				"15-红烧茄子",
				"16-炒土豆粉",
				"17-青椒肉丝"
			],
		}
	],
	"/column/pyauto/gkk/": [
		"",
		// { text: "公众号", link: "01"},
	],
	"/column/pyauto/": [
		"",
		{
			text: "卷一:办公自动化 BASE",
			collapsable: true,
			children: [
				{ 
					text: "一、 Python 自动化办公",
					children: [
						"auto_base01",
						"auto_base02",
					],
				},
				{
					text: "二、Python 环境安装",
					children: [
						"auto_base03",
						"auto_base04",
					],
				},
				{
					text: "三、Python 自动化处理 Excel",
					children: [
						"auto_base05",
						"auto_base06",
						"auto_base07",
						"auto_base08",
						"auto_base09",
						"auto_base10",
						"auto_base11",
						"auto_base12",
					],
				}
				
			],
		},
		{
			text: "卷二:课前准备",
			collapsable: true,
			children: [
				"auto_01",
				"auto_02",
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
		"q7",
		"q8",
		"q9",
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
			"answer7",
			"answer8",
			"answer9",
			"answer10",
		],
	},
	{
		text: "专项练习",
		collapsable: true,
		children: [
			"special_variabl",
			"special_yunsuanfu",
			"special_for",
			"special_while",
			"special_list",
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
