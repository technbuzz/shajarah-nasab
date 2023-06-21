import path from 'path'
import { createRouter, createWebHistory } from 'vue-router'

import { useCurrentUser } from "vuefire";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/login',
      component: () => import('../components/Login.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/person',
      beforeEnter: () => {
        const user = useCurrentUser()
        if (user.value) return true
        return false

      },
      children: [
        {
          path: ':id',
          component: () => import('../components/AddPerson.vue'),
          props: true,
        }, 
        {
          path: 'new',
          name: 'new',
          component: () => import('../components/AddPerson.vue'),
          props: true,
        }
      ]
    }
  ]
})

export default router
