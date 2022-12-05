<script setup>
import { piniaDemo, piniaDemo2 } from "@/piniaStore";
import { Field, Form, ErrorMessage, FieldArray } from "vee-validate";
import { yup } from "@/plugins";
import { ref, computed } from "vue";
import {
  useQuasar,
  // QSpinnerFacebook,
  // QSpinnerGears,
  QSpinnerBall,
} from "quasar";
const store = piniaDemo();
const secondStore = piniaDemo2();
const $q = useQuasar();

const onSubmit = (values) => {
  console.log("hi");
  console.log("Submitted", values);
};

const selectModel = ref("");
const isShow = ref(false);

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const currentSchema = computed(() => {
  const basic = {
    selectTest: yup.string().trim().required(),
    password: yup.string().trim().length(8).required(),
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

const vModelTest = ref("");

const updateText = computed({
  get() {
    return vModelTest.value;
  },
  set(newData) {
    vModelTest.value = newData;
  },
});

const toggleLogin = () => {
  $q.loading.show({
    // delay: 400,
    spinner: QSpinnerBall,
    customClass: "loadingTest",
    // opacity: "1",
    // backgroundColor: "purple",
  });
  setTimeout(() => {
    $q.loading.hide();
  }, 1000);
};
</script>

<template>
  <!-- vee validate component -->
  <Form
    v-slot="{ handleReset }"
    :validationSchema="currentSchema"
    @submit="onSubmit"
  >
    <q-btn dense flat round icon="menu" @click="toggleLogin" />
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
          label="label"
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

<style lang="sass">
// .loadingTest .q-loading__backdrop
//   opacity: 1
</style>
