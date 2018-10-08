<template>
  <div>

    <Navigation id="home" />

    <div class="game-container">

      <h1 id="title" class="title">
        WE ARE BUILDING THE FUTURE OF DIGITAL MEDIA
      </h1>

      <VasilyGame id="game" class="game" />

    </div>

    <div class="container">

      <About id="about" />

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
    window.UnityFinished = function() {
      /// Unity finished loading event
      var element = document.getElementById("game");
      var title = document.getElementById("title");
      element.classList.add("loaded");
      title.classList.add("fadeOut");
      console.log("Unity Done");
    };
  }
};
</script>

<style lang="scss">
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
  @include fontSizeVw(40,80);
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
}

.game {
  opacity: 0;
}

.game.loaded {
  opacity: 1;
}

.title.fadeOut {
  opacity: 0;
}
</style>
