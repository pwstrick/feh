//扩展运算符
console.log("扩展运算符");
console.log("替代apply()");
let arr = [1, 0, 2],
  min;
min = Math.min(1, 0, 2); //一组参数的调用方式
console.log("min", min);
min = Math.min.apply(undefined, arr); //利用apply()间接调用
console.log("min", min);
min = Math.min(...arr);
console.log("min", min); //0

console.log("传递实参");
let date = [2018, 6, 6],
  result;
result = new Date(date[0], date[1], date[2]); //2018-7-6
console.log(result);
result = new Date(...date); //2018-7-6
console.log(result);
let time = [10, 28];
result = new Date(...date, ...time, 45); //2018-7-6 10:28:45
console.log(result);

console.log("处理数组");
let arr1 = [1, 2, 3],
  arr2,
  arr3;
arr2 = arr1.slice(); //复制数组
//arr2.push(4);
arr3 = arr2.concat(arr1); //合并数组
//arr3.push(10);
console.log("arr1", arr1); //[1, 2, 3]
console.log("arr2", arr2); //[1, 2, 3]
console.log("arr3", arr3); //[1, 2, 3, 1, 2, 3]

arr2 = [...arr1]; //复制数组
arr3 = [...arr1, ...arr2]; //合并数组
console.log("arr1", arr1); //[1, 2, 3]
console.log("arr2", arr2); //[1, 2, 3]
console.log("arr3", arr3); //[1, 2, 3, 1, 2, 3]

console.log("处理字符串");
let str = "strick";
result = str.split("");
console.log(result); //["s", "t", "r", "i", "c", "k"]
result = [...str];
console.log(result); //["s", "t", "r", "i", "c", "k"]
//[].slice.apply();


console.log("剩余参数");
function func(name, ...args) {
  console.log(name);
  console.log(args[0]);
}
func("strick");	//首先输出"strick"，然后输出undefined
func("freedom", 29);	//首先输出"freedom"，然后输出29
console.log("长度", func.length);//1

function destructuring(name, ...[age]) {
  console.log(name);
  console.log(age);
}
destructuring("jane", 28);	//首先输出"jane"，然后输出28

//第一点限制
//function restrict1(...args, name) {
  //抛出语法错误
//}
//function func3(...names, ...schools) {
	//抛出语法错误
//}

//第二点限制
//var obj = {
//  set age(...value) {
//    this._age = value;
//  }
//};
