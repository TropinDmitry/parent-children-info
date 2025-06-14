<script lang="ts" setup>
import AppHeader from './components/app/AppHeader.vue';
import AppFooter from './components/app/AppFooter.vue';


</script>

<template>
  <div id="app-holder">
    <AppHeader />
    <main class="app-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
}

body {
  margin: 0;
  padding: 0;
}

.app-content {
  width: 100%;
  height: 100%;
  flex: 1;
}

h2 {
  color: #111111;
}
</style>