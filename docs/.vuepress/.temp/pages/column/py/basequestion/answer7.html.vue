<template><div><ol>
<li>
<p>如果仅仅是用于控制循环次数，那么使用 <code v-pre>for i in range(20)</code> 和 <code v-pre>for i in range(20, 40)</code> 的作用是_________的。</p>
<p>A. 等价</p>
<p>B. 不等价</p>
</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：A 易错项：B</p>
<p>记忆性知识点</p>
</div>
<ol start="2">
<li>
<p>对于带有 else 子句的 for 循环和 while 循环，当循环因循环条件不成立而自然结束时________执行 else 中的代码。</p>
<p>A. 会</p>
<p>B. 不会</p>
</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：A 易错项：B</p>
<p>记忆性知识点</p>
</div>
<ol start="3">
<li>
<p>运行 <code v-pre>for i in range(10,20,5): print(i)</code> ，输出为：</p>
<p>A. 5 10</p>
<p>B. 10 15</p>
<p>C. 15 20</p>
<p>D. 10 15 20</p>
</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：B 易错项：D</p>
<p><code v-pre>range(10,20,5)</code> 即在 10 到 20 (不包括 20)之间，每隔5取一个数。</p>
</div>
<ol start="4">
<li>
<p>下面的语句哪个会无限循环下去：
A. <code v-pre>for a in range(10): time.sleep(10)</code></p>
<p>B. <code v-pre>while 1&lt;10: time.sleep(10)</code></p>
<p>C. <code v-pre>while True: break</code></p>
<p>D. <code v-pre>a = [3,-1,','] for i in a[:]: if not a: break</code></p>
</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：B 易错项：C</p>
<p>A 中的 for 循环是从 a=0 循环至 a=9，则当 a=10 时自动跳出循环；C 中有 break 语句，可跳出当前 while True 形成的死循环；D 中同理可以用 break 语句跳出当前的死循环。</p>
</div>
<ol start="5">
<li>
<p>(多选题) 下面的代码，哪些会输出1,2,3 三个数字(多选):
A. <code v-pre>for i in range(3): print(i)</code></p>
<p>B. <code v-pre>aList = [0,1,2] for i in aList: print(i+1)</code></p>
<p>C. <code v-pre>i = 1 while i &lt; 3: print(i) i+=1</code></p>
<p>D. <code v-pre>for i in range(3): print(i+1)</code></p>
</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：B,D 易错项：C</p>
<p>A 输出 0，1，2、C 输出1，2。其中 C 的 while 函数是先输出再执行 i+1，则当 i=3 时已经不符合 while 循环的条件，即跳出循环，不会输出 i 的当前值。</p>
</div>
<ol start="6">
<li>Python 3.x 语句 <code v-pre>for i in range(3):print(i, end=',')</code> 的输出结果为_____________________。</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：<code v-pre>(0,1,2,)</code></p>
</div>
<ol start="7">
<li>下面程序的执行结果是__________________。</li>
</ol>
<p><img src="@source/column/py/basequestion/answer7.assets/addcf8b06660d79b35f793b5cfbd87d0.png" alt="img" loading="lazy"></p>
<div class="custom-container tip">
<p class="custom-container-title">答案解析</p>
<p>正确答案：1</p>
<p>for 循环里生成了 0-100 的累加效果，但累加的最终结果并没有输出。当 for 循环结束之后进入 else 的 print() 输出函数才得到了程序的执行结果：1。</p>
</div>
<ol start="8">
<li>编写程序，生成一个包含 20 个随机整数的列表，然后对其中偶数下标的元素进行降序排列，奇数下标的元素不变。(提示：使用切片。)</li>
</ol>
<p><img src="@source/column/py/basequestion/answer7.assets/f9c31ee65b2b145fe35737617491bb39.png" alt="img" loading="lazy"></p>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


