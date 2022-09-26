export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"AI悦创\",\"description\":\"Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学\",\"head\":[[\"link\",{\"rel\":\"shortcut icon\",\"href\":\"/favicon.ico\"}],[\"script\",{\"type\":\"text/javascript\",\"src\":\"/js/baidu.js\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
