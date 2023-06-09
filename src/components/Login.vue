<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { reactive } from 'vue';

interface Creds {
  email: string;
  password: string;
}

const emits = defineEmits([
  'close'
])

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
<v-container class="pt-10">
    <v-form @submit.prevent="doLogin">
      <legend>Welcome back!</legend>
      <v-text-field v-model="form.email" label="Email" name="email" />
      <v-text-field
        v-model="form.password"
        label="Password"
        name="password"
        type="password"
      />
      <v-btn @click="$emit('close')">خروج</v-btn>
      <v-btn type="submit" color="primary" >محفوظ کریں</v-btn>
    </v-form>
  </v-container>
      <!-- <form @submit.prevent="doLogin" class="space-y-4"> -->
      <!--   <p> -->
      <!--     <label> -->
      <!--       ای میل -->
      <!--       <input type="text" v-model="formData.email"> -->
      <!--     </label> -->
      <!--   </p> -->
      <!---->
      <!--   <p> -->
      <!--     <label> -->
      <!--       پاس ورڈ -->
      <!--       <input type="text" v-model="formData.password"> -->
      <!--     </label> -->
      <!--   </p> -->
      <!-- </form> -->
    </v-card-text>
  </v-card>
</template>

<style scoped>
input,
textarea {
  @apply border rounded;
}
</style>
