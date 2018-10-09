<template>
  <div>

    <Navigation id="home" />

    <div class="game-container">

      <svg
        id="animation" 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 1140 540">
        <path
          fill="none" 
          d="M 0,10 L1140,10" />
        <path
          class="path2"
          fill="none" 
          d="M 1130,0 L1130,540" />
        <path
          class="path3"
          fill="none" 
          d="M 1140,530 L0,530" />
        <path
          class="path4"
          fill="none" 
          d="M 10,550 L10,0" />
      </svg>

      <h1 id="title" class="title">
        WE ARE BUILDING THE FUTURE OF DIGITAL MEDIA
      </h1>

      <VasilyGame id="game" class="game" />

    </div>

    <div class="container">

      <About />

      <Brands id="brands" />

    </div>

    <Jobs id="jobs" />

    <Contact id="contact" />

    <div class="container">

      <Footer />

    </div>

  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import VasilyGame from "~/components/Game/VasilyGame.vue";
import About from "~/components/About/About.vue";
import Brands from "~/components/Brands/Brands.vue";
import Jobs from "~/components/Jobs/Jobs.vue";
import Contact from "~/components/Contact/Contact.vue";
import Footer from "~/components/Footer/Footer.vue";

export default {
  components: {
    Navigation,
    VasilyGame,
    About,
    Brands,
    Jobs,
    Contact,
    Footer
  },
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
    window.UnityFinished = function() {
      /// Unity finished loading event
      let element = document.getElementById("game");
      let title = document.getElementById("title");
      let animation = document.getElementById("animation");
      element.classList.add("loaded");
      title.classList.add("fadeOut");
      animation.classList.add("loaded");
      console.log("Unity Done");
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

#home {
  margin-bottom: 8rem;
}

.game-container {
  position: relative;
  margin-bottom: 10rem;
  @include breakpoint(desktop) {
    width: 114rem;
    margin: 0 auto 10rem;
  }
}

.title {
  font-family: "Geomanist";
  font-size: 4rem;
  width: 70%;
  margin: 0 auto;
  top: 14.5%;
  letter-spacing: 0.4rem;
  left: 0;
  right: 0;
  text-transform: uppercase;
  color: $black;
  position: absolute;
  text-align: center;
  z-index: 2;
  @include breakpoint(desktop) {
    font-size: 8rem;
  }
}

.game {
  opacity: 0;
}

.game.loaded {
  opacity: 1;
  border: 1px dashed $pinkish-gray;
  z-index: 999;
  overflow: hidden;
}

.title.fadeOut {
  opacity: 0;
}

// img {
//   max-width: 80%;
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   margin: auto;
//   opacity: 0;
//   animation-name: show;
//   animation-delay: 6s;
//   animation-duration: 1s;
//   animation-fill-mode: forwards;
//   animation-iteration-count: 1;
//   animation-timing-function: linear;
// }

svg#animation.loaded {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1000;
  path {
    stroke-width: 5;
    stroke: #666;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    stroke-dasharray: 1140;
    stroke-dashoffset: 1140;
    animation-duration: 0.5s;
    animation-name: draw;
    animation-timing-function: linear;

    &.path2 {
      animation-duration: 0.25s;
      animation-delay: 0.5s;
      stroke-dasharray: 550;
      stroke-dashoffset: 550;
    }
    &.path3 {
      animation-duration: 0.5s;
    }

    &.path4 {
      animation-duration: 0.25s;
      animation-delay: 0.5s;
      stroke-dasharray: 550;
      stroke-dashoffset: 550;
    }


  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes show {
  to {
    opacity: 1;
  }
}
</style>
