var vm = new Vue({
  el: "#container",
  data: {
    name: "strick",		//响应式属性
    people: {
      name: "freedom"
    },
	names: ["strick", "freedom"]
  }
});
//vm.age = 28;	//非响应式属性

//Vue.set(vm.people, "age", 28);
//vm.people = Object.assign({}, vm.people, { age: 28, school: "university" });
//vm.names[1] = "justify";
//vm.names.length = 1;
//Vue.set(vm.names, 1, "justify");
vm.names.splice(1, 1, "justify");