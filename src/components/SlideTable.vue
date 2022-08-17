<script setup>
import { ref, computed, toRefs } from "vue";

const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
});

const { tableData } = toRefs(props);

const perCount = 4;
const effect = ref("list");
const countStart = ref(0);
const touchStartPosition = ref(0);

const currentTableData = computed(() => {
  return tableData.value.slice(countStart.value, countStart.value + perCount);
});
const foo = computed(() => {
  return Math.floor(tableData.value.length / perCount);
});
const tableHead = computed(() => {
  const [head] = tableData.value;
  return Object.keys(head);
});

const touchEnd = (e) => {
  const changePosition = e.changedTouches[0].screenX;
  const rightDistance = 80;
  const leftDistance = -80;

  if (changePosition - touchStartPosition.value > rightDistance) {
    if (countStart.value <= 0) return;
    preTable();
  }

  if (changePosition - touchStartPosition.value < leftDistance) {
    if (countStart.value >= foo.value * perCount) return;
    nextTable();
  }
};

const preTable = () => {
  countStart.value -= perCount;
  effect.value = "list";
};
const nextTable = () => {
  countStart.value += perCount;
  effect.value = "listReverse";
};
</script>

<template>
  <table
    @touchstart="touchStartPosition = $event.touches[0].screenX"
    @touchend="touchEnd"
  >
    <thead>
      <!-- <transition-group tag="tr" :name="effect"> -->
      <tr>
        <th key="empty"></th>
        <th v-for="head in tableHead" :key="head">{{ head }}</th>
      </tr>
      <!-- </transition-group> -->
    </thead>
    <transition-group tag="tbody" :name="effect">
      <tr v-for="(table, index) in currentTableData" :key="table.name">
        <th scope="row">{{ index + 1 }}</th>
        <td>
          {{ table.date }}
        </td>
        <td>{{ table.name }}</td>
        <td>{{ table.address }}</td>
      </tr>
    </transition-group>
  </table>
  <div class="operation">
    <button @click.prevent="preTable" :disabled="countStart <= 0">prev</button>
    <button @click.prevent="nextTable" :disabled="countStart >= foo * perCount">
      next
    </button>
  </div>
</template>

<style lang="scss" scoped>
.operation {
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
}

table {
  position: relative;
  width: 100%;
  background-color: aquamarine;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid;
}

thead {
  position: sticky;
  top: 0;
}

td,
th {
  width: 100%;
  white-space: normal;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
}

td {
  padding: 20px;
}

.list-enter-active,
.list-leave-active,
.list-move {
  transition: opacity 0.7s, transform 0.7s;
}

.list-leave-active {
  position: absolute;
}

.list-enter-to {
  transform: translateX(0);
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.list-leave-to {
  opacity: 0;
}
.list-leave-from {
  opacity: 0;
  height: 0;
}

.listReverse-enter-active,
.listReverse-leave-active,
.listReverse-move {
  transition: opacity 0.7s, transform 0.7s;
}

.listReverse-leave-active {
  position: absolute;
}

.listReverse-enter-to {
  transform: translateX(0);
}
.listReverse-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.listReverse-leave-to {
  opacity: 0;
}
.listReverse-leave-from {
  opacity: 0;
  height: 0;
}
</style>
