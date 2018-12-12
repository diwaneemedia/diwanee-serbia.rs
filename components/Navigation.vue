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
      <Social class="social--header"/>
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
.social--header {
  position: absolute;
  bottom: 10%;
}
@include breakpoint(phone) {
  .navigation {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    &__container {
      position: relative;
      background-color: black;
      transform: translate(100%, 100%);
      width: 100%;
      height: 30%;
      opacity: 0;
      // correct measures
      padding: 13.5rem 7rem 10.2rem 2.7rem;
      color: $white;

      &.open {
        transform: none;
        height: 100%;
        opacity: 1;
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
    // line-height: 1.04;
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

// a {
//   display: inline-block;
//   width: 24%;
//   padding: 0.75rem 0;
//   margin: 0;
//   text-decoration: none;
//   color: #333;
// }

// hr {
//   height: 0.25rem;
//   width: 25%;
//   margin: 0;
//   background: tomato;
//   border: none;
//   transition: 0.3s ease-in-out;
// }

// hr {
//   position: absolute;
//   top: 0;
// }

// @include breakpoint(desktop) {
// hr {
//   top: 0;
// }
//   .two:hover ~ hr {
//     margin-left: 25%;
//   }

//   .three:hover ~ hr {
//     margin-left: 50%;
//   }

//   .four:hover ~ hr {
//     margin-left: 75%;
//   }
// }

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
