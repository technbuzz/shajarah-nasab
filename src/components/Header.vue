<script setup lang="ts">
import { useCurrentUser } from 'vuefire';
import Login from "./Login.vue";
import { getAuth } from 'firebase/auth';
import { ref } from 'vue';

const auth = getAuth()
const user = useCurrentUser()
const modalActive = ref(false)
const dialog = ref(false)

async function logout() {
  const resp = await auth.signOut()
}

function presentLogin() {
  modalActive.value = true
  dialog.value = true
}

function hideLogin() {
  dialog.value = false
  modalActive.value = false
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
  <p v-if="user">صارف لاگ اِن ہے<v-btn @click="logout">اگ اوُٹ</v-btn></p>
  <p v-else><v-btn @click="presentLogin">لاگ اِن </v-btn></p>
  <!-- <p v-if="user">User is logged in <v-btn @click="logout">Logout</v-btn></p> -->
  <!-- <p v-else><v-btn @click="presentLogin">Login</v-btn></p> -->

    <v-dialog title="Login" v-model="dialog" width="400" >

        <Login @close="hideLogin" />

    </v-dialog>

</template>
