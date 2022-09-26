import { useStyleTag } from "/Users/huangjiabao/GitHub/WebSites/Bornforthis.cn/node_modules/vuepress-plugin-components/lib/client/composables/index.js";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import FontIcon from "/Users/huangjiabao/GitHub/WebSites/Bornforthis.cn/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/Users/huangjiabao/GitHub/WebSites/Bornforthis.cn/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import PDF from "/Users/huangjiabao/GitHub/WebSites/Bornforthis.cn/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import YouTube from "/Users/huangjiabao/GitHub/WebSites/Bornforthis.cn/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "/Users/huangjiabao/GitHub/WebSites/Bornforthis.cn/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("Badge", Badge);
    app.component("PDF", PDF);
    app.component("YouTube", YouTube);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/c/font_3426793_6bbf2ggw0ww.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});