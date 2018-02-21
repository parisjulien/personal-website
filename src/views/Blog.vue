<template>
  <div id="page-blog">
    <jp-navigation :navPage="true" />

    <section class="titlePage">
      <div class="row">
        <div class="col s12">
          <h2>Blog</h2>
        </div>
      </div>
    </section>

    <section id="blog-container">
      <div id="article-container" class="row">
        <div class="col s12">
          <div class="row" id="article-img" style="background: url('/static/img/background-jp.jpg') no-repeat top center / cover; margin: 0"></div>
          <div id="article-content" class="row z-depth-2">
            <div class="col s12">
              <p id="article-by">
                Par Julien Paris, dans <span style="color: green">Web</span>.
                Posté le 29/08/2017 à 20h14
              </p>
            </div>

            <div class="col s12">
              <h5>ICI LE TITRE DE L'ARTICLE !</h5>
            </div>

            <div class="col s12">
              <p id="article-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aut inventore! Soluta sunt aut ullam assumenda ut impedit dicta laborum debitis, delectus cumque quas eligendi voluptate odit illum, minus aspernatur.
                Quibusdam, aut inventore! Soluta sunt aut ullam assumenda ut impedit dicta laborum debitis, delectus cumque quas eligendi voluptate odit illum, minus aspernatur.
              </p>
            </div>

            <div id="read-more" class="col s12 m6">
              <p><a href="#">Lire la suite...</a></p>
            </div>

            <div id="article-infos" class="col s12 m6">
              <p>0 Commentaire</p>
              <p style="padding-left: 12px">|</p>
              <p style="padding-left: 12px">0 J'aime</p>
              <p style="padding-left: 12px">|</p>
              <p style="padding-left: 12px"><a href="#">Partager</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="margin-top: 22px">
        <div class="col s12 m6 offset-m3">
          <a id="more_btn2">Afficher plus d'articles</a>
        </div>
      </div>
    </section>

    <jp-footer />
  </div>
</template>

<script>
import JpNavigation from '@/components/JpNavigation'
import JpFooter from '@/components/JpFooter'

export default {
  name: 'page-blog',
  components: {
    JpNavigation,
    JpFooter
  }
}
</script>

<style>
  #page-blog .titlePage {
    margin-top: 60px;
    background:#5841B8;
    padding: 40px 0;
    color: white;
  }

  .titlePage h2 {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 32px;
    padding-left: 44px;
  }

  #blog-container {
    padding: 44px 44px;
    background: white;
  }

  #article-img {
    min-height: 500px;
    border-radius: 8px 8px 0 0;
  }

  #article-by {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    padding-top: 22px;
  }

  #article-infos {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  #article-infos p {
    margin: 0;
    padding: 22px 0;
  }

  .article-container {
    margin-bottom: 22px;
  }

  #article-content {
    margin: 0;
    border-radius: 0 0 8px 8px;
    background: white;
  }

  #article-content h5 {
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  #article-text {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    border-bottom: 1px solid grey;
    padding-bottom: 12px;
  }

  #read-more p {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    padding-top: 10px;
  }

  #more_btn2 {
    display: block;
    padding: 12px;
    text-align: center;
    border: 1px solid rgba(33,33,33,0.6);
    border-radius: 8px;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-size: 22px;
    color: black;
    transition: .5s;
    background: transparent;
    cursor: pointer;
  }

  #more_btn2:hover {
    color: white;
    background:#5841B8;
    border: 1px solid transparent;
  }

  @media all and (max-width: 768px) {
    #article-infos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    #article-infos.col.m6, #read-more.col.m6 {
      width: 100%;
    }

    #blog-container {
      padding: 44px 12px;
    }

    .titlePage h2 {
      padding: 0 22px;
      text-align: center;
    }

    #read-more {
      text-align: center;
    }
  }
</style>
