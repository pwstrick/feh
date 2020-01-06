

Vue.component("tab1", {
  template: '<input type="text"/>',
  activated: function() {
    console.log("activated");
  },
  deactivated: function() {
    console.log("deactivated");
  }
});
Vue.component("tab2", {
  template: '<input type="text"/>'
});
var vm = new Vue({
  el: "#container",
  data: {
    current: "tab1",
    tabs: ["tab1", "tab2"]
  }
});




