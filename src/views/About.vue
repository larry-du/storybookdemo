<script setup>
import { loadFull } from "tsparticles";
// import { ref } from "vue";
import { piniaDemo, piniaDemo2 } from "@/piniaStore";
const store = piniaDemo();
const second = piniaDemo2();
const test = () => {
  console.log("hi");
};

const particlesInit = async (engine) => {
  await loadFull(engine);
};
</script>

<template>
  <div class="container">
    <SlideTable :tableData="store.getTable"></SlideTable>
    <Test @check="test"></Test>
    <ReverseTable
      aria-label="A nice button"
      @click="test"
      :tableData="store.getTable"
    ></ReverseTable>
  </div>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :options="second.getParticlesOption"
  />
</template>

<style lang="sass" scoped>
#tsparticles
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: -1
.container
  width: 1400px
  margin: auto
  position: relative
</style>
