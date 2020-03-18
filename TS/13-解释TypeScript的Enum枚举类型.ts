// 枚举或枚举是一种数据类型，允许我们定义一组命名常量。使用枚举可以更容易地记录意图，或者创建一组不同的案例。它是相关值的集合，可以是数值或字符串值。

enum Gender {
  Male,
  Female,
  Other
}
console.log(Gender.Female); // : 1
// 我们还可以通过enum值的number值来访问它
console.log(Gender[1]); // : Female
