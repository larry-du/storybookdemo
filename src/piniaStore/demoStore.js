import { defineStore } from "pinia";
import mainApi from "@/api/serve";

export default defineStore("piniaDemo", {
  state: () => ({
    foo: { number: 1 },
    text: "",
    apiTest: "",
    tableData: [
      {
        date: "2016-05-03",
        name: "Tomsadig askjdgia asudygausyd asudykgausygd 378u3 alsihdila ausudih asuidgiuwegf weiufiweug",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-02",
        name: "Tomdfsff",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-04",
        name: "Tom44444",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-01",
        name: "Tom123",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-02",
        name: "To",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-04",
        name: "Tomaaa",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-01",
        name: "Tomvvv",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-03",
        name: "Tomvvvvvv",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-02",
        name: "Tomoiui",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-04",
        name: "Tom89lluhjk",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-01",
        name: "Tom12tyuk3",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-02",
        name: "Tocccghy",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-04",
        name: "Tomaaa",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-01",
        name: "Tomvvv",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-03",
        name: "Tom54fghhf",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-02",
        name: "Tomdfhj534",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-04",
        name: "Tom9898kghg",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-01",
        name: "Tom154kkk23",
        address: "No. 189, Grove St, Los Angeles",
        id: 1,
      },
    ],
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
    getTable() {
      return this.tableData;
    },
  },
});
