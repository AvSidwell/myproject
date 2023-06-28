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
    component: () => import("../views/ContactView.vue"),
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
  //
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
