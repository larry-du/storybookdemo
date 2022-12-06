<script setup>
import { toRefs, computed } from "vue";
import { useField } from "vee-validate";
const props = defineProps({
  fieldName: { type: String, default: "" },
  modelValue: {
    type: String,
  },
});

const { fieldName } = toRefs(props);

const { errorMessage, handleChange, setTouched } = useField(fieldName);
const validationListeners = computed(() => {
  // If the field is valid or have not been validated yet
  // lazy
  if (!errorMessage.value) {
    return {
      blur: handleChange,
      change: handleChange,
      // disable `shouldValidate` to avoid validating on input
      input: (e) => handleChange(e, false),
    };
  }
  // Aggressive
  return {
    blur: handleChange,
    change: handleChange,
    input: handleChange, // only switched this
  };
});

const emit = defineEmits(["update:modelValue"]);

//emit test
</script>
<template>
  <QInput
    :name="fieldName"
    :error="!!errorMessage"
    :error-message="errorMessage"
    v-on="validationListeners"
    @update:modelValue="$emit('update:modelValue', $event)"
    :modelValue="modelValue"
  >
  </QInput>
</template>

<style lang="sass" scoped></style>
