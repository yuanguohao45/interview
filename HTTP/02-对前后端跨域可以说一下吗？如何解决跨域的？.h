九种跨域方式实现原理
// https://juejin.im/post/5c23993de51d457b8c1f4ee1

如何跨域我们已经明白了，如果这样问：浏览器没有同源策略会有什么危险？是不是有点瞬间懵逼？
下面是摘选的事例，参考：AJAX跨域访问被禁止的原因

假设有一个黑客叫做小黑，他从网上抓取了一堆美女图做了一个网站，每日访问量爆表。
为了维护网站运行，小黑挂了一张收款码，觉得网站不错的可以适当资助一点，可是无奈伸手党太多，小黑的网站入不敷出。
于是他非常生气的在网页中写了一段js代码，使用ajax向淘宝发起登陆请求，因为很多数人都访问过淘宝，所以电脑中存有淘宝的cookie，不需要输入账号密码直接就自动登录了，然后小黑在ajax回调函数中解析了淘宝返回的数据，得到了很多人的隐私信息，转手一卖，小黑的网站终于盈利了。
如果跨域也可以发送AJAX请求的话，小黑就真的获取到了用户的隐私并成功获利了！！！