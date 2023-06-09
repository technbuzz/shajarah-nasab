<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from 'vexip-ui'
import { reactive } from 'vue';

interface Creds {
  email: string;
  password: string;
}

const formData = ref<Creds | null>({
  email: '',
  password: '',
})

const form = reactive({
  email: '',
  password: ''
})
function doLogin() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, formData.value.email, formData.value.password).then(respone => console.log(response))
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
      <v-btn >خروج</v-btn>
      <v-btn color="primary" @click="$emit('close')">محفوظ کریں</v-btn>
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
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
input,
textarea {
  @apply border rounded;
}
</style>
