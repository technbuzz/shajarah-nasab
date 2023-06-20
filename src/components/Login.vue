<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { VDialog } from 'vuetify/components/VDialog'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { reactive, ref } from 'vue';
import router from "@/router";
const { t } = useI18n()

interface Creds {
  email: string;
  password: string;
}

const dialog = ref(true)

const form = reactive({
  email: '',
  password: ''
})

function doLogin() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then(_ => router.push('/'))
    .catch(error => console.log(error))
}

function dismiss() {
  router.push('/')
  dialog.value = false
}

</script>

<template>
  <v-dialog title="Login" v-model="dialog" width="400">
    <v-card>
      <v-card-text>
        <v-form @submit.prevent="doLogin">
          <!-- <legend>Welcome back!</legend> -->
          <v-text-field v-model="form.email" :label="t('form.email')" name="email" />
          <v-text-field v-model="form.password" :label="t('form.password')" name="password" type="password" />
          <v-btn type="submit" color="primary">{{ t('verb.login') }}</v-btn>
          <v-btn @click="dismiss">{{ t('verb.close') }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
input,
textarea {
  @apply border rounded;
}
</style>
