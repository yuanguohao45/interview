// happypack: 利用进程并行编译loader,利用缓存来使得 rebuild 更快,遗憾的是作者表示已经不会继续开发此项目,类似的替代者是thread-loader

// 外部扩展(externals): 将不怎么需要更新的第三方库脱离webpack打包，不被打入bundle中，从而减少打包时间,比如jQuery用script标签引入

// dll: 采用webpack的 DllPlugin 和 DllReferencePlugin 引入dll，让一些基本不会改动的代码先打包成静态资源,避免反复编译浪费时间

// 利用缓存: webpack.cache、babel-loader.cacheDirectory、HappyPack.cache都可以利用缓存提高rebuild效率

// 缩小文件搜索范围: 比如babel-loader插件,如果你的文件仅存在于src中,那么可以include: path.resolve(__dirname, 'src'),当然绝大多数情况下这种操作的提升有限,除非不小心build了node_modules文件
