var weak = new WeakMap(),
  arr = [1];
weak.set(arr, 10);
console.log("weak", weak);	//WeakMap {Array(1) => 10}
console.log("get", weak.get(arr));	//10
console.log("has", weak.has(arr));	//true
weak.delete(arr);
console.log("delete", weak);	//WeakMap {}
console.log("delete", weak.has(arr));	//false

//私有数据
var people = (function() {
  var privates = new WeakMap();
  function People() {
    privates.set(this, {});	//初始化私有数据
  }
  People.prototype.setName = function(name) {
    privates.get(this).name = name;	//写入
  };
  People.prototype.getName = function() {
    return privates.get(this).name;	//读取
  };
  return new People();
})();
people.setName("strick");
console.log("私有数据", people.getName());	//"strick"

