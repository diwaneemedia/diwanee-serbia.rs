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
  height: 90vh;
  overflow: hidden;
  max-height: 70rem;
  margin-bottom: 3rem;
}
.video {
  position: absolute;
  left: -1px;
  right: -2px;
  top: 0;
}

.start-btn {
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 10rem;
  z-index: 4;
  top: 70%;
  text-align: center;
  position: absolute;
  display: inline-block;
  font-weight: bold;
  padding: 10px 0 10px 10px;
  color: black;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px rgba($color: white, $alpha: 0.5);
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -o-border-radius: 7px;
  border-radius: 7px;
  box-shadow: 0 0.2em gray;
  transition: all 0.3s linear;
  @include breakpoint(phone) {
    display: none;
  }
  cursor: pointer;
  &:active {
    box-shadow: none;
    top: 71%;
  }
}
.game-started {
  // transform: translateY(20rem);
  // z-index: 9999;
  display: none;
}
</style>