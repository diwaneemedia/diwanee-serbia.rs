<template>
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

    <section class="about__stats">

      <h2 class="about__stats-title">
        — OUR AUDIENCE
      </h2>

      <div class="about__stats__items">
        <about-cards>
          <template slot="numbers">6.</template>
          <template slot="text">Media Brands</template>
        </about-cards>

        <about-cards>
          <template slot="numbers">8 <span>million</span></template>
          <template slot="text">Milion Monthly Unique Users</template>
        </about-cards>

        <about-cards>
          <template slot="numbers">29 <span>million</span> </template>
          <template slot="text">Milion Page Views</template>
        </about-cards>

        <about-cards>
          <template slot="numbers">38 <span>million</span></template>
          <template slot="text">Milion Fans Across Social Channels</template>
        </about-cards>
      </div>

    </section>

  </article>
</template>

<script>
import AboutCards from "~/components/About/AboutCards.vue";
export default {
  components: {
    AboutCards
  }
};
</script>

<style scoped>
</style>