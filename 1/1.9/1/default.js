//function(resolve, reject) { }
setTimeout(() => {
  var reason = "成功执行";
  setTimeout(() => {
    console.log(reason);
  }, 500);
}, 500);


var promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("成功执行");
  }, 500);
});
promise.then(function(value) {
  setTimeout(() => {
    console.log(value);
  }, 500);
});

// var chain = new Promise(function(resolve, reject) {
  // reject("error");
// });
// chain.then(null, function(reason) {
  // console.log(reason);
  // return "end";
// })
// .then(function(value) {
  // console.log(value);
// });

//状态与返回值有关
var chain = new Promise(function(resolve, reject) {
  resolve();
});
chain.then(function(value) {
  return new Promise(function(resolve) {
	 resolve("fulfilled");
  });
  //return "end";
  return Promise.resolve("fulfilled");
})
.then(function(value) {
  console.log(value);
  return Promise.reject("rejected");
})
.catch(function(reason) {
  console.log(reason);
});

let tha = {
  then(resolve, reject) {
    reject("thenable");
  }
};
Promise.resolve(tha)
.catch(function(reason) {
  console.log(reason);		//thenable
}).then(function() {
  console.log("end");
});


var error1 = new Promise(function(resolve, reject) {
  throw "error info";
});
error1.catch(function(reason) {
  console.log(reason);		//"error info"
});

var error2 = new Promise(function(resolve, reject) {
  resolve();
  throw "error info";
});
error2.catch(function(reason) {
  console.log(reason);
});



// .then(function() {
  // throw "意外终止";
// }).catch(function(reason) {
  // console.log(reason);
// });






