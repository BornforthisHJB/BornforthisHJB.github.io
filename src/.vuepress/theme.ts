import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://bornforthis.cn/",
  headerDepth: 6,

  author: {
    name: "AndersonHJB",
    url: "https://bornforthis.cn/",
  },

  // iconAssets: "fontawesome-with-brands",
  iconPrefix: "iconfont icon-",
  // navbarIcon: true,
  // sidebarIcon: true,
  iconAssets: [
    // "//at.alicdn.com/t/c/font_3426793_24yf7lwsroo.css",
    "https://bornforthis.cn/icon/iconfont.css",
    // "fontawesome",
    // "//at.alicdn.com/t/c/font_3426793_b8qrvh36wiq.css",
  ],

  logo: "/aiyc.svg",

  repo: "https://github.com/AndersonHJB",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Copyright © 2018-2024 长期招收编程一对一学员!微信:Jiabcdefh",
  editLink: false,
  displayFooter: true,

  encrypt: {
    config: {
      "/Java/": ['LL', 'aiyc'],
      "/HomeWork/YuShu/": ["aiyc", "ys"],
      "/Python/pyauto/": ["aiyc", "rxx", "kai"],
      "/R-Course/base/01.html": ["aiyc", "zl"],
      "/R-Course/base/02.html": ["aiyc", "zl"],
      "/Python/Assignment/Assignment1.html": ["aiyc", "ydn", "Vector", "yh", "zy", "xxy", "lcy", "kai", "lyf", "sgr"],
      "/Python/Assignment/Assignment2.html": ["aiyc", "ydn", "Vector", "yh", "zy", "xxy", "lcy", "kai", "lyf", "sgr"],
      "/Python/basequestion/": ["aiyc", "ydn", "Vector", "yh", "zy", "xxy", "lcy", "kai", "ytq"],
      "/Python/Python-core-technology-and-practice/": ["aiyc", "kai"],
      "/Python/NoteBook/": ["aiyc", "lcy", "ydn", "ytq", "lyf", 'kk', 'Julie', '1v1', 'lxj'],
      // "/Python/NoteBook/05-python-list": ["aiyc", "lcy", "ydn", "ytq", "lyf", 'kk', 'Julie', '1v1', 'lxj'],
    },
  },

  // page meta
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  
  plugins: {
    shiki: {
      collapsedLines: 15,
    //   lineNumbers: 1,
      notationDiff: true,
      notationFocus: true,
      highlightLines: true,
      notationHighlight: true,
    //   langs: ['sql', 'python', 'java', 'javascript', 'c', 'c#', 'c++', 'html', 'css',
    //     'bash', 'rust', 'php', 'r', 'cmd', 'yaml', 'markdown', 'http', 'cmake', 'matlab',
    //     'plsql', 'ini', "fortran-free-form", "fortran-fixed-form", 'go', 'vue', 'tex', 'text', 'csv', 'fish',
    //     'makefile', 'typescript',
    //   ],
      // langAlias: {
      //   ["fortran"]: "fortran-free-form",
      // },
      theme: "monokai",
      // themes: {
      //   light: "monokai",
      //   dark: "one-dark-pro",
      // },
    },
    watermark: {
      enabled: true,
      watermarkOptions: {
        content: "AI悦创-Python一对一辅导 bornforthis.cn"
      },
    },
    // comment: false,
    // You should generate and use your own comment service
    comment: {
      provider: "Waline",
      serverURL: "https://comment.bornforthis.cn/",
      reaction: [
        '/Waline/tieba/tieba_agree.png',
        '/Waline/tieba/tieba_sunglasses.png',
        '/Waline/tieba/tieba_pick_nose.png',
        // '/Waline/tieba/tieba_sleep.png',
        '/Waline/tieba/tieba_awkward.png',
        '/Waline/tieba/1f613.png',
        '/Waline/tieba/1f60f.png',
        // '/Waline/tieba/tieba_coffee.png',
        // '/Waline/tieba/tieba_cute.png',
        // '/Waline/qq/qq_4.gif',
        // '/Waline/qq/qq_alpaca.gif',
        // '/Waline/qq/qq_bear2.gif',
      ],
      comment: true, // 评论数统计
      pageview: true, // 浏览量统计
      copyright: false,
      dark: "auto",
    },
    
    markdownImage: {
      mark: true,
      size: true,
      lazyload: true,
      figure: true,
    },
    markdownHint: {
      hint: true,
      alert: true,
    },
    markdownTab: {
      codeTabs: true,
      tabs: true,
    },
    markdownMath: true,
    mdEnhance: {
      chart: false, 
      echarts: false,
      mermaid: true,
      vuePlayground: false,
      sub: true,
      spoiler: true,
      sup: true,
      demo: true,
      tasklist: true,
      include: true,
      attrs: false,
      mark: true, 
      footnote: true,
      align: true, 
      flowchart: false, 
      gfm: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      vPre: true,
    },


    copyright: {
      author: "黄家宝|AI悦创",
      global: true,
      triggerLength: 100,
      disableCopy: true,
      disableSelection: true,
    },
  },
});
