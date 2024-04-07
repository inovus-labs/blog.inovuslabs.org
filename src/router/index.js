import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blogview from "@/views/Blogview.vue";
import AuthorView from "@/views/AuthorView.vue";
import TagView from "@/views/TagView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blogview,
    },
    {
      path: "/author",
      name: "AuthorView",
      component: AuthorView,
      meta: {
        title: "Author",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/Tag",
      name: "TagView",
      component: TagView,
      meta: {
        title: "Tag",
      },
    },
  ],
});

export default router;
