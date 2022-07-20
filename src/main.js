import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { quasar, FontAwesomeIcon } from "./plugins";

const pinia = createPinia();

createApp(App)
  .use(quasar)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia)
  .use(router)
  .mount("#app");
