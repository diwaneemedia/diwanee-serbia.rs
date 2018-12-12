<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
        <img class="logo" src="~/assets/images/diwanee-logo.svg" alt="logo">
        <nuxt-link class="contact-link" tag="a" to="/contact">Contact</nuxt-link>
      </div>

      <div class="headings">
        <h1 class="headings__title">Research
          <br>Improvement
          <br>Design
          <br>Development
        </h1>
        <h2
          class="headings__subtitle"
        >We are building the future of digital media. We are gamers, developers, designers, thinkers.</h2>
      </div>
    </div>
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
@import "~/assets/scss/master.scss";
.header {
  height: 100vh;
  background: center / cover no-repeat url("~assets/images/header.jpg");
  position: relative;
  &__top {
    padding-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $white;
    font-size: 1.8rem;
    line-height: 1.72;
  }
}

.headings {
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  color: $white;
  font-family: "Roboto";
  width: 31.2rem;
  &__title {
    font-size: 4.6rem;
    font-weight: bold;
    line-height: 1.07;
    margin-bottom: 1.2rem;
  }
  &__subtitle {
    font-size: 1.6rem;
    font-weight: 300;
    opacity: 0.6;
    line-height: 1.5;
  }
}

.logo,
.contact-link {
  width: 9rem;
  z-index: 2;
}
</style>
