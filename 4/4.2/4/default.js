// Vue.directive("autoEnter", {
// 	inserted: function (el) {
// 		el.value = "strick";
// 	}
// });

Vue.directive("func", function (el, binding) {
	console.log("function");
});

var vm = new Vue({
  el: "#container",
  data: {
      name: "strick",
	  display: true,
	  age: 28,
	  arg: "click"
  },
  directives: {
	  autoEnter: {
		  inserted: function(el) {
			  el.value = "strick";
		  }
	  },
	  hooks: {
		  bind: function () {
			  console.log("bind");
		  },
		  inserted: function () {
			  console.log("inserted");
		  },
		  update: function (el, binding) {
			  console.log("update", binding.value, binding.oldValue);
		  },
		  componentUpdated: function () {
			  console.log("componentUpdated");
		  },
		  unbind: function () {
			  console.log("unbind");
		  }
	  },
	  calculate: {
		  bind: function (el, binding) {
			  console.log("calculate", binding.arg);	//"click"
			  console.log("calculate", binding.value);	//{left: 10, right: 20}
		  }
	  }
  }
});

// vm.name = "freedom";
// vm.age = 30;
// setTimeout(function () {
// 	vm.display = false;
// }, 500);



