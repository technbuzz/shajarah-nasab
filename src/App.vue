<script setup lang="ts">
import { useCollection, useCurrentUser, useFirestore } from 'vuefire'
import { collection } from 'firebase/firestore'
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'
import PersonName from './components/PersonName.vue'
import  { Person } from "./components/Person";
import AddPerson  from "./components/AddPerson.vue";
import Login  from "./components/Login.vue";


const person= ref<Person[] | null>(null)
fetch('data.json').then(resp => resp.json()).then(data => person.value = data)


const db = useFirestore()
const persons = useCollection(collection(db, 'persons'))
const user = useCurrentUser()
console.log(persons.value)

</script>

<template>
  <header class="text-center">
    <!---->
    <!-- <div class="wrapperkk"> -->
    <!--   <HelloWorld msg="You did it!" /> -->
    <!---->
    <!--   <nav> -->
    <!--     <RouterLink to="/">Home</RouterLink> -->
    <!--     <RouterLink to="/about">About</RouterLink> -->
    <!--   </nav> -->
    <h1 class="text-2xl mt-2 mb-4 font-bold">شجرۃ نسب ۔ قریش</h1>
    <h2 class="text-xl my-1 mb-6 font-bold">سکن گاون ۔ کنگانہ۔ قوم شیخان ۔ تپہ سموزی</h2> <!-- </div> -->
  </header>

  <p v-if="user">User is logged in</p>

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
  <Login />

  <RouterView />
</template>
