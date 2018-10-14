<template>
  <nav role="navigation">

    <div class="container navigation">

      <div class="navigation__logo" />

      <div :class="{ open: sideBarOpen }" class="navigation__links">
        <nuxt-link class="navigation__links__item" tag="a" to="/#home">Home</nuxt-link>
        <nuxt-link class="navigation__links__item" tag="a" to="/#about" href="#about">About</nuxt-link>
        <nuxt-link class="navigation__links__item" tag="a" to="/#brands" href="#brands">Our brands</nuxt-link>
        <nuxt-link class="navigation__links__item" tag="a" to="/#jobs" href="#jobs">Jobs</nuxt-link>
        <a class="navigation__links__item" href="#contact">CONTACT</a>
        <p class="navigation__links__social--text">Follow us</p>
        <Social class="navigation__links__social" />
      </div>

      <div 
        class="hamburger" 
        @click="openSidebar">

        <div 
          :class="{ change : sideBarOpen }" 
          class="hamburger__bar hamburger__bar1" />
        <div 
          :class="{ change : sideBarOpen }" 
          class="hamburger__bar hamburger__bar2" />
        <div 
          :class="{ change : sideBarOpen }" 
          class="hamburger__bar hamburger__bar3" />
      </div>

    </div>

  </nav>
</template>

<script>
import Social from "~/components/UI/Social";
export default {
  components: {
    Social
  },
  data() {
    return {
      sideBarOpen: false
    };
  },
  methods: {
    openSidebar() {
      this.sideBarOpen = !this.sideBarOpen;
    }
  }
};
</script>