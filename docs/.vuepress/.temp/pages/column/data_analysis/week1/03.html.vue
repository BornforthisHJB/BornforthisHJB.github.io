<template><div><h2 id="从认识数据开始" tabindex="-1"><a class="header-anchor" href="#从认识数据开始" aria-hidden="true">#</a> 从认识数据开始</h2>
<ul>
<li>数据分类</li>
<li>统计指标</li>
<li>分布形态</li>
<li>数据分析流程</li>
<li>常用数据分析工具</li>
</ul>
<p>对于数据分析来说，这是非常基础也很重要的一章。就好比我们学习写作之前，你需要学习基本的遣词造句一样，后续的数据分析内，都用到本文讲到的知识点。</p>
<h2 id="什么是数据" tabindex="-1"><a class="header-anchor" href="#什么是数据" aria-hidden="true">#</a> 什么是数据</h2>
<p><strong>数据是对事物的描述和记录。</strong></p>
<p>其实，我们思考一下，我们日常生活中，到处都充斥着数据。我们在描述的过程中，也无法离开数据。</p>
<p>我们上网，看到的这些网站、网页，它上面都布满了数据。</p>
<p>我们用的报表，文档，甚至看到的菜单等等，都是由数据所组成的</p>
<h2 id="数据的特性" tabindex="-1"><a class="header-anchor" href="#数据的特性" aria-hidden="true">#</a> 数据的特性</h2>
<p>根据数据的计量层次，进一步对数据进行分类；</p>
<p>根据数据的计量层次，我可以从低到高的，对数据进行进一步的分类；</p>
<p>那什么是计量层次呢？我来带大家理解一下。</p>
<ul>
<li>黄瓜，番茄，森林，书本，无法计算比较，计量层次低</li>
<li>1，2，3， 4，5，这些数据可以计算比较，那么计量层次就高</li>
</ul>
<p>首先，我们观察第一组数据，黄瓜，番茄，森林，书本，你会发现这样的数据会有一个特点，他是文字描述型的数据。你没有办法对他进行一定顺序的排序，或者是大小的比较。那对于这样的数据来说：我无法进行计算比较的数据，我们就说这是计量层次比较低的数据类型。</p>
<p>那对于数值型的，1，2，3， 4，5，这样的数据，它们很明显可以进行排序，计算差异，做加减乘除，做比较。那么我们就会说，这样的数据，它的计量层次是比较高的。</p>
<h2 id="定类数据" tabindex="-1"><a class="header-anchor" href="#定类数据" aria-hidden="true">#</a> 定类数据</h2>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220812210420366.png" alt="image-20220812210420366" loading="lazy"></p>
<ul>
<li>颜色：红色、白色、黄色</li>
<li>性别：男性、女性</li>
<li>职位：数据产品经理、数据运营、市场营销运营</li>
</ul>
<p>观察一下，上面的数据有什么特点？</p>
<p>你会发现，给的这几组数据，它们之间会按照：</p>
<ul>
<li>按照数据的类别进行分类的，各类之间是平等并列的；</li>
<li>比如：红色、白色、黄色，红色是否优于白色，或者劣于黄色，你是没有办法进行这样的排序吧。</li>
<li>这一类的数据，我们叫做定类数据。</li>
<li>这种数据没有数量信息，并且不能在各类别间，进行排序。</li>
<li>针对于这些数据，我们通常想要去计算的话，就是统计每一个类别它们的频数「次」和频率。</li>
</ul>
<h2 id="定序数据" tabindex="-1"><a class="header-anchor" href="#定序数据" aria-hidden="true">#</a> 定序数据</h2>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220814170328158.png" alt="image-20220814170328158" loading="lazy"></p>
<ul>
<li>受教育程度：小学，初中，高中，大学，硕士，博士</li>
<li>季度：春，夏，秋，冬</li>
<li>等级：合格、良好、优秀</li>
</ul>
<p>你可以观察到，这几组数据。受教育程度，季度，等级，你可以观察到，这几组数据和我们的<strong>定类数据</strong>，有个共同点，都是文字描述型的数据。</p>
<p>但是，又有些不同。</p>
<ul>
<li>你会发现，这些数据之间是可以进行排序的，可以去比较优劣的。</li>
<li>比如受教育程度：小学，初中，高中，大学，硕士，博士，它是按照受教育的程度「先后」来进行排序的。</li>
<li>季度上按照时间的标准去排序的；</li>
<li>等级是按照成绩的大小去排序的「合格、良好、优秀」；</li>
<li>这也是说，在实际的使用过程中，我们不但能文字描述，进行基础的排序。我们也可以通过对文字进行对应的 <strong>数字编码</strong> 进行一个默认的大小排序。</li>
<li>比如说：小学我分配的编码是 01、初中：02、高中：03、大学：04、硕士：05、博士：06，那么通过编码的方式，我们可以很方便的对它们进行排序。</li>
</ul>
<h2 id="定距数据" tabindex="-1"><a class="header-anchor" href="#定距数据" aria-hidden="true">#</a> 定距数据</h2>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220814234018374.png" alt="image-20220814234018374" loading="lazy"></p>
<ul>
<li>温度：20º、50º、100º</li>
<li>成绩：50、65、70、100</li>
<li>年龄：8、25、40、60</li>
</ul>
<p>我们可以观察一下，上面的数据，你会发现：从这一组数据开始，数据开始变为数值型的数据。也就是说，它是具有一定单位的实际测量值。比如温度，它的单位是度。成绩它的单位是分数。年龄它的单位是年。</p>
<p>而对于这样的数据，它的精确性一定是比前面定类和定序数据要更高的。</p>
<p>对于这些数据，我们不仅仅可以做排序、大小比较、我们也可以做简单的加减运算。</p>
<h2 id="定比数据" tabindex="-1"><a class="header-anchor" href="#定比数据" aria-hidden="true">#</a> 定比数据</h2>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220815203525398.png" alt="image-20220815203525398" loading="lazy"></p>
<ul>
<li>利润：10万、20万、30万</li>
<li>薪酬：3000、6000、9000、12000</li>
<li>用户数：210、3500、49000</li>
</ul>
<p>对于这些数据，它们不但可以进行大小的比较、排序、加、减、乘、除运算。那这个时候，我们回忆一下，刚刚讲到的<strong>定距数据</strong>，你会发现它是没办法做乘除运算的，比如说：针对于温度，你可以说今天的温度比昨天的温度高20º或者低20º，但是你不能将两个温度的变量去做乘除运算，它们产生不出任何意义。</p>
<p>那这个是什么情况？这是因为，对于定距数据中，在定距尺度中，0 是表示一个数值，而在定比数据中，0 代表没有。</p>
<p>比如，在<strong>定距数据中</strong>以温度为例 0 度就是表示 0º ，我每一个数值，它后面每一个单位都是相同的，它表示的含义都是一样的。</p>
<p>而在于<strong>定比数据</strong>中，它是有一个所谓绝对零点的存在，我如果是 0 就是没有，那这样的特性，可以让它去做任何的数学运算。</p>
<p>当你拿到一个数值型的数据时，你可以思考一下，它到底属于定比数据还是定距数据。——那其中的关键点就是刚刚聊到的，绝对 0 点。如果存在绝对 0 点，那它就是定比，如果不存在，就是定距。</p>
<h2 id="定性、定量数据" tabindex="-1"><a class="header-anchor" href="#定性、定量数据" aria-hidden="true">#</a> 定性、定量数据</h2>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220815212007293.png" alt="image-20220815212007293" loading="lazy"></p>
<p>我们来总结一下，我们聊到的四个数据，它可以统称为：定性数据和定量数据。</p>
<ul>
<li>定性数据（定类数据「对事物数据进行分类」、定序数据「对事物进行排序或有一个默认标准的顺序」）
<ul>
<li>是一组表示事物性质、规定事物类别的文字表述型</li>
</ul>
</li>
<li>定类数据（定距数据、定比数据）-&gt;都可以直接进行数学运算的
<ul>
<li>指以数量形式存在着的属性，并因此可以对其进行测量的数值型数据</li>
</ul>
</li>
</ul>
<h2 id="数据矩阵-二维数据表" tabindex="-1"><a class="header-anchor" href="#数据矩阵-二维数据表" aria-hidden="true">#</a> 数据矩阵/二维数据表</h2>
<p>上面的数据，以一定标准组成起来的时候，就组成了数据矩阵。——也就是我们经常接触到的二维数据表。</p>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220815221122465.png" alt="image-20220815221122465" loading="lazy"></p>
<p>我们把数据表横的一行，称为观测值或者说记录。</p>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220815221216161.png" alt="image-20220815221216161" loading="lazy"></p>
<p>我们把数据表开头的，第一行的数据「列表字段」称为我们的数据属性或者数据纬度。</p>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220815221351377.png" alt="image-20220815221351377" loading="lazy"></p>
<p>而这也是我们展现数据的主要方式，</p>
<h2 id="章节回顾" tabindex="-1"><a class="header-anchor" href="#章节回顾" aria-hidden="true">#</a> 章节回顾</h2>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220815221602039.png" alt="image-20220815221602039" loading="lazy"></p>
<ol>
<li>什么是数据</li>
<li>数据的类型
<ol>
<li>定类数据 =&gt; 定性数据</li>
<li>定序数据 =&gt; 定性数据</li>
<li>定距数据 =&gt; 定量数据</li>
<li>定比数据 =&gt; 定量数据</li>
</ol>
</li>
<li>数据矩阵是怎么组成的</li>
</ol>
<h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220815221832865.png" alt="image-20220815221832865" loading="lazy"></p>
<p>基于上面的二维数据表，大家观察一下，第一列的列字段，也就是我们的数据属性、数据维度。请告诉我：它们对应的数据类型时哪一个。</p>
<p><img src="@source/column/data_analysis/week1/03.assets/image-20220815223913656.png" alt="image-20220815223913656" loading="lazy"></p>
<h2 id="期待你和我一起-用数据解析世界" tabindex="-1"><a class="header-anchor" href="#期待你和我一起-用数据解析世界" aria-hidden="true">#</a> 期待你和我一起，用数据解析世界</h2>
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


