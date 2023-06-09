<script setup lang="ts">
import { useCurrentUser } from 'vuefire';
import Login from "./Login.vue";
import { getAuth } from 'firebase/auth';
import { ref } from 'vue';
import { Modal, Button } from "vexip-ui";

const auth = getAuth()
const user = useCurrentUser()
const modalActive = ref(false)
const dialog = ref(false)

function logout() {
  auth.signOut()
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
  <p v-if="user">User is logged in <Button @click="logout">Logout</Button></p>
  <p v-else><Button @click="presentLogin">Login</Button></p>
    <!-- <Modal -->
    <!--   v-model:active="modalActive" -->
    <!--   title="لاگ ان" -->
    <!--   :width="300" -->
    <!--   top="auto" -->
    <!--   transfer -->
    <!--   no-footer -->
    <!-- > -->
    <!-- <Login @close="hideLogin" /> -->
    <!-- </Modal> -->

    <v-dialog title="Login" v-model="dialog" width="400" >

        <Login @close="hideLogin" />

    </v-dialog>

</template>
