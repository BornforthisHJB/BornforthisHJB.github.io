const e=JSON.parse('{"key":"v-3f77a4ae","path":"/column/javascript-tutorial/bom/xmlhttprequest.html","title":"10.5 XMLHttpRequest 对象","lang":"zh-CN","frontmatter":{"title":"10.5 XMLHttpRequest 对象","time":"2022-11-24T13:58:36.000Z","icon":"javascript1","author":"AI悦创","isOriginal":true,"category":["JavaScript tutorial"],"tag":["JavaScript tutorial"],"sticky":false,"star":false,"password":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"简介 浏览器与服务器之间，采用 HTTP 协议通信。用户在浏览器地址栏键入一个网址，或者通过网页表单向服务器提交内容，这时浏览器就会向服务器发出 HTTP 请求。 1999年，微软公司发布 IE 浏览器5.0版，第一次引入新功能：允许 JavaScript 脚本向服务器发起 HTTP 请求。这个功能当时并没有引起注意，直到2004年 Gmail 发布和...","head":[["meta",{"property":"og:url","content":"https://bornforthis.cn/column/javascript-tutorial/bom/xmlhttprequest.html"}],["meta",{"property":"og:site_name","content":"AI悦创"}],["meta",{"property":"og:title","content":"10.5 XMLHttpRequest 对象"}],["meta",{"property":"og:description","content":"简介 浏览器与服务器之间，采用 HTTP 协议通信。用户在浏览器地址栏键入一个网址，或者通过网页表单向服务器提交内容，这时浏览器就会向服务器发出 HTTP 请求。 1999年，微软公司发布 IE 浏览器5.0版，第一次引入新功能：允许 JavaScript 脚本向服务器发起 HTTP 请求。这个功能当时并没有引起注意，直到2004年 Gmail 发布和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-24T08:16:42.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"AI悦创"}],["meta",{"property":"article:tag","content":"JavaScript tutorial"}],["meta",{"property":"article:published_time","content":"2022-11-24T13:58:36.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-24T08:16:42.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"XMLHttpRequest 的实例属性","slug":"xmlhttprequest-的实例属性","link":"#xmlhttprequest-的实例属性","children":[{"level":3,"title":"XMLHttpRequest.readyState","slug":"xmlhttprequest-readystate","link":"#xmlhttprequest-readystate","children":[]},{"level":3,"title":"XMLHttpRequest.onreadystatechange","slug":"xmlhttprequest-onreadystatechange","link":"#xmlhttprequest-onreadystatechange","children":[]},{"level":3,"title":"XMLHttpRequest.response","slug":"xmlhttprequest-response","link":"#xmlhttprequest-response","children":[]},{"level":3,"title":"XMLHttpRequest.responseType","slug":"xmlhttprequest-responsetype","link":"#xmlhttprequest-responsetype","children":[]},{"level":3,"title":"XMLHttpRequest.responseText","slug":"xmlhttprequest-responsetext","link":"#xmlhttprequest-responsetext","children":[]},{"level":3,"title":"XMLHttpRequest.responseXML","slug":"xmlhttprequest-responsexml","link":"#xmlhttprequest-responsexml","children":[]},{"level":3,"title":"XMLHttpRequest.responseURL","slug":"xmlhttprequest-responseurl","link":"#xmlhttprequest-responseurl","children":[]},{"level":3,"title":"XMLHttpRequest.status，XMLHttpRequest.statusText","slug":"xmlhttprequest-status-xmlhttprequest-statustext","link":"#xmlhttprequest-status-xmlhttprequest-statustext","children":[]},{"level":3,"title":"XMLHttpRequest.timeout，XMLHttpRequestEventTarget.ontimeout","slug":"xmlhttprequest-timeout-xmlhttprequesteventtarget-ontimeout","link":"#xmlhttprequest-timeout-xmlhttprequesteventtarget-ontimeout","children":[]},{"level":3,"title":"事件监听属性","slug":"事件监听属性","link":"#事件监听属性","children":[]},{"level":3,"title":"XMLHttpRequest.withCredentials","slug":"xmlhttprequest-withcredentials","link":"#xmlhttprequest-withcredentials","children":[]},{"level":3,"title":"XMLHttpRequest.upload","slug":"xmlhttprequest-upload","link":"#xmlhttprequest-upload","children":[]}]},{"level":2,"title":"XMLHttpRequest 的实例方法","slug":"xmlhttprequest-的实例方法","link":"#xmlhttprequest-的实例方法","children":[{"level":3,"title":"XMLHttpRequest.open()","slug":"xmlhttprequest-open","link":"#xmlhttprequest-open","children":[]},{"level":3,"title":"XMLHttpRequest.send()","slug":"xmlhttprequest-send","link":"#xmlhttprequest-send","children":[]},{"level":3,"title":"XMLHttpRequest.setRequestHeader()","slug":"xmlhttprequest-setrequestheader","link":"#xmlhttprequest-setrequestheader","children":[]},{"level":3,"title":"XMLHttpRequest.overrideMimeType()","slug":"xmlhttprequest-overridemimetype","link":"#xmlhttprequest-overridemimetype","children":[]},{"level":3,"title":"XMLHttpRequest.getResponseHeader()","slug":"xmlhttprequest-getresponseheader","link":"#xmlhttprequest-getresponseheader","children":[]},{"level":3,"title":"XMLHttpRequest.getAllResponseHeaders()","slug":"xmlhttprequest-getallresponseheaders","link":"#xmlhttprequest-getallresponseheaders","children":[]},{"level":3,"title":"XMLHttpRequest.abort()","slug":"xmlhttprequest-abort","link":"#xmlhttprequest-abort","children":[]}]},{"level":2,"title":"XMLHttpRequest 实例的事件","slug":"xmlhttprequest-实例的事件","link":"#xmlhttprequest-实例的事件","children":[{"level":3,"title":"readyStateChange 事件","slug":"readystatechange-事件","link":"#readystatechange-事件","children":[]},{"level":3,"title":"progress 事件","slug":"progress-事件","link":"#progress-事件","children":[]},{"level":3,"title":"load 事件、error 事件、abort 事件","slug":"load-事件、error-事件、abort-事件","link":"#load-事件、error-事件、abort-事件","children":[]},{"level":3,"title":"loadend 事件","slug":"loadend-事件","link":"#loadend-事件","children":[]},{"level":3,"title":"timeout 事件","slug":"timeout-事件","link":"#timeout-事件","children":[]}]},{"level":2,"title":"Navigator.sendBeacon()","slug":"navigator-sendbeacon","link":"#navigator-sendbeacon","children":[]}],"git":{"createdTime":1669218350000,"updatedTime":1669277802000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":2}]},"readingTime":{"minutes":20.83,"words":6249},"copyright":"著作权归黄家宝|AI悦创所有\\n原文链接：https://bornforthis.cn/column/javascript-tutorial/bom/xmlhttprequest.html","filePathRelative":"column/javascript-tutorial/bom/xmlhttprequest.md","localizedDate":"2022年11月23日"}');export{e as data};
