var map = new Map(),
  obj = {};
map.set(null, 1);
map.set(undefined, 2);
map.set(NaN, 3);
map.set(1, 4);
map.set("1", 5);
map.set({}, 6);

console.log(map);	//Map(6) {null => 1, undefined => 2, NaN => 3, 1 => 4, "1" => 5, Object => 6}
console.log(map.get(null));	//1
console.log(map.get(undefined));	//2
console.log(map.get(NaN));	//3
console.log(map.get(1));	//4
console.log(map.get("1"));	//5
console.log(map.get(obj));	//undefined