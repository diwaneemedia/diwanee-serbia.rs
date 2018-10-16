<template>
  <header class="header">

    <Navigation />

    <GameContainer />

    <video :class="{'game-started': gameStarted}" class="video" width="100.5%" autoplay loop muted>
      <source src="~/static/video/game.mp4" type="video/mp4">
    </video>

    <div :class="{'game-started': gameStarted}" class="start-btn" @click="startGame">
      {{ gameOptions }}
    </div>

  </header>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import GameContainer from "~/components/Game/GameContainer.vue";
export default {
  components: {
    Navigation,
    GameContainer
  },
  data() {
    return {
      gameStarted: false,
      gameOptions: "Click to load game"
    };
  },
  methods: {
    UnityLoaderReady() {
      window.gameInstance = UnityLoader.instantiate("gameContainer", [
        "Build/pong2018ver5.json"
      ]);
    },
    startGame() {
      this.UnityLoaderReady();
      this.gameStarted = true;
      // this.gameOptions = "restart";
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
  margin-bottom: 3rem;
}
.video {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
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
}
.game-started {
  // transform: translateY(20rem);
  // z-index: 9999;
  display: none;
}
</style>