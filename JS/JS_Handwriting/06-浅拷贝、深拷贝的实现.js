// 浅拷贝：

// 1. ...实现
let copy1 = { ...{ x: 1 } };

// 2. Object.assign实现
let copy2 = Object.assign({}, { x: 1 });
// 深拷贝：

// 1. JOSN.stringify()/JSON.parse()
// 缺点：拷贝对象包含 正则表达式，函数，或者undefined等值会失败
let obj = { a: 1, b: { x: 3 } };
JSON.parse(JSON.stringify(obj));

// 2. 递归拷贝
function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return copy;
}
