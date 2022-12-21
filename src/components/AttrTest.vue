<template>
  <div>
    <input type="text" />
  </div>
</template>

<script setup>
import { toRefs, computed, useAttrs } from "vue";
const attr = useAttrs();
const prop = defineProps({});
// console.log(prop);
console.log(attr);
</script>

<style lang="sass" scoped></style>
