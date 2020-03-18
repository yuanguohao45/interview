<template>
  <div>
    使用Object.assign()，vm.$data可以获取当前状态下的data，vm.$options.data(this)可以获取到组件初始化状态下的data。

    Object.assign(this.$data, this.$options.data(this)) // 注意加this，不然取不到data() { a: this.methodA } 中的this.methodA。
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>