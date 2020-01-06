

Vue.component("btn", {
  template: '<button><slot></slot></button>'
});

Vue.component("btn2", {
  template: '<button><slot>提交</slot></button>'
});

var vm = new Vue({
  el: "#container",
  data: {
    
  }
});
