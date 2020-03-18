// 如果子类(子类)具有与父类中声明的相同的方法，则称为方法覆盖。换句话说，在派生类或子类中重新定义基类方法。

// 方法重写的规则

// 该方法必须具有与父类相同的名称
// 该方法必须具有与父类相同的参数。
// 必须有一个IS-A关系(继承)。

class Printer {
  doPrint(): any {
    console.log("Called Child class.");
  }
}

class NewPrinter extends Printer {
  doPrint(): any {
    super.doPrint();
    console.log("Called Child class.");
  }
  doInkJetPrint(): any {
    console.log("Called doInkJetPrint().");
  }
}
let printer: new () => NewPrinter;
// printer.doPrint();
