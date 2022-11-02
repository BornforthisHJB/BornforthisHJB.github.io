import{_ as s}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as n,a as p,d as i,b as e,e as o,r as c}from"./app.9b23c9fb.js";const d="/assets/2065cb175567834a1184e8347880e632.4cb4da47.jpg",g="/assets/dca4224b342894f12f54a9cb41d8cd90.1ffa3482.jpg",h="/assets/d30bfa3954ffdf5baf47ce53df9366df.6781e6f0.jpg",_="/assets/327eafa4a33e3e76ca86ac59195c0307.399ac4c2.png",m="/assets/741f0ed01c53fd53f0e75204542abed5.001398f9.png",D="/assets/aba6bb24c3444923bfa2320119ce54a4.e8426f0f.png",f="/assets/image-20221027134727099.cd27021a.png",b="/assets/e05fe27109330b49453b62505e37e4c2.fc142b99.png",u="/assets/bfea7626733fff6180341c9dda3d4334.9d39af12.png",I="/assets/40810468abc4140f45f3a09a2d427667.8d3b02e5.jpg",C="/assets/f23f88a18b1227398c2ab3ef445d5382.7d17b3ec.png",E="/assets/9f01e1d1e8082e55850676da50a84f9b.6dc6d503.png",x="/assets/8537ab10a1a3747d22059bfbbd2aa17f.eee35aa2.png",A="/assets/7067d83113c892a586e703d8b2e19828.beeaebfd.jpg",G="/assets/1187ab0048daeec40cd261ea26cd3448.85265b41.jpg",B="/assets/50b43c1820c03561f3ca3e627b454995.56bf51df.png",P="/assets/d02e69930c8cf00c93578536933ad07a.a51ea56a.png",y="/assets/0a759fd725add916417c2c294600b609.30575979.png",k={},j=o('<p><img src="'+d+'" alt="img"></p><p>你好，我是悦创。</p><p>想象一下一个女孩的妈妈给她介绍男朋友的场景：</p><p>女儿：长的帅不帅？</p><p>妈妈：挺帅的。</p><p>女儿：有没有房子？</p><p>妈妈：在老家有一个。</p><p>女儿：收入高不高？</p><p>妈妈：还不错，年薪百万。</p><p>女儿：做什么工作的？</p><p>妈妈：IT 男，互联网公司做数据挖掘的。</p><p>女儿：好，那我见见。</p><p>在现实生活中，我们会遇到各种选择，不论是选择男女朋友，还是挑选水果，都是基于以往的经验来做判断。如果把判断背后的逻辑整理成一个结构图，你会发现它实际上是一个树状图，这就是我们今天要讲的<strong>决策树</strong>。</p><h2 id="决策树的工作原理" tabindex="-1"><a class="header-anchor" href="#决策树的工作原理" aria-hidden="true">#</a> 决策树的工作原理</h2><p>决策树基本上就是把我们以前的经验总结出来。我给你准备了一个打篮球的训练集。如果我们要出门打篮球，一般会根据“天气”、“温度”、“湿度”、“刮风”这几个条件来判断，最后得到结果：去打篮球？还是不去？</p><p><img src="'+g+'" alt="img"></p><p>上面这个图就是一棵典型的决策树。我们在做决策树的时候，会经历两个阶段：<strong>构造和剪枝。</strong></p><h3 id="构造" tabindex="-1"><a class="header-anchor" href="#构造" aria-hidden="true">#</a> 构造</h3><p>什么是构造呢？构造就是生成一棵完整的决策树。简单来说，<strong>构造的过程就是选择什么属性作为节点的过程</strong>，那么在构造过程中，会存在三种节点：</p><ol><li>根节点：就是树的最顶端，最开始的那个节点。在上图中，“天气”就是一个根节点；</li><li>内部节点：就是树中间的那些节点，比如说“温度”、“湿度”、“刮风”；</li><li>叶节点：就是树最底部的节点，也就是决策结果。</li></ol><p>节点之间存在父子关系。比如根节点会有子节点，子节点会有子子节点，但是到了叶节点就停止了，叶节点不存在子节点。那么在构造过程中，你要解决三个重要的问题：</p><ol><li>选择哪个属性作为根节点；</li><li>选择哪些属性作为子节点；</li><li>什么时候停止并得到目标状态，即叶节点。</li></ol><h3 id="剪枝" tabindex="-1"><a class="header-anchor" href="#剪枝" aria-hidden="true">#</a> 剪枝</h3><p><strong>决策树构造出来之后是不是就万事大吉了呢？</strong></p><p>也不尽然，我们可能还需要对决策树进行剪枝。剪枝就是给决策树瘦身，这一步想实现的目标就是，不需要太多的判断，同样可以得到不错的结果。之所以这么做，是为了防止“过拟合”（Overfitting）现象的发生。</p><p><strong>“过拟合”这个概念你一定要理解，它指的就是模型的训练结果“太好了”，以至于在实际应用的过程中，会存在“死板”的情况，导致分类错误。</strong></p><p><strong>欠拟合，和过拟合就好比是下面这张图中的第一个和第三个情况一样，训练的结果“太好“，反而在实际应用过程中会导致分类错误。</strong></p><p><strong>欠拟合会是分类不够准确。</strong></p><p>欠拟合是指<strong>模型拟合程度不高，数据距离拟合曲线较远，或指模型没有很好地捕捉到数据特征，不能够很好地拟合数据</strong>。</p><p><img src="'+h+'" alt="img"></p><p><strong>造成过拟合的原因之一就是因为训练集中样本量较小。</strong></p>',31),v={href:"https://bornforthis.cn/column/Machine-learning/informal-essay/02-%E5%86%B3%E7%AD%96%E6%A0%91%E7%AE%97%E6%B3%95.html#_4-1-id3-%E4%BF%A1%E6%81%AF%E5%A2%9E%E7%9B%8A-%E6%9C%89%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%E5%91%A2",target:"_blank",rel:"noopener noreferrer"},q=o('<p>泛化能力指的分类器是通过训练集抽象出来的分类能力，你也可以理解是举一反三的能力。如果我们太依赖于训练集的数据，那么得到的决策树容错率就会比较低，泛化能力差。因为训练集只是全部数据的抽样，并不能体现全部数据的特点。</p><p>既然要对决策树进行剪枝，具体有哪些方法呢？一般来说，剪枝可以分为“预剪枝”（Pre-Pruning）和“后剪枝”（Post-Pruning）。</p><p>预剪枝是在决策树构造时就进行剪枝。方法是在构造的过程中对节点进行评估，如果对某个节点进行划分，在验证集中不能带来准确性的提升，那么对这个节点进行划分就没有意义，这时就会把当前节点作为叶节点，不对其进行划分。</p><p>后剪枝就是在生成决策树之后再进行剪枝，通常会从决策树的叶节点开始，逐层向上对每个节点进行评估。如果剪掉这个节点子树，与保留该节点子树在分类准确性上差别不大，或者剪掉该节点子树，能在验证集中带来准确性的提升，那么就可以把该节点子树进行剪枝。方法是：用这个节点子树的叶子节点来替代该节点，类标记为这个节点子树中最频繁的那个类。</p><h2 id="如何判断要不要去打篮球" tabindex="-1"><a class="header-anchor" href="#如何判断要不要去打篮球" aria-hidden="true">#</a> 如何判断要不要去打篮球？</h2><p><img src="'+_+'" alt="img"></p><p>我们该如何构造一个判断是否去打篮球的决策树呢？再回顾一下决策树的构造原理，在决策过程中有三个重要的问题：将哪个属性作为根节点？选择哪些属性作为后继节点？什么时候停止并得到目标值？</p><p>显然将哪个属性（天气、温度、湿度、刮风）作为根节点是个关键问题，在这里我们先介绍两个指标：<strong>纯度</strong>和<strong>信息熵</strong>。</p><p>先来说一下纯度。你可以把决策树的构造过程理解成为寻找纯净划分的过程。数学上，我们可以用纯度来表示，纯度换一种方式来解释就是让目标变量的分歧最小。「各回各家」</p><p>我在这里举个例子，假设有 3 个集合：</p><ul><li>集合 1：6 次都去打篮球；</li><li>集合 2：4 次去打篮球，2 次不去打篮球；</li><li>集合 3：3 次去打篮球，3 次不去打篮球。</li></ul><p><strong>按照纯度指标来说，集合 1&gt; 集合 2&gt; 集合 3。因为集合 1 的分歧最小，集合 3 的分歧最大。</strong></p><p>然后我们再来介绍信息熵（entropy）的概念，<strong>它表示了信息的不确定度。</strong></p><p>在信息论中，随机离散事件出现的概率存在着不确定性。为了衡量这种信息的不确定性，信息学之父香农引入了信息熵的概念，并给出了计算信息熵的数学公式：</p><p><img src="'+m+'" alt="img"></p><p>p(i|t) 代表了节点 t 为分类 i 的概率，其中 log2 为取以 2 为底的对数。这里我们不是来介绍公式的，而是说存在一种度量，它能帮我们反映出来这个信息的不确定度。<strong>当不确定性越大时，它所包含的信息量也就越大，信息熵也就越高。</strong></p><p>我举个简单的例子，假设有 2 个集合</p><ul><li>集合 1：5 次去打篮球，1 次不去打篮球；</li><li>集合 2：3 次去打篮球，3 次不去打篮球。</li></ul><p>在集合 1 中，有 6 次决策，其中打篮球是 5 次，不打篮球是 1 次。</p><p>那么假设：类别 1 为“打篮球”，即次数为 5；类别 2 为“不打篮球”，即次数为 1。</p><p>那么节点划分为类别 1 的概率是 5/6，为类别 2 的概率是 1/6，带入上述信息熵公式可以计算得出：</p><p><img src="'+D+'" alt="img"></p><img src="'+f+'" alt="image-20221027134727099" style="zoom:25%;"><p>同样，集合 2 中，也是一共 6 次决策，其中类别 1 中“打篮球”的次数是 3，类别 2“不打篮球”的次数也是 3，那么信息熵为多少呢？我们可以计算得出：</p><p><img src="'+b+'" alt="img"></p><p>从上面的计算结果中可以看出，信息熵越大，纯度越低。当集合中的所有样本均匀混合时，信息熵最大，纯度最低。</p><p>我们在构造决策树的时候，会基于纯度来构建。而经典的 “不纯度”的指标有三种，分别是信息增益（ID3 算法）、信息增益率（C4.5 算法）以及基尼指数（Cart 算法）。</p><h2 id="id3-算法" tabindex="-1"><a class="header-anchor" href="#id3-算法" aria-hidden="true">#</a> ID3 算法</h2><p>我们先看下 ID3 算法。ID3 算法计算的是信息增益，信息增益指的就是划分可以带来纯度的提高，信息熵的下降。它的计算公式，是父亲节点的信息熵减去所有子节点的信息熵。在计算的过程中，我们会计算每个子节点的归一化信息熵，即按照每个子节点在父节点中出现的概率，来计算这些子节点的信息熵。所以信息增益的公式可以表示为：</p><p><img src="'+u+'" alt="img"></p><p>公式中 D 是父亲节点，Di 是子节点，Gain(D,a) 中的 a 作为 D 节点的属性选择。</p><hr><p>假设天气 = 晴的时候，会有 5 次去打篮球，5 次不打篮球。</p><p>其中 D1 刮风 = 是，有 2 次打篮球，1 次不打篮球。D2 刮风 = 否，有 3 次打篮球，4 次不打篮球。那么 a 代表节点的属性，即天气 = 晴。</p><p>你可以在下面的图例中直观地了解这几个概念。</p><p><img src="'+I+'" alt="img"></p><p>比如针对图上这个例子，D 作为节点的信息增益为：</p><p><img src="'+C+'" alt="img"></p><p>也就是 D 节点的信息熵 -2 个子节点的归一化信息熵。2 个子节点归一化信息熵 =3/10 的 D1 信息熵 +7/10 的 D2 信息熵。</p><p>我们基于 ID3 的算法规则，完整地计算下我们的训练集，训练集中一共有 7 条数据，3 个打篮球，4 个不打篮球，所以根节点的信息熵是：</p><p><img src="'+E+'" alt="img"></p><p>如果你将天气作为属性的划分，会有三个叶子节点 D1、D2 和 D3，分别对应的是晴天、阴天和小雨。我们用 <code>+</code> 代表去打篮球，<code>-</code> 代表不去打篮球。那么第一条记录，晴天不去打篮球，可以记为 <code>1-</code>，于是我们可以用下面的方式来记录 D1，D2，D3：</p><p><code>D1(天气 = 晴天)={1-,2-,6+}</code></p><p><code>D2(天气 = 阴天)={3+,7-}</code></p><p><code>D3(天气 = 小雨)={4+,5-}</code></p><p>我们先分别计算三个叶子节点的信息熵：</p><p><img src="'+x+'" alt="img"></p><p>因为 D1 有 3 个记录，D2 有 2 个记录，D3 有 2 个记录，所以 D 中的记录一共是 <code>3+2+2=7</code>，即总数为 7。</p><p>所以 D1 在 D（父节点）中的概率是 3/7；</p><p>D2 在父节点的概率是 2/7；</p><p>D3 在父节点的概率是 2/7；</p><p>那么作为子节点的归一化信息熵 = <code>3/7*0.918+2/7*1.0+2/7*1.0=0.965</code>。</p><p>因为我们用 ID3 中的信息增益来构造决策树，所以要计算每个节点的信息增益。</p><p>天气作为属性节点的信息增益为，Gain(D , 天气)=0.985-0.965=0.020。。</p><p>同理我们可以计算出其他属性作为根节点的信息增益，它们分别为 ：</p><p><strong>Gain(D , 温度)=0.128</strong></p><p><strong>Gain(D , 湿度)=0.020</strong></p><p><strong>Gain(D , 刮风)=0.020</strong></p><p>我们能看出来温度作为属性的信息增益最大。因为 ID3 就是要将信息增益最大的节点作为父节点，这样可以得到纯度高的决策树，所以我们将温度作为根节点。其决策树状图分裂为下图所示：</p><p><img src="'+A+'" alt="img"></p><p>然后我们要将上图中第一个叶节点，也就是 <code>D1={1-,2-,3+,4+}</code> 进一步进行分裂，往下划分，计算其不同属性（天气、湿度、刮风）作为节点的信息增益，可以得到：</p><p><strong>Gain(D , 湿度)=1</strong></p><p><strong>Gain(D , 天气)=1</strong></p><p><strong>Gain(D , 刮风)=0.3115</strong></p><p>我们能看到湿度，或者天气为 D1 的节点都可以得到最大的信息增益，这里我们选取湿度作为节点的属性划分。同理，我们可以按照上面的计算步骤得到完整的决策树，结果如下：</p><p><img src="'+G+'" alt="img"></p><p>于是我们通过 ID3 算法得到了一棵决策树。ID3 的算法规则相对简单，可解释性强。同样也存在缺陷，比如我们会发现 ID3 算法倾向于选择取值比较多的属性。这样，如果我们把“编号”作为一个属性（一般情况下不会这么做，这里只是举个例子），那么“编号”将会被选为最优属性 。但实际上“编号”是无关属性的，它对“打篮球”的分类并没有太大作用。</p><p>所以 ID3 有一个缺陷就是，有些属性可能对分类任务没有太大作用，但是他们仍然可能会被选为最优属性。这种缺陷不是每次都会发生，只是存在一定的概率。在大部分情况下，ID3 都能生成不错的决策树分类。针对可能发生的缺陷，后人提出了新的算法进行改进。</p><h2 id="在-id3-算法上进行改进的-c4-5-算法" tabindex="-1"><a class="header-anchor" href="#在-id3-算法上进行改进的-c4-5-算法" aria-hidden="true">#</a> 在 ID3 算法上进行改进的 C4.5 算法</h2><p>那么 C4.5 都在哪些方面改进了 ID3 呢？</p><h3 id="_1-采用信息增益率" tabindex="-1"><a class="header-anchor" href="#_1-采用信息增益率" aria-hidden="true">#</a> 1. 采用信息增益率</h3><p>因为 ID3 在计算的时候，倾向于选择取值多的属性。为了避免这个问题，C4.5 采用信息增益率的方式来选择属性。<code>信息增益率 = 信息增益 / 属性熵</code>，具体的计算公式这里省略。</p><p>当属性有很多值的时候，相当于被划分成了许多份，虽然信息增益变大了，但是对于 C4.5 来说，属性熵也会变大，所以整体的信息增益率并不大。</p><h3 id="_2-采用悲观剪枝" tabindex="-1"><a class="header-anchor" href="#_2-采用悲观剪枝" aria-hidden="true">#</a> 2. 采用悲观剪枝</h3><p>ID3 构造决策树的时候，容易产生过拟合的情况。在 C4.5 中，会在决策树构造之后采用悲观剪枝（PEP），这样可以提升决策树的泛化能力。</p><p>悲观剪枝是后剪枝技术中的一种，通过递归估算每个内部节点的分类错误率，比较剪枝前后这个节点的分类错误率来决定是否对其进行剪枝。这种剪枝方法不再需要一个单独的测试数据集。</p><h3 id="_3-离散化处理连续属性" tabindex="-1"><a class="header-anchor" href="#_3-离散化处理连续属性" aria-hidden="true">#</a> 3. 离散化处理连续属性</h3><p>C4.5 可以处理连续属性的情况，对连续的属性进行离散化的处理。比如打篮球存在的“湿度”属性，不按照“高、中”划分，而是按照湿度值进行计算，那么湿度取什么值都有可能。该怎么选择这个阈值呢，C4.5 选择具有最高信息增益的划分所对应的阈值。</p><h3 id="_4-处理缺失值" tabindex="-1"><a class="header-anchor" href="#_4-处理缺失值" aria-hidden="true">#</a> 4. 处理缺失值</h3><p>针对数据集不完整的情况，C4.5 也可以进行处理。</p><p>假如我们得到的是如下的数据，你会发现这个数据中存在两点问题。第一个问题是，数据集中存在数值缺失的情况，如何进行属性选择？第二个问题是，假设已经做了属性划分，但是样本在这个属性上有缺失值，该如何对样本进行划分？</p><p><img src="'+B+'" alt="img"></p><p>我们不考虑缺失的数值，可以得到温度 <code>D={2-,3+,4+,5-,6+,7-}</code>。温度 = 高：<code>D1={2-,3+,4+}</code> ；温度 = 中：<code>D2={6+,7-}</code>；温度 = 低：<code>D3={5-} </code>。这里 <code>+</code> 号代表打篮球，<code>-</code> 号代表不打篮球。比如 ID=2 时，决策是不打篮球，我们可以记录为 <code>2-</code>。</p><p>针对将属性选择为温度的信息增为：</p><p>Gain(D′, 温度)=<code>Ent(D′)-0.792=1.0-0.792=0.208</code></p><p>属性熵 =1.459, 信息增益率 Gain_ratio(D′, 温度)=0.208/1.459=0.1426。</p><p>D′的样本个数为 6，而 D 的样本个数为 7，所以所占权重比例为 6/7，所以 Gain(D′，温度) 所占权重比例为 6/7，所以：</p><p><code>Gain_ratio(D, 温度)=6/7*0.1426=0.122</code>。</p><p>这样即使在温度属性的数值有缺失的情况下，我们依然可以计算信息增益，并对属性进行选择。</p><p>Cart 算法在这里不做介绍，我会在下一讲给你讲解这个算法。现在我们总结下 ID3 和 C4.5 算法。首先 ID3 算法的优点是方法简单，缺点是对噪声敏感。训练数据如果有少量错误，可能会产生决策树分类错误。C4.5 在 ID3 的基础上，用信息增益率代替了信息增益，解决了噪声敏感的问题，并且可以对构造树进行剪枝、处理连续数值以及数值缺失等情况，但是由于 C4.5 需要对数据集进行多次扫描，算法效率相对较低。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>前面我们讲了两种决策树分类算法 ID3 和 C4.5，了解了它们的数学原理。你可能会问，公式这么多，在实际使用中该怎么办呢？实际上，我们可以使用一些数据挖掘工具使用它们，比如 Python 的 sklearn，或者是 Weka（一个免费的数据挖掘工作平台），它们已经集成了这两种算法。只是我们在了解了这两种算法之后，才能更加清楚这两种算法的优缺点。</p><p>我们总结下，这次都讲到了哪些知识点呢？</p><p>首先我们采用决策树分类，需要了解它的原理，包括它的构造原理、剪枝原理。另外在信息度量上，我们需要了解信息度量中的纯度和信息熵的概念。在决策树的构造中，一个决策树包括根节点、子节点、叶子节点。在属性选择的标准上，度量方法包括了信息增益和信息增益率。在算法上，我讲解了两种算法：ID3 和 C4.5，其中 ID3 是基础的决策树算法，C4.5 在它的基础上进行了改进，也是目前决策树中应用广泛的算法。然后在了解这些概念和原理后，强烈推荐你使用工具，具体工具的使用我会在后面进行介绍。</p><p><img src="'+P+'" alt="img"></p><p>最后我们留一道思考题吧。请你用下面的例子来模拟下决策树的流程，假设好苹果的数据如下，请用 ID3 算法来给出好苹果的决策树。</p><p><img src="'+y+'" alt="img"></p><p>如果你觉得这篇文章有所价值，把它分享给你的朋友或者同事。</p><h2 id="学员评论" tabindex="-1"><a class="header-anchor" href="#学员评论" aria-hidden="true">#</a> 学员评论</h2><p>决策树学习通常包括三个步骤：</p><ol><li><p>特征选择。选取最优特征来划分特征空间，用信息增益或者信息增益比来选择</p></li><li><p>决策树的生成。ID3、C4.5、CART</p></li><li><p>剪枝 总结优缺点：</p><ol><li>ID3: <ol><li>优点：算法简单，通俗易懂</li><li>缺陷： <ol><li>无法处理缺失值</li><li>只能处理离散值，无法处理连续值</li><li>用信息增益作为划分规则，存在偏向于选择取值较多的特征。因为特征取值越多，说明划分的越细，不确定性越低，信息增益则越高</li><li>容易出现过拟合</li></ol></li></ol></li><li>C4.5: <ol><li>优点： <ol><li>能够处理缺省值</li><li>能对连续值做离散处理</li><li>使用信息增益比，能够避免偏向于选择取值较多的特征。因为信息增益比=信息增益/属性熵，属性熵是根据属性的取值来计算的，一相除就会抵消掉</li><li>在构造树的过程中，会剪枝，减少过拟合</li></ol></li><li>缺点：构造决策树，需要对数据进行多次扫描和排序，效率低</li></ol></li></ol></li><li><p>学习的时候发现了这两点错误：</p><ol><li>Gain(D , 天气)=0 ---&gt; 1</li><li>Gain(D , 湿度)=0 ----&gt; 1</li><li>Gain(D , 刮风)=0.0615</li></ol></li><li><p>针对将属性选择为温度的信息增益率为：</p><ol><li>Gain(D′, 温度)=Ent(D′)-0.792=1.0-0.792=-0.208</li><li>这里算出来的还是信息增益，不是信息增益率，没有除以属性熵</li><li>属性熵=-3/6log3/6 - 1/6log1/6 - 2/6log2/6</li></ol></li><li><p>作业：</p><ol><li><p>经验熵 H(D) = -1/2log1/2 - 1/2log1/2 = 1</p></li><li><p>属性 红的信息增益：</p><ol><li><p>g(D, A1) = H(D) - H(D|A1)</p><p>= 1 - 1/2*0 - 1/2 * 0</p><p>= 1</p></li></ol></li><li><p>属性 大的信息增益：</p><ol><li>g(D,A2) = <code>1 - 1/2*(-1/2log1/2-1/2log1/2)*2=0</code></li><li>属性熵都是1，所以信息增益比跟信息增益一样</li><li>特征选择 红作为最优特征，红的就是好苹果，不红的就是坏苹果</li></ol></li></ol></li></ol><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="'+s+'" alt=""></p></details>',103),N={class:"custom-container info"},Q=p("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),V=p("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),H=p("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),J={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},T=p("p",null,"方法二：微信：Jiabcdefh",-1),F=p("p",null,[p("img",{src:t,alt:""})],-1);function L($,w){const a=c("ExternalLinkIcon");return l(),n("div",null,[j,p("p",null,[i("如果决策树选择的属性过多，构造出来的决策树一定能够“完美”地把训练集中的样本分类，但是这样就会把训练集中一些数据的特点当成所有数据的特点，但这个特点不一定是全部数据的特点，这就使得这个决策树在真实的数据分类中出现错误，也就是模型的“泛化能力”差。"),p("a",v,[i("考虑自身"),e(a)])]),q,p("div",N,[Q,V,H,p("p",null,[i("方法一："),p("a",J,[i("QQ"),e(a)])]),T]),F])}const S=r(k,[["render",L],["__file","17.html.vue"]]);export{S as default};
