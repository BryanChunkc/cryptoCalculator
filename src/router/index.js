import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "./../store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/fb",
    beforeEnter() {
      location.href =
        "https://www.facebook.com/sharer/sharer.php?u=facebook.com&quote=The Exchange rate now is 1 BTC = " +
        store.state.bpi +
        " " +
        store.state.currency;
    },
  },
  {
    path: "/twitter",
    beforeEnter() {
      location.href =
        "https://twitter.com/intent/tweet?text=The Exchange rate now is 1 BTC = " +
        store.state.bpi +
        " " +
        store.state.currency;
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
