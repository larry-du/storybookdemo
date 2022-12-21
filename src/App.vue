<script setup>
import { ref, onMounted } from "vue";
import { loadFull } from "tsparticles";
import { piniaDemo2 } from "@/piniaStore";
const second = piniaDemo2();

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
onMounted(() => {
  console.log(import.meta.env.DEV);
  console.log(import.meta.env.VITE_SOME_KEY ?? "2222");
});

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
const layoutView = ref("hHh lpR lFf");
</script>

<template>
  <q-layout :view="layoutView">
    <!-- <q-layout view="hHh lpR lFf"> -->
    <header>title</header>
    <q-header bordered class="bg-primary text-white" height-hint="98">
      <div class="links">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'HomeComposition' }"
          >HomeComposition</router-link
        >
      </div>
      <q-toolbar class="test">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div></div>
      <div>AAAA</div>
      <div>AAAA</div>
      <div>AAAA</div>
      <div>AAAA</div>
      <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="second.getParticlesOption"
      />
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <div>AAAA</div>
      <div>AAAA</div>
      <div>AAAA</div>
      <div>AAAA</div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>

  <!-- <router-view></router-view> -->
</template>

<style lang="sass">
#app
  // width: 90%;
  // margin: auto;
  position: relative
  text-align: center
  // overflow: hidden;


#tsparticles
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: -1

a + a
  margin-left: 5px
</style>
