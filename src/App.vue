<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './components/VHeader/VHeader'
import VNav from './components/VNav/VNav'
import VFooter from './components/VFooter/VFooter'

export default {
  name: 'app',
  components: { VHeader, VNav, VFooter }
}
</script>

<style src="./assets/css/app.css"></style>
