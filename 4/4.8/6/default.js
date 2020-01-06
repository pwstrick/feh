//组件
const Main = { template: '<div>首页</div>' };
const List = {
  template: '<div>{{$route.params.page}}</div>',
  beforeRouteEnter: function(to, from, next) {
    console.log("5、beforeRouteEnter", this, to, from);
	next(vm => {
      console.log(vm);
	});
	//next();
  },
  beforeRouteUpdate: function(to, from, next) {
    console.log("6、beforeRouteUpdate", to, from);
	next();
  },
  beforeRouteLeave: function(to, from, next) {
    console.log("7、beforeRouteLeave", to, from);
	//next();
	const answer = window.confirm("是否离开当前页？");
	answer ? next() : next(false);
  }
};

//路由配置
const routes = [
  { path: "/main", component: Main },
  {
    path: "/list/:page",
    component: List,
    beforeEnter: (to, from, next) => {
      console.log("4、beforeEnter", to, from);
	  next();
    }
  }
];
//路由器实例
const router = new VueRouter({
  routes: routes
});
router.beforeEach((to, from, next) => {
  console.log("1、beforeEach", to, from);
  next();
});
router.beforeResolve((to, from, next) => {
  console.log("2、beforeResolve", to, from);
  next();
});
router.afterEach((to, from) => {
  console.log("3、afterEach", to, from);
});

var vm = new Vue({
  el: "#container",
  router: router
});