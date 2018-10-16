import Vue from 'vue'
import App from './App.vue'

import vueFlatCalendar from './lib/index.js'
// import vueFlatCalendar from './assets/vue-flat-calendar.js'

Vue.use(vueFlatCalendar)

new Vue({
  el: '#app',
  render: h => h(App)
})
