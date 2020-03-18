// class 的写法只是语法糖，和之前 prototype 差不多，但还是有细微差别的，下面看看：

// 1. 严格模式
// 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。

// 2. 不存在提升
// 类不存在变量提升（hoist），这一点与 ES5 完全不同。

// 复制
// new Foo(); // ReferenceError
// class Foo {}
// 3. 方法默认是不可枚举的
// ES6 中的 class，它的方法（包括静态方法和实例方法）默认是不可枚举的，而构造函数默认是可枚举的。细想一下，这其实是个优化，让你在遍历时候，不需要再判断 hasOwnProperty 了

// 4. class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有[[construct]]，不能使用 new 来调用。
// 5. class 必须使用 new 调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用 new 也可以执行。
// 6. ES5 和 ES6 子类 this 生成顺序不同
// ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类实例。ES6 的继承先 生成父类实例，再调用子类的构造函数修饰父类实例。这个差别使得 ES6 可以继承内置对象。

// 7. ES6可以继承静态方法，而构造函数不能

// https://blog.csdn.net/qq_41945935/article/details/90608614

function Fn1() {
  this.fn1 = "fn1";
}
function Fn2() {
  this.fn2 = "fn2";
}
function Fn3() {
  this.fn3 = "fn3";
}
// Fn2()继承Fn1()
Fn2.prototype.__proto__ = new Fn1();
// Fn3()继承Fn2()
Fn3.prototype.__proto__ = new Fn2();

class Fn1 {
  constructor() {
    this.fn1 = "fn1";
  }
}

class Fn2 extends Fn1 {
  constructor() {
    super();
    this.fn2 = "fn2";
  }
}

class Fn3 extends Fn2 {
  constructor() {
    super();
    this.fn3 = "fn3";
  }
}
