import {
  useScrollPromise
} from "./chunk-4N7O3C7U.js";
import "./chunk-ZYA2Y74L.js";
import "./chunk-FECFGNAG.js";
import "./chunk-SWQ4XTYF.js";
import "./chunk-JRULDCC4.js";
import {
  Transition,
  defineComponent,
  h
} from "./chunk-3JL2R52N.js";
import "./chunk-XYQ66V4O.js";
import "./chunk-YACYAO4R.js";
import "./chunk-5E3NKPRU.js";

// node_modules/vuepress-theme-hope/lib/client/components/transitions/FadeSlideY.js
import "/Users/huangjiabao/GitHub/WebSites/BornforthisHJB.github.io/node_modules/vuepress-theme-hope/lib/client/styles/fade-slide-y.scss";
var FadeSlideY_default = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return () => h(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a;
      return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
    });
  }
});

// dep:@theme-hope_components_transitions_FadeSlideY__js
var theme_hope_components_transitions_FadeSlideY_js_default = FadeSlideY_default;
export {
  theme_hope_components_transitions_FadeSlideY_js_default as default
};
//# sourceMappingURL=@theme-hope_components_transitions_FadeSlideY__js.js.map
