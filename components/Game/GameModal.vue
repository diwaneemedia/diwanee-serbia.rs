<template>
  <div id="game-modal" :class="{'game-started': gameStarted}" class="game-modal" @click="pressKey">

    <div class="game-modal__wrapper">

      <button class="game-modal__wrapper-leave" @click="closeModal">X</button>

      <VasilyGame id="game" class="game" />

      <div id="loading-text" :class="{'game-started': gameStarted}" class="loading-text">LOADING <span id="loading-text--num">0%</span></div>

    </div>

    <div class="arcade">
      <div class="arcade__controls">
        <!-- <img :class="{'move-left': moveLeft}" class="arcade__controls-stick arcade__controls-stick--left" src="~assets/images/arcade/stick.png" alt="arcade stick"> -->
        <img :class="{'move-left': moveLeft, 'move-right': moveRight }" class="arcade__controls-stick" src="~assets/images/arcade/stick.png" alt="arcade stick">
        <!-- <img class="arcade__controls-stick arcade__controls-stick--right" src="~assets/images/arcade/stick.png" alt="arcade stick"> -->
        <img 
          :class="{'pressed': leftClick}" 
          class="arcade__controls-button"           
          src="~assets/images/arcade/btn-pressed.png" 
          alt="btn pressed" 
          @animationend="leftClick = false">
      </div>
    </div>

  </div>

</template>

<script>
import VasilyGame from "~/components/Game/VasilyGame.vue";
export default {
  components: {
    VasilyGame
  },
  data() {
    return {
      leftClick: false,
      moveLeft: false,
      moveRight: false
    };
  },
  computed: {
    gameStarted() {
      return this.$store.state.gameStarted;
    }
  },
  // Stick direction listeners
  mounted() {
    window.addEventListener("keydown", this.stickDirection);
    window.addEventListener("keyup", this.clearDirection);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.stickDirection);
    window.removeEventListener("keyup", this.clearDirection);
  },
  // Head Atributes to lock scroll when game is on
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
    },
    pressKey() {
      this.leftClick = true;
    },
    stickDirection(e) {
      if (e.keyCode == 37 || e.keyCode == 65) {
        this.moveLeft = true;
      } else if (e.keyCode == 39 || e.keyCode == 68) {
        this.moveLeft = false;
        this.moveRight = true;
      }
    },
    clearDirection() {
      this.moveLeft = false;
      this.moveRight = false;
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
    background: url("~static/images/modal-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s linear;
    &.game-started {
      opacity: 1;
      display: block;
      z-index: 100;
      overflow: hidden;
    }

    .game-modal__wrapper {
      position: relative;
      top: 17rem;
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
        z-index: 11;
      }
    }
  }
}

// loading text that shows load bar, doesnt dissappear just gets ran over by z-index of game
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
  &.loaded {
    display: none;
  }
}
@include breakpoint(phone) {
  #gameContainer {
    display: none;
  }
}

// Arcade div
.arcade {
  position: absolute;
  top: -5.5rem;
  background-image: url("~assets/images/arcade/arcade-bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 136.9rem;
  height: 108rem;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 3;

  // Controls wrapper
  &__controls {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;

    // Stick controls!
    &-stick {
      position: absolute;
      top: 79.3rem;
      left: 48.7rem;
      width: 6.5rem;
      -webkit-user-select: none; /* Chrome all / Safari all */
      -moz-user-select: none; /* Firefox all */
      -ms-user-select: none; /* IE 10+ */
      user-select: none;
      // &--left {
      //   opacity: 0;
      //   top: 79.6rem;
      //   left: 47rem;
      //   transform: rotate(-20deg);
      //   &.move-left {
      //     opacity: 1;
      //   }
      // }
      &.move-left {
        top: 79.6rem;
        left: 47rem;
        transform: rotate(-20deg);
      }
      &.move-right {
        top: 79.6rem;
        left: 50.2rem;
        transform: rotate(20deg);
      }
      // &--right {
      //   opacity: 0;
      //   top: 79.6rem;
      //   left: 50.2rem;
      //   transform: rotate(20deg);
      // }
    }
    // button controls
    &-button {
      position: absolute;
      top: 86.5rem;
      left: 68.3rem;
      width: 9.9rem;
      opacity: 0;
    }
  }
}
// Pressed, class that gives opacity
.pressed {
  animation: pressed 0.2s;
}

@keyframes pressed {
  0%,
  100% {
    opacity: 1;
  }
}

.game {
  opacity: 1;
  position: relative;
}

.game.loaded {
  opacity: 1;
  z-index: 3;
  overflow: hidden;
  pointer-events: all;
}

// img {
//   max-width: initial;
// }
</style>
