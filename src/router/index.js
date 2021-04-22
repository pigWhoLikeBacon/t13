import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from '../layout/index'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/list",
    component: Layout,
    children: [
      {
        path: '/list',
        component: () =>
          import("../views/list/index.vue"),
      }
    ]
  },
  {
    path: "/search/:id",
    component: Layout,
    children: [
      {
        path: '/search/:id',
        component: () =>
            import("../views/list/search.vue"),
      }
    ]
  },
  {
    path: "/tag/:id",
    component: Layout,
    children: [
      {
        path: '/tag/:id',
        component: () =>
            import("../views/list/tag.vue"),
      }
    ]
  },
  {
    path: "/file/:id",
    component: Layout,
    children: [
      {
        path: '/file/:id',
        component: () =>
            import("../views/list/file.vue"),
      }
    ]
  },
  {
    path: "/single/:id",
    component: Layout,
    children: [
      {
        path: '/single/:id',
        component: () =>
            import("../views/single/index.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
