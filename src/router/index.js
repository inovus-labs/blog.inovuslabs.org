import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import Blogview from "@/views/Blogview.vue";
import AuthorView from "@/views/AuthorView.vue";
import TagView from "@/views/TagView.vue";

import AdminView from "@/views/admin/HomeView.vue";
import EditorView from "@/views/admin/EditorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/:slug",
      component: Blogview
    },
    {
      path: "/author",
      name: "AuthorView",
      component: AuthorView,
      meta: {
        title: "Author",
      },
    },
    {
      path: "/Tag",
      name: "TagView",
      component: TagView,
      meta: {
        title: "Tag",
      },
    },


    {
      path: "/admin",
      name: "admin",
      component: AdminView,
      meta: {
        title: "Admin",
      },
    },
    {
      path: "/admin/editor/post",
      name: "editor",
      component: EditorView,
      meta: {
        title: "Editor",
      },
    },

  ],
});


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Inovus Blogs`;
  next();
});


export default router;
