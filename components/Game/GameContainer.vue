<template>
  <div class="game-container">

    <svg id="animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1140 540">
      <path fill="none" d="M 0,0 L1140,0" />
      <path class="path2" fill="none" d="M 1130,-10 L1130,550" />
      <path class="path3" fill="none" d="M 1140,530 L0,530" />
      <path class="path4" fill="none" d="M 10,540 L10,-10" />
    </svg>

    <h1 id="title" class="title">
      WE ARE BUILDING THE FUTURE OF DIGITAL MEDIA
    </h1>
    <div id="loading-text" class="loading-text">LOADING <span id="loading-text--no">0%</span></div>
    <VasilyGame id="game" class="game" />

  </div>
</template>

<script>
import VasilyGame from "~/components/Game/VasilyGame.vue";
export default {
  components: {
    VasilyGame
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master";

.game-container {
  position: relative;
  margin-bottom: 10rem;
  @include breakpoint(desktop) {
    width: 114rem;
    margin: 0 auto 10rem;
  }
}
.loading-text {
  position: absolute;
  bottom: 10px;
  left: 15px;
  font-family: "Geomanist";
  z-index: 123412;
  font-size: 16px;
  color: #adadad;
}
.title {
  font-family: "Geomanist";
  font-size: 4rem;
  width: 70%;
  margin: 0 auto;
  top: 14.5%;
  letter-spacing: 0.4rem;
  left: 0;
  right: 0;
  text-transform: uppercase;
  color: $black;
  position: absolute;
  text-align: center;
  pointer-events: none;
  z-index: 1001;
  @include breakpoint(desktop) {
    font-size: 8rem;
  }
}

.game {
  opacity: 1;
}

.game.loaded {
  opacity: 1;
  z-index: 999;
  overflow: hidden;
}

.fadeOut {
  opacity: 0;
}

#animation {
  width: 115.9rem;
  height: 56.5rem;
  position: absolute;
  top: 11px;
  left: -10px;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1000;
  pointer-events: none;
}

#animation.loaded {
  path {
    stroke-width: 1;
    stroke: #e2e2e2;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    stroke-dasharray: 1140;
    stroke-dashoffset: 1140;
    animation-duration: 0.5s;
    animation-name: draw;
    animation-timing-function: linear;

    &.path2 {
      animation-duration: 0.25s;
      animation-delay: 0.5s;
      stroke-dasharray: 550;
      stroke-dashoffset: 550;
    }
    &.path3 {
      animation-duration: 0.5s;
    }

    &.path4 {
      animation-duration: 0.25s;
      animation-delay: 0.5s;
      stroke-dasharray: 550;
      stroke-dashoffset: 550;
    }
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
