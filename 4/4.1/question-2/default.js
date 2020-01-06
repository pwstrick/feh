var vm = new Vue({
  el: "#container",
  data: {
    name: "strick",
	people: {
	  name: "strick",
	  age: 28
	}
  },
  watch: {
    name: function (val, oldVal) {
      console.log(val, oldVal);
    },
	people: {
      handler: function (val, oldVal) {
	    console.log(val.age, oldVal.age);
	  },
      deep: true
	}
  }
});

vm.name = "freedom";

vm.people.age = 30;