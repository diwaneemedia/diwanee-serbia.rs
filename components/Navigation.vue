<template>
  <nav class="navigation" role="navigation">
    <div :class="{ open : sideBarOpen }" class="navigation__container">
      <ul>
        <li class="one">
          <a href="#">
            Back to where it
            all began
          </a>
        </li>
        <li class="two">
          <a href="#">
            Discover who we are
            and what we do
          </a>
        </li>
        <li class="three">
          <a href="#">
            Scroll and check
            our brands
          </a>
        </li>
        <li class="four">
          <a href="#">
            Want to be part
            of the team?
          </a>
        </li>
        <hr>
      </ul>
    </div>
    <div class="hamburger" @click="openSidebar">
      <div :class="{ open : sideBarOpen }" class="hamburger__bar hamburger__bar1"/>
      <div :class="{ open : sideBarOpen }" class="hamburger__bar hamburger__bar2"/>
      <div :class="{ open : sideBarOpen }" class="hamburger__bar hamburger__bar3"/>
    </div>
  </nav>
</template>

<script>
// import Social from "~/components/UI/Social";
export default {
  components: {
    // Social
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
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  &__container {
    position: relative;
    transform: translate(100%, 100%);
    transition: all 200ms ease;
    background-color: black;
    width: 100%;
    height: 100%;
    &.open {
      transform: none;
    }
  }
}
// hr {
//   position: absolute;
//   top: 0;
// }
ul {
  display: flex;
  flex-direction: column;
}
ul li {
  display: inline;
  text-align: center;
}

a {
  display: inline-block;
  width: 24%;
  padding: 0.75rem 0;
  margin: 0;
  text-decoration: none;
  color: #333;
}

// .two:hover ~ hr {
//   margin-top: 25%;
// }

// .three:hover ~ hr {
//   margin-top: 50%;
// }

// .four:hover ~ hr {
//   margin-top: 75%;
// }
@include breakpoint(desktop) {
  .two:hover ~ hr {
    margin-left: 25%;
  }

  .three:hover ~ hr {
    margin-left: 50%;
  }

  .four:hover ~ hr {
    margin-left: 75%;
  }
}

hr {
  height: 0.25rem;
  width: 25%;
  margin: 0;
  background: tomato;
  border: none;
  transition: 0.3s ease-in-out;
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
  background-color: $rouge;
}

.open.hamburger__bar2 {
  opacity: 0;
}

.open.hamburger__bar3 {
  transform: rotate(45deg) translate(-6px, -6px);
  background-color: $rouge;
}
</style>
