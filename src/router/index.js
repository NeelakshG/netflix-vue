import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home/Home.vue";
import Login from "@/views/Login/Login.vue";
import Player from "@/views/Player/Player.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/player/:id",
      name: "Player",
      component: Player,
      props: true,
    },
  ],
});

export default router;
