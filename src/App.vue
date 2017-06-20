<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from './components/VHeader/VHeader'
import VNav from './components/VNav/VNav'

export default {
  name: 'app',
  components: { VHeader, VNav }
}
</script>

<style src="./assets/css/app.css"></style>
