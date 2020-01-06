console.log("简洁属性和方法");
let name = "strick",
  age = 28,
  obj;
//键值对的写法
obj = { name: name, age: age };
//只有属性名的简洁写法
obj = { name, age };
console.log(obj);

//简洁方法
obj = {
  getName: function() {//传统方式
    return name;
  },
  getAge() {//简洁方式
    return age;
  }
};
console.log(obj.getName());
console.log(obj.getAge());


console.log("计算属性名");
obj = {
  name,			//标识符
  "age": age,	//字符串字面量
  [name + "2"]: "freedom",	//要计算的表达式
  [name + "3"]() {
    return name;
  }
};
console.log(obj);

console.log("原型");
let chain = {},
  proto;
Object.setPrototypeOf(chain, { name: "freedom" });
proto = Object.getPrototypeOf(chain);
console.log(proto === chain.__proto__); //true
console.log(proto);
console.log(chain.__proto__);


let father = {
  getName() {
    console.log("father");
  }
};
let child = {
  getName() {
    super.getName();
    console.log("child");
  }
};
Object.setPrototypeOf(child, father);
child.getName();	//先输出"father"，再输出"child"

console.log("————————");
father = {
  name: "father",
  getName() {
    console.log(this.name);
  }
};
child = {
  name: "child",
  getName() {
    super.getName();//"child"
    Object.getPrototypeOf(this).getName();//"father"
    Object.getPrototypeOf(this).getName.call(this);//"child"
  }
};
Object.setPrototypeOf(child, father);
child.getName();



