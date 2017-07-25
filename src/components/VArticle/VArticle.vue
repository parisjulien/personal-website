<template>
  <div class="row">
    <div :class="'col ' + columns">
      <div class="z-depth-1 article">
        <div class="article-header" :style="'background-image: url(' + article.img + ')'"></div>
          <div class="article-title">
            <h4>{{ article.title }}</h4>
          </div>
          <div class="article-content">
            <p>
              {{ article.content }}
            </p>
          </div>
          <div class="article-footer">
            <p>Rédigé par {{ article.author }} le <i>{{ article.date }}</i> à <i>{{ article.heure }}</i></p>
            <p><a href="#"><i>Lire la suite...</i></a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-article',
  props: {
    article: { type: Object, default: null },
    columns: { type: String, default: 's12' }
  }
}
</script>

<style scoped>
  .article {
    width: 100%;
    border-radius: 6px;
  }

  .article-header {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 300px;
  }

  .article-title h4 {
    text-align: center;
    font-size: 22px;
    margin: 22px 0 0 0;
    padding: 0;
  }

  .article-content p {
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    padding: 22px 28px;
  }

  .article-footer {
    border-top: 1px solid rgba(50, 50, 50, 0.2);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .article-footer p {
    font-size: 18px;
    font-weight: 300;
    padding: 22px 22px;
  }

  @media all and (max-width: 800px) {
    .article-footer p, .article-footer a {
      text-align: center;
      width: 100%;
      padding: 6px 28px;
    }
  }
</style>
