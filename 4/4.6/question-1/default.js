

Vue.component("btn", {
  data: function() {
    return { txt:"提交" };
  },
  template: '<button><slot :txt="txt"></slot></button>'
});

var vm = new Vue({
  el: "#container",
  data: {
    obj: { txt:"提交" }
  }
});
