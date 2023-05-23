<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'
import PersonName from './components/PersonName.vue'

    const person = ref(null)
  fetch('data.json').then(resp => resp.json()).then(data => person.value = data )



</script>

<template>
  <header class="text-center">
    <!---->
    <!-- <div class="wrapper"> -->
    <!--   <HelloWorld msg="You did it!" /> -->
    <!---->
    <!--   <nav> -->
    <!--     <RouterLink to="/">Home</RouterLink> -->
    <!--     <RouterLink to="/about">About</RouterLink> -->
    <!--   </nav> -->
       <h1 class="text-2xl mt-2 mb-4 font-bold">شجرۃ نسب ۔ قریش</h1>
      <h2 class="text-xl my-1 mb-6 font-bold">سکن گاون ۔ کنگانہ۔ قوم شیخان ۔ تپہ سموزی</h2>   <!-- </div> -->
  </header>
  <ul class="person-list mt-4">
    <li v-for="item in person">
      <div class="person text-center">
        <img class="m-auto" src="@/assets/user.png" width="64">
        <!-- <h3 class="person__name font-bold text-lg" v-if="item.name.ur"> -->
        <!--   {{ur.title}} {{ur.firstName}} {{ur.lastName}} -->
        <!-- </h3> -->
        <PersonName :name="item.name.ur" />
        <p class="text-slate-400">{{item.description.ur}}</p>
      </div>
    </li>
  </ul>

  <RouterView />
</template>

<script lang="ts">
</script>

<style scoped>
</style>
