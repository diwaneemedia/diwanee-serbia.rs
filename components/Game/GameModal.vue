<template>
  <div id="game-modal" :class="{'game-started': gameStarted}" class="game-modal">

    <div class="game-modal__wrapper" @click="pressKey">

      <button class="game-modal__wrapper-leave" @click="closeModal">X</button>

      <button class="c-leaderboard__btn" @click="showLeaderboard"> {{ leaderboardText }} </button>

      <VasilyGame v-show="!showLeaderboardOn" id="game" class="game" />

      <Leaderboard v-if="showLeaderboardOn" class="c-leaderboard" />

      <div id="loading-text" :class="{'game-started': gameStarted}" class="c-loading-text">LOADING <span id="loading-text--num">0%</span></div>

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
import axios from "axios";
import VasilyGame from "~/components/Game/VasilyGame.vue";
import Leaderboard from "~/components/Game/Leaderboard.vue";
// import YourScore from "~/components/Game/YourScore.vue";
export default {
  components: {
    VasilyGame,
    Leaderboard,
    // YourScore
  },
  data() {
    return {
      leftClick: false,
      moveLeft: false,
      moveRight: false,
      showLeaderboardOn: false,
      inputScore: false,
      playerScore: null,
    };
  },
  computed: {
    gameStarted() {
      return this.$store.state.gameStarted;
    },
    leaderboardText() {
      if(this.showLeaderboardOn) {
        return "Return to the Game"
      } else {
        return "See the Leaderboard"
      }
    }
  },
  // Stick direction listeners
  mounted() {
    window.addEventListener("keydown", this.stickDirection);
    window.addEventListener("keyup", this.clearDirection);
    window.SetNewScore = this.setScore;
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
    showLeaderboard() {
      this.showLeaderboardOn = !this.showLeaderboardOn;
    },
    setScore(score, name) {
      this.playerScore = score;
      this.playerName = name;
      const playerData = {
        name: this.playerName,
        score: this.playerScore
      }
      console.log(playerData);
      axios.post("https://diwanee-serbia-game.firebaseio.com/users.json", playerData)
      .then(res => console.log(res))
      .catch(error => console.log(error))
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

.c-leaderboard__btn--input {
  left: 10rem;
  bottom: 0;
}

.lock-screen {
  margin: 0;
  overflow: hidden;
}

.game-modal {
  display: none;
  @include breakpoint(desktop) {
    position: fixed;
    width: 100vw;
    height: calc(100vh + 18rem);
    top: -18rem;
    left: 0;
    opacity: 0;
    background: url("~assets/images/arcade/modal-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s linear;
    @include breakpoint(desktopLg) {
      top: 0;
      height: 100vh;
    }
    &.game-started {
      opacity: 1;
      display: block;
      z-index: 100;
      overflow: hidden;
    }

    .game-modal__wrapper {
      position: relative;
      top: 21.7rem;
      width: 114rem;
      margin: 0 auto;
      @include breakpoint(desktopLg) {
        top: 21.6rem;
      }

      &-leave {
        color: $white;
        position: absolute;
        padding: 1rem 2rem;
        top: -2.81rem;
        right: -5rem;
        font-size: 2rem;
        background: none;
        border: none;
        font-weight: 100;
        z-index: 10;
        background: rgba($color: white, $alpha: 0.3);
        @include breakpoint(desktopLg) {
          padding: 2.5rem 3rem;
          top: -17rem;
          right: -33rem;
        }
      }
    }
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
