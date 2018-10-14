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

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

.navigation {
  padding-top: 3.8rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  @include breakpoint(desktop) {
    margin-bottom: 5rem;
  }

  &__logo {
    background: center / cover no-repeat url("~static/images/diwanee-logo.svg");
    width: 7.03rem;
    height: 1.87rem;
    @include breakpoint(desktop) {
      width: 10.9rem;
      height: 2.9rem;
    }
  }

  &__links {
    display: flex;
    background: $white;
    z-index: 3;
    @include breakpoint(phone) {
      position: absolute;
      flex-direction: column;
      width: 37.5rem;
      left: -1.4rem;
      padding-left: 1.4rem;
      margin-top: 7.2rem;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    transition: all 200ms ease-in;

    &.open {
      -webkit-transform: none;
      transform: none;
    }

    &__item {
      font-size: 2.6rem;
      line-height: 1.39;
      text-transform: uppercase;
      -webkit-transition: 0.5s;
      transition: 0.3s;
      padding-bottom: 1.6rem;
      color: $dark;
      @include breakpoint(desktop) {
        font-size: 1.4rem;
        margin-left: 1.75rem;
        padding-bottom: 0;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 4px;
          background-color: $pinkish-gray;
        }

        &:after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 4px;
          left: 0;
          opacity: 0;
          background-color: $black;
          -webkit-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          &:after {
            width: 100%;
            opacity: 1;
          }
        }
      }

      &:hover {
        color: $rouge;
      }
    }

    &__social {
      margin: 0;
      @include breakpoint(desktop) {
        display: none;
      }

      &--text {
        margin: 9.2rem 0 1.1rem 0;
        font-size: 1.6rem;
        line-height: 1.94;
        @include breakpoint(desktop) {
          display: none;
        }
      }
    }
  }
}

// Hamburger animation

.hamburger {
  position: absolute;
  right: 0;
  @include breakpoint(desktop) {
    display: none;
  }
}

.hamburger__bar1,
.hamburger__bar2,
.hamburger__bar3 {
  width: 20px;
  height: 2px;
  background-color: #333;
  margin: 4px 0;
  transition: 0.4s;
}

.change.hamburger__bar1 {
  -webkit-transform: rotate(-45deg) translate(-4px, 4px);
  transform: rotate(-45deg) translate(-4px, 4px);
  background-color: $rouge;
}

.change.hamburger__bar2 {
  opacity: 0;
}

.change.hamburger__bar3 {
  -webkit-transform: rotate(45deg) translate(-4px, -5px);
  transform: rotate(45deg) translate(-4px, -5px);
  background-color: $rouge;
}
</style>