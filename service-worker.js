if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const c=e=>a(e,d),b={module:{uri:d},exports:r,require:c};s[d]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"AI悦创"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01.html.3499568c.js",revision:"5d393b17fe6bd7e30ba5cd61f2432d2e"},{url:"assets/01.html.bf2c0c4c.js",revision:"c80db2bf0792f662a5f3ea742e7ff8b7"},{url:"assets/02-初识数据类型 Notebook.html.26d4cf3a.js",revision:"af973bd405e2867425a1aaf2a70ee92a"},{url:"assets/02-初识数据类型 Notebook.html.f9dd894e.js",revision:"0e3bcff3e4f6c3b317e6be2574bd4308"},{url:"assets/02.html.b17cd789.js",revision:"f68037b2e469834d23c598a4e612cbd0"},{url:"assets/02.html.e0818e83.js",revision:"ddb4afa8df5fb3c88b95f612e82b5a5a"},{url:"assets/404.28f0d5ed.js",revision:"088522475b75d7264afacf18c8513d7b"},{url:"assets/404.html.4b69725e.js",revision:"3b2db5540bc8c22cd6af6f1b6429ba45"},{url:"assets/404.html.9bf8872a.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/app.3d8fe386.js",revision:"5047f6cb3303b60ffd03c91cf4f71d03"},{url:"assets/article1.html.bd962918.js",revision:"1f191ed1f3f8295bf4da5b53764defb0"},{url:"assets/article1.html.f0108978.js",revision:"57b2ddef36833aa784565fab17162fc5"},{url:"assets/article10.html.0395e105.js",revision:"2b66bbf19af9e1e6fdc55a8d9e875fde"},{url:"assets/article10.html.1cd551b2.js",revision:"6c53bd4d0bc674e891b5d31cfa8c8810"},{url:"assets/article11.html.3533b7e1.js",revision:"04ca8d8c2c16f47a4aee043e30adaa77"},{url:"assets/article11.html.c04dada0.js",revision:"ec25b35bd36cd86cdc3a7cb33484474e"},{url:"assets/article12.html.6593866e.js",revision:"41cb597060fb3f73055045e287dabd7c"},{url:"assets/article12.html.d2b34276.js",revision:"46fc362cb9abb43d3d55e410834a93c4"},{url:"assets/article2.html.19728267.js",revision:"b3811170aa6319be583cdc338718d28b"},{url:"assets/article2.html.2d901873.js",revision:"99f754ef50eb2e0b707b5df3312e453e"},{url:"assets/article3.html.8d7ef07a.js",revision:"eb8e95e9d995d24132b284661218d5ad"},{url:"assets/article3.html.d019b50d.js",revision:"05d5e82ec6e3c2f5031b7469dd7fc308"},{url:"assets/article4.html.4d7daa07.js",revision:"a0c2bf420d892f55349d5427d6a0b301"},{url:"assets/article4.html.6d02f922.js",revision:"996df689a12e7b105d238bc28b39a6b1"},{url:"assets/article5.html.4e9b2e05.js",revision:"0da4a69cb24c397d52a999cc4eaf7ed8"},{url:"assets/article5.html.70ae2934.js",revision:"cd57f5dd876f6755fcdbefd05e663cb1"},{url:"assets/article6.html.0f1fbcf4.js",revision:"8fcc2932edcc97b58e68dc7c77efd7e7"},{url:"assets/article6.html.4e480fed.js",revision:"ff70943b126110895883d412b962f7e6"},{url:"assets/article7.html.a5c7c976.js",revision:"1fdc8ad61e70b2512eb90eb6f4c3b0e6"},{url:"assets/article7.html.a9b0e1c8.js",revision:"b6eadb63de0d3298b4e6762d9766c42f"},{url:"assets/article8.html.4377a157.js",revision:"0a7b5c82cef6a2c665a1183712fcf7f2"},{url:"assets/article8.html.88166262.js",revision:"9fa3b0b3e5462beac87e0b73eb6218f1"},{url:"assets/article9.html.38c5eb49.js",revision:"21654b733d923dccc60c530c2b900aac"},{url:"assets/article9.html.f204c943.js",revision:"e26b2abe66d669f41c6a3deca0eb04da"},{url:"assets/auto.esm.15d52109.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/Blog.88ca69eb.js",revision:"dbc15bad551b1c04e89f6dfb49dbff3d"},{url:"assets/column.html.656b6e0c.js",revision:"6615ea1981991c6a9e7435a3a6b1839f"},{url:"assets/column.html.9bf95c47.js",revision:"801ab73d1099ca17d632d4494f2163d9"},{url:"assets/disable.html.3de7d919.js",revision:"e9e19225f409540711ea87fce4970a11"},{url:"assets/disable.html.68789540.js",revision:"46e7fdb0ebfadc735848a4d40a5494a1"},{url:"assets/encrypt.html.5387ccf8.js",revision:"7c17c2ff3ac4f29515e9baa22bcb7b62"},{url:"assets/encrypt.html.aa05e011.js",revision:"fb27f8190bb0aaa97b7d9a8f43646626"},{url:"assets/giscus.es.d2953791.js",revision:"c74b717a7906a84e4a2b2b6ba19b0954"},{url:"assets/highlight.esm.d982e650.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/home.html.91050470.js",revision:"d7bb4afcf2fab8595f1feb53f43db9c0"},{url:"assets/home.html.b7eb6a7e.js",revision:"e21fb42b554caa7e5fa1590e47268360"},{url:"assets/index.1842ee54.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.0625bc0f.js",revision:"d81c6f597901cbac8547f10cb8507ae4"},{url:"assets/index.html.06a8f05b.js",revision:"ed99413bf2808cd65e9dc9f5f0e032e0"},{url:"assets/index.html.0eb4b655.js",revision:"1d0e17580af830f303305f4e56ab96d8"},{url:"assets/index.html.14d0031f.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.1a3317d1.js",revision:"1558e9b086d5a54d4efa5c84b86dce8c"},{url:"assets/index.html.1e2d2d16.js",revision:"5e147265edb7426361e196cdb1a4f924"},{url:"assets/index.html.2e22fa45.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.2fca03a8.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.2fce26cd.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.38bc20d0.js",revision:"99e72901229aba6d62631cddef5f8a2f"},{url:"assets/index.html.39f00128.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.3c7a7892.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.3e4a26b1.js",revision:"8b246639c2a5f1746f0882e892b3d21f"},{url:"assets/index.html.40efa504.js",revision:"d2ce7e84eb03258a8861682b54a3fab8"},{url:"assets/index.html.4301bd21.js",revision:"5da134131c86d49b117c8b828c456332"},{url:"assets/index.html.45512ee8.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.4883cdc4.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.4d58b1d0.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.53b9259c.js",revision:"257d9b488285e4054696c279839be515"},{url:"assets/index.html.61e4504d.js",revision:"784ff3559147d67d906805338792c8a8"},{url:"assets/index.html.6d8e4211.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.712debe6.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.803d1c66.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.84746347.js",revision:"176faf7a50abbeeeb6ff186edc976c09"},{url:"assets/index.html.8c8ddd02.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.a5939da4.js",revision:"74352586de0a0c426b98c16e3dcd90cd"},{url:"assets/index.html.b9aee2e8.js",revision:"7dbaf12a705ac181fecc330c367c8274"},{url:"assets/index.html.befd4113.js",revision:"fff6142189dabfd103bd03acb2338ffd"},{url:"assets/index.html.c1b38070.js",revision:"19f41a6b562da32c8891304cd7c3861c"},{url:"assets/index.html.c4b1dd59.js",revision:"d6c94a476ed65d4a86ea4de53de08df7"},{url:"assets/index.html.d1feef88.js",revision:"98ebdefb5fb8ad741ff70f4f90d761a8"},{url:"assets/index.html.d224f5e9.js",revision:"f84fcf097f425851db940f04611a999d"},{url:"assets/index.html.d90a826a.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.db7f2f13.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.e43aad0a.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.e8f57c7f.js",revision:"f9b1226ff07e40e454f0645c6658787e"},{url:"assets/index.html.ed2f7238.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.ee7c525b.js",revision:"de10c6b618def5ae4acdd649c2bacc3a"},{url:"assets/index.html.eed5d983.js",revision:"4dcefc44e632a5df46fc9aac28bcada7"},{url:"assets/index.html.f0cb3b93.js",revision:"087e237d042c306345c971d6c2cb2752"},{url:"assets/index.html.f3e8e819.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.fef7cc31.js",revision:"668665dc3bffde8c960b5a097fc7babb"},{url:"assets/intro.html.0a32db06.js",revision:"9cc35fc98fcd7b5ff34f0f4d2bdbc589"},{url:"assets/intro.html.207e0eb8.js",revision:"930fac092194fc6a3b7dc8c7cc86c8ed"},{url:"assets/Jiabcdefh.ba1c1eef.js",revision:"268d2db1bd4e8fa3bb6a1017bc57d92f"},{url:"assets/Layout.81620e81.js",revision:"11611e358018ead63e04fbbdb4074353"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/markdown.html.6a9274e7.js",revision:"7794edc298cc54f22b08815934e124fc"},{url:"assets/markdown.html.c8b214d2.js",revision:"1ec7c0aea2ac02d2b3822f8931650f0f"},{url:"assets/math.esm.a3f84b6f.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.f71f1464.js",revision:"2a17c61d78f771d0bef2be0479bd1e04"},{url:"assets/notes.esm.3c361cb7.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/onepython.html.0a3cefeb.js",revision:"08e95dedb20995ef8109702637b74b70"},{url:"assets/onepython.html.3bf13f33.js",revision:"487fb3860dea0481f49719b3345dac07"},{url:"assets/page.html.5435f4b3.js",revision:"34c3306869c834164969d3b0437178ed"},{url:"assets/page.html.b8b771e5.js",revision:"c5c97cbb4a2bc3e3559916ef30f085ff"},{url:"assets/photoswipe.esm.965d151d.js",revision:"9e0eb403fc1eac1e87a246dae12858a1"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/reveal.esm.b96f05d8.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.80da4a02.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/SkipLink.5c793fe7.js",revision:"59c30862e13faaf917e4be5519beeb1f"},{url:"assets/Slide.d8f0d3aa.js",revision:"e7d15c82db7fc41a202efd57ec2a67f0"},{url:"assets/slide.html.745c961b.js",revision:"af80f1894a6d00188a01be722829bf57"},{url:"assets/slide.html.dbeae509.js",revision:"c2eb281c5efdd2884d515a69375c09a9"},{url:"assets/style.cf71a79c.css",revision:"62ce82447087e161aa907056572769ce"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"ColumnImages/MarkdownBase/01-markdown-mark-white.svg",revision:"13aaefbb06ee3f014ee1cb0c8a2c8338"},{url:"css/font_2410206_mfj6e1vbwo.css",revision:"22bcb97fc3b238efba8737f263482502"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"48a012ad3cfd82cd02df769c90287a18"},{url:"404.html",revision:"414aea86b0ac037dea4d4247e91a5955"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
