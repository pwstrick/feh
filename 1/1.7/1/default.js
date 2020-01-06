function createIterator(items) {
  var index = 0;
  return {
    next() {
      var done = index >= items.length;
      return { value: items[index++], done: done };
    }
  };
}
var	iterator = createIterator(["a", "b"]);
console.log("第一次迭代", iterator.next());	//{value: "a", done: false}
console.log("第二次迭代", iterator.next());	//{value: "b", done: false}
console.log("第三次迭代", iterator.next());	//{value: undefined, done: true}

var arr = ["a", "b"],
  iterator = arr[Symbol.iterator]();
console.log("数组第一次迭代", iterator.next());	//{value: "a", done: false}
console.log("数组第二次迭代", iterator.next());	//{value: "b", done: false}
console.log("数组第三次迭代", iterator.next());	//{value: undefined, done: true}

var set = new Set(["strick", 28]),
  map = new Map([["name", "strick"], ["age", 28]]);
/********************
  "strick"
  28
********************/
for (var value of set) {
  console.log(value);
}
/********************
  "name" "strick"
  "age" 28
********************/
for (var [key, value] of map) {
  console.log(key, value);
}

var str = "向𠮳";	//str.length的值为3
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}
for (var value of str) {
  console.log(value);
}

var iterable = {
  items: ["a", "b"],
  index: 0,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    var done = this.index >= this.items.length;
    return { value: this.items[this.index++], done: done };
  },
  return() {
    console.log("return");
    return { value: undefined, done: true };
  }
};

// function createIterable(items) {
  // var index = 0;
  // return {
    // [Symbol.iterator]() { return this },
    // next() {
      // var done = index >= items.length;
      // return { value: items[index++], done: done };
    // },
	// return() {
      // console.log("return");
      // return { value: undefined, done: true };
    // },
	// throw() {
      // console.log("throw");
      // return { value: undefined, done: true };
    // }
  // };
// }
// var	iterable = createIterable(["a", "b"]);
console.log("iterable第一次迭代", iterable.next());	//{value: "a", done: false}
console.log("iterable第二次迭代", iterable.next());	//{value: "b", done: false}
console.log("iterable第三次迭代", iterable.next());	//{value: undefined, done: true}
	
for (var value of iterable) {
  break;
  //throw new Error();
}
for (var value of iterable) {
  try {
    throw new Error();
  } catch (e) {}
}




