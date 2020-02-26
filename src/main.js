import Vue from 'vue'
import App from './App'
import router from './router/VueRouter'
import elementUI from 'element-ui'

Vue.use(elementUI)
 
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
