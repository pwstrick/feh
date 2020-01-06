var people = {
    name: "strick",
    age: 28,
    [Symbol.for("gender")]: "man",
    school: "university"
  },
  handler = {
    ownKeys(target) {
	  return Reflect.ownKeys(target).filter((value, index) => {
          return index % 2 === 0;
      });
    }
  },
  p = new Proxy(people, handler);
let names = Object.getOwnPropertyNames(p);
console.log(names);     //["name", "school"]


