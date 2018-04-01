<template>
  <div id="app">
    <app-header></app-header>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'app',
  components: {
    'app-header' : Header
  }
}
</script>

<style>
body {
  margin: 0;
}
.md-list {
  margin-top: 60px;
}
.container {
  position: absolute;
  top: 80px;
}
</style>
