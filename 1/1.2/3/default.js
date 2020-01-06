// import name from "./1.js";
// import getName from "./1.js";
// import { default as getName } from "./1.js";
console.log("默认导出");
// console.log(name);
// console.log(getName());


console.log("默认导入");
// import name from "./1.js";	//写法一
import name, { age } from "./1.js";//写法二
// import name, * as people from "./1.js";//写法三
import { default as myName } from "./1.js";//写法四

console.log(name);
console.log(myName);