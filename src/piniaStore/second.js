import { defineStore } from "pinia";

export default defineStore("piniaDemo2", {
  state: () => ({
    foo2: { number: 2 },
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
  },
});
