import Vue from 'vue'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  render: h => h(require('./App'))
})
