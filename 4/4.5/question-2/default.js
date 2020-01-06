
Vue.component("btn", {
  props: ["digit"],
  template: '<button @click="handler">提交</button>',
  methods: {
    handler: function(e) {
      this.$emit("update:digit", this.digit + 1);
	  this.$emit("dot");
    }
  }
});

var vm = new Vue({
  el: "#container",
  data: {
    digit: 1
  },
  methods: {
    handler: function() {
      console.log(this.digit);
    }
  }
});

