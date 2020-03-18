<template>
  <div>
    1. 为什么需要 nextTick
    Vue 是异步修改 DOM 的并且不鼓励开发者直接接触 DOM，但有时候业务需要必须对数据更改--刷新后的 DOM 做相应的处理，这时候就可以使用 Vue.nextTick(callback)这个 api 了。

    2. 理解原理前的准备
    首先需要知道事件循环中宏任务和微任务这两个概念(这其实也是面试常考点)。
    <!-- https://juejin.im/post/5c947bca5188257de704121d -->
    常见的宏任务有 script, setTimeout, setInterval, setImmediate, I/O, UI rendering
    常见的微任务有 process.nextTick(Nodejs),Promise.then(), MutationObserver;

    3. 理解 nextTick
    而 nextTick 的原理正是 vue 通过异步队列控制 DOM 更新和 nextTick 回调函数先后执行的方式。如果大家看过这部分的源码，会发现其中做了很多 isNative()的判断，因为这里还存在兼容性优雅降级的问题。可见 Vue 开发团队的深思熟虑，对性能的良苦用心。
    <!-- https://mp.weixin.qq.com/s/mCcW4OYj3p3471ghMBylBw -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>