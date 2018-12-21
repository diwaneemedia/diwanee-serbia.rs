<template>
  <div class="c-leaderboard">
    <h3 class="c-leaderboard__title">top 5</h3>

    <table class="c-leaderboard__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rank</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody v-for="(player,index) in bestPlayers.slice(0,5)" :key="player.id">
        <tr>
          <td>{{ player.name }}</td>
          <td>{{ index+1 }}</td>
          <td>{{ player.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bestPlayers: [
        {
          name: "",
          score: null
        }
      ]
    };
  },
  mounted() {
    axios
      .get("https://diwanee-serbia-game.firebaseio.com/users.json")
      .then(res => {
        console.log(res);
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        // console.log(users);
        // Sort right away
        this.bestPlayers = users.sort((a, b) => b.score - a.score);
      })
      .catch(error => console.log(error));
  }
};
</script>

  
  <style lang="scss">
@import "~assets/scss/master";

.c-leaderboard {
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.6);
  font-family: "Space-Invaders";
  text-align: center;
  overflow-y: scroll;
  // make sure that height is always the same as height of the game!
  height: 54rem;
  padding: 4rem 17rem 2rem;

  &__title {
    color: #f600f7;
    font-size: 2.2rem;
    margin-bottom: 6rem;
  }

  &__table {
    width: 100%;
    th {
      color: #28fc0b;
      width: 40%;
      padding-bottom: 3rem;
      font-size: 1.6rem;
      letter-spacing: 0.3px;
    }
    td {
      font-size: 1.6rem;
      line-height: 3;
      color: $white;
    }
  }

  &__btn {
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
}
</style>