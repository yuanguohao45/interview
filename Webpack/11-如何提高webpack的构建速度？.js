// 多入口情况下，使用CommonsChunkPlugin来提取公共代码

// 通过externals配置来提取常用库

// 利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来。

// 使用Happypack 实现多线程加速编译

// 使用webpack-uglify-parallel来提升uglifyPlugin的压缩速度。 原理上webpack-uglify-parallel采用了多核并行压缩来提升压缩速度

// 使用Tree-shaking和Scope Hoisting来剔除多余代码
