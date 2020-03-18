// rest参数用于向函数传递零个或多个值。它是通过在参数前加上三个点字符(‘…’)来声明的。它允许函数在不使用arguments对象的情况下拥有可变数量的参数。当我们有不确定数量的参数时，这是非常有用的。

// rest参数要遵循的规则:

// 一个函数中只允许有一个rest参数。
// 它必须是数组类型。
// 它必须是参数列表中的最后一个参数。
function sum(a: number, ...b: number[]): number {
  let result = a;
  for (var i = 0; i < b.length; i++) {
    result += b[i];
  }
  console.log(result);
  return;
}
let result1 = sum(3, 5);
let result2 = sum(3, 5, 7, 9);
