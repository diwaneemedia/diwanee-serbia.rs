<template>
  <div>
    <Header class="header--hp"/>
    <About class="about--hp"/>
    <Brands class="brands--hp"/>
    <Audience class="audience--hp"/>
    <Jobs class="Jobs--hp"/>
  </div>
</template>

<script>
import Header from "~/components/Header/Header.vue";
import About from "~/components/About/About.vue";
import Brands from "~/components/Brands/Brands.vue";
import Audience from "~/components/Audience/Audience.vue";
import Jobs from "~/components/Jobs/Jobs.vue";
export default {
  components: {
    Header,
    About,
    Brands,
    Audience,
    Jobs
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
.brands--hp {
  margin-bottom: 11.4rem;
}
.audience--hp {
  margin-bottom: 16.8rem;
}
</style>
