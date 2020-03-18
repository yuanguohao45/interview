GET 参数通过 url 传递，POST 放在 body 中。（http 协议规定，url 在请求头中，所以大小限制很小）

GET 请求在 url 中传递的参数是有长度限制的，而 POST 没有。原因见上↑↑↑

GET 在浏览器回退时是无害的，而 POST 会再次提交请求

GET 请求会被浏览器主动 cache，而 POST 不会，除非手动设置

GET 比 POST 更不安全，因为参数直接暴露在 url 中，所以不能用来传递敏感信息

对参数的数据类型，GET 只接受 ASCII字符，而 POST 没有限制

GET 请求只能进行 url(x-www-form-urlencoded)编码，而 POST 支持多种编码方式

GET 产生一个 TCP 数据包；POST 产生两个 TCP 数据包。对于 GET 方式的请求，浏览器会把 http 的 header 和 data 一并发送出去，服务器响应200（返回数据）。而对于 POST，浏览器先发送 header，服务器响应100 continue，浏览器再发送 data，服务器响应200 ok（返回数据）