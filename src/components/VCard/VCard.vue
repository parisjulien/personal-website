<template>
  <div class="col s12 m4">
    <div class="v-card z-depth-1" v-on:mouseenter="showContent" :style="'background: url(' + img + ') no-repeat top center / cover'">
      <transition name="fade">
        <div class="v-card-content valign-wrapper" v-if="show" v-on:mouseleave="hideContent">
          <p>{{ title }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vcard',
  data () {
    return {
      show: false
    }
  },
  props: {
    title: { type: String, default: 'v-card' },
    img: { type: String, default: 'http://lorempicsum.com/futurama/255/200/2' },
    url: { type: String, default: '#' }
  },
  methods: {
    showContent () {
      this.show = true
    },
    hideContent () {
      this.show = false
    }
  }
}
</script>

<style scoped>
  .v-card .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 0 !important
  }

  .v-card {
    height: 230px;
    border-radius: 5px;
    margin-bottom: 22px;
  }

  .v-card-content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  .v-card-content p {
    text-align: center;
    width: 100%;
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
