
<template>
  <h3 class="person__name font-bold text-lg" >
    {{name.title}} {{name.firstName}} {{name.lastName}}
  </h3>
</template>

<script setup lang="ts">
  defineProps(['name'])
</script>
