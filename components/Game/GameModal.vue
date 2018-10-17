<template>
  <div id="game-modal" class="game-modal">

    <div class="game-modal__wrapper">

      <!-- <svg id="animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1140 540">
        <path fill="none" d="M 0,0 L1140,0" />
        <path class="path2" fill="none" d="M 1130,-10 L1130,550" />
        <path class="path3" fill="none" d="M 1140,530 L0,530" />
        <path class="path4" fill="none" d="M 10,540 L10,-10" />
      </svg> -->

      <button class="game-modal__wrapper-leave" @click="closeModal">X</button>

      <VasilyGame id="game" class="game" />

      <div id="loading-text" class="loading-text">LOADING <span id="loading-text--num">0%</span></div>

      <!-- <h1 id="title" class="title">
      WE ARE BUILDING THE <span>FUTURE</span> <br> OF DIGITAL MEDIA
    </h1> -->

    </div>
  </div>

</template>

<script>
import VasilyGame from "~/components/Game/VasilyGame.vue";
export default {
  components: {
    VasilyGame
  },
  methods: {
    closeModal() {
      let gameModal = document.getElementById("game-modal");
      gameModal.classList.remove("game-started");
      let startBtn = document.getElementById("start-btn");
      startBtn.classList.remove("game-started");
      let video = document.querySelector("video");
      video.classList.remove("game-started");
    }
  }
};
</script>

<style lang="scss">
@import "~assets/scss/master";

@include breakpoint(desktop) {
  .game-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: 0;
    background: url("~static/images/modal-bg3.png"), rgba(0, 0, 0, 0.9);
    background-size: contain;
    background-repeat: no-repeat;
    // background-size: cover;
    // display: none;
    // background: rgba(0, 0, 0, 0.9);
    // transition: all 0.3s linear;
    &.game-started {
      opacity: 1;
      // display: block;
      z-index: 100;
    }
  }
  .game-modal__wrapper {
    position: relative;
    top: 20vh;
    width: 114rem;
    margin: 0 auto;

    &-leave {
      color: $rouge;
      position: absolute;
      top: -2.81rem;
      right: 0;
      font-size: 2rem;
    }
  }
}

.loading-text {
  position: absolute;
  bottom: 10px;
  left: 15px;
  font-family: "Geomanist";
  z-index: 2;
  font-size: 16px;
  color: #adadad;
  opacity: 0;
}
@include breakpoint(phone) {
  #loading-text,
  #gameContainer {
    display: none;
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

// #animation {
//   width: 115.9rem;
//   height: 56.5rem;
//   position: absolute;
//   top: 11px;
//   left: -10px;
//   right: 0;
//   bottom: 0;
//   margin: auto;
//   z-index: 1000;
//   pointer-events: none;
// }

// #animation.loaded {
//   path {
//     stroke-width: 1;
//     stroke: $rouge;
//     // stroke: #e2e2e2;
//     animation-fill-mode: forwards;
//     animation-iteration-count: 1;
//     stroke-dasharray: 1140;
//     stroke-dashoffset: 1140;
//     animation-duration: 0.5s;
//     animation-name: draw;
//     animation-timing-function: linear;

//     &.path2 {
//       animation-duration: 0.25s;
//       animation-delay: 0.5s;
//       stroke-dasharray: 550;
//       stroke-dashoffset: 550;
//     }
//     &.path3 {
//       animation-duration: 0.5s;
//     }

//     &.path4 {
//       animation-duration: 0.25s;
//       animation-delay: 0.5s;
//       stroke-dasharray: 550;
//       stroke-dashoffset: 550;
//     }
//   }
// }

// @keyframes draw {
//   to {
//     stroke-dashoffset: 0;
//   }
// }

// .title {
//   font-family: "Geomanist";
//   font-size: 4rem;
//   width: 70%;
//   margin: 0 auto;
//   top: 17.5%;
//   line-height: 94%;
//   letter-spacing: 0.35rem;
//   left: 0;
//   right: 0;
//   text-transform: uppercase;
//   color: $black;
//   position: absolute;
//   text-align: center;
//   pointer-events: none;
//   z-index: 2;
//   span {
//     color: #e81d44;
//   }
//   @include breakpoint(desktop) {
//     font-size: 8rem;
//   }
// }
</style>
