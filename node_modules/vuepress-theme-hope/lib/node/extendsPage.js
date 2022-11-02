import { logger } from "@vuepress/utils";
import { getCategory, getDate, getTag, injectLocalizedDate, timeTransformer, } from "vuepress-shared/node";
export const checkFrontmatter = (page, isDev = false) => {
    const frontmatter = page.frontmatter;
    const { filePathRelative } = page;
    // check date
    if ("date" in frontmatter && !(frontmatter.date instanceof Date)) {
        if (isDev)
            logger.error(`"date" property in Page FrontMatter should be a valid Date.${filePathRelative ? `\nFound in ${filePathRelative}` : ""}`);
        delete frontmatter.date;
    }
    // resolve category
    if ("category" in frontmatter) {
        const category = getCategory(frontmatter.category);
        frontmatter.category = category;
    }
    // resolve tag
    if ("tag" in frontmatter) {
        const tag = getTag(frontmatter.tag);
        frontmatter.tag = tag;
    }
};
export const extendsPage = (themeConfig, plugins, page, isDev = false) => {
    const { config = {} } = themeConfig.encrypt;
    const frontmatter = page.frontmatter;
    const { filePathRelative, path } = page;
    const { createdTime } = page.data.git || {};
    checkFrontmatter(page, isDev);
    // save relative file path into page data to generate edit link
    page.data.filePathRelative = filePathRelative;
    // inject localized date
    injectLocalizedDate(page);
    page.routeMeta["t" /* ArticleInfoType.title */] = page.title;
    if ("icon" in frontmatter)
        page.routeMeta["i" /* ArticleInfoType.icon */] = frontmatter.icon;
    // resolve shortTitle
    if ("shortTitle" in frontmatter)
        page.routeMeta["s" /* ArticleInfoType.shortTitle */] = frontmatter.shortTitle;
    if (plugins.blog) {
        const isArticle = 
        // declaring this is an article
        frontmatter.article ||
            // generated from markdown files
            Boolean(frontmatter.article !== false && filePathRelative);
        const isEncrypted = Object.keys(config).some((key) => decodeURI(path).startsWith(key));
        const isSlide = isArticle && frontmatter.layout === "Slide";
        // save page type to routeMeta
        page.routeMeta["y" /* ArticleInfoType.type */] = frontmatter.home
            ? "h" /* PageType.home */
            : isSlide
                ? "s" /* PageType.slide */
                : isArticle
                    ? "a" /* PageType.article */
                    : "p" /* PageType.page */;
        const excerpt = isEncrypted
            ? ""
            : page.excerpt ||
                frontmatter.description ||
                (typeof plugins.blog === "object" && plugins.blog.autoExcerpt
                    ? frontmatter.summary || ""
                    : "");
        // save page excerpt to routeMeta
        if (excerpt)
            page.routeMeta["e" /* ArticleInfoType.excerpt */] = excerpt;
        // resolve author
        if ("author" in frontmatter)
            page.routeMeta["a" /* ArticleInfoType.author */] = frontmatter.author;
        // resolve date
        if ("date" in frontmatter) {
            const date = getDate(page.frontmatter.date)?.value;
            if (date) {
                page.routeMeta["d" /* ArticleInfoType.date */] = frontmatter.date;
                page.routeMeta["l" /* ArticleInfoType.localizedDate */] = timeTransformer(date, {
                    lang: page.lang,
                    type: "date",
                });
            }
        }
        else if (createdTime)
            page.routeMeta["d" /* ArticleInfoType.date */] = new Date(createdTime);
        if ("category" in frontmatter)
            // resolve category
            // resolve category
            page.routeMeta["c" /* ArticleInfoType.category */] = frontmatter.category;
        // resolve tag
        if ("tag" in frontmatter)
            page.routeMeta["g" /* ArticleInfoType.tag */] = frontmatter.tag;
        // resolve sticky
        if ("sticky" in frontmatter)
            page.routeMeta["u" /* ArticleInfoType.sticky */] = frontmatter.sticky;
        // resolve image
        if ("cover" in frontmatter)
            page.routeMeta["v" /* ArticleInfoType.cover */] = frontmatter.cover;
        // ensure a valid reading time exists
        if (page.data.readingTime && page.data.readingTime.words !== 0)
            page.routeMeta["r" /* ArticleInfoType.readingTime */] = page.data.readingTime;
        // resolve isOriginal
        if ("isOriginal" in frontmatter)
            page.routeMeta["o" /* ArticleInfoType.isOriginal */] = frontmatter.isOriginal;
        // resolve encrypted
        if (isEncrypted)
            page.routeMeta["n" /* ArticleInfoType.isEncrypted */] = true;
    }
};
//# sourceMappingURL=extendsPage.js.map