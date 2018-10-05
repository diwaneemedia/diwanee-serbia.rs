<template>
  <div class="container">

    <article id="gameContainer" />
  </div>
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
        "Build/pong2018.json"
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
  height: 80vh;
}
h3 {
    font-family: "Geomanist-Bold";
    font-weight: 700;
    text-transform: uppercase;
    color:white;
    position: absolute;
    top:20%;
    width: 100%;
    font-size:8rem;
    text-align: center;
    z-index: 3;
}
// .canvas__container {
//     overflow: hidden;
//
// }
#gameContainer {
  width: 114rem !important;
  height: 54.3281rem !important;
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
