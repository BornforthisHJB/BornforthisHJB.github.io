import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/huangjiabao/GitHub/WebSites/BornforthisHJB.github.io/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWHintPopup from "/Users/huangjiabao/GitHub/WebSites/BornforthisHJB.github.io/node_modules/vuepress-plugin-pwa2/lib/client/components/SWHintPopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWHintPopup,
    
  ],
});