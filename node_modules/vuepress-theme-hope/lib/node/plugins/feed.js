import { feedPlugin } from "vuepress-plugin-feed2";
import { deepAssign } from "vuepress-shared/node";
export const getFeedPlugin = (themeConfig, options, hostname, legacy = false) => {
    if (options === false ||
        // disable feed if no options for feed plugin
        !Object.keys(options || {}).length)
        return null;
    return feedPlugin(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deepAssign({
        hostname,
        author: themeConfig.author,
        locales: Object.entries(themeConfig.locales).map(([localePath, { author, copyright }]) => [
            localePath,
            { author, channel: { copyright } },
        ]),
        customElements: [
            "ExternalLinkIcon",
            "Badge",
            "ChartJS",
            "CodeDemo",
            "CodeTabs",
            "FlowChart",
            "Mermaid",
            "Presentation",
        ],
    }, options || {}), legacy);
};
//# sourceMappingURL=feed.js.map