var obj = {},
  handler = {
    set(target, property, value, receiver) {
      //console.log(receiver);
      target[property] = "hello " + value;
    }
  },
  p = new Proxy(obj, handler);
p.name = "strick";
console.log(p.name);	//"hello strick"

//读取未定义的属性
var obj = {
    name: "strick"	
  },
  handler = {
    get(target, property, receiver) {
      if(property in target)	//判断此属性是否存在
	    return target[property];
	  throw "未定义的错误";  
    }
  },
  p = new Proxy(obj, handler);
console.log("get()", p.name);		//"strick"
//console.log(p.age);		//未定义的错误

//apply()
function getName(name) {
  return name;
}
var obj = {
    prefix: "hello "	
  },
  handler = {
    apply(target, thisArg, argumentsList) {
      //console.log(argumentsList)
	  if(thisArg && thisArg.prefix)
	    return target(thisArg.prefix + argumentsList[0]);
	  return target(...argumentsList);
    }
  },
  p = new Proxy(getName, handler);
console.log("apply()", p("strick"));			//"strick"
console.log("apply()", p.call(obj, "strick"));	//"hello strick"

//撤销代理
var obj = {},
  handler = {},
  p = Proxy.revocable(obj, handler);
console.log(p);	//{proxy: Proxy, revoke: ƒ}
let {proxy, revoke} = Proxy.revocable(obj, handler);
revoke();
//delete proxy.name;	//Cannot perform 'deleteProperty' on a proxy that has been revoked
console.log("撤销代理", typeof proxy);	//"object"

//原型
var obj = {
    name: "strick"	
  },
  handler = {
    get(target, property, receiver) {
      if(property == "name")
	    return "hello " + target[property];
	  return true;
    }
  },
  p = new Proxy({}, handler);
Object.setPrototypeOf(obj, p);	//obj的原型指向Proxy实例
console.log("原型", obj.name);	//"strick"
console.log("原型", obj.age);	//true

