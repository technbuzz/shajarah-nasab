<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { deleteDoc, addDoc,  doc, getDoc, setDoc } from 'firebase/firestore';
import { ref,  onMounted } from 'vue';
import { personsRef } from '../firebase'
import type { Person } from "./Person";
const { t } = useI18n()

const props = defineProps(['id','fid','gender']);
const emit = defineEmits(['close'])

const formRef = ref<HTMLFormElement>()

let form = ref<Person>({
  fid: "",
  gender: "",
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

onMounted(async () => {
  if (props.id) {
    const resp =  await getDoc(doc(personsRef, props.id))
    form.value = resp.data() as unknown as any
  } else if(props.fid){
    form.value.fid = props.fid
    if(props.gender === 'male') {
      form.value.gender = props.gender
    } else {
      form.value.gender = props.gender
    }
  } else {
    formRef.value?.reset()
  }

})

async function upSertPerson() {
  if (props.id) {
    await setDoc(doc(personsRef, props.id), form.value)
  } else {
    await addDoc(personsRef, form.value)
  }
  emit('close')
}

async function remove(id:string) {
  if(props.id) {
    try {
      console.log(personsRef)
      const resp =  await getDoc(doc(personsRef, props.id))
      await deleteDoc(doc(personsRef, resp.id))
      emit('close')
    } catch (error) {
      console.log('something went wrong')
    }
  }
}


</script>

<template>
  <v-card>
    <v-card-text >
      <v-form ref="formRef"  @submit.prevent="upSertPerson">
        <!-- <legend>Welcome back!</legend> -->
        <div class="flex" >
          <v-select class="me-1.5" v-model="form.name.ur.title" :label="t('form.title')" :items="['', 'Mr.', 'بابا']"></v-select>
          <v-select v-model="form.gender" :label="t('form.gender')" 
            :items="[{ title: 'مرد', value: 'male' },{ title:'عورت', value: 'female'}]"></v-select>
        </div>
        <v-text-field  v-model="form.name.ur.firstName" :label="t('form.firstName')" name="firstName" />
        <v-text-field  v-model="form.name.ur.lastName" :label="t('form.lastName')" name="lastName" />
        <v-textarea v-model="form.description.ur" :label="t('form.desc')" name="description"></v-textarea>
        <v-btn type="submit" color="primary">{{ t('verb.save') }}</v-btn>
        <v-btn @click="$emit('close')">{{ t('verb.close')}}</v-btn>
        <v-btn @click="remove(form.id)">Delete</v-btn>

      </v-form>
    </v-card-text>
  </v-card>
</template>

:wa


q
q
