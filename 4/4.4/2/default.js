//传值
Vue.component("btn-custom", {
  props: ["inHtml", "digit", "id"],
  created: function() {
    console.log(typeof this.digit);	//"number"
	//this.digit = 2;
  },
  template: '<button>{{inHtml}}{{id}}</button>'
});

//校验
Vue.component("btn-custom2", {
  props: {
    digit: Number,
	number: [Number, String],
	digit2: {
      type: Number,
      required: true
    },
    number2: {
      type: Number,
      default: 100
    },
	people: {
      type: Object,
      default: function() {
        //this.test();
        return { name: "strick" }
      }
	},
	name: {
      validator: function(value) {
        return value.length > 5;
      }
	},
	man: People
  },
  methods: {
	test: function() {
		console.log("test");
	}  
  },
  data: function() {
	console.log("btn-custom2", this.number2, this.people);
	return {age: 28};
  },
  template: '<button>{{digit}}</button>'
});

//根元素
Vue.component("btn-custom3", {
  props: ["digit"],
  created: function() {
	console.log("btn-custom3", this.$attrs);
  },
  inheritAttrs: false,
  template: '<button type="button" class="warning">{{digit}}</button>'
});

function People(name) {
  this.name = name;
}

var vm = new Vue({
  el: "#container",
  data: {
    obj: { id: 1, name: "strick" },
	man: new People()
  }
});

