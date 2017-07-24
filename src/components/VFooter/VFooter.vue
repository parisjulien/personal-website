<template>
  <footer id="v-footer">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <p>
            <i class="material-icons tiny">code</i> with <span style="color: #0885C2">love</span> by Julien Paris
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'v-footer'
}
</script>

<style scoped>
  footer {
    background: #1E1E1E;
  }

  footer p {
    font-size: 20px;
    text-align: center;
    padding-top: 22px;
    padding-bottom: 22px;
    margin: 0;
    color: white;
  }

  footer p i {
    color: #0885C2;
  }

  .row {
    margin-bottom: 0;
  }
</style>
