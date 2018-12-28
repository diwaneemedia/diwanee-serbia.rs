<template>
  <div>
    <article id="gameContainer"/>
    <div id="loading-text" class="c-loading-text game-started loaded">LOADING <span id="loading-text--num">111%</span></div>
  </div>
</template>

<script>
export default {
  head: {
    script: [{ src: "Build/UnityLoader.js" }]
  },
  mounted(){
    this.UnityLoaderReady();
  },
  methods: {
    UnityLoaderReady() {
      window.gameInstance = UnityLoader.instantiate("gameContainer", [
        "Build/pong2018ver7.json"
      ]);
    }
  }

};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";
.game-started {
  display: none;
}

#gameContainer {
  width: 114rem !important;
  height: 54rem !important;
  position: relative;
  z-index: 1;
}

#canvas {
  width: 100%;
}
</style>
