var obj = {
  age: 28,
  arrow: () => this.age,
  normal: function() {
    return this.age;
  }
};
console.log("arrow", obj.arrow());		//undefined
console.log("normal", obj.normal());	//28