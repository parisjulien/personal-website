<template>
  <div id="home">
    <jp-navigation />
    <jp-header />
    <jp-about-me />
    
    <section id="portfolio">
      <div class="row">
        <div class="col s12">
          <h4>
            Portfolio <br>
            <span class="typed2"></span>
          </h4>
        </div>
      </div>
      
      <div id="portfolio" class="row">
        <div class="col s12 m4">
          <div class="jp-card" style="background: url('/static/img/florentvargas.png') no-repeat top center;background-size: cover;">
            <div class="jp-card-content">
              <h3>Florentvargas.fr</h3>
              <h5 style="background-color: darkred;">Developpement web</h5>
            </div><a href="https://florentvargas.fr" target="_blank"></a>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="jp-card" style="background: url('/static/img/florencereiki.png') no-repeat top center;background-size: cover;">
            <div class="jp-card-content">
              <h3>Florencereiki.fr</h3>
              <h5 style="background-color: darkred;">Developpement web</h5>
            </div><a href="https://florencereiki.fr" target="_blank"></a>
          </div>
        </div>
      </div>
    </section>

    <section id="blog">
      <div class="container">
        <div id="blog-text" class="row">
          <div class="col s12">
            <p>
              Venez faire un tour sur mon blog, j'y rédige des articles sur toutes sortes de choses liées
              au monde de l'informatique.
            </p>
          </div>
        </div>

        <div id="blog-button" class="row">
          <div class="col s12 m6 offset-m3">
            <jp-button text="Voir mon blog (soon !)" />
          </div>
        </div>
      </div>
    </section>

    <jp-contact />
    <jp-footer />
  </div>
</template>

<script>
import JpNavigation from '@/components/JpNavigation'
import JpHeader from '@/components/JpHeader'
import JpAboutMe from '@/components/JpAboutMe'
import JpCard from '@/components/JpCard'
import JpButton from '@/components/JpButton'
import JpContact from '@/components/JpContact'
import JpFooter from '@/components/JpFooter'

export default {
  name: 'home',
  components: {
    JpNavigation,
    JpHeader,
    JpAboutMe,
    JpCard,
    JpButton,
    JpContact,
    JpFooter
  },
  mounted () {
    $('.typed2').typed({
      strings: ['Il reste de la place pour ton projet :)'],
      typeSpeed: 30,
      backDelay: 2000,
      loop: false
    })
  }
}
</script>

<style>

  #portfolio {
    background: url('/static/img/work2.jpg') no-repeat top center fixed;
    background-size: cover;
    padding: 0 80px 80px 80px;
  }

  #portfolio h4 {
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    text-align: center;
    margin: 0;
    padding: 80px 0;
  }

  #portfolio h4 span {
    font-size: 22px;
    font-weight: 200;
  }

  #blog {
    padding: 80px 0;
  }

  #blog p {
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    text-align: center;
  }

  .jp-card {
    font-family: 'Raleway', sans-serif;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
    color: #ffffff;
    font-size: 16px;
    text-align: left;
    border: 6px solid #222;
    border-radius: 6px;
  }
  .jp-card * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
  .jp-card:before {
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    top: 100%;
    content: '';
    background-color: rgba(33, 33, 33, 0.9);
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    -webkit-transition-delay: 0.25s;
    transition-delay: 0.25s;
  }
  
  .jp-card-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .jp-card h3,
  .jp-card h5 {
    margin: 0;
    opacity: 0;
    letter-spacing: 1px;
  }
  .jp-card h3 {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    font-weight: 400;
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s;
    margin-bottom: 5px;
    font-size: 22px;
  }
  .jp-card h5 {
    font-weight: normal;
    padding: 3px 10px;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    font-size: 18px;
  }
  .jp-card a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .jp-card:hover:before,
  .jp-card.hover:before {
    top: 10px;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
  .jp-card:hover h3,
  .jp-card.hover h3,
  .jp-card:hover h5,
  .jp-card.hover h5 {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  .jp-card:hover h3,
  .jp-card.hover h3 {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  .jp-card:hover h5,
  .jp-card.hover h5 {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  @media all and (max-width: 768px) {
    #portfolio {
      padding: 0 22px 80px 22px;
    }
  }
</style>
