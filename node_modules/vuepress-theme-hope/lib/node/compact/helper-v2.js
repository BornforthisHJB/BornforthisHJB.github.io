import { convertThemeConfig } from "./theme.js";
import { hopeTheme } from "../theme.js";
import { logger } from "../utils.js";
/**
 * @deprecated use `navbar` instead
 */
export const defineNavbarConfig = (config) => {
    logger.warn('"defineNavbarConfig" is deprecated, please import and use "navbar" from vuepress-theme-hope instead.');
    return config;
};
/**
 * @deprecated use `sidebar` instead
 */
export const defineSidebarConfig = (config) => {
    logger.warn('"defineSidebarConfig" is deprecated, please import and use "sidebar" from vuepress-theme-hope instead.');
    return config;
};
/**
 * @deprecated use `arraySidebar` instead
 */
export const defineSidebarArrayConfig = (config) => {
    logger.warn('"defineSidebarArrayConfig" is deprecated, please import and use "arraySidebar" from vuepress-theme-hope instead.');
    return config;
};
/**
 * @deprecated use `objectSidebar` instead
 */
export const defineSidebarObjectConfig = (config) => {
    logger.warn('"defineSidebarObjectConfig" is deprecated, please import and use "objectSidebar" from vuepress-theme-hope instead.');
    return config;
};
/**
 * @deprecated import and use `hopeTheme` instead
 */
export const defineThemeConfig = (themeConfig) => {
    logger.warn('"defineThemeConfig" is deprecated, please import "hopeTheme" from vuepress-theme-hope and use "theme : hopeTheme(themeConfig)" instead.');
    return convertThemeConfig(themeConfig);
};
/**
 * @deprecated import and use `hopeTheme` instead
 */
export const defineHopeConfig = (config) => {
    logger.warn('"defineHopeConfig" is deprecated, please import "hopeTheme" from vuepress-theme-hope and use "theme : hopeTheme(themeConfig)" instead.');
    // check themeConfig
    if ("themeConfig" in config && typeof config["themeConfig"] === "object") {
        config.theme = hopeTheme(config["themeConfig"], true);
        logger.warn('"themeConfig" is deprecated, please import "hopeTheme" from vuepress-theme-hope and use "theme : hopeTheme(themeConfig)" instead.');
    }
    // check theme
    if (typeof config.theme !== "function")
        config.theme = hopeTheme({});
    return config;
};
//# sourceMappingURL=helper-v2.js.map