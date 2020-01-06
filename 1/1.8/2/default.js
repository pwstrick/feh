// class People {
//   constructor() {
//     this.name = "strick";
//   }
//   getName() {
//     return this.name;
//   }
// }
// var people = new People();
// console.log("constructor", people.getName());   //"strick"

// class People {
//   get prop() {
//     return `getter:${this.name}`;
//   }
//   set prop(value) {
//     this.name = value;
//   }
// }
// var people = new People();
// people.prop = "strick";
// console.log(people.prop);   //"getter:strick"
// //子类
// class Man extends People {
//   constructor() {
//     super();
//   }
// }
// var man = new Man();
// man.prop = "strick2";
// console.log(man.prop);   //"getter:strick2"

// var method = "getAge";
// class People {
//   ["get" + "Name"]() {
//     return "strick";
//   }
//   [method]() {
//     return 28;
//   }
// }
// var people = new People();
// console.log("Computed", people.getName());  //"strick"
// console.log("Computed", people.getAge());   //28


// class People {
//   *getName() {
//     yield "strick";
//   }
//   *[Symbol.iterator]() {
//     for (const item of [1, 2]) {
//       yield item;
//     }
//   }
// }
// var people = new People(),
//   iterator = people.getName();
// console.log("generator", iterator.next());   //{value: "strick", done: false}
// for(var value of people) {
//   console.log("generator", value);
// }

class People {
  static getName() {
    return "strick";
  }
}
People.age = 28;
var people = new People();
console.log("static", People.getName());   //"strick"
// console.log("static", people.getName());   //Uncaught TypeError: people.getName is not a function
console.log("static", People.age);