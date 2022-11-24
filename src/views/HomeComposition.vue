<script setup>
import { piniaDemo, piniaDemo2 } from "@/piniaStore";
import { useField, useForm } from "vee-validate";
import { yup } from "@/plugins";
import { ref, computed } from "vue";
const store = piniaDemo();
const secondStore = piniaDemo2();

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const currentSchema = computed(() => {
  const basic = {
    selectTest: yup.string().trim().required(),
    password: yup
      .string()
      .trim()
      .test("len", "Min 6 numbers", (val) => val.toString().length >= 6)
      .required(),
    media: yup.string().trim().length(8).required(),
    demo: yup.string().trim().length(8).required(),
  };
  return yup.object({
    ...basic,
  });
});

const { handleSubmit } = useForm({
  validationSchema: currentSchema.value,
  initialValues: {
    media: "facebook",
    password: store.getText,
    demo: store.getPiniaText,
  },
});

const { errorMessage: errorPassword, value: password } = useField("password");
const { errorMessage: mediaError, value: media } = useField("media");
const { errorMessage: demoError, value: demo } = useField("demo");
// const { errorMessage: errorPassword, value: password } = useField("password", {
//   initialValue: store.getText,
// });
// const { errorMessage: mediaError, value: media } = useField("media", {
//   initialValue: "facebook",
// });
// const { errorMessage: demoError, value: demo } = useField("demo", {
//   initialValue: store.getPiniaText,
// });

// const onSubmit = () => {
//   // console.log("end");
//   return handleSubmit(() => {
//     // console.log(values);
//     console.log("hi");
//     alert("hi");
//   })();
// };

const onSubmit = handleSubmit((values) => {
  console.log(values);
  // console.log("hi");
  alert("hi");
});
const onReset = () => {
  console.log("hi2");
};
</script>
<template>
  <QForm @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <BaseInput
      titleStyle="blue"
      label="demo"
      placeHolder="type something"
      @update:modelValue="
        (event) => {
          demo = event;
          store.piniaText = event;
        }
      "
      :modelValue="demo"
      name="demo"
    ></BaseInput>
    <div>storeText:{{ store.getPiniaText }}</div>
    <div>testError:{{ demoError }}</div>
    <QInput
      label="password"
      @update:modelValue="password = $event"
      :modelValue="password"
      :error="!!errorPassword"
      :error-message="errorPassword"
      name="password"
    >
    </QInput>
    <!-- <pre>test{{ store.text }}</pre> -->
    <!-- <QInput
      label="label test"
      @update:modelValue="password = event"
      :modelValue="password"
      :error="!!errorPassword"
      :error-message="errorPassword"
      name="password"
    >
    </QInput> -->
    <QSelect
      filled
      :options="options"
      @update:modelValue="media = $event"
      :modelValue="media"
      label="Filled"
      :error="!!mediaError"
      :error-message="mediaError"
    />
    <div>
      <QBtn label="Submit" type="submit" color="primary" />
      <QBtn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </QForm>
</template>

<style lang="scss" scoped></style>
