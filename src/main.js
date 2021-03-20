import Vue from 'vue'
import App from './App.vue'
import router from './router'
import logs from './assets/model/logs'
import jokes from './assets/model/jokes'

Vue.config.productionTip = false



new Vue({
  router,
  data: {
    logs: logs,
    jokes: jokes,

  },
  render: h => h(App)
}).$mount('#app')
