import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      //passing in a dnymaic import directly into the component means that when the page loads it will not pass in
      //the other pages i.e if we load projects page it will also not load in the home page and increase performance
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      //we need the id to be a wild card so we add a : by the ID
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/views/SingleProjectView.vue')
    }
  ]
})

export default router
