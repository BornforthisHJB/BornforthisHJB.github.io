export const data = JSON.parse("{\"key\":\"v-e52c881c\",\"path\":\"/article/\",\"title\":\"文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文章\",\"blog\":{\"type\":\"type\",\"key\":\"article\"},\"layout\":\"Blog\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://bornforthis.cn/article/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AI悦创\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文章\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"copyright\":\"著作权归黄家宝|AI悦创所有\\n原文链接：https://bornforthis.cn/article/\",\"filePathRelative\":null}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
