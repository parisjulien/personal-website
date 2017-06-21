<template>
  <section id="home" class="container">
    <v-content title="A propos de moi ?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatibus eum a officiis excepturi pariatur nisi reiciendis laboriosam explicabo tenetur mollitia, iure quo dignissimos veniam, eveniet, quae porro consequatur illum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatibus eum a officiis excepturi pariatur nisi reiciendis laboriosam explicabo tenetur mollitia, iure quo dignissimos veniam, eveniet, quae porro consequatur illum.
    </v-content>
  </section>
</template>

<script>
import VContent from '../components/VContent/VContent'

export default {
  name: 'home',
  components: { VContent }
}
</script>

<style>
  #home #about h3 {
    color: #333;
    font-size: 22px;
    margin: 60px 0 22px 0;
    padding: 0;
  }

  #home #about p {
    color: #333;
    font-size: 20px;
    font-weight: 300;
    padding: 0;
  }
</style>
