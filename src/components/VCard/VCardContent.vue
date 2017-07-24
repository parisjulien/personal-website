<template>
  <div id="v-card-content">
    <div class="row">
      <v-card v-for="project of projects" :title="project.title" :img="project.img"></v-card>
    </div>

    <div class="row">
      <div class="col s12">
        <p v-if="projects"><a href="#">Voir plus de projets...</a></p>
        <p v-else>Il n'y a aucuns projets...</p>
      </div>
    </div>
  </div>
</template>

<script>
import VCard from './VCard'

export default {
  name: 'v-card-content',
  components: { VCard },
  props: {
    projects: Array
  }
}
</script>

<style scoped>
  #project p {
    text-align: center;
    width: 100%;
  }

  #project p a {
    color: white;
    transition-duration: .5s;
  }

  #project p a:hover {
    color: #0885C2;
  }
</style>
