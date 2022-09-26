import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://bornforthis.cn/",

  author: {
    name: "AndersonHJB",
    url: "https://www.bornforthis.cn/",
  },

  iconPrefix: "iconfont icon-",
  // iconAssets: "iconfont",
  iconAssets: "//at.alicdn.com/t/c/font_3426793_6bbf2ggw0ww.css",

  logo: "/img_home/logo_min.png",

  // repo: "BornforthisHJB/BornforthisHJB.github.io",
  // repo: "AndersonHJB/AndersonHJB.github.io",
  repo: "AndersonHJB?tab=repositories",
  // editLink: false,
  // lastUpdated: true,

  docsDir: "docs",

  // darkmode: "enable", // 强制深色模式
  // darkmode: "switch",
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
      Zhihu: "https://www.zhihu.com/people/aiyuechuang",
    },
  },

  footer: '长期招收编程一对一学员!微信:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>',

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        name: "AI悦创",
        avatar: "/aiyc.jpg",
        description: "一个思考者,编程私教 1v1",
        intro: "/intro.md",
        articlePerPage: 6,
      },

      // metaLocales: {
      //   editLink: "Edit this page on GitHub",
      // },
    },

    /**
     * Chinese locale config
     */
    // "/zh/": {
    //   // navbar
    //   navbar: zhNavbar,

    //   // sidebar
    //   sidebar: zhSidebar,

    //   footer: "默认页脚",

    //   displayFooter: true,

    //   blog: {
    //     description: "一个前端开发者",
    //     intro: "/zh/intro.html",
    //   },

    //   // page meta
    //   metaLocales: {
    //     editLink: "在 GitHub 上编辑此页",
    //   },
    // },
  },

  encrypt: {
    config: {
      "/1v1/03-Dannie/01.html": "123123",
      "/1v1/01-Thomas-hw-note/": ["123123"],
      "/column/python60/": "123123a",
      // "/column/Fifth_brother_photography_class/": "123123a",
      // "/column/data-structure/": "123123a",
      // "/column/web/": "123123a",
      "/dedao/": "123123a",
      // "/column/data_analysis/week1": "123123a",
      [encodeURI("/column/TensorFlow/零基础实战机器学习/")]: "123123a",
      "/column/Programmingthinking/": "123123a",
      "/column/playback/01-Tommy.html": "20220517",
      "/column/playback/02-LKW.html": "lkw",
      "/column/playback/03-20220610.html": "20220610",
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   // provider: "giscus",
    //   // repo: "BornforthisHJB/comment",
    //   // repoId: "R_kgDOHTJESw",
    //   // category: "Announcements",
    //   // categoryId: "DIC_kwDOHTJES84CO_Qz",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //    provider: "Waline",
    //    serverURL: "https://comment.bornforthis.cn/",
    //    comment: true, // 评论数统计
    //    pageview: true, // 浏览量统计
    //    copyright: false,
    //    dark: true,
    //    emoji: [
    //      'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
    //      'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
    //      'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
    //      'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
    //      'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
    //      'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji',
    //    ],
    // },
    components: [
      "Badge",
      "PDF",
      "YouTube",
    ],

    // Disable features you don't want here
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
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      vpre: true,
      vuePlayground: true,
    },

    copyright: {
      author: "黄家宝|AI悦创",
      global: true,
      triggerWords: 100,
      disableCopy: false,
      disableSelection: false,
    },

    pwa: false,
    // pwa: {
      // update: "hint",
      // maxPicSize: 90000,
      // maxSize: 9000000,
      // favicon: "/favicon.ico",
      // cacheHTML: false,
      // cachePic: false,
      // appendBase: true,
      // apple: {
      //   icon: "/assets/icon/apple-icon-152.png",
      //   statusBarColor: "black",
      // },
      // msTile: {
      //   image: "/assets/icon/ms-icon-144.png",
      //   color: "#ffffff",
      // },
      // manifest: {
      //   icons: [
      //     {
      //       src: "/assets/icon/chrome-mask-512.png",
      //       sizes: "512x512",
      //       purpose: "maskable",
      //       type: "image/png",
      //     },
      //     {
      //       src: "/favicon.ico",
      //       sizes: "192x192",
      //       purpose: "maskable",
      //       type: "image/png",
      //     },
      //     {
      //       src: "/favicon.ico",
      //       sizes: "512x512",
      //       type: "image/png",
      //     },
      //     {
      //       src: "/favicon.ico",
      //       sizes: "192x192",
      //       type: "image/png",
      //     },
      //   ],
      //   shortcuts: [
      //     {
      //       name: "Demo",
      //       short_name: "Demo",
      //       url: "/demo/",
      //       icons: [
      //         {
      //           src: "/assets/icon/guide-maskable.png",
      //           sizes: "192x192",
      //           purpose: "maskable",
      //           type: "image/png",
      //         },
      //         {
      //           src: "/assets/icon/guide-monochrome.png",
      //           sizes: "192x192",
      //           purpose: "monochrome",
      //           type: "image/png",
      //         },
      //       ],
      //     },
      //   ],
      // },
    // },
  },
});
