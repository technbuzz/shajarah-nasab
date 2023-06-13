<script setup lang="ts">

import { useI18n } from "vue-i18n";
import { useLocale } from "vuetify";
const { current } = useLocale()
const { t, availableLocales, locale } = useI18n()

function changeLang(lang: string) {
  locale.value = lang
  current.value = lang
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  console.log(document.documentElement.style.fontFamily)
  document.documentElement.style
    .setProperty('font-family', `var(--${lang}-locale)`);
  console.log(document.documentElement.style.fontFamily)
}


</script>
<template>
  <div class="flex justify-center items-center">
    <div class="w-24">
      <v-select @update:model-value="changeLang" :value="locale" density="compact" hide-details="auto"
        :label="t('verb.language')" :items="availableLocales"></v-select>
    </div>
  </div>
</template>


