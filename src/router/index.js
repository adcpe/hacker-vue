import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewPage.vue')
    },
    {
      path: '/top',
      name: 'top',
      component: HomePage
    },
    {
      path: '/best',
      name: 'best',
      component: () => import('../views/BestPage.vue')
    },
    {
      path: '/ask',
      name: 'ask',
      component: () => import('../views/AskPage.vue')
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('../views/ShowPage.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../views/JobsPage.vue')
    },
    {
      path: '/item/:id',
      name: 'item',
      component: () => import('../views/ItemPage.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/UserPage.vue')
    }
  ]
})

export default router
