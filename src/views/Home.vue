<template>
  <div id="home">
    <section id="about" class="container valign-wrapper">
      <v-content title="A propos de moi ?">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatibus eum a officiis excepturi pariatur nisi reiciendis laboriosam explicabo tenetur mollitia, iure quo dignissimos veniam, eveniet, quae porro consequatur illum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum voluptatibus eum a officiis excepturi pariatur nisi reiciendis laboriosam explicabo tenetur mollitia, iure quo dignissimos veniam, eveniet, quae porro consequatur illum.
      </v-content>
    </section>

    <section id="github" class="valign-wrapper">
      <v-github-content user="parisjulien" class="container" />
    </section>
  </div>
</template>

<script>
import VContent from '../components/VContent/VContent'
import VGithubContent from '../components/VGithub/VGithubContent'

export default {
  name: 'home',
  components: { VContent, VGithubContent }
}
</script>

<style scoped>
  #about {
    height: 100vh;
  }

  #about h3 {
    color: #333;
    font-size: 22px;
    padding: 0;
  }

  #about p {
    color: #333;
    font-size: 20px;
    font-weight: 300;
    padding: 0;
  }

  #github {
    width: 100%;
    height: 100vh;
    background: url('/static/img/github.jpg') no-repeat top center fixed;
    background-size: cover;
  }
</style>
