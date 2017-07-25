<template>
  <aside class="z-depth-1">
    <h4>Les derniers articles</h4>
    <div class="divider"></div>
    <p><a href="#">Créer un site web avec reactjs</a></p>
    <div class="divider"></div>
    <p><a href="#">Développer une application bur...</a></p>
  </aside>
</template>

<script>
export default {
  name: 'v-last-articles'
}
</script>

<style>
  aside {
    margin-top: 22px;
  }

  aside h4 {
    font-size: 20px;
    text-align: center;
    padding-top: 22px;
    padding-bottom: 11px;
  }

  aside p {
    font-size: 18px;
    padding-left: 10px;
    padding-top: 11px;
    padding-bottom: 11px;
  }
</style>
