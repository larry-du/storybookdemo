import { defineStore } from "pinia";

export default defineStore("piniaDemo", {
  state: () => ({
    foo: { number: 1 },
    text: "",
  }),
  actions: {
    addFoo(count) {
      this.foo = count;
    },
    addText(text) {
      this.text = text;
    },
  },
  getters: {
    getFoo() {
      return this.foo;
    },
    getText() {
      return this.text;
    },
  },
});
