import { createRouter, createWebHistory } from "vue-router";
import Product from "../components/Section51_Product.vue";
import ProductList from "../components/Section51_ProductList.vue";

const routes = [
  // ルート1
  { path: "/product", component: ProductList },
  // ルート2
  { path: "/product/:id", component: Product, props: true },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
