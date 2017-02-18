import Vue from 'vue'
import App from './App'
import Dialog from 'main'

Vue.use(Dialog)

new Vue({
  el: '#app',
  render: h => h(App)
})
