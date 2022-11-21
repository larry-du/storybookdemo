<script setup>
import { piniaDemo, piniaDemo2 } from "@/piniaStore";
import {
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useField,
  useForm,
} from "vee-validate";
import { yup } from "@/plugins";
import { ref, computed } from "vue";
const store = piniaDemo();
const secondStore = piniaDemo2();

const onSubmit = (values) => {
  console.log("hi");
  console.log("Submitted", values);
  // resetForm();
};
// console.log(store);

const selectModel = ref("");
const isShow = ref(false);

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

// const schema = yup.object({
//   password: yup
//     .string()
//     .trim()
//     .when("isShow", {
//       is: true,
//       then: (schema) => schema.required("必填").typeError("必填"),
//     }),
// });

const currentSchema = computed(() => {
  const basic = {
    selectTest: yup.string().trim().required(),
    password: yup.string().trim().length(8).required(),
    media: yup.string().trim().length(8).required(),
    demo: yup.string().trim().length(8).required(),
  };
  const validatePassword = isShow.value
    ? { password: yup.string().trim().length(4).required() }
    : basic;
  const validateArr = store.getInitialData.links.length
    ? { links: yup.array().of(yup.object({ title: yup.string().required() })) }
    : basic;
  return yup.object({
    ...basic,
    ...validatePassword,
    ...validateArr,
  });
});

const inputTest = ref("");
const vModelTest = ref("");

const updateText = computed({
  get() {
    return vModelTest.value;
  },
  set(newData) {
    vModelTest.value = newData;
  },
});

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

// const { value, errors } = useForm({
//   validationSchema: schema,
// });
// console.log(currentSchema.value.fields);

// const { value, errorMessage } = useField("password", validateField);
const { errorMessage: errorPassword, value: password } = useField(
  "password",
  currentSchema.value.fields.password,
  {
    initialValue: store.getText,
  },
);
const { errorMessage: mediaError, value: media } = useField(
  "media",
  currentSchema.value.fields.password,
  {
    initialValue: "facebook",
  },
);
const { errorMessage: demoError, value: demo } = useField(
  "demo",
  currentSchema.value.fields.demo,
  {
    initialValue: store.getPiniaText,
  },
);
</script>

<template>
  <!-- vee validate composition api -->
  <!-- <pre>{{ demo }}</pre> -->
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
  <!-- <BaseInput
    titleStyle="blue"
    label="password"
    placeHolder="type something"
    v-model="password"
    name="password"
  ></BaseInput> -->
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
  <QInput
    label="label test"
    @update:modelValue="password = event"
    :modelValue="password"
    :error="!!errorPassword"
    :error-message="errorPassword"
    name="password"
  >
  </QInput>
  <QSelect
    filled
    :options="options"
    @update:modelValue="media = $event"
    :modelValue="media"
    label="Filled"
    :error="!!mediaError"
    :error-message="mediaError"
  />

  <BaseInput
    label="V-model"
    placeHolder="type something"
    v-model="updateText"
  ></BaseInput>

  <!-- vee validate component -->
  <!-- <Form
    v-slot="{ handleReset }"
    :validationSchema="currentSchema"
    @submit="onSubmit"
  >
    <div class="arrTest" v-if="store.getInitialData.links.length">
      <div v-for="(link, index) in store.getInitialData.links" :key="link.id">
        <Field
          :name="`links[${index}].title`"
          :modelValue="link.title"
          @update:modelValue="link.title = $event"
          v-slot="{ errorMessage, field, value }"
        >
          <QInput
            label="label test"
            v-bind="field"
            :modelValue="value"
            :error="!!errorMessage"
            :error-message="errorMessage"
          >
          </QInput>
          <pre>{{ errorMessage }}</pre>
        </Field>
      </div>
      <button
        type="button"
        @click.prevent="
          store.initialData = {
            ...store.getInitialData,
            links: [
              ...store.getInitialData.links,
              {
                id: 2,
                name: 'aaaaa',
                url: 'https://github.com/logaretm',
                title: '',
              },
            ],
          }
        "
      >
        ADD
      </button>
    </div>
    <FieldArray name="links" key-path="id" v-slot="{ fields, push }">
      <div v-for="(link, index) in fields" :key="link.key">
        <Field
          :name="`links[${index}].title`"
          :modelValue="link.value.title"
          @update:modelValue="link.value.title = $event"
          v-slot="{ errorMessage, field, value }"
        >
          <QInput
            label="label test"
            v-bind="field"
            :modelValue="value"
            :error="!!errorMessage"
            :error-message="errorMessage"
          >
          </QInput>
          <pre>{{ errorMessage }}</pre>
        </Field>
      </div>
      <button
        type="button"
        @click.prevent="
          push({
            id: 2,
            name: 'aaaaa',
            url: 'https://github.com/logaretm',
            title: '',
          })
        "
      >
        ADD
      </button>
    </FieldArray>
    <button @click.prevent="isShow = !isShow">show</button>
    <div style="width: 80%; margin: auto">
      <Field
        v-if="isShow"
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
      label="Submit Test"
    />
    <QBtn
      type="reset"
      no-caps
      style="background: #ff0080; color: white"
      label="reset"
      @click.prevent="handleReset"
    />
  </Form> -->

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
      @buttonClick="
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
