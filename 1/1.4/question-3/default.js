let buffer = new ArrayBuffer(2),
  view = new DataView(buffer);
view.setInt8(0, 1);
console.log(view.getInt8(0)); 	//1
console.log(view.getInt16(0)); 	//256
