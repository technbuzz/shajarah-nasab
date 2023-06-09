import './assets/main.css'
import { createApp } from 'vue'
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./firebase";

import 'vuetify/styles'
import router from './router'
import { vuetify } from './plugins/vuetify';

import App from './App.vue';

const app = createApp(App)

app
  .use(router)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
  })

  .use(vuetify)

  .mount('#app')

