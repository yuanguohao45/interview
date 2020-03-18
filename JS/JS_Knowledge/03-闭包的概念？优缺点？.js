/**
 * 闭包的概念：闭包就是能读取其他函数内部变量的函数。

 * 优点：

 * 避免全局变量的污染
 * 希望一个变量长期存储在内存中（缓存变量）
 * 
 * 缺点：

 * 内存泄露（消耗）
 * 常驻内存，增加内存使用量
 */

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures

function init() {
  var name = "Mozilla"; // name 是一个被 init 创建的局部变量
  function displayName() {
    // displayName() 是内部函数,一个闭包
    alert(name); // 使用了父函数中声明的变量
  }
  displayName();
}
init();

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// 在页面上添加一些可以调整字号的按钮

{
  /* <a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>  */
}

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

// 用闭包模拟私有方法--模块模式
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(Counter.value()); /* logs 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* logs 2 */
Counter.decrement();
console.log(Counter.value()); /* logs 1 */

// 独立性--维护自己词法作用域内的变量

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */

// 在循环中创建闭包：一个常见错误

{
  /* <p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p> */
}

function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    };
  }
}

setupHelp();

// 解决方案一：函数工厂---创建更多的闭包

function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();

// 解决方案二：匿名闭包

function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function() {
        showHelp(item.help);
      };
    })(); // 马上把当前循环项的item与事件回调相关联起来
  }
}

setupHelp();

// 解决方案三：let 关键词

function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    };
  }
}

setupHelp();

// 性能考量

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}

// 闭包改进
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};

// 不建议重新定义原型--改进

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};

// 继承的原型可以为所有对象共享，不必在每一次创建对象时定义方法
