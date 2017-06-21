<template>
  <nav id="v-nav">
    <div class="container">
      <p><router-link :to="{ name: 'home' }">Accueil</router-link></p>
      <p><router-link :to="{ name: 'blog' }">Blog</router-link></p>
      <p><router-link :to="{ name: 'projects' }">Projets</router-link></p>
      <p><router-link :to="{ name: 'cv' }">C.V</router-link></p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'v-nav'
}
</script>

<style>
  #v-nav {
    width: 100%;
    height: 64px;
    background: #FFF;
    color: #333;
    box-shadow: 6px 3px 22px #333;
  }

  #v-nav .container {
    display: flex;
    justify-content: space-around;
  }

  #v-nav p {
    font-size: 18px;
  }

  #v-nav a {
    color: #333;
  }
</style>
