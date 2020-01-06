//声明式编程
var arr = [1, 2, 3],
  length = arr.length,
  doubles = [];
for (let i = 0; i < length; i++) {
  doubles.push(arr[i] * 2);
}
console.log("声明式编程", doubles);	//[1, 4, 9]

var arr = [1, 2, 3].map(value => value * 2);
console.log("声明式编程", arr);	//[1, 4, 9]

//函数优先
var arr = [4, 1, 5, 2, 3].sort((a, b) => a > b).filter(value => value > 2);
console.log("函数优先", arr); 	//[3, 4, 5]

//纯函数
var digit = 1;
function increment() {
  digit += Math.random();
  return digit;
}
increment();
console.log("副作用", digit);

function add(a, b) {
  return a + b;
}


var digits = [1, 2, 3];
function addDigit1(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    arr[i] += 1;
  }
  return arr;
}
addDigit1(digits);
console.log("不可变", digits);   //[2, 3, 4]

var digits = [1, 2, 3];
function addDigit2(arr) {
  return arr.map(value => value + 1);
}
addDigit2(digits);
console.log("不可变", digits);   //[1, 2, 3]

//链式写法
var arr = [1, 2, 3, 4, 5].filter(value => value > 2).map(value => value * 2);
console.log("链式写法", arr);   //[6, 8, 10]