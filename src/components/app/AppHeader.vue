<script lang="ts" setup>

</script>

<template>
  <header class="app-header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Логотип">
    </div>
    <nav class="navigation">
      <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Форма</router-link>
      <router-link to="/preview" class="nav-link" :class="{ active: $route.path === '/preview' }">Превью</router-link>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #1111111A;
  height: 76px;
}

.logo {
  position: absolute;
  height: 32px;
  margin-left: 80px;
}

.logo img {
  height: 100%;
}

.navigation {
  margin: 0 auto;
  display: flex;
  gap: 24px;
}

.nav-link {
  padding: 8px 0px;
  text-decoration: none;
  color: #1111117A;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

</style>