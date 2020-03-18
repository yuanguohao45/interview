session 是基于 cookie 实现的。cookie 保存在客户端浏览器中，而 session 保存在服务器上。cookie 机制是通过检查客户身上的“通行证”来确定客户身份的话，那么 session 机制就是通过检查服务器上的“客户明细表”来确认客户身份。session 相当于程序在服务器上建立的一份客户档案，客户来访的时候只需要查询客户档案表就可以了。

cookie 和 session 的区别：

存在的位置：
cookie 存在于客户端，临时文件夹中；session 存在于服务器的内存中，一个 session 域对象为一个用户浏览器服务
安全性
cookie 是以明文的方式存放在客户端的，安全性低，可以通过一个加密算法进行加密后存放；session 存放于服务器的内存中，所以安全性好
生命周期(以 20 分钟为例)
cookie 的生命周期是累计的，从创建时，就开始计时，20 分钟后 cookie 生命周期结束；
session 的生命周期是间隔的，从创建时，开始计时如在 20 分钟，没有访问 session，那么 session 生命周期被销毁。但是，如果在 20 分钟内（如在第 19 分钟时）访问过 session，那么，将重新计算 session 的生命周期。关机会造成 session 生命周期的结束，但是对 cookie 没有影响
访问范围
cookie 为多个用户浏览器共享；session 为一个用户浏览器独享

// https://mp.weixin.qq.com/s/1Kh18uyEJzM21mc2l5MMCg