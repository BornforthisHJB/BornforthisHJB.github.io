const t=JSON.parse('{"key":"v-6641e7f8","path":"/Python/Python-core-technology-and-practice/12.html","title":"12-面向对象（下）：如何实现一个搜索引擎？","lang":"zh-CN","frontmatter":{"title":"12-面向对象（下）：如何实现一个搜索引擎？","icon":"python","date":"2022-10-02T13:39:18.000Z","author":"AI悦创","isOriginal":true,"category":"Python 进阶","tag":["Python 进阶"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"img 你好，我是悦创。这节课，我们来实现一个 Python 的搜索引擎（search engine）。 承接上文，今天这节课的主要目的是，带你模拟敏捷开发过程中的迭代开发流程，巩固面向对象的程序设计思想。 我们将从最简单最直接的搜索做起，一步步优化，这其中，我不会涉及到过多的超纲算法，但不可避免会介绍一些现代搜索引擎中的基础概念，例如语料（corpu...","head":[["meta",{"property":"og:url","content":"https://bornforthis.cn/Python/Python-core-technology-and-practice/12.html"}],["meta",{"property":"og:site_name","content":"AI悦创-Python一对一辅导"}],["meta",{"property":"og:title","content":"12-面向对象（下）：如何实现一个搜索引擎？"}],["meta",{"property":"og:description","content":"img 你好，我是悦创。这节课，我们来实现一个 Python 的搜索引擎（search engine）。 承接上文，今天这节课的主要目的是，带你模拟敏捷开发过程中的迭代开发流程，巩固面向对象的程序设计思想。 我们将从最简单最直接的搜索做起，一步步优化，这其中，我不会涉及到过多的超纲算法，但不可避免会介绍一些现代搜索引擎中的基础概念，例如语料（corpu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bornforthis.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-14T06:57:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"12-面向对象（下）：如何实现一个搜索引擎？"}],["meta",{"property":"article:author","content":"AI悦创"}],["meta",{"property":"article:tag","content":"Python 进阶"}],["meta",{"property":"article:published_time","content":"2022-10-02T13:39:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-14T06:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12-面向对象（下）：如何实现一个搜索引擎？\\",\\"image\\":[\\"https://bornforthis.cn/\\"],\\"datePublished\\":\\"2022-10-02T13:39:18.000Z\\",\\"dateModified\\":\\"2024-01-14T06:57:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AI悦创\\"}]}"]]},"headers":[{"level":2,"title":"1. “高大上”的搜索引擎","slug":"_1-高大上-的搜索引擎","link":"#_1-高大上-的搜索引擎","children":[]},{"level":2,"title":"2. Bag of Words 和 Inverted Index","slug":"_2-bag-of-words-和-inverted-index","link":"#_2-bag-of-words-和-inverted-index","children":[]},{"level":2,"title":"3. LRU 和多重继承","slug":"_3-lru-和多重继承","link":"#_3-lru-和多重继承","children":[]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]},{"level":2,"title":"5. 思考题","slug":"_5-思考题","link":"#_5-思考题","children":[]}],"git":{"createdTime":1705215474000,"updatedTime":1705215474000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":17.92,"words":5377},"filePathRelative":"Python/Python-core-technology-and-practice/12.md","localizedDate":"2022年10月2日","copyright":{"author":"AI悦创"},"autoDesc":true}');export{t as data};
