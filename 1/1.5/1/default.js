console.log("默认参数");
function func1(name) {
  name = name || "strick";	//ES5的参数默认值
}
function func2(name = "strick") {	//ES6的参数默认值
}

function func(name = "strick") {
  return name;
}
console.log("undefined", func(undefined));	//"strick"
console.log("false", func(false));	//false
console.log("null", func(null));	//null

function func1(name = "strick", age) {
  return name;
}
function func2(name, age = 28) {
  return age;
}
console.log("位置在前", func1(undefined));	//"strick"
console.log("位置在后", func2("strick"));	//28


//默认值
function expression1(name, full = "pw" + name) {
  return full;
}
console.log("表达式1", expression1("strick"));	//"pwstrick"
console.log("表达式2", expression1("freedom"));	//"pwfreedom"

function expression2(name = full, full) {
  return name;
}
//console.log("引用后面的参数", expression2(undefined, "strick"));	//抛出未定义的引用错误

//function restrict1(name = "strick", name) {
//}
//function restrict1(name = "strick", age, age) {
//}
//restrict1();	//Duplicate parameter name not allowed in this context

function restrict2(name = "strick") {
  //let name = "freedom";		//抛出重复声明的语法错误
  //name = "freedom";
}
// function restrict2() {
  // let name = "strick";
// }
// function expression2() {
  // let name = full,
    // full;
// }
// expression2();
restrict2();	//Identifier 'name' has already been declared


let full = "freedom";
function scope1(name = full) {
  return name;
}
let name = "freedom";
function scope1(name = name) {
  return name;
}
console.log("三个作用域", scope1());	//"freedom"
function scope2(name = en) {
  let en = "justify";
  return name;
}
console.log("三个作用域", scope2());	//抛出en未定义的错误

// let name = "freedom";
// function scope1() {
  // let name = name;
// }
// scope1();