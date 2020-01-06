// function People(name) {
//   this.name = name;
// }
// People.prototype.getName = function () {
//   return this.name;
// };
// var people = new People("strick");
// console.log("function", people.getName());   //"strick"



// class People {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// var people = new People("strick");
// console.log("class", people.getName());   //"strick"
// console.log("People", typeof People); //"function"
// console.log("getName", typeof People.prototype.getName); //"function"

// var People = class {  //匿名类表达式
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// };
// var people = new People("strick");
// console.log("anonymous", people.getName());   //"strick"

// var People = class Man {  //命名类表达式
//   getSelf() {
//     console.log(Man.name);   //"Man"
//     console.log(typeof Man);  //"function"
//     console.log(new Man().getAge());   //28
//   }
//   getAge() {
//     return 28;
//   }
// };
// var people = new People();
// people.getSelf();
// console.log("named", People.name);   //"Man"
// // console.log("named", Man.name);   //Man未定义的错误


var people = new class {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}("strick");
console.log("immediate", people.getName());   //"strick"


