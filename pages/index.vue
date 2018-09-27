<template>
  <div>

    <!-- Vasyly Game -->
    <h1 class="title">
      we are building the future of digital media
    </h1>
    <logo class="vue-logo" />
    <!-- Ende -->

    <About />

  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import About from "~/components/About/About.vue";

export default {
  components: {
    Logo,
    About
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