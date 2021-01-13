import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductDetails from "../views/ProductDetails";
import NotFound from "../views/NotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ProductDetails/:id",
    name: "ProductDetails",
    props: true,
    component: ProductDetails
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
