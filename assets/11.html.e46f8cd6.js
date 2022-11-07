const e=JSON.parse('{"key":"v-2659ba71","path":"/1v1/03-Dannie/11.html","title":"11-列表「list」Dannie","lang":"zh-CN","frontmatter":{"title":"11-列表「list」Dannie","icon":"python","time":"2022-10-09T21:02:56.000Z","author":"AI悦创","isOriginal":true,"category":["Python 1v1","Python 基础笔记"],"tag":["Python 1v1","Python 基础笔记"],"sticky":false,"star":false,"password":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"summary":"[[toc]] 11-列表「list」Dannie 列表结构 获取列表中的某个元素 列表提取后， 可以直接相加, 例如： 输出： 178 但是 字符串， 提取后， 不能相加 获取列表中连续的几个元素 列表的切片赋值 列表被切片后，重新赋值， 新赋值的数据位置和最原始的列表数据位置不一样了。 输出： [] ---输出为空， 因为指示列的1号位置， 直至列的最后","head":[["meta",{"property":"og:url","content":"https://bornforthis.cn/1v1/03-Dannie/11.html"}],["meta",{"property":"og:site_name","content":"AI悦创"}],["meta",{"property":"og:title","content":"11-列表「list」Dannie"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bornforthis.cn/"}],["meta",{"property":"og:updated_time","content":"2022-11-07T14:34:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"11-列表「list」Dannie"}],["meta",{"property":"article:author","content":"AI悦创"}],["meta",{"property":"article:tag","content":"Python 1v1"}],["meta",{"property":"article:tag","content":"Python 基础笔记"}],["meta",{"property":"article:published_time","content":"2022-10-09T21:02:56.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-07T14:34:46.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"11-列表「list」Dannie","slug":"_11-列表「list」dannie","link":"#_11-列表「list」dannie","children":[]},{"level":2,"title":"列表结构","slug":"列表结构","link":"#列表结构","children":[]},{"level":2,"title":"获取列表中的某个元素","slug":"获取列表中的某个元素","link":"#获取列表中的某个元素","children":[]},{"level":2,"title":"获取列表中连续的几个元素","slug":"获取列表中连续的几个元素","link":"#获取列表中连续的几个元素","children":[]},{"level":2,"title":"列表的切片赋值","slug":"列表的切片赋值","link":"#列表的切片赋值","children":[]},{"level":2,"title":"列表的长度「list length」","slug":"列表的长度「list-length」","link":"#列表的长度「list-length」","children":[]},{"level":2,"title":"修改列表中的元素","slug":"修改列表中的元素","link":"#修改列表中的元素","children":[]},{"level":2,"title":"向列表添加元素「append」","slug":"向列表添加元素「append」","link":"#向列表添加元素「append」","children":[]},{"level":2,"title":"删除列表中的元素「del」","slug":"删除列表中的元素「del」","link":"#删除列表中的元素「del」","children":[]},{"level":2,"title":"clear() 「清空列表」","slug":"clear-「清空列表」","link":"#clear-「清空列表」","children":[]},{"level":2,"title":"count() 「统计元素出现的次数」","slug":"count-「统计元素出现的次数」","link":"#count-「统计元素出现的次数」","children":[]},{"level":2,"title":"index() 「寻找元素第一次出现的下标」","slug":"index-「寻找元素第一次出现的下标」","link":"#index-「寻找元素第一次出现的下标」","children":[]},{"level":2,"title":"insert() 「insert 在特定位置插入元素」","slug":"insert-「insert-在特定位置插入元素」","link":"#insert-「insert-在特定位置插入元素」","children":[]},{"level":2,"title":"pop() 「默认删除最后一个元素，也可以指定删除某位置的数据」","slug":"pop-「默认删除最后一个元素-也可以指定删除某位置的数据」","link":"#pop-「默认删除最后一个元素-也可以指定删除某位置的数据」","children":[]},{"level":2,"title":"remove()","slug":"remove","link":"#remove","children":[]},{"level":2,"title":"reverse()","slug":"reverse","link":"#reverse","children":[]},{"level":2,"title":"sort() 元素排序「默认升序排序」修改原本的列表","slug":"sort-元素排序「默认升序排序」修改原本的列表","link":"#sort-元素排序「默认升序排序」修改原本的列表","children":[]},{"level":2,"title":"sorted()","slug":"sorted","link":"#sorted","children":[]},{"level":2,"title":"对比！！！！！！！！！！！！！！","slug":"对比","link":"#对比","children":[]},{"level":2,"title":"复习","slug":"复习","link":"#复习","children":[{"level":3,"title":"Dannie 练习的例子：","slug":"dannie-练习的例子","link":"#dannie-练习的例子","children":[]}]},{"level":2,"title":"extend() 在列表尾部添加多个数据","slug":"extend-在列表尾部添加多个数据","link":"#extend-在列表尾部添加多个数据","children":[]},{"level":2,"title":"copy()","slug":"copy","link":"#copy","children":[]},{"level":2,"title":"深拷贝「deepcopy()」","slug":"深拷贝「deepcopy-」","link":"#深拷贝「deepcopy-」","children":[]},{"level":2,"title":"课堂练习","slug":"课堂练习","link":"#课堂练习","children":[]},{"level":2,"title":"练习代码","slug":"练习代码","link":"#练习代码","children":[]},{"level":2,"title":"max","slug":"max","link":"#max","children":[]},{"level":2,"title":"min","slug":"min","link":"#min","children":[]}],"git":{"createdTime":1665320624000,"updatedTime":1667831686000,"contributors":[{"name":"iMac-Aiyuechuang","email":"1432803776@qq.com","commits":35},{"name":"AndersonHJB","email":"aiyuechuang@gmail.com","commits":2},{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":10.23,"words":3068},"copyright":"著作权归黄家宝|AI悦创所有\\n原文链接：https://bornforthis.cn/1v1/03-Dannie/11.html","filePathRelative":"1v1/03-Dannie/11.md","localizedDate":"2022年10月9日"}');export{e as data};
