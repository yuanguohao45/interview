// 通过使用一个缓冲检查，我们可以检查空和未定义:

// if (x == null) {
// }
// 如果我们使用严格的检查，它将总是对设置为null的值为真，而对未定义的变量不为真。

// 例子

var a: number;
var b: number = null;
function check(x, name) {
  if (x == null) {
    console.log(name + " == null");
  }
  if (x === null) {
    console.log(name + " === null");
  }
  if (typeof x === "undefined") {
    console.log(name + " is undefined");
  }
}
check(a, "a");
check(b, "b");
// 输出

"a == null";
"a is undefined";
"b == null";
"b === null";
