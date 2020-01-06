var vm = new Vue({
  el: "#container",
  data: {
    name: "strick",
	price: 10.2
  },
  computed: {
    newName: function() {
      return this.name.repeat(2).substr(-2);
    },
    total: {
      get: function() {
        return this.price * 10;
      },
      set: function(value) {
		this.price = value + Math.round(this.price);
      }
    }
  },
  methods: {
    getName: function() {
      return this.name.repeat(2).substr(-2);
    }
  }
});

vm.total = 10;

