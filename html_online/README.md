# 在线代码编辑器--Html/Markdown支持

作为开发者，经常会使用各式编辑器，一个体验良好的编辑器会给使用者舒适的coding体验。  
但当我们不是使用自己熟悉的电脑，在任意的环境下，我们就需要有一个在线的编辑器进行coding。事实上已经有太多优秀的online编辑器（jsbin/jsfiddle等）。笔者也根据自己的工作需求，做了一个简介版的编辑器，用于Html以及Markdown的开发。  
本文将对该编辑器的实现进行讲解。

[在线代码编辑器，点击这里！！！](https://bornforthis.cn/html_online/)


![EditOnline](/editonline.gif)

## 利器
- [codeMirror](https://codemirror.net/)
- [jquery.splitter](https://github.com/jcubic/jquery.splitter)
- [emmet](https://github.com/emmetio/codemirror)
- [marked](https://github.com/markedjs/marked)
- [highlight](https://github.com/highlightjs/highlight.js)

# Html编辑器功能实现

## 分隔条

通过 jquery.splitter 实现，可以支持横向纵向。splitter样式可以通过css调整。
```js
<script src="jquery-2.1.1.min.js"></script>
<script src="jquery.splitter.js"></script>

var cHeight = document.documentElement.clientHeight - 40;
var splitter = $('#content').height(cHeight).split({
	orientation: 'vertical',
	limit: 10,
	position: '50%'
});
```

## CodeMirror
CodeMirror 基于Javascript，短小精悍，实时在线代码高亮显示，他不是某个富文本编辑器的附属产品，他是许多大名鼎鼎的在线代码编辑器的基础库。一代神器！！！
```js
var editor = CodeMirror.fromTextArea(document.getElementById("htmlEdit"), {
	lineNumbers: false,
	mode: "htmlmixed",
	indentUnit: 2,
	lineWrapping:true,
	styleActiveLine: true
});
```

## emmet for CodeMirror
无论之前editplus用的zencoding，还是sublime开始emmet，如果没有emmet那就没有可用性。基于CodeMirror的emmet使用起来也很方便。
```js
<script src="emmet.js"></script> 

emmetCodeMirror(editor);
```

# Markdown编辑器功能实现
## marked && highlight
编辑器还是通过CodeMirror来实现，再获取文本的值，通过marked用来将Markdown内容转译为HTML，并且setOptions加入highlight进行代码高亮。
```js
<script src="marked.min.js"></script>
<script src="highlight.min.js"></script>

marked.setOptions({
	highlight: function (code, lang) {
        return hljs.highlightAuto(code).value;
	}
});
document.getElementById('mkview').innerHTML = marked(editorMark.getValue());
```

公众号：AI悦创【二维码】

![](https://bornforthis.cn/gzh.jpg)

以上，是该编辑器的实现方案。

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

![](https://bornforthis.cn/zsxq.jpg)