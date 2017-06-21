<template>
  <section id="v-content">
    <div class="row" v-if="title">
      <div class="col s12 center">
        <h3>{{ title }}</h3>
      </div>
    </div>
    

    <div class="row">
      <div class="col s12 center">
        <p>
         <slot></slot>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'v-content',
  props: {
    title: { type: String, default: undefined }
  }
}
</script>

<style>
  #v-content h3 {
    color: #333;
    font-size: 22px;
    margin: 60px 0 8px 0;
    padding: 0;
  }

  #v-content p {
    color: #333;
    font-size: 20px;
    font-weight: 300;
    padding: 0;
  }
</style>
