<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { reactive } from 'vue';
const { t } = useI18n()

interface Creds {
  email: string;
  password: string;
}

const emits = defineEmits([ 'close' ])

const form = reactive({
  email: '',
  password: ''
})

function doLogin() {
  debugger
  const auth = getAuth()
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then(_ => emits('close'))
    .catch(error => console.log(error))
}

</script>

<template>
  <v-card>
    <v-card-text>
      <v-form @submit.prevent="doLogin">
        <!-- <legend>Welcome back!</legend> -->
        <v-text-field v-model="form.email" :label="t('form.email')" name="email" />
        <v-text-field v-model="form.password" :label="t('form.password')" name="password" type="password" />
        <v-btn type="submit" color="primary">{{t('verb.login')}}</v-btn>
        <v-btn @click="$emit('close')">{{ t('verb.close') }}</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>
input,
textarea {
  @apply border rounded;
}
</style>
