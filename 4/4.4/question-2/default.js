var BtnCustom = Vue.extend({
  data: function() {
    return { name: "strick" };
  },
  template: '<button>{{name}}</button>'
});

//挂载到一个元素上
//new BtnCustom().$mount('#container');

//全局注册组件
//Vue.component("btn-custom", BtnCustom);

//局部注册组件
var vm = new Vue({
  el: "#container",
  components: {
    "btn-custom": BtnCustom
  }
});

