<template>
  <header class="header">

    <Navigation />

    <video :class="{'game-started': gameStarted}" class="video" width="100%" autoplay loop muted>
      <source src="~/static/video/game.mp4" type="video/mp4">
    </video>

    <div id="start-btn" :class="{'game-started': gameStarted}" class="start-btn" @click="startGame">
      {{ gameOptions }}
    </div>

  </header>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
export default {
  components: {
    Navigation
  },
  data() {
    return {
      gameOptions: "Click to load game"
    };
  },
  computed: {
    gameStarted() {
      return this.$store.state.gameStarted;
    }
  },
  mounted() {
    // Autoplay Code for Phones
    let video = document.querySelector("video");
    video.play();
    console.log("video playing");
  },
  methods: {
    UnityLoaderReady() {
      window.gameInstance = UnityLoader.instantiate("gameContainer", [
        "Build/pong2018ver5.json"
      ]);
      let loadingText = document.getElementById("loading-text");
      let gameModal = document.getElementById("game-modal");
      loadingText.classList.add("game");
      gameModal.classList.add("game-started");
    },
    startGame() {
      this.UnityLoaderReady();
      this.$store.startGame();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";
.header {
  position: relative;
  height: 92vh;
  overflow: hidden;
  max-height: 70rem;
  @include breakpoint(desktop) {
    margin-bottom: 3rem;
  }
}

.video {
  position: absolute;
  width: 150vw;
  top: 20rem;
  left: -25vw;
  right: 0;
  z-index: 2;
  @include breakpoint(desktop) {
    width: 100%;
    top: 0;
    left: 0;
  }
  &.game-started {
    display: none;
  }
}

.start-btn {
  bottom: 11.8%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 4;
  text-align: center;
  position: absolute;
  display: inline;
  font-weight: bold;
  color: black;
  font-family: "Geomanist";
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;

  @include breakpoint(phone) {
    display: none;
  }
  &.game-started {
    display: none;
  }
}
</style>