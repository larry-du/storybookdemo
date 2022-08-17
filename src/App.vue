<script setup></script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="links">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <!-- <SlideTable :tableData="tableData"></SlideTable> -->

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

// table {
//   position: relative;
//   width: 100%;
//   background-color: aquamarine;
//   table-layout: fixed;
//   border-collapse: collapse;
//   border: 1px solid;
// }

// thead {
//   position: sticky;
//   top: 0;
// }

// td,
// th {
//   width: 100%;
//   white-space: normal;
//   border-bottom: 1px solid;
//   border-left: 1px solid;
//   border-right: 1px solid;
// }

// td {
//   padding: 20px;
// }

// .list-enter-active,
// .list-leave-active,
// .list-move {
//   transition: opacity 0.7s, transform 0.7s;
// }

// .list-leave-active {
//   position: absolute;
// }

// .list-enter-to {
//   transform: translateX(0);
// }
// .list-enter-from {
//   opacity: 0;
//   transform: translateX(-100%);
// }

// .list-leave-to {
//   opacity: 0;
// }
// .list-leave-from {
//   opacity: 0;
//   height: 0;
// }

// .listReverse-enter-active,
// .listReverse-leave-active,
// .listReverse-move {
//   transition: opacity 0.7s, transform 0.7s;
// }

// .listReverse-leave-active {
//   position: absolute;
// }

// .listReverse-enter-to {
//   transform: translateX(0);
// }
// .listReverse-enter-from {
//   opacity: 0;
//   transform: translateX(100%);
// }

// .listReverse-leave-to {
//   opacity: 0;
// }
// .listReverse-leave-from {
//   opacity: 0;
//   height: 0;
// }
</style>
