console.log("模块路径");
// let path = "./1.js";
// export * from path;				//变量
// export * from "./" + "1.js";	//表达式

// import * as people from path;		//变量
// import * as people from "./" + "1.js";	//表达式

console.log("作用域");
//函数作用域
// function getName() {
  // export * from "./1.js";
  // import * as people from "./1.js";
// }
//块级作用域
// if(true) {
  // export * from "./1.js";
  // import * as people from "./1.js";
// }

console.log("标识符");
// export { name, name } from "./1.js";
// import { name, name } from "./1.js";