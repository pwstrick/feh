//混入对象
var Mixin = {
  data: function() {
    return { name: "strick" };
  },
  created: function() {
    console.log("mixin");
  },
  methods: {
    getName: function() {
      console.log(this.name);
    }
  },
  age: 28
};

//全局混入
Vue.mixin({
  created: function () {
    console.log("global");
  }
});

//自定义合并策略
Vue.config.optionMergeStrategies.age = function(toVal, fromVal) {
  return fromVal > toVal ? toVal : fromVal;
};

//组件
Vue.component("btn-custom", {
  mixins: [Mixin],
  data: function() {
    return { name: "freedom" };
  },
  created: function() {
    console.log("component");
	console.log("component", this.name);
	console.log("component", this.$options.age);	//28
	this.getName();
  },
  methods: {
    getName: function() {
      console.log(this.name);
    }
  },
  age: 30,
  template: '<button>提交</button>'
});



var vm = new Vue({
  el: "#container",
  data: {
    
  }
});

//console.log(vm.$children[0].$options);



