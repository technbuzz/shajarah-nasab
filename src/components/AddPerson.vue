<script setup lang="ts">
import { addDoc } from 'firebase/firestore';
import { ref, reactive } from 'vue';
import { personsRef } from '../firebase'
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

const form = ref({
  name: {
    ur: {
      firstName: "",
      lastName: ""
    }
  },
  description: {
    ur: '',
    en: '',
  }
})

function addPerson() {
  debugger
  console.log(form.value)
  addDoc(personsRef, form.value)
}


</script>

<template>
  <v-card>
    <v-card-text>
        <v-form @submit.prevent="addPerson">
          <legend>Welcome back!</legend>
          <v-text-field v-model="form.name.ur.firstName" label=" پہلا نام: " name="firstName" />
          <v-text-field v-model="form.name.ur.lastName" label=" ٓآخری نام: " name="lastName" />
          <v-textarea v-model="form.description.ur" label=" مزید " name="lastName"></v-textarea>
          <v-btn @click="$emit('close')">خروج</v-btn>
          <v-btn type="submit" color="primary">محفوظ کریں</v-btn>
        </v-form>
    </v-card-text>
  </v-card>
  <!-- <form @submit.prevent="addPerson" class="space-y-4"> -->
  <!--   <p> -->
  <!--     <label> -->
  <!--       لقب -->
  <!--       <select v-model="formData.name.ur.title"> -->
  <!--         <option disabled value="">--</option> -->
  <!--         <option value="Mr.">Mr.</option> -->
  <!--         <option value="بابا">بابا</option> -->
  <!--       </select> -->
  <!--     </label> -->
  <!--   </p> -->
  <!--   <p> -->
  <!--     <label> -->
  <!--       پہلا نام: -->
  <!--       <input type="text" v-model="formData.name.ur.firstName"> -->
  <!--     </label> -->
  <!--   </p> -->
  <!---->
  <!--   <p> -->
  <!--     <label> -->
  <!--       ٓآخری نام: -->
  <!--       <input type="text" v-model="formData.name.ur.lastName"> -->
  <!--     </label> -->
  <!--   </p> -->
  <!--   <p> -->
  <!--     <label> -->
  <!--       مزید -->
  <!--       <textarea v-model="formData.description.ur"></textarea> -->
  <!--     </label> -->
  <!--   </p> -->
  <!--   <p> -->
  <!--     <button type="submit">محفوظ کریں</button> -->
  <!--   </p> -->
  <!-- </form> -->
</template>

<style scoped>
input,
textarea {
  @apply border rounded;
}
</style>
