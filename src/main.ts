import './assets/main.css'
import 'vexip-ui/es/css/button'
import 'vexip-ui/es/css/modal'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp  } from "./firebase";
import { install } from 'vexip-ui'

import router from './router'
import App from './App.vue';

const app = createApp(App)

app.use(router)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})
app.use(install, {prefix: 'V'})

app.mount('#app')
