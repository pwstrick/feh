//手动赋值和解构赋值
console.log("对比");
var arr = [1, 2],
  obj = { a: 3, b: 4 },
  x, y, a, b;
x = arr[0];
y = arr[1];
a = obj.a;
b = obj.b;
console.log(x, y);
console.log(a, b);

var [x, y] = [1, 2]; //数组解构
var { a, b } = { a: 3, b: 4 }; //对象解构
console.log(x, y);
console.log(a, b);

//通用特性
console.log("通用特性");
//var [x, y];
//var { a, b };

console.log("圆括号");
[x, y] = [1, 2]; //无圆括号的数组解构
console.log(x, y);
({ a, b } = { a: 3, b: 4 }); //有圆括号的对象解构
console.log(a, b);

console.log("解构失败");
[c, d] = [1];
({ e, f } = { e: 3 });
console.log(d); //undefined
console.log(f); //undefined

console.log("数组解构");
[x, y] = [1, 2];
console.log(x, y); //1 2
[y, x] = [1, 2];
console.log("变量交换", x, y); //2 1

var obj = { x, y };
[obj.x, obj.y] = [1, 2];
console.log(obj.x, obj.y); //1 2
[obj.y, obj.x] = [1, 2];
console.log(obj.x, obj.y); //2 1

var x = 1,
  y = 2;
[x, y] = [y, x];	//数组解构

var tmp = x;	//传统做法
x = y;
y = tmp;

console.log(x, y); //2 1

[, , z] = [1, 2, 3];	//省略元素
console.log("选择赋值", z);//3

//[x, y] = NaN;
//[x, y] = undefined;
//[x, y] = null;

[x, ...y] = [1, 2, 3]; //剩余元素
console.log(x); //1
console.log("剩余元素", y); //[2,3]

console.log("对象解构");
({ a, b } = { b: 1, a: 2 });
({ a: a, b: b } = { b: 1, a: 2 });
console.log(a, b); //2 1

({ a: e, b: f } = { b: 5, a: 6 });
console.log("别名", e, f);	//6 5

var obj = { e, f };
({ a: obj.e, b: obj.f } = { b: 5, a: 6 });
console.log(obj.e, obj.f);	//6 5

({ a: e, a: f } = { b: 5, a: 6 });
console.log("两个同名属性", e, f);	//6 6

var obj = { preName: "strick" },
  attr = "Name";
({ ["pre" + attr]: value } = obj);	//属性名是表达式
console.log("计算的属性名", value);	//"strick"


console.log("特性对比");
//默认值
[x, y=2] = [1];
console.log(y);	//2
[x, y=2] = [1, undefined];
console.log(y);	//2
[x, y=2] = [1, null];
console.log(y);	//null

({ a, b=2 } = { a: 1 });
console.log(b);	//2
({ a, b=2 } = { a: 1, b: undefined });
console.log(b);	//2
({ a, b=2 } = { a: 1, b: null });
console.log(b);	//null

({ a, b: digit=2 } = { a: 1 });
console.log(digit);//2

//嵌套解构
[x, [y], z] = [1, [2, 3], 4];
console.log(x, y, z);//1 2 4
({ a: { b: digit } } = { a: { b: 1 } });
console.log(digit);//1
({ a: [b] } = { a: [1] });
console.log(b);//1

console.log("参数解构");
//普通
function func1(info) {
  console.log(info.name);
  console.log(info.age);
}
func1({ name: "strick", age: 29 });
//对象解构
function func2({ name, age }) {
  console.log(name);
  console.log(age);
}
func2({ name: "strick", age: 29 });
//数组解构
function func3(...[name, age]) {
  console.log(name);
  console.log(age);
}
func3("strick", 29);

//Uncaught TypeError: Cannot destructure property `name` of 'undefined' or 'null'
//抛出错误
//func2();
//func3();

//参数默认值
function func4({ name, age } = {}) {
  console.log(name);
  console.log(age);
}
func4();


function func5({ name = "strick" } = {}) {//解构默认值
  console.log(name);
}
function func6({ name } = { name: "freedom" }) {//参数默认值
  console.log(name);
}
console.log("省略参数");
func5(); //"strick"
func6(); //"freedom"

console.log("传undefined");
func5(undefined); //"strick"
func6(undefined); //"freedom"

console.log("传空对象");
func5({}); //"strick"
func6({}); //undefined


//候选真题【2.4】 赋值方法
//[x,y] = [z] = [10,20,30];
//console.log(x, y, z);
//({x,y} = {z} = {x:10,y:20,z:30});
//console.log(x, y, z);
