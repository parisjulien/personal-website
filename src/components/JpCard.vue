<template>
  <div id="jp-card" class="col s12 m6 l4" :style="'background: url(' + img + ') no-repeat top center;background-size: cover;'">
    <a :href="link" target="_blank">{{ title }}</a>
  </div>
</template>

<script>
export default {
  name: 'jp-card',
  props: {
    img: { type: String, default: null },
    title: { type: String, default: null },
    link: { type: String, default: null },
    projet: { type: Object, default: null }
  },
  created () {
    this.img = this.img === null ? this.projet.img : this.img
    this.title = this.title === null ? this.projet.title : this.title
  }
}
</script>

<style>
  #jp-card {
    height: 300px;
    position: relative;
  }

  #jp-card a {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: 300;
    color: white;
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: rgba(55,60,91,0.6);
    opacity: 0;
    transition: .5s;
  }

  #jp-card a:hover {
    opacity: 1;
  }
  

  #jp-card.col {
    padding: 0 !important;
  }
</style>
