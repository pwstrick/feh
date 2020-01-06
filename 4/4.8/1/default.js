//组件
const Main = { template: '<div>首页</div>' };
const List = { template: '<div>列表</div>' };
//路由配置
const routes = [
  { path: '/main', component: Main },
  { path: '/list', component: List }
];
//路由器实例
const router = new VueRouter({
  routes: routes
});

var vm = new Vue({
  el: "#container",
  router: router
});