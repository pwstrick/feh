// Vue.component("btn", {
// template: (<button vOn:click={this.handler}>提交</button>),
// methods: {
// handler: function() {
// console.log("click");
// }
// }
// });
Vue.component("btn", {
  render: function (h) {
    return h("button", {
      "on": {
        "click": this.handler
      }
    }, ["ok"]);
  },
  methods: {
    handler: function () {
      console.log("click");
    }
  }
});
var vm = new Vue({
  el: "#container",
  data: {}
});
