<script setup lang="ts">
import { useCollection } from 'vuefire'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { personsRef } from "./firebase";
import PersonName from './components/PersonName.vue'
import {type Person}  from "./components/Person";
import AddPerson  from "./components/AddPerson.vue";
import Header  from "./components/Header.vue";


const person= ref<Person[] | null>(null)
fetch('data.json').then(resp => resp.json()).then(data => person.value = data)


const persons = useCollection(personsRef)

const addPersonDialog = ref(false)
const personId = ref<string|undefined>(undefined)

function presentPerson(id?:string) {
  addPersonDialog.value = true
  personId.value = id
}

function hidePersonAdd() {
  addPersonDialog.value = false
}

</script>

<template>

  <Header />

  <ul class="person-list mt-4 space-y-4">
    <li v-for="item in persons">
      <div class="person text-center space-y-2">
        <img class="m-auto" src="@/assets/user.png" width="64">
        <PersonName :name="item.name.ur" />
        <p class="text-slate-400" v-if="item.description">{{ item.description.ur}}</p>
        <v-btn size="small" variant="outlined" @click="presentPerson(item.id)">Edit User</v-btn>
      </div>
    </li>
  </ul>

  <v-btn @click="presentPerson()">Add New Person</v-btn>
    <v-dialog title="Login" v-model="addPersonDialog" width="400" >
      <AddPerson :id="personId" @close="hidePersonAdd" />
    </v-dialog>
  <RouterView />
</template>
