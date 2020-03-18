// 提前执行，初始化 resize 事件不会执行
setRem();
// 原始配置
function setRem() {
  let doc = document.documentElement;
  let width = doc.getBoundingClientRect().width;
  let rem = width / 75;
  doc.style.fontSize = rem + "px";
}
// 监听窗口变化
addEventListener("resize", setRem);
