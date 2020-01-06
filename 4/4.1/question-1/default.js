var vm = new Vue({
  el: "#container",
  data: {
    name: "strick"
  }
});

Vue.nextTick(function() {
	console.log(document.body.innerHTML);
});
Vue.nextTick().then(function() {
	console.log(document.body.innerHTML);
});
