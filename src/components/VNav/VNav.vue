<template>
  <nav id="v-nav">
    <div class="container">
      <p><router-link to="home">Accueil</router-link></p>
      <p><router-link to="projets">Projets</router-link></p>
      <p><a href="#!">C.V</a></p>
      <p><a href="#!">Labs</a></p>
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
