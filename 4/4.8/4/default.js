//组件
const Main = { template: '<div>首页</div>' };
const List = { template: '<div>{{$route.params.page}}</div>' };
const Detail = { template: '<div>详情</div>' };
//路由配置
const routes = [
  { path: "/main", component: Main, name: "main" },
  { path: "/list/1", redirect: "/main" },
  { path: "/list/2", redirect: {name: "main"} },
  { path: "/list/3", redirect: to => {console.log(to);return "/main"} },
  { path: "/list/4", component: Detail, alias: "/detail" }
];
//路由器实例
const router = new VueRouter({
  routes: routes
});

var vm = new Vue({
  el: "#container",
  router: router
});