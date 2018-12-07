<template>
  <nav role="navigation">
    <div class="container navigation">
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
      <!-- <div 
        class="hamburger" 
        @click="openSidebar">

        <div 
          :class="{ open : sideBarOpen }" 
          class="hamburger__bar hamburger__bar1" />
        <div 
          :class="{ open : sideBarOpen }" 
          class="hamburger__bar hamburger__bar2" />
        <div 
          :class="{ open : sideBarOpen }" 
          class="hamburger__bar hamburger__bar3" />
      </div>-->
    </div>
  </nav>
</template>

<script>
// import Social from "~/components/UI/Social";
export default {
  components: {
    // Social
  }
  // computed: {
  //   sideBarOpen() {
  //     return this.$store.state.sideBarOpen;
  //   }
  // },
  // methods: {
  //   openSidebar() {
  //     this.$store.state.sideBarOpen = !this.$store.state.sideBarOpen;
  //     if (this.$store.state.sideBarOpen) {
  //       this.$store.state.videoMob.currentTime = 0;
  //       this.$store.state.videoMob.pause();
  //     } else {
  //       this.$store.state.videoMob.play();
  //     }
  //   }
  // }
};
</script>

<style lang="scss">
.container {
  position: relative;
  width: 110rem;
}
hr {
  position: absolute;
  top: 0;
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

.two:hover ~ hr {
  margin-left: 25%;
}

.three:hover ~ hr {
  margin-left: 50%;
}

.four:hover ~ hr {
  margin-left: 75%;
}

hr {
  height: 0.25rem;
  width: 25%;
  margin: 0;
  background: tomato;
  border: none;
  transition: 0.3s ease-in-out;
}
</style>
