var weak = new WeakSet(),
  arr = [1];
//weak.add(1);	//Uncaught TypeError: Invalid value used in weak set
weak.add(arr);
//weak.add(null);
console.log("weak", weak);	//WeakSet {[1]}
console.log("has", weak.has(arr));	//true
weak.delete(arr);
console.log("delete", weak);	//WeakSet {}
console.log("delete", weak.has(arr));	//false