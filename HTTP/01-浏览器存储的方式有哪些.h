特性	       cookie	localStorage	sessionStorage	indexedDB
数据生命周期	一般由服务器生成，可以设置过期时间	除非被清理，否则一直存在	页面关闭就清理	除非被清理，否则一直存在
数据存储大小	4K	5M	5M	无限
与服务端通信	每次都会携带在 header，中，对于请求性能影响	不参与	不参与	不参与

补充：cookie 原本并不是用来储存的，而是用来与服务端通信的，需要存取请自行封装 api。
而 localStorage 则自带 getItem 和 setItem 方法，使用很方便。

localStorage 注意点：

localStorage 只能存字符串，存取 JSON 数据需配合 JSON.stringify() 和 JSON.parse()
遇上禁用 setItem 的浏览器，需要使用 try...catch 捕获异常