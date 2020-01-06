var people = {
    name: "strick"	
  },
  handler = {
    has(target, property) {
	  if(property == "age")
	    return true;
	  return property in target;
    }
  },
  p = new Proxy(people, handler);
console.log("name" in p);		//true
console.log("age" in p);		//true
console.log("school" in p);		//false


var people = {
    name: "strick"	
  },
  handler = {
    has(target, property) {
	  return false;
    }
  };
Object.preventExtensions(people);	//锁定对象
var p = new Proxy(people, handler);
//"name" in p;		//the proxy target is not extensible