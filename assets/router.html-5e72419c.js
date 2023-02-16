import{_ as n,V as a,W as s,a0 as t}from"./framework-a5ccf766.js";const e={},p=t(`<hr><p>icon: note date: 2022-12-17 category:</p><ul><li>Vue tag:</li><li>红</li><li>小</li><li>圆</li></ul><hr><h1 id="vuerouter" tabindex="-1"><a class="header-anchor" href="#vuerouter" aria-hidden="true">#</a> VueRouter</h1><h2 id="vue3中使用keep-alive和route-view" tabindex="-1"><a class="header-anchor" href="#vue3中使用keep-alive和route-view" aria-hidden="true">#</a> Vue3中使用keep-alive和route-view</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span>  <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ Component }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Component<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function l(c,i){return a(),s("div",null,o)}const r=n(e,[["render",l],["__file","router.html.vue"]]);export{r as default};