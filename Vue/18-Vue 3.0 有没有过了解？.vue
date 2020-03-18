<template>
  <div>
    <!-- https://zhuanlan.zhihu.com/p/68477600 -->
    关于Vue 3.0有幸看过尤大的关于3.0版本的RFC Vue Function-based API RFC。大致说了三个点，第一个是关于提出的新API setup()函数，第二个说了对于Typescript的支持，最后说了关于替换Object.defineProperty为 Proxy 的支持。
    详细说了下关于Proxy代替带来的性能上的提升，因为传统的原型链拦截的方法，无法检测对象及数组的一些更新操作，但使用Proxy又带来了浏览器兼容问题。
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>