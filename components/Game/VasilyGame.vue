<template>
  <article id="gameContainer" />
</template>

<script>
export default {
  mounted() {
    // require(['@/assets/js/UnityLoader.js'], this.UnityLoaderReady);
    // var gameInstance = UnityLoader.instantiate("gameContainer", "Build/pong5.json");
    // console.log("ex");
    this.UnityLoaderReady();
  },
  methods: {
    UnityLoaderReady() {
      window.gameInstance = UnityLoader.instantiate("gameContainer", [
        "Build/pong11.json"
      ]);
    }
  },
  head: {
    script: [{ src: "Build/UnityLoader.js" }]
  }
};
</script>

<style lang="scss" scoped>
* {
  height: 20rem;
  text-align: center;
}
#gameContainer {
  width: 1152px;
  height: 549px;
  max-width: 1152px;
  margin: 0 auto !important;
  // height: 40vw !important;
  // width: 100vw !important;
  position: relative;
  // top: 0;
  z-index: 1;
  // left: 0;
}
#canvas {
    width: 1152px !important;
    height: 549px !important;
}
</style>
