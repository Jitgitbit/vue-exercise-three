import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'                   // the @ there means go to the root of the project !!
import ViewProfile from '@/components/ViewProfile'                   // the @ there means go to the root of the project !!

Vue.use(Router)

export default new Router({
  mode: 'history',           // #  vs  history  :   you will need this for backend !!!
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/profile/:user_id',
      name: 'ViewProfile',
      component: ViewProfile
    },
  ]
})
