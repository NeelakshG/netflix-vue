import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebase";

import Login from "@/views/Login/Login.vue";
import Home from "@/views/Home/Home.vue";
import Player from "@/views/Player/Player.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    {
      path: "/home",
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: "/player/:id",
      component: Player,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;

  if (to.meta.requiresAuth && !user) {
    next("/login");
  } else {
    next();
  }
});

export default router; 
