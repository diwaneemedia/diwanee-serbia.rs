<template>
  <div class='arcade-holder'>
    <article id="gameContainer"/>
    <div id="loading-text" class="c-loading-text loaded">LOADING <span id="loading-text--num">100%</span></div>
    <Leaderboard v-show="showLeaderboardOn" />
    <button v-show="showLeaderboardOn" class="c-leaderboard__btn" @click="returnToTheGame"> Return to the game </button>
    <div class="arcade__controls">
      <!-- stick controls -->
      <img
        class="arcade__controls-stick arcade__controls-stick--base"
        src="~assets/images/arcade/stick-base.svg"
        alt="arcade stick base" />
      <img
        class="arcade__controls-stick"
        src="~assets/images/arcade/stick.svg"
        alt="arcade stick">
      <!-- button svg NEED TO REFACTOR THIS SHIT ASAP -->
      <img
        class="arcade__controls-button arcade__controls-button-fire"
        src="~assets/images/arcade/fire-btn--pushed.svg"
        alt="btn pressed">
      <img
        class="arcade__controls-button arcade__controls-button-bg"
        src="~assets/images/arcade/fire-btn.svg"
        alt="btn pressed">
      <img
        class="arcade__controls-button arcade__controls-button--neutral"
        src="~assets/images/arcade/neutral-btn.svg"
        alt="btn neutral">
    </div>
  </div>
</template>

<script>
import Leaderboard from "~/components/Game/Leaderboard.vue";
import axios from "axios";
export default {
  head: {
    script: [{ src: "/Build/UnityLoader.js" }]
  },
  data(){
    return {
      showLeaderboardOn:false,
      leftClick: false,
      moveLeft: false,
      moveRight: false,
      inputScore: false
    }
  },
  components: {
    Leaderboard
  },
  mounted(){
    window.SetNewScore = this.setScore;
    window.UnityFinished = function(){
      console.log("UnityFinished");
      $(".c-loading-text").hide();
    }

    this.UnityLoaderReady();
  },
  methods: {
    setScore(score, name) {
      this.playerScore = score;
      this.playerName = name;
      const playerData = {
        name: this.playerName,
        score: this.playerScore
      }
      console.log(playerData);
      axios.post("https://diwanee-serbia-game.firebaseio.com/users.json", playerData)
      .then(res => this.showLeaderboardOn = true)
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
    },
    returnToTheGame() {
      this.showLeaderboardOn = false;
    },
    UnityLoaderReady() {
      window.gameInstance = UnityLoader.instantiate("gameContainer", [
        '/Build/pong2018ver7.json'
      ]);
    }
  }

};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

.arcade-holder {
  position: relative;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  top:22.6rem;
}
#loading-text {
  position: absolute;
  bottom:0;
  left:0;
  color:#db315c;
  font-family: "Roboto";
  font-weight: bold;

  font-size: 16px;
  z-index: 1000;
}
.c-loading-text {
  display: block;
  padding:10px 10px;
}
.game-started {
  display: none;
}
#loading-text--num {
  font-family: "Roboto";
  font-weight: bold;
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
.c-leaderboard__btn {
  font-family: "Space-Invaders";
  color: white;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  // All Modal Buttons should be same Z-Index
  z-index: 10;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
}
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
      left: 36.4rem;
      width: 8rem;
      top: 1.7rem;
      -webkit-user-select: none; /* Chrome all / Safari all */
      -moz-user-select: none; /* Firefox all */
      -ms-user-select: none; /* IE 10+ */
      user-select: none;
      &.move-left {
        // left: 48.8rem;
        transform: rotate(-20deg);
      }
      &.move-right {
        // left: 51.2rem;
        transform: rotate(20deg);
      }
      // Position of base of stick
      &--base {
        left: 36.4rem;
        width: 8rem;
        top: 2.6rem;
      }
    }

    // button controls
    &-button {
      position: absolute;
      top: 11rem;
      left: 57rem;
      width: 8.6rem;

      &-fire {
        top: 11rem;
        left: 57rem;
        width: 8.6rem;
        fill: red;
      }

      &-bg.pressed {
        animation: pressed 0.2s;
      }

      &--neutral {
        left: 67rem;
        top: 9rem;
      }
    }
  }
}
@keyframes pressed {
  0%,100% {
    opacity: 0.2;
  }
}
</style>
