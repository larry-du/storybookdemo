<script setup>
import { ref } from "vue";
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};

const particlesOption = ref({
  background: {
    color: {
      value: "#fff",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: ["grab"],
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      grab: {
        distance: 180,
      },
    },
  },
  particles: {
    color: {
      value: "#222",
    },
    links: {
      color: "#222",
      distance: 250,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
      bounce: true,
    },
    number: {
      density: {
        enable: true,
        area: 2000,
      },
      value: 70,
    },
    opacity: {
      value: 1,
      random: true,
    },
    shape: {
      type: ["image"],
      image: {
        src: "https://i.imgur.com/dPdsBBH.png",
        width: 500,
        height: 500,
      },
    },
    size: {
      random: true,
      value: 50,
    },
  },
  detectRetina: true,
});
</script>

<template>
  <!-- <div>particlesOption</div> -->
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="particlesOption"
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
</style>
