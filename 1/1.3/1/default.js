console.log("数字");
var decimal = 10,
  octal = 0o12, 	//或0O12
  hex = 0xa, 		//或0XA
  binary = 0b1010; 	//或0B1010
console.log("十进制", decimal);
console.log("八进制", octal);
console.log("十六进制", hex);
console.log("二进制", binary);
console.log("八进制转换", +octal, Number(octal), parseInt(octal));
console.log("十六进制转换", +hex, Number(hex), parseInt(hex));
console.log("二进制转换", +binary, Number(binary), parseInt(binary));

console.log("isFinite(123)", Number.isFinite(123));	//true
console.log("isFinite(null)", Number.isFinite(null), isFinite(null));	//false true
console.log("isFinite(abc)", Number.isFinite("abc"));	//false
console.log("isFinite(NaN)", Number.isFinite(NaN));	//false
console.log("isFinite(Infinity)", Number.isFinite(Infinity));//false
console.log("isFinite(-Infinity)", Number.isFinite(-Infinity));//false

console.log("isNaN(NaN)", Number.isNaN(NaN));	//true
console.log("isNaN(abc)", Number.isNaN("abc"), isNaN("abc"));	//false true


console.log("isInteger(12)", Number.isInteger(12));
console.log("isInteger(12.0)", Number.isInteger(12.0));
console.log("isInteger(NaN)", Number.isInteger(NaN));

console.log("Math.trunc(1.2)", Math.trunc(1.2));
console.log("Math.sign(-2)", Math.sign(-2));
console.log("Math.sign(2)", Math.sign(2));
console.log("Math.sign(0)", Math.sign(0));
console.log("Math.sign(-0)", Math.sign(-0));
console.log("Math.sign(NaN)", Math.sign(NaN));

console.log("Math.cbrt(8)", Math.cbrt(8));
console.log("Math.clz32(10)", Math.clz32(10));
console.log("Math.imul(2, 3)", Math.imul(2, 3));
console.log("Math.hypot(3, 4)", Math.hypot(3, 4));

console.log("Math.expm1(0)", Math.expm1(0));
console.log("Math.log1p(0)", Math.log1p(0));
console.log("Math.log10(100)", Math.log10(100));
console.log("Math.log2(4)", Math.log2(4));
