import { createVuetify  } from "vuetify";
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { VCard, VCardText } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'
import { VDialog } from 'vuetify/components/VDialog'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'
import { VTextarea } from 'vuetify/components/VTextarea'
import { VSelect } from 'vuetify/components/VSelect'
import { VSwitch } from 'vuetify/components/VSwitch'
import { i18n } from "./i18n";
import { useI18n } from "vue-i18n";

export const vuetify = createVuetify({
  defaults: {
    VTextField: {
      style: 'line-height: 2'
    }
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
  // locale: {
  //   locale: 'ar'
  // },

  components: {
    VBtn,
    VCard,
    VCardText,
    VDialog,
    VForm,
    VTextField,
    VTextarea,
    VSelect,
    VSwitch
  },
  // components,
  directives: {},
})
