function* generator() {
  var count = 0;
  while (count < 2)
	yield count++;
  return count;
}
var iterator = generator();
console.log("生成器", iterator);
// console.log("next", iterator.next());	//{value: 0, done: false}
// console.log("next", iterator.next());	//{value: 1, done: false}
// console.log("next", iterator.next());	//{value: 2, done: true}

/********************
  0
  1
********************/
for(var step of iterator) {
  console.log("next", step);
}

function* calculate() {
  let x = yield 1;
  let y = yield x + 2;
  return y;
}
var iterator = calculate();
console.log("calculate", iterator.next());	//{value: 1, done: false}
console.log("calculate", iterator.next(10));	//{value: 12, done: false}
//console.log("calculate", iterator.next());	//{value: NaN, done: false}

function* error() {
  function inner() {
    //yield 1;
  }
}

function* stop() {
  let x = yield 1;
  let y = yield x + 2;
  return y;
}
var iterator = stop();
console.log("stop", iterator.next());	//{value: 1, done: false}
console.log("stop", iterator.return(10));	//{value: 10, done: true}
console.log("stop", iterator.next());	//{value: undefined, done: true}


function* especial() {
  var count = 1;
  try {
    yield count;
  } catch (e) {
    count = 2;
    console.log(e);		//"inner"
  }
  yield count + 3;
}
var iterator = especial();
console.log("especial1", iterator.next());	//{value: 1, done: false}
try {
  console.log("especial2", iterator.throw("inner"));	//{value: 5, done: false}
  console.log("especial3", iterator.next());	//{value: undefined, done: true}
  console.log("especial4", iterator.throw("outer"));
} catch (e) {
  console.log(e);	//"outer"
}

function* delegation() {
  yield* ["a", "b"];
  var result = yield* generator();
  console.log(result);	//2
}
var iterator = delegation();
console.log("delegation", iterator.next());	//{value: "a", done: false}
console.log("delegation", iterator.next());	//{value: "b", done: false}
console.log("delegation", iterator.next());	//{value: 0, done: false}
console.log("delegation", iterator.next());	//{value: 1, done: false}
console.log("delegation", iterator.next());	//{value: undefined, done: true}

function fetch1(callback) {
  $.getJSON("server.php", {}, function(json) {
    callback.call(this, json);
  });
}
function asyn1() {
  fetch1(function(json) {
    console.log("asyn", json);	//{code: 200, msg: "操作成功"}
  });
}
asyn1();

function fetch2() {
  $.getJSON("server.php", {}, function(json) {
    gen.next(json);
  });
}
function* asyn2() {
  var result = yield fetch2();
  console.log("asyn", result);	//{code: 200, msg: "操作成功"}
}
var gen = asyn2();
gen.next();	//{value: undefined, done: false}
