<template>
  <div id="game-modal" :class="{'game-started': gameStarted}" class="game-modal">

    <div class="game-modal__wrapper">

      <button class="game-modal__wrapper-leave" @click="closeModal">X</button>

      <VasilyGame id="game" class="game" />

      <div id="loading-text" :class="{'game-started': gameStarted}" class="loading-text">LOADING <span id="loading-text--num">0%</span></div>

    </div>
  </div>

</template>

<script>
import VasilyGame from "~/components/Game/VasilyGame.vue";
export default {
  components: {
    VasilyGame
  },
  computed: {
    gameStarted() {
      return this.$store.state.gameStarted;
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.gameStarted ? "lock-screen" : ""
      },
      htmlAttrs: {
        class: this.gameStarted ? "lock-screen" : ""
      }
    };
  },
  methods: {
    closeModal() {
      this.$store.state.gameStarted = false;
      this.$store.state.video.play();
    }
  }
};
</script>

<style lang="scss">
@import "~assets/scss/master";

.lock-screen {
  margin: 0;
  overflow: hidden;
}

.game-modal {
  display: none;
  @include breakpoint(desktop) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: 0;
    background: rgba(0, 0, 0, 0.9);
    transition: all 0.3s linear;
    &.game-started {
      opacity: 1;
      display: block;
      z-index: 100;
      overflow: hidden;
    }

    .game-modal__wrapper {
      position: relative;
      top: 20vh;
      width: 114rem;
      margin: 0 auto;

      &-leave {
        color: $white;
        position: absolute;
        top: -2.81rem;
        right: -0.5rem;
        font-size: 2rem;
        background: none;
        border: none;
        font-weight: 100;
      }
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
  color: #db345f;
  opacity: 0;
  display: none;
  &.game-started {
    opacity: 1;
    display: block;
  }
}
@include breakpoint(phone) {
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
</style>
