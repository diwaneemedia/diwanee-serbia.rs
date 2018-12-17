<template>
  <nav class="navigation" role="navigation">
    <div :class="{ active : sideBarOpen }" class="navigation--mask"></div>
    <div :class="{ open : sideBarOpen }" class="navigation__container">
      <ul>
        <li class="one">
          <a href="#header--hp">Back to where it
            <br>all began
          </a>
        </li>
        <li class="two">
          <a href="#about--hp">Discover who we are
            <br>and what we do
          </a>
        </li>
        <li class="three">
          <a href="#brands--hp">Scroll and check
            <br>our brands
          </a>
        </li>
        <li class="four">
          <a href="#jobs--hp">Want to be part
            <br>of the team?
          </a>
        </li>
        <hr>
      </ul>
      <Social class="social--navigation"/>
    </div>
    <div class="hamburger" @click="openSidebar">
      <div :class="{ open : sideBarOpen }" class="hamburger__bar hamburger__bar1"/>
      <div :class="{ open : sideBarOpen }" class="hamburger__bar hamburger__bar2"/>
      <div :class="{ open : sideBarOpen }" class="hamburger__bar hamburger__bar3"/>
    </div>
  </nav>
</template>

<script>
import Social from "~/components/UI/Social";
export default {
  components: {
    Social
  },
  computed: {
    sideBarOpen() {
      return this.$store.state.sideBarOpen;
    }
  },
  methods: {
    openSidebar() {
      this.$store.state.sideBarOpen = !this.$store.state.sideBarOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/master.scss";

.navigation {
  z-index: 1;
  &__container {
    position: relative;
    transition: all 300ms ease-in;
  }
}

ul {
  display: flex;
  li {
    display: inline;
  }
}

hr {
  position: absolute;
}
.social--navigation {
  position: absolute;
  bottom: 10%;
  @include breakpoint(desktop) {
    display: none;
    // top: 0;
  }
}

// Mobile design
@include breakpoint(phone) {
  .navigation {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    overflow: hidden;
    &--mask {
      transition: all 300ms ease-in;
      position: absolute;
      height: 100%;
      width: 100vh;
      background-color: black;
      transform: rotate(45deg) translateX(150%);
      &.active {
        transform: rotate(45deg) scale(2);
      }
    }
    &__container {
      position: relative;
      width: 100%;
      padding: 13.5rem 7rem 10.2rem 2.7rem;
      color: $white;
      opacity: 0;
      pointer-events: none;

      &.open {
        transform: none;
        opacity: 1;
        pointer-events: initial;
      }
    }
  }
  ul {
    flex-direction: column;
    li {
      padding-left: 3.1rem;
      margin-bottom: 3.7rem;
    }
  }
  a {
    font-size: 2.6rem;
    font-weight: 500;
    line-height: 1.04;
  }
  hr {
    height: 4rem;
    width: 2px;
    margin: 0;
    background: $white;
    border: none;
    top: 13.7rem;
    transition: 0.3s ease-in-out;
  }
  .two:hover ~ hr {
    margin-top: 25%;
  }

  .three:hover ~ hr {
    margin-top: 50%;
  }

  .four:hover ~ hr {
    margin-top: 75%;
  }
}

// Desk design
@include breakpoint(desktop) {
  .navigation {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .navigation__container {
    position: relative;
    width: 114rem;
    margin: 0 auto;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  ul {
    li {
      width: 25%;
      padding: 3.7rem 0 1% 10rem;
    }
  }
  a {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 0.75rem 0;
    font-weight: 300;
    margin: 0;
    color: $white;
  }

  hr {
    height: 2px;
    width: 10%;
    margin-left: 8.5%;
    background: $white;
    border: none;
    top: -7px;
    transition: 0.3s ease-in-out;
  }

  .two:hover ~ hr {
    margin-left: 33.5%;
  }

  .three:hover ~ hr {
    margin-left: 58.5%;
  }

  .four:hover ~ hr {
    margin-left: 83.5%;
  }
}

// Hamburger animation

.hamburger {
  position: absolute;
  right: 1.6rem;
  bottom: 1.5rem;

  @include breakpoint(desktop) {
    display: none;
  }
}

.hamburger__bar1,
.hamburger__bar2,
.hamburger__bar3 {
  width: 33px;
  height: 3px;
  background-color: $white;
  margin: 6px 0;
  transition: 0.4s;
}

.open.hamburger__bar1 {
  transform: rotate(-45deg) translate(-6px, 6px);
}

.open.hamburger__bar2 {
  opacity: 0;
}

.open.hamburger__bar3 {
  transform: rotate(45deg) translate(-6px, -6px);
}
</style>
