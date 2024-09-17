import { createRouter, createWebHistory } from 'vue-router'
import AppProjects from './src/components/AppProjects.vue'
import AppProjectDetails from './src/components/AppProjectDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppProjects
  },
  {
    path: '/project/:name',
    name: 'AppProjectDetails',
    component: AppProjectDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      const offset = 200; // Modifica questo valore in base all'altezza del tuo header
      const element = document.querySelector(to.hash);
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        return { top, behavior: 'smooth' };
      }
    } else {
      return { top: 0 };
    }
  }
})

export default router
