<script setup lang="ts">

import { RouterView } from 'vue-router'
import Header  from "./components/Header.vue";
import FamilyTree  from "./components/FamilyTree.vue";



</script>

<template>
  <Header />
  <FamilyTree />
  <RouterView />
</template>
