import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCodemirror from 'vue-codemirror'

import 'codemirror/lib/codemirror.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueCodemirror,

)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
