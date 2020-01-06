//组件
const Main = { template: '<div>首页</div>' };
const List = { template: '<div>{{$route.params.page}}<router-view></router-view></div>' };
const Detail = { template: '<div>详情</div>' };
//路由配置
const routes = [
  {
    path: "/list/:page",
    component: List,
    name: "list",
    children: [{ path: "detail", component: Detail }]
  },
  { path: "/list/1", component: Main },
  {
    path: "/named",
    components: {
      default: Main,
      detail: Detail
    }
  }
];
//路由器实例
const router = new VueRouter({
  routes: routes
});

var vm = new Vue({
  el: "#container",
  router: router
});