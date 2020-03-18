// TypeScript泛型是一个提供创建可重用组件方法的工具。它能够创建可以处理多种数据类型而不是单一数据类型的组件。泛型在不影响性能或生产率的情况下提供类型安全性。泛型允许我们创建泛型类、泛型函数、泛型方法和泛型接口。

// 在泛型中，类型参数写在开(<)和闭(>)括号之间，这使得它是强类型集合。泛型使用一种特殊类型的类型变量<T>，它表示类型。泛型集合只包含类似类型的对象。

function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(output1);
console.log(output2);
