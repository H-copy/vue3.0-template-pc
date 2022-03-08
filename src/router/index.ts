import * as vueRouter from "vue-router";
import Home from "../views/Home.vue";

const routerSetting: vueRouter.RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
];

export default vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes: routerSetting,
});
