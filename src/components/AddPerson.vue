<script setup lang="ts">
import { addDoc,  doc, setDoc } from 'firebase/firestore';
import { ref,  onMounted } from 'vue';
import { useDocument } from "vuefire";
import { personsRef } from '../firebase'

const props = defineProps({
  id: {
    type: String,
    required: false
  }
});
const emit = defineEmits(['close'])

const formRef = ref<HTMLFormElement>()

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

let form = ref({
  name: {
    ur: {
      firstName: "",
      lastName: "",
      title: ""
    }
  },
  description: {
    ur: '',
    en: '',
  }
})

onMounted(() => {
  if (props.id) {
    form = useDocument(doc(personsRef, props.id)) as unknown as any
  } else {
    formRef.value?.reset()
  }

})

async function addPerson() {
  if (props.id) {
    await setDoc(doc(personsRef, props.id), form.value)
  } else {
    await addDoc(personsRef, form.value)
  }
  emit('close')
}


</script>

<template>
  <v-card>
    <v-card-text>
      <v-form ref="formRef" @submit.prevent="addPerson">
        <!-- <legend>Welcome back!</legend> -->
        <v-select label="لقب" v-model="form.name.ur.title" :items="['', 'Mr.', 'بابا']"></v-select>
        <v-text-field  v-model="form.name.ur.firstName" label=" پہلا نام " name="firstName" />
        <v-text-field  v-model="form.name.ur.lastName" label=" ٓآخری نام " name="lastName" />
        <v-textarea v-model="form.description.ur" label=" مزید " name="lastName"></v-textarea>
        <v-btn type="submit" color="primary">محفوظ کریں</v-btn>
        <v-btn @click="$emit('close')">خروج</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

