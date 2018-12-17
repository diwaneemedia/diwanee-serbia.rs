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
  },
  computed: {
    sideBarOpen() {
      return this.$store.state.sideBarOpen;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/master.scss";
.header {
  height: 100vh;
  position: relative;
  background: center / cover no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    ),
    url("~assets/images/header.jpg");
  @include breakpoint(desktop) {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.3)
      ),
      url("~assets/images/header--desk.jpg");
  }
  @media only screen and (min-height: 1023px) {
    height: auto;
  }
  &__top {
    padding-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $white;
    font-size: 1.8rem;
    line-height: 1.72;
    @include breakpoint(desktop) {
      margin-bottom: 19.3rem;
    }
  }
}

.headings {
  color: $white;
  width: 31.2rem;
  @include breakpoint(phone) {
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
  }
  @include breakpoint(desktop) {
    padding-left: 5.1rem;
    padding-bottom: 35rem;
  }

  &__title {
    font-size: 4.6rem;
    font-weight: bold;
    line-height: 1.07;
    margin-bottom: 1.2rem;
    @include breakpoint(desktop) {
      font-size: 5.6rem;
      line-height: 1.05;
      margin-bottom: 2.3rem;
    }
  }
  &__subtitle {
    font-size: 1.6rem;
    font-weight: 300;
    opacity: 0.6;
    line-height: 1.5;
    @include breakpoint(desktop) {
      font-size: 1.6rem;
    }
  }
}

.logo,
.contact-link {
  width: 9rem;
  z-index: 2;
}
// had to add this cause it's gonna glitch without it,
// and I don't like it
.contact-link {
  position: absolute;
  right: 0;
  @include breakpoint(desktop) {
    position: static;
  }
}
</style>
