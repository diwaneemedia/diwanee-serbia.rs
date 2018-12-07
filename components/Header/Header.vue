<template>
  <header class="header">
    <img src="~/assets/images/diwanee-logo.svg" alt="logo">

    <h1 class="header__title">
      Research
      Improvement
      Design
      Development
      <span>We are building the future of digital media. We are gamers, developers, designers, thinkers.</span>
    </h1>

    <Navigation/>
  </header>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
// @import "~assets/scss/master.scss";
</style>
