/**1.type of

  可以判断出'string','number','boolean','undefined','symbol'
  但判断 typeof(null) 时值为 'object'; 判断数组和对象时值均为 'object'
  */
//  https://www.jianshu.com/p/8107d25f54ac

console.log(typeof a); //'undefined'

console.log(typeof true); //'boolean'

console.log(typeof "123"); //'string'

console.log(typeof 123); //'number'

console.log(typeof NaN); //'number'

console.log(typeof null); //'object'

var obj = new String();
console.log(typeof obj); //'object'

var fn = function() {};
console.log(typeof fn); //'function'

console.log(typeof class c {}); //'function'

/**
 * 2. instanceof
 *    原理是 构造函数的 prototype 属性是否出现在对象的原型链中的任何位置
 */

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof

// 定义构造函数
function C() {}
function D() {}

var o = new C();
o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype
o instanceof D; // false，因为 D.prototype 不在 o 的原型链上
o instanceof Object; // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
C.prototype instanceof Object; // true，同上

C.prototype = {};
var o2 = new C();
o2 instanceof C; // true
o instanceof C; // false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为 C.prototype 现在在 o3 的原型链上

/**
 * 3. Object.prototype.toString.call()
 *    常用于判断浏览器内置对象,对于所有基本的数据类型都能进行判断，即使是 null 和 undefined
 */

// https://www.jianshu.com/p/e4237ebb1cf0

Object.toString.call(Array); //"function Array() { [native code] }"
Object.prototype.toString.call(Array); //"[object Function]"

Object.toString(); //"function Object() { [native code] }"
Object.prototype.toString(); //"[object Object]"

/**
 * 实际上`Object.prototype`才是原型链的终点，最终的继承关系时这样的
 * `Object.prototype <-- Function.prototype <-- Function/Object/Array/Date...`
 */

Object.prototype.__proto__ === null; // true
Function.prototype.__proto__ === Object.prototype; // true
Object.__proto__ === Function.prototype; // true

/**
 * 4. Array.isArray() --- 用于判断是否为数组
 */

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));

// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });

// 当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.

var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
var arr = new xArray(1, 2, 3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr); // true
// Considered harmful, because doesn't work though iframes
arr instanceof Array; // false

// Polyfill

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
