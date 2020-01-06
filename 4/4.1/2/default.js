//实例数据对象
var data = {
　text: "text",
　html: "<span>content</span>",
　id: "row",
　result: true,
　dot: function() {
　　console.log("click");	
　},
　type: "click"
};
var vm = new Vue({
　el: "#container",
　data: data
});
data.text = "strick";

