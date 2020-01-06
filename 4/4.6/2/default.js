

Vue.component("page", {
  template: `<div>
		<header><slot name="header"></slot></header>
		<section><slot></slot></section>
		<footer><slot name="footer"></slot></footer>
	</div>`
});

var vm = new Vue({
  el: "#container",
  data: {
    
  }
});
