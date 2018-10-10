<template>

  <nav role="navigation">
    <div  
      class="container navigation">

      <div class="navigation__logo">
        <img
          src="~/static/images/diwanee-logo.png"
          alt="logo">
      </div>

      <ul 
        :class="{open: sideBarOpen}" 
        class="navigation__links">
        <li class="navigation__links-item"><nuxt-link tag="a" to="/#home" href="#home">HOME</nuxt-link></li>
        <li class="navigation__links-item"><nuxt-link tag="a" to="/#about" href="#about">ABOUT</nuxt-link></li>
        <li class="navigation__links-item"><nuxt-link tag="a" to="/#brands" href="#brands">OUR BRANDS</nuxt-link></li>
        <li class="navigation__links-item"><nuxt-link tag="a" to="/#jobs" href="#jobs">JOBS</nuxt-link></li>
        <li class="navigation__links-item"><a href="#contact">CONTACT</a></li>
        <p class="navigation__social--text">Follow us</p>
        <Social class="navigation__social" />
      </ul>

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
  mounted() {
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //   anchor.addEventListener("click", function(e) {
    //     e.preventDefault();
    //     document.querySelector(this.getAttribute("href")).scrollIntoView({
    //       behavior: "smooth"
    //     });
    //   });
    // });
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
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 3.8rem;
  @include breakpoint(desktop) {
    height: auto;
    margin-bottom: 5rem;
    align-items: baseline;
  }

  &__logo img {
    width: 7rem;
    // height: 1.8rem;
    @include breakpoint(desktop) {
      width: auto;
      height: auto;
    }
  }

  &__social {
    margin: 0;
    @include breakpoint(desktop) {
      display: none;
    }

    &--text {
      margin: 10vh 0 1rem;
      font-size: 1.6rem;
      line-height: 1.94;
      @include breakpoint(desktop) {
        display: none;
      }
    }
  }

  &__links {
    display: flex;
    @include breakpoint(phone) {
      background: $white;
      z-index: 3;
      position: absolute;
      flex-direction: column;
      height: 90vh;
      margin-top: 10vh;
      -webkit-transform: translateX(-120%);
      transform: translateX(-120%);
      transition: all 200ms ease-in;
      width: 100%;
      &.open {
        -webkit-transform: none;
        transform: none;
      }
    }

    &-item {
      font-size: 2.6rem;
      color: $dark;
      line-height: 1.19;
      display: inline;
      padding: 1.6rem 0;

      @include breakpoint(desktop) {
        font-size: 1.4rem;
        padding: 0 1.75rem;
        line-height: 2.21;
      }

      a {
        position: relative;
        text-decoration: none;

        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -1px;
          left: 0;
          background-color: $rouge;
          visibility: hidden;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
        }

        &:hover:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
      }
    }
  }
}

// Hamburger animation

.hamburger {
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
