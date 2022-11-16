import { defineStore } from "pinia";

export default defineStore("piniaDemo2", {
  state: () => ({
    foo2: { number: 2 },
    particlesOption: {
      background: {
        color: {
          value: "#fff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        detect_on: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: ["grab", "repulse"],
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
            duration: 1,
          },
          grab: {
            distance: 250,
          },
        },
      },
      particles: {
        color: {
          value: ["#333333"],
        },
        links: {
          color: "#222",
          distance: 250,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        // collisions: {
        //   enable: true,
        //   mode: "bounce",
        // },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1.5,
          straight: false,
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
            area: 299,
          },
          value: 20,
        },
        opacity: {
          value: 1,
          random: true,
        },
        shape: {
          // type: ["image"],
          type: "circle",
          // image: {
          //   src: "https://i.imgur.com/Mq887tw.png",
          //   width: 500,
          //   height: 500,
          // },
        },
        size: {
          random: true,
          value: 10,
        },
      },
      detectRetina: true,
    },
  }),
  actions: {
    addFoo2(count) {
      this.foo2 = count;
    },
  },
  getters: {
    getFoo2() {
      return this.foo2;
    },
    getParticlesOption() {
      return this.particlesOption;
    },
  },
});
