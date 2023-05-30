import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'levels',
      component: HomeView
    },
    {
      path: "/levels",
      name: "LevelsIndex",
      component: () => import('../views/levels/LevelsIndex.vue')
    },
    {
      path: "/levels/create",
      name: "LevelsCreate",
      component: () => import('../views/levels/LevelsCreate.vue')
    },
    {
      path: "/levels/:id/edit",
      name: "LevelsEdit",
      component: () => import('../views/levels/LevelsEdit.vue'),
      props: true,
    },

    {
      path: "/devs",
      name: "DevsIndex",
      component: () => import('../views/devs/DevsIndex.vue')
    },
    {
      path: "/devs/create",
      name: "DevsCreate",
      component: () => import('../views/devs/DevsCreate.vue')
    },
    {
      path: "/devs/:id/edit",
      name: "DevsEdit",
      component: () => import('../views/devs/DevsEdit.vue'),
      props: true,
    },
  ]
})

export default router
