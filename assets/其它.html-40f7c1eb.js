import{_ as n,V as s,W as a,a0 as t}from"./framework-a5ccf766.js";const p={},e=t(`<h1 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h1><h2 id="使用echarts" tabindex="-1"><a class="header-anchor" href="#使用echarts" aria-hidden="true">#</a> 使用Echarts</h2><ol><li><code>import * as echarts from &#39;echarts&#39;</code></li><li>在setup中声明<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明定义一下echart</span>
<span class="token keyword">let</span> echart <span class="token operator">=</span> echarts
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">courseChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    courseChart<span class="token punctuation">.</span>dispose
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">// 基础配置一下Echarts</span>
<span class="token keyword">const</span> <span class="token function-variable function">courseChart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> chart <span class="token operator">=</span> echart<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;course&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">380</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">250</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 把配置和数据放这里</span>
    chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// Try &#39;horizontal&#39;</span>
            <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{a} &lt;br/&gt;{b} : {c} ({d}%)&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;人数&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">335</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;学生&#39;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">234</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;教师&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//自适应大小</span>
        chart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>准备dom容器<code> &lt;div id=&quot;course&quot; :style=&quot;{ width: &#39;424px&#39;, height: &#39;250px&#39; }&quot;&gt;&lt;/div&gt;</code></li></ol><h2 id="git-提交规范" tabindex="-1"><a class="header-anchor" href="#git-提交规范" aria-hidden="true">#</a> Git 提交规范</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">feat</span><span class="token operator">:</span> 新功能
	<span class="token literal-property property">fix</span><span class="token operator">:</span> 修复bug
	<span class="token literal-property property">docs</span><span class="token operator">:</span> 只有文档改变
	<span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token function">并没有影响代码的意义</span><span class="token punctuation">(</span>空格，去掉分号，格式的修改等<span class="token punctuation">)</span>
	<span class="token literal-property property">refactor</span><span class="token operator">:</span> 代码的修改并没有修改bug，也没有添加新功能
	<span class="token literal-property property">perf</span><span class="token operator">:</span> 代码的修改提高的性能
	<span class="token literal-property property">test</span><span class="token operator">:</span> 添加测试
	<span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token function">影响构建系统或外部依赖项的更改</span><span class="token punctuation">(</span>maven<span class="token punctuation">,</span>gradle<span class="token punctuation">,</span>npm 等等<span class="token punctuation">)</span>
	<span class="token literal-property property">ci</span><span class="token operator">:</span> 对<span class="token constant">CI</span>配置文件和脚本的更改
	<span class="token literal-property property">revert</span><span class="token operator">:</span> Revert a commit
	chore：对非 src 和 test 目录的修改

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","其它.html.vue"]]);export{u as default};
