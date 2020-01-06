// import {name, getName, people} from "./1.js";
// console.log("第一种命名导出");
// console.log(name);
// console.log(getName());
// console.log(new people().getName());

// import {age, getAge} from "./1.js";
// import {myAge, getMyAge} from "./1.js";
// console.log("第二种命名导出");
// console.log(age);
// console.log(getAge());
// console.log(myAge);
// console.log(getMyAge());

console.log("第三种模块导出");
import {name, age, getMyAge} from "./2.js";
console.log(name);
console.log(age);
console.log(getMyAge());