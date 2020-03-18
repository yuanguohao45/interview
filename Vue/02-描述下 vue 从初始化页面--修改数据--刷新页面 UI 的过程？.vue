<template>
  <div>
    当 Vue 进入初始化阶段时，一方面 Vue 会遍历 data 中的属性，并用 Object.defineProperty 将它转化成 getter/setter 的形式，实现数据劫持(暂不谈 Vue3.0 的 Proxy)；另一方面，Vue 的指令编译器 Compiler 对元素节点的各个指令进行解析，初始化视图，并订阅 Watcher 来更新试图，此时 Watcher 会将自己添加到消息订阅器 Dep 中，此时初始化完毕。
    当数据发生变化时，触发 Observer 中 setter 方法，立即调用 Dep.notify(),Dep 这个数组开始遍历所有的订阅者，并调用其 update 方法，Vue 内部再通过 diff 算法，patch 相应的更新完成对订阅者视图的改变。
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>