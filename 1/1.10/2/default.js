//当第一个参数不是对象时的区别
//getPrototypeOf()
var proto = Object.getPrototypeOf("strick");    //String对象
console.log("getPrototypeOf", proto === String.prototype);    //true
//Reflect.getPrototypeOf("strick");  //TypeError: Reflect.getPrototypeOf called on non-object at Object.getPrototypeOf

//isExtensible()
console.log("isExtensible", Object.isExtensible("strick")); // false
//Reflect.isExtensible("strick");   // 报错

//setPrototypeOf()
console.log("setPrototypeOf", Object.setPrototypeOf("strick", {}));     //"strick"
//Reflect.setPrototypeOf("strick", {});     //报错

//preventExtensions()
console.log("preventExtensions", Object.preventExtensions("strick"));     //"strick"
//Reflect.preventExtensions("strick");     //报错



//返回值不同
var obj = {};
var result = Object.setPrototypeOf(obj, String);
console.log("setPrototypeOf", result === obj);  //true
console.log("setPrototypeOf", Reflect.setPrototypeOf(obj, String));             //true



//运算符作为方法
function func() { }
var result1 = new func();
//相当于
var result2 = Reflect.construct(func, []);
console.log("construct", result1);
console.log("construct", result2);

var people = {
    name: "strick"
};
console.log("has", "name" in people);
//相当于
console.log("has", Reflect.has(people, "name"));

console.log("deleteProperty", delete people["name"]);
console.log(people);
//相当于
console.log("deleteProperty", Reflect.deleteProperty(people, "name"));



//缩短语法
var result = Function.prototype.apply.call(Math.ceil, null, [2.5]); //3
console.log("apply", result);
var result = Reflect.apply(Math.ceil, null, [2.5]); 	//3
console.log("apply", result);