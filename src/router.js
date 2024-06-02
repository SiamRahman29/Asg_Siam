// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Profile from './ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
    // other routes...
  ]
})

export default router