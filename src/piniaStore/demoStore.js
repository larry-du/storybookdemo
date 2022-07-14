import { defineStore } from "pinia";

export const piniaDemo = defineStore("piniaDemo", {
  state: () => ({
    foo: { number: 0 },
  }),
  actions: {
    addFoo(count) {
      this.foo = count;
    },
  },
  getters: {
    getFoo() {
      return this.foo;
    },
  },
});
