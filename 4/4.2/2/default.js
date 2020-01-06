var vm = new Vue({
  el: "#container",
  data: {
    array: ["strick", "freedom"],
    obj: {
      name: "strick",
      age: 28
    },
    peoples: [
      { id: 1, name: "strick" }, 
      { id: 2, name: "freedom" }
    ],
	display: true
  },
  methods: {
	toggle: function() {
	  this.display = !this.display;
	}
  }
});

//vm.peoples.push({id:3, name:"justify"});
vm.peoples = vm.peoples.slice(0, 1);