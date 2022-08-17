<script setup>
import { ref, computed } from "vue";
const countStart = ref(0);
const perCount = 4;

const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tomdfsff",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom44444",
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
    name: "Tomvvvvvv",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tomoiui",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom89lluhjk",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom12tyuk3",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tocccghy",
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
    name: "Tom54fghhf",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tomdfhj534",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom9898kghg",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom154kkk23",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tonnkyty",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tomayjytaa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tomvfghfjkkkkvv",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tomioiortt",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tomwewtfhu7u",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Toyjtyufgm",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Todfddxm123",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Txbxfgjnyo",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tofgggmaaa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Taaadthomvvv",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Trt6ujom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tkke57sdstyom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tkkkkllllollllom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "8gtrhtrTom123",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "4567687kkTo",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "T45545454omaaa",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "34566Tomvvv",
    address: "No. 189, Grove St, Los Angeles",
  },
]);

// const test = ref(tableData.value.slice(0, 4));
const test = computed(() => {
  return tableData.value.slice(countStart.value, countStart.value + perCount);
});

const foo = computed(() => {
  return Math.floor(tableData.value.length / perCount);
});

const tableHead = computed(() => {
  const [head] = tableData.value;
  return Object.keys(head);
});
// let count = 0;
// const countTable = () => {
//   count += perCount;
//   test.value = [...tableData.value.slice(count, count + perCount)];
// };
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
      <transition-group tag="tr" class="number-list" name="list">
        <!-- <tr> -->
        <th key="test"></th>
        <th v-for="head in tableHead" :key="head">{{ head }}</th>
        <!-- </tr> -->
      </transition-group>
    </thead>
    <transition-group tag="tbody" class="number-list" name="list">
      <tr v-for="(table, index) in test" :key="table.name">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ table.date }}</td>
        <td>{{ table.name }}</td>
        <td>{{ table.address }}</td>
      </tr>
    </transition-group>
  </table>
  <button @click.prevent="countStart -= perCount" :disabled="countStart <= 0">
    prev
  </button>
  <button
    @click.prevent="countStart += perCount"
    :disabled="countStart >= foo * perCount"
  >
    next
  </button>

  <router-view></router-view>
</template>

<style lang="scss">
#app {
  width: 90%;
  margin: auto;
  text-align: center;
  // position: relative;
}

a + a {
  margin-left: 5px;
}

table {
  position: relative;
  width: 100%;
  background-color: aquamarine;
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

.list-leave-active {
  position: absolute;
}

.list-enter-from {
  opacity: 0;
  transform: translate(-100%, -10%);
}

.list-enter-to {
  transform: translate(0, 0);
}

.list-leave-to {
  opacity: 0;
}
.list-leave-from {
  opacity: 0;
  // position: absolute;
}
</style>
