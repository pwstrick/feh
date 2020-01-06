//组件
const Main = () => import('./main.vue');
const List = () => import('./list.vue');

//import Main from  "./main.vue";
//import List from  "./list.vue";

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