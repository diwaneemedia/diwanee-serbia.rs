<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import Header from "~/components/Header/Header.vue";
export default {
  components: {
    Header
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