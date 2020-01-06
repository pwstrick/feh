Vue.component("child", {
  data: function() {
    return {
      names: ["strick", "freedom"]
    };
  },
  //template: '<input ref="txt" />',
  template: `<div>
		<input v-for="item in names" ref="txt" :name="item" />
	</div>`,
  mounted: function() {
    //console.log(this.$refs); 	//{txt: input}
	console.log(this.$refs); 	//{txt: [input, input]}
  }
});

Vue.component("parent", {
  template: '<child ref="child"></child>',
  mounted: function() {
    console.log(this.$refs);	//{child: VueComponent}
    //console.log(this.$refs.child.$refs);	//{txt: input}
  }
});

var vm = new Vue({
  el: "#container"
});

//console.log(vm.$refs.parent.$refs.child.$refs);