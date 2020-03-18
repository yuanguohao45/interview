// function Demo(arg1: number, arg2? :number) {
// }因此，arg1总是必需的，而arg2是一个可选参数

// 注意: 可选参数必须遵循要求的参数。如果我们想让arg1成为可选的，而不是arg2，那么我们需要改变顺序，arg1必须放在arg2之后。

function Demo(arg2: number, arg1?: number) {}
