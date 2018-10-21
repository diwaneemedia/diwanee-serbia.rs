<template>
  <div>

    <Header id="home"/>

    <GameModal />

    <About />

    <Brands id="brands" />

    <Jobs id="jobs" />

    <Contact id="contact" />

    <Footer />

  </div>
</template>

<script>
import Header from "~/components/Header/Header.vue";
import About from "~/components/About/About.vue";
import GameModal from "~/components/Game/GameModal.vue";
import Brands from "~/components/Brands/Brands.vue";
import Jobs from "~/components/Jobs/Jobs.vue";
import Contact from "~/components/Contact/Contact.vue";
import Footer from "~/components/Footer/Footer.vue";

export default {
  components: {
    Header,
    GameModal,
    About,
    Brands,
    Jobs,
    Contact,
    Footer
  },
  mounted() {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          left: 0,
          top: anchor.offsetTop
        });
      });
    });

    window.UnityFinished = function() {
      /// Unity finished loading event
      let game = document.getElementById("game");
      let loadingText = document.getElementById("loading-text");
      loadingText.classList.add("loaded");
      game.classList.add("loaded");
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
</style>
