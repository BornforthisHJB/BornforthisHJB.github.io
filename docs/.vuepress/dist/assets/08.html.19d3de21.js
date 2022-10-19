const e=JSON.parse('{"key":"v-88626998","path":"/blog/2022/08.html","title":"Python\u5165\u95E8(\u4E0A)","lang":"zh-CN","frontmatter":{"title":"Python\u5165\u95E8(\u4E0A)","date":"2022-08-23T10:55:52.000Z","author":"AI\u60A6\u521B","isOriginal":true,"category":["Python\u57FA\u7840"],"tag":["Python\u57FA\u7840"],"icon":"python","sticky":false,"star":false,"password":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"summary":"Python\u5165\u95E8(\u4E0A) 1. \u7B80\u4ECB 2. \u53D8\u91CF\u3001\u8FD0\u7B97\u7B26\u4E0E\u6570\u636E\u7C7B\u578B 1. \u6CE8\u91CA 2. \u8FD0\u7B97\u7B26 3. \u53D8\u91CF\u548C\u8D4B\u503C 4. \u6570\u636E\u7C7B\u578B\u4E0E\u8F6C\u6362 5. print()\u51FD\u6570-\u51FD\u6570) 3. \u4F4D\u8FD0\u7B97 1. \u539F\u7801\u3001\u53CD\u7801\u548C\u8865\u7801 2. \u6309\u4F4D\u8FD0\u7B97 3. \u5229\u7528\u4F4D\u8FD0\u7B97\u5B9E\u73B0\u5FEB\u901F\u8BA1\u7B97 4. \u5229\u7528\u4F4D\u8FD0\u7B97\u5B9E\u73B0\u6574\u6570\u96C6\u5408 4. \u6761\u4EF6\u8BED\u53E5 1. if \u8BED\u53E5 2. if - else \u8BED\u53E5 3. if -","head":[["meta",{"property":"og:url","content":"https://bornforthis.cn/blog/2022/08.html"}],["meta",{"property":"og:site_name","content":"AI\u60A6\u521B"}],["meta",{"property":"og:title","content":"Python\u5165\u95E8(\u4E0A)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-26T13:15:36.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"AI\u60A6\u521B"}],["meta",{"property":"article:tag","content":"Python\u57FA\u7840"}],["meta",{"property":"article:published_time","content":"2022-08-23T10:55:52.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-26T13:15:36.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u6CE8\u91CA","slug":"_1-\u6CE8\u91CA","link":"#_1-\u6CE8\u91CA","children":[]},{"level":2,"title":"2. \u8FD0\u7B97\u7B26","slug":"_2-\u8FD0\u7B97\u7B26","link":"#_2-\u8FD0\u7B97\u7B26","children":[{"level":3,"title":"\u7B97\u672F\u8FD0\u7B97\u7B26","slug":"\u7B97\u672F\u8FD0\u7B97\u7B26","link":"#\u7B97\u672F\u8FD0\u7B97\u7B26","children":[]},{"level":3,"title":"\u6BD4\u8F83\u8FD0\u7B97\u7B26","slug":"\u6BD4\u8F83\u8FD0\u7B97\u7B26","link":"#\u6BD4\u8F83\u8FD0\u7B97\u7B26","children":[]},{"level":3,"title":"\u903B\u8F91\u8FD0\u7B97\u7B26","slug":"\u903B\u8F91\u8FD0\u7B97\u7B26","link":"#\u903B\u8F91\u8FD0\u7B97\u7B26","children":[]},{"level":3,"title":"\u4F4D\u8FD0\u7B97\u7B26","slug":"\u4F4D\u8FD0\u7B97\u7B26","link":"#\u4F4D\u8FD0\u7B97\u7B26","children":[]},{"level":3,"title":"\u4E09\u5143\u8FD0\u7B97\u7B26","slug":"\u4E09\u5143\u8FD0\u7B97\u7B26","link":"#\u4E09\u5143\u8FD0\u7B97\u7B26","children":[]},{"level":3,"title":"\u5176\u4ED6\u8FD0\u7B97\u7B26","slug":"\u5176\u4ED6\u8FD0\u7B97\u7B26","link":"#\u5176\u4ED6\u8FD0\u7B97\u7B26","children":[]},{"level":3,"title":"\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7","slug":"\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7","link":"#\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7","children":[]}]},{"level":2,"title":"3. \u53D8\u91CF\u548C\u8D4B\u503C","slug":"_3-\u53D8\u91CF\u548C\u8D4B\u503C","link":"#_3-\u53D8\u91CF\u548C\u8D4B\u503C","children":[]},{"level":2,"title":"4. \u6570\u636E\u7C7B\u578B\u4E0E\u8F6C\u6362","slug":"_4-\u6570\u636E\u7C7B\u578B\u4E0E\u8F6C\u6362","link":"#_4-\u6570\u636E\u7C7B\u578B\u4E0E\u8F6C\u6362","children":[{"level":3,"title":"\u6574\u578B","slug":"\u6574\u578B","link":"#\u6574\u578B","children":[]},{"level":3,"title":"\u6D6E\u70B9\u578B","slug":"\u6D6E\u70B9\u578B","link":"#\u6D6E\u70B9\u578B","children":[]},{"level":3,"title":"\u5E03\u5C14\u578B","slug":"\u5E03\u5C14\u578B","link":"#\u5E03\u5C14\u578B","children":[]}]},{"level":2,"title":"5. print() \u51FD\u6570","slug":"_5-print-\u51FD\u6570","link":"#_5-print-\u51FD\u6570","children":[]},{"level":2,"title":"1. \u539F\u7801\u3001\u53CD\u7801\u548C\u8865\u7801","slug":"_1-\u539F\u7801\u3001\u53CD\u7801\u548C\u8865\u7801","link":"#_1-\u539F\u7801\u3001\u53CD\u7801\u548C\u8865\u7801","children":[]}],"git":{"createdTime":1664198136000,"updatedTime":1664198136000,"contributors":[{"name":"AndersonHJB","email":"aiyuechuang@gmail.com","commits":1}]},"readingTime":{"minutes":12.07,"words":3622},"copyright":"\u8457\u4F5C\u6743\u5F52\u9EC4\u5BB6\u5B9D|AI\u60A6\u521B\u6240\u6709\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://bornforthis.cn/blog/2022/08.html","filePathRelative":"blog/2022/08.md","localizedDate":"2022\u5E748\u670823\u65E5"}');export{e as data};
