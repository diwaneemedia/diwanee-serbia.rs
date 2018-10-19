<template>
  <article class="jobs">

    <div class="container">

      <h2 class="jobs-title">
        <span class="line-title" />WORK WITH US
      </h2>

      <p class="jobs-content">
        We are always looking for motivated, multi-talented, and organized people to join our diverse team! So if you
        want to be part of our team, check out open positions and apply today at <span>posao@diwanee-serbia.com</span>
      </p>

    </div>

    <div class="jobs__list">

      <job-offer>
        <p slot="title" class="col--left-title"> PHP DEVELOPER</p>
        <span slot="hash" class="col--left-hash">#PHP #SQL #GIT #OOP</span>
        <nuxt-link slot="url" class="col--right btn" tag="a" to="/work/php/">VIEW MORE </nuxt-link>
      </job-offer>

      <!-- <job-offer>
        <p slot="title" class="col--left-title">JUNIOR PHP DEVELOPER</p>
        <span slot="hash" class="col--left-hash">#PHP #SQL #GIT #OOP</span>
        <nuxt-link slot="url" class="col--right btn" tag="a" to="/work/php/">VIEW MORE </nuxt-link>
      </job-offer>

      <job-offer>
        <p slot="title" class="col--left-title">WEB DESIGNER</p>
        <span slot="hash" class="col--left-hash">#Sketch #XD #Zeplin #Illustrator</span>
        <nuxt-link slot="url" class="col--right btn" tag="a" to="/work/web/">VIEW MORE </nuxt-link>
      </job-offer> -->

    </div>

  </article>
</template>

<script>
import JobOffer from "~/components/Jobs/JobOffer";

export default {
  components: {
    JobOffer
  }
};
</script>