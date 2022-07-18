<script setup>
import { piniaDemo } from "@/piniaStore/demoStore";
const store = piniaDemo();

const test = () => {
  console.log("hi");
};
</script>

<template>
  <h1>Pinia Demo</h1>
  <div>{{ store.getFoo.number }}</div>
  <div>
    <BaseButton title="hi" @buttonClick="test" buttonStyle="navy"></BaseButton>
  </div>
  <button
    @click.prevent="
      store.addFoo({ ...store.getFoo, number: Number(store.getFoo.number + 1) })
    "
  >
    add
  </button>

  <input
    type="number"
    :value="store.getFoo.number"
    @input="
      store.foo = { ...store.getFoo, number: Number($event.target.value) }
    "
  />
</template>

<style scoped></style>
