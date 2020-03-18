HTML 解析出 DOM Tree

CSS 解析出 Style Rules

两者关联生成 Render Tree

Layout（布局）根据 Render Tree 计算每个节点的信息

Painting 根据计算好的信息进行渲染整个页面

浏览器解析文档的过程中，如果遇到 script 标签，会立即解析脚本，停止解析文档（因为 JS 可能会改变 DOM 和 CSS,如果继续解析会造成浪费）。
如果是外部 script, 会等待脚本下载完成之后在继续解析文档。现在 script 标签增加了 defer 和 async 属性，脚本解析会将脚本中改变 DOM 和 css 的地方> 解析出来，追加到 DOM Tree 和 Style Rules 上