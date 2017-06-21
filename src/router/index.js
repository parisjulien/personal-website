import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: require('../views/Home')
    },
    {
      name: 'blog',
      path: '/blog',
      component: require('../views/Blog')
    },
    {
      name: 'projects',
      path: '/projets',
      component: require('../views/Projets')
    },
    {
      name: 'cv',
      path: '/cv',
      component: require('../views/CV')
    }
  ]
})
