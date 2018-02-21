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
      name: 'projects',
      path: '/projets',
      component: require('../views/Projects')
    },
    {
      name: 'project',
      path: '/projet/:id',
      component: require('../views/Projet')
    },
    {
      name: 'blog',
      path: '/blog',
      component: require('../views/Blog')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
