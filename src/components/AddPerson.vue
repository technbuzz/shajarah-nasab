<script setup lang="ts">
import { VDialog } from 'vuetify/components/VDialog'
import { VTextarea } from 'vuetify/components/VTextarea'
import { VSwitch } from 'vuetify/components/VSwitch'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'

import { useI18n } from "vue-i18n";
import { deleteDoc, addDoc,  doc, getDoc, setDoc } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { personsRef } from '../firebase'
import type { Person } from "./Person";
import router from "@/router";
const { t } = useI18n()

const props = defineProps(['id']);
const dialog = ref(true)

const formRef = ref<HTMLFormElement>()
const submitting = ref(false)


let form = ref<Person>({
  ...(history.state?.mid && {mid: history.state?.mid}),
  ...(history.state?.fid && {fid: history.state?.fid}),
  gender: history.state?.gender,
  visible: true,
  order: 0,
  ...(history.state?.pids && {pids: history.state?.pids}),
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
  if(props.id) {
    const resp  = await getDoc(doc(personsRef, props.id))
    form.value = resp.data() as unknown as any
  }
})


async function upSertPerson() {
  console.log(form.value)
  submitting.value = true
  if (props.id) {
    await setDoc(doc(personsRef, props.id), form.value)
  } else {
    await addDoc(personsRef, form.value)
  }
  submitting.value = false
  close()
}

function close() {
  router.back()
  // router.push('/')
}

async function remove() {
  if(props.id) {
    try {
      const resp =  await getDoc(doc(personsRef, props.id))
      await deleteDoc(doc(personsRef, resp.id))
      close()
    } catch (error) {
      console.log('something went wrong')
    }
  }
}


</script>

<template>
  <v-dialog :persistent="true" v-model="dialog" width="400">
  <v-card>
    <v-card-text >
      <v-form ref="formRef"  @submit.prevent="upSertPerson">
        <!-- <pre>id {{props.id}} </pre> -->
        <!-- <pre>fid {{form.fid}}</pre> -->
        <!-- <pre>pid {{form.pids}}</pre> -->
        <!-- <pre>mid {{form.mid}}</pre> -->
        <div class="flex" >
          <v-select class="me-1.5" v-model="form.name.ur.title" :label="t('form.title')" :items="['', 'Mr.', 'بابا']"></v-select>
          <v-select v-model="form.gender" :label="t('form.gender')" 
            :items="[{ title: 'مرد', value: 'male' },{ title:'عورت', value: 'female'}]"></v-select>
        </div>
        <div class="flex">
          <v-text-field class="me-1.5"  v-model="form.name.ur.firstName" :label="t('form.firstName')" name="firstName" />
          <v-text-field  v-model="form.name.ur.lastName" :label="t('form.lastName')" name="lastName" />
        </div>
        <div class="flex">
          <v-switch color="primary" v-model="form.visible" :label="t('form.visible')" ></v-switch>
          <v-text-field type="number" v-model.number="form.order" :label="t('form.order')" name="order" />

        </div>
        <v-textarea v-model="form.description.ur" :label="t('form.desc')" name="description"></v-textarea>
        <v-btn type="submit" color="primary" :loading="submitting">{{ t('verb.save') }}</v-btn>
        <!-- <v-btn @click="$emit('close')">{{ t('verb.close')}}</v-btn> -->
        <v-btn @click="close">{{ t('verb.close')}}</v-btn>
        <v-btn @click="remove(form.id)">Delete</v-btn>

      </v-form>
    </v-card-text>
  </v-card>
  </v-dialog>
</template>

