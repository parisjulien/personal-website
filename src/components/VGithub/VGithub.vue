<template>
  <div id="v-github" class="card-stacked">
    <div class="card-content" v-if="repos">
      <p><a :href="repo.html_url">{{ repo.name }}</a></p>
      <p class="description">{{ repo.description }}</p>
    </div>
    <div class="card-content valign-wrapper" v-else>
      <p>Dépot introuvable</p>
    </div>
    <div class="card-action">
      <p class="language">{{ repo.language }} <span v-if="repo.fork">- Fork</span></p>
      <p class="navigation"><span class="prev" @click="prev"><</span> <span class="next" @click="next">></span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-github',
  props: {
    repos: Array
  },
  data () {
    return {
      repo: this.repos[0],
      selectedRepo: 0
    }
  },
  methods: {
    changeRepo (repo) {
      this.repo = this.repos[repo]
      this.selectedRepo = repo
    },
    prev () {
      if (this.selectedRepo === 0) this.selectedRepo = this.repos.length - 1
      else this.selectedRepo--

      this.changeRepo(this.selectedRepo)
    },
    next () {
      if (this.selectedRepo === this.repos.length - 1) this.selectedRepo = 0
      else this.selectedRepo++

      this.changeRepo(this.selectedRepo)
    }
  },
  mounted () {
    let self = this

    this.$data.repoTime = setInterval(_ => {
      self.next()
    }, 5000)
  },

  beforeDestroy () {
    clearInterval(this.$data.repoTime)
  }
}
</script>

<style scoped>
  p {
    font-size: 18px;
  }

  .description {
    padding-top: 15px;
  }

  .card-action p {
    font-size: 16px;
  }

  .language, .navigation {
    display: inline-block;
  }

  .navigation {
    float: right;
  }

  .next, .prev {
    cursor: pointer;
    font-size: 18px;
  }
</style>
