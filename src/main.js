import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})