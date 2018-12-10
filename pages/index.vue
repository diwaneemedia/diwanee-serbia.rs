<template>
  <div>
    <Header class="header--hp"/>
    <About class="about--hp"/>
    <Brands class="brands--hp"/>
  </div>
</template>

<script>
import Header from "~/components/Header/Header.vue";
import About from "~/components/About/About.vue";
import Brands from "~/components/Brands/Brands.vue";
export default {
  components: {
    Header,
    About,
    Brands
  },
  mounted() {
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

<style lang="scss">
.header--hp {
  margin-bottom: 5rem;
}
.about--hp {
  margin-bottom: 12.4rem;
}
</style>
