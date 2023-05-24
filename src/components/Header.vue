<script setup lang="ts">
import { useCurrentUser } from 'vuefire';
import Login from "./Login.vue";
import { getAuth } from 'firebase/auth';
import { ref } from 'vue';

const auth = getAuth()
const user = useCurrentUser()
const dialog = ref<HTMLDialogElement>(null)

function logout() {
  auth.signOut()
}

function presentLogin() {
  dialog.value.show()
}

function hideLogin() {
  dialog.value.close()
}

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
  <p v-if="user">User is logged in <button @click="logout">Logout</button></p>
  <p v-else><button @click="dialog.showModal">Login</button></p>

  <dialog ref="dialog">
    <Login @close="hideLogin" />
  </dialog>
</template>
