console.log("Unicode转义符");
let word1 = "\u5411";
console.log(word1); 	//"向"
let word2 = "\ud842\udfb3";
console.log(word2); 	//"𠮳"
let word3 = "\u{20BB3}";
console.log(word3); 	//"𠮳"

console.log("Unicode标准化");
var mark1 = "\u00FC",
  mark2 = "\u0075\u0308";
console.log(mark1); //"ü"
console.log(mark2); //"ü"
console.log(mark1 === mark2); //false
console.log(mark1.normalize() === mark2.normalize()); //true
var digit1 = "\u216B", //罗马数字十二
  digit2 = "\u2169\u2160\u2160"; //由一个罗马数十和两个罗马数一组成
console.log(digit1); //"Ⅻ"
console.log(digit2); //"ⅩⅠⅠ"
digit1 = digit1.normalize("NFKC");
digit2 = digit2.normalize("NFKC");
console.log(digit1);	//"XII"
console.log(digit2);	//"XII"
console.log(digit1 === digit2);	//true


console.log("新方法与旧方法的对比");
var str = "𠮳";
console.log("长度", str.length);
console.log("charCodeAt第一个字符", str.charCodeAt(0));		//55362
console.log("charCodeAt第二个字符", str.charCodeAt(1));		//57267
console.log("codePointAt第一个字符", str.codePointAt(0));	//134067
console.log("codePointAt第二个字符", str.codePointAt(1));	//57267
console.log("fromCharCode", String.fromCharCode(134067));	
console.log("fromCodePoint", String.fromCodePoint(134067));	//"𠮳"


console.log("字符串方法");
var str = "My name is strick";
console.log(str.length);	//17
console.log("includes", str.includes("name"));	//true
console.log("startsWith一个参数", str.startsWith("name"));	//false
console.log("endsWith一个参数", str.endsWith("name"));	//false
console.log("startsWith两个参数", str.startsWith("name", 3));	//true
console.log("endsWith两个参数", str.endsWith("name", 7));	//true

console.log("repeat", "name".repeat(2));	//"namename"
console.log("raw", String.raw({raw: "abc"}, 0, 1, 2)); 	//"a0b1c"
//相当于
console.log("raw", String.raw({raw: ["a", "b", "c"]}, 0, 1, 2)); 	//"a0b1c"







