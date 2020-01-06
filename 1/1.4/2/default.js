console.log("静态方法");
console.log("of()", Array.of(2));	//[2]
console.log("Array()", Array(2));	//[ , ]

var obj = {0: 1, 1: 2, 2: 3, length: 3};
console.log("call()", [].slice.call(obj));	//传统转换方式
console.log("from()", Array.from(obj));		//新的转换方式
var result = Array.from(obj, function(value, index) {
  return value * 2;
});
console.log("from()", result);		//[2, 4, 6]

console.log("原型方法");
var arr1 = [1, 2, 3, 4, 5];
console.log("fill()", arr1.fill(6, 0, 2));		//[6, 6, 3, 4, 5]
console.log("fill()", arr1.fill(7, 2, -1));	//[6, 6, 7, 7, 5]

var arr2 = [1, 2, 3, 4, 5];
console.log("copyWithin()", arr2.copyWithin(2, 0, 2));		//[1, 2, 1, 2, 5]
console.log("copyWithin()", arr2.copyWithin(2, 0, -2));	//[1, 2, 1, 2, 1]

var arr = [1, 2, 3, 4, 5];
console.log("indexOf()", arr.indexOf(1));		//0
console.log("indexOf()", arr.indexOf("1"));	//-1

var result = arr.find(function(value, index, array) {
  return value == "1";
});
console.log("find()", result);		//1
var result = arr.findIndex(function(value, index, array) {
  return value == "1";
});
console.log("findIndex()", result);	//0

var arr = ["a", "b", "c"];
console.log("keys()", [...arr.keys()]);			//[0, 1, 2]
console.log("values()", [...arr.values()]);		//["a", "b", "c"]
console.log("entries()", [...arr.entries()]);	//[[0, "a"], [1, "b"], [2, "c"]]