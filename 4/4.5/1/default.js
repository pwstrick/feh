Vue.component("child", {
  template: '<p>子组件</p>',
  mounted: function() {
    console.log(this.$parent.name);		//"parent"
	console.log(this.$root.name);		//"root"
  }
});

Vue.component("parent", {
  data: function(){
    return { name: "parent" };
  },
  template: '<child></child>'
});

var vm = new Vue({
  el: "#container",
  data: {
    name: "root"
  }
});
console.log(vm.$children);	//[VueComponent]
console.log(vm.$parent);	//undefined