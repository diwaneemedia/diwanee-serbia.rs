<template>
  <div class="game-bg">
    <Arcade/>
  </div>
</template>

<script>
import axios from "axios";
import Arcade from "~/components/Game/Arcade.vue";
export default {
  components: {
    Arcade
  },
  head(){
    return {
      title: "Diwanee Serbia - Game",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'canonical', name: 'canonical', content: 'http://www.diwanee-serbia.rs/game' }
      ]
    }
  },
  layout: "game"
};
</script>

<style lang="scss">
.game-bg {
  background: url("~assets/images/arcade/arcade-bg.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
}
</style>
