<template>

  <article class="about">

    <div class="container">

      <section class="about__intro">

        <h2 id="about" class="about__intro-title">
          <span class="line-title" />ABOUT DIWANEE
        </h2>

        <div class="about__intro-card about__intro-card--left">
          <div class="about__intro-card__text about__intro-card--left__text">
            <h4 class="about__intro-card__text-title">
              Diwanee partners with YouTube
            </h4>
            <p class="about__intro-card__text-content">
              To create the only regional female multi channel network called “Duniati”.
            </p>
          </div>
        </div>

        <p class="about__intro-content">
          Diwanee, is a digital media
          company that specializes in
          content creation targeting
          women in the Middle East.
        </p>

        <div class="about__intro-card about__intro-card--right">
          <div class="about__intro-card__text about__intro-card--right__text">
            <h4 class="about__intro-card__text-title">
              Diwanee was established
              in 2009
            </h4>
            <p class="about__intro-card__text-content">
              and operates from Dubai, Beirut and since 2011 from Belgrade.
            </p>
          </div>
        </div>
      </section>

      <section class="about__jumbotron">

        <h2 class="about__jumbotron-title">
          <span class="line-title" />DIGITAL BIG - THINKERS
        </h2>
        <p class="about__jumbotron-content">

          Our most prized technological accomplishment is a modern media stack platform, named Harmony, created with a
          lot of passion and knowledge. The platform was built from ground up, for digital-native authoring, publishing,
          advertising and distribution. We made Harmony the core of our business, so that we could distribute content to
          our readers on any device and on any platform.
        </p>

      </section>

    </div>

    <section class="about__stats">

      <div class="container">

        <h2 class="about__stats-title">
          <span class="line-title" />OUR AUDIENCE
        </h2>

        <div class="about__stats__cards">

          <about-card :class="{ 'animate': visible }" class="about__stats-card1" @intersect="intersected">
            <template slot="numbers">6.</template>
            <template slot="text">Media Brands</template>
          </about-card>

          <about-card :class="{ 'animate': visible }" class="about__stats-card2">
            <template slot="numbers">8 <span>million</span></template>
            <template slot="text">Monthly Unique Users</template>
          </about-card>

          <about-card :class="{ 'animate': visible }" class="about__stats-card3">
            <template slot="numbers">29 <span>million</span> </template>
            <template slot="text">Page Views</template>
          </about-card>

          <about-card :class="{ 'animate': visible }" class="about__stats-card4">
            <template slot="numbers">38 <span>million</span></template>
            <template slot="text">Fans Across Social Channels</template>
          </about-card>

        </div>

      </div>

    </section>

  </article>
</template>

<script>
import AboutCard from "~/components/About/AboutCard.vue";
export default {
  components: {
    AboutCard
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    // var background = document.querySelector(".about__stats");
    // var backgroundBefore = window.getComputedStyle(background, ":before");
    // background.classList.add("background-animation");
    // backgroundBefore.classList.add("background-animation");
  },
  methods: {
    intersected() {
      this.visible = true;
      console.log("this should trigger visible");
    }
  }
};
</script>

<style lang="scss" scoped>
.about__stats-card.animate {
  &::before,
  &::after {
    -webkit-animation-name: animate;
    /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 10s;
    /* Safari 4.0 - 8.0 */
    animation-name: animate;
    animation-delay: 0.3s;
    animation-duration: 2s;
    animation-timing-function: linear;
  }
}

@-webkit-keyframes animate {
  25% {
    transform: scale(0.5);
  }
  80% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Standard syntax */
@keyframes animate {
  25% {
    transform: scale(0.5);
  }
  80% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
