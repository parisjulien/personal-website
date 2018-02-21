<template>
  <div id="page-projects">
    <jp-navigation :navPage="true" />

    <section class="titlePage">
      <div class="row">
        <div class="col s12">
          <h2>Mes projets</h2>
        </div>
      </div>
    </section>

    <section id="page-portfolio">
      <div id="tags" class="row">
        <div class="col s12 m6">
          <p :class="tag === 'tous' ? 'tag-active': ''" @click="getProject('tous')">Tous</p>
          <p :class="tag === 'web' ? 'tag-active': ''" @click="getProject('web')">Web</p>
          <p :class="tag === 'mobile' ? 'tag-active': ''" @click="getProject('mobile')">Application mobile</p>
          <p :class="tag === 'bureau' ? 'tag-active': ''" @click="getProject('bureau')">Application bureau</p>
        </div>
      </div>

      <div id="portfolio-container" class="row">
        <jp-card img="/static/img/mlo.png" title="GreenRallye" />
        <jp-card img="/static/img/powerpanel.png" title="PowerPanel" />
        <jp-card img="/static/img/parisjulien.png" title="ParisJulien.fr" />
        <jp-card img="/static/img/zenattitude.png" title="IsabelleZenAttitude" />
        <jp-card img="/static/img/florencereiki.png" title="FlorenceReiki" />
      </div>
      
      <div class="row" style="margin-bottom: 0; padding-bottom: 80px;">
        <div class="col s12 m6 offset-m3">
          <a id="more_btn">Afficher plus de projets</a>
        </div>
      </div>
    </section>

    <jp-footer />
  </div>
</template>

<script>
import JpNavigation from '@/components/JpNavigation'
import JpCard from '@/components/JpCard'
import JpButton from '@/components/JpButton'
import JpFooter from '@/components/JpFooter'

export default {
  name: 'projects',
  components: {
    JpNavigation,
    JpCard,
    JpButton,
    JpFooter
  },
  data () {
    return {
      tag: 'tous'
    }
  },
  methods: {
    getProject (type) {
      this.tag = type
    }
  }
}
</script>

<style>
  .titlePage {
    margin-top: 60px;
    background: white;
    padding: 40px 0;
  }

  .titlePage h2 {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 32px;
    padding-left: 44px;
  }

  #page-portfolio {
    background: linear-gradient(#5841B8, #8570DF)
  }

  #tags {
    padding-left: 44px;
    padding-top: 80px;
  }

  .tag-active {
    border: 2px solid white;
    border-radius: 12px;
  }

  #tags .col {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  #tags p {
    color: white;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    padding: 8px;
    cursor: pointer;
    transition: .5s;
  }

  #tags p:hover {
    color: #F16F4F;
  }

  #portfolio-container {
    padding: 80px 44px;
  }

  #more_btn {
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
    cursor: pointer;
  }

  #more_btn:hover {
    background: rgba(255,255,255,0.8);
    color: black;
    border: 1px solid transparent;
  }

  @media all and (max-width: 768px) {
    #titlePage h2 {
      padding: 0 22px;
      text-align: center;
    }
  }
</style>
