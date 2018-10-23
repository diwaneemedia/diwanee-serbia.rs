<template>
  <div id="game-modal" :class="{'game-started': gameStarted}" class="game-modal" @click="pressKey">

    <div class="game-modal__wrapper">

      <button class="game-modal__wrapper-leave" @click="closeModal">X</button>

      <VasilyGame id="game" class="game" />

      <div id="loading-text" :class="{'game-started': gameStarted}" class="loading-text">LOADING <span id="loading-text--num">0%</span></div>

    </div>

    <div class="arcade">

      <div class="arcade__controls">

        <!-- stick controls -->

        <img 
          class="arcade__controls-stick arcade__controls-stick--base" 
          src="~assets/images/arcade/stick-base.svg" 
          alt="arcade stick base">

        <img 
          :class="{'move-left': moveLeft, 'move-right': moveRight }" 
          class="arcade__controls-stick" 
          src="~assets/images/arcade/stick.svg" 
          alt="arcade stick">

        <!-- button svg NEED TO REFACTOR THIS SHIT ASAP -->

        <img
          class="arcade__controls-button arcade__controls-button-fire"           
          src="~assets/images/arcade/fire-btn--pushed.svg" 
          alt="btn pressed">

        <img 
          :class="{'pressed': leftClick}" 
          class="arcade__controls-button arcade__controls-button-bg"
          src="~assets/images/arcade/fire-btn.svg"
          alt="btn pressed"
          @animationend="leftClick = false">
  
        <!-- passive button -->
          
        <img
          class="arcade__controls-button arcade__controls-button--neutral"           
          src="~assets/images/arcade/neutral-btn.svg" 
          alt="btn neutral">

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
        class: this.gameStarted || this.$store.state.sideBarOpen ? "lock-screen" : ""
      },
      htmlAttrs: {
        class: this.gameStarted || this.$store.state.sideBarOpen ? "lock-screen" : ""
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
    @media screen and (max-width: 1440px) {
      top: -18rem;
      height: calc(100vh + 18rem);
      }
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: 0;
    background: url("~assets/images/arcade/modal-bg.png");
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
      @media screen and (max-width: 1440px) {
        top: 21.6rem;
      }
      position: relative;
      top: 21.7rem;
      width: 114rem;
      margin: 0 auto;

      &-leave {
        color: $white;
        position: absolute;
        top: -17rem;
        right: -33rem;
        font-size: 2rem;
        background: none;
        border: none;
        font-weight: 100;
        z-index: 10;
        padding: 2.5rem 3rem;
        background: rgba($color: white, $alpha: 0.3);
        @media screen and (max-width: 1440px) {
        padding: 1rem 2rem;
        top: -2.81rem;
        right: -5rem;
        }
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
  top: -1rem;
  background-image: url("~assets/images/arcade/arcade-bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 137.4rem;
  height: 165.1rem;
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
      top: 79.4rem;
      left: 50rem;
      width: 6.5rem;
      -webkit-user-select: none; /* Chrome all / Safari all */
      -moz-user-select: none; /* Firefox all */
      -ms-user-select: none; /* IE 10+ */
      user-select: none;
      &.move-left {
        left: 48.8rem;
        transform: rotate(-20deg);
      }
      &.move-right {
        left: 51.2rem;
        transform: rotate(20deg);
      }
      // Position of base of stick
      &--base {
        top: 80rem;
      }
    }  

    // button controls
    &-button {
      position: absolute;
      top: 87.5rem;
      left: 63rem;
      width: 6.5rem;

      &-fire {
        top: 88.1rem;
        fill: red;
      }

      &-bg.pressed {
        animation: pressed 0.2s;
      }

      &--neutral {
        top: 88rem;
        left: 70rem;
      }
    }
  }
}
@keyframes pressed {
  0%,100% {
    opacity: 0.2;
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
