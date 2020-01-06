// var vm = new Vue({
// 　el: "#container",
// 　data: {
// 　　content: "strick"
// 　}
// });

//实例数据对象
var data = {
　content: "strick"
};
var vm = new Vue({
　el: "#container",
　data: data,
　	beforeCreate: function() {
		//undefined undefined undefined
		console.log("beforeCreate", this.$el, this.$data, this.content);
	},
	created: function() {
		//undefined {__ob__: Observer} strick
		console.log("created", this.$el, this.$data, this.content);
	},
	beforeMount: function() {
		//<div id="container">{{content}}</div>  {__ob__: Observer} strick
		console.log("beforeMount", this.$el, this.$data, this.content);
	},
	mounted: function() {
		//<div id="container">strick</div> {__ob__: Observer} strick
		console.log("mounted", this.$el, this.$data, this.content);
	},
	beforeUpdate: function() {
		//<div id="container">justify</div> {__ob__: Observer} justify strick
		console.log("beforeUpdate", this.$el, this.$data, this.content, document.getElementById("container").innerHTML);
	},
	updated: function() {
		//<div id="container">justify</div> {__ob__: Observer} justify justify
		console.log("updated", this.$el, this.$data, this.content, document.getElementById("container").innerHTML);
	},
	beforeDestroy: function() {
		console.log("beforeDestroy", this.$el, this.$data, this.content);
	},
	destroyed: function() {
		console.log("destroyed", this.$el, this.$data, this.content);
	}
});
//data.content = "freedom";
//console.log("vm.content", vm.content);		//"freedom"

//vm.content = "justify";
//console.log("data.content", data.content);		//"justify"

//vm.$destroy()