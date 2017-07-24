<template>
  <div id="home">
    <section id="about" class="container valign-wrapper">
      <v-content title="A propos de moi ?">
        Passionné par l'informatique depuis l'age de 16 ans, j'ai consacré mon temps libre à l'apprentissage en autodidacte des technologies du web dont j'ai acquis une certaine maîtrise. Je m'interesse également au développement d'application bureau et mobile
        ce qui me permet d'être polyvalent dans le domaine. Adepte des projets open-sources, j'aime partager mon expérience et ma passions. J'oriente donc mes études vers ce domaine avec l'ambition d'ouvrir une entreprise de développement web et d'application bureau et mobile.
      </v-content>
    </section>

    <section id="github" class="valign-wrapper">
      <v-github-content user="parisjulien" class="container" />
    </section>

    <section id="blog" class="valign-wrapper">
      <div class="container">
        <div class="row">
          <h3>Dernier article de mon blog !</h3>
        </div>

        <v-article :article="{
          title: 'Créer un site web avec ReactJs !', 
          img: '/static/img/reactjs.png',
          content: `Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! Bite my shiny metal ass. Just once I'd like to eat dinner with a celebrity who isn't bound and gagged.
              Say what? I had more, but you go ahead. Moving along… Ooh, name it after me! What are their names?
              Ven ve voke up, ve had zese wodies. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd. Can I use the gun? In our darkest hour, we can stand erect, with proud upthrust bosoms.
              I am Singing Wind, Chief of the Martians. You seem malnourished. Are you suffering from intestinal parasites? Enough about your promiscuous mother, Hermes! We have bigger probl...`,
          author: 'Julien Paris',
          date: '09/07/2017',
          heure: '1h03'
        }"></v-article>
      </div>
    </section>

    <section id="project" class="valign-wrapper">
      <div class="container">
        <div class="row">
          <h3>Mes autres projets</h3>
        </div>

        <v-card-content :projects="projects"></v-card-content>
      </div>
    </section>
  </div>
</template>

<script>
import VContent from '../components/VContent/VContent'
import VGithubContent from '../components/VGithub/VGithubContent'
import VArticle from '../components/VArticle/VArticle'
import VCardContent from '../components/VCard/VCardContent'

export default {
  name: 'home',
  components: { VContent, VGithubContent, VArticle, VCardContent },
  data () {
    return {
      position: 0,
      ancres: ['#home', '#about', '#github', '#blog', '#project'],
      projects: [{
        title: 'PowerLabs',
        img: './static/img/powerlabs.png'
      }, {
        title: 'MLO',
        img: './static/img/mlo.png'
      }, {
        title: 'PowerPanel',
        img: './static/img/powerpanel.png'
      }]
    }
  },
  methods: {
    next () {
      if (this.position < 4) {
        this.position++
      }
    }
  }
}
</script>

<style scoped>
  #about {
    min-height: 100vh;
  }

  .row {
    margin-bottom: 0 !important;
  }

  h3 {
    margin: 0 !important;
  }

  #about p {
    color: #333;
    font-size: 20px;
    font-weight: 300;
    padding: 0;
  }

  #github {
    background: url('/static/img/github.jpg') no-repeat top center fixed;
    background-size: cover;
  }

  #blog, #project, #github {
    width: 100%;
    min-height: 100vh;
    padding-top: 22px;
    padding-bottom: 22px;
  }

  #project {
    background: #252526;
  }

  #blog h3, #project h3 {
    font-size: 40px;
    padding-bottom: 22px;
    font-family: 'Bubbler One', sans-serif;
    text-align: center
  }

  #project h3, p {
    color: #FFF;
  }

  @keyframes arrow {
    0% {
      color: #0885C2;
    }
    50% {
      color: white;
    }
    100% {
      color: #0885C2;
    }
  }

  #arrow-down {
    position: fixed;
    bottom: 22px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: #0885C2;
    animation: arrow 1.2s infinite;
  }
</style>
