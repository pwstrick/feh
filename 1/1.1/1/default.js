//声明不再提升
console.log("声明不再提升");
console.log(outer); //undefined
//console.log(inner); //抛出未定义的引用错误

{
  console.log(outer); //undefined
  //console.log(inner); //抛出未定义的引用错误
  var outer = true;
  let inner = true;
  console.log(outer); //true
  console.log(inner); //true
}

console.log(outer); //true
//console.log(inner); //抛出未定义的引用错误

//声明不再重复
console.log("声明不再重复");
var duplicate;
let repeat;

var duplicate; //var声明的变量可重复声明
//let duplicate;//抛出重复声明的语法错误
//let repeat;	//抛出重复声明的语法错误
{
  let repeat; //不同作用域，可正常声明
}

//全局作用域
console.log("全局作用域");
//console.log(global);
//第一组
var global = true;
console.log(window.global);	//true
let whole = true;
console.log(window.whole);	//undefined

//第二组
//var Math = true;
//console.log(window.Math);	//true
let Math = true;
console.log(window.Math);	//Math对象

//const的三种特性
console.log("const的三种特性");
console.log("声明不再提升");
console.log(outer2); //undefined
//console.log(inner2); //抛出未定义的引用错误

{
  console.log(outer2); //undefined
  //console.log(inner2); //抛出未定义的引用错误
  var outer2 = true;
  const inner2 = true;
  console.log(outer2); //true
  console.log(inner2); //true
}

console.log(outer2); //true
//console.log(inner2); //抛出未定义的引用错误

console.log("声明不再重复");
var duplicate2 = true;
const repeat2 = true;

//const duplicate2 = false;//抛出重复声明的语法错误
//const repeat2 = false;	//抛出重复声明的语法错误
{
  const repeat2 = false; //不同作用域，可正常声明
}

console.log("全局作用域");
//console.log(global);
//第一组
var global2 = true;
console.log(window.global2);	//true
const whole2 = true;
console.log(window.whole2);	//undefined

//第二组
//var Date = true;
//console.log(window.Date);	//true
const Date = true;
console.log(window.Date);	//Math对象

console.log("常量初始化");
//const number;	//抛出未初始化的语法错误
const digit = 10;
//digit = 20;		//抛出赋值给常量的类型错误

console.log("引用类型的常量");
const obj = {};
obj.name = "strick";
obj.age = function() {
  return 29;
};
console.log(obj);


console.log("循环中的let和const");
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}

for (var i = 0; i < 3; i++) {
  (function(n) {
    setTimeout(function() {
      console.log(n);
    }, 0);
  })(i);
}

// for (const i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 0);
// }

var author = {
  name: "strick",
  age: 29
};
for (const key in author) {
  console.log(key);
}


