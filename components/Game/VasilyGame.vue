<template>
  <div class="container">
    <article id="gameContainer" />
    <!-- <div :class="{'game-started': gameStarted}" class="start-btn" @click="startGame">
      {{ gameOptions }}
    </div> -->
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     gameStarted: false,
  //     gameOptions: "Click to load game"
  //   };
  // },
  mounted() {
    // window.UnityFinished = function() {
    //   /// Unity finished loading event
    //   console.log("Unity Done");
    // };
  },
  // methods: {
  //   UnityLoaderReady() {
  //     window.gameInstance = UnityLoader.instantiate("gameContainer", [
  //       "Build/pong2018ver5.json"
  //     ]);
  //   },
  //   startGame() {
  //     this.UnityLoaderReady();
  //     this.gameStarted = true;
  //     // this.gameOptions = "restart";
  //   }
  // },
  head: {
    script: [{ src: "Build/UnityLoader.js" }]
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";
.container {
  position: relative;
  height: 54rem;
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
