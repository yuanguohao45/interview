<template>
  <div>
    watch 为了监听某个响应数据的变化。computed 是自动监听依赖值的变化，从而动态返回内容，主要目的是简化模板内的复杂运算。所以区别来源于用法，只是需要动态值，那就用 computed ；需要知道值的改变后执行业务逻辑，才用 watch。
    methods是一个方法，它可以接受参数，而computed 不能，computed 是可以缓存的，methods 不会。computed 可以依赖其他 computed，甚至是其他组件的 data。
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>