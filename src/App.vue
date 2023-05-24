<script setup lang="ts">
import { useCollection, useFirestore } from 'vuefire'
import { collection } from 'firebase/firestore'
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'
import PersonName from './components/PersonName.vue'
import  { Person } from "./components/Person";
import AddPerson  from "./components/AddPerson.vue";
import Header  from "./components/Header.vue";


const person= ref<Person[] | null>(null)
fetch('data.json').then(resp => resp.json()).then(data => person.value = data)


const db = useFirestore()
const persons = useCollection(collection(db, 'persons'))
console.log(persons.value)

</script>

<template>

  <Header />

  <ul class="person-list mt-4">
    <li v-for="item in persons">
      <div class="person text-center">
        <img class="m-auto" src="@/assets/user.png" width="64">
        <!-- <PersonName :name="item.name.ur" /> -->
        <p class="text-slate-400" v-if="item.description">{{ item.description.ur}}</p>
      </div>
    </li>
  </ul>
  <AddPerson />

  <RouterView />
</template>
