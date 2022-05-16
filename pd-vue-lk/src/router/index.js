import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "@/views/DashboardView";
import AssociationsView from "@/views/AssociationsView";
import BooksView from "@/views/BooksView";
import BotView from "@/views/BotView";
import GenresView from "@/views/GenresView";
import SeriesView from "@/views/SeriesView";
import StatisticView from "@/views/StatisticView";
import UsersView from "@/views/UsersView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },

  {
    path: "/associations",
    name: "associations",
    component: AssociationsView,
  },
  {
    path: "/books",
    name: "books",
    component: BooksView,
  },
  {
    path: "/bot",
    name: "bot",
    component: BotView,
  },
  {
    path: "/genres",
    name: "genres",
    component: GenresView,
  },
  {
    path: "/series",
    name: "series",
    component: SeriesView,
  },
  {
    path: "/statistic",
    name: "statistic",
    component: StatisticView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
