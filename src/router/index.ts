import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Landing from "../views/Landing.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", name: "Landing", component: Landing }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
