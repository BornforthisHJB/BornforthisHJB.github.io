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

  footer: "Copyright © 2018-2023 长期招收编程一对一学员!微信:Jiabcdefh",
  editLink: false,
  displayFooter: true,

  encrypt: {
    config: {
      "/HomeWork/YuShu/": ["aiyc", "ys"],
      "/R-Course/base/01.html": ["aiyc", "zl"],
      "/R-Course/base/02.html": ["aiyc", "zl"],
      "/Python/Assignment/Assignment1.html": ["aiyc", "ydn", "Vector", "yh", "zy", "xxy", "lcy", "kai"],
      "/Python/Assignment/Assignment2.html": ["aiyc", "ydn", "Vector", "yh", "zy", "xxy", "lcy", "kai"],
      "/Python/basequestion/": ["aiyc", "ydn", "Vector", "yh", "zy", "xxy", "lcy", "kai"],
      "/Python/Python-core-technology-and-practice/": ["aiyc", "kai"],
    },
  },

  // page meta
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  
  plugins: {
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
    
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      katex: true,
      mathjax: false,

      // install chart.js before enabling it
      // chart: true,

      codetabs: true,

      // insert component easily
      // component: true,

      demo: false,
      tabs: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,
      

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      

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
      sub: true,
      sup: true,
      vPre: true,
      tasklist: true,

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },

    autoCatalog: true,
    copyright: {
      author: "黄家宝|AI悦创",
      global: true,
      triggerLength: 100,
      disableCopy: false,
      disableSelection: false,
    },
  },
});
