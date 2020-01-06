


Vue.component("btn", {
  functional: true,
  render: function(createElement, context) {
    return createElement("button", {
      domProps: { innerHTML: context.props.txt }
    });
  }
});

var vm = new Vue({
  el: "#container",
  data: {
    txt: "提交"
  }
});
