<template>
  <div class="arcade">
    <VasilyGame />
  </div>
</template>

<script>
import VasilyGame from "~/components/Game/VasilyGame.vue";
export default {
  methods:{

  },
  components: {
    VasilyGame
  }
}
</script>

<style lang="scss">
@import "~assets/scss/master";
.arcade {
  background: url("~assets/images/arcade/arcade.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 137.4rem;
  height: 165.1rem;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  position: relative;
  top:-18rem;
  // z-index: 3;
}
#gameContainer {
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  top: 22.5rem;
}
</style>
