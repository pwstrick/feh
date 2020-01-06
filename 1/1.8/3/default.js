// class People {
//   constructor() {
//     this.age = 28;
//   }
//   getAge() {
//     return this.age;
//   }
//   static getName() {
//     return "strick";
//   }
// }
// class Man extends People {
//   constructor() {
//     super();
//   }
// }
// var man = new Man();
// // console.log("extends", Man.getName());  //"strick"
// // console.log("extends", man.getAge());   //28


// class People {
//   constructor() {
//     this.age = 28;
//   }
// }
// class Man extends People {
//   constructor() {
//     super();
//     console.log(this.age);  //28
//     // return {};
//   }
// }
// var man = new Man();

// class People {
//   getAge() {
//     return 28;
//   }
//   static getAge() {
//     return 30;
//   }
//   getName() {
//     return "freedom";
//   }
//   static getName() {
//     return "strick";
//   }
// }
// class Man extends People {
//   get age() {
//     return super.getAge();
//   }
//   static get name() {
//     return super.getName();
//   }
//   // getName() {
//   //   console.log(super);
//   //   return super.getName();
//   // }
// }
// var man = new Man();
// console.log("object", man.age);   //28
// console.log("object", Man.name);  //"strick"
// //在子类的原型方法中调用父类的静态方法，并且在父类中没有同名的原型方法
// // console.log("object", man.getName());   //Uncaught TypeError: (intermediate value).getName is not a function


// function getPeople(gender) {
  // return gender == 1 ? Man : Woman;
// }
// class Man { }
// class Woman { }
// class Person extends getPeople(1) { }
// var person = new Person();
// console.log("express", person instanceof Man);		//true
// console.log("express", person instanceof Woman);	//false


// function mixin(...objects) {
  // function middle() {}
  // Object.assign(middle.prototype, ...objects);
  // return middle;
// }
// var man = {
  // getMan() {
    // return "男";
  // }
// };
// var woman = {
  // getWoman() {
    // return "女";
  // }
// };
// class Person extends mixin(man, woman) { }
// var person = new Person();
// console.log("mixin", person.getMan());		//"男"
// console.log("mixin", person.getWoman());	//"女"


// class List extends Array { }
// var list = new List();
// console.log("build-in", list.length);	//0
// list.push("a");
// console.log("build-in", list);			//List ["a"]
// console.log("build-in", list.length);	//1

//当子类调用父类的静态方法时，方法中的this指向的是子类。
// class Array {
  // static get [Symbol.species]() {
	  // console.log(this);
    // return this;
  // }
// }
// class List extends Array { }
// List[Symbol.species];

// class List extends Array { }
// var list = new List(1, 2),
  // segment = list.slice(0, 1);
// console.log("build-in", list);		//List(2) [1, 2]
// console.log("build-in", segment);	//List [1]
// console.log("build-in", segment instanceof List);	//true

// class List extends Array {
  // static get [Symbol.species]() {
    // return Array;
  // }
// }
// var list = new List(1, 2),
  // segment = list.slice(0, 1);
// console.log("Symbol.species", list);		//List(2) [1, 2]
// console.log("Symbol.species", segment);	//[1]
// console.log("Symbol.species", segment instanceof List);	//false


class People {
  constructor() {
    console.log("new.target", new.target === People);	//false
    console.log("new.target", new.target === Man);	//true
  }
}
class Man extends People { }
var man = new Man();


