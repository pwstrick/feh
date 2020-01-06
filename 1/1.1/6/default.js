var sym1 = Symbol(),
  sym2 = Symbol("name"),
  sym3 = Symbol("name");
  //sym4 = new Symbol();//抛出类型错误

console.log(sym1);
console.log(sym2);
console.log(sym2 === sym3);//false

console.log(typeof sym1);//"symbol"
console.log(typeof sym2);//"symbol"

console.log("类型转换");
var sym = Symbol("age");
//Number(sym);
//parseInt(sym);
//1 + sym;
//"" + sym;
console.log(Boolean(sym));//true
console.log(!sym);//false
console.log(sym.toString());//"Symbol(age)"
console.log(String(sym));//"Symbol(age)"

console.log("全局共享");
var sym1 = Symbol.for("name"),
  sym2 = Symbol.for("name");
console.log(sym1 === sym2);//true
console.log(Symbol.keyFor(sym1));//"name"
console.log(Symbol.keyFor(sym2));//"name"

console.log("属性名");
var sym = Symbol("name"),
  obj = {};
//第一种
obj[sym] = "strick";
obj.sym = "strick";
console.log(obj);	//{Symbol(name): "strick", sym: "strick"}
//第二种
obj = {
  [sym]: "freedom"
};
console.log(obj);	//{Symbol(name): "freedom"}
//第三种
Object.defineProperty(obj, sym, { value: "justice" });
console.log(obj);	//{Symbol(name): "justice"}

//检索
obj = {
  [sym]: "freedom",
  age: 28
};
for (let key in obj) {
  console.log(key);
}
console.log("————");
console.log(Object.keys(obj));//["age"]
console.log("————");
console.log(Object.getOwnPropertyNames(obj));//["age"]
console.log("————");
console.log(Object.getOwnPropertySymbols(obj));//[Symbol(name)]

console.log("内置符号");
//Symbol.hasInstance
let digit = {
  [Symbol.hasInstance](number) {
    return !(number % 2);//判断数字是否为偶数
  }
};
console.log(1 instanceof digit);//false
console.log(2 instanceof digit);//true

//Symbol.isConcatSpreadable
let arr1 = [3, 4];//默认展开
console.log([1, 2].concat(arr1)); //[1, 2, 3, 4]
let arr2 = [3, 4];
arr2[Symbol.isConcatSpreadable] = false;//禁止展开
console.log([1, 2].concat(arr2)); //[1, 2, [3, 4]]

//Symbol.match、Symbol.replace、Symbol.search、Symbol.split
let regex = {
    [Symbol.match](str) {
      return str.substr(0, 10);
    },
	[Symbol.replace](str, replace) {
      return str.substr(0, 10) + replace;
    },
	[Symbol.search](str) {
      return str.length > 10;
    },
	[Symbol.split](str) {
      return [str];
    }
  },
  message = "My name is strick";

console.log(message.match(regex));					//"My name is"
console.log(message.replace(regex, " freedom"));	//"My name is freedom"
console.log(message.search(regex));					//true
console.log(message.split(regex));					//["My name is strick"]

//Symbol.toPrimitive
let amount = {
  [Symbol.toPrimitive](type) {
    switch (type) {
      case "string":
        return "1";
      case "number":
        return 1;
      case "default":
        return "";
    }
  }
};

console.log("0" + amount);		//"0"
console.log(+amount);			//1
console.log(String(amount));	//"1"

//Symbol.toStringTag
let people = {
  [Symbol.toStringTag]: "People"
};
console.log(people.toString());	//"[object People]"

//Symbol.unscopables
let color = {
  red: "0",
  blue: "1"
};
color[Symbol.unscopables] = {
  red: true
};
with (color) {
  //console.log(red);	//抛出未定义的引用错误
};


