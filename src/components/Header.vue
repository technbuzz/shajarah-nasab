<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useCurrentUser } from 'vuefire';
import { getAuth } from 'firebase/auth';


const auth = getAuth()
const user = useCurrentUser()
const { t } = useI18n()
import LangSwitcher from './LangSwitcher.vue'
import router from "@/router";

async function logout() {
  const resp = await auth.signOut()
}

function presentLogin() {
  router.push('/login')
}

</script>
<template>
  <header class="text-center">
    <!---->
    <!-- <div class="wrapperkk"> -->
    <!--   <HelloWorld msg="You did it!" /> -->
    <!---->
    <nav>
      <!-- <RouterLink to="/">Home</RouterLink> -->
      <!-- <RouterLink to="/person/0iUdHI2mjEtAcK1JtHBg">Person Details</RouterLink> -->
    </nav>
    <h1 class="text-2xl mt-2 mb-4 font-bold">شجرۃ نسب ۔ قریش</h1>
    <h2 class="text-xl my-1 mb-6 font-bold">سکن گاون ۔ کنگانہ۔ قوم شیخان ۔ تپہ سموزی</h2> <!-- </div> -->
    <div class="flex">
      <section>
        <p v-if="user">{{ t('login') }}<v-btn @click="logout">{{ t('verb.logout') }}</v-btn></p>
        <p v-else><v-btn @click="presentLogin">{{ t('verb.login') }}</v-btn></p>
      </section>
      <LangSwitcher />
    </div>
  </header>
</template>
