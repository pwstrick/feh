console.log("name属性");
var func = new Function("a", "b", "return a+b;");
console.log("Function构造器创建函数", func.name);	//"anonymous"
var expression1 = function() { };
console.log("函数表达式1", expression1.name);	//"expression1"
var expression2 = function named() { };
console.log("函数表达式2", expression2.name);	//"named"
function age() { }
console.log("bind()", age.bind(this).name);	//"bound age"
var obj = {
  get age() { },
  set age(value) { }
};
var descriptor = Object.getOwnPropertyDescriptor(obj, "age"); 
console.log("读取方法", descriptor.get.name);	//"get age"
console.log("写入方法", descriptor.set.name);	//"set age"

var sym = Symbol("age"),
  obj = {
    [sym]: function() {}
  };
console.log("Symbol", obj[sym].name);	//"[age]"



console.log("length属性");
var len = (function rest(name, ...args){ }).length;
console.log("剩余参数", len);	//1
len = (function rest(name, age = 28){ }).length;
console.log("默认参数", len);	//1
len = (function rest(name, age = 28, school){ }).length;
console.log("默认参数", len);	//1