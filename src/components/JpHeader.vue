<template>
  <header id="jp-header">
    <div id="header-content">
      <div class="container" style="min-height: 100vh; display: flex; align-items: center;">
        <div class="row">
          <div class="col s12">
            <h2><span class="typed"></span></h2>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import JpButton from '@/components/JpButton'

export default {
  name: 'jp-header',
  components: {
    JpButton
  },
  mounted () {
    $('.typed').typed({
      strings: ['Hello toi !', 'Je m\'appel Julien Paris.', 'Je suis développeur web fullstack...', 'et développeur d\'applications mobile et bureau.', 'Bienvenue sur mon site web !'],
      typeSpeed: 30,
      backDelay: 2000,
      loop: false
    })
  }
}
</script>

<style>
  #jp-header {
    width: 100%;
    min-height: 100vh;
    background: url('/static/img/work.jpg') no-repeat top center fixed;
    background-size: cover;
  }

  #header-content {
    width: 100%;
    min-height: 100vh;
    background: rgba(55,60,91,0.1);
  }

  #header-content h2, #header-content h3 {
    color: white;
    font-size: 32px;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    text-align: center;
    padding: 60px 0;
  }

  #header-content h3 {
    font-size: 28px;
  }

  .row {
    margin-bottom: 0;
  }
  
  .typed-cursor{
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
  }
  
  @keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
</style>
