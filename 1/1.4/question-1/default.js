var obj = { name: "strick" };
Object.defineProperty(obj, "name", {
  writable: false
});
console.log(Object.assign({}, obj));		//{name: "strick"}