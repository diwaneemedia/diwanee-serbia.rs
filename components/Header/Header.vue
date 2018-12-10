<template>
  <header class="header">
    <div class="container">
      <img class="logo" src="~/assets/images/diwanee-logo.svg" alt="logo">

      <h1 class="header__title">Research
        <br>Improvement
        <br>Design
        <br>Development
      </h1>
      <h2>
        <span>We are building the future of digital media. We are gamers, developers, designers, thinkers.</span>
      </h2>

      <Navigation/>
    </div>
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
.logo {
  width: 9rem;
}
</style>
