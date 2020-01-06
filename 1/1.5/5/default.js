var func = x => x;
//var func = (x, x) => x;	//Uncaught SyntaxError: Duplicate parameter name not allowed in this context
console.log("原型", func.prototype);	//undefined
//new func();	//Uncaught TypeError: func is not a constructor
var func = x => {
  //console.log("arguments", arguments);	//Uncaught ReferenceError: arguments is not defined
  console.log("this", this);	//window
  //console.log("new.target", new.target);	//Uncaught SyntaxError: new.target expression is not allowed here
};	
func();

console.log("语法");
var arrow1 = (name, age) => {
  return name;
};
console.log("完整的语法", arrow1("strick"));	//"strick"
var arrow2 = (name, age) => name;
console.log("省略花括号", arrow2("strick"));	//"strick"
var arrow3 = (name, age) => ({name: name, age: age});
console.log("对象字面量", arrow3("strick", 28));		//{name: "strick", age: 28}
var arrow4 = name => name;
console.log("无圆括号", arrow4("strick"));	//"strick"
var arrow5 = () => "strick";
console.log("无参数", arrow5());	//"strick"

var arrow6 = ({name, age}) => name + age;
console.log("参数解构", arrow6({name: "strick", age: 28}));	//"strick28"
var arrow7 = (name, ...args) => name + args[0];
console.log("剩余参数", arrow7("strick", 28));		//"strick28"
var arrow8 = (name = "strick") => name;
console.log("默认参数", arrow8("strick"));	//"strick"

var list1 = [1, 2, 3].sort(function(a, b) {
  return a < b;
});
console.log("排序1", list1);
var list2 = [1, 2, 3].sort((a, b) => a < b);
console.log("排序2", list2);

//var operator1 = 0 || () => 2;	//Uncaught SyntaxError: Unexpected token )
var operator2 = 0 || (() => 2);
var operator3 = 0 || (() => 2)();
console.log("运算符2", operator2);	//() => 2
console.log("运算符3", operator3);	//2

console.log("this");
function people() {
  var self = this;
  this.age = 28;
  setTimeout(function() {
    console.log("people this", this.age); //undefined
	console.log("self", self.age); //28
  }, 100);
}
new people();

function animal() {
  this.age = 28;
  setTimeout((() => {
    console.log("animal this", this.age); //28
  }).call(window), 100);
}
new animal();





