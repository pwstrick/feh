var vm = new Vue({
  el: "#container",
  data: {
    name: "strick"
  },
  methods: {
	dot1: function(e) {
	  console.log(e, this.name);
	},
	dot2: function(age, e, school) {
	  console.log(e, this.name, age, school);
	},
	dot3: function(e) {
	  console.log("dot3", e, this.name);
	},
	print: function(msg) {
	  console.log(msg);
	},
	enter: function(e) {
	  console.log(e.target.value);
	}
  }
});

Vue.config.keyCodes.f12 = 123;