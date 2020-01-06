// Vue.component("btn-custom", {
  // data: function() {
    // return {
      // txt: "提交"
    // };
  // },
  // template: '<div><BtnCustom1></BtnCustom1><button>{{txt}}</button></div>',
  // components: {
    // "BtnCustom1": BtnCustom1
  // }
// });

var BtnCustom = {
  data: function() {
    return {
      txt: "提交"
    };
  },
  template: `<div>
      <span>按钮</span>
      <button>{{txt}}</button>
    </div>`
};

var vm = new Vue({
  el: "#container",
  data: {},
  components: {
    "btn-custom": BtnCustom
  }
});


var BtnCustom1 = {
  data: function() {
    return {
      txt: "提交"
    };
  },
  template: "<button>{{txt}}</button>"
};

var BtnCustom2 = {
  template: "<btn-custom1></btn-custom1>",
  components: {
    "btn-custom1": BtnCustom1
  }
};

new Vue({
  el: "#container2",
  data: {},
  components: {
    "btn-custom2": BtnCustom2
  }
});