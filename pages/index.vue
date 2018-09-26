<template>
  <div>

    <!-- Vasina Igra -->
    <h1 class="title">
      we are building the future of digital media
    </h1>
    <logo class="vue-logo" />
    <!-- Ende -->

    <article class="about">

      <section class="about__intro">

        <h2 class="about__intro-title">
          — ABOUT DIWANEE
        </h2>

        <p class="about__intro-content">
          Diwanee, is a digital media
          company that specializes in
          content creation targeting
          women in the Middle East.
        </p>

        <div class="about__intro-card about__intro-card--left">
          <div class="about__intro-card__text">
            <h4>
              Diwanee partners with YouTube
            </h4>
            <p>
              To create the only regional female multi channel network called “Duniati”.
            </p>
          </div>
        </div>

        <div class="about__intro-card about__intro-card--right">
          <div class="about__intro-card__text about__intro-card--right__text">
            <h4>
              Diwanee partners with YouTube
            </h4>
            <p>
              To create the only regional female multi channel network called “Duniati”.
            </p>
          </div>
        </div>

      </section>

      <section class="about__jumbotron">
        <h2 class="about__jumbotron-title">
          — DIGITAL BIG - THINKERS
        </h2>
        <p class="about__jumbotron-content">

          Our most prized technological accomplishment is a modern media stack platform, named Harmony, created with a lot of passion and knowledge. The platform was built from ground up, for digital-native authoring, publishing, advertising and distribution. We made Harmony the core of our business, so that we could distribute content to our readers on any device and on any platform.
        </p>
      </section>

    </article>

  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

.title {
  font-size: 8rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  max-width: 77rem;
  margin: 0 auto;
}

.vue-logo {
  margin: 10rem 0 13rem 40%;
}
</style>

      <!-- <nuxt-link 
        tag="div" 
        to="/jobs/">
        <h1>
          Jobs Page
        </h1>
      </nuxt-link> -->