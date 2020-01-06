var p = new Promise(function(resolve) {
  console.log(1);
  resolve();
});
p.then(function() {
  console.log(2);
}).then(function() {
  console.log(3);
});
console.log(4);