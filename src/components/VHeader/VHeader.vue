<template>
  <header id="v-header" class="valign-wrapper">
      <div class="container">
        <div class="row">
          <div class="col s12 center white-text">
            <p>Je m'appelle</p>
            <h1>JULIEN PARIS</h1>
            <h2>Je suis <span id="home-top-morphex" class="typed"></span></h2>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'v-header'
}
</script>

<style>
  #v-header {
    background: url('./vheader.jpg') no-repeat top center fixed;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }

  #v-header h1, h2, p {
    margin: 0;
    padding: 0;
    font-family: 'Bubbler One', sans-serif;
  }

  #v-header h2, p {
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
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
