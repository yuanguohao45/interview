// 主要考察宏任务和微任务，搭配promise，询问一些输出的顺序

// 原理：async 和 await 用了同步的方式去做异步，async 定义的函数的返回值都是 promise，await 后面的函数会先执行一遍，然后就会跳出整个 async 函数来执行后面js栈的代码

// https://www.jianshu.com/p/b4fd76c61dc9

function fn() {
  return new Promise(resolve => {
    console.log(1);
  });
}
async function f1() {
  await fn();
  console.log(2);
}
f1();
console.log(3);
//1
//3

function fn() {
  return new Promise(resolve => {
    console.log(1);
    resolve();
  });
}
async function f1() {
  await fn();
  console.log(2);
}
f1();
console.log(3);
//1
//3
//2
