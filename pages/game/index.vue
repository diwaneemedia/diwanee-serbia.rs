<template>
  <div class="game-bg">
    <Arcade/>
  </div>
</template>

<script>
import Arcade from "~/components/Game/Arcade.vue";
export default {
  components: {
    Arcade
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
