<template>
  <div class="c-leaderboard">

    <h3 class="c-leaderboard__title">Hi, I'm the leader BOAR</h3>

    <table class="c-leaderboard__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rank</th> 
          <th>Score</th>
        </tr>
      </thead>
      <tbody 
        v-for="(player,index) in bestPlayers" 
        :key="player.id">
        <tr>
          <td>{{ player.name }}</td>
          <td> {{ index+1 }} </td> 
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
          name: "" ,
          score: null 
        }
      ]
    }
  },
  mounted() {
    axios.get("https://diwanee-serbia-game.firebaseio.com/users.json")
    .then(res => {
      console.log(res)
      const data = res.data
      const users = []
      for(let key in data) {
        const user = data[key]
        user.id = key
        users.push(user)
      }
      // console.log(users);
      this.bestPlayers = users.sort((a, b) => b.score - a.score);
    })
    .catch(error => console.log(error))
  }  
}
</script>

  
  <style lang="scss">
@import "~assets/scss/master";
    
.c-leaderboard {
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.6);
  font-family: "Space-Invaders";
  text-align: center;
  overflow: scroll;
  // make sure that height is always the same as height of the game!
  height: 54rem;
  padding: 6rem 17rem 0;

  &__title {
    color: #f600f7;
    font-size: 2.2rem;
    margin-bottom: 8.4rem;
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
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    // All Modal Buttons should be same Z-Index
    z-index: 10;
    padding: 2rem 1rem;
    background: rgba(255, 255, 255, 0.3);
    @include breakpoint(desktopLg) {
      bottom: -28.5rem;
    }
  }

}
</style>