import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Work from './views/Work.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'

import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
