import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
Vue.config.productionTip = false


import VueLazyload from 'vue-lazyload'


// or with options
const loadimage = require('./assets/img/lazyloading.gif')
const errorImage = require('./assets/img/lazyloading.gif')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1,
  observer : true,
  error: errorImage,
})


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')