<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from 'vexip-ui'

interface Creds {
  email: string;
  password: string;
}

const formData = ref<Creds | null>({
  email: '',
  password: '',
})
function doLogin() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, formData.value.email, formData.value.password).then(respone => console.log(response))
    .catch(error => console.log(error))
}

</script>

<template>
  <form @submit.prevent="doLogin" class="space-y-4">
    <p>
      <label>
        ای میل
        <input type="text" v-model="formData.email">
      </label>
    </p>

    <p>
      <label>
        پاس ورڈ
        <input type="text" v-model="formData.password">
      </label>
    </p>
    <p>
      <Button type="primary">محفوظ کریں</Button>
      <Button button-type="button" @click="$emit('close')">خروج</Button>
    </p>
  </form>
</template>

<style scoped>
input, textarea {
  @apply border rounded;
}
</style>
