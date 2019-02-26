// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores'
// Shared components
import TagsView from './components/Shared/TagsView'
Vue.component('TagsView', TagsView)

Vue.config.productionTip = false


Vue.prototype.$Service = require('@/assets/service/service.js').default
Vue.prototype.$Config = require('@/assets/config.js')
Vue.prototype.$Method = require('@/assets/method.js')
Vue.prototype.$layui = require('@/assets/layui')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
