<script setup lang="ts">

import { RouterView } from 'vue-router'
import Header  from "./components/Header.vue";
import FamilyTree  from "./components/ftree/FamilyTree.vue";



</script>

<template>
  <Header />
  <FamilyTree />
  <RouterView />
</template>
