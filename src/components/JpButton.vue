<template>
  <div>
    <a v-if="type === 'ancre'" id="jp-button" :href="url">{{ text }}</a>
    <router-link v-if="type === 'link'" id="jp-button" :to="{ name: url }">{{ text }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'jp-button',
  props: {
    text: { type: String, default: 'Bouton' },
    url: { type: String, default: '#' },
    width: { type: String, default: '200' },
    type: { type: String, default: 'ancre' }
  }
}
</script>

<style>
  #jp-button {
    display: block;
    padding: 12px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 8px;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-size: 22px;
    color: white;
    transition: .5s;
  }

  #jp-button:hover {
    background: rgba(255,255,255,0.8);
    color: black;
    border: 1px solid transparent;
  }
</style>
