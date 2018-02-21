<template>
  <footer>
    <div class="row" style="margin-bottom: 0;">
      <div id="copyright" class="col s12 m6">
        <p>© 2017 JULIEN PARIS ALL RIGHT RESERVED</p>
      </div>

      <div id="made" class="col s12 m6">
        <p>MADE WITH LOVE BY JULIEN PARIS</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'jp-footer'
}
</script>

<style>
  footer {
    background: #3D4045;
    padding: 12px 0;
  }

  footer p {
    margin: 0;
    color: #7D7F83;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-size: 16px;
  }

  #made {
    text-align: right;
    padding-right: 32px;
  }

  #copyright {
    padding-left: 32px;
  }
</style>
