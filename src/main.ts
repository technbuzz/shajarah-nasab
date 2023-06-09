import './assets/main.css'
import 'vexip-ui/es/css/button'
// import 'vexip-ui/es/css/modal'
import { createApp } from 'vue'
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp  } from "./firebase";
import { install } from 'vexip-ui'

import 'vuetify/styles'
import { createVuetify } from "vuetify";
import { VCard } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'
import { VDialog } from 'vuetify/components/VDialog'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'

import router from './router'
import App from './App.vue';

const app = createApp(App)

app.use(router)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})
app.use(install, {prefix: 'V'})

const vuetify = createVuetify({
  components: {
    VBtn,
    VCard,
    VDialog,
    VForm,
    VTextField
  },
  directives: {
  },
})
app.use(vuetify)

app.mount('#app')
