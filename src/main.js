import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const routes = [{ path: "/", name: "Home", component: Home }];

const router = createRouter({
  history: createWebHistory("/gourav-portfolio/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

const app = createApp(App);
app.use(router);

app.mount("#app");

// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});
