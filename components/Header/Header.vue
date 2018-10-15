<template>
  <header class="header">

    <Navigation />

    <GameContainer />

    <video class="video" width="100.5%" autoplay loop muted>
      <source src="~/static/video/game-compressed.mp4" type="video/mp4">
    </video>

  </header>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import GameContainer from "~/components/Game/GameContainer.vue";
export default {
  components: {
    Navigation,
    GameContainer
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 90vh;
  overflow: hidden;
  max-height: 70rem;
  margin-bottom: 3rem;
}
.video {
  position: absolute;
  left: -1px;
  right: -2px;
  top: 0;
}
</style>