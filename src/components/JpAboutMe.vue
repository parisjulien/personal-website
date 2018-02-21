<template>
  <section id="jp-aboutme">
    <div class="row">
      <div class="col s12 center">
        <h3>Qui suis-je ?</h3>
      </div>
    </div>

    <div class="row">
      <div class="col s12 m4">
        <div class="row">
          <div class="col s12 center">
            <img src="/static/img/icons/computer.png" alt="Développement web">
          </div>
        </div>

        <div class="row">
          <div class="col s12 center">
            <p>
              Je suis développeur web fullstack. Je conçois des applications web sur mesure en utilisant des technologies modernes 
              tel que Nodejs, PHP 7, ASP.Net Core, VueJs...
            </p>
          </div>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="row">
          <div class="col s12 center">
            <img src="/static/img/icons/smartphone.png" alt="Développement mobile">
          </div>
        </div>

        <div class="row">
          <div class="col s12 center">
            <p>
              Je développe des applications mobile. De nos jours, il est important d'envisager d'étendre son projet professionnel 
              vers des applications mobile moderne et "user friendly".
            </p>
          </div>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="row">
          <div class="col s12 center">
            <img src="/static/img/icons/laptop.png" alt="Développement bureau">
          </div>
        </div>

        <div class="row">
          <div class="col s12 center">
            <p>
              Je développe des applications pour Windows, Mac et linux avec des technologies tel qu'Electron, C# & .Net, Java, Ruby...
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'jp-aboutme'
}
</script>

<style>
  #jp-aboutme {
    background: whitesmoke;
    padding: 80px 0;
  }

  #jp-aboutme h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 40px;
    padding-bottom: 60px;
    line-height: 30px;
  }

  #jp-aboutme h4 {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 22px;
    padding-bottom: 22px;
    line-height: 30px;
  }

  #jp-aboutme p {
    text-align: center;
    padding: 0 80px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
  }

  @media all and (max-width: 768px) {
    #jp-aboutme p {
      padding-left: 22px;
      padding-right: 22px;
    }
  }
</style>
