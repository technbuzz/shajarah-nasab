<script setup lang="ts">
import { addDoc } from 'firebase/firestore';
import { ref } from 'vue';
import {personsRef} from '../firebase'
interface FormData {
  name: {
    ur: {
      firstName: string;
      lastName: string;
      title: string;
    }
  },
  description: {
    ur: string;
    en: string
  };
}

const formData = ref<FormData | null>({
  name: {
    ur: {
      firstName: '',
      lastName: '',
      title: '',
    }
  },
  description: {
    ur: '',
    en: '',
  }
})

function addPerson() {
  console.log(formData.value)
  addDoc(personsRef, formData.value)
}


</script>

<template>
  <form @submit.prevent="addPerson" class="space-y-4">
    <p>
      <label>
        لقب
        <select v-model="formData.name.ur.title">
          <option disabled value="">--</option>
          <option value="Mr.">Mr.</option>
          <option value="بابا">بابا</option>
        </select>
      </label>
    </p>
    <p>
      <label>
پہلا نام:
        <input type="text" v-model="formData.name.ur.firstName">
      </label>
    </p>

    <p>
      <label>
        ٓآخری نام:
        <input type="text" v-model="formData.name.ur.lastName">
      </label>
    </p>
    <p>
      <label>
        مزید
        <textarea v-model="formData.description.ur"></textarea>
      </label>
    </p>
    <p>
      <button type="submit">محفوظ کریں</button>
    </p>
  </form>
  <pre>{{ formData }}</pre>
</template>

<style scoped>
input, textarea {
  @apply border rounded;
}
</style>
