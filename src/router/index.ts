import { h } from 'vue'
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
    },
    {
      //simple wildcard to mathc any route nested under the main domain
      //you can also set a specific route 404 for different pages
      //this wildcard can be anything and in any legnth. this will tell vue router to match any undefiend route
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: h('p', { style: 'color: red;' }, '404 Not Found')
    }
  ]
})

export default router
