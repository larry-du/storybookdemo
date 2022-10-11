<template>
  <div @click="$emit('check')">AAAAAAAAAAAAA</div>
</template>
<script>
export default {
  inheritAttrs: false,
};
</script>
<script setup>
import { onMounted, useAttrs } from "vue";

const props = defineProps({
  onCheck: {
    type: Function,
  },
});
defineEmits(["check"]);

onMounted(() => {
  const attrs = useAttrs();
  console.log(props);
});
</script>
