<template>
  <div>
    <article id="gameContainer" />
  </div>
</template>

<script>
export default {
  head: {
    script: [{ src: "Build/UnityLoader.js" }]
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
