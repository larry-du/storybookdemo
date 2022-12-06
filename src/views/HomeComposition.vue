<script setup>
import { piniaDemo, piniaDemo2 } from "@/piniaStore";
import { useField, useForm, useFieldArray } from "vee-validate";
import { yup } from "@/plugins";
import { ref, computed } from "vue";
const store = piniaDemo();
const secondStore = piniaDemo2();

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const currentSchema = computed(() => {
  const basic = {
    // selectTest: yup.string().trim().required(),
    password: yup
      .string()
      .trim()
      .test("len", "Min 6 numbers", (val) => val.toString().length >= 6)
      .required(),
    // media: yup.string().trim().length(8).required(),
    // demo: yup.string().trim().length(8).required(),
  };
  const validateArr = store.getInitialData.links.length
    ? {
        links: yup.array().of(
          yup.object({
            title: yup.string().trim().required(),
          }),
        ),
      }
    : basic;
  return yup.object({
    ...basic,
    ...validateArr,
  });
});

const { handleSubmit, errors } = useForm({
  validationSchema: currentSchema.value,
  initialValues: {
    // media: "facebook",
    password: store.getText,
    // demo: store.getPiniaText,
    links: store.getInitialData.links,
  },
  // validateOnMount: false,
});

const { errorMessage: errorPassword, value: password } = useField("password");
// const { errorMessage: mediaError, value: media } = useField("media");
// const { errorMessage: demoError, value: demo } = useField("demo");
// const { value: links } = useField("links");
// const {
//   push,
//   update,
//   prepend,
//   replace,
//   fields: linksArr,
// } = useFieldArray("links");
// const { errorMessage: errorPassword, value: password } = useField("password", {
//   initialValue: store.getText,
// });
// const { errorMessage: mediaError, value: media } = useField("media", {
//   initialValue: "facebook",
// });
// const { errorMessage: demoError, value: demo } = useField("demo", {
//   initialValue: store.getPiniaText,
// });

const onSubmit = handleSubmit((values) => {
  console.log(values);
  // console.log("hi");
  alert("hi");
});
const onReset = () => {
  console.log("hi2");
};

const addNew = () => {
  store.initialData = {
    ...store.initialData,
    links: [
      ...store.initialData.links,
      { id: 2, name: "link", url: "https://github.com/logaretm", title: "" },
    ],
  };
  // setFieldValue("links", [
  //   ...links.value,
  //   {
  //     id: 2,
  //     name: "link",
  //     url: "https://github.com/logaretm",
  //     title: "",
  //   },
  // ]);
  // links.value = [
  //   ...links.value,
  //   {
  //     id: 2,
  //     name: "link",
  //     url: "https://github.com/logaretm",
  //     title: "",
  //   },
  // ];
  // push({
  //   id: 2,
  //   name: "link",
  //   url: "https://github.com/logaretm",
  //   title: "",
  // });
};
</script>
<template>
  <QForm @reset="onReset" class="q-gutter-md">
    <!-- <BaseInput
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
    <div>testError:{{ demoError }}</div> -->
    <QInput
      label="password"
      @update:modelValue="password = $event"
      :modelValue="password"
      :error="!!errorPassword"
      :error-message="errorPassword"
      name="password"
    >
    </QInput>
    <!-- <div class="links" v-if="store.getInitialData.links.length">
      <QInput
        v-for="(link, index) in links"
        :key="link.id"
        :name="`links[${index}].title`"
        @update:modelValue="update(index, { ...link.value, title: $event })"
        :modelValue="link.value.title"
        :error="!!errors[`links[${index}].title`]"
        :error-message="errors[`links[${index}].title`]"
      >
        {{ links }}
      </QInput>
    </div> -->
    <div class="links" v-if="store.getInitialData.links.length">
      <ValidateInput
        v-for="(link, index) in store.getInitialData.links"
        :key="link.id"
        :fieldName="`links[${index}].title`"
        @update:modelValue="
          store.initialData = {
            ...store.initialData,
            links: [
              ...store.initialData.links.slice(0, index),
              { ...store.initialData.links[index], title: $event },
              ...store.initialData.links.slice(index + 1),
            ],
          }
        "
        :modelValue="store.initialData.links[index].title"
      ></ValidateInput>
    </div>
    <!-- <pre>test{{ store.text }}</pre> -->
    <!-- <QInput
      label="label test"
      @update:modelValue="password = $event"
      :modelValue="password"
      :error="!!errorPassword"
      :error-message="errorPassword"
      name="password"
    >
    </QInput> -->
    <!-- <QSelect
      filled
      :options="options"
      @update:modelValue="media = $event"
      :modelValue="media"
      label="Filled"
      :error="!!mediaError"
      :error-message="mediaError"
    /> -->
    <div>
      <QBtn label="Add" @click.prevent="addNew" color="primary" />
      <QBtn label="Submit" @click.prevent="onSubmit" color="primary" />
      <QBtn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </QForm>
</template>

<style lang="scss" scoped></style>
