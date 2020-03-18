<template>
  <div>
    1.监听数据变化的实现原理不同

    Vue 通过 getter/setter 以及一些函数的劫持，能精确快速的计算出 Virtual DOM 的差异。这是由于它在渲染过程中，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。
    React 默认是通过比较引用的方式进行的，如果不优化，每当应用的状态被改变时，全部子组件都会重新渲染，可能导致大量不必要的 VDOM 的重新渲染。
    Vue 不需要特别的优化就能达到很好的性能，而对于 React 而言，需要通过 PureComponent/shouldComponentUpdate 这个生命周期方法来进行控制。如果你的应用中，交互复杂，需要处理大量的 UI 变化，那么使用 Virtual DOM 是一个好主意。如果你更新元素并不频繁，那么 Virtual DOM 并不一定适用，性能很可能还不如直接操控 DOM。

    为什么 React 不精确监听数据变化呢？这是因为 Vue 和 React 设计理念上的区别，Vue 使用的是可变数据，而 React 更强调数据的不可变。

    2.数据流的不同

    Vue 中默认支持双向绑定，组件与 DOM 之间可以通过 v-model 双向绑定。但是，父子组件之间，props 在 2.x 版本是单向数据流
    React 一直提倡的是单向数据流，他称之为 onChange/setState()模式。
    不过由于我们一般都会用 Vuex 以及 Redux 等单向数据流的状态管理框架，因此很多时候我们感受不到这一点的区别了。

    3.模板渲染方式的不同

    在表层上，模板的语法不同

    React 是通过 JSX 渲染模板
    而 Vue 是通过一种拓展的 HTML 语法进行渲染
    在深层上，模板的原理不同，这才是他们的本质区别：

    React 是在组件 JS 代码中，通过原生 JS 实现模板中的常见语法，比如插值，条件，循环等，都是通过 JS 语法实现的
    Vue 是在和组件 JS 代码分离的单独的模板中，通过指令来实现的，比如条件语句就需要 v-if 来实现
    对这一点，我个人比较喜欢 React 的做法，因为他更加纯粹更加原生，而 Vue 的做法显得有些独特，会把 HTML 弄得很乱。举个例子，说明 React 的好处：react 中 render 函数是支持闭包特性的，所以我们 import 的组件在 render 中可以直接调用。但是在 Vue 中，由于模板中使用的数据都必须挂在 this 上进行一次中转，所以我们 import 一个组件完了之后，还需要在 components 中再声明下，这样显然是很奇怪但又不得不这样的做法。
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>