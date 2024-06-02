import Vue from 'vue'
import Router from 'vue-router'
import Profile from '.components/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
    
  ]
})