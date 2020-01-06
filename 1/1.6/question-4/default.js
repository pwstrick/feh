var map = new Map();
map.set("name", "strick").set("age", 28);
console.log(map);	//Map(2) {"name" => "strick", "age" => 28}
console.log([...map]);	//[["name", "strick"], ["age", 28]]
console.log(Array.from(map));	//[["name", "strick"], ["age", 28]]
