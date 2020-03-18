// 声明合并是编译器随后合并两个或多个独立声明的过程。将具有相同名称的声明声明为单个定义。这个合并的定义具有两个原始声明的特性。

// 最简单也是最常见的声明合并类型是接口合并。在最基本的层次上，merge将两个声明的成员机械地连接到一个具有相同名称的接口中。

interface Cloner {
  // clone(animal: Animal): Animal;
}
interface Cloner {
  // clone(animal: Sheep): Sheep;
}
interface Cloner {
  // clone(animal: Dog): Dog;
  // clone(animal: Cat): Cat;
}
// 这三个接口将合并为一个单独的声明

interface Cloner {
  // clone(animal: Dog): Dog;
  // clone(animal: Cat): Cat;
  // clone(animal: Sheep): Sheep;
  // clone(animal: Animal): Animal;
}
// 注: 在TypeScript中不是所有的合并都允许。目前，类不能与其他类或变量合并。
