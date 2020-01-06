var obj = {
    current: function() {
      return this === p;
    }
  },
  p = new Proxy(obj, {});
console.log(obj.current());		//false
console.log(p.current());			//true


