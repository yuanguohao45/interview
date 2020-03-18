// 类型转换附带运行时支持，而类型断言对运行时没有影响.类型断言仅由编译器使用，并向编译器提供有关我们希望如何分析代码的提示。

// let empCode: any = 111;
// let employeeCode = <number> code;
// console.log(typeof(employeeCode)); // : number

// TypeScript的as语法是什么

// as是TypeScript中类型断言的附加语法，引入as - 语法的原因是原始语法(<type>)与JSX冲突。

let empCode: any = 111;
// let employeeCode = code as number;
// 当使用带有JSX的TypeScript时，只允许as风格的断言
