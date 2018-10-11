<template>
  <div>

    <Navigation id="home" />

    <!-- <Animation class="shitty-anime" /> -->

    <GameContainer />

    <About />

    <Brands id="brands" />

    <Jobs id="jobs" />

    <Contact id="contact" />

    <Footer />

  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import GameContainer from "~/components/Game/GameContainer.vue";
import About from "~/components/About/About.vue";
import Brands from "~/components/Brands/Brands.vue";
import Jobs from "~/components/Jobs/Jobs.vue";
import Contact from "~/components/Contact/Contact.vue";
import Footer from "~/components/Footer/Footer.vue";

export default {
  components: {
    Navigation,
    GameContainer,
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
      let game = document.getElementById("game");
      let title = document.getElementById("title");
      let animation = document.getElementById("animation");
      document.getElementById("loading-text").classList.add("fadeOut");
      game.classList.add("loaded");
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

// .shitty-anime {
//   opacity: 1;
//   position: absolute;
//   z-index: 9999;
// }

// .shitty-anime {
//   opacity: 0;
//   z-index: 0;
// }
</style>
