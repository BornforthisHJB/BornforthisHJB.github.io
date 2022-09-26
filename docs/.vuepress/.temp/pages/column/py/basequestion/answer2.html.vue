<template><div><ol>
<li>数字型和字符串类型的变量完全可以互相转换。 A. 正确 B. 错误</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：B</p>
<p>易错项：A 数字型转字符串类型可以使用 <code v-pre>str()</code> 函数，字符串类型转数字型可使用 <code v-pre>int()</code> 和 <code v-pre>float()</code> 函数</p>
</div>
<ol start="2">
<li>加法运算符可以用来连接字符串并生成新字符串。 A. 正确 B. 错误</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：A</p>
<p>易错项：B</p>
</div>
<p>3.不管输入什么，Python 3.x 中 input() 函数的返回值总是字符串。 A. 正确 B. 错误</p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：A</p>
<p>易错项：B 记忆性知识点</p>
</div>
<p>4.Python 字符串方法 replace() 对字符串进行原地修改。 A. 正确 B. 错误</p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：B</p>
<p>易错项：A</p>
<p>在 Python 中，字符串属于不可变对象，不支持原地修改，如果需要修改其中的值，只能重新创建一个新的字符串对象。</p>
</div>
<p>5.此题无需在线作答，请在纸上作答后查看答案解析 7//3的值为_________；7%3的值为__________。</p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>2；1</p>
</div>
<p>6.此题无需在线作答，请在纸上作答后查看答案解析 y 变量初始赋值为 10，有代码为：y *= 2，则运算过后 y 的值为__________。</p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>20</p>
</div>
<p>7.此题无需在线作答，请在纸上作答后查看答案解析 可以使用________函数将数字型的变量转换成字符串。</p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>str()</p>
</div>
<p>8.下列哪个表达式在 Python 中是非法的？</p>
<p>A. x = y = z = 1</p>
<p>B. x = (y = z + 1)</p>
<p>C. x, y = y, x</p>
<p>D. x += y</p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：B</p>
<p>易错项：C</p>
<p>B 中的 <code v-pre>y=z+1</code> 是一个完整的赋值语句，不能放在等号的右边用来再次给x赋值。</p>
<p>A 是同时赋值，C 是变量的值交换，D 等价于 <code v-pre>x=x+y</code>。</p>
</div>
<p>9.字符串是 Python 的_________序列。 A. 有序 B. 无序</p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：A</p>
<p>易错项：B 记忆性知识点</p>
</div>
<p>10.此题无需在线作答，请在纸上作答后查看答案解析 当在字符串前加上小写字母_______________或大写字母______表示原始字符串，不对其中的任何字符进行转义。</p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：r、R 记忆性知识点</p>
</div>
<p>11.此题无需在线作答，请在纸上作答后查看答案解析 已知字符串 x = 'hello world'，那么执行语句 x.replace('hello', 'hi') 之后，x 的值为____________。</p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：'hello world'</p>
<p>x 自身的值不会被 <code v-pre>replace()</code> 影响。具体理解可以参考 <a href="https://blog.csdn.net/qq_33254766/article/details/124834439" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_33254766/article/details/124834439<ExternalLinkIcon/></a></p>
</div>
<ol>
<li>此题无需在线作答，请在纸上作答后查看答案解析</li>
</ol>
<p>设 s=&quot;abcdefg&quot;，则：</p>
<ul>
<li>s[3] 的值为____<em>___，</em></li>
<li>s[3:5] 的值为__<em>_；</em></li>
<li>s[:5] 的值为____<em>_；</em></li>
<li>s[3:] 的值为______；</li>
<li>s[::2] 的值为________；</li>
<li>s[::-1] 的值为__________；</li>
<li>s[-2:-5] 的值为________。</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：'d';'de';'abcde';'defg';'aceg';'gfedcba';''</p>
<p>这是 Python 中的切片操作：使用一对方括号、起始偏移量 start、终止偏移量 end 以及可选的步长 step 来定义一个分片。Statr、end 的值都是以字符串下标来说的。 格式： [start🔚step]</p>
<ul>
<li>[:] 提取从开头（默认位置0）到结尾（默认位置-1）的整个字符串</li>
<li>[start:] 从start 提取到结尾</li>
<li>[:end] 从开头提取到 end - 1</li>
<li>[start:end] 从start 提取到end - 1</li>
<li>[start🔚step] 从start 提取到end - 1，每step 个字符提取一个</li>
<li>Python 分片默认步长是 1，-2 到 -5 的步长用 -1才能输出结果，所以结果为空。</li>
</ul>
</div>
<details class="custom-container details"><summary>图片版答案：</summary>
<p><img src="@source/column/py/basequestion/answer2.assets/ed580f50-6d1a-11ea-b4d9-23ebe60403e6.png" alt="在这里插入图片描述" loading="lazy"></p>
</details>
<ol start="13">
<li>此题无需在线作答，请在纸上作答后查看答案解析。</li>
</ol>
<p>有变量 `name = ' Alex '，请按照要求实现每个功能：</p>
<ol>
<li>移除 name 变量对应的值两边的空格，并输出移除后的内容；</li>
<li>判断 name 变量对应的值是否以 &quot;al&quot; 开头和以 &quot;X&quot; 结尾，并输出结果；</li>
<li>将 name 变量对应的值中的 &quot;l&quot; 替换为 &quot;p&quot;，并输出结果；</li>
<li>将 name 变量对应的值根据 &quot;l&quot; 分割，并输出结果；</li>
<li>将 name 变量对应的值分别变大写和小写，并输出结果。</li>
</ol>
<div class="custom-container info">
<p class="custom-container-title">答案</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.
v=name.strip()  #.strip()移除指定字符串，空白，/t，/n等转义字符
print(v)
2.
v1=name.startswith("al")   #判断以什么开头
v2=name.endswith("X")     #判断以什么结尾
print(v1)
print(v2)
3.
v3=name.replace("l","p")   
print(v3)
4.
name='Alex'
print(name.split('l'))
5.
v5=name.casefold()      #全部变成小写
v6=name.upper()           #变成全部变成大写，对应的有lower()
print(v5)             #swapcase()大小写互相转换
print(v6)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


