<template>
  <div class="c-leaderboard">

    <h3 class="c-leaderboard__title">Hi, I'm the leader BOAR</h3>
    <table class="c-leaderboard__table">
      <tr>
        <th>Name</th>
        <th>Rank</th> 
        <th>Score</th>
      </tr>
      <tr>
        <td>Vlada Vodic</td>
        <td>100</td> 
        <td>666</td>
      </tr>
      <tr>
        <td>Ivan Gavrilovic</td>
        <td>200</td> 
        <td>200</td>
      </tr>
      <tr>
        <td>Mesar Iz Waltera</td>
        <td>4</td> 
        <td>195</td>
      </tr>
      <tr>
        <td>Bukvalno osoba bez ruke</td>
        <td>5</td> 
        <td>150</td>
      </tr>
      <tr>
        <td>Pevac iz Sars-a</td>
        <td>6</td> 
        <td>20</td>
      </tr>
      <tr>
        <td>Slepo Cigance</td>
        <td>7</td> 
        <td>15</td>
      </tr>
      <tr>
        <td>Djurdja Maksimovic</td>
        <td>8</td> 
        <td>-2</td>
      </tr>
    </table>

  </div>
</template>

<style lang="scss">
@import "~assets/scss/master";
    
.c-leaderboard {
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.6);
  font-family: "Space-Invaders";
  text-align: center;
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
    color: white;
    position: absolute;
    bottom: -28.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    // All Modal Buttons should be same Z-Index
    z-index: 10;
    padding: 2rem 1rem;
    background: rgba(255, 255, 255, 0.3);
  }

}
</style>