<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'

    const state = ref(0)
    const person = ref(null)
fetch('data.json').then(resp => resp.json()).then(data => person.value = data )


    console.log(state)

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
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
    <li v-for="item in person">{{ item.name.en.firstName}}</li>

  </ul>

  <pre> state {{ state}} </pre>
  <RouterView />
</template>

<script lang="ts">
</script>

<style scoped>
</style>
