<template>
  <div class="container">
    <article id="gameContainer" />
    <div :class="{'game-started': gameStarted}" class="start-btn" @click="startGame">
      {{ gameOptions }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      gameOptions: "start game"
    };
  },
  mounted() {
    // window.UnityFinished = function() {
    //   /// Unity finished loading event
    //   console.log("Unity Done");
    // };
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
      this.gameOptions = "restart";
    }
  },
  head: {
    script: [{ src: "Build/UnityLoader.js" }]
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";
// * {
//   height: 20rem;
//   text-align: center;
// }
.container {
  position: relative;
  height: 54rem;
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

#gameContainer {
  width: 114rem !important;
  height: 54rem !important;
  // max-width: 1152px !important;
  // max-height: 549px !important;
  // margin: 0 auto !important;
  // height: 40vw !important;
  // width: 100vw !important;
  // margin-top: 70px !important;
  position: relative;
  // top: 0;
  z-index: 1;
  // left: 0;
}

#canvas {
  // width: 1152px !important;
  width: 100%;
  // height: 549px !important;
}
</style>
