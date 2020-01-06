var set1 = new Set(),
  set2 = new Set("abc")
  set3 = new Set([+0, -0, NaN, NaN]);
console.log("可迭代对象1", set1);	//Set(0) {}
console.log("可迭代对象2", set2);	//Set(3) {"a", "b", "c"}
console.log("可迭代对象3", set3);	//Set(3) {1, 2, 3}

var set = new Set();
set.add(1).add("a");
console.log("写入", set);	//Set(2) {1, "a"}
console.log("数量", set.size);	//2

set.delete(1);
console.log("移除", set);	//Set(1) {"a"}
console.log("判断1", set.has(1));	//false
console.log("判断a", set.has("a"));	//true
set.clear();
console.log("清空", set);	//Set(0) {}
console.log("判断1", set.has(1));	//false
console.log("判断a", set.has("a"));	//false

var digits = new Set();
digits.add(3).add(2).add(1);
console.log("keys", [...digits.keys()]);	//[3, 2, 1]
console.log("values", [...digits.values()]);	//[3, 2, 1]
console.log("entries", [...digits.entries()]);	//[[3, 3], [2, 2], [1, 1]]

/*
  3 3 Set(3) {3, 2, 1}
  2 2 Set(3) {3, 2, 1}
  1 1 Set(3) {3, 2, 1} 
*/
digits.forEach(function(value1, value2, set) {
  console.log(value1, value2, set);
});

var duplicate = new Set([1, 1, {}, undefined]);
console.log("转换1", Array.from(duplicate));	//[1, {}, undefined]
console.log("转换2", [...duplicate]);	//[1, {}, undefined]


