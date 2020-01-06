var p = new Promise(function(resolve) {
  resolve(Promise.reject("error"));
});
console.log("p1", p);	//rejected
p.then(function(value) {
  console.log(value);
}, function(reason) {
  console.log(reason);
});

var p2 = new Promise(function(resolve) {
  resolve(Promise.race([]));
});
console.log("p2", p2);	//pending

var p3 = new Promise(function(resolve) {
  resolve();
});
console.log("p3", p3);	//fulfilled