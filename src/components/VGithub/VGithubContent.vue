<template>
  <div id="v-github-content">
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <h2 class="header white-text">Mes projets github !</h2>
        <div class="card horizontal" v-if="githubUser">
          <div class="card-image">
            <img :src="githubUser.avatar_url">
          </div>
          <v-github v-if="repos" :repos="repos" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col s12 center">
        <p>
          <a href="#" target="_blank" class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="www.linkedin.com/in/julien-paris34"><img src="/static/img/linkedin.png" alt="Linkedin"></a>
          <a href="#" target="_blank" class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Facebook"><img src="/static/img/fb.png" alt="Facebook"></a>
          <a href="#" target="_blank" class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Twitter"><img src="/static/img/twitter.png" alt="Twitter"></a>
          <a href="#" target="_blank" class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="pro.julienparis@gmail.com"><img src="/static/img/email.png" alt="Linkedin"></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import VGithub from './VGithub'

export default {
  name: 'v-github-content',
  props: {
    user: String
  },
  components: { VGithub },
  data () {
    return {
      githubUser: null,
      repos: null
    }
  },
  beforeMount () {
    Axios.get('https://api.github.com/users/' + this.user).then(response => {
      this.githubUser = response.data
    })

    Axios.get('https://api.github.com/users/' + this.user + '/repos').then(response => {
      this.repos = response.data
    })
  }
}
</script>

<style scoped>
  #v-github-content {
    width: 100%;
  }

  img {
    height: 100%;
  }
</style>
