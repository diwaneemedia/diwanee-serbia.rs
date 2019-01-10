<template>
  <div class='arcade-holder'>
    <article id="gameContainer"/>
    <div id="loading-text" class="c-loading-text loaded">LOADING <span id="loading-text--num">100%</span></div>
    <Leaderboard v-show="showLeaderboardOn" />
    <button v-show="showLeaderboardOn" class="c-leaderboard__btn" @click="returnToTheGame"> Return to the game </button>
  </div>
</template>

<script>
import Leaderboard from "~/components/Game/Leaderboard.vue";
import axios from "axios";
export default {
  head: {
    script: [{ src: "Build/UnityLoader.js" }]
  },
  data(){
    return {
      showLeaderboardOn:false
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
    returnToTheGame() {
      this.showLeaderboardOn = false;
    },
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
</style>
