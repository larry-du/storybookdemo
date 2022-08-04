import { defineStore } from "pinia";
import mainApi from "@/api/serve";

export default defineStore("piniaDemo", {
  state: () => ({
    foo: { number: 1 },
    text: "",
    apiTest: "",
  }),
  actions: {
    addFoo(count) {
      this.foo = count;
    },
    addText(text) {
      this.text = text;
    },
    async fetchApiTest() {
      try {
        const { data } = await mainApi.get("/getData");
        this.apiTest = data;
      } catch (err) {
        this.apiTest = err.message;
        throw new Error(err);
      }
    },
  },
  getters: {
    getFoo() {
      return this.foo;
    },
    getText() {
      return this.text;
    },
    getApiTest() {
      return this.apiTest;
    },
  },
});
