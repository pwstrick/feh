console.log("ArrayBuffer");
var buffer = new ArrayBuffer(8);
console.log("ArrayBuffer", buffer);
console.log("byteLength", buffer.byteLength);	//8
console.log("slice", buffer.slice(2, 4));
console.log("isView", ArrayBuffer.isView(buffer));	//false


console.log("TypedArray");
var view = new Uint8ClampedArray(2);
view[0] = -1;
view[1] = 256;
console.log("溢出", view);		//Uint8ClampedArray(2) [0, 255]

//创建方式一
var buffer = new ArrayBuffer(16),
  view1 = new Int16Array(buffer),		//Int16Array(8) [0, 0, 0, 0, 0, 0, 0, 0]
  view2 = new Int16Array(buffer, 4, 2);	//Int16Array(2) [0, 0]
console.log(view1, view2);
var view1 = new Int8Array(buffer, 0, 4),
  view2 = new Int16Array(buffer, 4, 4),
  view3 = new Int32Array(buffer, 12, 1);
console.log(view1.buffer === view2.buffer);	//true
console.log(view2.buffer === view3.buffer);	//true
  
//创建方式二
var view = new Int16Array(7);	//Int16Array(7) [0, 0, 0, 0, 0, 0, 0]
console.log(view);
//创建方式三
var view1 = new Int16Array(6),
  view2 = new Int8Array(view1);	//Int8Array(6) [0, 0, 0, 0, 0, 0]
console.log(view2);
//创建方式四
var view = new Int16Array([1, 2, 3]);	//Int16Array(3) [1, 2, 3]
console.log(view);

var view = new Int32Array(4);
console.log("BYTES_PER_ELEMENT", Int32Array.BYTES_PER_ELEMENT);	//4
console.log("buffer", view.buffer);	//ArrayBuffer(16)
console.log("byteLength", view.byteLength);	//16
console.log("byteOffset", view.byteOffset);	//0
console.log("length", view.length);	//4

console.log("DataView");
var buffer = new ArrayBuffer(16),
  view1 = new DataView(buffer),
  view2 = new DataView(buffer, 4, 6);
console.log("buffer", view1.buffer === view2.buffer);	//true

view1.setInt8(2, 8);
console.log("getInt8", view1.getInt8(0));	//0
console.log("getInt8", view1.getInt8(2));	//8
view2.setInt16(0, 16);
console.log("getInt16", view2.getInt16(0));	//16
console.log("getInt16", view2.getInt16(2));	//0

console.log("Int8Array", Int8Array.BYTES_PER_ELEMENT);		//1
console.log("Int16Array", Int16Array.BYTES_PER_ELEMENT);	//2
console.log("Int32Array", Int32Array.BYTES_PER_ELEMENT);	//4

var buffer = new ArrayBuffer(8),
  view = new Int16Array(buffer, 2, 3);
console.log("buffer", view.buffer);	//ArrayBuffer(8) {}
console.log("byteOffset", view.byteOffset);	//2
console.log("byteLength", view.byteLength);	//6
view.set([8], 1);
console.log("set", view);	//Int16Array(3) [0, 8, 0]
console.log("subarray", view.subarray(1, 2));	//Int16Array [8]
