// 匿名函数是声明时没有任何命名标识符的函数。这些函数是在运行时动态声明的。与标准函数一样，匿名函数可以接受输入和返回输出。匿名函数在初始创建之后通常是不可访问的。

let myAdd = function(x: number, y: number): number {
  return x + y;
};
// console.log(myAdd());
