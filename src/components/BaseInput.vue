<script setup>
import { toRefs, computed } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  placeHolder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  titleStyle: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  name: { type: String, default: "" },
});

const { placeHolder, modelValue, name } = toRefs(props);
// const updateText = computed({
//   get() {
//     return modelValue.value;
//   },
//   set(newData) {
//     emit("update:modelValue", newData);
//   },
// });
</script>
<template>
  <label for="test" class="title" :class="[titleStyle]">{{ label }}</label>
  <input
    id="test"
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
    :placeHolder="placeHolder"
    type="text"
    :name="name"
  />

  <!-- <label class="title">V-model</label>
  <input
    id="test"
    v-model="updateText"
    :placeHolder="placeHolder"
    type="text"
  /> -->
</template>

<style lang="sass" scoped>
.title
    color: red
    &.blue
        color: lightblue
</style>
