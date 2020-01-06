class People {
  constructor() {
    this.age = 28;
  }
  getAge() {
    return this.age;
  }
  static getAge() {
    return this.age;
  }
}
class Man extends People {
  constructor() {
    super();
    this.age = 29;
  }
  getAge() {
    return super.getAge();
  }
  static getAge() {
    return super.getAge();
  }
}
Man.age = 30;
var man = new Man();
console.log(Man.getAge());  //30
console.log(man.getAge());  //29