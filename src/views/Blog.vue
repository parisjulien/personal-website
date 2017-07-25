<template>
  <section id="blog">
  <div class="row">
    <div class="col s12 m8 l9">
      <v-article class="VArticle" v-for="article of articles" :article="article"></v-article>
    </div>
    <div class="col m4 l3 hide-on-small-and-down">
      <v-last-articles></v-last-articles>
    </div>
  </div>
  </section>
</template>
<script>
import VArticle from '../components/VArticle/VArticle'
import VLastArticles from '../components/VArticle/VLastArticles'

export default {
  name: 'blog',
  components: { VArticle, VLastArticles },
  data () {
    return {
      articles: [{
        title: 'Créer un site web avec ReactJs !',
        img: '/static/img/reactjs.png',
        content: `Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! Bite my shiny metal ass. Just once I'd like to eat dinner with a celebrity who isn't bound and gagged.
        Say what? I had more, but you go ahead. Moving along… Ooh, name it after me! What are their names?
        Ven ve voke up, ve had zese wodies. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd. Can I use the gun? In our darkest hour, we can stand erect, with proud upthrust bosoms.
        I am Singing Wind, Chief of the Martians. You seem malnourished. Are you suffering from intestinal parasites? Enough about your promiscuous mother, Hermes! We have bigger probl...`,
        author: 'Julien Paris',
        date: '09/07/2017',
        heure: '1h03'
      }, {
        title: 'Développer une application bureau avec Electron !',
        img: '/static/img/electron.png',
        content: `Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! Bite my shiny metal ass. Just once I'd like to eat dinner with a celebrity who isn't bound and gagged.
        Say what? I had more, but you go ahead. Moving along… Ooh, name it after me! What are their names?
        Ven ve voke up, ve had zese wodies. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd. Can I use the gun? In our darkest hour, we can stand erect, with proud upthrust bosoms.
        I am Singing Wind, Chief of the Martians. You seem malnourished. Are you suffering from intestinal parasites? Enough about your promiscuous mother, Hermes! We have bigger probl...`,
        author: 'Julien Paris',
        date: '09/07/2017',
        heure: '1h03'
      }]
    }
  },
  methods: {
    handleScroll () {
      if ((window.pageYOffset || document.documentElement.scrollTop) >= this.$asideOffset) {
        document.querySelector('aside').parentElement.style.position = 'fixed'
        document.querySelector('aside').parentElement.style.top = '64px'
        document.querySelector('aside').parentElement.style.right = '0px'
      } else {
        document.querySelector('aside').parentElement.style.position = 'relative'
        document.querySelector('aside').parentElement.style.top = 0
        document.querySelector('aside').parentElement.style.left = 0
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.$asideOffset = document.querySelector('aside').offsetTop - 65
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  .VArticle {
    margin-top: 22px;
  }
</style>
