console.log("Object.is()");
console.log(NaN === NaN);	//false
console.log(Object.is(NaN, NaN));	//true
console.log(+0 === -0);	//true
console.log(Object.is(+0, -0));	//false

console.log("Object.assign()");
var obj1 = { name: "strick" },
  obj2 = Object.create(obj1);	//name是继承属性
obj2.age = 28;	//age是不可枚举的属性
Object.defineProperty(obj2, "age", {
  enumerable: false
});
obj2.school = "university";	//school是可枚举的自有属性
var result = Object.assign({}, obj2);
console.log(result);	//{school: "university"}

var obj1 = { name: "strick" },
  obj2 = { name: "freedom" };
var result = Object.assign({}, obj1, obj2);
console.log(result);	//{name: "freedom"}

var obj1 = { man: { name: "strick" } },
  obj2 = Object.assign({}, obj1);
obj1.man.name = "freedom";
console.log(obj2); //{man: {name: "freedom"}}

var obj1 = { [Symbol("name")]: "strick" },
  obj2 = Object.assign({}, obj1);
console.log(obj2);	//{Symbol(name): "strick"}


var obj = Object.assign({}, 1, "a", true, undefined, null);
console.log(obj);	//{0: "a"}


var obj = {
  get name() {
    return "strick";
  }
};
var result = Object.assign({}, obj);
console.log(result);	//{name: "strick"}

console.log("重复属性");
var obj = {
  name: "strick",
  name: "freedom"
};
console.log(obj.name);  //"freedom"

console.log("枚举顺序");
var obj = {
  c: 1,
  1: 2,
  a: 3,
  "0": 4,
  [Symbol("x")]: 5,
  [Symbol("y")]: 6
};
// Object.defineProperty(obj, "b", {
//   enumerable: false
// });

var properties = [];
for(var key in obj) {
  if(obj.hasOwnProperty(key)) { //过滤掉继承属性
    properties.push(key);
  }
}
console.log("for-in", properties);  //["0", "1", "c", "a"]
console.log("JSON.stringify()", JSON.stringify(obj)); //{"0":4,"1":2,"c":1,"a":3}
console.log("Object.getOwnPropertyNames()", Object.getOwnPropertyNames(obj)); //["0", "1", "c", "a"]
console.log("Object.keys()", Object.keys(obj));  //["0", "1", "c", "a"]
console.log("Object.getOwnPropertySymbols()", Object.getOwnPropertySymbols(obj)); //[Symbol(x), Symbol(y)]
console.log("Object.assign()", Object.assign({}, obj));//{0: 4, 1: 2, c: 1, a: 3, Symbol(x): 5, Symbol(y): 6}