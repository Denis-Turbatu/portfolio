import { createRouter, createWebHistory } from "vue-router";
import ProjectPage from "./pages/ProjectPage.vue";
import AppProjects from "./components/AppProjects.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: 'home',
      component: AppProjects,
      props: true
    },
    {
      path: "/progetto/:name",
      name: 'progetto',
      component: ProjectPage,
      props: true
    }
  ]
});

export { router };
