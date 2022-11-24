import { createRouter, createWebHistory } from "vue-router";
import { piniaDemo } from "@/piniaStore";
import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // beforeEnter: async (to, from, next) => {
    //   try {
    //     const store = piniaDemo();
    //     await store.fetchApiTest();
    //   } catch (err) {
    //     console.log(err);
    //   }
    //   next();
    // },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/home_composition",
    name: "HomeComposition",
    component: () => import("@/views/HomeComposition.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
