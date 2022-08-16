<script setup>
import { ref, computed } from "vue";
const countStart = ref(0);
const countEnd = ref(2);

const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom123",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "To",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tomaaa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tomvvv",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom123",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "To",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tomaaa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tomvvv",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom123",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "To",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tomaaa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tomvvv",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom123",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "To",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tomaaa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tomvvv",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom123",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "To",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tomaaa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tomvvv",
    address: "No. 189, Grove St, Los Angeles",
  },
]);

const test = computed(() => {
  return tableData.value.slice();
});

const tableHead = computed(() => {
  const [head] = tableData.value;
  return Object.keys(head);
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="links">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <!-- <pre>{{ tableHead }}</pre> -->
  <!-- <input v-model="msg" /> -->
  <table>
    <thead>
      <tr>
        <th></th>
        <transition-group class="number-list" name="list">
          <th v-for="head in tableHead" :key="head">{{ head }}</th>
        </transition-group>
      </tr>
    </thead>
    <tbody>
      <transition-group class="number-list" name="list">
        <tr v-for="(table, index) in tableData" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ table.date }}</td>
          <td>{{ table.name }}</td>
          <td>{{ table.address }}</td>
        </tr>
      </transition-group>
    </tbody>
  </table>
  <button @click.prevent="tableData = tableData.slice(0, 1)">test</button>
  <button
    @click.prevent="
      tableData = [
        ...tableData,
        {
          date: '2016-05-01',
          name: 'Tomvvv',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    "
  >
    ADD
  </button>
  <!-- <router-view></router-view> -->
</template>

<style lang="scss">
table {
  position: relative;
}

thead {
  position: sticky;
  top: 0;
}

.list-enter-active,
.list-leave-active,
.list-move {
  transition: opacity 0.7s, transform 0.7s;
}

// .list-leave-active {
//   position: absolute;
// }

.list-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.list-enter-to {
  transform: translateX(0);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.list-leave-from {
  // opacity: 0;
  transform: translateX(0);
}
</style>
