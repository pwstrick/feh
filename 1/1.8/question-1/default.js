class People {
  constructor() {
    this.name = "strick";
	this.age = 28;
  }
  static getName() {
    return this.name;
  }
  static getAge() {
    return this.age;
  }
}
console.log("static", People.getName());  //"People"
console.log("static", People.getAge());   //undefined