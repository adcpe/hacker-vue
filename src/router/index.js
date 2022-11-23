import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomePage },
    { path: '/new', component: HomePage },
    { path: '/top', component: HomePage },
    { path: '/best', component: HomePage },
    { path: '/ask', component: HomePage },
    { path: '/show', component: HomePage },
    { path: '/jobs', component: HomePage },
    { path: '/item/:id', component: () => import('../views/ItemPage.vue') },
    { path: '/user/:id', component: () => import('../views/UserPage.vue') }
  ]
})

export default router
