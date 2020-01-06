
Vue.component("btn", {
  template: '<button>提交</button>'
});


var vm = new Vue({
  el: "#container",
  methods: {
    handler: function() {
      console.log("click");
    }
  }
});

