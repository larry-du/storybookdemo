import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { quasar, FontAwesomeIcon, Particles } from "./plugins";
// import Particles from "vue3-particles";

const pinia = createPinia();

createApp(App)
  // .use(quasar)
  .use(Particles)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia)
  .use(router)
  .mount("#app");
