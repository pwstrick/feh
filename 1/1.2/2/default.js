// import * as people from "./1.js";	//导入全部
// import { name, age } from "./1.js";	//导入部分
// import { getAge as getMyAge } from "./1.js";//导入部分并设置别名

// console.log("三种导入");
// console.log(people.getName());
// console.log(name);
// console.log(age);
// console.log(getMyAge());

// console.log("只读");
// import { name, setName } from "./1.js";
// //name = "freedom";	//错误
// console.log(name);	//"strick"
// setName("freedom");
// console.log(name);	//"freedom"

console.log("声明提升");
console.log(age);	//28
console.log(getAge());	//28
import { age, getAge } from "./1.js";

import "./jquery.js";
console.log($);