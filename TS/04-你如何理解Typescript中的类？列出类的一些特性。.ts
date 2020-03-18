// TypeScript是一种面向对象的JavaScript语言，支持OOP编程特性，比如类、接口等。与Java一样，类是用于创建可重用组件的基本实体。它是一组具有公共属性的对象。类是创建对象的模板或蓝图。它是一个逻辑实体。“class ”关键字用于在Typescript中声明一个类。

class Student {
  studCode: number;
  studName: string;
  constructor(code: number, name: string) {
    this.studName = name;
    this.studCode = code;
  }
  getGrade(): string {
    return "A+";
  }
}

// 类的特征是-

// 继承
// 封装
// 多态性
// 抽象

// TypeScript支持以下面向对象的术语。

// 模块
// 类
// 接口
// 继承
// 数据类型
// 成员函数

// super()函数的作用是: 从子类中调用父类或基类构造函数。

// 继承
class Shape {
  Area: number;
  constructor(area: number) {
    this.Area = area;
  }
}
class Circle extends Shape {
  display(): void {
    console.log("圆的面积: " + this.Area);
  }
}
var obj = new Circle(320);
obj.display();

// 模块
module module_name {
  class xyz {
    sum(x, y) {
      return x + y;
    }
  }
}

// 用于创建名称空间的语法

// namespace <namespace_name> {
//            export interface I1 { }
//            export class c1{ }
// }
