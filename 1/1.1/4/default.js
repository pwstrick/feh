var name = "strick",
  age = 29, str;
//传统拼接方式
str = "My name is \"" + name + "\". My age is " + age + ".";
console.log(str); //My name is "strick". My age is 29.
//模板字面量方式
str = `My name is "${name}". My age is ${age}.`;
console.log(str); //My name is "strick". My age is 29.

console.log("占位符");
console.log(`${"abc"}`); //"abc"
console.log(`${123}`); //"123"
console.log(`${true}`); //"true"
console.log(`${null}`); //"null"
console.log(`${undefined}`); //"undefined"
console.log(`${{ id: 1 }}`); //"[object Object]"
console.log(`${[1, 2, 3]}`); //"1,2,3"

var school;
console.log(`I am studying at ${school}.`);    //抛出未定义的引用错误

let attr = "border-radius";
function isChrome() {
  return true;//为了简化演示，省略了浏览器嗅探逻辑
}
attr = `${isChrome() ? `-webkit-${attr}` : attr}`;
console.log(attr);  //"-webkit-border-radius"

var scope = "global"; //全局变量
function outer1() {
  var scope = "outer";
  function inner(str) {
    var scope = "inner";
    console.log(str);
  }
  inner(`current ${scope}`);
}
outer1(); //"current outer"

var scope = "global"; //全局变量
function outer2() {
  //var scope = "outer";
  function inner(str) {
    var scope = "inner";
    console.log(str);
  }
  inner(`current ${scope}`);
}
outer2(); //"current global"

console.log("多行字符串");
let multi1 = "first line \n" + 
    "second line \n" + 
    "third line";
console.log(multi1);
let multi2 = "first line \n\
    second line \n\
    third line";
console.log(multi2);
let multi3 = `first line
    second line
    third line`;
console.log(multi3);

console.log("标签模板");
function func(literals, ...substitutions) {
  console.log(literals); //["<p>", "</p><p>", "</p>", raw]
  console.log(substitutions); //["strick", 29]
}
var name = "strick",
  age = 29;
func`<p>${name}</p><p>${age}</p>`;

let html = `<p>\t</p>`;
console.log(html);//"<p>	</p>"
html = String.raw`<p>\t</p>`;
console.log(html);//"<p>\\t</p>"

