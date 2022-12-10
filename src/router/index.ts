import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Product from "../components/Section51_Product.vue";
import ProductList from "../components/Section51_ProductList.vue";
import ProductHome from "../components/Section52_ProductHome.vue";
import ProductReview from "../components/Section52_ProductReview.vue";

const routes = [
  // ルート1
  { path: "/product", component: ProductList },
  // ルート2
  {
    path: "/product/:id",
    component: Product,
    props: (route: any) => ({ id: Number(route.params.id) }),
    beforeEnter(to, from, next) {
      console.log("beforeEnter");
      next();
    },
    children: [
      {
        name: "product-home",
        path: "",
        component: ProductHome,
        props: (route: any) => ({ id: Number(route.params.id) }),
      },
      {
        name: "product-review",
        path: "review",
        component: ProductReview,
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
