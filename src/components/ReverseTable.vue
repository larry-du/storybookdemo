<script setup>
import "@/assets/sass/vueCustomEffect.scss";
import { ref, computed, toRefs, onMounted, onUnmounted } from "vue";

const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
});

const { tableData } = toRefs(props);

const perCount = window.innerWidth > 992 ? ref(4) : ref(2);
const effect = ref("list");
const countStart = ref(0);
const touchStartPosition = ref(0);
// const titleCountStart = ref(0);

onMounted(() => {
  window.addEventListener("resize", reCount);
});

onUnmounted(() => {
  window.removeEventListener("resize", reCount);
});

const reCount = (e) => {
  const isPCSetting = e.target.innerWidth > 992;
  if (isPCSetting) return (perCount.value = 4);
  perCount.value = 2;
};

const currentTableData = computed(() => {
  return tableData.value.slice(
    countStart.value,
    countStart.value + perCount.value,
  );
});
const totalSet = computed(() => {
  return Math.floor(tableData.value.length / perCount.value);
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
    if (countStart.value >= totalSet.value * perCount.value) return;
    nextTable();
  }
};

const preTable = () => {
  countStart.value -= perCount.value;
  effect.value = "list";
};
const nextTable = () => {
  countStart.value += perCount.value;
  effect.value = "listReverse";
};
</script>

<template>
  <table
    @touchstart.passive="touchStartPosition = $event.touches[0].screenX"
    @touchend.passive="touchEnd"
  >
    <tbody>
      <tr v-for="filled in tableHead" :key="filled">
        <transition-group :name="effect">
          <td
            class="test"
            v-for="(table, index) in currentTableData"
            :key="table.id"
          >
            <div class="inner">
              <div v-if="index === 0">{{ filled }}</div>
              <div>{{ table[filled] }}</div>
            </div>
          </td>
        </transition-group>
      </tr>
    </tbody>
  </table>
  <div class="operation">
    <button @click.prevent="preTable" :disabled="countStart <= 0">prev</button>
    <button
      @click.prevent="nextTable"
      :disabled="countStart >= totalSet * perCount"
    >
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
  background-color: rgba(127, 255, 212, 0.6);
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid;
  overflow: hidden;
}

thead {
  position: sticky;
  top: 0;
}

th {
  width: 50%;
  white-space: normal;
  border-bottom: 1px solid;
}

td {
  width: 100%;
  white-space: normal;
  border-bottom: 1px solid;
}
.inner {
  position: relative;
  padding: 20px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 5px;
    background-color: red;
  }
}
.test:first-of-type {
  .inner {
    &::after {
      display: none;
    }
  }
}
.listReverse-enter-active,
.listReverse-leave-active,
.list-enter-active,
.list-leave-active,
.list-move,
.listReverse-move {
  transition: opacity 0.7s, transform 0.7s;
  .inner {
    &::after {
      opacity: 0;
    }
  }
}
</style>
