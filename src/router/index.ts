import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Section48_Home.vue";
import View from "../components/Section48_View.vue";

const routes = [
  // ルート1
  { path: "/", component: Home },
  // ルート2
  { path: "/view/:id", component: View },
  { path: "/view", redirect: "/view/none" },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
