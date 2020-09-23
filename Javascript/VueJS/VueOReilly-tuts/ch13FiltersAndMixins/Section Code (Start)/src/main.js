import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', (value)=> {
  return value.toLowerCase()
})

Vue.mixin({
  created() {
    console.log('Global mixin - created hook')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
