import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    title: "home",
    component: HomeView,
  },
  {
    path: "/about",
    title: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunk"title": "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    title: "contact",
    component: () => import("../views/Contact-Us.vue"),
  },
  {
    path: "/myViews",
    title: "myViews",
    component: () => import("../views/myViews.vue"),
  },

  {
    path: "/myViews/:id",
    title: "myView",
    component: () => import("../views/myView.vue"),
    props: true,
  },
  {
    path: "/Admin-Views",
    title: "Admin-Views",
    component: () => import("../views/Admin-Views.vue"),
  },
  {
    path: "/Admin-Views/:id",
    title: "Admin-View",
    component: () => import("../views/Admin-View.vue"),
    props: true,
  },
  {
    path: "/Cart-My-Cart",
    title: "Cart-My-Cart",
    component: () => import("../views/Cart-My-Cart.vue"),
    props: true,
  },
  //
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
