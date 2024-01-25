import{_ as e}from"./gzh-X2g0OvFa.js";import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as i,a as n,b as s,d as c,e as l}from"./app-IAnY6voi.js";const u={},r=l(`<h2 id="_1-初识二叉树" tabindex="-1"><a class="header-anchor" href="#_1-初识二叉树" aria-hidden="true">#</a> 1. 初识二叉树</h2><p>你好，我是悦创。</p><p><strong>二叉树</strong>是一个有限元素的集合，这个集合要么是空集，要么是由一个称为根的元素以及两个不相交的、分别称为左子树和右子树的二叉树组成。</p><p>让我们使用文本来表示一个二叉树。</p><p>考虑这样一个简单的二叉树：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    1
   / \\
  2   3
 / \\ / \\
4  5 6  7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这棵树的根是 1。</li><li>1 的左子树是以 2 为根的二叉树，右子树是以 3 为根的二叉树。</li><li>2 的左子节点是 4，右子节点是 5；3 的左子节点是 6，右子节点是 7。</li></ul><p><strong>前序遍历</strong> (根-左-右)：1 -&gt; 2 -&gt; 4 -&gt; 5 -&gt; 3 -&gt; 6 -&gt; 7</p><p><strong>中序遍历</strong> (左-根-右)：4 -&gt; 2 -&gt; 5 -&gt; 1 -&gt; 6 -&gt; 3 -&gt; 7</p><p><strong>后序遍历</strong> (左-右-根)：4 -&gt; 5 -&gt; 2 -&gt; 6 -&gt; 7 -&gt; 3 -&gt; 1</p><p>这种以文本方式表示的二叉树可以帮助你在没有图形界面的情况下更好地理解二叉树的结构和遍历方式。不过，当树结构更复杂时，这种方式可能不如图形直观。</p><h2 id="_2-探究前中后序遍历" tabindex="-1"><a class="header-anchor" href="#_2-探究前中后序遍历" aria-hidden="true">#</a> 2. 探究前中后序遍历</h2><p>前序、中序和后序遍历是二叉树的三种基本的遍历方式，它们描述了访问树的节点的顺序。具体来说：</p><ol><li><p><strong>前序遍历 (Pre-order Traversal)</strong></p><ul><li>先访问根节点。</li><li>再递归地遍历左子树。</li><li>最后递归地遍历右子树。</li></ul><p>对于之前的示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    1
   / \\
  2   3
 / \\ / \\
4  5 6  7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前序遍历的结果是：1 -&gt; 2 -&gt; 4 -&gt; 5 -&gt; 3 -&gt; 6 -&gt; 7</p></li><li><p><strong>中序遍历 (In-order Traversal)</strong></p><ul><li>先递归地遍历左子树。</li><li>然后访问根节点。</li><li>最后递归地遍历右子树。</li></ul><p>对于上述示例，中序遍历的结果是：4 -&gt; 2 -&gt; 5 -&gt; 1 -&gt; 6 -&gt; 3 -&gt; 7</p><p>注意：当二叉树是一个二叉搜索树时，中序遍历将输出升序的值。</p></li><li><p><strong>后序遍历 (Post-order Traversal)</strong></p><ul><li>先递归地遍历左子树。</li><li>再递归地遍历右子树。</li><li>最后访问根节点。</li></ul><p>对于上述示例，后序遍历的结果是：4 -&gt; 5 -&gt; 2 -&gt; 6 -&gt; 7 -&gt; 3 -&gt; 1</p></li></ol><p>理解这三种遍历方式的关键是观察根节点的访问顺序相对于其左右子树的顺序。在实际应用中，这三种遍历方式根据需要有各自的应用场景，例如在某些算法和问题求解中。</p><h2 id="_3-二叉树的基本实现" tabindex="-1"><a class="header-anchor" href="#_3-二叉树的基本实现" aria-hidden="true">#</a> 3. 二叉树的基本实现</h2><h3 id="_3-1-构建-node-类" tabindex="-1"><a class="header-anchor" href="#_3-1-构建-node-类" aria-hidden="true">#</a> 3.1 构建 Node 类</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 定义二叉树的节点</span>
<span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 左子节点</span>
        self<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token comment"># 右子节点</span>
        self<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token comment"># 当前节点的值</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-创建-binarytree-类" tabindex="-1"><a class="header-anchor" href="#_3-2-创建-binarytree-类" aria-hidden="true">#</a> 3.2 创建 BinaryTree 类</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">BinaryTree</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 初始化时树是空的，根节点为 None</span>
        self<span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-编写插入函数-insert" tabindex="-1"><a class="header-anchor" href="#_3-3-编写插入函数-insert" aria-hidden="true">#</a> 3.3 编写插入函数 insert</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># 插入一个新的值到二叉搜索树中</span>
    <span class="token keyword">def</span> <span class="token function">insert</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 如果树是空的，则直接创建一个新的根节点</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> self<span class="token punctuation">.</span>root<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>root <span class="token operator">=</span> Node<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># 如果树不是空的，递归地插入新值</span>
            self<span class="token punctuation">.</span>_insert_recursive<span class="token punctuation">(</span>self<span class="token punctuation">.</span>root<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-编写递归插入子树-insert-recursive" tabindex="-1"><a class="header-anchor" href="#_3-4-编写递归插入子树-insert-recursive" aria-hidden="true">#</a> 3.4 编写递归插入子树 _insert_recursive</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># 递归地将新值插入到二叉搜索树的适当位置</span>
    <span class="token keyword">def</span> <span class="token function">_insert_recursive</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 如果新值小于当前节点的值，插入到左子树</span>
        <span class="token keyword">if</span> key <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>val<span class="token punctuation">:</span>
            <span class="token comment"># 如果左子节点是空的，直接在该位置创建新节点</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>left <span class="token keyword">is</span> Node<span class="token punctuation">:</span>
                node<span class="token punctuation">.</span>left <span class="token operator">=</span> Node<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token comment"># 如果左子节点不是空的，递归地插入到左子树</span>
                self<span class="token punctuation">.</span>_insert_recursive<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># 如果新值大于或等于当前节点的值，插入到右子树</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>right <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                node<span class="token punctuation">.</span>right <span class="token operator">=</span> Node<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token comment"># 如果右子节点不是空的，递归地插入到右子树</span>
                self<span class="token punctuation">.</span>_insert_recursive<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-编写可遍历的-inorder" tabindex="-1"><a class="header-anchor" href="#_3-5-编写可遍历的-inorder" aria-hidden="true">#</a> 3.5 编写可遍历的 inorder</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># 返回二叉搜索树的中序遍历结果</span>
    <span class="token keyword">def</span> <span class="token function">inorder</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_inorder_recursive<span class="token punctuation">(</span>self<span class="token punctuation">.</span>root<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-实现中序遍历-inorder-recursive" tabindex="-1"><a class="header-anchor" href="#_3-6-实现中序遍历-inorder-recursive" aria-hidden="true">#</a> 3.6 实现中序遍历 _inorder_recursive</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># 递归地进行中序遍历</span>
    <span class="token keyword">def</span> <span class="token function">_inorder_recursive</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 如果当前节点不是空的</span>
        <span class="token keyword">if</span> node<span class="token punctuation">:</span>
            <span class="token comment"># 首先遍历左子树</span>
            self<span class="token punctuation">.</span>_inorder_recursive<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
            <span class="token comment"># 然后访问当前节点</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token comment"># 最后遍历右子树</span>
            self<span class="token punctuation">.</span>_inorder_recursive<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-主程序" tabindex="-1"><a class="header-anchor" href="#_3-7-主程序" aria-hidden="true">#</a> 3.7 主程序</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 主程序</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建一个空的二叉搜索树</span>
    bt <span class="token operator">=</span> BinaryTree<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 向树中插入一些值</span>
    <span class="token keyword">for</span> val <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        bt<span class="token punctuation">.</span>insert<span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token comment"># 打印树的中序遍历结果</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>bt<span class="token punctuation">.</span>inorder<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 预期输出: [5, 10, 15, 20, 25, 30, 35]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-完整代码" tabindex="-1"><a class="header-anchor" href="#_3-8-完整代码" aria-hidden="true">#</a> 3.8 完整代码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 定义二叉树的节点</span>
<span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 左子节点</span>
        self<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token comment"># 右子节点</span>
        self<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token boolean">None</span>
        <span class="token comment"># 当前节点的值</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> key

<span class="token comment"># 定义二叉搜索树</span>
<span class="token keyword">class</span> <span class="token class-name">BinaryTree</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 初始化时树是空的，根节点为None</span>
        self<span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token comment"># 插入一个新的值到二叉搜索树中</span>
    <span class="token keyword">def</span> <span class="token function">insert</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 如果树是空的，则直接创建一个新的根节点</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> self<span class="token punctuation">.</span>root<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>root <span class="token operator">=</span> Node<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># 如果树不是空的，递归地插入新值</span>
            self<span class="token punctuation">.</span>_insert_recursive<span class="token punctuation">(</span>self<span class="token punctuation">.</span>root<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

    <span class="token comment"># 递归地将新值插入到二叉搜索树的适当位置</span>
    <span class="token keyword">def</span> <span class="token function">_insert_recursive</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 如果新值小于当前节点的值，插入到左子树</span>
        <span class="token keyword">if</span> key <span class="token operator">&lt;</span> node<span class="token punctuation">.</span>val<span class="token punctuation">:</span>
            <span class="token comment"># 如果左子节点是空的，直接在该位置创建新节点</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>left <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                node<span class="token punctuation">.</span>left <span class="token operator">=</span> Node<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token comment"># 如果左子节点不是空的，递归地插入到左子树</span>
                self<span class="token punctuation">.</span>_insert_recursive<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># 如果新值大于或等于当前节点的值，插入到右子树</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>right <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                node<span class="token punctuation">.</span>right <span class="token operator">=</span> Node<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token comment"># 如果右子节点不是空的，递归地插入到右子树</span>
                self<span class="token punctuation">.</span>_insert_recursive<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

    <span class="token comment"># 返回二叉搜索树的中序遍历结果</span>
    <span class="token keyword">def</span> <span class="token function">inorder</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_inorder_recursive<span class="token punctuation">(</span>self<span class="token punctuation">.</span>root<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment"># 递归地进行中序遍历</span>
    <span class="token keyword">def</span> <span class="token function">_inorder_recursive</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 如果当前节点不是空的</span>
        <span class="token keyword">if</span> node<span class="token punctuation">:</span>
            <span class="token comment"># 首先遍历左子树</span>
            self<span class="token punctuation">.</span>_inorder_recursive<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
            <span class="token comment"># 然后访问当前节点</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token comment"># 最后遍历右子树</span>
            self<span class="token punctuation">.</span>_inorder_recursive<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result

<span class="token comment"># 主程序</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建一个空的二叉搜索树</span>
    bt <span class="token operator">=</span> BinaryTree<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 向树中插入一些值</span>
    <span class="token keyword">for</span> val <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        bt<span class="token punctuation">.</span>insert<span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token comment"># 打印树的中序遍历结果</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>bt<span class="token punctuation">.</span>inorder<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 预期输出: [5, 10, 15, 20, 25, 30, 35]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details>',34),d={class:"hint-container info"},k=n("p",{class:"hint-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),m=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"方法二：微信：Jiabcdefh",-1);function _(f,y){const a=p("ExternalLinkIcon");return o(),i("div",null,[r,n("div",d,[k,v,m,n("p",null,[s("方法一："),n("a",b,[s("QQ"),c(a)])]),h])])}const N=t(u,[["render",_],["__file","01-binary-tree.html.vue"]]);export{N as default};
