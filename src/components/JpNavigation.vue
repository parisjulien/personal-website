<template>
  <div id="jp-navigation">
    <nav :id="homeNav" :class="navPage ? 'shrink z-depth-1' : ''">
      <div class="container">
        <div class="row">
          <div class="col s8 m6">
            <h1>Julien Paris</h1>
          </div>

          <div class="col s4 m6">
            <div id="navigation-link" class="hide-on-med-and-down">
              <p><router-link :to="{ name: 'home' }">Accueil</router-link></p>
              <p><router-link :to="{ name: 'blog' }">Blog</router-link></p>
              <p><router-link :to="{ name: 'projects' }">Projets</router-link></p>
              <p><a href="#">C.V</a></p>
            </div>

            <div id="button-ham">
              <a href="#" data-activates="slide-out" class="button-collapse hide-on-large-only"><i class="material-icons" style="font-size: 32px;">menu</i></a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <ul id="slide-out" class="side-nav">
      <li><router-link :to="{ name: 'home' }">Accueil</router-link></li>
      <li><router-link :to="{ name: 'blog' }">Blog</router-link></li>
      <li><router-link :to="{ name: 'projects' }">Projets</router-link></li>
      <li><a href="#!">C.V</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'jp-navigation',
  props: {
    navPage: { type: Boolean, default: false }
  },
  data () {
    return {
      homeNav: !this.navPage ? 'homeNav' : ''
    }
  },
  mounted () {
    $('.button-collapse').sideNav({ edge: 'right' })

    if ($(document).scrollTop() >= 50) {
      $('#homeNav').toggleClass('shrink').toggleClass('z-depth-1')
    }

    $(document).on('scroll', _ => {
      if ($(document).scrollTop() >= 50 && $('#homeNav').attr('class') !== 'shrink z-depth-1') {
        $('#homeNav').toggleClass('shrink').toggleClass('z-depth-1')
      } else if ($(document).scrollTop() < 50 && $('#homeNav').attr('class') === 'shrink z-depth-1') {
        $('#homeNav').toggleClass('shrink').toggleClass('z-depth-1')
      }
    })
  }
}
</script>

<style>
  nav {
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border: none;
    height: auto;
    box-shadow: none;
    transition: .5s;
    z-index: 1;
  }

  nav h1 {
    color: white;
    font-weight: 300;
    font-size: 30px;
    margin: 0;
    width: 100%;
    margin-top: 62px;
    font-family: 'Raleway', sans-serif;
    transition: .5s;
  }

  #navigation-link {
    display: flex;
    justify-content: flex-end;
    padding-top: 53px;
    transition: .5s;
  }
  
  #button-ham {
    display: flex;
    justify-content: flex-end;
    padding-top: 40px;
  }

  #navigation-link p {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 300;
    transition: .5s;
    padding-left: 22px; /* Temp */
    padding-right: 22px; /* Temp */
  }

  .side-nav {
    background: rgba(55,60,91,0.9);
  }

  .side-nav li {
    text-align: center;
  }

  .side-nav li a {
    color: white !important;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 22px;
    margin: 0;
    display: block;
    padding: 22px 0;
    height: inherit !important;
  }

  nav.shrink {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    transition: .5s;
  }

  nav.shrink h1 {
    color: black;
    font-size: 24px;
    margin-top: 17px;
    transition: .5s;
  }

  nav.shrink #navigation-link {
    display: flex;
    justify-content: flex-end;
    padding-top: 0;
    transition: .5s;
  }

  nav.shrink #navigation-link p {
    color: black;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    padding-left: 22px; /* Temp */
    padding-right: 22px; /* Temp */
    font-weight: 300;
    transition: .5s;
  }

  nav.shrink #navigation-link p a {
    color: black;
    transition: .5s;
  }

  nav.shrink #button-ham {
    padding-top: 0px;
  }

  nav.shrink #button-ham i {
    color: black;
  }
</style>
