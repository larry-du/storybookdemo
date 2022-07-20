<script setup>
import { toRefs } from "vue";
defineEmits(["click"]);
const props = defineProps({
  title: {
    type: String,
    default: "hi",
  },
  buttonStyle: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const { title, buttonStyle, disabled } = toRefs(props);
</script>
<template>
  <button
    type="button"
    :disabled="disabled"
    class="baseButton"
    :class="[buttonStyle, { disabled: disabled }]"
    @click.prevent="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<style lang="sass" scoped>
.baseButton
    background-color: #F4F4F4
    color: #54667A
    border: 1px solid #DDDDDD
    font-size: 16px
    padding: 7px
    border-radius: 5px
    outline: unset
    cursor: pointer
    &:hover
      color: #FFFFFF
      background-color: #54667A
      border: 1px solid #54667A
    .editIcon
      display: none
    &.disabled
      opacity: 50%
      cursor: not-allowed
.baseButton.navy
    color: #fff
    background-color: #374A60
.baseButton.white
    background-color: #FFFFFF
    &:hover
      color: #FFFFFF
      background-color: #54667A
      border: 1px solid #54667A
</style>
