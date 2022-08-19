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
        address: "No1. 189, Grove St, Los Angeles",
        id: 1,
      },
      {
        date: "2016-05-02",
        name: "Tomdfsff",
        address: "No2. 189, Grove St, Los Angeles",
        id: 12,
      },
      {
        date: "2016-05-04",
        name: "Tom44444",
        address: "No3. 189, Grove St, Los Angeles",
        id: 13,
      },
      {
        date: "2016-05-01",
        name: "Tom123",
        address: "No4. 189, Grove St, Los Angeles",
        id: 14,
      },
      {
        date: "2016-05-02",
        name: "To",
        address: "No5. 189, Grove St, Los Angeles",
        id: 15,
      },
      {
        date: "2016-05-04",
        name: "Tomaaa",
        address: "No6. 189, Grove St, Los Angeles",
        id: 17,
      },
      {
        date: "2016-05-01",
        name: "Tomvvv",
        address: "No7. 189, Grove St, Los Angeles",
        id: 21,
      },
      {
        date: "2016-05-03",
        name: "Tomvvvvvv",
        address: "No8. 189, Grove St, Los Angeles",
        id: 31,
      },
      {
        date: "2016-05-02",
        name: "Tomoiui",
        address: "No9. 189, Grove St, Los Angeles",
        id: 41,
      },
      {
        date: "2016-05-04",
        name: "Tom89lluhjk",
        address: "No10. 189, Grove St, Los Angeles",
        id: 51,
      },
      {
        date: "2016-05-01",
        name: "Tom12tyuk3",
        address: "No11. 189, Grove St, Los Angeles",
        id: 61,
      },
      {
        date: "2016-05-02",
        name: "Tocccghy",
        address: "No12. 189, Grove St, Los Angeles",
        id: 18,
      },
      {
        date: "2016-05-04",
        name: "Tomaaa",
        address: "No13. 189, Grove St, Los Angeles",
        id: 91,
      },
      {
        date: "2016-05-01",
        name: "Tomvvv",
        address: "No14. 189, Grove St, Los Angeles",
        id: 134,
      },
      {
        date: "2016-05-03",
        name: "Tom54fghhf",
        address: "No15. 189, Grove St, Los Angeles",
        id: 1523,
      },
      {
        date: "2016-05-02",
        name: "Tomdfhj534",
        address: "No16. 189, Grove St, Los Angeles",
        id: 1222,
      },
      {
        date: "2016-05-04",
        name: "Tom9898kghg",
        address: "No17. 189, Grove St, Los Angeles",
        id: 1111,
      },
      // {
      //   date: "2016-05-01",
      //   name: "Tom154kkk23",
      //   address: "No18. 189, Grove St, Los Angeles",
      //   id: 1555,
      // },
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
    // getReverseTable() {
    //   const [item] = this.tableData;
    //   const filed = Object.keys(item);
    //   const table = filed.reduce((init, current) => {
    //     const reverseData = this.tableData.map((data, index) => {
    //       return { demoId: index, [current]: data[current] };
    //     });
    //     return [...init, reverseData];
    //   }, []);
    //   return { filed, table };
    // },
  },
});
