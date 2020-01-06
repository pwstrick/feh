Vue.component("child", {
  template: '<button @click="add">提交</button>',
  methods: {
    add: function() {
      console.log("child");
      this.$emit("dotNumber", 1, 2);
    }
  }
});

Vue.component("parent", {
  template: '<child @dotNumber="add"></child>',
  methods: {
    add: function(left, right) {
      console.log("parent", left, right);
	  this.$emit("addNumber", 3, 4);
    }
  }
});

Vue.component("checkbox", {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  },
  template: '<input type="checkbox" :checked="checked" @change="dot" />',
  methods: {
    dot: function(e) {
      console.log(e.target.checked);
    }
  }
});

var vm = new Vue({
  el: "#container",
  data: {
    current: true
  },
  methods: {
    add: function(left, right) {
      console.log("root", left, right);
    }
  }
});

