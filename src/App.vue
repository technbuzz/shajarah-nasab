<script setup lang="ts">

import { useI18n } from "vue-i18n";
import { useCollection } from 'vuefire'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { personsRef } from "./firebase";
import PersonName from './components/PersonName.vue'
import {type Person}  from "./components/Person";
import Header  from "./components/Header.vue";
import FamilyTree  from "./components/FamilyTree.vue";



</script>

<template>

  <Header />
  <FamilyTree />
  <!-- <ul class="person-list mt-4 space-y-4"> -->
  <!--   <li v-for="item in persons"> -->
  <!--     <div class="person text-center space-y-2"> -->
  <!--       <img class="m-auto" src="@/assets/user.png" width="64"> -->
  <!--       <PersonName :name="item.name.ur" /> -->
  <!--       <p class="text-slate-400" v-if="item.description">{{ item.description.ur}}</p> -->
  <!--       <v-btn size="small" variant="outlined" @click="presentPerson(item.id)">{{ t('verb.edit')}}</v-btn> -->
  <!--     </div> -->
  <!--   </li> -->
  <!-- </ul> -->

  <!-- <v-btn @click="presentPerson()">{{ t('verb.addNew')}}</v-btn> -->
  <!-- <v-dialog title="Login" v-model="addPersonDialog" width="400" > -->
  <!--   <AddPerson :id="personId" @close="hidePersonAdd" /> -->
  <!-- </v-dialog> -->
  <!-- <RouterView /> -->
</template>
