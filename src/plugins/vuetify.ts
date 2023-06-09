import { createVuetify  } from "vuetify";
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { VCard, VCardText } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'
import { VSelect } from 'vuetify/components/VSelect'
import { VProgressCircular } from "vuetify/components/VProgressCircular";
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
    VProgressCircular,
    VSelect,
  },
  // components,
  directives: {},
})
