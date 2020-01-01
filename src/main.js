import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'

// import nav from './components/nav.vue'

// Vue.component('app-nav', nav)
Vue.use(VueResource)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.filter('dateConvert', function (value) {
  let msec = new Date(value)
  return msec.toString().substring(4, 10)
})
Vue.filter('shortenString', function (value) {
  return value.length > 150 ? value.substring(0, 150) + '...  Read more' : value + '...  Read more'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
