import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: require('../views/Home')
    },
    {
      name: 'projet',
      path: '/projets',
      component: require('../views/Projets')
    }
  ]
})
