import{_ as t}from"./gzh-DnOBNg6W.js";import{_ as a}from"./zsxq-BcdwOI-_.js";import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as o,o as i}from"./app-BUG9Szlw.js";const r={};function l(p,e){return i(),s("div",null,e[0]||(e[0]=[o(`<div style="text-align:center;"><h2 id="csca20-lab-1" tabindex="-1"><a class="header-anchor" href="#csca20-lab-1"><span>CSCA20 - Lab 1</span></a></h2><h4 id="input-output-and-variables" tabindex="-1"><a class="header-anchor" href="#input-output-and-variables"><span>Input/Output and Variables</span></a></h4></div><h2 id="_1-learning-objectives" tabindex="-1"><a class="header-anchor" href="#_1-learning-objectives"><span>1. Learning Objectives</span></a></h2><p>This lab focuses on interacting with a user through <strong>input</strong> and <strong>print</strong> statements, and also manip-ulating and using variables, specifically numbers and strings.</p><h2 id="_2-prelab" tabindex="-1"><a class="header-anchor" href="#_2-prelab"><span>2. Prelab</span></a></h2><p>Hopefully by now, you are comfortable running python files at home and/or in the lab. But just to be sure, you should arrive at your lab with working code that asks a user for their name, and then greets them, as below:</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">What </span><span style="color:#F92672;">is</span><span style="color:#F8F8F2;"> your name</span><span style="color:#F44747;">?</span><span style="color:#F8F8F2;"> Brian</span></span>
<span class="line"><span style="color:#F8F8F2;">Hello Brian</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-demonstration-evaluation" tabindex="-1"><a class="header-anchor" href="#_2-demonstration-evaluation"><span>2. Demonstration &amp; Evaluation</span></a></h2><p>Successfully completing this lab will demonstrate mastery of: user input/output.</p><p>If you show up with your prelab done and work hard during the tutorial, you will be awarded with ’attempted’ on this skill. If you successfully demonstrate working code by the end of the tutorial, you will be awarded with ’practiced’. At the beginning of next week’s tutorial, there will be a quiz where you will be asked to modify your working solution to the lab (if you can’t get your solution working during the tutorial, you can continue to work throughout the week asking for help on Piazza). If you can successfully complete that quiz, you will be awarded with ‘modified’ for this skill.</p><p>This is our first chance to evaluate a skill, but it won’t be our last. If you can’t get your code working by the end of the lab, or you can’t write the quiz next week, Don’t panic. You will have multiple opportunities to demonstrate each level of each component (especially input/output, pretty much every lab from here on in allows you to demonstrate this one).</p><h2 id="_3-the-scenario" tabindex="-1"><a class="header-anchor" href="#_3-the-scenario"><span>3. The Scenario</span></a></h2><p>The Universal Tap-dancing School of Casablanca (UTSC) has asked you to build them a tool to help format their tap-dancing students scores in a way that is compatible with their record keeping system. Eventually, we’ll learn how to do this with files and loops... but for now, they just need a system that will prompt the user for the student’s name, student number, courses and grades, and then prints out a properly formatted student record with a grade average.</p><h2 id="_4-the-input" tabindex="-1"><a class="header-anchor" href="#_4-the-input"><span>4. The Input</span></a></h2><p>The system should ask for a student&#39;s given name first, then their family name (because that&#39;s the way most students will be addressed in person), then their student number, followed by a list of the 4 courses they took this semester. Then, for each of the courses, the system should ask the user for the grade the student got in that course. Because UTSC faculty aren’t always super smart, it’s important that each time we ask them for input, we remind them which course they’re inputting the grade for. (Reminder: the courses in the &quot;Enter grade&quot; prompts should match whatever the users entered in the &quot;Enter course code&quot; prompts).</p><p>So the prompts for input would look something like this (the parts after the semi-colons are user input).</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">Enter student given name: Brian</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter student family name: Harrington</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter the student number </span><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> Brian Harrington: </span><span style="color:#AE81FF;">12345</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter course code </span><span style="color:#88846F;">#1: CSCA20</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter course code </span><span style="color:#88846F;">#2: ENGA01</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter course code </span><span style="color:#88846F;">#3: HISB02</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter coures code </span><span style="color:#88846F;">#4: XYZC03</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter grade </span><span style="color:#F92672;">for</span><span style="color:#AE81FF;"> CSCA20</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">99</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter grade </span><span style="color:#F92672;">for</span><span style="color:#AE81FF;"> ENGA01</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">86</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter grade </span><span style="color:#F92672;">for</span><span style="color:#AE81FF;"> HISB02</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">75</span></span>
<span class="line"><span style="color:#F8F8F2;">Enter grade </span><span style="color:#F92672;">for</span><span style="color:#AE81FF;"> XYZC03</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">58</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-the-output" tabindex="-1"><a class="header-anchor" href="#_5-the-output"><span>5. The Output</span></a></h2><p>After all the information is entered, your system should output the student record in the format:</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">Family Name, Given Name, Student Number, Average</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Where average is the average grade (add up the grades and divide by 4). So the output for the input above would be</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">Harrington,Brian,</span><span style="color:#AE81FF;">12345</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">79.5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_6-hints" tabindex="-1"><a class="header-anchor" href="#_6-hints"><span>6. Hints</span></a></h2><p>Here are a few hints that might help you with this assignment:</p><ul><li>Even though the student number is a number, do you ever need to store it as a number?The type of a variable isn’t about its meaning, it’s about what you plan to do with it.</li><li>you’re going to need to store 2 names, 1 student number, 4 course codes and 4 averages, so start out by planning variables appropriately.</li><li>When a user types input into the shell, python will assume it’s a string unless you specifically tell it otherwise.</li><li>You aren’t responsible for your code working if the user doesn’t type sensible input, so if you ask for a grade and the user types “BAD”, your code is allowed to crash (for now).</li></ul><h2 id="_7-extra-practice" tabindex="-1"><a class="header-anchor" href="#_7-extra-practice"><span>7. Extra Practice</span></a></h2><p>If you get this working and want to move beyond the basics, there are several things you can do:</p><ul><li><p>Think about your variables: there is a way to do this without actually storing 4 separate grade variables.</p></li><li><p>Can you make it so that output is always formatted into neat columns that line up regardless of the number of letters in the person’s name? (you’ll need to look up the documentation for str).</p></li><li><p>(once you’ve learned selection) come back to this and see if you can do some error checking: if the user inputs an invalid course code or grade, tell them</p></li><li><p>(once you’ve learned loops + lists) ask the user how many courses the student took, ask them first and then prompt them for that many codes &amp; marks.</p></li></ul><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',30)]))}const m=n(r,[["render",l],["__file","CSCA20-Lab1.html.vue"]]),y=JSON.parse('{"path":"/1v1/96-Four-dimensional/CSCA20-Lab1.html","title":"CSCA20 - Lab 1","lang":"zh-CN","frontmatter":{"title":"CSCA20 - Lab 1","date":"2024-11-12T06:09:56.000Z","author":"AI悦创","isOriginal":true,"icon":"blog","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"watermark":true,"description":"CSCA20 - Lab 1 Input/Output and Variables 1. Learning Objectives This lab focuses on interacting with a user through input and print statements, and also manip-ulating and using...","head":[["meta",{"property":"og:url","content":"https://bornforthis.cn/1v1/96-Four-dimensional/CSCA20-Lab1.html"}],["meta",{"property":"og:site_name","content":"AI悦创-Python一对一辅导"}],["meta",{"property":"og:title","content":"CSCA20 - Lab 1"}],["meta",{"property":"og:description","content":"CSCA20 - Lab 1 Input/Output and Variables 1. Learning Objectives This lab focuses on interacting with a user through input and print statements, and also manip-ulating and using..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bornforthis.cn/gzh.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T11:46:13.000Z"}],["meta",{"property":"article:author","content":"AI悦创"}],["meta",{"property":"article:published_time","content":"2024-11-12T06:09:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-20T11:46:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSCA20 - Lab 1\\",\\"image\\":[\\"https://bornforthis.cn/gzh.jpg\\",\\"https://bornforthis.cn/zsxq.jpg\\"],\\"datePublished\\":\\"2024-11-12T06:09:56.000Z\\",\\"dateModified\\":\\"2024-11-20T11:46:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AI悦创\\"}]}"]]},"headers":[{"level":2,"title":"1. Learning Objectives","slug":"_1-learning-objectives","link":"#_1-learning-objectives","children":[]},{"level":2,"title":"2. Prelab","slug":"_2-prelab","link":"#_2-prelab","children":[]},{"level":2,"title":"2. Demonstration & Evaluation","slug":"_2-demonstration-evaluation","link":"#_2-demonstration-evaluation","children":[]},{"level":2,"title":"3. The Scenario","slug":"_3-the-scenario","link":"#_3-the-scenario","children":[]},{"level":2,"title":"4. The Input","slug":"_4-the-input","link":"#_4-the-input","children":[]},{"level":2,"title":"5. The Output","slug":"_5-the-output","link":"#_5-the-output","children":[]},{"level":2,"title":"6. Hints","slug":"_6-hints","link":"#_6-hints","children":[]},{"level":2,"title":"7. Extra Practice","slug":"_7-extra-practice","link":"#_7-extra-practice","children":[]}],"git":{"createdTime":1732103173000,"updatedTime":1732103173000,"contributors":[{"name":"AndersonHJB","email":"bornforthis@bornforthis.cn","commits":1}]},"readingTime":{"minutes":3.77,"words":1130},"filePathRelative":"1v1/96-Four-dimensional/CSCA20-Lab1.md","localizedDate":"2024年11月12日","copyright":{"author":"AI悦创"},"autoDesc":true}');export{m as comp,y as data};
