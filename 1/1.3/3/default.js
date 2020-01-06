console.log("正则表达式");
var reg = new RegExp(/\w/g, "i");
console.log("toString()", reg.toString());	//"/\w/i"

console.log("u标志");
var word = "𠮳";
console.log(".", /^.$/.test(word)); 				//false
console.log("\\u{20BB3}", /\u{20BB3}/.test(word)); 	//false
console.log(".", /^.$/u.test(word));	 			//true
console.log("\\u{20BB3}", /\u{20BB3}/u.test(word)); //true

console.log("y标志");
var str = "pw1st2pw3",
  pattern1 = /pw\d/g,
  pattern2 = /pw\d/y;
console.log("g第一次", pattern1.test(str));	//true
console.log("y第一次", pattern2.test(str));	//true
console.log("g第二次", pattern1.test(str));	//true
console.log("y第二次", pattern2.test(str));	//false
console.log("sticky", pattern2.sticky);

console.log("flags属性");
var pattern = /pw\d/img;
console.log("source", pattern.source);	//"pw\d"
console.log("flags", pattern.flags);	//"gim"





