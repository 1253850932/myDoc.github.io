const n=JSON.parse('{"key":"v-383ae083","path":"/note/vue/router.html","title":"VueRouter","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Vue3中使用keep-alive和route-view","slug":"vue3中使用keep-alive和route-view","link":"#vue3中使用keep-alive和route-view","children":[]}],"git":{"createdTime":1671200475000,"updatedTime":1671200475000,"contributors":[{"name":"deng","email":"‘1253850932@qq.com’","commits":1}]},"readingTime":{"minutes":0.13,"words":40},"filePathRelative":"note/vue/router.md","localizedDate":"2022年12月16日","excerpt":"<hr>\\n<p>icon: note\\ndate: 2022-12-17\\ncategory:</p>\\n<ul>\\n<li>Vue\\ntag:</li>\\n<li>红</li>\\n<li>小</li>\\n<li>圆</li>\\n</ul>\\n<hr>\\n<h1> VueRouter</h1>\\n<h2> Vue3中使用keep-alive和route-view</h2>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code>\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>router-view</span>  <span class=\\"token attr-name\\">v-slot</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>{ Component }<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>transition</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>keep-alive</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>component</span> <span class=\\"token attr-name\\">:is</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>Component<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>component</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>keep-alive</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>transition</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>router-view</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};