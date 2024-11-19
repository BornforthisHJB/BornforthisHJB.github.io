import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/HomeWork": "structure",
  // "/R-Course/": "structure",
  // "/note/": "structure",
  "/Java/": [
		{
			text: "第一章 Java 编程基础",
			// collapsible: true,
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
				"chapter01/13",
				"chapter01/14",
				"chapter01/15",
				"chapter01/16",
				"chapter01/17",
				"chapter01/18",
				"chapter01/19",
				"chapter01/20",
				"chapter01/21",
				"chapter01/22",
			],
		},
		{
			text: "第二章 Java面向对象编程",
			// collapsible: true,
			icon: "java",
			children: [
				"chapter02/01",
			],
		},
		{
			text: "FQA",
			collapsible: true,
			icon: "java",
			children: [
				"FQA/01-Why-do-switch-case-statements-need-to-include-breaks",
				"FQA/02-Java-String-to-int-Translate",
				"FQA/03-for-generate-rhombus",
				"FQA/05-Java-trim()方法",
			]
		},
		{
			text: "补充",
			icon: "java",
			collapsible: true,
			children: [
				"supplement/01-Java-String-contains-Method",
				"supplement/02-Java-String-charAt-Method",
			],
		},
		{
			text: "Quiz",
			icon: "java",
			collapsible: true,
			children: [
				"Quiz/quiz01",
			],
		},
		{
			text: "Test",
			icon: "java",
			collapsible: true,
			prefix: "Test/",
			children: [
				{
					text: "题目",
					icon: "yongyan",
					children: [
						"test01",
					]
				},
				{
					text: "答案",
					icon: "kepujiaoyu",
					prefix: "Answer/",
					children: [
						"test01-answer",
					]
				}

			],
		}
	],
  "/Python/Python-core-technology-and-practice/": [
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
