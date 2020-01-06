//组件
const List = {
  props: ["page"],
  template: "<div>{{page}}</div>"
  //template: '<div>{{$route.params.page}}</div>'
};

//路由配置
const routes = [
  { path: "/list/:page", component: List, props: true }
];
//路由器实例
const router = new VueRouter({
  routes: routes
});

var vm = new Vue({
  el: "#container",
  router: router
});