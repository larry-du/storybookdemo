<script setup>
import { piniaDemo, piniaDemo2 } from "@/piniaStore";
import { Field, Form, ErrorMessage } from "vee-validate";
// import * as yup from "yup";
import { yup } from "@/plugins";
import { ref } from "vue";
const store = piniaDemo();
const secondStore = piniaDemo2();

const test = () => {
  console.log("hi");
};

const onSubmit = (values, { resetForm }) => {
  console.log("Submitted", values);
  resetForm();
};

const selectModel = ref("");

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const schema = yup.object({
  password: yup.string().trim().length(4).required(),
  selectTest: yup.string().trim().required(),
});
</script>

<template>
  <h1>Pinia Demo</h1>
  <pre>{{ store.getText }}</pre>
  <pre>{{ selectModel }}</pre>

  <Form :validationSchema="schema" @submit="onSubmit">
    <div style="width: 80%; margin: auto">
      <Field
        name="password"
        :modelValue="store.getText"
        @update:modelValue="store.addText($event)"
        v-slot="{ errorMessage, field, value }"
      >
        <QInput
          maxlength="4"
          label="label test"
          v-bind="field"
          :modelValue="value"
          :error="!!errorMessage"
          :error-message="errorMessage"
        >
        </QInput>
        <pre>{{ errorMessage }}</pre>
      </Field>
      <Field
        name="selectTest"
        :modelValue="selectModel"
        @update:modelValue="selectModel = $event"
        v-slot="{ errorMessage, field, value }"
      >
        <QSelect
          filled
          v-bind="field"
          :options="options"
          :modelValue="value"
          label="Filled"
          :error="!!errorMessage"
          :error-message="errorMessage"
        />
      </Field>
    </div>
    <QBtn
      type="Submit"
      no-caps
      style="background: #ff0080; color: white"
      label="test"
    />
    <QBtn
      type="reset"
      no-caps
      style="background: #ff0080; color: white"
      label="reset"
    />
  </Form>

  <div>{{ store.getFoo.number }}</div>
  <font-awesome-icon :icon="['fas', 'pen']" />
  <input
    type="number"
    :value="store.getFoo.number"
    @input="
      store.foo = { ...store.getFoo, number: Number($event.target.value) }
    "
  />

  <div class="q-pa-md q-gutter-sm">
    <QBtn
      @click="
        store.addFoo({
          ...store.getFoo,
          number: Number(store.getFoo.number + 1),
        })
      "
      no-caps
      class="test"
      label="Quasar Add"
    />
  </div>

  <div>{{ secondStore.getFoo2.number }}</div>

  <input
    type="number"
    :value="secondStore.getFoo2.number"
    @input="
      secondStore.foo2 = {
        ...secondStore.getFoo2,
        number: Number($event.target.value),
      }
    "
  />
  <div style="margin-top: 20px">
    <BaseButton
      title="custom button"
      @click="
        secondStore.addFoo2({
          ...secondStore.getFoo2,
          number: Number(secondStore.getFoo2.number + 1),
        })
      "
      buttonStyle="navy"
    ></BaseButton>
  </div>
</template>

<style lang="sass" scoped>
.test
  background: #ff0080
  color: white
</style>
