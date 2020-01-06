//组件
const List = { template: '<div>{{$route.params.page}}</div>' };
//路由配置
const routes = [
  { path: '/list/:page', component: List }
];
//路由器实例
const router = new VueRouter({
  routes: routes,
  scrollBehavior: function(to, from, savedPosition) {
    console.log(savedPosition);
    return savedPosition;
	//console.log(savedPosition);
	//return { x: 0, y: 0 };
  }
});

var vm = new Vue({
  el: "#container",
  router: router
});