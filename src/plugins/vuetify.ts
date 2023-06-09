import { createVuetify } from "vuetify";
import { VCard, VCardText } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'
import { VDialog } from 'vuetify/components/VDialog'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'
import { VTextarea } from 'vuetify/components/VTextarea'
import { VSelect } from 'vuetify/components/VSelect'

export const vuetify = createVuetify({
  components: {
    VBtn,
    VCard,
    VCardText,
    VDialog,
    VForm,
    VTextField,
    VTextarea,
    VSelect
  },
  // components,
  directives: {},
})
