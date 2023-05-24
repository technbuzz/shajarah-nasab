<script setup lang="ts">
import { ref } from 'vue';
import { auth } from 'firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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

  // defineProps({
  //   formData: {
  //     type: Object as () => FormData,
  //     required: true
  //   }
  // })

</script>

<template>
  <form @submit.prevent="doLogin" class="space-y-4">
    <p>
      <label>
        Email:
        <input type="text" v-model="formData.email">
      </label>
    </p>

    <p>
      <label>
        Password:
        <input type="text" v-model="formData.password">
      </label>
    </p>
    <p>
      <button type="submit">محفوظ کریں</button>
      <button type="button" @click="$emit('close')">خروج</button>
    </p>
  </form>
</template>

<style scoped>
input, textarea {
  @apply border rounded;
}
</style>
