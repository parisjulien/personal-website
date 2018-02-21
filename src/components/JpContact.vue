<template>
  <section id="jp-contact" class="parallax-container">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h4>Me contacter</h4>
        </div>
      </div>

      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="contact_fullname" type="text" class="validate">
              <label for="contact_fullname">Votre Nom</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12 m6">
              <input id="contact_subject" type="text" class="validate">
              <label for="contact_subject">Sujet</label>
            </div>

            <div class="input-field col s12 m6">
              <input id="contact_email" type="text" class="validate">
              <label for="contact_email">Votre Email</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <textarea id="contact_message" class="materialize-textarea"></textarea>
              <label for="contact_message">Votre message</label>
            </div>
          </div>

          <div class="row">
            <div id="contact-captchat" class="col s12">
              <div class="g-recaptcha" data-sitekey="6LcmnS4UAAAAAJLC22lW9fP8lA7jQcJvEkwNHbXw"></div>
            </div>
          </div>

          <div style="padding: 80px 0;" class="row">
            <div class="col s12 m6 offset-m3">
              <a id="contact_submit" style="cursor: pointer;">Envoyer</a>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="parallax"><img src="/static/img/background-contact.jpg"></div>
  </section>
</template>

<script>
import JpButton from '@/components/JpButton'

export default {
  name: 'jp-contact',
  components: {
    JpButton
  },
  mounted () {
    $('.parallax').parallax()
  }
}
</script>

<style>
  #jp-contact {
    min-height: 100vh;
    height: auto;
    background: rgba(55,60,91,0.6)
  }

  #jp-contact h4 {
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    text-align: center;
    margin: 0;
    padding: 80px 0;
  }

  .input-field {
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
  }

  /* label color */
  .input-field label, .input-field input, .input-field textarea {
    color: white;
  }
   
  /* label focus color */
  .input-field input[type=text]:focus + label, textarea.materialize-textarea:focus:not([readonly]) + label {
    color: #51A7D4;
  }
   
  /* label underline focus color */
  .input-field input[type=text]:focus, textarea.materialize-textarea:focus:not([readonly]) {
    border-bottom: 1px solid #51A7D4;
    box-shadow: 0 1px 0 0 #51A7D4;
  }

  #contact-captchat {
    display: flex;
    justify-content: center;
  }

  #contact_submit {
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
  }

  #contact_submit:hover {
    background: rgba(255,255,255,0.8);
    color: black;
    border: 1px solid transparent;
  }
</style>
