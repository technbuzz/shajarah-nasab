import { createVuetify } from "vuetify";
import { VCard } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'
import { VDialog } from 'vuetify/components/VDialog'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'
import { VTextarea } from 'vuetify/components/VTextarea'

export const vuetify = createVuetify({
  components: {
    VBtn,
    VCard,
    VDialog,
    VForm,
    VTextField,
    VTextarea
  },
  // components,
  directives: {},
})
