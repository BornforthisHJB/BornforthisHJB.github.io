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
          { text: "Java\u4F53\u7CFB\u8BFE", icon: "java", link: "/column/Java/chapter01/01.md" },
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
          { text: "\u9886\u82F1", link: "https://www.linkedin.com/in/bornforthis/" }
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
          { text: "Dribbble", icon: "emoji", link: "https://dribbble.com/" }
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
    "01-W14-Worksheet-14-File-IO-and-CSV-Files"
  ],
  "/1v1/06-KAI/": [
    {
      text: "\u4E00\u3001Web",
      icon: "network",
      children: [
        { text: "01-Assignment-1-Unix", icon: "network", link: "01-Assignment-1-Unix" },
        { text: "02-Assignment2-HTML", icon: "network", link: "04-Assignment2-HTML" },
        { text: "03-Assignment3-CSS", icon: "network", link: "05-Assignment3-CSS" }
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
        "01-CITS1401-Computational-Thinking-with-Python"
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
        "chapter01/05"
      ]
    },
    {
      text: "FQA",
      collapsable: true,
      icon: "java",
      children: [
        "FQA/01-Why-do-switch-case-statements-need-to-include-breaks"
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
        "01-Variable"
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
        "14-\u6D0B\u8471\u7092\u725B\u8089"
      ]
    }
  ],
  "/column/pyauto/gkk/": [
    ""
  ],
  "/column/pyauto/": [
    "",
    {
      text: "\u5377\u4E00\uFF1A\u529E\u516C\u81EA\u52A8\u5316 BASE",
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
      text: "\u8BFE\u524D\u51C6\u5907",
      collapsable: true,
      children: [
        "auto_01"
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
  docsDir: "docs",
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
      footer: "Default footer",
      displayFooter: true,
      blog: {
        name: "AI\u60A6\u521B",
        avatar: "/aiyc.jpg",
        description: "\u4E00\u4E2A\u601D\u8003\u8005,\u7F16\u7A0B\u79C1\u6559 1v1",
        intro: "/intro.md",
        articlePerPage: 6
      }
    }
  },
  encrypt: {
    config: {
      "/1v1/03-Dannie/01.html": "123123",
      "/1v1/01-Thomas-hw-note/": ["123123"],
      "/column/python60/": "123123a",
      "/dedao/": "123123a",
      "/column/TensorFlow/\u96F6\u57FA\u7840\u5B9E\u6218\u673A\u5668\u5B66\u4E60/": "123123a",
      "/column/Programmingthinking/": "123123a",
      "/column/playback/01-Tommy.html": "20220517",
      "/column/playback/02-LKW.html": "lkw",
      "/column/playback/03-20220610.html": "20220610"
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
      dark: "auto",
      emoji: [
        "https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq",
        "https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo",
        "https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili",
        "https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus",
        "https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba",
        "https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji"
      ]
    },
    components: [
      "Badge",
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
import { searchPlugin } from "@vuepress/plugin-search";
var config_default = defineUserConfig({
  lang: "zh-CN",
  title: "AI\u60A6\u521B",
  description: "Python 1v1,AI\u60A6\u521B,\u4E00\u5BF9\u4E00,Python,\u7F16\u7A0B\u4E00\u5BF9\u4E00,C++,Java,AI,\u4EBA\u5DE5\u667A\u80FD,\u9EC4\u5BB6\u5B9D,Python\u4E00\u5BF9\u4E00\u6559\u5B66",
  base: "/",
  shouldPrefetch: false,
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
    searchPlugin({
      locales: {
        "/": {
          placeholder: "\u641C\u7D22"
        }
      }
    })
  ],
  theme: theme_default
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci50cyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2h1YW5namlhYmFvL0dpdEh1Yi9XZWJTaXRlcy9Cb3JuZm9ydGhpc0hKQi5naXRodWIuaW8vZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9odWFuZ2ppYWJhby9HaXRIdWIvV2ViU2l0ZXMvQm9ybmZvcnRoaXNISkIuZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaHVhbmdqaWFiYW8vR2l0SHViL1dlYlNpdGVzL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcbmltcG9ydCB7IHNlYXJjaFBsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaFwiO1xuLy8gaW1wb3J0IHsgZG9jc2VhcmNoUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1kb2NzZWFyY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJBSVx1NjBBNlx1NTIxQlwiLFxuICBkZXNjcmlwdGlvbjogXCJQeXRob24gMXYxLEFJXHU2MEE2XHU1MjFCLFx1NEUwMFx1NUJGOVx1NEUwMCxQeXRob24sXHU3RjE2XHU3QTBCXHU0RTAwXHU1QkY5XHU0RTAwLEMrKyxKYXZhLEFJLFx1NEVCQVx1NURFNVx1NjY3QVx1ODBGRCxcdTlFQzRcdTVCQjZcdTVCOUQsUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU2NTU5XHU1QjY2XCIsXG4gIGJhc2U6IFwiL1wiLFxuICBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG4gIGhlYWQ6IFtcbiAgICAvLyBbXG4gICAgLy8gICBcInNjcmlwdFwiLFxuICAgIC8vICAge1xuICAgIC8vICAgICBhc3luYzogdHJ1ZSxcbiAgICAvLyAgICAgZGVmZXI6IHRydWUsXG4gICAgLy8gICAgIHR5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCIsXG4gICAgLy8gICAgIHNyYzogXCJodHRwczovL3BsYXRmb3JtLmxpbmtlZGluLmNvbS9iYWRnZXMvanMvcHJvZmlsZS5qc1wiLFxuICAgIC8vICAgfVxuICAgIC8vIF0sXG4gICAgLy8gW1xuICAgIC8vICAgXCJzY3JpcHRcIixcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdHlwZTogXCJ0ZXh0L2phdmFzY3JpcHRcIixcbiAgICAvLyAgICAgc3JjOiBcIi8vdW5wa2cuYnl0ZWQtc3RhdGljLmNvbS94Z3BsYXllci1obHMuanMvMi4yLjIvYnJvd3Nlci9pbmRleC5qc1wiLFxuICAgIC8vICAgICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gICAgLy8gICB9XG4gICAgLy8gXSxcbiAgICBbXG4gICAgICBcImxpbmtcIiwge1xuICAgICAgICByZWw6IFwic2hvcnRjdXQgaWNvblwiLFxuICAgICAgICBocmVmOiBcIi9mYXZpY29uLmljb1wiLFxuICAgICAgfVxuICAgIF0sXG4gICAgLy8gW1xuICAgIC8vICAgXCJzY3JpcHRcIiwge1xuICAgIC8vICAgICB0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiLFxuICAgIC8vICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AZG9jc2VhcmNoL2pzQDNcIixcbiAgICAvLyAgIH1cbiAgICAvLyBdLFxuICAgIC8vIFtcbiAgICAvLyAgIFwic2NyaXB0XCIsXG4gICAgLy8gICB7IFxuICAgIC8vICAgICB0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiLFxuICAgIC8vICAgICBzcmM6IFwiL2pzL215anMuanNcIlxuICAgIC8vICAgfSxcbiAgICAvLyBdLFxuICAgIFtcbiAgICAgIFwic2NyaXB0XCIsXG4gICAgICB7IFxuICAgICAgICB0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiLFxuICAgICAgICBzcmM6IFwiL2pzL2JhaWR1LmpzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFtcbiAgICAgIFwibGlua1wiLFxuICAgICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBcIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMjQxMDIwNl9tZmo2ZTF2YndvLmNzc1wiLFxuICAgICAgICAvLyBocmVmOiBcIi9jc3MvZm9udF8yNDEwMjA2X21majZlMXZid28uY3NzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIF0sXG4gIFxuICBwbHVnaW5zOiBbXG4gICAgLy8gY29tbWVudFBsdWdpbih7XG4gICAgLy8gICBwYWdlU2l6ZTogMTAsXG4gICAgLy8gICBjb3B5cmlnaHQ6IGZhbHNlLFxuICAgIC8vIH0pLFxuXG4gICAgLy8gZG9jc2VhcmNoUGx1Z2luKHtcbiAgICAvLyAgIC8vIFx1NEY2MFx1NzY4NFx1OTAwOVx1OTg3OVxuICAgIC8vICAgLy8gYXBwSWQsIGFwaUtleSBcdTU0OEMgaW5kZXhOYW1lIFx1NjYyRlx1NUZDNVx1NTg2Qlx1NzY4NFxuICAgIC8vICAgYXBwSWQ6IFwiQUNEMVMxMDBJVFwiLFxuICAgIC8vICAgYXBpS2V5OiBcIjQwOTMxMTE1ODk4NWNmZWU1YzBhNTM1ZTU5OThkZGQyXCIsXG4gICAgLy8gICBpbmRleE5hbWU6IFwiYm9ybmZvcnRoaXNcIixcbiAgICAvLyAgIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlwiLFxuICAgIC8vIH0pLFxuICAgIFxuICAgIHNlYXJjaFBsdWdpbih7XG4gICAgICBsb2NhbGVzOiB7XG4gICAgICAgIFwiL1wiOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXHU2NDFDXHU3RDIyXCIsXG4gICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIHRoZW1lLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9odWFuZ2ppYWJhby9HaXRIdWIvV2ViU2l0ZXMvQm9ybmZvcnRoaXNISkIuZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaHVhbmdqaWFiYW8vR2l0SHViL1dlYlNpdGVzL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzcy90aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaHVhbmdqaWFiYW8vR2l0SHViL1dlYlNpdGVzL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5pbXBvcnQgeyB6aE5hdmJhciB9IGZyb20gXCIuL25hdmJhci5qc1wiO1xuaW1wb3J0IHsgemhTaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL1wiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiQW5kZXJzb25ISkJcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cuYm9ybmZvcnRoaXMuY24vXCIsXG4gIH0sXG5cbiAgaWNvblByZWZpeDogXCJpY29uZm9udCBpY29uLVwiLFxuICAvLyBpY29uQXNzZXRzOiBcImljb25mb250XCIsXG4gIGljb25Bc3NldHM6IFwiLy9hdC5hbGljZG4uY29tL3QvYy9mb250XzM0MjY3OTNfdjNiYzBua2Q3Yy5jc3NcIixcblxuICBsb2dvOiBcIi9pbWdfaG9tZS9sb2dvX21pbi5wbmdcIixcblxuICAvLyByZXBvOiBcIkJvcm5mb3J0aGlzSEpCL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pb1wiLFxuICAvLyByZXBvOiBcIkFuZGVyc29uSEpCL0FuZGVyc29uSEpCLmdpdGh1Yi5pb1wiLFxuICByZXBvOiBcIkFuZGVyc29uSEpCP3RhYj1yZXBvc2l0b3JpZXNcIixcbiAgLy8gZWRpdExpbms6IGZhbHNlLFxuICAvLyBsYXN0VXBkYXRlZDogdHJ1ZSxcblxuICBkb2NzRGlyOiBcImRvY3NcIixcblxuICAvLyBkYXJrbW9kZTogXCJlbmFibGVcIiwgLy8gXHU1RjNBXHU1MjM2XHU2REYxXHU4MjcyXHU2QTIxXHU1RjBGXG4gIC8vIGRhcmttb2RlOiBcInN3aXRjaFwiLFxuICBkYXJrbW9kZTogXCJ0b2dnbGVcIixcblxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gIHBhZ2VJbmZvOiBbXCJBdXRob3JcIiwgXCJPcmlnaW5hbFwiLCBcIkRhdGVcIiwgXCJDYXRlZ29yeVwiLCBcIlRhZ1wiLCBcIlJlYWRpbmdUaW1lXCJdLFxuXG4gIGJsb2c6IHtcbiAgICBtZWRpYXM6IHtcbiAgICAgIEVtYWlsOiBcIm1haWx0bzpib3JuZm9ydGhpc0Bib3JuZm9ydGhpcy5jblwiLFxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9naXRlZS5jb20vaHVhbmdqaWFiYW9haXljXCIsXG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc29uSEpCXCIsXG4gICAgICBHbWFpbDogXCJtYWlsdG86YWl5dWVjaHVhbmdAZ21haWwuY29tXCIsXG4gICAgICBRUTogXCJodHRwOi8vd3BhLnFxLmNvbS9tc2dyZD92PTMmdWluPTE0MzI4MDM3NzYmc2l0ZT1xcSZtZW51PXllc1wiLFxuICAgICAgWW91dHViZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDVDUyNUZrNzR3X2w5UGswNk94a0x4Z1wiLFxuICAgICAgWmhpaHU6IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3Blb3BsZS9haXl1ZWNodWFuZ1wiLFxuICAgIH0sXG4gIH0sXG5cbiAgZm9vdGVyOiAnXHU5NTdGXHU2NzFGXHU2MkRCXHU2NTM2XHU3RjE2XHU3QTBCXHU0RTAwXHU1QkY5XHU0RTAwXHU1QjY2XHU1NDU4IVx1NUZBRVx1NEZFMTpKaWFiY2RlZmgsIDxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlx1OTVGRElDUFx1NTkwNzE5MDIxNDg2XHU1M0Y3LTY8L2E+JyxcblxuICBsb2NhbGVzOiB7XG4gICAgXCIvXCI6IHtcbiAgICAgIC8vIG5hdmJhclxuICAgICAgbmF2YmFyOiB6aE5hdmJhcixcblxuICAgICAgLy8gc2lkZWJhclxuICAgICAgc2lkZWJhcjogemhTaWRlYmFyLFxuXG4gICAgICBmb290ZXI6IFwiRGVmYXVsdCBmb290ZXJcIixcblxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAgICAgYmxvZzoge1xuICAgICAgICBuYW1lOiBcIkFJXHU2MEE2XHU1MjFCXCIsXG4gICAgICAgIGF2YXRhcjogXCIvYWl5Yy5qcGdcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU0RTJBXHU2MDFEXHU4MDAzXHU4MDA1LFx1N0YxNlx1N0EwQlx1NzlDMVx1NjU1OSAxdjFcIixcbiAgICAgICAgaW50cm86IFwiL2ludHJvLm1kXCIsXG4gICAgICAgIGFydGljbGVQZXJQYWdlOiA2LFxuICAgICAgfSxcblxuICAgICAgLy8gbWV0YUxvY2FsZXM6IHtcbiAgICAgIC8vICAgZWRpdExpbms6IFwiRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViXCIsXG4gICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGluZXNlIGxvY2FsZSBjb25maWdcbiAgICAgKi9cbiAgICAvLyBcIi96aC9cIjoge1xuICAgIC8vICAgLy8gbmF2YmFyXG4gICAgLy8gICBuYXZiYXI6IHpoTmF2YmFyLFxuXG4gICAgLy8gICAvLyBzaWRlYmFyXG4gICAgLy8gICBzaWRlYmFyOiB6aFNpZGViYXIsXG5cbiAgICAvLyAgIGZvb3RlcjogXCJcdTlFRDhcdThCQTRcdTk4NzVcdTgxMUFcIixcblxuICAgIC8vICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAgIC8vICAgYmxvZzoge1xuICAgIC8vICAgICBkZXNjcmlwdGlvbjogXCJcdTRFMDBcdTRFMkFcdTUyNERcdTdBRUZcdTVGMDBcdTUzRDFcdTgwMDVcIixcbiAgICAvLyAgICAgaW50cm86IFwiL3poL2ludHJvLmh0bWxcIixcbiAgICAvLyAgIH0sXG5cbiAgICAvLyAgIC8vIHBhZ2UgbWV0YVxuICAgIC8vICAgbWV0YUxvY2FsZXM6IHtcbiAgICAvLyAgICAgZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSxcblxuICBlbmNyeXB0OiB7XG4gICAgY29uZmlnOiB7XG4gICAgICBcIi8xdjEvMDMtRGFubmllLzAxLmh0bWxcIjogXCIxMjMxMjNcIixcbiAgICAgIFwiLzF2MS8wMS1UaG9tYXMtaHctbm90ZS9cIjogW1wiMTIzMTIzXCJdLFxuICAgICAgXCIvY29sdW1uL3B5dGhvbjYwL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIC8vIFwiL2NvbHVtbi9GaWZ0aF9icm90aGVyX3Bob3RvZ3JhcGh5X2NsYXNzL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIC8vIFwiL2NvbHVtbi9kYXRhLXN0cnVjdHVyZS9cIjogXCIxMjMxMjNhXCIsXG4gICAgICAvLyBcIi9jb2x1bW4vd2ViL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIFwiL2RlZGFvL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIC8vIFwiL2NvbHVtbi9kYXRhX2FuYWx5c2lzL3dlZWsxXCI6IFwiMTIzMTIzYVwiLFxuICAgICAgXCIvY29sdW1uL1RlbnNvckZsb3cvXHU5NkY2XHU1N0ZBXHU3ODQwXHU1QjlFXHU2MjE4XHU2NzNBXHU1NjY4XHU1QjY2XHU0RTYwL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIC8vIFwiLyR7ZW5jb2RlVVJJKGNvbHVtbi9UZW5zb3JGbG93L1x1OTZGNlx1NTdGQVx1Nzg0MFx1NUI5RVx1NjIxOFx1NjczQVx1NTY2OFx1NUI2Nlx1NEU2MCl9L1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIFwiL2NvbHVtbi9Qcm9ncmFtbWluZ3RoaW5raW5nL1wiOiBcIjEyMzEyM2FcIixcbiAgICAgIFwiL2NvbHVtbi9wbGF5YmFjay8wMS1Ub21teS5odG1sXCI6IFwiMjAyMjA1MTdcIixcbiAgICAgIFwiL2NvbHVtbi9wbGF5YmFjay8wMi1MS1cuaHRtbFwiOiBcImxrd1wiLFxuICAgICAgXCIvY29sdW1uL3BsYXliYWNrLzAzLTIwMjIwNjEwLmh0bWxcIjogXCIyMDIyMDYxMFwiLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczoge1xuICAgIGJsb2c6IHtcbiAgICAgIGF1dG9FeGNlcnB0OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvLyBJZiB5b3UgZG9uJ3QgbmVlZCBjb21tZW50IGZlYXR1cmUsIHlvdSBjYW4gcmVtb3ZlIGZvbGxvd2luZyBvcHRpb25cbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvbmZpZyBpcyBmb3IgZGVtbyBPTkxZLCBpZiB5b3UgbmVlZCBjb21tZW50IGZlYXR1cmUsIHBsZWFzZSBnZW5lcmF0ZSBhbmQgdXNlIHlvdXIgb3duIGNvbmZpZywgc2VlIGNvbW1lbnQgcGx1Z2luIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMuXG4gICAgLy8gVG8gYXZvaWQgZGlzdHVyYmluZyB0aGUgdGhlbWUgZGV2ZWxvcGVyIGFuZCBjb25zdW1pbmcgaGlzIHJlc291cmNlcywgcGxlYXNlIERPIE5PVCB1c2UgdGhlIGZvbGxvd2luZyBjb25maWcgZGlyZWN0bHkgaW4geW91ciBwcm9kdWN0aW9uIGVudmlyb25tZW50ISEhISFcbiAgICBjb21tZW50OiB7XG4gICAgLy8gICAvKipcbiAgICAvLyAgICAqIFVzaW5nIEdpc2N1c1xuICAgIC8vICAgICovXG4gICAgLy8gICAvLyBwcm92aWRlcjogXCJnaXNjdXNcIixcbiAgICAvLyAgIC8vIHJlcG86IFwiQm9ybmZvcnRoaXNISkIvY29tbWVudFwiLFxuICAgIC8vICAgLy8gcmVwb0lkOiBcIlJfa2dET0hUSkVTd1wiLFxuICAgIC8vICAgLy8gY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxuICAgIC8vICAgLy8gY2F0ZWdvcnlJZDogXCJESUNfa3dET0hUSkVTODRDT19RelwiLFxuXG4gICAgLy8gICAvKipcbiAgICAvLyAgICAqIFVzaW5nIFR3aWtvb1xuICAgIC8vICAgICovXG4gICAgLy8gICAvLyBwcm92aWRlcjogXCJUd2lrb29cIixcbiAgICAvLyAgIC8vIGVudklkOiBcImh0dHBzOi8vdHdpa29vLmNja25iYy52ZXJjZWwuYXBwXCIsXG5cbiAgICAgIC8qKlxuICAgICAgICogVXNpbmcgV2FsaW5lXG4gICAgICAgKi9cbiAgICAgICBwcm92aWRlcjogXCJXYWxpbmVcIixcbiAgICAgICBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly9jb21tZW50LmJvcm5mb3J0aGlzLmNuL1wiLFxuICAgICAgLy8gIHJlYWN0aW9uOiB0cnVlLFxuICAgICAgcmVhY3Rpb246IFtcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfYWdyZWUucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfc3VuZ2xhc3Nlcy5wbmcnLFxuICAgICAgICAnL1dhbGluZS90aWViYS90aWViYV9waWNrX25vc2UucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfc2xlZXAucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfYXdrd2FyZC5wbmcnLFxuICAgICAgICAnL1dhbGluZS90aWViYS90aWViYV9jb2ZmZWUucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfY3V0ZS5wbmcnLFxuICAgICAgICAnL1dhbGluZS9xcS9xcV80LmdpZicsXG4gICAgICAgICcvV2FsaW5lL3FxL3FxX2FscGFjYS5naWYnLFxuICAgICAgICAnL1dhbGluZS9xcS9xcV9iZWFyMi5naWYnLFxuICAgICAgXSxcbiAgICAgICBjb21tZW50OiB0cnVlLCAvLyBcdThCQzRcdThCQkFcdTY1NzBcdTdFREZcdThCQTFcbiAgICAgICBwYWdldmlldzogdHJ1ZSwgLy8gXHU2RDRGXHU4OUM4XHU5MUNGXHU3RURGXHU4QkExXG4gICAgICAgY29weXJpZ2h0OiBmYWxzZSxcbiAgICAgICBkYXJrOiBcImF1dG9cIixcbiAgICAgICBlbW9qaTogW1xuICAgICAgICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93YWxpbmVqcy9lbW9qaXNAMS4wLjAvcXEnLFxuICAgICAgICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93YWxpbmVqcy9lbW9qaXNAMS4wLjAvd2VpYm8nLFxuICAgICAgICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93YWxpbmVqcy9lbW9qaXNAMS4wLjAvYmlsaWJpbGknLFxuICAgICAgICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93YWxpbmVqcy9lbW9qaXNAMS4wLjAvYWx1cycsXG4gICAgICAgICAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dhbGluZWpzL2Vtb2ppc0AxLjAuMC90aWViYScsXG4gICAgICAgICAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dhbGluZWpzL2Vtb2ppc0AxLjAuMC90dy1lbW9qaScsXG4gICAgICAgXSxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IFtcbiAgICAgIFwiQmFkZ2VcIixcbiAgICAgIFwiUERGXCIsXG4gICAgICBcIllvdVR1YmVcIixcbiAgICAgIFwiVmlkZW9QbGF5ZXJcIixcbiAgICAgIFwiQmlsaUJpbGlcIixcbiAgICBdLFxuXG4gICAgLy8gRGlzYWJsZSBmZWF0dXJlcyB5b3UgZG9uJ3Qgd2FudCBoZXJlXG4gICAgbWRFbmhhbmNlOiB7XG4gICAgICB0YXNrbGlzdDogdHJ1ZSxcbiAgICAgIGltYWdlTWFyazogdHJ1ZSxcbiAgICAgIGZvb3Rub3RlOiB0cnVlLFxuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjaGFydDogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGVjaGFydHM6IHRydWUsXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICBnZm06IHRydWUsXG4gICAgICBpbWFnZVNpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAga2F0ZXg6IHRydWUsXG4gICAgICBsYXp5TG9hZDogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBtZXJtYWlkOiB0cnVlLFxuICAgICAgcGxheWdyb3VuZDoge1xuICAgICAgICBwcmVzZXRzOiBbXCJ0c1wiLCBcInZ1ZVwiXSxcbiAgICAgIH0sXG4gICAgICBwcmVzZW50YXRpb246IHtcbiAgICAgICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcbiAgICAgIH0sXG4gICAgICBzdHlsaXplOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWFuZGVkXCIsXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tYW5kZWRcIixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHZwcmU6IHRydWUsXG4gICAgICB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuICAgIH0sXG5cbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIGF1dGhvcjogXCJcdTlFQzRcdTVCQjZcdTVCOUR8QUlcdTYwQTZcdTUyMUJcIixcbiAgICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAgIHRyaWdnZXJXb3JkczogMTAwLFxuICAgICAgZGlzYWJsZUNvcHk6IGZhbHNlLFxuICAgICAgZGlzYWJsZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgICBcbiAgICBwd2E6IGZhbHNlLFxuICAgIC8vIHB3YToge1xuICAgIC8vICAgdXBkYXRlOiBcImhpbnRcIixcbiAgICAvLyAgIG1heFBpY1NpemU6IDkwMDAwLFxuICAgIC8vICAgbWF4U2l6ZTogOTAwMDAwMCxcbiAgICAvLyAgIC8vIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgLy8gICBjYWNoZUhUTUw6IGZhbHNlLFxuICAgIC8vICAgY2FjaGVQaWM6IGZhbHNlLFxuICAgIC8vICAgYXBwZW5kQmFzZTogdHJ1ZSxcbiAgICAvLyB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9odWFuZ2ppYWJhby9HaXRIdWIvV2ViU2l0ZXMvQm9ybmZvcnRoaXNISkIuZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaHVhbmdqaWFiYW8vR2l0SHViL1dlYlNpdGVzL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzcy9uYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2h1YW5namlhYmFvL0dpdEh1Yi9XZWJTaXRlcy9Cb3JuZm9ydGhpc0hKQi5naXRodWIuaW8vZG9jcy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyID0gbmF2YmFyKFtcbiAgXCIvXCIsXG4gIHsgXG4gICAgdGV4dDogXCJcdTUxNzNcdTRFOEVcdTYwQTZcdTUyMUJcIixcbiAgICBpY29uOiBcInBlb3BsZVwiLFxuICAgIGxpbms6IFwiL2ludHJvXCIsXG4gIH0sXG4gIHsgXG4gICAgdGV4dDogXCJcdTRFMTNcdTY4MEZcIixcbiAgICBpY29uOiBcIndvcmtpbmdEaXJlY3RvcnlcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJJVCBcdTY1ODdcdTY4NjNcdTRFM0JcdTk4NzVcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBcIi9jb2x1bW5cIixcbiAgICAgICAgICB7IHRleHQ6IFwiXHU3OUMxXHU2NTU5XHU1NkRFXHU2NTNFXCIsIGljb246IFwicGxheVwiLCBsaW5rOiBcIi9jb2x1bW4vcGxheWJhY2svXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJQeXRob24gXHU1NDA4XHU5NkM2XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiL2NvbHVtbi9weS9QeXRob25fdHV0b3JpYWwvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJQeXRob24gXHU3OUMxXHU2NTU5XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiL2NvbHVtbi9weS9iYXNlcXVlc3Rpb24vXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJXZWIgXHU0RTEzXHU2ODBGXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiL2NvbHVtbi93ZWIvYmFzZVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiUHl0aG9uIFx1NTI5RVx1NTE2Q1x1ODFFQVx1NTJBOFx1NTMxNlwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIi9jb2x1bW4vcHlhdXRvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTk4OThcdTg5RTNcIiwgaWNvbjogXCJjb2RlXCIsIGxpbms6IFwiL2NvbHVtbi90aWppZVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1MTZDXHU1RjAwXHU4QkZFXHU4RDQ0XHU2NTk5XCIsIGljb246IFwiYmxvZ1wiLCBsaW5rOiBcIi9jb2x1bW4vcHlhdXRvL2dray9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1N0YxNlx1N0EwQlx1NjAxRFx1N0VGNFwiLCBpY29uOiBcInNpd2VpXCIsIGxpbms6IFwiL2NvbHVtbi9Qcm9ncmFtbWluZ3RoaW5raW5nL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU5NkY2XHU1N0ZBXHU3ODQwXHU1QjY2XHU0RTYwXHU2NzNBXHU1NjY4XHU1QjY2XHU0RTYwXCIsIGljb246IFwiY2VudG9zXCIsIGxpbms6IFwiL2NvbHVtbi9UZW5zb3JGbG93L1x1OTZGNlx1NTdGQVx1Nzg0MFx1NUI5RVx1NjIxOFx1NjczQVx1NTY2OFx1NUI2Nlx1NEU2MC9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFwiLCBpY29uOiBcInpodXpodWFuZ3R1XCIsIGxpbms6IFwiL2NvbHVtbi9kYXRhX2FuYWx5c2lzL3dlZWsxLzAxXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTRFMEVcdTdCOTdcdTZDRDVcIiwgaWNvbjogXCJzaHVqdWppZWdvdS0wMVwiLCBsaW5rOiBcIi9jb2x1bW4vZGF0YS1zdHJ1Y3R1cmUvd2VlazEvMDFcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlB5dGhvbiA2MCBEYXlcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIvY29sdW1uL3B5dGhvbjYwLzAxXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1MDBCN1x1NTkyOVx1NkM2MFx1OEJBMVx1NTIxMlwiLCBpY29uOiBcImRpYW5jaGkxXCIsIGxpbms6IFwiL2NvbHVtbi90aWFuY2hpL1B5dGhvbi9QeXRob24wMVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiSmF2YVx1NEY1M1x1N0NGQlx1OEJGRVwiLCBpY29uOiBcImphdmFcIiwgbGluazogXCIvY29sdW1uL0phdmEvY2hhcHRlcjAxLzAxLm1kXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1MDBCNzF2MVwiLCBpY29uOiBcIjF2MS00XCIsIGxpbms6IFwiLzF2MS9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjQ0NFx1NUY3MVx1NTE2NVx1OTVFOFx1OEJGRVwiLCBpY29uOiBcImNhbWVyYWFkZFwiLCBsaW5rOiBcIi9jb2x1bW4vXHU2NDQ0XHU1RjcxXHU1MTY1XHU5NUU4XHU4QkZFL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiUHl0aG9uXHU2ODM4XHU1RkMzXHU2MjgwXHU2NzJGXHU0RTBFXHU1QjlFXHU2MjE4XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiL2NvbHVtbi9QeXRob24tY29yZS10ZWNobm9sb2d5LWFuZC1wcmFjdGljZS8wMVwifSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiXHU3QTBCXHU1RThGXHU1NDU4XHU3Njg0XHU3OUMxXHU2MjNGXHU4M0RDXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NzlDMVx1NjIzRlx1ODNEQ1wiLCBsaW5rOiBcIi9jb2x1bW4vY29va2Rpbm5lci8wMS15b2d1cnRcIn0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU4MjdBXHU2NzJGXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjQ0NFx1NUY3MVwiLCBpY29uOiBcImNvbXBhcmVcIiwgbGluazogXCIvY29sdW1uL3Bob3RvZ3JhcGh5L1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU0RTk0XHU1NEU1XHU2NDQ0XHU1RjcxXHU4QkZFXHU1ODAyXCIsIGljb246IFwiY29tcGFyZVwiLCBsaW5rOiBcIi9jb2x1bW4vRmlmdGhfYnJvdGhlcl9waG90b2dyYXBoeV9jbGFzcy9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlBQVCBcdTY1NTlcdTdBMEJcIiwgaWNvbjogXCJzbGlkZXNcIiwgbGluazogXCIvY29sdW1uL1BQVC9cIn0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NUY5N1x1NTIzMFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJcdTg1OUJcdTUxNDZcdTRFMzBcdTc2ODRcdTdFQ0ZcdTZENEVcdTVCNjZcdThCRkVcIiwgaWNvbjogXCJibG9nXCIsIGxpbms6IFwiL2RlZGFvLzAxLVh1ZS1aaGFvZmVuZ3MtZWNvbm9taWNzLWNsYXNzL1wifSxcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgeyBcbiAgICB0ZXh0OiBcIlx1NjBBNlx1NTIxQlx1NzkzRVx1NTMzQVwiLCBcbiAgICBpY29uOiBcImNyZWF0aXZlXCIsIFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU1NzI4XHU3RUJGXHU1RTczXHU1M0YwXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlB5dGhvbiBcdTU3MjhcdTdFQkZcdTVFNzNcdTUzRjBcIiwgaWNvbjogXCJlZGl0XCIsIGxpbms6IFwiaHR0cHM6Ly9weS5ib3JuZm9ydGhpcy5jbi9cIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJQeXRob24gXHU1NzI4XHU3RUJGXHU1RTczXHU1M0YwXCIsIGljb246IFwiY3JlYXRpdmVcIiwgbGluazogXCJodHRwczovL3B5LmJvcm5mb3J0aGlzLmNuL1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENVx1NTNFRlx1ODlDNlx1NTMxNlwiLCBpY29uOiBcImRpc2NvdmVyXCIsIGxpbms6IFwiaHR0cHM6Ly9odWFuZ2ppYWJhb2FpeWMuZ2l0ZWUuaW8vdmlzdWFsZ28vXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJNYXJrZG93biBPbmxpbmVcIiwgaWNvbjogXCJtYXJrZG93blwiLCBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vbWFya2Rvd24tZWRpdG9yLyBcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkpzb24gT25saW5lXCIsIGljb246IFwianNvblwiLCBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vanNvbi9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIm0zdTggXHU2NEFEXHU2NTNFXHU1NjY4XCIsIGljb246IFwicHJldmlld1wiLCBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vbTN1OFwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4RkRCXHU1MjM2XHU1NzI4XHU3RUJGXHU4RjZDXHU2MzYyXCIsIGljb246IFwidG9vbFwiLCBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vdG9vbFwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiSFRNTCBPbmxpbmVcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL2h0bWxfb25saW5lL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2ODNDXHU1RjBGXHU1NzI4XHU3RUJGXHU4RjZDXHU2MzYyXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiaHR0cHM6Ly9jb252ZXJ0aW8uY28vemgvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTU3MjhcdTdFQkZcdThGNkNcdTYzNjIyXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuYWNvbnZlcnQuY29tL2NuL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiUHl0aG9uXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9weXRob24vIy9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlB5dGhvblwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vcHl0aG9uL2luZGV4Lmh0bWwjL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiZm9udHNcIiwgbGluazogXCJodHRwczovL2ZvbnRzaHViLnByby9cIn1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTY1ODdcdTdBRTBcdTVFNzNcdTUzRjBcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiQ1NETlwiLCBsaW5rOiBcImh0dHBzOi8vYWl5dWVjaHVhbmcuYmxvZy5jc2RuLm5ldC9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NzdFNVx1NEU0RVwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LnpoaWh1LmNvbS9wZW9wbGUvYWl5dWVjaHVhbmdcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjM5OFx1OTFEMVwiLCBsaW5rOiBcImh0dHBzOi8vanVlamluLmNuL3VzZXIvMjMwNTA1MTIyMjM0NDA2MVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2MDFEXHU1NDI2XCIsIGxpbms6IFwiaHR0cHM6Ly9zZWdtZW50ZmF1bHQuY29tL3UvYWl5Y1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiNTFDVE9cdTUzNUFcdTVCQTJcIiwgbGluazogXCJodHRwczovL2Jsb2cuNTFjdG8uY29tL2FpeWNcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIm1lZGl1bVwiLCBsaW5rOiBcImh0dHBzOi8vbWVkaXVtLmNvbS9AYWl5dWVjaHVhbmdcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1ODE3RVx1OEJBRlx1NEU5MVx1NzkzRVx1NTMzQVwiLCBsaW5rOiBcImh0dHBzOi8vY2xvdWQudGVuY2VudC5jb20vZGV2ZWxvcGVyL3VzZXIvNzExMTYxMFwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU5NjNGXHU5MUNDXHU0RTkxXHU3OTNFXHU1MzNBXCIsIGxpbms6IFwiaHR0cHM6Ly9kZXZlbG9wZXIuYWxpeXVuLmNvbS9wcm9maWxlL2V4cGVydC9hNjVvZDNud29oZzRpXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTUzNUFcdTVCQTJcdTU2RURcIiwgbGluazogXCJodHRwczovL3d3dy5jbmJsb2dzLmNvbS9ib3JuZm9ydGhpcy9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1N0I4MFx1NEU2NlwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LmppYW5zaHUuY29tL3UvN2RlZjg4OGI4YzEyXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTU4QThcdTU5MjlcdThGNkVcIiwgbGluazogXCJodHRwczovL3d3dy5tb2RiLnByby91LzQ4MjQ0MVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU3NTU5XHU4QTAwXCIsIGxpbms6IFwiaHR0cHM6Ly9jb21tZW50LmJvcm5mb3J0aGlzLmNuL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2MEE2XHU1MTZFXHU1QzBGXHU2ODA4XCIsIGxpbms6IFwiaHR0cHM6Ly9jb21tZW50LmJsb3ZleS5hcnQvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdThCQzRcdThCQkFcdTdCQTFcdTc0MDZcIiwgbGluazogXCJodHRwczovL2NvbW1lbnQuYm9ybmZvcnRoaXMuY24vdWlcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlN0YWNrb3ZlcmZsb3dcIiwgbGluazogXCJodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3VzZXJzLzE5NTUxMTczL2FpJWU2JTgyJWE2JWU1JTg4JTliXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJNZG5pY2VcIiwgbGluazogXCJodHRwczovL21kbmljZS5jb20vdXNlci80MTc3Mjk2MzgyMjdcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkFJXHU2MEE2XHU1MjFCXHU5NjhGXHU3QjE0MVwiLCBsaW5rOiBcIi9wb3N0cy8xMi5odG1sXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTk2OEZcdTdCMTQyXCIsIGxpbms6IFwiL2Vzc2F5c1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2NDQ0XHU1RjcxXCIsIGxpbms6IFwiaHR0cHM6Ly9odWFuZ2ppYWJhb2FpeWMuZ2l0ZWUuaW8vaW1nL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiU2VhcmNoXCIsIGxpbms6IFwiaHR0cHM6Ly9jcmF3bGVyLmFsZ29saWEuY29tL2FkbWluL2NyYXdsZXJzXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTk4ODZcdTgyRjFcIiwgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYm9ybmZvcnRoaXMvXCJ9LFxuXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1OTY4Rlx1N0IxNFwiLCBjaGlsZHJlbjogW3sgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1OTY4Rlx1N0IxNDFcIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL3Bvc3RzLzEyLmh0bWxcIn0sIHsgdGV4dDogXCJcdTk2OEZcdTdCMTQyXCIsIGxpbms6IFwiL2Vzc2F5c1wifV19LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJHaXRcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiR2l0aHViXCIsIGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc29uSEpCXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJHaXRlZVwiLCBpY29uOiBcImdpdGVlXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRlZS5jb20vaHVhbmdqaWFiYW9haXljXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJ2ZXJjZWxcIiwgaWNvbjogXCJnaXRlZVwiLCBsaW5rOiBcImh0dHBzOi8vdmVyY2VsLmNvbS9cIn0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NzlDMVx1NjU1OVx1OEJBMVx1NTIxMlwiLFxuICAgIGljb246IFwiYWxpYXNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vd2ViX3J1bmluZy9UZXN0ZXIvMTU1NC5odG1sXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NTcyOFx1N0VCRlx1OEJGRVx1NTgwMlwiLFxuICAgIGljb246IFwidmlld1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRleHQ6IFwiXHU3RjUxXHU2NjEzXHU0RTkxXHU4QkZFXHU1ODAyXHU0RTNCXHU5ODc1XCIsIGljb246IFwidmlld1wiLCBsaW5rOiBcImh0dHBzOi8vc3R1ZHkuMTYzLmNvbS9wcm92aWRlci80ODAwMDAwMDIyNzcwMjUvY291cnNlLmh0bVwifSxcbiAgICAgIC8vIHsgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1MDBCN1x1OEJCMlx1NUUwOFx1NEUzQlx1OTg3NVwiLCBpY29uOiBcInZpZXdcIiwgbGluazogXCJodHRwczovL20uc3R1ZHkuMTYzLmNvbS91c2VyLzExNDQyNDAwNDQuaHRtXCJ9LFxuICAgICAgeyB0ZXh0OiBcIjUxQ1RPXCIsIGljb246IFwidmlld1wiLCBsaW5rOiBcImh0dHBzOi8vZWR1LjUxY3RvLmNvbS9sZWN0dXJlci8xMzk1MjU1Mi5odG1sXCJ9LFxuICAgICAgeyB0ZXh0OiBcIlx1NUY1NVx1OEJGRVx1NjBCMlx1NjBFOFx1N0VDRlx1NTM4NlwiLCBpY29uOiBcInZpZXdcIiwgbGluazogXCIvUmVjb3JkX3RoZV9jbGFzc1wifVxuICAgIF1cbiAgfSxcbiAgeyBcbiAgICB0ZXh0OiBcIlx1NUYwMFx1NkU5MFB5XHU1RTkzXCIsXG4gICAgaWNvbjogXCJ3b3JraW5nRGlyZWN0b3J5XCIsXG4gICAgbGluazogXCJodHRwczovL3B5cGkub3JnL3VzZXIvQm9ybmZvcnRoaXMvXCIsXG4gIH0sXG4gIHsgXG4gICAgdGV4dDogXCJcdTUzQ0JcdTYwQzVcdTk0RkVcdTYzQTVcIixcbiAgICBpY29uOiBcImFsaWFzXCIsIFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU1RjAwXHU1M0QxXHU2NzJDXHU3QUQ5XCIsIFxuICAgICAgICAvLyBpY29uOiBcImRpYWdyYW1cIixcbiAgICAgICAgLy8gbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlZ1ZVwiLCBpY29uOiBcInZ1ZVwiLCBsaW5rOiBcImh0dHBzOi8vdjIudnVlcHJlc3MudnVlanMub3JnL3poL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiXHU0RTNCXHU5ODk4XCIsIGljb246IFwidnVlXCIsIGxpbms6IFwiaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi96aC9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIldhbGluZVwiLCBpY29uOiBcIndhbGluZVwiLCBsaW5rOiBcImh0dHBzOi8vd2FsaW5lLmpzLm9yZy9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcImljb25mb250XCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuaWNvbmZvbnQuY24vXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJMZWFuY2xvdWRcIiwgbGluazogXCJodHRwczovL2xlYW5jbG91ZC5hcHAvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTUzRDhcdTY2RjRcdTY1RTVcdTVGRDdcIiwgaWNvbjogXCJ0aW1lXCIsIGxpbms6IFwiL2NoYW5nZWxvZ1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiVmVyY2VsXCIsIGxpbms6IFwiaHR0cHM6Ly92ZXJjZWwuY29tL2Rhc2hib2FyZFwifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwidHVyaW5nYXBpXCIsIGxpbms6IFwiaHR0cDovL3d3dy50dXJpbmdhcGkuY29tL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiMXYxXHU1Qjk4XHU3RjUxXCIsIGljb246IFwiMXYxLTRcIiwgbGluazogXCJodHRwczovL3d3dy5jbGFzczF2MS5jb20vXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTUzQ0JcdTYwQzVcdTk0RkVcdTYzQTVcIiwgaWNvbjogXCJwZW5neW91ZmlsbFwiLCBsaW5rOiBcIi9mcmllbmRzaGlwLWxpbmtcIn1cbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1NUJBMVx1N0Y4RVwiLFxuICAgICAgICBpY29uOiBcImV5ZVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJVbnNwbGFzaFwiLCBpY29uOiBcInBpY1wiLCBsaW5rOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiRHJpYmJibGVcIiwgaWNvbjogXCJlbW9qaVwiLCBsaW5rOiBcImh0dHBzOi8vZHJpYmJibGUuY29tL1wifSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiXHU2MEE2XHU1MjFCXHU4OUM2XHU5ODkxXHU1RTczXHU1M0YwXCIsIFxuICAgICAgICBpY29uOiBcInBsYXlcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1NEQ0XHU1NEU5XHU1NEQ0XHU1NEU5XCIsIGxpbms6IFwiaHR0cHM6Ly9zcGFjZS5iaWxpYmlsaS5jb20vNDA1OTYxNzA1XCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJZb3VUdWJlXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ1Q1MjVGazc0d19sOVBrMDZPeGtMeGdcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjI5Nlx1OTdGM1wiLCBsaW5rOiBcImh0dHBzOi8vd3d3LmRvdXlpbi5jb20vdXNlci9NUzR3TGpBQkFBQUFYTWllemMxVG1CeHowekZ4ZXFtV0hvM0pwY2VMWGxNQ2hUTFU0Y0hGTUNBXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTg5N0ZcdTc0RENcdTg5QzZcdTk4OTFcIiwgbGluazogXCJodHRwczovL3d3dy5peGlndWEuY29tL2hvbWUvMjA0OTA4ODkyODEwMDA2MVwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU0RUNBXHU2NUU1XHU1OTM0XHU2NzYxXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cudG91dGlhby5jb20vYy91c2VyL3Rva2VuL01TNHdMakFCQUFBQTBsTDVBQjFxY3FqSFRSelpza1ZlcElwSHFfR2xhRFpxU3M1REcxcWpScENCeHlYRW5pU0dJR2lJSUVGWHJYbWUvP3NvdXJjZT1taW5lX2hvbWUmbG9nX2Zyb209MWM3MjZkZGJjNjVmNl8xNjU1Mzc2MzQ1NDkxJndpZD0xNjU1Mzc2NDAwNjY0XCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJDU0ROIFx1ODlDNlx1OTg5MVwiLCBsaW5rOiBcImh0dHBzOi8vYmxvZy5jc2RuLm5ldC9xcV8zMzI1NDc2Nj90eXBlPXZpZGVvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTc3RTVcdTRFNEVcdTg5QzZcdTk4OTFcIiwgbGluazogXCJodHRwczovL3d3dy56aGlodS5jb20vcGVvcGxlL2FpeXVlY2h1YW5nL3p2aWRlb3NcIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjQ0NFx1NUY3MVx1OEJGRVx1N0EwQlwiLCBsaW5rOiBcImh0dHBzOi8vbGlzdC55b3VrdS5jb20vYWxidW1saXN0L3Nob3cvaWRfNjg4NTcwNTBcIn0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiUGxhblwiLFxuICAgIGljb246IFwicGxhbmVcIiwgXG4gICAgbGluazogXCIvcGxhblwiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdThDMzdcdTZCNENcdTVCNjZcdTY3MkZcdTUyQTlcdTYyNEJcIixcbiAgICBpY29uOiBcImNocm9tZVwiLCBcbiAgICBsaW5rOiBcIi92cG5cIixcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaHVhbmdqaWFiYW8vR2l0SHViL1dlYlNpdGVzL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2h1YW5namlhYmFvL0dpdEh1Yi9XZWJTaXRlcy9Cb3JuZm9ydGhpc0hKQi5naXRodWIuaW8vZG9jcy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaHVhbmdqaWFiYW8vR2l0SHViL1dlYlNpdGVzL0Jvcm5mb3J0aGlzSEpCLmdpdGh1Yi5pby9kb2NzLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCB6aFNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvXCI6IFtcblx0XHRcIlwiLFxuXHRcdFwiaW50cm9cIixcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NzlDMVx1NjU1OVx1N0IxNFx1OEJCMFwiLFxuXHRcdFx0aWNvbjogXCIxdjEtNFwiLFxuXHRcdFx0bGluazogXCIvMXYxL1wiLFxuXHRcdH0sXG5cdFx0XCJob21lXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQeXRob25cdTRFMDBcdTVCRjlcdTRFMDBcdTY1NTlcdTVCNjZcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRsaW5rOiBcIm9uZXB5dGhvblwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQeXRob24gXHU0RjUzXHU3Q0ZCXHU4QkZFXCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0bGluazogXCIxdjEtdHhrXCIsXG5cdFx0fSxcblx0XHRcImZyaWVuZHNoaXAtbGlua1wiLFxuXHRcdFwiUmVjb3JkX3RoZV9jbGFzc1wiLFxuXHRcdFwicGxhblwiLFxuXHRcdFwidnBuXCIsXG5cdFx0XCJsZWFybmluZ193ZWJcIixcblxuXHRdLFxuXHRcIi9jb2x1bW4vUHl0aG9uLWNvcmUtdGVjaG5vbG9neS1hbmQtcHJhY3RpY2UvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRFwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTdGQVx1Nzg0MFx1N0JDN1wiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMTNcIixcblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vXHU2NDQ0XHU1RjcxXHU1MTY1XHU5NUU4XHU4QkZFL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTVGMDBcdTdCQzdcdThCQ0QgKDFcdThCQjIpXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwiY2FtZXJhYWRkXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XG5cdFwiLzF2MS8wMy1EYW5uaWVcIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU5NjM2XHU2QkI1XHU0RTAwOlB5dGhvblx1NTdGQVx1Nzg0MFwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFwiMDNcIixcblx0XHRcdFx0XCIwNFwiLFxuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFwiMDZcIixcblx0XHRcdFx0XCIwN1wiLFxuXHRcdFx0XHRcIjA4XCIsXG5cdFx0XHRcdFwiMDlcIixcblx0XHRcdFx0XCIxMFwiLFxuXHRcdFx0XHRcIjExXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvMDctQUp1TlwiOiBbXG5cdFx0XCIwMS1XMTQtV29ya3NoZWV0LTE0LUZpbGUtSU8tYW5kLUNTVi1GaWxlc1wiXG5cdF0sXG5cdFwiLzF2MS8wNi1LQUkvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NEUwMFx1MzAwMVdlYlwiLFxuXHRcdFx0aWNvbjogXCJuZXR3b3JrXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiMDEtQXNzaWdubWVudC0xLVVuaXhcIiwgaWNvbjogXCJuZXR3b3JrXCIsIGxpbms6IFwiMDEtQXNzaWdubWVudC0xLVVuaXhcIn0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1Bc3NpZ25tZW50Mi1IVE1MXCIsIGljb246IFwibmV0d29ya1wiLCBsaW5rOiBcIjA0LUFzc2lnbm1lbnQyLUhUTUxcIn0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1Bc3NpZ25tZW50My1DU1NcIiwgaWNvbjogXCJuZXR3b3JrXCIsIGxpbms6IFwiMDUtQXNzaWdubWVudDMtQ1NTXCJ9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NEU4Q1x1MzAwMUphdmFcIixcblx0XHRcdGljb246IFwiamF2YVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdFx0eyB0ZXh0OiBcIjAyLVBhcnQtMS1CaXJ0aC1EYXRlLUFwcGxpY2F0aW9uLTMwLXB0c1wiLCBpY29uOiBcImphdmFcIiwgbGluazogXCIwMi1QYXJ0LTEtQmlydGgtRGF0ZS1BcHBsaWNhdGlvbi0zMC1wdHNcIn0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1NYWMtV2luZG93c1x1NTQ3RFx1NEVFNFx1ODg0Q1x1N0YxNlx1NTE5OUphdmFcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMDMtTWFjLVdpbmRvd3NcdTU0N0RcdTRFRTRcdTg4NENcdTdGMTZcdTUxOTlKYXZhXCJ9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDYtV2VhdmluZy1hLUtpbGltLUNhcnBldC1BcHBsaWNhdGlvblwiLCBpY29uOiBcImphdmFcIiwgbGluazogXCIwNi1XZWF2aW5nLWEtS2lsaW0tQ2FycGV0LUFwcGxpY2F0aW9uXCJ9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDctQXNzaWdubWVudC0zLWphdmFcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMDctQXNzaWdubWVudC0zLWphdmFcIn0sXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvMDgtTGlvbkd1b1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQeXRob24gSFdcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLUhvbWV3b3JrLVByb2JsZW0tRE5BLXNlcXVlbmNpbmdcIixcblx0XHRcdFx0XCIwMi1Ib21ld29yay1Qcm9ibGVtLTItQXJjdGljLUljZVwiLFxuXHRcdFx0XHRcIjAzLUhvbWV3b3JrLVByb2JsZW0tMy1GaW5kaW5nLWFuLWV4b3BsYW5ldFwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzAyLXl1ZWJhb1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIyMDIyXHU1RTc0XCIsXG5cdFx0XHRpY29uOiBcImppaHVhMlwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLVBsYW5cIixcblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvMDUtUGF0cmljay9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiSG9tZVdvcmtcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLUNJVFMxNDAxLUNvbXB1dGF0aW9uYWwtVGhpbmtpbmctd2l0aC1QeXRob25cIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9KYXZhL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTdCMkNcdTRFMDBcdTdBRTAgSmF2YVx1N0YxNlx1N0EwQlx1NTdGQVx1Nzg0MCAoMzBcdThCQjIpXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwiamF2YVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDFcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDJcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDNcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDRcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDVcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkZRQVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRpY29uOiBcImphdmFcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiRlFBLzAxLVdoeS1kby1zd2l0Y2gtY2FzZS1zdGF0ZW1lbnRzLW5lZWQtdG8taW5jbHVkZS1icmVha3NcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi90aWFuY2hpL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQeXRob24gXHU1MTY1XHU5NUU4XHU0RTBFXHU1QjlFXHU4REY1XCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlB5dGhvbi9QeXRob24wMVwiXG5cdFx0XHRdLFxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzAxLVRob21hcy1ody1ub3RlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTY0MkRcdTVFRkFcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTJcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46W1xuXHRcdFx0XHRcIjAyLUNvY29zXCIsXG5cdFx0XHRcdFwiMDMtd2ViMDJcIixcblx0XHRcdFx0XCIwNC13ZWIwM1wiLFxuXHRcdFx0XHRcIjA1LXdlYjA0XCIsXG5cdFx0XHRcdFwiMDYtd2ViMDVcIixcblx0XHRcdFx0XCIwNy13ZWIwNlwiLFxuXHRcdFx0XHRcIjA4LXdlYjA3XCIsXG5cdFx0XHRcdFwiMDktd2ViMDhcIixcblx0XHRcdFx0XCIxMC13ZWIwOVwiLFxuXHRcdFx0XHRcIjExLXdlYjEwXCIsXG5cdFx0XHRcdFwiMTItd2ViMTFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHl0aG9uIFx1NTdGQVx1Nzg0MFwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLVZhcmlhYmxlXCIsXG5cblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9weXRob242MC9cIjogW1xuXHRcdFwiMDFcIixcblx0XHRcIjAyXCIsXG5cdFx0XCIwM1wiLFxuXHRcdFwiMDRcIixcblx0XHRcIjA1XCIsXG5cdF0sXG5cdFwiL2FyY2hpdmVzL1wiIDogXCJzdHJ1Y3R1cmVcIixcblx0XCIvYmxvZy9jcmF3bGVyL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9ibG9nLzIwMjIvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiL2NvbHVtbi9kYXRhX2FuYWx5c2lzXCI6IFtcblx0XHR7IFxuXHRcdFx0dGV4dDogXCJcdTk2MzZcdTZCQjVcdTRFMDBcdUZGMUFcdTVGRUJcdTkwMUZcdTYzOENcdTYzRTFcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdTVGQzVcdTU5MDdcdTYyODBcdTgwRkRcIixcblx0XHRcdGljb246IFwiemh1emh1YW5ndHVcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1NTQ2OCBcdThENzBcdThGREJcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcIixcblx0XHRcdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzFcdTdBRTAgXHU4QkE0XHU4QkM2XHU0RTkyXHU4MDU0XHU3RjUxXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXCIsXG5cdFx0XHRcdFx0XHRcdC8vIGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFwid2VlazEvMDFcIixcblx0XHRcdFx0XHRcdFx0XHRcIndlZWsxLzAyXCIsXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMlx1N0FFMCBcdTVFMzhcdTg5QzFcdTc2ODRcdTY1NzBcdTYzNkVcdTdDN0JcdTU3OEJcIixcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcIndlZWsxLzAzXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJ3ZWVrMS8wNFwiLFxuXHRcdFx0XHRcdFx0XHRcdFwid2VlazEvMDVcIixcblx0XHRcdFx0XHRcdFx0XHRcIndlZWsxLzA2XCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJ3ZWVrMS8wN1wiLFxuXHRcdFx0XHRcdFx0XHRcdFwid2VlazEvMDhcIixcblx0XHRcdFx0XHRcdFx0XHRcIndlZWsxLzA5XCIsXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwicHllY2hhcnRzXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwicHllY2hhcnRzLzAxXCIsXG5cdFx0XHRcdFwicHllY2hhcnRzLzAyXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkZBUVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIkZBUS8wMS1FeGNlbFx1NEUyRCQubWRcIixcblx0XHRcdFx0XCJGQVEvMDJcIlxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJNYXRoIEJhc2VcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyB0ZXh0OiBcIjAxLVx1NUU3M1x1NTc0N1x1NURFRVwiLCBpY29uOiBcInpodXpodWFuZ3R1XCIsIGxpbms6IFwiTWF0aC8wMS1tZWFuLWRldmlhdGlvblwifSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAyLVx1NjgwN1x1NTFDNlx1NURFRVx1NTQ4Q1x1NjVCOVx1NURFRVwiLCBpY29uOiBcInpodXpodWFuZ3R1XCIsIGxpbms6IFwiTWF0aC8wMi1zdGFuZGFyZC1kZXZpYXRpb25cIn1cblx0XHRcdFx0XG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHQvLyBcIi9sZWFybmluZ193ZWIvXCI6IFtcblx0Ly8gXHRcIlwiLFxuXHQvLyBcdFwiMDFcIixcblx0Ly8gXSxcblx0XCIvY29sdW1uL2RhdGEtc3RydWN0dXJlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTk2MzZcdTZCQjVcdTRFMDBcdUZGMUFcdTdCOTdcdTZDRDVcdTRFMEVcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTU3RkFcdTc4NDBcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1NTQ2OCBcdTdFQkZcdTYwMjdcdTY3RTVcdTYyN0VcdTZDRDVcIixcblx0XHRcdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzFcdTdBRTAgXHU2QjIyXHU4RkNFXHU1OTI3XHU1QkI2XHU2NzY1XHU1MjMwXHU3Qjk3XHU2Q0Q1XHU0RTBFXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU3Njg0XHU0RTE2XHU3NTRDXCIsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XCJ3ZWVrMS8wMVwiLFxuXHRcdFx0XHRcdFx0XHRcdFwid2VlazEvMDJcIixcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL1RlbnNvckZsb3cvXHU5NkY2XHU1N0ZBXHU3ODQwXHU1QjlFXHU2MjE4XHU2NzNBXHU1NjY4XHU1QjY2XHU0RTYwL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTVGMDBcdTdCQzdcdThCQ0QgKDFcdThCQjIpXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1MUM2XHU1OTA3XHU3QkM3ICg0XHU4QkIyKVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL1Byb2dyYW1taW5ndGhpbmtpbmcvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1OEJENVx1NTQyQ1wiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9kZWRhby8wMS1YdWUtWmhhb2ZlbmdzLWVjb25vbWljcy1jbGFzcy9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU4QkZFXHU1MjREXHU1RkM1XHU4QkZCKDFcdThCQjIpXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9GaWZ0aF9icm90aGVyX3Bob3RvZ3JhcGh5X2NsYXNzL1wiOiBbXG5cdFx0XCJcIixcblx0XSxcblx0XCIvY29sdW1uL1BQVC9cIjogW1xuXHRcdFwibm90ZVwiLFxuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NEUwMDpcdTk2RjZcdTU3RkFcdTc4NDBcdTVCNjZcdTRFNjAgUFBUXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1Mzc3XHU0RThDOlBQVCBcdTY1MzlcdTRFMTFcdThCQTFcdTUyMTJcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIlxuXHRcdFx0XVxuXHRcdH0sXG5cdF0sXG5cdFwiL3Bvc3RzL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9wb3N0cy9odG1sXCI6IFwic3RydWN0dXJlXCIsXG5cdC8vIFwiL09wZW5fdXBfeW91cl9wYXR0ZXJuL1wiOiBbXG5cdC8vIFx0XCIwMVwiLFxuXHQvLyBcdFwiMDJcIlxuXHQvLyBdLFxuXHRcIi9PcGVuX3VwX3lvdXJfcGF0dGVybi9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvY29sdW1uL3dlYi9cIjogW1xuXHRcdFwiY2F0YWxvZ3VlXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJXZWIgXHU1MjREXHU3QUVGXHU1MTY1XHU5NUU4XHU2MjZCXHU3NkYyXHU4QkZFXHU3QTBCXCIsXG5cdFx0XHQvLyBpY29uOiBcIldlYlwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU3QUUwIFdlYiBcdTY5ODJcdThGRjBcIiwgXG5cdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJiYXNlL1wiLFxuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDFcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzAyXCIsXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RThDXHU3QUUwIEhUTUwgXHU1MTY1XHU5NUU4XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDNcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzA0XCIsXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8wNVwiLFxuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDZcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NEUwOVx1N0FFMCBDU1MgXHU1MTY1XHU5NUU4XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDdcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzA4XCIsXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8wOVwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU1NkRCXHU3QUUwIEphdmFTY3JpcHQgXHU1MTY1XHU5NUU4XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMTBcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzExXCIsXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8xMlwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1MjREXHU3QUVGXHU1REU1XHU3QTBCXHU1RTA4MjAyMlx1NzI0OFwiLFxuXHRcdFx0Ly8gaWNvbjogXCJXZWJcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU5NjM2XHU2QkI1XHU0RTAwXHVGRjFBXHU1MjREXHU3QUVGXHU1N0ZBXHU3ODQwXHU1MTY1XHU5NUU4XCIsXG5cdFx0XHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJcdTdCMkMxXHU1NDY4OiBIVE1MNSBcdTU3RkFcdTc4NDBcdThCRURcdTZDRDVcdTRFMEVcdTY4MDdcdTdCN0VcIixcblx0XHRcdFx0XHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogXCJcdTUyNERcdTdGNkVcdTVGMTVcdTVCRkNcdThCRkVcdUZGMDhcdThCRkVcdTUyNERcdTVGQzVcdTc3MEJcdUZGMDlcIixcblx0XHRcdFx0XHRcdFx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1N0FFMCBcdThCRkVcdTdBMEJcdTdCODBcdTRFQ0JcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzAxXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMDJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18wM1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMlx1N0FFMCBcdTUyNERcdTdBRUZcdTVGMDBcdTUzRDFcdTg4NENcdTYwQzVcdTRFMEVcdThCRkVcdTdBMEJcdTRGNTNcdTdDRkJcdTRFQ0JcdTdFQ0RcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzA0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMDVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18wNlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzA3XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMDhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzNcdTdBRTAgXHU1RjAwXHU1M0QxXHU1REU1XHU1MTc3XHU1NDhDXHU3M0FGXHU1ODgzXHU1MUM2XHU1OTA3XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18wOVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzEwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMTFcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzRcdTdBRTAgXHU4QkZFXHU3QTBCXHU2MDNCXHU3RUQzXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzEyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiSFRNTDVcdThCRURcdTZDRDVcdTRFMEVcdTU3RkFcdTc4NDBcdTY4MDdcdTdCN0VcIixcblx0XHRcdFx0XHRcdFx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1N0FFMCBcdThCRkVcdTdBMEJcdTdCODBcdTRFQ0JcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzEzXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTc1MzVcdTVCNTBcdTY1NTlcdThGODVcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJib29rL2h0bWwtMDFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiRkFRXCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiRkFRLzAxLUhUTUxcdTU2RkVcdTcyNDdcdTVFNzZcdTYzOTJcdTY2M0VcdTc5M0FcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9waG90b2dyYXBoeS9cIjogW1xuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlx1NTY2OFx1Njc1MFx1NTdGQVx1Nzg0MFBsdXNcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU1QjY2XHU1MjREXHU3M0VEXCIsXG5cdFx0XHRcdFx0Ly8gY29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFx0XHRcIjAzXCIsXG5cdFx0XHRcdFx0XHRcIjA0XCIsXG5cdFx0XHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFx0XHRcIjA2XCIsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHRcdFxuXHRdLFxuXHRcIi9jb2x1bW4vcGRmL1wiOiBbXG5cdFx0eyBcblx0XHRcdHRleHQ6IFwiSVRcdTdDN0JcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vdGlqaWUvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlx1NzI1Qlx1NUJBMlx1N0Y1MVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdHRleHQ6IFwiXHU1MzRFXHU0RTNBXHU2NzNBXHU4QkQ1XCIsXG5cdFx0XHRcdFx0Ly8gY29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwibmt3X2h3MDFcIixcblx0XHRcdFx0XHRcdFwibmt3X2h3MDJcIixcblx0XHRcdFx0XHRcdFwibmt3X2h3MDNcIixcblx0XHRcdFx0XHRcdFwibmt3X2h3MDRcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlx1NEUwMFx1NjcyQ1x1OTAxQVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInlidF9weTAxXCIsXG5cdFx0XHRcdFwieWJ0X3B5MDJcIixcblx0XHRcdFx0XCJ5YnRfcHkwM1wiLFxuXHRcdFx0XHRcInlidF9weTA0XCIsXG5cdFx0XHRcdFwieWJ0X3B5MDVcIixcblx0XHRcdFx0XCJ5YnRfcHkwNlwiLFxuXHRcdFx0XHRcInlidF9weTA3XCIsXG5cdFx0XHRcdFwieWJ0X3B5MDhcIixcblx0XHRcdFx0XCJ5YnRfcHkwOVwiLFxuXHRcdFx0XHRcInlidF9weTEwXCIsXG5cdFx0XHRcdFwieWJ0X3B5MTFcIixcblx0XHRcdFx0XCJ5YnRfcHkxMlwiLFxuXHRcdFx0XHRcInlidF9weTEzXCIsXG5cdFx0XHRcdFwieWJ0X3B5MTRcIixcblx0XHRcdFx0XCJ5YnRfcHkxNVwiLFxuXHRcdFx0XHRcInlidF9weTE2XCIsXG5cdFx0XHRcdFwieWJ0X3B5MTdcIixcblx0XHRcdFx0XCJ5YnRfcHkxOFwiLFxuXHRcdFx0XHRcInlidF9weTE5XCIsXG5cdFx0XHRcdFwieWJ0X3B5MjBcIixcblx0XHRcdFx0XCJ5YnRfcHkyMVwiLFxuXHRcdFx0XHRcInlidF9weTIyXCIsXG5cdFx0XHRcdFwieWJ0X3B5MjNcIixcblx0XHRcdFx0XCJ5YnRfcHkyNFwiLFxuXHRcdFx0XHRcInlidF9weTI1XCIsXG5cdFx0XHRdLFxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL3B5L1B5dGhvbl90dXRvcmlhbC9cIjogW1xuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlB5dGhvbiBcdTU3RkFcdTc4NDBcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHl0aG9uIFx1OTAxQVx1NzUyOFx1NjU1OVx1N0EwQlwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTdCMkMgMSBcdTdBRTAgXHU1MTY1XHU5NUU4XHU1MUM2XHU1OTA3XCIsXG5cdFx0XHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwibWtfcHkwMVwiLFxuXHRcdFx0XHRcdFx0XCJta19weTAyXCIsXG5cdFx0XHRcdFx0XHRcIm1rX3B5MDNcIixcblx0XHRcdFx0XHRcdFwibWtfcHkwNFwiLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQyAyIFx1N0FFMCBcdTkwMUFcdTc1MjhcdThCRURcdThBMDBcdTcyNzlcdTYwMjdcIixcblx0XHRcdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJta19weTA1XCIsXG5cdFx0XHRcdFx0XHRcIm1rX3B5MDZcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vY29va2Rpbm5lci9cIjogW1xuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIjIwMjJcdTVFNzRcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEteW9ndXJ0XCIsXG5cdFx0XHRcdFwiMDItT3JhbmdlX3BlZWxfY29rZV9jaGlja2VuX3dpbmdzXCIsXG5cdFx0XHRcdFwiMDMtU2hyZWRkZWRfaG90X2FuZF9zb3VyX3BvdGF0b1wiLFxuXHRcdFx0XHRcIjA0LUJyYWlzZV9pbl9zb3lfc2F1Y2VfY2hpY2tlbl93aW5nc1wiLFxuXHRcdFx0XHRcIjA1LVNhdXRlZC1TaHJlZGRlZC1Qb3JrLWluLVN3ZWV0LUJlYW4tU2F1Y2VcIixcblx0XHRcdFx0XCIwNi1wYWlodWFuZ2d1YVwiLFxuXHRcdFx0XHRcIjA3LVx1N0NENlx1OTE4Qlx1ODY3RVx1NEVDMVwiLFxuXHRcdFx0XHRcIjA4LVx1NzE0RVx1NUM3MVx1ODM2RlwiLFxuXHRcdFx0XHRcIjEwLVx1ODQ5Q1x1ODRDOVx1ODM3N1x1NTE3MFx1OEM0NlwiLFxuXHRcdFx0XHRcIjExLVx1NzU2QVx1ODMwNFx1NzI1Qlx1ODE2OVwiLFxuXHRcdFx0XHRcIjEyLXBhaWh1YW5nZ3VhMlwiLFxuXHRcdFx0XHRcIjEzLVx1ODY3RVx1NEVDMVx1NkVEMVx1ODZDQlwiLFxuXHRcdFx0XHRcIjE0LVx1NkQwQlx1ODQ3MVx1NzA5Mlx1NzI1Qlx1ODA4OVwiLFxuXHRcdFx0XSxcblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9weWF1dG8vZ2trL1wiOiBbXG5cdFx0XCJcIixcblx0XHQvLyB7IHRleHQ6IFwiXHU1MTZDXHU0RjE3XHU1M0Y3XCIsIGxpbms6IFwiMDFcIn0sXG5cdF0sXG5cdFwiL2NvbHVtbi9weWF1dG8vXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1Mzc3XHU0RTAwXHVGRjFBXHU1MjlFXHU1MTZDXHU4MUVBXHU1MkE4XHU1MzE2IEJBU0VcIixcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyBcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NEUwMFx1MzAwMSBQeXRob24gXHU4MUVBXHU1MkE4XHU1MzE2XHU1MjlFXHU1MTZDXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDFcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDJcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTRFOENcdTMwMDFQeXRob24gXHU3M0FGXHU1ODgzXHU1Qjg5XHU4OEM1XCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDNcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDRcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTRFMDlcdTMwMDFQeXRob24gXHU4MUVBXHU1MkE4XHU1MzE2XHU1OTA0XHU3NDA2IEV4Y2VsXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDVcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDZcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDdcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDhcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDlcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTBcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTFcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTJcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU4QkZFXHU1MjREXHU1MUM2XHU1OTA3XCIsXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcImF1dG9fMDFcIixcblxuXHRcdF0sXG5cdH1cblx0XSxcblx0XCIvY29sdW1uL3RraW50ZXIvXCIgOltcblx0XHR7IFxuXHRcdCAgdGV4dDogXCJGUUFcIixcblx0XHQgIC8vIFx1NTNFRlx1OTAwOVx1NzY4NCwgXHU4QkJFXHU3RjZFXHU1MjA2XHU3RUM0XHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU2Mjk4XHU1M0UwXHVGRjBDXHU5RUQ4XHU4QkE0XHU1MDNDXHU2NjJGIGZhbHNlLFxuXHRcdCAgY29sbGFwc2FibGU6IHRydWUsXG5cdFx0Ly8gICBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vb25lcHl0aG9uLmh0bWxcIixcblx0XHQgIGNoaWxkcmVuOiBbXG5cdFx0XHRcInRlYXJvZmZcIixcblx0XHQgIF1cblx0XHR9LF0sXG4gIFwiL2NvbHVtbi9tZC9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdCAgLy8gXHU1RkM1XHU4OTgxXHU3Njg0XHVGRjBDXHU1MjA2XHU3RUM0XHU3Njg0XHU2ODA3XHU5ODk4XHU2NTg3XHU1QjU3XG5cdFx0ICB0ZXh0OiBcIk1hcmtkb3duIFx1NUZFQlx1OTAxRlx1NTE2NVx1OTVFOFx1NjU1OVx1N0EwQlwiLFxuXHRcdCAgIC8vIFx1NTNFRlx1OTAwOVx1NzY4NCwgXHU1MjA2XHU3RUM0XHU2ODA3XHU5ODk4XHU1QkY5XHU1RTk0XHU3Njg0XHU1NkZFXHU2ODA3XG5cdFx0ICBpY29uOiBcImNyZWF0aXZlXCIsXG5cdFx0ICAvLyBcdTUzRUZcdTkwMDlcdTc2ODQsIFx1NTIwNlx1N0VDNFx1NjgwN1x1OTg5OFx1NUJGOVx1NUU5NFx1NzY4NFx1OTRGRVx1NjNBNVxuXHRcdCAgbGluazogXCIvY29sdW1uL21kL1wiLFxuXHRcdCAgLy8gXHU1M0VGXHU5MDA5XHU3Njg0LCBcdThCQkVcdTdGNkVcdTUyMDZcdTdFQzRcdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTYyOThcdTUzRTBcdUZGMENcdTlFRDhcdThCQTRcdTUwM0NcdTY2MkYgZmFsc2UsXG5cdFx0ICBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHQgIC8vIFx1NUZDNVx1ODk4MVx1NzY4NFx1RkYwQ1x1NTIwNlx1N0VDNFx1NzY4NFx1NUI1MFx1OTg3OVx1NzZFRVxuXHRcdCAgY2hpbGRyZW46IFtcblx0XHRcdFwiMDFcIixcblx0XHRcdFwiMDJcIixcblx0XHRcdFwiMDNcIixcblx0XHRcdF0sXG5cdFx0fSxdLFxuICAgIFwiL2NvbHVtbi9weS9iYXNlcXVlc3Rpb24vXCIgOltcbiAgICB7IFxuICAgICAgdGV4dDogXCJQeXRob24gXHU1N0ZBXHU3ODQwXHU1MTY1XHU5NUU4XHU4QkZFXHU3QTBCXHU4QkExXHU1MjEyXCIsXG5cdCAgLy8gXHU1M0VGXHU5MDA5XHU3Njg0LCBcdThCQkVcdTdGNkVcdTUyMDZcdTdFQzRcdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTYyOThcdTUzRTBcdUZGMENcdTlFRDhcdThCQTRcdTUwM0NcdTY2MkYgZmFsc2UsXG5cdCAgY29sbGFwc2FibGU6IHRydWUsXG5cdC8vICAgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL29uZXB5dGhvbi5odG1sXCIsXG4gICAgICBjaGlsZHJlbjogW1xuXHRcdFwiXCIsXG4gICAgICAgIFwicTFcIixcblx0XHRcImh3MVwiLFxuXHRcdFwicTJcIixcblx0XHRcInEzXCIsXG5cdFx0XCJxNFwiLFxuXHRcdFwicTVcIixcblx0XHRcInE2XCIsXG5cdFx0XCJxN1wiLFxuXHRcdFwicThcIixcblx0XHRcInE5XCIsXG5cdFx0XCJod193b3JkX2dhbWVcIixcbiAgICAgIF1cbiAgICB9LFxuXHR7XG5cdFx0dGV4dDogXCJcdTdBRTBcdTgyODJcdTdCNTRcdTY4NDhcIixcblx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XCJhbnN3ZXIxXCIsXG5cdFx0XHRcImFuc3dlcjJcIixcblx0XHRcdFwiYW5zd2VyM1wiLFxuXHRcdFx0XCJhbnN3ZXI0XCIsXG5cdFx0XHRcImFuc3dlcjVcIixcblx0XHRcdFwiYW5zd2VyNlwiLFxuXHRcdFx0XCJhbnN3ZXI3XCIsXG5cdFx0XHRcImFuc3dlcjhcIixcblx0XHRcdFwiYW5zd2VyOVwiLFxuXHRcdFx0XCJhbnN3ZXIxMFwiLFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIlx1NEUxM1x1OTg3OVx1N0VDM1x1NEU2MFwiLFxuXHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcInNwZWNpYWxfdmFyaWFibFwiLFxuXHRcdFx0XCJzcGVjaWFsX3l1bnN1YW5mdVwiLFxuXHRcdFx0XCJzcGVjaWFsX2ZvclwiLFxuXHRcdFx0XCJzcGVjaWFsX3doaWxlXCIsXG5cdFx0XHRcInNwZWNpYWxfbGlzdFwiLFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0ZXh0OiBcIlx1NjI4MFx1NURFN1x1NzBCOVx1NjJFOFwiLFxuXHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcInNraWxsX3B5Y2hhcm0xXCIsXG5cdFx0XHRcInNraWxsX2lweXRob24xXCIsXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiXHU4ODY1XHU1MTQ1XHU3N0U1XHU4QkM2XCIsXG5cdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdFwicmVxdWlyZW1lbnRzXCIsXG5cdFx0XHRcInJhZGl4X3BvaW50XCIsXG5cdFx0XHRcImZvcm1hdFwiXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRleHQ6IFwiRlFBXCIsXG5cdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdFwiZmFxMVwiLFxuXHRcdF0sXG5cdH0sXG5cdFx0ICBdLFxuXG5cdFwiL2NvbHVtbi9wbGF5YmFjay9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiMjAyMlx1NUU3NFwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XHRcIjAxLVRvbW15XCIsXG5cdFx0XHRcdFwiMDItTEtXXCIsXG5cdFx0XHRcdFwiMDMtMjAyMjA2MTBcIixcblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXG5cdFwiL2NvbHVtbi9jcmF3bGVyL1wiOiBbXG5cdFx0XCJcIixcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRFwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiMDEtUHl0aG9uIFx1NzNBRlx1NTg4M1x1NjQyRFx1NUVGQVwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwiczFfMDFcIn0sXG5cdFx0XHRcdC8vIFwiczFfMDFcIixcblx0XHRcdFx0eyB0ZXh0OiBcIjAyLVx1NEUzQVx1NEVDMFx1NEU0OFx1NTA1QVx1RkYxRlwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwiczFfMDJcIn0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1cdTYwQTZcdTUyMUJcdTk2OEZcdTdCMTRcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInMxXzAzXCJ9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDQtXHU1OTgyXHU0RjU1XHU4OEFCXHU1MkE4XHU4RkM3XHU0RTA3XHU2NTM2XHU1MTY1XCIsIGljb246IFwiZGVidWdcIiwgbGluazogXCJzMV8wNFwifSxcblx0XHRdfSxcblx0XHR7IFxuXHRcdFx0dGV4dDogXCJcdTZBMjFcdTU3NTdcdTRFMDBcdUZGMUFcdTcyMkNcdTg2NkJcdTU3RkFcdTc4NDBcdTUzOUZcdTc0MDZcIiwgXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiczJfMDFcIixcblx0XHRcdFx0Ly8ge1xuXHRcdFx0XHQvLyBcdHRleHQ6IFwiMDItXHU0RUMwXHU0RTQ4XHU2NjJGXHU3RjUxXHU3RURDXHU3MjJDXHU4NjZCXCIsXG5cdFx0XHRcdC8vIFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdC8vIFx0bGluazogXCJzMl8wMlwiLFxuXHRcdFx0XHQvLyBcdGljb246IFwiZGVidWdcIixcblx0XHRcdFx0Ly8gXHRjaGlsZHJlbjogW1xuXHRcdFx0XHQvLyBcdFx0XCJzMl8wMjAxXCIsXG5cdFx0XHRcdC8vIFx0XSxcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcInMyXzAyXCIsXG5cdFx0XHRcdFwiczJfMDNcIixcblx0XHRcdFx0XCJzMl8wNFwiLFxuXHRcdFx0XHRcInMyXzA1XCIsXG5cdFx0XHRcdFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHsgXG5cdFx0XHR0ZXh0OiBcIlx1ODg2NVx1NTE0NVwiLFxuXHRcdFx0Y29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInJlcGxlbmlzaDAxXCIsXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1cdTY2RjRcdTY2N0FcdTgwRkRcdTc2ODRcdTVFRjZcdThGREZcdTYzRDJcdTRFRjZcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInJlcGxlbmlzaDAyXCJ9LFxuXHRcdFx0XHRcInJlcGxlbmlzaDAzXCIsXG5cdFx0XHRdLFxuXHRcdH0sXG5cdF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1ksU0FBUyx3QkFBd0I7OztBQ0FuQyxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUV0WixJQUFNLFdBQVcsT0FBTztBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBLEVBQUUsTUFBTSw0QkFBUSxNQUFNLFFBQVEsTUFBTSxvQkFBbUI7QUFBQSxVQUN2RCxFQUFFLE1BQU0sdUJBQWEsTUFBTSxVQUFVLE1BQU0sOEJBQTZCO0FBQUEsVUFDeEUsRUFBRSxNQUFNLHVCQUFhLE1BQU0sVUFBVSxNQUFNLDJCQUEwQjtBQUFBLFVBQ3JFLEVBQUUsTUFBTSxvQkFBVSxNQUFNLE9BQU8sTUFBTSxtQkFBa0I7QUFBQSxVQUN2RCxFQUFFLE1BQU0seUNBQWdCLE1BQU0sVUFBVSxNQUFNLGlCQUFnQjtBQUFBLFVBQzlELEVBQUUsTUFBTSxnQkFBTSxNQUFNLFFBQVEsTUFBTSxnQkFBZTtBQUFBLFVBQ2pELEVBQUUsTUFBTSxrQ0FBUyxNQUFNLFFBQVEsTUFBTSxzQkFBcUI7QUFBQSxVQUMxRCxFQUFFLE1BQU0sNEJBQVEsTUFBTSxTQUFTLE1BQU0sK0JBQThCO0FBQUEsVUFDbkUsRUFBRSxNQUFNLDBEQUFhLE1BQU0sVUFBVSxNQUFNLDZFQUErQjtBQUFBLFVBQzFFLEVBQUUsTUFBTSw0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LFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsK0JBQStCO0FBQUEsSUFDOUI7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSx1QkFBdUI7QUFBQSxJQUN0QjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLHVCQUF1QjtBQUFBLElBQ3RCO0FBQUEsRUFFRDtBQUFBLEVBQ0EsbUJBQW1CO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFFRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVjtBQUFBLE1BRUQ7QUFBQSxJQUNEO0FBQUEsRUFDQTtBQUFBLEVBQ0Esb0JBQW9CO0FBQUEsSUFDbkI7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUVOLGFBQWE7QUFBQSxNQUViLFVBQVU7QUFBQSxRQUNYO0FBQUEsTUFDQztBQUFBLElBQ0Y7QUFBQSxFQUFFO0FBQUEsRUFDRixlQUFlO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUVFLE1BQU07QUFBQSxNQUVOLE1BQU07QUFBQSxNQUVOLE1BQU07QUFBQSxNQUVOLGFBQWE7QUFBQSxNQUViLFVBQVU7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQUU7QUFBQSxFQUNBLDRCQUE0QjtBQUFBLElBQzVCO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFFVCxhQUFhO0FBQUEsTUFFVixVQUFVO0FBQUEsUUFDZDtBQUFBLFFBQ007QUFBQSxR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
