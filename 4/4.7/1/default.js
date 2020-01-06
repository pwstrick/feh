

// Vue.component("page", {
  // template: '#template',
  // props: ["type"]
// });

//render()
Vue.component("page", {
  render: function (createElement) {
    return createElement(
      "h" + this.type,
      this.$slots.default
    );
  },
  props: ["type"]
});

//数据对象
Vue.component("btn", {
  render: function(createElement) {
    return createElement(this.tag, {
      style: { color: "red" },				//与v-bind:style的功能相同
      attrs: { id: "btn" },					//DOM元素特性
      domProps: { innerHTML: "提交" },		//DOM元素属性
      on: { click: this.handler }			//事件监听器
    });
  },
  data: function() {
    return { tag: "button" };
  },
  methods: {
    handler: function() {
      console.log("click");
    }
  }
});

var Child = {
  props: ["txt"],
  render: function(createElement) {
    return createElement("h1", this.txt);
  }
};
//虚拟子节点
Vue.component("c-article", {
  data: function() {
    return { txt: "标题" };
  },
  render: function(createElement) {
    var h1 = createElement(Child, {
      props: { txt: this.txt },
      nativeOn: {
        click: () => {
          this.txt = +new Date();
        }
      }
    });
	//var h1 = createElement("h1", "标题");
    return createElement(
      "div",
      //["标题", createElement("h2", "副标题")]
      [h1, h1]
    );
  }
});



Vue.component("container", {
  template: '<c-article><slot></slot></c-article>'
});

var vm = new Vue({
  el: "#container",
  data: {
    
  }
});
