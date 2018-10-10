<template>
  <div class="container">
    <article id="gameContainer" />
  </div>
</template>

<script>
export default {
  mounted() {
    // window.UnityFinished = function() {
    //   /// Unity finished loading event
    //   console.log("Unity Done");
    // };
    this.UnityLoaderReady();
  },
  methods: {
    UnityLoaderReady() {
      window.gameInstance = UnityLoader.instantiate("gameContainer", [
        "Build/pong2018ver4.json"
      ]);
    }
  },
  head: {
    script: [{ src: "Build/UnityLoader.js" }]
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";
* {
  height: 20rem;
  text-align: center;
}
.container {
  position: relative;
  height: 54rem;
}

// .canvas__container {
//     overflow: hidden;
//
// }

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
