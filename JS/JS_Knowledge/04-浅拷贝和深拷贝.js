/**
 * 浅拷贝
 * 第一层为深拷贝
 */

Object.assign();
Array.prototype.slice();
// 扩展运算符 ...

/**
 * 深拷贝
 */
JSON.parse(JSON.stringify());

// 递归函数

function cloneObject(obj) {
  var newObj = {}; //如果不是引用类型，直接返回
  if (typeof obj !== "object") {
    return obj;
  }
  //如果是引用类型，遍历属性
  else {
    for (var attr in obj) {
      //如果某个属性还是引用类型，递归调用
      newObj[attr] = cloneObject(obj[attr]);
    }
  }
  return newObj;
}

// https://juejin.im/post/5c45112e6fb9a04a027aa8fe
// https://juejin.im/post/5c20509bf265da611b585bec
// http://www.cxymsg.com/guide/deepclone.html#%E6%B7%B1%E5%85%8B%E9%9A%86

// PS：稀疏数组

// https://www.cnblogs.com/goloving/p/8686780.html

// 1.实现一个对象类型判断函数

const isType = (obj, type) => {
  if (typeof obj !== "object") return false;
  const typeString = Object.prototype.toString.call(obj);
  let flag;
  switch (type) {
    case "Array":
      flag = typeString === "[object Array]";
      break;
    case "Date":
      flag = typeString === "[object Date]";
      break;
    case "RegExp":
      flag = typeString === "[object RegExp]";
      break;
    default:
      flag = false;
  }
  return flag;
};

// 2.提取flags的函数

const getRegExp = re => {
  var flags = "";
  if (re.global) flags += "g";
  if (re.ignoreCase) flags += "i";
  if (re.multiline) flags += "m";
  return flags;
};

// 3.深克隆的实现

/**
 * deep clone
 * @param  {[type]} parent object 需要进行克隆的对象
 * @return {[type]}        深克隆后的对象
 */
const clone = parent => {
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== "object") return parent;

    let child, proto;

    if (isType(parent, "Array")) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, "RegExp")) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, "Date")) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
};

// 4.测试

function person(pname) {
  this.name = pname;
}

const Messi = new person("Messi");

function say() {
  console.log("hi");
}

const oldObj = {
  a: say,
  c: new RegExp("ab+c", "i"),
  d: Messi
};

oldObj.b = oldObj;

const newObj = clone(oldObj);
console.log(newObj.a, oldObj.a); // [Function: say] [Function: say]
console.log(newObj.b, oldObj.b); // { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] } { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] }
console.log(newObj.c, oldObj.c); // /ab+c/i /ab+c/i
console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: person] [Function: person]

// Buffer对象、Promise、Set、Map可能都需要我们做特殊处理，另外对于确保没有循环引用的对象，我们可以省去对循环引用的特殊处理，因为这很消耗时间

// https://www.jianshu.com/p/5e494c42a659

// 在生产环境中最好用lodash的深克隆实现
// https://www.lodashjs.com/docs/lodash.cloneDeep
