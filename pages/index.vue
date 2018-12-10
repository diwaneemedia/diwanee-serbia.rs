<template>
  <Header/>
</template>

<script>
import Header from "~/components/Header/Header.vue";
export default {
  components: {
    Header
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