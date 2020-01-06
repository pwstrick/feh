var map1 = new Map(),
  map2 = new Map([["name", "strick"], ["age", 28]]);
console.log("可迭代对象1", map1);	//Map(0) {}
console.log("可迭代对象2", map2);	//Map(2) {"name" => "strick", "age" => 28}

var people = new Map();
people.set("name", "strick").set("age", 28);
console.log("set", people);
console.log("get", people.get("name"));	//"strick"
console.log("keys", [...people.keys()]);	//["name", "age"]
console.log("values", [...people.values()]);	//["strick", 28]
console.log("entries", [...people.entries()]);	//[["name", "strick"], ["age", 28]]
/*
  "strick" "name" Map(2) {"name" => "strick", "age" => 28}
  28 "age" Map(2) {"name" => "strick", "age" => 28}
*/
people.forEach(function(value, index, map) {
  console.log(value, index, map);
});

console.log("array", [...people]);

console.log("size", people.size);	//2
people.delete("name")
console.log("has", people.has("name"));	//false
people.clear();
console.log("clear", people.has("age"));	//false


