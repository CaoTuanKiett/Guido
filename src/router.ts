import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./pages/index.vue"),
    },
    {
      path: "/login",
      component: () => import("./pages/auth/login.vue"),
    },
    {
      path: "/singup",
      component: () => import("./pages/auth/singup.vue"),
    },
  ],
});

export default router;
