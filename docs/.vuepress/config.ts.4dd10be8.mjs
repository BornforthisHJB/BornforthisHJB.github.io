// docs/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// docs/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// docs/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var zhNavbar = navbar([
  "/",
  {
    text: "\u5173\u4E8E\u60A6\u521B",
    icon: "people",
    link: "/intro"
  },
  {
    text: "\u4E13\u680F",
    icon: "workingDirectory",
    children: [
      {
        text: "IT \u6587\u6863\u4E3B\u9875",
        children: [
          "/column",
          { text: "\u79C1\u6559\u56DE\u653E", icon: "play", link: "/column/playback/" },
          { text: "Python \u5408\u96C6", icon: "python", link: "/column/py/Python_tutorial/" },
          { text: "Python \u79C1\u6559", icon: "python", link: "/column/py/basequestion/" },
          { text: "Web \u4E13\u680F", icon: "web", link: "/column/web/base" },
          { text: "Python \u529E\u516C\u81EA\u52A8\u5316", icon: "python", link: "/column/pyauto" },
          { text: "\u9898\u89E3", icon: "code", link: "/column/tijie" },
          { text: "\u516C\u5F00\u8BFE\u8D44\u6599", icon: "blog", link: "/column/pyauto/gkk/" },
          { text: "\u7F16\u7A0B\u601D\u7EF4", icon: "siwei", link: "/column/Programmingthinking/" },
          { text: "\u96F6\u57FA\u7840\u5B66\u4E60\u673A\u5668\u5B66\u4E60", icon: "centos", link: "/column/TensorFlow/\u96F6\u57FA\u7840\u5B9E\u6218\u673A\u5668\u5B66\u4E60/" },
          { text: "\u6570\u636E\u5206\u6790", icon: "zhuzhuangtu", link: "/column/data_analysis/week1/01" },
          { text: "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5", icon: "shujujiegou-01", link: "/column/data-structure/week1/01" },
          { text: "Python 60 Day", icon: "python", link: "/column/python60/01" },
          { text: "AI\u60A6\u521B\xB7\u5929\u6C60\u8BA1\u5212", icon: "dianchi1", link: "/column/tianchi/Python/Python01" },
          { text: "Java\u4F53\u7CFB\u8BFE", icon: "java", link: "/column/Java" },
          { text: "AI\u60A6\u521B\xB71v1", icon: "1v1-4", link: "/1v1/" },
          { text: "\u6444\u5F71\u5165\u95E8\u8BFE", icon: "cameraadd", link: "/column/\u6444\u5F71\u5165\u95E8\u8BFE/" },
          { text: "Python\u6838\u5FC3\u6280\u672F\u4E0E\u5B9E\u6218", icon: "python", link: "/column/Python-core-technology-and-practice/01" }
        ]
      },
      {
        text: "\u7A0B\u5E8F\u5458\u7684\u79C1\u623F\u83DC",
        children: [
          { text: "\u79C1\u623F\u83DC", link: "/column/cookdinner/01-yogurt" }
        ]
      },
      {
        text: "\u827A\u672F",
        children: [
          { text: "\u6444\u5F71", icon: "compare", link: "/column/photography/" },
          { text: "\u4E94\u54E5\u6444\u5F71\u8BFE\u5802", icon: "compare", link: "/column/Fifth_brother_photography_class/" },
          { text: "PPT \u6559\u7A0B", icon: "slides", link: "/column/PPT/" }
        ]
      },
      {
        text: "\u5F97\u5230",
        children: [
          { text: "\u859B\u5146\u4E30\u7684\u7ECF\u6D4E\u5B66\u8BFE", icon: "blog", link: "/dedao/01-Xue-Zhaofengs-economics-class/" }
        ]
      }
    ]
  },
  {
    text: "\u60A6\u521B\u793E\u533A",
    icon: "creative",
    children: [
      {
        text: "\u5728\u7EBF\u5E73\u53F0",
        children: [
          { text: "Python \u5728\u7EBF\u5E73\u53F0", icon: "creative", link: "https://py.bornforthis.cn/" },
          { text: "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u53EF\u89C6\u5316", icon: "discover", link: "https://huangjiabaoaiyc.gitee.io/visualgo/" },
          { text: "Markdown Online", icon: "markdown", link: "https://bornforthis.cn/markdown-editor/ " },
          { text: "Json Online", icon: "json", link: "https://bornforthis.cn/json/" },
          { text: "m3u8 \u64AD\u653E\u5668", icon: "preview", link: "https://bornforthis.cn/m3u8" },
          { text: "\u8FDB\u5236\u5728\u7EBF\u8F6C\u6362", icon: "tool", link: "https://bornforthis.cn/tool" },
          { text: "HTML Online", icon: "web", link: "https://bornforthis.cn/html_online/" },
          { text: "\u683C\u5F0F\u5728\u7EBF\u8F6C\u6362", icon: "web", link: "https://convertio.co/zh/" },
          { text: "\u5728\u7EBF\u8F6C\u63622", icon: "web", link: "https://www.aconvert.com/cn/" },
          { text: "Python", icon: "python", link: "https://bornforthis.cn/python/#/" },
          { text: "Python", icon: "python", link: "https://bornforthis.cn/python/index.html#/" },
          { text: "fonts", link: "https://fontshub.pro/" }
        ]
      },
      {
        text: "\u6587\u7AE0\u5E73\u53F0",
        children: [
          { text: "CSDN", link: "https://aiyuechuang.blog.csdn.net/" },
          { text: "\u77E5\u4E4E", link: "https://www.zhihu.com/people/aiyuechuang" },
          { text: "\u6398\u91D1", link: "https://juejin.cn/user/2305051222344061" },
          { text: "\u601D\u5426", link: "https://segmentfault.com/u/aiyc" },
          { text: "51CTO\u535A\u5BA2", link: "https://blog.51cto.com/aiyc" },
          { text: "medium", link: "https://medium.com/@aiyuechuang" },
          { text: "\u817E\u8BAF\u4E91\u793E\u533A", link: "https://cloud.tencent.com/developer/user/7111610" },
          { text: "\u963F\u91CC\u4E91\u793E\u533A", link: "https://developer.aliyun.com/profile/expert/a65od3nwohg4i" },
          { text: "\u535A\u5BA2\u56ED", link: "https://www.cnblogs.com/bornforthis/" },
          { text: "\u7B80\u4E66", link: "https://www.jianshu.com/u/7def888b8c12" },
          { text: "\u58A8\u5929\u8F6E", link: "https://www.modb.pro/u/482441" },
          { text: "\u7559\u8A00", link: "https://comment.bornforthis.cn/" },
          { text: "\u60A6\u516E\u5C0F\u6808", link: "https://comment.blovey.art/" },
          { text: "\u8BC4\u8BBA\u7BA1\u7406", link: "https://comment.bornforthis.cn/ui" },
          { text: "Stackoverflow", link: "https://stackoverflow.com/users/19551173/ai%e6%82%a6%e5%88%9b" },
          { text: "Mdnice", link: "https://mdnice.com/user/417729638227" },
          { text: "AI\u60A6\u521B\u968F\u7B141", link: "/posts/12.html" },
          { text: "\u968F\u7B142", link: "/essays" },
          { text: "\u6444\u5F71", link: "https://huangjiabaoaiyc.gitee.io/img/" },
          { text: "Search", link: "https://crawler.algolia.com/admin/crawlers" },
          { text: "\u9886\u82F1", link: "https://www.linkedin.com/in/bornforthis/" },
          { text: "AndersonHJB.github.io", icon: "github", link: "https://github.com/AndersonHJB/AndersonHJB.github.io/issues" },
          { text: "1v1", icon: "github", link: "https://github.com/AndersonHJB/1v1/issues" }
        ]
      },
      {
        text: "Git",
        children: [
          { text: "Github", icon: "github", link: "https://github.com/AndersonHJB" },
          { text: "Gitee", icon: "gitee", link: "https://gitee.com/huangjiabaoaiyc" },
          { text: "vercel", icon: "gitee", link: "https://vercel.com/" }
        ]
      }
    ]
  },
  {
    text: "\u79C1\u6559\u8BA1\u5212",
    icon: "alias",
    link: "https://bornforthis.cn/web_runing/Tester/1554.html"
  },
  {
    text: "\u5728\u7EBF\u8BFE\u5802",
    icon: "view",
    children: [
      { text: "\u7F51\u6613\u4E91\u8BFE\u5802\u4E3B\u9875", icon: "view", link: "https://study.163.com/provider/480000002277025/course.htm" },
      { text: "51CTO", icon: "view", link: "https://edu.51cto.com/lecturer/13952552.html" },
      { text: "\u5F55\u8BFE\u60B2\u60E8\u7ECF\u5386", icon: "view", link: "/Record_the_class" }
    ]
  },
  {
    text: "\u5F00\u6E90Py\u5E93",
    icon: "workingDirectory",
    link: "https://pypi.org/user/Bornforthis/"
  },
  {
    text: "\u53CB\u60C5\u94FE\u63A5",
    icon: "alias",
    children: [
      {
        text: "\u5F00\u53D1\u672C\u7AD9",
        children: [
          { text: "Vue", icon: "vue", link: "https://v2.vuepress.vuejs.org/zh/" },
          { text: "Waline", icon: "waline", link: "https://waline.js.org/" },
          { text: "iconfont", link: "https://www.iconfont.cn/" },
          { text: "Leancloud", link: "https://leancloud.app/" },
          { text: "\u53D8\u66F4\u65E5\u5FD7", icon: "time", link: "/changelog" },
          { text: "Vercel", link: "https://vercel.com/dashboard" },
          { text: "1v1\u5B98\u7F51", icon: "1v1-4", link: "https://www.class1v1.com/" },
          { text: "\u53CB\u60C5\u94FE\u63A5", icon: "pengyoufill", link: "/friendship-link" }
        ]
      },
      {
        text: "\u5BA1\u7F8E",
        icon: "eye",
        children: [
          { text: "Unsplash", icon: "pic", link: "https://unsplash.com/" },
          { text: "Dribbble", icon: "emoji", link: "https://dribbble.com/" },
          { text: "openprocessing", icon: "pic", link: "https://openprocessing.org/" }
        ]
      },
      {
        text: "\u60A6\u521B\u89C6\u9891\u5E73\u53F0",
        icon: "play",
        children: [
          { text: "\u54D4\u54E9\u54D4\u54E9", link: "https://space.bilibili.com/405961705" },
          { text: "YouTube", link: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg" },
          { text: "\u6296\u97F3", link: "https://www.douyin.com/user/MS4wLjABAAAAXMiezc1TmBxz0zFxeqmWHo3JpceLXlMChTLU4cHFMCA" },
          { text: "\u897F\u74DC\u89C6\u9891", link: "https://www.ixigua.com/home/2049088928100061" },
          { text: "\u4ECA\u65E5\u5934\u6761", link: "https://www.toutiao.com/c/user/token/MS4wLjABAAAA0lL5AB1qcqjHTRzZskVepIpHq_GlaDZqSs5DG1qjRpCBxyXEniSGIGiIIEFXrXme/?source=mine_home&log_from=1c726ddbc65f6_1655376345491&wid=1655376400664" },
          { text: "CSDN \u89C6\u9891", link: "https://blog.csdn.net/qq_33254766?type=video" },
          { text: "\u77E5\u4E4E\u89C6\u9891", link: "https://www.zhihu.com/people/aiyuechuang/zvideos" },
          { text: "\u6444\u5F71\u8BFE\u7A0B", link: "https://list.youku.com/albumlist/show/id_68857050" }
        ]
      }
    ]
  },
  {
    text: "Plan",
    icon: "plane",
    link: "/plan"
  },
  {
    text: "\u8C37\u6B4C\u5B66\u672F\u52A9\u624B",
    icon: "chrome",
    link: "/vpn"
  }
]);

// docs/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var zhSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "\u79C1\u6559\u7B14\u8BB0",
      icon: "1v1-4",
      link: "/1v1/"
    },
    "home",
    {
      text: "Python\u4E00\u5BF9\u4E00\u6559\u5B66",
      icon: "python",
      link: "onepython"
    },
    {
      text: "Python \u4F53\u7CFB\u8BFE",
      icon: "python",
      link: "1v1-txk"
    },
    "friendship-link",
    "Record_the_class",
    "plan",
    "vpn",
    "learning_web"
  ],
  "/blog/vuepress/": "structure",
  "/ps/": [
    "01",
    "02"
  ],
  "/column/Python-core-technology-and-practice/": [
    {
      text: "\u5F00\u7BC7\u8BCD",
      icon: "python",
      children: [
        "01"
      ]
    },
    {
      text: "\u57FA\u7840\u7BC7",
      icon: "python",
      children: [
        "13"
      ]
    }
  ],
  "/column/\u6444\u5F71\u5165\u95E8\u8BFE/": [
    {
      text: "\u5F00\u7BC7\u8BCD (1\u8BB2)",
      collapsable: true,
      icon: "cameraadd",
      children: [
        ""
      ]
    }
  ],
  "/1v1/03-Dannie": [
    {
      text: "\u9636\u6BB5\u4E00:Python\u57FA\u7840",
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
        "11"
      ]
    }
  ],
  "/1v1/07-AJuN": [
    "01-W14-Worksheet-14-File-IO-and-CSV-Files",
    "02-Wugs"
  ],
  "/1v1/06-KAI/": [
    {
      text: "\u4E00\u3001Web",
      icon: "network",
      children: [
        { text: "01-Assignment-1-Unix", icon: "network", link: "01-Assignment-1-Unix" },
        { text: "02-Assignment2-HTML", icon: "network", link: "04-Assignment2-HTML" },
        { text: "03-Assignment3-CSS", icon: "network", link: "05-Assignment3-CSS" },
        { text: "04-Assignment4 Raster Graphics", icon: "network", link: "08-Assignment4-Raster-Graphics" }
      ]
    },
    {
      text: "\u4E8C\u3001Java",
      icon: "java",
      children: [
        "",
        { text: "02-Part-1-Birth-Date-Application-30-pts", icon: "java", link: "02-Part-1-Birth-Date-Application-30-pts" },
        { text: "03-Mac-Windows\u547D\u4EE4\u884C\u7F16\u5199Java", icon: "java", link: "03-Mac-Windows\u547D\u4EE4\u884C\u7F16\u5199Java" },
        { text: "06-Weaving-a-Kilim-Carpet-Application", icon: "java", link: "06-Weaving-a-Kilim-Carpet-Application" },
        { text: "07-Assignment-3-java", icon: "java", link: "07-Assignment-3-java" }
      ]
    }
  ],
  "/1v1/09-liujiahui": [
    {
      text: "Java",
      icon: "java",
      children: [
        "01-Coursework-1-Property-Viewer",
        "01-Coursework-1-Property-Viewer-zh"
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
        "03-Homework-Problem-3-Finding-an-exoplanet"
      ]
    }
  ],
  "/1v1/02-yuebao": [
    {
      text: "2022\u5E74",
      icon: "jihua2",
      collapsable: true,
      children: [
        "01-Plan"
      ]
    }
  ],
  "/1v1/05-Patrick/": [
    {
      text: "HomeWork",
      icon: "python",
      children: [
        "01-CITS1401-Computational-Thinking-with-Python",
        "02-CS-shaoshuai-Python-cs",
        "03-CITS1401-Computational-Thinking-wit-Python"
      ]
    }
  ],
  "/column/Java/": [
    {
      text: "\u7B2C\u4E00\u7AE0 Java\u7F16\u7A0B\u57FA\u7840 (30\u8BB2)",
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
        "chapter01/12"
      ]
    },
    {
      text: "FQA",
      collapsable: true,
      icon: "java",
      children: [
        "FQA/01-Why-do-switch-case-statements-need-to-include-breaks",
        "FQA/03-for-generate-rhombus",
        "FQA/05-Java-trim()\u65B9\u6CD5"
      ]
    }
  ],
  "/column/tianchi/": [
    {
      text: "Python \u5165\u95E8\u4E0E\u5B9E\u8DF5",
      icon: "python",
      collapsable: true,
      children: [
        "Python/Python01"
      ]
    }
  ],
  "/1v1/10-java-note/": [
    {
      text: "\u7B2C\u4E00\u7AE0 Java\u7F16\u7A0B\u57FA\u7840 (30\u8BB2)",
      icon: "java",
      children: [
        "01"
      ]
    }
  ],
  "/1v1/01-Thomas-hw-note/": [
    {
      text: "\u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2",
      collapsable: true,
      children: [
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
        "12-web11"
      ]
    },
    {
      text: "Python \u57FA\u7840",
      collapsable: true,
      children: [
        "01-Variable",
        { text: "02-\u521D\u8BC6\u6570\u636E\u7C7B\u578B", icon: "python", link: "13-Python01" }
      ]
    }
  ],
  "/column/python60/": [
    "01",
    "02",
    "03",
    "04",
    "05"
  ],
  "/archives/": "structure",
  "/blog/crawler/": "structure",
  "/blog/2022/": "structure",
  "/column/data_analysis": [
    {
      text: "\u9636\u6BB5\u4E00\uFF1A\u5FEB\u901F\u638C\u63E1\u6570\u636E\u5206\u6790\u5FC5\u5907\u6280\u80FD",
      icon: "zhuzhuangtu",
      collapsable: true,
      children: [
        {
          text: "\u7B2C1\u5468 \u8D70\u8FDB\u6570\u636E\u5206\u6790",
          collapsable: true,
          children: [
            {
              text: "\u7B2C1\u7AE0 \u8BA4\u8BC6\u4E92\u8054\u7F51\u6570\u636E\u5206\u6790",
              children: [
                "week1/01",
                "week1/02"
              ]
            },
            {
              text: "\u7B2C2\u7AE0 \u5E38\u89C1\u7684\u6570\u636E\u7C7B\u578B",
              children: [
                "week1/03",
                "week1/04",
                "week1/05",
                "week1/06",
                "week1/07",
                "week1/08",
                "week1/09"
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
        "pyecharts/02"
      ]
    },
    {
      text: "FAQ",
      collapsable: true,
      children: [
        "FAQ/01-Excel\u4E2D$.md",
        "FAQ/02"
      ]
    },
    {
      text: "Math Base",
      collapsable: true,
      children: [
        { text: "01-\u5E73\u5747\u5DEE", icon: "zhuzhuangtu", link: "Math/01-mean-deviation" },
        { text: "02-\u6807\u51C6\u5DEE\u548C\u65B9\u5DEE", icon: "zhuzhuangtu", link: "Math/02-standard-deviation" }
      ]
    },
    {
      text: "\u6570\u636E\u5206\u679045\u8BB2",
      collapsable: true,
      children: [
        {
          text: "Introduction (Lecture 1)",
          children: [
            "Data-analysis-practice-45-lectures/Phase-one/01"
          ]
        },
        {
          text: "Module 2: Data Analysis Algorithms (20 lectures)",
          children: [
            "Data-analysis-practice-45-lectures/Phase-three/17"
          ]
        }
      ]
    }
  ],
  "/column/data-structure/": [
    {
      text: "\u9636\u6BB5\u4E00\uFF1A\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u57FA\u7840",
      collapsable: true,
      children: [
        {
          text: "\u7B2C1\u5468 \u7EBF\u6027\u67E5\u627E\u6CD5",
          collapsable: true,
          children: [
            {
              text: "\u7B2C1\u7AE0 \u6B22\u8FCE\u5927\u5BB6\u6765\u5230\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u4E16\u754C",
              children: [
                "week1/01",
                "week1/02"
              ]
            }
          ]
        }
      ]
    }
  ],
  "/column/TensorFlow/\u96F6\u57FA\u7840\u5B9E\u6218\u673A\u5668\u5B66\u4E60/": [
    {
      text: "\u5F00\u7BC7\u8BCD (1\u8BB2)",
      collapsable: true,
      children: [
        ""
      ]
    },
    {
      text: "\u51C6\u5907\u7BC7 (4\u8BB2)",
      collapsable: true,
      children: [
        "01",
        "02",
        "03"
      ]
    }
  ],
  "/column/Programmingthinking/": [
    {
      text: "\u8BD5\u542C",
      collapsable: true,
      children: [
        "",
        "01"
      ]
    }
  ],
  "/dedao/01-Xue-Zhaofengs-economics-class/": [
    {
      text: "\u8BFE\u524D\u5FC5\u8BFB(1\u8BB2)",
      collapsable: true,
      children: [
        "",
        "01"
      ]
    }
  ],
  "/column/Fifth_brother_photography_class/": [
    ""
  ],
  "/column/PPT/": [
    "note",
    {
      text: "\u5377\u4E00:\u96F6\u57FA\u7840\u5B66\u4E60 PPT",
      collapsable: true,
      children: [
        "",
        "01"
      ]
    },
    {
      text: "\u5377\u4E8C:PPT \u6539\u4E11\u8BA1\u5212",
      collapsable: true,
      children: [
        ""
      ]
    }
  ],
  "/posts/": "structure",
  "/posts/html": "structure",
  "/Open_up_your_pattern/": "structure",
  "/column/web/": [
    "catalogue",
    {
      text: "Web \u524D\u7AEF\u5165\u95E8\u626B\u76F2\u8BFE\u7A0B",
      collapsable: true,
      children: [
        {
          text: "\u7B2C\u4E00\u7AE0 Web \u6982\u8FF0",
          icon: "Web",
          children: [
            "base/",
            "base/base_01",
            "base/base_02"
          ]
        },
        {
          text: "\u7B2C\u4E8C\u7AE0 HTML \u5165\u95E8",
          icon: "Web",
          children: [
            "base/base_03",
            "base/base_04",
            "base/base_05",
            "base/base_06"
          ]
        },
        {
          text: "\u7B2C\u4E09\u7AE0 CSS \u5165\u95E8",
          icon: "Web",
          children: [
            "base/base_07",
            "base/base_08",
            "base/base_09"
          ]
        },
        {
          text: "\u7B2C\u56DB\u7AE0 JavaScript \u5165\u95E8",
          icon: "Web",
          children: [
            "base/base_10",
            "base/base_11",
            "base/base_12"
          ]
        }
      ]
    },
    {
      text: "\u524D\u7AEF\u5DE5\u7A0B\u5E082022\u7248",
      collapsable: true,
      children: [
        {
          text: "\u9636\u6BB5\u4E00\uFF1A\u524D\u7AEF\u57FA\u7840\u5165\u95E8",
          collapsable: true,
          children: [
            {
              text: "\u7B2C1\u5468: HTML5 \u57FA\u7840\u8BED\u6CD5\u4E0E\u6807\u7B7E",
              collapsable: true,
              children: [
                {
                  text: "\u524D\u7F6E\u5F15\u5BFC\u8BFE\uFF08\u8BFE\u524D\u5FC5\u770B\uFF09",
                  collapsable: true,
                  children: [
                    {
                      text: "\u7B2C1\u7AE0 \u8BFE\u7A0B\u7B80\u4ECB",
                      children: [
                        "txk/week1/txk_01",
                        "txk/week1/txk_02",
                        "txk/week1/txk_03"
                      ]
                    },
                    {
                      text: "\u7B2C2\u7AE0 \u524D\u7AEF\u5F00\u53D1\u884C\u60C5\u4E0E\u8BFE\u7A0B\u4F53\u7CFB\u4ECB\u7ECD",
                      children: [
                        "txk/week1/txk_04",
                        "txk/week1/txk_05",
                        "txk/week1/txk_06",
                        "txk/week1/txk_07",
                        "txk/week1/txk_08"
                      ]
                    },
                    {
                      text: "\u7B2C3\u7AE0 \u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u51C6\u5907",
                      children: [
                        "txk/week1/txk_09",
                        "txk/week1/txk_10",
                        "txk/week1/txk_11"
                      ]
                    },
                    {
                      text: "\u7B2C4\u7AE0 \u8BFE\u7A0B\u603B\u7ED3",
                      children: [
                        "txk/week1/txk_12"
                      ]
                    }
                  ]
                },
                {
                  text: "HTML5\u8BED\u6CD5\u4E0E\u57FA\u7840\u6807\u7B7E",
                  collapsable: true,
                  children: [
                    {
                      text: "\u7B2C1\u7AE0 \u8BFE\u7A0B\u7B80\u4ECB",
                      children: [
                        "txk/week1/txk_13"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      text: "\u7535\u5B50\u6559\u8F85",
      collapsable: true,
      children: [
        "book/html-01"
      ]
    },
    {
      text: "FAQ",
      collapsable: true,
      children: [
        "FAQ/01-HTML\u56FE\u7247\u5E76\u6392\u663E\u793A"
      ]
    }
  ],
  "/column/photography/": [
    {
      text: "\u5668\u6750\u57FA\u7840Plus",
      collapsable: true,
      children: [
        {
          text: "\u5B66\u524D\u73ED",
          children: [
            "",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06"
          ]
        }
      ]
    }
  ],
  "/column/pdf/": [
    {
      text: "IT\u7C7B",
      collapsable: true,
      children: [
        ""
      ]
    }
  ],
  "/column/tijie/": [
    "",
    {
      text: "\u725B\u5BA2\u7F51",
      collapsable: true,
      children: [
        {
          text: "\u534E\u4E3A\u673A\u8BD5",
          children: [
            "nkw_hw01",
            "nkw_hw02",
            "nkw_hw03",
            "nkw_hw04"
          ]
        }
      ]
    },
    {
      text: "\u4E00\u672C\u901A",
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
        "ybt_py25"
      ]
    }
  ],
  "/column/py/Python_tutorial/": [
    {
      text: "Python \u57FA\u7840",
      collapsable: true,
      children: [
        ""
      ]
    },
    {
      text: "Python \u901A\u7528\u6559\u7A0B",
      collapsable: true,
      children: [
        {
          text: "\u7B2C 1 \u7AE0 \u5165\u95E8\u51C6\u5907",
          collapsable: true,
          children: [
            "mk_py01",
            "mk_py02",
            "mk_py03",
            "mk_py04"
          ]
        },
        {
          text: "\u7B2C 2 \u7AE0 \u901A\u7528\u8BED\u8A00\u7279\u6027",
          collapsable: true,
          children: [
            "mk_py05",
            "mk_py06"
          ]
        }
      ]
    }
  ],
  "/column/cookdinner/": [
    {
      text: "2022\u5E74",
      children: [
        "01-yogurt",
        "02-Orange_peel_coke_chicken_wings",
        "03-Shredded_hot_and_sour_potato",
        "04-Braise_in_soy_sauce_chicken_wings",
        "05-Sauted-Shredded-Pork-in-Sweet-Bean-Sauce",
        "06-paihuanggua",
        "07-\u7CD6\u918B\u867E\u4EC1",
        "08-\u714E\u5C71\u836F",
        "10-\u849C\u84C9\u8377\u5170\u8C46",
        "11-\u756A\u8304\u725B\u8169",
        "12-paihuanggua2",
        "13-\u867E\u4EC1\u6ED1\u86CB",
        "14-\u6D0B\u8471\u7092\u725B\u8089",
        "15-\u7EA2\u70E7\u8304\u5B50",
        "16-\u7092\u571F\u8C46\u7C89",
        "17-\u9752\u6912\u8089\u4E1D"
      ]
    }
  ],
  "/column/pyauto/gkk/": [
    ""
  ],
  "/column/pyauto/": [
    "",
    {
      text: "\u5377\u4E00:\u529E\u516C\u81EA\u52A8\u5316 BASE",
      collapsable: true,
      children: [
        {
          text: "\u4E00\u3001 Python \u81EA\u52A8\u5316\u529E\u516C",
          children: [
            "auto_base01",
            "auto_base02"
          ]
        },
        {
          text: "\u4E8C\u3001Python \u73AF\u5883\u5B89\u88C5",
          children: [
            "auto_base03",
            "auto_base04"
          ]
        },
        {
          text: "\u4E09\u3001Python \u81EA\u52A8\u5316\u5904\u7406 Excel",
          children: [
            "auto_base05",
            "auto_base06",
            "auto_base07",
            "auto_base08",
            "auto_base09",
            "auto_base10",
            "auto_base11",
            "auto_base12"
          ]
        }
      ]
    },
    {
      text: "\u5377\u4E8C:\u8BFE\u524D\u51C6\u5907",
      collapsable: true,
      children: [
        "auto_01",
        "auto_02"
      ]
    }
  ],
  "/column/tkinter/": [
    {
      text: "FQA",
      collapsable: true,
      children: [
        "tearoff"
      ]
    }
  ],
  "/column/md/": [
    "",
    {
      text: "Markdown \u5FEB\u901F\u5165\u95E8\u6559\u7A0B",
      icon: "creative",
      link: "/column/md/",
      collapsable: true,
      children: [
        "01",
        "02",
        "03"
      ]
    }
  ],
  "/column/py/basequestion/": [
    {
      text: "Python \u57FA\u7840\u5165\u95E8\u8BFE\u7A0B\u8BA1\u5212",
      collapsable: true,
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
        "hw_word_game"
      ]
    },
    {
      text: "\u7AE0\u8282\u7B54\u6848",
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
        "answer10"
      ]
    },
    {
      text: "\u4E13\u9879\u7EC3\u4E60",
      collapsable: true,
      children: [
        "special_variabl",
        "special_yunsuanfu",
        "special_for",
        "special_while",
        "special_list"
      ]
    },
    {
      text: "\u6280\u5DE7\u70B9\u62E8",
      collapsable: true,
      children: [
        "skill_pycharm1",
        "skill_ipython1"
      ]
    },
    {
      text: "\u8865\u5145\u77E5\u8BC6",
      collapsable: true,
      children: [
        "requirements",
        "radix_point",
        "format"
      ]
    },
    {
      text: "FQA",
      collapsable: true,
      children: [
        "faq1"
      ]
    }
  ],
  "/column/playback/": [
    {
      text: "2022\u5E74",
      collapsable: true,
      children: [
        "",
        "01-Tommy",
        "02-LKW",
        "03-20220610"
      ]
    }
  ],
  "/column/crawler/": [
    "",
    {
      text: "\u5F00\u7BC7\u8BCD",
      collapsable: true,
      children: [
        { text: "01-Python \u73AF\u5883\u642D\u5EFA", icon: "debug", link: "s1_01" },
        { text: "02-\u4E3A\u4EC0\u4E48\u505A\uFF1F", icon: "debug", link: "s1_02" },
        { text: "03-\u60A6\u521B\u968F\u7B14", icon: "debug", link: "s1_03" },
        { text: "04-\u5982\u4F55\u88AB\u52A8\u8FC7\u4E07\u6536\u5165", icon: "debug", link: "s1_04" }
      ]
    },
    {
      text: "\u6A21\u5757\u4E00\uFF1A\u722C\u866B\u57FA\u7840\u539F\u7406",
      collapsable: true,
      children: [
        "s2_01",
        "s2_02",
        "s2_03",
        "s2_04",
        "s2_05"
      ]
    },
    {
      text: "\u8865\u5145",
      collapsable: true,
      children: [
        "replenish01",
        { text: "02-\u66F4\u667A\u80FD\u7684\u5EF6\u8FDF\u63D2\u4EF6", icon: "debug", link: "replenish02" },
        "replenish03"
      ]
    }
  ]
});

// docs/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://bornforthis.cn/",
  author: {
    name: "AndersonHJB",
    url: "https://www.bornforthis.cn/"
  },
  iconPrefix: "iconfont icon-",
  iconAssets: "//at.alicdn.com/t/c/font_3426793_v3bc0nkd7c.css",
  logo: "/img_home/logo_min.png",
  repo: "AndersonHJB?tab=repositories",
  darkmode: "toggle",
  displayFooter: true,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  blog: {
    medias: {
      Email: "mailto:bornforthis@bornforthis.cn",
      Gitee: "https://gitee.com/huangjiabaoaiyc",
      GitHub: "https://github.com/AndersonHJB",
      Gmail: "mailto:aiyuechuang@gmail.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
      Youtube: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg",
      Zhihu: "https://www.zhihu.com/people/aiyuechuang"
    }
  },
  footer: '\u957F\u671F\u62DB\u6536\u7F16\u7A0B\u4E00\u5BF9\u4E00\u5B66\u5458!\u5FAE\u4FE1:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">\u95FDICP\u590719021486\u53F7-6</a>',
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: '\u957F\u671F\u62DB\u6536\u7F16\u7A0B\u4E00\u5BF9\u4E00\u5B66\u5458!\u5FAE\u4FE1:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">\u95FDICP\u590719021486\u53F7-6</a>',
      displayFooter: true,
      blog: {
        name: "AI\u60A6\u521B",
        avatar: "/aiyc.jpg",
        description: "\u4E00\u4E2A\u601D\u8003\u8005,\u7F16\u7A0B\u79C1\u6559 1v1",
        intro: "/intro.md",
        articlePerPage: 6
      },
      editLink: false
    }
  },
  encrypt: {
    config: {
      "/1v1/07-AJuN/": "aiyclosshwhwhwshxw",
      "/1v1/03-Dannie/01.html": "123123",
      "/1v1/01-Thomas-hw-note/": ["123123"],
      "/column/python60/": "123123a",
      "/dedao/": "123123a",
      "/column/TensorFlow/\u96F6\u57FA\u7840\u5B9E\u6218\u673A\u5668\u5B66\u4E60/": "123123a",
      "/column/Programmingthinking/": "123123a",
      "/column/playback/01-Tommy.html": "20220517",
      "/column/playback/02-LKW.html": "lkw",
      "/column/playback/03-20220610.html": "20220610",
      "/1v1/09-liujiahui/": "123123"
    }
  },
  plugins: {
    blog: {
      autoExcerpt: true
    },
    comment: {
      provider: "Waline",
      serverURL: "https://comment.bornforthis.cn/",
      reaction: [
        "/Waline/tieba/tieba_agree.png",
        "/Waline/tieba/tieba_sunglasses.png",
        "/Waline/tieba/tieba_pick_nose.png",
        "/Waline/tieba/tieba_sleep.png",
        "/Waline/tieba/tieba_awkward.png",
        "/Waline/tieba/tieba_coffee.png",
        "/Waline/tieba/tieba_cute.png",
        "/Waline/qq/qq_4.gif",
        "/Waline/qq/qq_alpaca.gif",
        "/Waline/qq/qq_bear2.gif"
      ],
      comment: true,
      pageview: true,
      copyright: false,
      dark: "auto"
    },
    components: [
      "PDF",
      "YouTube",
      "VideoPlayer",
      "BiliBili"
    ],
    mdEnhance: {
      tasklist: true,
      imageMark: true,
      footnote: true,
      tabs: true,
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      vpre: true,
      vuePlayground: true
    },
    copyright: {
      author: "\u9EC4\u5BB6\u5B9D|AI\u60A6\u521B",
      global: true,
      triggerWords: 100,
      disableCopy: false,
      disableSelection: false
    },
    pwa: false
  }
});

// docs/.vuepress/config.ts
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
var config_default = defineUserConfig({
  lang: "zh-CN",
  title: "AI\u60A6\u521B",
  description: "Python 1v1,AI\u60A6\u521B,\u4E00\u5BF9\u4E00,Python,\u7F16\u7A0B\u4E00\u5BF9\u4E00,C++,Java,AI,\u4EBA\u5DE5\u667A\u80FD,\u9EC4\u5BB6\u5B9D,Python\u4E00\u5BF9\u4E00\u6559\u5B66",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicon.ico"
      }
    ],
    [
      "script",
      {
        type: "text/javascript",
        src: "/js/baidu.js"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css"
      }
    ]
  ],
  plugins: [
    docsearchPlugin({
      appId: "ACD1S100IT",
      apiKey: "409311158985cfee5c0a535e5998ddd2",
      indexName: "bornforthis",
      placeholder: "\u641C\u7D22"
    })
  ],
  theme: theme_default
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci50cyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FpeXVlY2h1YW5nL0dpdEh1YlBhZ2UvQm9ybmZvcnRoaXNISkIuZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWl5dWVjaHVhbmcvR2l0SHViUGFnZS9Cb3JuZm9ydGhpc0hKQi5naXRodWIuaW8vZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9haXl1ZWNodWFuZy9HaXRIdWJQYWdlL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcbi8vIGltcG9ydCB7IHNlYXJjaFBsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaFwiO1xuaW1wb3J0IHsgZG9jc2VhcmNoUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1kb2NzZWFyY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJBSVx1NjBBNlx1NTIxQlwiLFxuICBkZXNjcmlwdGlvbjogXCJQeXRob24gMXYxLEFJXHU2MEE2XHU1MjFCLFx1NEUwMFx1NUJGOVx1NEUwMCxQeXRob24sXHU3RjE2XHU3QTBCXHU0RTAwXHU1QkY5XHU0RTAwLEMrKyxKYXZhLEFJLFx1NEVCQVx1NURFNVx1NjY3QVx1ODBGRCxcdTlFQzRcdTVCQjZcdTVCOUQsUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU2NTU5XHU1QjY2XCIsXG4gIGJhc2U6IFwiL1wiLFxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG4gIGhlYWQ6IFtcbiAgICAvLyBbXG4gICAgLy8gICBcInNjcmlwdFwiLFxuICAgIC8vICAge1xuICAgIC8vICAgICBhc3luYzogdHJ1ZSxcbiAgICAvLyAgICAgZGVmZXI6IHRydWUsXG4gICAgLy8gICAgIHR5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCIsXG4gICAgLy8gICAgIHNyYzogXCJodHRwczovL3BsYXRmb3JtLmxpbmtlZGluLmNvbS9iYWRnZXMvanMvcHJvZmlsZS5qc1wiLFxuICAgIC8vICAgfVxuICAgIC8vIF0sXG4gICAgLy8gW1xuICAgIC8vICAgXCJzY3JpcHRcIixcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdHlwZTogXCJ0ZXh0L2phdmFzY3JpcHRcIixcbiAgICAvLyAgICAgc3JjOiBcIi8vdW5wa2cuYnl0ZWQtc3RhdGljLmNvbS94Z3BsYXllci1obHMuanMvMi4yLjIvYnJvd3Nlci9pbmRleC5qc1wiLFxuICAgIC8vICAgICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gICAgLy8gICB9XG4gICAgLy8gXSxcbiAgICBbXG4gICAgICBcImxpbmtcIiwge1xuICAgICAgICByZWw6IFwic2hvcnRjdXQgaWNvblwiLFxuICAgICAgICBocmVmOiBcIi9mYXZpY29uLmljb1wiLFxuICAgICAgfVxuICAgIF0sXG4gICAgLy8gW1xuICAgIC8vICAgXCJzY3JpcHRcIiwge1xuICAgIC8vICAgICB0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiLFxuICAgIC8vICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AZG9jc2VhcmNoL2pzQDNcIixcbiAgICAvLyAgIH1cbiAgICAvLyBdLFxuICAgIC8vIFtcbiAgICAvLyAgIFwic2NyaXB0XCIsXG4gICAgLy8gICB7IFxuICAgIC8vICAgICB0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiLFxuICAgIC8vICAgICBzcmM6IFwiL2pzL215anMuanNcIlxuICAgIC8vICAgfSxcbiAgICAvLyBdLFxuICAgIFtcbiAgICAgIFwic2NyaXB0XCIsXG4gICAgICB7IFxuICAgICAgICB0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiLFxuICAgICAgICBzcmM6IFwiL2pzL2JhaWR1LmpzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFtcbiAgICAgIFwibGlua1wiLFxuICAgICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMjQxMDIwNl9tZmo2ZTF2YndvLmNzc1wiLFxuICAgICAgICAvLyBocmVmOiBcIi9jc3MvZm9udF8yNDEwMjA2X21majZlMXZid28uY3NzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIF0sXG4gIFxuICBwbHVnaW5zOiBbXG4gICAgLy8gY29tbWVudFBsdWdpbih7XG4gICAgLy8gICBwYWdlU2l6ZTogMTAsXG4gICAgLy8gICBjb3B5cmlnaHQ6IGZhbHNlLFxuICAgIC8vIH0pLFxuXG4gICAgZG9jc2VhcmNoUGx1Z2luKHtcbiAgICAgIC8vIFx1NEY2MFx1NzY4NFx1OTAwOVx1OTg3OVxuICAgICAgLy8gYXBwSWQsIGFwaUtleSBcdTU0OEMgaW5kZXhOYW1lIFx1NjYyRlx1NUZDNVx1NTg2Qlx1NzY4NFxuICAgICAgYXBwSWQ6IFwiQUNEMVMxMDBJVFwiLFxuICAgICAgYXBpS2V5OiBcIjQwOTMxMTE1ODk4NWNmZWU1YzBhNTM1ZTU5OThkZGQyXCIsXG4gICAgICBpbmRleE5hbWU6IFwiYm9ybmZvcnRoaXNcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlwiLFxuICAgIH0pLFxuICAgIFxuICAgIC8vIHNlYXJjaFBsdWdpbih7XG4gICAgICAvLyBsb2NhbGVzOiB7XG4gICAgICAgIC8vIFwiL1wiOiB7XG4gICAgICAgICAgLy8gcGxhY2Vob2xkZXI6IFwiXHU2NDFDXHU3RDIyXCIsXG4gICAgICAgICAgLy8gXG4gICAgICAgIC8vIH0sXG4gICAgICAvLyB9LFxuICAgIC8vIH0pLFxuICBdLFxuXG4gIHRoZW1lLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9haXl1ZWNodWFuZy9HaXRIdWJQYWdlL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FpeXVlY2h1YW5nL0dpdEh1YlBhZ2UvQm9ybmZvcnRoaXNISkIuZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9haXl1ZWNodWFuZy9HaXRIdWJQYWdlL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5pbXBvcnQgeyB6aE5hdmJhciB9IGZyb20gXCIuL25hdmJhci5qc1wiO1xuaW1wb3J0IHsgemhTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL1wiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiQW5kZXJzb25ISkJcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cuYm9ybmZvcnRoaXMuY24vXCIsXG4gIH0sXG5cbiAgaWNvblByZWZpeDogXCJpY29uZm9udCBpY29uLVwiLFxuICAvLyBpY29uQXNzZXRzOiBcImljb25mb250XCIsXG4gIGljb25Bc3NldHM6IFwiLy9hdC5hbGljZG4uY29tL3QvYy9mb250XzM0MjY3OTNfdjNiYzBua2Q3Yy5jc3NcIixcblxuICBsb2dvOiBcIi9pbWdfaG9tZS9sb2dvX21pbi5wbmdcIixcblxuICAvLyByZXBvOiBcIkJvcm5mb3J0aGlzSEpCL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pb1wiLFxuICAvLyByZXBvOiBcIkFuZGVyc29uSEpCL0FuZGVyc29uSEpCLmdpdGh1Yi5pb1wiLFxuICByZXBvOiBcIkFuZGVyc29uSEpCP3RhYj1yZXBvc2l0b3JpZXNcIixcbiAgLy8gZWRpdExpbms6IGZhbHNlLFxuICAvLyBsYXN0VXBkYXRlZDogdHJ1ZSxcblxuICAvLyBkb2NzRGlyOiBcImRvY3NzXCIsXG5cbiAgLy8gZGFya21vZGU6IFwiZW5hYmxlXCIsIC8vIFx1NUYzQVx1NTIzNlx1NkRGMVx1ODI3Mlx1NkEyMVx1NUYwRlxuICAvLyBkYXJrbW9kZTogXCJzd2l0Y2hcIixcbiAgZGFya21vZGU6IFwidG9nZ2xlXCIsXG5cbiAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICBwYWdlSW5mbzogW1wiQXV0aG9yXCIsIFwiT3JpZ2luYWxcIiwgXCJEYXRlXCIsIFwiQ2F0ZWdvcnlcIiwgXCJUYWdcIiwgXCJSZWFkaW5nVGltZVwiXSxcblxuICBibG9nOiB7XG4gICAgbWVkaWFzOiB7XG4gICAgICBFbWFpbDogXCJtYWlsdG86Ym9ybmZvcnRoaXNAYm9ybmZvcnRoaXMuY25cIixcbiAgICAgIEdpdGVlOiBcImh0dHBzOi8vZ2l0ZWUuY29tL2h1YW5namlhYmFvYWl5Y1wiLFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNvbkhKQlwiLFxuICAgICAgR21haWw6IFwibWFpbHRvOmFpeXVlY2h1YW5nQGdtYWlsLmNvbVwiLFxuICAgICAgUVE6IFwiaHR0cDovL3dwYS5xcS5jb20vbXNncmQ/dj0zJnVpbj0xNDMyODAzNzc2JnNpdGU9cXEmbWVudT15ZXNcIixcbiAgICAgIFlvdXR1YmU6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ1Q1MjVGazc0d19sOVBrMDZPeGtMeGdcIixcbiAgICAgIFpoaWh1OiBcImh0dHBzOi8vd3d3LnpoaWh1LmNvbS9wZW9wbGUvYWl5dWVjaHVhbmdcIixcbiAgICB9LFxuICB9LFxuXG4gIGZvb3RlcjogJ1x1OTU3Rlx1NjcxRlx1NjJEQlx1NjUzNlx1N0YxNlx1N0EwQlx1NEUwMFx1NUJGOVx1NEUwMFx1NUI2Nlx1NTQ1OCFcdTVGQUVcdTRGRTE6SmlhYmNkZWZoLCA8YSBocmVmPVwiaHR0cHM6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cdTk1RkRJQ1BcdTU5MDcxOTAyMTQ4Nlx1NTNGNy02PC9hPicsXG5cbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogemhOYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IHpoU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiAnXHU5NTdGXHU2NzFGXHU2MkRCXHU2NTM2XHU3RjE2XHU3QTBCXHU0RTAwXHU1QkY5XHU0RTAwXHU1QjY2XHU1NDU4IVx1NUZBRVx1NEZFMTpKaWFiY2RlZmgsIDxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlx1OTVGRElDUFx1NTkwNzE5MDIxNDg2XHU1M0Y3LTY8L2E+JyxcblxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAgICAgYmxvZzoge1xuICAgICAgICBuYW1lOiBcIkFJXHU2MEE2XHU1MjFCXCIsXG4gICAgICAgIGF2YXRhcjogXCIvYWl5Yy5qcGdcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU0RTJBXHU2MDFEXHU4MDAzXHU4MDA1LFx1N0YxNlx1N0EwQlx1NzlDMVx1NjU1OSAxdjFcIixcbiAgICAgICAgaW50cm86IFwiL2ludHJvLm1kXCIsXG4gICAgICAgIGFydGljbGVQZXJQYWdlOiA2LFxuICAgICAgfSxcbiAgICAgIGVkaXRMaW5rOiBmYWxzZSxcblxuICAgICAgLy8gbWV0YUxvY2FsZXM6IHtcbiAgICAgIC8vICAgZWRpdExpbms6IFwiRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViXCIsXG4gICAgICAvLyB9LFxuICAgIH0sXG4gIH0sXG5cbiAgZW5jcnlwdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgXCIvMXYxLzA3LUFKdU4vXCI6IFwiYWl5Y2xvc3Nod2h3aHdzaHh3XCIsXG4gICAgICBcIi8xdjEvMDMtRGFubmllLzAxLmh0bWxcIjogXCIxMjMxMjNcIixcbiAgICAgIFwiLzF2MS8wMS1UaG9tYXMtaHctbm90ZS9cIjogW1wiMTIzMTIzXCJdLFxuICAgICAgXCIvY29sdW1uL3B5dGhvbjYwL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIC8vIFwiL2NvbHVtbi9GaWZ0aF9icm90aGVyX3Bob3RvZ3JhcGh5X2NsYXNzL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIC8vIFwiL2NvbHVtbi9kYXRhLXN0cnVjdHVyZS9cIjogXCIxMjMxMjNhXCIsXG4gICAgICAvLyBcIi9jb2x1bW4vd2ViL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIFwiL2RlZGFvL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIC8vIFwiL2NvbHVtbi9kYXRhX2FuYWx5c2lzL3dlZWsxXCI6IFwiMTIzMTIzYVwiLFxuICAgICAgXCIvY29sdW1uL1RlbnNvckZsb3cvXHU5NkY2XHU1N0ZBXHU3ODQwXHU1QjlFXHU2MjE4XHU2NzNBXHU1NjY4XHU1QjY2XHU0RTYwL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIC8vIFwiLyR7ZW5jb2RlVVJJKGNvbHVtbi9UZW5zb3JGbG93L1x1OTZGNlx1NTdGQVx1Nzg0MFx1NUI5RVx1NjIxOFx1NjczQVx1NTY2OFx1NUI2Nlx1NEU2MCl9L1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIFwiL2NvbHVtbi9Qcm9ncmFtbWluZ3RoaW5raW5nL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIFwiL2NvbHVtbi9wbGF5YmFjay8wMS1Ub21teS5odG1sXCI6IFwiMjAyMjA1MTdcIixcbiAgICAgIFwiL2NvbHVtbi9wbGF5YmFjay8wMi1MS1cuaHRtbFwiOiBcImxrd1wiLFxuICAgICAgXCIvY29sdW1uL3BsYXliYWNrLzAzLTIwMjIwNjEwLmh0bWxcIjogXCIyMDIyMDYxMFwiLFxuICAgICAgXCIvMXYxLzA5LWxpdWppYWh1aS9cIjogXCIxMjMxMjNcIlxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczoge1xuICAgIGJsb2c6IHtcbiAgICAgIGF1dG9FeGNlcnB0OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvLyBJZiB5b3UgZG9uJ3QgbmVlZCBjb21tZW50IGZlYXR1cmUsIHlvdSBjYW4gcmVtb3ZlIGZvbGxvd2luZyBvcHRpb25cbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvbmZpZyBpcyBmb3IgZGVtbyBPTkxZLCBpZiB5b3UgbmVlZCBjb21tZW50IGZlYXR1cmUsIHBsZWFzZSBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbmZpZywgc2VlIGNvbW1lbnQgcGx1Z2luIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMuXG4gICAgLy8gVG8gYXZvaWQgZGlzdHVyYmluZyB0aGUgdGhlbWUgZGV2ZWxvcGVyIGFuZCBjb25zdW1pbmcgaGlzIHJlc291cmNlcywgcGxlYXNlIERPIE5PVCB1c2UgdGhlIGZvbGxvd2luZyBjb25maWcgZGlyZWN0bHkgaW4geW91ciBwcm9kdWN0aW9uIGVudmlyb25tZW50ISEhISFcbiAgICBjb21tZW50OiB7XG4gICAgLy8gICAvKipcbiAgICAvLyAgICAqIFVzaW5nIEdpc2N1c1xuICAgIC8vICAgICovXG4gICAgLy8gICAvLyBwcm92aWRlcjogXCJnaXNjdXNcIixcbiAgICAvLyAgIC8vIHJlcG86IFwiQm9ybmZvcnRoaXNISkIvY29tbWVudFwiLFxuICAgIC8vICAgLy8gcmVwb0lkOiBcIlJfa2dET0hUSkVTd1wiLFxuICAgIC8vICAgLy8gY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxuICAgIC8vICAgLy8gY2F0ZWdvcnlJZDogXCJESUNfa3dET0hUSkVTODRDT19RelwiLFxuXG4gICAgLy8gICAvKipcbiAgICAvLyAgICAqIFVzaW5nIFR3aWtvb1xuICAgIC8vICAgICovXG4gICAgLy8gICAvLyBwcm92aWRlcjogXCJUd2lrb29cIixcbiAgICAvLyAgIC8vIGVudklkOiBcImh0dHBzOi8vdHdpa29vLmNja25iYy52ZXJjZWwuYXBwXCIsXG5cbiAgICAgIC8qKlxuICAgICAgICogVXNpbmcgV2FsaW5lXG4gICAgICAgKi9cbiAgICAgICBwcm92aWRlcjogXCJXYWxpbmVcIixcbiAgICAgICBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly9jb21tZW50LmJvcm5mb3J0aGlzLmNuL1wiLFxuICAgICAgLy8gIHJlYWN0aW9uOiB0cnVlLFxuICAgICAgcmVhY3Rpb246IFtcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfYWdyZWUucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfc3VuZ2xhc3Nlcy5wbmcnLFxuICAgICAgICAnL1dhbGluZS90aWViYS90aWViYV9waWNrX25vc2UucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfc2xlZXAucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfYXdrd2FyZC5wbmcnLFxuICAgICAgICAnL1dhbGluZS90aWViYS90aWViYV9jb2ZmZWUucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfY3V0ZS5wbmcnLFxuICAgICAgICAnL1dhbGluZS9xcS9xcV80LmdpZicsXG4gICAgICAgICcvV2FsaW5lL3FxL3FxX2FscGFjYS5naWYnLFxuICAgICAgICAnL1dhbGluZS9xcS9xcV9iZWFyMi5naWYnLFxuICAgICAgXSxcbiAgICAgICBjb21tZW50OiB0cnVlLCAvLyBcdThCQzRcdThCQkFcdTY1NzBcdTdFREZcdThCQTFcbiAgICAgICBwYWdldmlldzogdHJ1ZSwgLy8gXHU2RDRGXHU4OUM4XHU5MUNGXHU3RURGXHU4QkExXG4gICAgICAgY29weXJpZ2h0OiBmYWxzZSxcbiAgICAgICBkYXJrOiBcImF1dG9cIixcbiAgICAgIC8vICBlbW9qaTogW1xuICAgICAgLy8gICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93YWxpbmVqcy9lbW9qaXNAMS4wLjAvcXEnLFxuICAgICAgLy8gICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93YWxpbmVqcy9lbW9qaXNAMS4wLjAvd2VpYm8nLFxuICAgICAgLy8gICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93YWxpbmVqcy9lbW9qaXNAMS4wLjAvYmlsaWJpbGknLFxuICAgICAgLy8gICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93YWxpbmVqcy9lbW9qaXNAMS4wLjAvYWx1cycsXG4gICAgICAvLyAgICAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dhbGluZWpzL2Vtb2ppc0AxLjAuMC90aWViYScsXG4gICAgICAvLyAgICAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dhbGluZWpzL2Vtb2ppc0AxLjAuMC90dy1lbW9qaScsXG4gICAgICAvLyAgXSxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IFtcbiAgICAgIC8vIFwiQmFkZ2VcIixcbiAgICAgIFwiUERGXCIsXG4gICAgICBcIllvdVR1YmVcIixcbiAgICAgIFwiVmlkZW9QbGF5ZXJcIixcbiAgICAgIFwiQmlsaUJpbGlcIixcbiAgICBdLFxuXG4gICAgLy8gRGlzYWJsZSBmZWF0dXJlcyB5b3UgZG9uJ3Qgd2FudCBoZXJlXG4gICAgbWRFbmhhbmNlOiB7XG4gICAgICB0YXNrbGlzdDogdHJ1ZSxcbiAgICAgIGltYWdlTWFyazogdHJ1ZSxcbiAgICAgIGZvb3Rub3RlOiB0cnVlLFxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjaGFydDogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGVjaGFydHM6IHRydWUsXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICBnZm06IHRydWUsXG4gICAgICBpbWFnZVNpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAga2F0ZXg6IHRydWUsXG4gICAgICBsYXp5TG9hZDogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBtZXJtYWlkOiB0cnVlLFxuICAgICAgcGxheWdyb3VuZDoge1xuICAgICAgICBwcmVzZXRzOiBbXCJ0c1wiLCBcInZ1ZVwiXSxcbiAgICAgIH0sXG4gICAgICBwcmVzZW50YXRpb246IHtcbiAgICAgICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcbiAgICAgIH0sXG4gICAgICBzdHlsaXplOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWFuZGVkXCIsXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tYW5kZWRcIixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHZwcmU6IHRydWUsXG4gICAgICB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuICAgIH0sXG5cbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIGF1dGhvcjogXCJcdTlFQzRcdTVCQjZcdTVCOUR8QUlcdTYwQTZcdTUyMUJcIixcbiAgICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAgIHRyaWdnZXJXb3JkczogMTAwLFxuICAgICAgZGlzYWJsZUNvcHk6IGZhbHNlLFxuICAgICAgZGlzYWJsZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgICBcbiAgICBwd2E6IGZhbHNlLFxuICAgIC8vIHB3YToge1xuICAgIC8vICAgdXBkYXRlOiBcImF2YWlsYWJsZVwiLFxuICAgIC8vICAgbWF4UGljU2l6ZTogOTAwMDAsXG4gICAgLy8gICBtYXhTaXplOiA5MDAwMDAwLFxuICAgIC8vICAgLy8gZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcbiAgICAvLyAgIGNhY2hlSFRNTDogZmFsc2UsXG4gICAgLy8gICBjYWNoZVBpYzogZmFsc2UsXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgIC8vIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FpeXVlY2h1YW5nL0dpdEh1YlBhZ2UvQm9ybmZvcnRoaXNISkIuZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWl5dWVjaHVhbmcvR2l0SHViUGFnZS9Cb3JuZm9ydGhpc0hKQi5naXRodWIuaW8vZG9jcy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9haXl1ZWNodWFuZy9HaXRIdWJQYWdlL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzcy9uYXZiYXIudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBuYXZiYXIoW1xuICBcIi9cIixcbiAgeyBcbiAgICB0ZXh0OiBcIlx1NTE3M1x1NEU4RVx1NjBBNlx1NTIxQlwiLFxuICAgIGljb246IFwicGVvcGxlXCIsXG4gICAgbGluazogXCIvaW50cm9cIixcbiAgfSxcbiAgeyBcbiAgICB0ZXh0OiBcIlx1NEUxM1x1NjgwRlwiLFxuICAgIGljb246IFwid29ya2luZ0RpcmVjdG9yeVwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIklUIFx1NjU4N1x1Njg2M1x1NEUzQlx1OTg3NVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIFwiL2NvbHVtblwiLFxuICAgICAgICAgIHsgdGV4dDogXCJcdTc5QzFcdTY1NTlcdTU2REVcdTY1M0VcIiwgaWNvbjogXCJwbGF5XCIsIGxpbms6IFwiL2NvbHVtbi9wbGF5YmFjay9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlB5dGhvbiBcdTU0MDhcdTk2QzZcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIvY29sdW1uL3B5L1B5dGhvbl90dXRvcmlhbC9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlB5dGhvbiBcdTc5QzFcdTY1NTlcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIvY29sdW1uL3B5L2Jhc2VxdWVzdGlvbi9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIldlYiBcdTRFMTNcdTY4MEZcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCIvY29sdW1uL3dlYi9iYXNlXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJQeXRob24gXHU1MjlFXHU1MTZDXHU4MUVBXHU1MkE4XHU1MzE2XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiL2NvbHVtbi9weWF1dG9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1OTg5OFx1ODlFM1wiLCBpY29uOiBcImNvZGVcIiwgbGluazogXCIvY29sdW1uL3RpamllXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTUxNkNcdTVGMDBcdThCRkVcdThENDRcdTY1OTlcIiwgaWNvbjogXCJibG9nXCIsIGxpbms6IFwiL2NvbHVtbi9weWF1dG8vZ2trL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU3RjE2XHU3QTBCXHU2MDFEXHU3RUY0XCIsIGljb246IFwic2l3ZWlcIiwgbGluazogXCIvY29sdW1uL1Byb2dyYW1taW5ndGhpbmtpbmcvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTk2RjZcdTU3RkFcdTc4NDBcdTVCNjZcdTRFNjBcdTY3M0FcdTU2NjhcdTVCNjZcdTRFNjBcIiwgaWNvbjogXCJjZW50b3NcIiwgbGluazogXCIvY29sdW1uL1RlbnNvckZsb3cvXHU5NkY2XHU1N0ZBXHU3ODQwXHU1QjlFXHU2MjE4XHU2NzNBXHU1NjY4XHU1QjY2XHU0RTYwL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXCIsIGljb246IFwiemh1emh1YW5ndHVcIiwgbGluazogXCIvY29sdW1uL2RhdGFfYW5hbHlzaXMvd2VlazEvMDFcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENVwiLCBpY29uOiBcInNodWp1amllZ291LTAxXCIsIGxpbms6IFwiL2NvbHVtbi9kYXRhLXN0cnVjdHVyZS93ZWVrMS8wMVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiUHl0aG9uIDYwIERheVwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIi9jb2x1bW4vcHl0aG9uNjAvMDFcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkFJXHU2MEE2XHU1MjFCXHUwMEI3XHU1OTI5XHU2QzYwXHU4QkExXHU1MjEyXCIsIGljb246IFwiZGlhbmNoaTFcIiwgbGluazogXCIvY29sdW1uL3RpYW5jaGkvUHl0aG9uL1B5dGhvbjAxXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJKYXZhXHU0RjUzXHU3Q0ZCXHU4QkZFXCIsIGljb246IFwiamF2YVwiLCBsaW5rOiBcIi9jb2x1bW4vSmF2YVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiQUlcdTYwQTZcdTUyMUJcdTAwQjcxdjFcIiwgaWNvbjogXCIxdjEtNFwiLCBsaW5rOiBcIi8xdjEvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTY0NDRcdTVGNzFcdTUxNjVcdTk1RThcdThCRkVcIiwgaWNvbjogXCJjYW1lcmFhZGRcIiwgbGluazogXCIvY29sdW1uL1x1NjQ0NFx1NUY3MVx1NTE2NVx1OTVFOFx1OEJGRS9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlB5dGhvblx1NjgzOFx1NUZDM1x1NjI4MFx1NjcyRlx1NEUwRVx1NUI5RVx1NjIxOFwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIi9jb2x1bW4vUHl0aG9uLWNvcmUtdGVjaG5vbG9neS1hbmQtcHJhY3RpY2UvMDFcIn0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1N0EwQlx1NUU4Rlx1NTQ1OFx1NzY4NFx1NzlDMVx1NjIzRlx1ODNEQ1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJcdTc5QzFcdTYyM0ZcdTgzRENcIiwgbGluazogXCIvY29sdW1uL2Nvb2tkaW5uZXIvMDEteW9ndXJ0XCJ9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1ODI3QVx1NjcyRlwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJcdTY0NDRcdTVGNzFcIiwgaWNvbjogXCJjb21wYXJlXCIsIGxpbms6IFwiL2NvbHVtbi9waG90b2dyYXBoeS9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NEU5NFx1NTRFNVx1NjQ0NFx1NUY3MVx1OEJGRVx1NTgwMlwiLCBpY29uOiBcImNvbXBhcmVcIiwgbGluazogXCIvY29sdW1uL0ZpZnRoX2Jyb3RoZXJfcGhvdG9ncmFwaHlfY2xhc3MvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJQUFQgXHU2NTU5XHU3QTBCXCIsIGljb246IFwic2xpZGVzXCIsIGxpbms6IFwiL2NvbHVtbi9QUFQvXCJ9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTVGOTdcdTUyMzBcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4NTlCXHU1MTQ2XHU0RTMwXHU3Njg0XHU3RUNGXHU2RDRFXHU1QjY2XHU4QkZFXCIsIGljb246IFwiYmxvZ1wiLCBsaW5rOiBcIi9kZWRhby8wMS1YdWUtWmhhb2ZlbmdzLWVjb25vbWljcy1jbGFzcy9cIn0sXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHsgXG4gICAgdGV4dDogXCJcdTYwQTZcdTUyMUJcdTc5M0VcdTUzM0FcIiwgXG4gICAgaWNvbjogXCJjcmVhdGl2ZVwiLCBcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NTcyOFx1N0VCRlx1NUU3M1x1NTNGMFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIC8vIHsgdGV4dDogXCJQeXRob24gXHU1NzI4XHU3RUJGXHU1RTczXHU1M0YwXCIsIGljb246IFwiZWRpdFwiLCBsaW5rOiBcImh0dHBzOi8vcHkuYm9ybmZvcnRoaXMuY24vXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiUHl0aG9uIFx1NTcyOFx1N0VCRlx1NUU3M1x1NTNGMFwiLCBpY29uOiBcImNyZWF0aXZlXCIsIGxpbms6IFwiaHR0cHM6Ly9weS5ib3JuZm9ydGhpcy5jbi9cIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTRFMEVcdTdCOTdcdTZDRDVcdTUzRUZcdTg5QzZcdTUzMTZcIiwgaWNvbjogXCJkaXNjb3ZlclwiLCBsaW5rOiBcImh0dHBzOi8vaHVhbmdqaWFiYW9haXljLmdpdGVlLmlvL3Zpc3VhbGdvL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiTWFya2Rvd24gT25saW5lXCIsIGljb246IFwibWFya2Rvd25cIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL21hcmtkb3duLWVkaXRvci8gXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJKc29uIE9ubGluZVwiLCBpY29uOiBcImpzb25cIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL2pzb24vXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJtM3U4IFx1NjRBRFx1NjUzRVx1NTY2OFwiLCBpY29uOiBcInByZXZpZXdcIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL20zdThcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1OEZEQlx1NTIzNlx1NTcyOFx1N0VCRlx1OEY2Q1x1NjM2MlwiLCBpY29uOiBcInRvb2xcIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL3Rvb2xcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkhUTUwgT25saW5lXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9odG1sX29ubGluZS9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjgzQ1x1NUYwRlx1NTcyOFx1N0VCRlx1OEY2Q1x1NjM2MlwiLCBpY29uOiBcIndlYlwiLCBsaW5rOiBcImh0dHBzOi8vY29udmVydGlvLmNvL3poL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1NzI4XHU3RUJGXHU4RjZDXHU2MzYyMlwiLCBpY29uOiBcIndlYlwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LmFjb252ZXJ0LmNvbS9jbi9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlB5dGhvblwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vcHl0aG9uLyMvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJQeXRob25cIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL3B5dGhvbi9pbmRleC5odG1sIy9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcImZvbnRzXCIsIGxpbms6IFwiaHR0cHM6Ly9mb250c2h1Yi5wcm8vXCJ9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXHU1RTczXHU1M0YwXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIkNTRE5cIiwgbGluazogXCJodHRwczovL2FpeXVlY2h1YW5nLmJsb2cuY3Nkbi5uZXQvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTc3RTVcdTRFNEVcIiwgbGluazogXCJodHRwczovL3d3dy56aGlodS5jb20vcGVvcGxlL2FpeXVlY2h1YW5nXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTYzOThcdTkxRDFcIiwgbGluazogXCJodHRwczovL2p1ZWppbi5jbi91c2VyLzIzMDUwNTEyMjIzNDQwNjFcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjAxRFx1NTQyNlwiLCBsaW5rOiBcImh0dHBzOi8vc2VnbWVudGZhdWx0LmNvbS91L2FpeWNcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIjUxQ1RPXHU1MzVBXHU1QkEyXCIsIGxpbms6IFwiaHR0cHM6Ly9ibG9nLjUxY3RvLmNvbS9haXljXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJtZWRpdW1cIiwgbGluazogXCJodHRwczovL21lZGl1bS5jb20vQGFpeXVlY2h1YW5nXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTgxN0VcdThCQUZcdTRFOTFcdTc5M0VcdTUzM0FcIiwgbGluazogXCJodHRwczovL2Nsb3VkLnRlbmNlbnQuY29tL2RldmVsb3Blci91c2VyLzcxMTE2MTBcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1OTYzRlx1OTFDQ1x1NEU5MVx1NzkzRVx1NTMzQVwiLCBsaW5rOiBcImh0dHBzOi8vZGV2ZWxvcGVyLmFsaXl1bi5jb20vcHJvZmlsZS9leHBlcnQvYTY1b2QzbndvaGc0aVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1MzVBXHU1QkEyXHU1NkVEXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuY25ibG9ncy5jb20vYm9ybmZvcnRoaXMvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTdCODBcdTRFNjZcIiwgbGluazogXCJodHRwczovL3d3dy5qaWFuc2h1LmNvbS91LzdkZWY4ODhiOGMxMlwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1OEE4XHU1OTI5XHU4RjZFXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cubW9kYi5wcm8vdS80ODI0NDFcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NzU1OVx1OEEwMFwiLCBsaW5rOiBcImh0dHBzOi8vY29tbWVudC5ib3JuZm9ydGhpcy5jbi9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjBBNlx1NTE2RVx1NUMwRlx1NjgwOFwiLCBsaW5rOiBcImh0dHBzOi8vY29tbWVudC5ibG92ZXkuYXJ0L1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4QkM0XHU4QkJBXHU3QkExXHU3NDA2XCIsIGxpbms6IFwiaHR0cHM6Ly9jb21tZW50LmJvcm5mb3J0aGlzLmNuL3VpXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJTdGFja292ZXJmbG93XCIsIGxpbms6IFwiaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS91c2Vycy8xOTU1MTE3My9haSVlNiU4MiVhNiVlNSU4OCU5YlwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiTWRuaWNlXCIsIGxpbms6IFwiaHR0cHM6Ly9tZG5pY2UuY29tL3VzZXIvNDE3NzI5NjM4MjI3XCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1OTY4Rlx1N0IxNDFcIiwgbGluazogXCIvcG9zdHMvMTIuaHRtbFwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU5NjhGXHU3QjE0MlwiLCBsaW5rOiBcIi9lc3NheXNcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjQ0NFx1NUY3MVwiLCBsaW5rOiBcImh0dHBzOi8vaHVhbmdqaWFiYW9haXljLmdpdGVlLmlvL2ltZy9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlNlYXJjaFwiLCBsaW5rOiBcImh0dHBzOi8vY3Jhd2xlci5hbGdvbGlhLmNvbS9hZG1pbi9jcmF3bGVyc1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU5ODg2XHU4MkYxXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Jvcm5mb3J0aGlzL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiQW5kZXJzb25ISkIuZ2l0aHViLmlvXCIsIGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc29uSEpCL0FuZGVyc29uSEpCLmdpdGh1Yi5pby9pc3N1ZXNcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIjF2MVwiLCBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNvbkhKQi8xdjEvaXNzdWVzXCJ9LFxuXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1OTY4Rlx1N0IxNFwiLCBjaGlsZHJlbjogW3sgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1OTY4Rlx1N0IxNDFcIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL3Bvc3RzLzEyLmh0bWxcIn0sIHsgdGV4dDogXCJcdTk2OEZcdTdCMTQyXCIsIGxpbms6IFwiL2Vzc2F5c1wifV19LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJHaXRcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiR2l0aHViXCIsIGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc29uSEpCXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJHaXRlZVwiLCBpY29uOiBcImdpdGVlXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRlZS5jb20vaHVhbmdqaWFiYW9haXljXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJ2ZXJjZWxcIiwgaWNvbjogXCJnaXRlZVwiLCBsaW5rOiBcImh0dHBzOi8vdmVyY2VsLmNvbS9cIn0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NzlDMVx1NjU1OVx1OEJBMVx1NTIxMlwiLFxuICAgIGljb246IFwiYWxpYXNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vd2ViX3J1bmluZy9UZXN0ZXIvMTU1NC5odG1sXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NTcyOFx1N0VCRlx1OEJGRVx1NTgwMlwiLFxuICAgIGljb246IFwidmlld1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRleHQ6IFwiXHU3RjUxXHU2NjEzXHU0RTkxXHU4QkZFXHU1ODAyXHU0RTNCXHU5ODc1XCIsIGljb246IFwidmlld1wiLCBsaW5rOiBcImh0dHBzOi8vc3R1ZHkuMTYzLmNvbS9wcm92aWRlci80ODAwMDAwMDIyNzcwMjUvY291cnNlLmh0bVwifSxcbiAgICAgIC8vIHsgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1MDBCN1x1OEJCMlx1NUUwOFx1NEUzQlx1OTg3NVwiLCBpY29uOiBcInZpZXdcIiwgbGluazogXCJodHRwczovL20uc3R1ZHkuMTYzLmNvbS91c2VyLzExNDQyNDAwNDQuaHRtXCJ9LFxuICAgICAgeyB0ZXh0OiBcIjUxQ1RPXCIsIGljb246IFwidmlld1wiLCBsaW5rOiBcImh0dHBzOi8vZWR1LjUxY3RvLmNvbS9sZWN0dXJlci8xMzk1MjU1Mi5odG1sXCJ9LFxuICAgICAgeyB0ZXh0OiBcIlx1NUY1NVx1OEJGRVx1NjBCMlx1NjBFOFx1N0VDRlx1NTM4NlwiLCBpY29uOiBcInZpZXdcIiwgbGluazogXCIvUmVjb3JkX3RoZV9jbGFzc1wifVxuICAgIF1cbiAgfSxcbiAgeyBcbiAgICB0ZXh0OiBcIlx1NUYwMFx1NkU5MFB5XHU1RTkzXCIsXG4gICAgaWNvbjogXCJ3b3JraW5nRGlyZWN0b3J5XCIsXG4gICAgbGluazogXCJodHRwczovL3B5cGkub3JnL3VzZXIvQm9ybmZvcnRoaXMvXCIsXG4gIH0sXG4gIHsgXG4gICAgdGV4dDogXCJcdTUzQ0JcdTYwQzVcdTk0RkVcdTYzQTVcIixcbiAgICBpY29uOiBcImFsaWFzXCIsIFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU1RjAwXHU1M0QxXHU2NzJDXHU3QUQ5XCIsIFxuICAgICAgICAvLyBpY29uOiBcImRpYWdyYW1cIixcbiAgICAgICAgLy8gbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlZ1ZVwiLCBpY29uOiBcInZ1ZVwiLCBsaW5rOiBcImh0dHBzOi8vdjIudnVlcHJlc3MudnVlanMub3JnL3poL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiXHU0RTNCXHU5ODk4XCIsIGljb246IFwidnVlXCIsIGxpbms6IFwiaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi96aC9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIldhbGluZVwiLCBpY29uOiBcIndhbGluZVwiLCBsaW5rOiBcImh0dHBzOi8vd2FsaW5lLmpzLm9yZy9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcImljb25mb250XCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuaWNvbmZvbnQuY24vXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJMZWFuY2xvdWRcIiwgbGluazogXCJodHRwczovL2xlYW5jbG91ZC5hcHAvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTUzRDhcdTY2RjRcdTY1RTVcdTVGRDdcIiwgaWNvbjogXCJ0aW1lXCIsIGxpbms6IFwiL2NoYW5nZWxvZ1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiVmVyY2VsXCIsIGxpbms6IFwiaHR0cHM6Ly92ZXJjZWwuY29tL2Rhc2hib2FyZFwifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwidHVyaW5nYXBpXCIsIGxpbms6IFwiaHR0cDovL3d3dy50dXJpbmdhcGkuY29tL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiMXYxXHU1Qjk4XHU3RjUxXCIsIGljb246IFwiMXYxLTRcIiwgbGluazogXCJodHRwczovL3d3dy5jbGFzczF2MS5jb20vXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTUzQ0JcdTYwQzVcdTk0RkVcdTYzQTVcIiwgaWNvbjogXCJwZW5neW91ZmlsbFwiLCBsaW5rOiBcIi9mcmllbmRzaGlwLWxpbmtcIn1cbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1NUJBMVx1N0Y4RVwiLFxuICAgICAgICBpY29uOiBcImV5ZVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJVbnNwbGFzaFwiLCBpY29uOiBcInBpY1wiLCBsaW5rOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiRHJpYmJibGVcIiwgaWNvbjogXCJlbW9qaVwiLCBsaW5rOiBcImh0dHBzOi8vZHJpYmJibGUuY29tL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwib3BlbnByb2Nlc3NpbmdcIiwgaWNvbjogXCJwaWNcIiwgbGluazogXCJodHRwczovL29wZW5wcm9jZXNzaW5nLm9yZy9cIn0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1NjBBNlx1NTIxQlx1ODlDNlx1OTg5MVx1NUU3M1x1NTNGMFwiLCBcbiAgICAgICAgaWNvbjogXCJwbGF5XCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NTRENFx1NTRFOVx1NTRENFx1NTRFOVwiLCBsaW5rOiBcImh0dHBzOi8vc3BhY2UuYmlsaWJpbGkuY29tLzQwNTk2MTcwNVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiWW91VHViZVwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNUNTI1Rms3NHdfbDlQazA2T3hrTHhnXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTYyOTZcdTk3RjNcIiwgbGluazogXCJodHRwczovL3d3dy5kb3V5aW4uY29tL3VzZXIvTVM0d0xqQUJBQUFBWE1pZXpjMVRtQnh6MHpGeGVxbVdIbzNKcGNlTFhsTUNoVExVNGNIRk1DQVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4OTdGXHU3NERDXHU4OUM2XHU5ODkxXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuaXhpZ3VhLmNvbS9ob21lLzIwNDkwODg5MjgxMDAwNjFcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NEVDQVx1NjVFNVx1NTkzNFx1Njc2MVwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LnRvdXRpYW8uY29tL2MvdXNlci90b2tlbi9NUzR3TGpBQkFBQUEwbEw1QUIxcWNxakhUUnpac2tWZXBJcEhxX0dsYURacVNzNURHMXFqUnBDQnh5WEVuaVNHSUdpSUlFRlhyWG1lLz9zb3VyY2U9bWluZV9ob21lJmxvZ19mcm9tPTFjNzI2ZGRiYzY1ZjZfMTY1NTM3NjM0NTQ5MSZ3aWQ9MTY1NTM3NjQwMDY2NFwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiQ1NETiBcdTg5QzZcdTk4OTFcIiwgbGluazogXCJodHRwczovL2Jsb2cuY3Nkbi5uZXQvcXFfMzMyNTQ3NjY/dHlwZT12aWRlb1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU3N0U1XHU0RTRFXHU4OUM2XHU5ODkxXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3Blb3BsZS9haXl1ZWNodWFuZy96dmlkZW9zXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTY0NDRcdTVGNzFcdThCRkVcdTdBMEJcIiwgbGluazogXCJodHRwczovL2xpc3QueW91a3UuY29tL2FsYnVtbGlzdC9zaG93L2lkXzY4ODU3MDUwXCJ9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlBsYW5cIixcbiAgICBpY29uOiBcInBsYW5lXCIsIFxuICAgIGxpbms6IFwiL3BsYW5cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU4QzM3XHU2QjRDXHU1QjY2XHU2NzJGXHU1MkE5XHU2MjRCXCIsXG4gICAgaWNvbjogXCJjaHJvbWVcIiwgXG4gICAgbGluazogXCIvdnBuXCIsXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FpeXVlY2h1YW5nL0dpdEh1YlBhZ2UvQm9ybmZvcnRoaXNISkIuZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWl5dWVjaHVhbmcvR2l0SHViUGFnZS9Cb3JuZm9ydGhpc0hKQi5naXRodWIuaW8vZG9jcy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWl5dWVjaHVhbmcvR2l0SHViUGFnZS9Cb3JuZm9ydGhpc0hKQi5naXRodWIuaW8vZG9jcy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgemhTaWRlYmFyID0gc2lkZWJhcih7XG4gIFwiL1wiOiBbXG5cdFx0XCJcIixcblx0XHRcImludHJvXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTc5QzFcdTY1NTlcdTdCMTRcdThCQjBcIixcblx0XHRcdGljb246IFwiMXYxLTRcIixcblx0XHRcdGxpbms6IFwiLzF2MS9cIixcblx0XHR9LFxuXHRcdFwiaG9tZVwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU2NTU5XHU1QjY2XCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0bGluazogXCJvbmVweXRob25cIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHl0aG9uIFx1NEY1M1x1N0NGQlx1OEJGRVwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGxpbms6IFwiMXYxLXR4a1wiLFxuXHRcdH0sXG5cdFx0XCJmcmllbmRzaGlwLWxpbmtcIixcblx0XHRcIlJlY29yZF90aGVfY2xhc3NcIixcblx0XHRcInBsYW5cIixcblx0XHRcInZwblwiLFxuXHRcdFwibGVhcm5pbmdfd2ViXCIsXG5cblx0XSxcblx0XCIvYmxvZy92dWVwcmVzcy9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvcHMvXCI6IFtcblx0XHRcIjAxXCIsXG5cdFx0XCIwMlwiLFxuXHRdLFxuXHRcIi9jb2x1bW4vUHl0aG9uLWNvcmUtdGVjaG5vbG9neS1hbmQtcHJhY3RpY2UvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRFwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTdGQVx1Nzg0MFx1N0JDN1wiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMTNcIixcblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vXHU2NDQ0XHU1RjcxXHU1MTY1XHU5NUU4XHU4QkZFL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTVGMDBcdTdCQzdcdThCQ0QgKDFcdThCQjIpXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwiY2FtZXJhYWRkXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XG5cdFwiLzF2MS8wMy1EYW5uaWVcIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU5NjM2XHU2QkI1XHU0RTAwOlB5dGhvblx1NTdGQVx1Nzg0MFwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFwiMDNcIixcblx0XHRcdFx0XCIwNFwiLFxuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFwiMDZcIixcblx0XHRcdFx0XCIwN1wiLFxuXHRcdFx0XHRcIjA4XCIsXG5cdFx0XHRcdFwiMDlcIixcblx0XHRcdFx0XCIxMFwiLFxuXHRcdFx0XHRcIjExXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvMDctQUp1TlwiOiBbXG5cdFx0XCIwMS1XMTQtV29ya3NoZWV0LTE0LUZpbGUtSU8tYW5kLUNTVi1GaWxlc1wiLFxuXHRcdFwiMDItV3Vnc1wiXG5cdF0sXG5cdFwiLzF2MS8wNi1LQUkvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NEUwMFx1MzAwMVdlYlwiLFxuXHRcdFx0aWNvbjogXCJuZXR3b3JrXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiMDEtQXNzaWdubWVudC0xLVVuaXhcIiwgaWNvbjogXCJuZXR3b3JrXCIsIGxpbms6IFwiMDEtQXNzaWdubWVudC0xLVVuaXhcIn0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1Bc3NpZ25tZW50Mi1IVE1MXCIsIGljb246IFwibmV0d29ya1wiLCBsaW5rOiBcIjA0LUFzc2lnbm1lbnQyLUhUTUxcIn0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1Bc3NpZ25tZW50My1DU1NcIiwgaWNvbjogXCJuZXR3b3JrXCIsIGxpbms6IFwiMDUtQXNzaWdubWVudDMtQ1NTXCJ9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDQtQXNzaWdubWVudDQgUmFzdGVyIEdyYXBoaWNzXCIsIGljb246IFwibmV0d29ya1wiLCBsaW5rOiBcIjA4LUFzc2lnbm1lbnQ0LVJhc3Rlci1HcmFwaGljc1wifSxcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU0RThDXHUzMDAxSmF2YVwiLFxuXHRcdFx0aWNvbjogXCJqYXZhXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XHR7IHRleHQ6IFwiMDItUGFydC0xLUJpcnRoLURhdGUtQXBwbGljYXRpb24tMzAtcHRzXCIsIGljb246IFwiamF2YVwiLCBsaW5rOiBcIjAyLVBhcnQtMS1CaXJ0aC1EYXRlLUFwcGxpY2F0aW9uLTMwLXB0c1wifSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAzLU1hYy1XaW5kb3dzXHU1NDdEXHU0RUU0XHU4ODRDXHU3RjE2XHU1MTk5SmF2YVwiLCBpY29uOiBcImphdmFcIiwgbGluazogXCIwMy1NYWMtV2luZG93c1x1NTQ3RFx1NEVFNFx1ODg0Q1x1N0YxNlx1NTE5OUphdmFcIn0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNi1XZWF2aW5nLWEtS2lsaW0tQ2FycGV0LUFwcGxpY2F0aW9uXCIsIGljb246IFwiamF2YVwiLCBsaW5rOiBcIjA2LVdlYXZpbmctYS1LaWxpbS1DYXJwZXQtQXBwbGljYXRpb25cIn0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNy1Bc3NpZ25tZW50LTMtamF2YVwiLCBpY29uOiBcImphdmFcIiwgbGluazogXCIwNy1Bc3NpZ25tZW50LTMtamF2YVwifSxcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS8wOS1saXVqaWFodWlcIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiSmF2YVwiLFxuXHRcdFx0aWNvbjogXCJqYXZhXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLUNvdXJzZXdvcmstMS1Qcm9wZXJ0eS1WaWV3ZXJcIixcblx0XHRcdFx0XCIwMS1Db3Vyc2V3b3JrLTEtUHJvcGVydHktVmlld2VyLXpoXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvMDgtTGlvbkd1b1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQeXRob24gSFdcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLUhvbWV3b3JrLVByb2JsZW0tRE5BLXNlcXVlbmNpbmdcIixcblx0XHRcdFx0XCIwMi1Ib21ld29yay1Qcm9ibGVtLTItQXJjdGljLUljZVwiLFxuXHRcdFx0XHRcIjAzLUhvbWV3b3JrLVByb2JsZW0tMy1GaW5kaW5nLWFuLWV4b3BsYW5ldFwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzAyLXl1ZWJhb1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIyMDIyXHU1RTc0XCIsXG5cdFx0XHRpY29uOiBcImppaHVhMlwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLVBsYW5cIixcblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvMDUtUGF0cmljay9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiSG9tZVdvcmtcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLUNJVFMxNDAxLUNvbXB1dGF0aW9uYWwtVGhpbmtpbmctd2l0aC1QeXRob25cIixcblx0XHRcdFx0XCIwMi1DUy1zaGFvc2h1YWktUHl0aG9uLWNzXCIsXG5cdFx0XHRcdFwiMDMtQ0lUUzE0MDEtQ29tcHV0YXRpb25hbC1UaGlua2luZy13aXQtUHl0aG9uXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vSmF2YS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU3QUUwIEphdmFcdTdGMTZcdTdBMEJcdTU3RkFcdTc4NDAgKDMwXHU4QkIyKVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRpY29uOiBcImphdmFcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzAxXCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzAyXCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzAzXCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzA0XCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzA1XCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzA2XCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzA3XCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzA4XCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzA5XCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzEwXCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzExXCIsXG5cdFx0XHRcdFwiY2hhcHRlcjAxLzEyXCIsXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJGUUFcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0aWNvbjogXCJqYXZhXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIkZRQS8wMS1XaHktZG8tc3dpdGNoLWNhc2Utc3RhdGVtZW50cy1uZWVkLXRvLWluY2x1ZGUtYnJlYWtzXCIsXG5cdFx0XHRcdFwiRlFBLzAzLWZvci1nZW5lcmF0ZS1yaG9tYnVzXCIsXG5cdFx0XHRcdFwiRlFBLzA1LUphdmEtdHJpbSgpXHU2NUI5XHU2Q0Q1XCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vdGlhbmNoaS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHl0aG9uIFx1NTE2NVx1OTVFOFx1NEUwRVx1NUI5RVx1OERGNVwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJQeXRob24vUHl0aG9uMDFcIlxuXHRcdFx0XSxcblx0XHR9XG5cdF0sXG5cdFwiLzF2MS8xMC1qYXZhLW5vdGUvXCI6IFtcblx0XHR7IFxuXHRcdFx0dGV4dDogXCJcdTdCMkNcdTRFMDBcdTdBRTAgSmF2YVx1N0YxNlx1N0EwQlx1NTdGQVx1Nzg0MCAoMzBcdThCQjIpXCIsXG5cdFx0XHRpY29uOiBcImphdmFcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIlxuXHRcdFx0XVxuXHRcdFxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzAxLVRob21hcy1ody1ub3RlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTY0MkRcdTVFRkFcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTJcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46W1xuXHRcdFx0XHRcIjAyLUNvY29zXCIsXG5cdFx0XHRcdFwiMDMtd2ViMDJcIixcblx0XHRcdFx0XCIwNC13ZWIwM1wiLFxuXHRcdFx0XHRcIjA1LXdlYjA0XCIsXG5cdFx0XHRcdFwiMDYtd2ViMDVcIixcblx0XHRcdFx0XCIwNy13ZWIwNlwiLFxuXHRcdFx0XHRcIjA4LXdlYjA3XCIsXG5cdFx0XHRcdFwiMDktd2ViMDhcIixcblx0XHRcdFx0XCIxMC13ZWIwOVwiLFxuXHRcdFx0XHRcIjExLXdlYjEwXCIsXG5cdFx0XHRcdFwiMTItd2ViMTFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHl0aG9uIFx1NTdGQVx1Nzg0MFwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLVZhcmlhYmxlXCIsXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1cdTUyMURcdThCQzZcdTY1NzBcdTYzNkVcdTdDN0JcdTU3OEJcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIxMy1QeXRob24wMVwifVxuXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vcHl0aG9uNjAvXCI6IFtcblx0XHRcIjAxXCIsXG5cdFx0XCIwMlwiLFxuXHRcdFwiMDNcIixcblx0XHRcIjA0XCIsXG5cdFx0XCIwNVwiLFxuXHRdLFxuXHRcIi9hcmNoaXZlcy9cIiA6IFwic3RydWN0dXJlXCIsXG5cdFwiL2Jsb2cvY3Jhd2xlci9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvYmxvZy8yMDIyL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9jb2x1bW4vZGF0YV9hbmFseXNpc1wiOiBbXG5cdFx0eyBcblx0XHRcdHRleHQ6IFwiXHU5NjM2XHU2QkI1XHU0RTAwXHVGRjFBXHU1RkVCXHU5MDFGXHU2MzhDXHU2M0UxXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU1RkM1XHU1OTA3XHU2MjgwXHU4MEZEXCIsXG5cdFx0XHRpY29uOiBcInpodXpodWFuZ3R1XCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzFcdTU0NjggXHU4RDcwXHU4RkRCXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJcdTdCMkMxXHU3QUUwIFx1OEJBNFx1OEJDNlx1NEU5Mlx1ODA1NFx1N0Y1MVx1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFwiLFxuXHRcdFx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcIndlZWsxLzAxXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJ3ZWVrMS8wMlwiLFxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzJcdTdBRTAgXHU1RTM4XHU4OUMxXHU3Njg0XHU2NTcwXHU2MzZFXHU3QzdCXHU1NzhCXCIsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XCJ3ZWVrMS8wM1wiLFxuXHRcdFx0XHRcdFx0XHRcdFwid2VlazEvMDRcIixcblx0XHRcdFx0XHRcdFx0XHRcIndlZWsxLzA1XCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJ3ZWVrMS8wNlwiLFxuXHRcdFx0XHRcdFx0XHRcdFwid2VlazEvMDdcIixcblx0XHRcdFx0XHRcdFx0XHRcIndlZWsxLzA4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJ3ZWVrMS8wOVwiLFxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcInB5ZWNoYXJ0c1wiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInB5ZWNoYXJ0cy8wMVwiLFxuXHRcdFx0XHRcInB5ZWNoYXJ0cy8wMlwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJGQVFcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJGQVEvMDEtRXhjZWxcdTRFMkQkLm1kXCIsXG5cdFx0XHRcdFwiRkFRLzAyXCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiTWF0aCBCYXNlXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCIwMS1cdTVFNzNcdTU3NDdcdTVERUVcIiwgaWNvbjogXCJ6aHV6aHVhbmd0dVwiLCBsaW5rOiBcIk1hdGgvMDEtbWVhbi1kZXZpYXRpb25cIn0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1cdTY4MDdcdTUxQzZcdTVERUVcdTU0OENcdTY1QjlcdTVERUVcIiwgaWNvbjogXCJ6aHV6aHVhbmd0dVwiLCBsaW5rOiBcIk1hdGgvMDItc3RhbmRhcmQtZGV2aWF0aW9uXCJ9XG5cdFx0XHRcdFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTA0NVx1OEJCMlwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IFwiSW50cm9kdWN0aW9uIChMZWN0dXJlIDEpXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiRGF0YS1hbmFseXNpcy1wcmFjdGljZS00NS1sZWN0dXJlcy9QaGFzZS1vbmUvMDFcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIk1vZHVsZSAyOiBEYXRhIEFuYWx5c2lzIEFsZ29yaXRobXMgKDIwIGxlY3R1cmVzKVwiLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcIkRhdGEtYW5hbHlzaXMtcHJhY3RpY2UtNDUtbGVjdHVyZXMvUGhhc2UtdGhyZWUvMTdcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHQvLyBcIi9sZWFybmluZ193ZWIvXCI6IFtcblx0Ly8gXHRcIlwiLFxuXHQvLyBcdFwiMDFcIixcblx0Ly8gXSxcblx0XCIvY29sdW1uL2RhdGEtc3RydWN0dXJlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTk2MzZcdTZCQjVcdTRFMDBcdUZGMUFcdTdCOTdcdTZDRDVcdTRFMEVcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTU3RkFcdTc4NDBcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1NTQ2OCBcdTdFQkZcdTYwMjdcdTY3RTVcdTYyN0VcdTZDRDVcIixcblx0XHRcdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzFcdTdBRTAgXHU2QjIyXHU4RkNFXHU1OTI3XHU1QkI2XHU2NzY1XHU1MjMwXHU3Qjk3XHU2Q0Q1XHU0RTBFXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU3Njg0XHU0RTE2XHU3NTRDXCIsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XCJ3ZWVrMS8wMVwiLFxuXHRcdFx0XHRcdFx0XHRcdFwid2VlazEvMDJcIixcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL1RlbnNvckZsb3cvXHU5NkY2XHU1N0ZBXHU3ODQwXHU1QjlFXHU2MjE4XHU2NzNBXHU1NjY4XHU1QjY2XHU0RTYwL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTVGMDBcdTdCQzdcdThCQ0QgKDFcdThCQjIpXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1MUM2XHU1OTA3XHU3QkM3ICg0XHU4QkIyKVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL1Byb2dyYW1taW5ndGhpbmtpbmcvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1OEJENVx1NTQyQ1wiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9kZWRhby8wMS1YdWUtWmhhb2ZlbmdzLWVjb25vbWljcy1jbGFzcy9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU4QkZFXHU1MjREXHU1RkM1XHU4QkZCKDFcdThCQjIpXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9GaWZ0aF9icm90aGVyX3Bob3RvZ3JhcGh5X2NsYXNzL1wiOiBbXG5cdFx0XCJcIixcblx0XSxcblx0XCIvY29sdW1uL1BQVC9cIjogW1xuXHRcdFwibm90ZVwiLFxuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NEUwMDpcdTk2RjZcdTU3RkFcdTc4NDBcdTVCNjZcdTRFNjAgUFBUXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1Mzc3XHU0RThDOlBQVCBcdTY1MzlcdTRFMTFcdThCQTFcdTUyMTJcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIlxuXHRcdFx0XVxuXHRcdH0sXG5cdF0sXG5cdFwiL3Bvc3RzL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9wb3N0cy9odG1sXCI6IFwic3RydWN0dXJlXCIsXG5cdC8vIFwiL09wZW5fdXBfeW91cl9wYXR0ZXJuL1wiOiBbXG5cdC8vIFx0XCIwMVwiLFxuXHQvLyBcdFwiMDJcIlxuXHQvLyBdLFxuXHRcIi9PcGVuX3VwX3lvdXJfcGF0dGVybi9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvY29sdW1uL3dlYi9cIjogW1xuXHRcdFwiY2F0YWxvZ3VlXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJXZWIgXHU1MjREXHU3QUVGXHU1MTY1XHU5NUU4XHU2MjZCXHU3NkYyXHU4QkZFXHU3QTBCXCIsXG5cdFx0XHQvLyBpY29uOiBcIldlYlwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU3QUUwIFdlYiBcdTY5ODJcdThGRjBcIiwgXG5cdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJiYXNlL1wiLFxuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDFcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzAyXCIsXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RThDXHU3QUUwIEhUTUwgXHU1MTY1XHU5NUU4XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDNcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzA0XCIsXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8wNVwiLFxuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDZcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NEUwOVx1N0FFMCBDU1MgXHU1MTY1XHU5NUU4XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDdcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzA4XCIsXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8wOVwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU1NkRCXHU3QUUwIEphdmFTY3JpcHQgXHU1MTY1XHU5NUU4XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMTBcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzExXCIsXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8xMlwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1MjREXHU3QUVGXHU1REU1XHU3QTBCXHU1RTA4MjAyMlx1NzI0OFwiLFxuXHRcdFx0Ly8gaWNvbjogXCJXZWJcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU5NjM2XHU2QkI1XHU0RTAwXHVGRjFBXHU1MjREXHU3QUVGXHU1N0ZBXHU3ODQwXHU1MTY1XHU5NUU4XCIsXG5cdFx0XHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJcdTdCMkMxXHU1NDY4OiBIVE1MNSBcdTU3RkFcdTc4NDBcdThCRURcdTZDRDVcdTRFMEVcdTY4MDdcdTdCN0VcIixcblx0XHRcdFx0XHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogXCJcdTUyNERcdTdGNkVcdTVGMTVcdTVCRkNcdThCRkVcdUZGMDhcdThCRkVcdTUyNERcdTVGQzVcdTc3MEJcdUZGMDlcIixcblx0XHRcdFx0XHRcdFx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1N0FFMCBcdThCRkVcdTdBMEJcdTdCODBcdTRFQ0JcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzAxXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMDJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18wM1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMlx1N0FFMCBcdTUyNERcdTdBRUZcdTVGMDBcdTUzRDFcdTg4NENcdTYwQzVcdTRFMEVcdThCRkVcdTdBMEJcdTRGNTNcdTdDRkJcdTRFQ0JcdTdFQ0RcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzA0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMDVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18wNlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzA3XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMDhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzNcdTdBRTAgXHU1RjAwXHU1M0QxXHU1REU1XHU1MTc3XHU1NDhDXHU3M0FGXHU1ODgzXHU1MUM2XHU1OTA3XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18wOVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzEwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMTFcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzRcdTdBRTAgXHU4QkZFXHU3QTBCXHU2MDNCXHU3RUQzXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzEyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiSFRNTDVcdThCRURcdTZDRDVcdTRFMEVcdTU3RkFcdTc4NDBcdTY4MDdcdTdCN0VcIixcblx0XHRcdFx0XHRcdFx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1N0FFMCBcdThCRkVcdTdBMEJcdTdCODBcdTRFQ0JcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzEzXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTc1MzVcdTVCNTBcdTY1NTlcdThGODVcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJib29rL2h0bWwtMDFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiRkFRXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiRkFRLzAxLUhUTUxcdTU2RkVcdTcyNDdcdTVFNzZcdTYzOTJcdTY2M0VcdTc5M0FcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9waG90b2dyYXBoeS9cIjogW1xuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlx1NTY2OFx1Njc1MFx1NTdGQVx1Nzg0MFBsdXNcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU1QjY2XHU1MjREXHU3M0VEXCIsXG5cdFx0XHRcdFx0Ly8gY29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFx0XHRcIjAzXCIsXG5cdFx0XHRcdFx0XHRcIjA0XCIsXG5cdFx0XHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFx0XHRcIjA2XCIsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHRcdFxuXHRdLFxuXHRcIi9jb2x1bW4vcGRmL1wiOiBbXG5cdFx0eyBcblx0XHRcdHRleHQ6IFwiSVRcdTdDN0JcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vdGlqaWUvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlx1NzI1Qlx1NUJBMlx1N0Y1MVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IFwiXHU1MzRFXHU0RTNBXHU2NzNBXHU4QkQ1XCIsXG5cdFx0XHRcdFx0Ly8gY29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwibmt3X2h3MDFcIixcblx0XHRcdFx0XHRcdFwibmt3X2h3MDJcIixcblx0XHRcdFx0XHRcdFwibmt3X2h3MDNcIixcblx0XHRcdFx0XHRcdFwibmt3X2h3MDRcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlx1NEUwMFx1NjcyQ1x1OTAxQVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInlidF9weTAxXCIsXG5cdFx0XHRcdFwieWJ0X3B5MDJcIixcblx0XHRcdFx0XCJ5YnRfcHkwM1wiLFxuXHRcdFx0XHRcInlidF9weTA0XCIsXG5cdFx0XHRcdFwieWJ0X3B5MDVcIixcblx0XHRcdFx0XCJ5YnRfcHkwNlwiLFxuXHRcdFx0XHRcInlidF9weTA3XCIsXG5cdFx0XHRcdFwieWJ0X3B5MDhcIixcblx0XHRcdFx0XCJ5YnRfcHkwOVwiLFxuXHRcdFx0XHRcInlidF9weTEwXCIsXG5cdFx0XHRcdFwieWJ0X3B5MTFcIixcblx0XHRcdFx0XCJ5YnRfcHkxMlwiLFxuXHRcdFx0XHRcInlidF9weTEzXCIsXG5cdFx0XHRcdFwieWJ0X3B5MTRcIixcblx0XHRcdFx0XCJ5YnRfcHkxNVwiLFxuXHRcdFx0XHRcInlidF9weTE2XCIsXG5cdFx0XHRcdFwieWJ0X3B5MTdcIixcblx0XHRcdFx0XCJ5YnRfcHkxOFwiLFxuXHRcdFx0XHRcInlidF9weTE5XCIsXG5cdFx0XHRcdFwieWJ0X3B5MjBcIixcblx0XHRcdFx0XCJ5YnRfcHkyMVwiLFxuXHRcdFx0XHRcInlidF9weTIyXCIsXG5cdFx0XHRcdFwieWJ0X3B5MjNcIixcblx0XHRcdFx0XCJ5YnRfcHkyNFwiLFxuXHRcdFx0XHRcInlidF9weTI1XCIsXG5cdFx0XHRdLFxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL3B5L1B5dGhvbl90dXRvcmlhbC9cIjogW1xuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlB5dGhvbiBcdTU3RkFcdTc4NDBcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHl0aG9uIFx1OTAxQVx1NzUyOFx1NjU1OVx1N0EwQlwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTdCMkMgMSBcdTdBRTAgXHU1MTY1XHU5NUU4XHU1MUM2XHU1OTA3XCIsXG5cdFx0XHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwibWtfcHkwMVwiLFxuXHRcdFx0XHRcdFx0XCJta19weTAyXCIsXG5cdFx0XHRcdFx0XHRcIm1rX3B5MDNcIixcblx0XHRcdFx0XHRcdFwibWtfcHkwNFwiLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQyAyIFx1N0FFMCBcdTkwMUFcdTc1MjhcdThCRURcdThBMDBcdTcyNzlcdTYwMjdcIixcblx0XHRcdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJta19weTA1XCIsXG5cdFx0XHRcdFx0XHRcIm1rX3B5MDZcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vY29va2Rpbm5lci9cIjogW1xuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIjIwMjJcdTVFNzRcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEteW9ndXJ0XCIsXG5cdFx0XHRcdFwiMDItT3JhbmdlX3BlZWxfY29rZV9jaGlja2VuX3dpbmdzXCIsXG5cdFx0XHRcdFwiMDMtU2hyZWRkZWRfaG90X2FuZF9zb3VyX3BvdGF0b1wiLFxuXHRcdFx0XHRcIjA0LUJyYWlzZV9pbl9zb3lfc2F1Y2VfY2hpY2tlbl93aW5nc1wiLFxuXHRcdFx0XHRcIjA1LVNhdXRlZC1TaHJlZGRlZC1Qb3JrLWluLVN3ZWV0LUJlYW4tU2F1Y2VcIixcblx0XHRcdFx0XCIwNi1wYWlodWFuZ2d1YVwiLFxuXHRcdFx0XHRcIjA3LVx1N0NENlx1OTE4Qlx1ODY3RVx1NEVDMVwiLFxuXHRcdFx0XHRcIjA4LVx1NzE0RVx1NUM3MVx1ODM2RlwiLFxuXHRcdFx0XHRcIjEwLVx1ODQ5Q1x1ODRDOVx1ODM3N1x1NTE3MFx1OEM0NlwiLFxuXHRcdFx0XHRcIjExLVx1NzU2QVx1ODMwNFx1NzI1Qlx1ODE2OVwiLFxuXHRcdFx0XHRcIjEyLXBhaWh1YW5nZ3VhMlwiLFxuXHRcdFx0XHRcIjEzLVx1ODY3RVx1NEVDMVx1NkVEMVx1ODZDQlwiLFxuXHRcdFx0XHRcIjE0LVx1NkQwQlx1ODQ3MVx1NzA5Mlx1NzI1Qlx1ODA4OVwiLFxuXHRcdFx0XHRcIjE1LVx1N0VBMlx1NzBFN1x1ODMwNFx1NUI1MFwiLFxuXHRcdFx0XHRcIjE2LVx1NzA5Mlx1NTcxRlx1OEM0Nlx1N0M4OVwiLFxuXHRcdFx0XHRcIjE3LVx1OTc1Mlx1NjkxMlx1ODA4OVx1NEUxRFwiXG5cdFx0XHRdLFxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL3B5YXV0by9na2svXCI6IFtcblx0XHRcIlwiLFxuXHRcdC8vIHsgdGV4dDogXCJcdTUxNkNcdTRGMTdcdTUzRjdcIiwgbGluazogXCIwMVwifSxcblx0XSxcblx0XCIvY29sdW1uL3B5YXV0by9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUzNzdcdTRFMDA6XHU1MjlFXHU1MTZDXHU4MUVBXHU1MkE4XHU1MzE2IEJBU0VcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyBcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NEUwMFx1MzAwMSBQeXRob24gXHU4MUVBXHU1MkE4XHU1MzE2XHU1MjlFXHU1MTZDXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDFcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDJcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTRFOENcdTMwMDFQeXRob24gXHU3M0FGXHU1ODgzXHU1Qjg5XHU4OEM1XCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDNcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDRcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTRFMDlcdTMwMDFQeXRob24gXHU4MUVBXHU1MkE4XHU1MzE2XHU1OTA0XHU3NDA2IEV4Y2VsXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDVcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDZcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDdcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDhcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDlcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTBcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTFcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTJcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1Mzc3XHU0RThDOlx1OEJGRVx1NTI0RFx1NTFDNlx1NTkwN1wiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImF1dG9fMDFcIixcblx0XHRcdFx0XCJhdXRvXzAyXCIsXG5cdFx0XHRdLFxuXHR9XG5cdF0sXG5cdFwiL2NvbHVtbi90a2ludGVyL1wiIDpbXG5cdFx0eyBcblx0XHQgIHRleHQ6IFwiRlFBXCIsXG5cdFx0ICAvLyBcdTUzRUZcdTkwMDlcdTc2ODQsIFx1OEJCRVx1N0Y2RVx1NTIwNlx1N0VDNFx1NjYyRlx1NTQyNlx1NTNFRlx1NEVFNVx1NjI5OFx1NTNFMFx1RkYwQ1x1OUVEOFx1OEJBNFx1NTAzQ1x1NjYyRiBmYWxzZSxcblx0XHQgIGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdC8vICAgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL29uZXB5dGhvbi5odG1sXCIsXG5cdFx0ICBjaGlsZHJlbjogW1xuXHRcdFx0XCJ0ZWFyb2ZmXCIsXG5cdFx0ICBdXG5cdFx0fSxdLFxuICBcIi9jb2x1bW4vbWQvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHQgIC8vIFx1NUZDNVx1ODk4MVx1NzY4NFx1RkYwQ1x1NTIwNlx1N0VDNFx1NzY4NFx1NjgwN1x1OTg5OFx1NjU4N1x1NUI1N1xuXHRcdCAgdGV4dDogXCJNYXJrZG93biBcdTVGRUJcdTkwMUZcdTUxNjVcdTk1RThcdTY1NTlcdTdBMEJcIixcblx0XHQgICAvLyBcdTUzRUZcdTkwMDlcdTc2ODQsIFx1NTIwNlx1N0VDNFx1NjgwN1x1OTg5OFx1NUJGOVx1NUU5NFx1NzY4NFx1NTZGRVx1NjgwN1xuXHRcdCAgaWNvbjogXCJjcmVhdGl2ZVwiLFxuXHRcdCAgLy8gXHU1M0VGXHU5MDA5XHU3Njg0LCBcdTUyMDZcdTdFQzRcdTY4MDdcdTk4OThcdTVCRjlcdTVFOTRcdTc2ODRcdTk0RkVcdTYzQTVcblx0XHQgIGxpbms6IFwiL2NvbHVtbi9tZC9cIixcblx0XHQgIC8vIFx1NTNFRlx1OTAwOVx1NzY4NCwgXHU4QkJFXHU3RjZFXHU1MjA2XHU3RUM0XHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU2Mjk4XHU1M0UwXHVGRjBDXHU5RUQ4XHU4QkE0XHU1MDNDXHU2NjJGIGZhbHNlLFxuXHRcdCAgY29sbGFwc2FibGU6IHRydWUsXG5cdFx0ICAvLyBcdTVGQzVcdTg5ODFcdTc2ODRcdUZGMENcdTUyMDZcdTdFQzRcdTc2ODRcdTVCNTBcdTk4NzlcdTc2RUVcblx0XHQgIGNoaWxkcmVuOiBbXG5cdFx0XHRcIjAxXCIsXG5cdFx0XHRcIjAyXCIsXG5cdFx0XHRcIjAzXCIsXG5cdFx0XHRdLFxuXHRcdH0sXSxcbiAgICBcIi9jb2x1bW4vcHkvYmFzZXF1ZXN0aW9uL1wiIDpbXG4gICAgeyBcbiAgICAgIHRleHQ6IFwiUHl0aG9uIFx1NTdGQVx1Nzg0MFx1NTE2NVx1OTVFOFx1OEJGRVx1N0EwQlx1OEJBMVx1NTIxMlwiLFxuXHQgIC8vIFx1NTNFRlx1OTAwOVx1NzY4NCwgXHU4QkJFXHU3RjZFXHU1MjA2XHU3RUM0XHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU2Mjk4XHU1M0UwXHVGRjBDXHU5RUQ4XHU4QkE0XHU1MDNDXHU2NjJGIGZhbHNlLFxuXHQgIGNvbGxhcHNhYmxlOiB0cnVlLFxuXHQvLyAgIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9vbmVweXRob24uaHRtbFwiLFxuICAgICAgY2hpbGRyZW46IFtcblx0XHRcIlwiLFxuICAgICAgICBcInExXCIsXG5cdFx0XCJodzFcIixcblx0XHRcInEyXCIsXG5cdFx0XCJxM1wiLFxuXHRcdFwicTRcIixcblx0XHRcInE1XCIsXG5cdFx0XCJxNlwiLFxuXHRcdFwicTdcIixcblx0XHRcInE4XCIsXG5cdFx0XCJxOVwiLFxuXHRcdFwiaHdfd29yZF9nYW1lXCIsXG4gICAgICBdXG4gICAgfSxcblx0e1xuXHRcdHRleHQ6IFwiXHU3QUUwXHU4MjgyXHU3QjU0XHU2ODQ4XCIsXG5cdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdFwiYW5zd2VyMVwiLFxuXHRcdFx0XCJhbnN3ZXIyXCIsXG5cdFx0XHRcImFuc3dlcjNcIixcblx0XHRcdFwiYW5zd2VyNFwiLFxuXHRcdFx0XCJhbnN3ZXI1XCIsXG5cdFx0XHRcImFuc3dlcjZcIixcblx0XHRcdFwiYW5zd2VyN1wiLFxuXHRcdFx0XCJhbnN3ZXI4XCIsXG5cdFx0XHRcImFuc3dlcjlcIixcblx0XHRcdFwiYW5zd2VyMTBcIixcblx0XHRdLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogXCJcdTRFMTNcdTk4NzlcdTdFQzNcdTRFNjBcIixcblx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XCJzcGVjaWFsX3ZhcmlhYmxcIixcblx0XHRcdFwic3BlY2lhbF95dW5zdWFuZnVcIixcblx0XHRcdFwic3BlY2lhbF9mb3JcIixcblx0XHRcdFwic3BlY2lhbF93aGlsZVwiLFxuXHRcdFx0XCJzcGVjaWFsX2xpc3RcIixcblx0XHRdLFxuXHR9LFxuXHR7XG5cdFx0dGV4dDogXCJcdTYyODBcdTVERTdcdTcwQjlcdTYyRThcIixcblx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XCJza2lsbF9weWNoYXJtMVwiLFxuXHRcdFx0XCJza2lsbF9pcHl0aG9uMVwiLFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIlx1ODg2NVx1NTE0NVx1NzdFNVx1OEJDNlwiLFxuXHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcInJlcXVpcmVtZW50c1wiLFxuXHRcdFx0XCJyYWRpeF9wb2ludFwiLFxuXHRcdFx0XCJmb3JtYXRcIlxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIkZRQVwiLFxuXHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcImZhcTFcIixcblx0XHRdLFxuXHR9LFxuXHRcdCAgXSxcblxuXHRcIi9jb2x1bW4vcGxheWJhY2svXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIjIwMjJcdTVFNzRcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdFx0XCIwMS1Ub21teVwiLFxuXHRcdFx0XHRcIjAyLUxLV1wiLFxuXHRcdFx0XHRcIjAzLTIwMjIwNjEwXCIsXG5cdFx0XHRdLFxuXHRcdH1cblx0XSxcblxuXHRcIi9jb2x1bW4vY3Jhd2xlci9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTVGMDBcdTdCQzdcdThCQ0RcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyB0ZXh0OiBcIjAxLVB5dGhvbiBcdTczQUZcdTU4ODNcdTY0MkRcdTVFRkFcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInMxXzAxXCJ9LFxuXHRcdFx0XHQvLyBcInMxXzAxXCIsXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1cdTRFM0FcdTRFQzBcdTRFNDhcdTUwNUFcdUZGMUZcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInMxXzAyXCJ9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDMtXHU2MEE2XHU1MjFCXHU5NjhGXHU3QjE0XCIsIGljb246IFwiZGVidWdcIiwgbGluazogXCJzMV8wM1wifSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA0LVx1NTk4Mlx1NEY1NVx1ODhBQlx1NTJBOFx1OEZDN1x1NEUwN1x1NjUzNlx1NTE2NVwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwiczFfMDRcIn0sXG5cdFx0XX0sXG5cdFx0eyBcblx0XHRcdHRleHQ6IFwiXHU2QTIxXHU1NzU3XHU0RTAwXHVGRjFBXHU3MjJDXHU4NjZCXHU1N0ZBXHU3ODQwXHU1MzlGXHU3NDA2XCIsIFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInMyXzAxXCIsXG5cdFx0XHRcdC8vIHtcblx0XHRcdFx0Ly8gXHR0ZXh0OiBcIjAyLVx1NEVDMFx1NEU0OFx1NjYyRlx1N0Y1MVx1N0VEQ1x1NzIyQ1x1ODY2QlwiLFxuXHRcdFx0XHQvLyBcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHQvLyBcdGxpbms6IFwiczJfMDJcIixcblx0XHRcdFx0Ly8gXHRpY29uOiBcImRlYnVnXCIsXG5cdFx0XHRcdC8vIFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0Ly8gXHRcdFwiczJfMDIwMVwiLFxuXHRcdFx0XHQvLyBcdF0sXG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0XCJzMl8wMlwiLFxuXHRcdFx0XHRcInMyXzAzXCIsXG5cdFx0XHRcdFwiczJfMDRcIixcblx0XHRcdFx0XCJzMl8wNVwiLFxuXHRcdFx0XHRcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7IFxuXHRcdFx0dGV4dDogXCJcdTg4NjVcdTUxNDVcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJyZXBsZW5pc2gwMVwiLFxuXHRcdFx0XHR7IHRleHQ6IFwiMDItXHU2NkY0XHU2NjdBXHU4MEZEXHU3Njg0XHU1RUY2XHU4RkRGXHU2M0QyXHU0RUY2XCIsIGljb246IFwiZGVidWdcIiwgbGluazogXCJyZXBsZW5pc2gwMlwifSxcblx0XHRcdFx0XCJyZXBsZW5pc2gwM1wiLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVYLFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFdlksSUFBTSxXQUFXLE9BQU87QUFBQSxFQUM3QjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQSxFQUFFLE1BQU0sNEJBQVEsTUFBTSxRQUFRLE1BQU0sb0JBQW1CO0FBQUEsVUFDdkQsRUFBRSxNQUFNLHVCQUFhLE1BQU0sVUFBVSxNQUFNLDhCQUE2QjtBQUFBLFVBQ3hFLEVBQUUsTUFBTSx1QkFBYSxNQUFNLFVBQVUsTUFBTSwyQkFBMEI7QUFBQSxVQUNyRSxFQUFFLE1BQU0sb0JBQVUsTUFBTSxPQUFPLE1BQU0sbUJBQWtCO0FBQUEsVUFDdkQsRUFBRSxNQUFNLHlDQUFnQixNQUFNLFVBQVUsTUFBTSxpQkFBZ0I7QUFBQSxVQUM5RCxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxRQUFRLE1BQU0sZ0JBQWU7QUFBQSxVQUNqRCxFQUFFLE1BQU0sa0NBQVMsTUFBTSxRQUFRLE1BQU0sc0JBQXFCO0FBQUEsVUFDMUQsRUFBRSxNQUFNLDRCQUFRLE1BQU0sU0FBUyxNQUFNLCtCQUE4QjtBQUFBLFVBQ25FLEVBQUUsTUFBTSwwREFBYSxNQUFNLFVBQVUsTUFBTSw2RUFBK0I7QUFBQSxVQUMxRSxFQUFFLE1B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RDtBQUFBLGtCQUVEO0FBQUEsZ0JBQ0Q7QUFBQSxjQUVEO0FBQUEsWUFDRDtBQUFBLFVBRUQ7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLHdCQUF3QjtBQUFBLElBQ3ZCO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBRU4sVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFFRDtBQUFBLEVBQ0EsZ0JBQWdCO0FBQUEsSUFDZjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLGtCQUFrQjtBQUFBLElBQ2pCO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUVOLFVBQVU7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSwrQkFBK0I7QUFBQSxJQUM5QjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsUUFDQTtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLHVCQUF1QjtBQUFBLElBQ3RCO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsdUJBQXVCO0FBQUEsSUFDdEI7QUFBQSxFQUVEO0FBQUEsRUFDQSxtQkFBbUI7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsUUFDQTtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUVEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNGO0FBQUEsRUFDQTtBQUFBLEVBQ0Esb0JBQW9CO0FBQUEsSUFDbkI7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUVOLGFBQWE7QUFBQSxNQUViLFVBQVU7QUFBQSxRQUNYO0FBQUEsTUFDQztBQUFBLElBQ0Y7QUFBQSxFQUFFO0FBQUEsRUFDRixlQUFlO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUVFLE1BQU07QUFBQSxNQUVOLE1BQU07QUFBQSxNQUVOLE1BQU07QUFBQSxNQUVOLGFBQWE7QUFBQSxNQUViLFVBQVU7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQUU7QUFBQSxFQUNBLDRCQUE0QjtBQUFBLElBQzVCO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFFVCxhQUFhO0FBQUEsTUFFVixVQUFVO0FBQUEs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
