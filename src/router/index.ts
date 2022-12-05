import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Section48_Home.vue";
import View from "../components/Section48_View.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/view", component: View },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
