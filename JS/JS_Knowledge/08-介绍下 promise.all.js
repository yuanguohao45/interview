// Promise.all()方法将多个Promise实例包装成一个Promise对象（p），接受一个数组（p1,p2,p3）作为参数，数组中不一定需要都是Promise对象，但是一定具有Iterator接口，如果不是的话，就会调用Promise.resolve将其转化为Promise对象之后再进行处理。
// 使用Promise.all()生成的Promise对象（p）的状态是由数组中的Promise对象（p1,p2,p3）决定的。

// 1.如果所有的Promise对象（p1,p2,p3）都变成fullfilled状态的话，生成的Promise对象（p）也会变成fullfilled状态，
// p1,p2,p3三个Promise对象产生的结果会组成一个数组返回给传递给p的回调函数。

// 2.如果p1,p2,p3中有一个Promise对象变为rejected状态的话，p也会变成rejected状态，第一个被rejected的对象的返回值会传递给p的回调函数。
// Promise.all()方法生成的Promise对象也会有一个catch方法来捕获错误处理，但是如果数组中的Promise对象变成rejected状态时，
// 并且这个对象还定义了catch的方法，那么rejected的对象会执行自己的catch方法。
// 并且返回一个状态为fullfilled的Promise对象，Promise.all()生成的对象会接受这个Promise对象，不会返回rejected状态。

var p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 2000);
});
var p2 = new Promise(function(resolve, reject) {
  API.fetchData().then(
    res => {
      resolve(res);
    },
    () => {
      resolve(null); // 防止不关键的数据加载失败，影响页面显示
    }
  );
});
var p3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(3);
  }, 2000);
});
Promise.all([p1, p2, p3])
  .then(function(results) {
    console.log("success");
    console.log(results);
  })
  .catch(function(r) {
    console.log("err");
    console.log(r);
  });

// https://www.jianshu.com/p/d53158ec83d6
