import{_ as r}from"./gzh.b03adfd2.js";import{_ as n}from"./zsxq.77f6dc86.js";import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as e,d as o,b as a,e as s,r as h}from"./app.42fdfaa3.js";const u="/assets/image-20221108122731241.1dfa1184.png",d={},p=s('<p>Assignment 4: Hangman Game</p><blockquote><p>作业4:猜字游戏</p></blockquote><p>NYU’s Intro to Computer Science</p><blockquote><p>纽约大学计算机科学导论</p></blockquote><p>Section # 6 and 9</p><blockquote><p>第6和9节</p></blockquote><p>Professor Sana Odeh</p><blockquote><p>Sana Odeh教授</p></blockquote><p>Due on 11/13 by Midnight!</p><blockquote><p>截止日期是11月13日午夜!</p></blockquote><p><strong>Design a Hangman game!</strong></p><blockquote><p>设计一款猜字游戏!</p></blockquote><p><strong>You must use arrays, methods and loops!</strong></p><blockquote><p>你必须使用数组、方法和循环!</p></blockquote><h2 id="_1-code-of-conduct" tabindex="-1"><a class="header-anchor" href="#_1-code-of-conduct" aria-hidden="true">#</a> 1 Code of Conduct</h2><blockquote><p>1行为准则</p></blockquote><p>All assignments are graded, meaning we expect you to adhere to the academic integrity standards of NYU. To avoid any confusion regarding this, we will briefly state what is and isn’t allowed when working on an assignment.</p><p>Any document and program code that you submit must be fully written by yourself. You can, of course, discuss your work with fellow students, as long as these discussions are restricted to general solution techniques. Put differently, these discussions should not be about concrete code you are writing, nor about specific results you wish to submit. When discussing an assignment with others, this should never lead to you possessing the complete or partial solution of others, regardless of whether the solution is in paper or digital form, and independent of who made the solution. That means, you are also not allowed to possess solutions by someone from a different year or course, by someone from another university, or code from the Internet, etc. This also implies that there is never a valid reason to share your code with fellow students, and that there is no valid reason to publish your code online in any form.</p>',18),m={href:"https://cs.nyu.edu/home/undergrad/policy.html",target:"_blank",rel:"noopener noreferrer"},g=s('<h2 id="hangman-game-application" tabindex="-1"><a class="header-anchor" href="#hangman-game-application" aria-hidden="true">#</a> Hangman Game Application:</h2><blockquote><p>刽子手游戏应用程序:</p></blockquote><h3 id="part-a-design-a-hangman-game-using-arrays-methods-and-loops" tabindex="-1"><a class="header-anchor" href="#part-a-design-a-hangman-game-using-arrays-methods-and-loops" aria-hidden="true">#</a> Part A: Design a Hangman game using arrays, methods and loops!</h3><blockquote><p>A部分:使用数组、方法和循环设计一个Hangman游戏!</p></blockquote><p><img src="'+u+'" alt="image-20221108122731241" loading="lazy"></p><p>Hangman is a simple word guessing game. Players try to figure out an secret word by guessing letters. If too many letters which do not appear in the word are guessed, the player is loses the game.</p><blockquote><p>猜字游戏是一个简单的猜字游戏。玩家试图通过猜测字母来找出一个秘密单词。如果猜出的单词中没有出现的字母太多，玩家就输掉游戏。</p></blockquote><p>Setup the game by drawing a gallow (see above photo or you can use any other figure, not necessarily a hanged man). Provide an underline (underscore character (<code>_</code> ) for each letter in the secret word. As letters in the word are guessed, write them in the exact position in the word replacing the underscore character with the guessed correct letter. If a letter is not in the word, draw a picture of a person on the gallow–one part for each incorrect letter guess. Most frequently, the person is drawn in 6 parts (for 6 letter guesses) in the order: head, body, left leg, right leg, left arm, right arm.</p><blockquote><p>通过画一个绞架来设置游戏(见上图或你可以使用任何其他图形，不一定是一个被绞死的人)。为密字中的每个字母提供下划线(下划线字符(<code>_</code>))。当猜测单词中的字母时，将它们写在单词中的确切位置，用猜测的正确字母替换下划线字符。如果单词中没有字母，就画一幅绞刑架上的人的画——猜错一个字母就画一个人。最常见的是，这个人被分为6个部分(6个字母的猜测)，顺序是:头、身体、左腿、右腿、左臂、右臂。</p></blockquote><h3 id="here-is-more-information" tabindex="-1"><a class="header-anchor" href="#here-is-more-information" aria-hidden="true">#</a> Here is more information:</h3><blockquote><p>以下是更多信息:</p></blockquote><ul><li>Create an array with 10 words (animals’ names).</li></ul><blockquote><p>创建一个包含10个单词(动物名称)的数组。</p></blockquote><ul><li>Words should be selected randomly (using a random method).</li></ul><blockquote><p>单词应该随机选择(使用随机方法)。</p></blockquote><ul><li>Make sure that when the player guesses the correct letter, your program should output the correct letter in the exact position, otherwise, it should keep the “<code>_</code>” in the same position.</li></ul><blockquote><p>确保当玩家猜测正确的字母时，你的程序应该在准确的位置输出正确的字母，否则，它应该保持“<code>_</code>”在相同的位置。</p></blockquote><ul><li>For example, if the secret word is &quot;cat&quot;, then you need to display underscore character “<code>_</code>” equal to length of the secret word. In this case it will display three underscore characters since the length of the string is 3 &quot;<code>___</code>&quot; dashes.</li></ul><blockquote><p>例如，如果密字是“cat”，那么您需要显示与密字长度相等的下划线字符“&#39; <code>_</code> &#39;”。在本例中，它将显示三个下划线字符，因为字符串的长度是3个&quot; &#39; <code>___</code> &#39; &quot;破折号。</p></blockquote><ul><li>When the user guesses the correct letter, then you have to display the letter in the correct position and also display all of the occurrences of that letter in the string. For example, if the user guessed the letter &quot;a&quot;, then you should display the letter “a” in the correct position printing &quot;<code>_a_</code>&quot;. Make sure to print the string after each guess.</li></ul><blockquote><p>当用户猜测正确的字母时，您必须在正确的位置显示该字母，并显示该字母在字符串中出现的所有次数。例如，如果用户猜出了字母“a”，那么您应该在正确的位置显示字母“a”，打印“<code>_a_</code>”。确保在每次猜测后打印字符串。</p></blockquote><ul><li>If the user makes the wrong guess by typing &quot;o&quot; for example, then you should display the string with no changes such as &quot;<code>_a_</code>&quot; and you should <strong>remove a piece from the stick figure or add a piece as you wish.</strong></li></ul><blockquote><p>例如，如果用户通过输入“o”做出了错误的猜测，那么您应该这样做显示没有更改的字符串，如“<code>_a_</code>”，您应该删除一部分 从简笔画或添加一件你想要的。</p></blockquote><ul><li><strong>Use characters to draw a stickperson needed for the game such as &quot;<code>_</code>&quot;, &quot;O&quot;, &quot;|&quot; and make sure to remove one character/piece from stickperson with each wrong guess. Feel free to use other characters to draw a creative stickperson or change the figure entirely to make it more politically correct.</strong></li></ul><blockquote><p>使用字符来绘制游戏所需的stickperson，如“<code>_</code>”，“O”，“|”，并确保每猜错一次就从 stickperson 中删除一个字符/片段。你可以随意使用其他角色来画一个有创意的粘贴人，或者完全改变这个人物，使其更具政治正确性。</p></blockquote><ul><li>The number of guesses allowed for each game is based on the number of characters in the <strong>stick figure (usually it’s 6: two legs, two hands, body, and a face). With each wrong guess, you remove one character/piece from the stick figure. When all of the 6 characters are removed from the stick figure, then the user loses the game.</strong> Your program should inform the user that she had won or lost the game.</li></ul><blockquote><p>每个游戏允许的猜测次数是基于简笔画中的角色数量(通常是6个:两条腿，两只手，身体和一张脸)。每猜错一次，就从简笔画中删除一个人物。当这6个角色都从简笔画中移除时，用户便输掉了游戏。你的程序应该通知用户她已经赢了或输了游戏。</p></blockquote><ul><li>The player should win right away when they guess all of the letters correctly within 6 trials (there should be at least one piece in the stick figure remaining for you to win the game).</li></ul><blockquote><p>当玩家在6次尝试中猜对所有字母时(游戏邦注:至少要在简笔画中剩下一个字母才能让你赢得游戏)，他们便能够立即获得胜利。</p></blockquote><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="'+r+'" alt="" loading="lazy"></p></details>',31),f={class:"custom-container info"},b=e("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),y=e("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),q=e("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),k={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"方法二：微信：Jiabcdefh",-1),w=e("p",null,[e("img",{src:n,alt:"",loading:"lazy"})],-1);function v(x,I){const t=h("ExternalLinkIcon");return c(),l("div",null,[p,e("p",null,[o("Every student is responsible for the work they submit. If there is any doubt during the grading about whether a student created the assignment themselves (e.g. if the solution matches that of others), we reserve the option to let the student explain why this is the case. In case doubts remain, or we decide to directly escalate the issue, the suspected violations will be reported to the academic administration according to the policies of NYU (see "),e("a",m,[o("https://cs.nyu.edu/home/undergrad/policy.html"),a(t)]),o(").")]),g,e("div",f,[b,y,q,e("p",null,[o("方法一："),e("a",k,[o("QQ"),a(t)])]),_]),w])}const N=i(d,[["render",v],["__file","10-Assignment4-Hangman-Game.html.vue"]]);export{N as default};
