<script setup></script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="links">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  width: 90%;
  margin: auto;
  text-align: center;
}

a + a {
  margin-left: 5px;
}
</style>
