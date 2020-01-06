//组件
const NotFound = { template: '<div>404</div>' };
const List = { template: '<div>{{$route.params.page}}</div>' };
//路由配置
const routes = [
  { path: '/list/:page', component: List },
  { path: '*', component: NotFound }
];
//路由器实例
const router = new VueRouter({
  routes: routes
});

var vm = new Vue({
  el: "#container",
  router: router
});