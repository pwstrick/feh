let tha = {
  then(resolve, reject) {
    resolve("thenable");
  }
};
//空
Promise.resolve().then(function(value) {
  console.log("resolve", value);	//undefined
});
//非thenable
Promise.resolve("string").then(function(value) {
  console.log("resolve", value);	//"string"
});
//thenable
Promise.resolve(tha).then(function(value) {
  console.log("resolve", value);	//"thenable"
});
//Promise
Promise.resolve(new Promise(function(resolve) {
  resolve("Promise");
})).then(function(value) {
  console.log("resolve", value);	//"Promise"
});

//拒绝状态的Promise
// var p = Promise.reject(42);
// console.log(p === Promise.resolve(p));
// console.log(Promise.resolve(p));

//reject()
Promise.reject("rejected").catch(function (reason) {
  console.log("reject", reason);  //"rejected"
});
var p = Promise.resolve();
Promise.reject(p).catch(function (reason) {
  console.log("reject", reason === p);  //true
});

//Promise.all()
// var p1 = Promise.resolve(200),
  // p2 = "fulfilled";
// var resolved = Promise.all([p1, p2]);
// console.log("all-resolve", resolved);     //resolved Promise
// resolved.then(function (value) {
  // console.log("all-resolve", value);      //[200, "fulfilled"]
// });

// var p1 = Promise.reject("error"),
  // p2 = "fulfilled";
// var rejected = Promise.all([p1, p2]);
// console.log("all-reject", rejected);      //rejected Promise
// rejected.catch(function (reason) {
  // console.log("all-reject", reason);      //"error"
// });

//Promise.race()
var handled = Promise.race([]);
console.log("race", handled);
var p1 = new Promise(function(resolve) {
  setTimeout(() => {
    resolve("fulfilled");
  }, 200);
});
var p2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject("rejected");
  }, 100);
});
var handled = Promise.race([p1, p2]);
console.log("race", handled);
handled.catch(function (reason) {
  console.log("race", reason);      //"rejected"
});




