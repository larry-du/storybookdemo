<script setup>
import { toRefs } from "vue";
defineEmits(["buttonClick"]);
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
    class="baseButton baseButton--theme"
    :class="[buttonStyle, { disabled: disabled }]"
    @click.prevent="$emit('buttonClick')"
  >
    {{ title }}
  </button>
</template>

<style lang="sass" scoped>
.baseButton--theme
  --theme-background: #F4F4F4
  --theme-textColor: #54667A
  --theme-border: #F4F4F4
  --theme-hover-background: #54667A
  --theme-hover-textColor: #FFFFFF
  --theme-hover-border: #54667A

.baseButton--theme.navy
  --theme-background: #374A60
  --theme-textColor: #fff
  --theme-border: #374A60
  --theme-hover-background: #fff
  --theme-hover-textColor: #374A60
  --theme-hover-border: #374A60

.baseButton--theme.white
  --theme-background: #ffffff
  --theme-textColor: #54667A
  --theme-border: #54667A
  --theme-hover-background: #54667A
  --theme-hover-textColor: #FFFFFF
  --theme-hover-border: #54667A

.baseButton
    background-color: var(--theme-background)
    color: var(--theme-textColor)
    border: 1px solid var(--theme-border)
    font-size: 16px
    padding: 7px
    border-radius: 5px
    outline: unset
    cursor: pointer
    &:hover
      color: var(--theme-hover-textColor)
      background-color: var(--theme-hover-background)
      border: 1px solid var(--theme-hover-border)
    .editIcon
      display: none
    &.disabled
      opacity: 50%
      cursor: not-allowed
</style>
