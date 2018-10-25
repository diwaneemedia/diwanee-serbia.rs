<template>
  <header class="header">

    <Navigation />

    <!-- video desk -->
    <video
      ref="video"
      :class="{'game-started': gameStarted}"
      class="video video--desk"
      width="100%"
      autoplay loop muted playsinline>
      <source src="~/assets/video/game.mp4" type="video/mp4">
    </video>

    <!-- video mob -->
    <video
      ref="videoMob"
      :class="{'game-started': gameStarted}"
      class="video video--mob"
      width="100%"
      poster="video/poster.png"
      autoplay loop muted playsinline>
      <source src="~/assets/video/game--mob.mp4" type="video/mp4">
    </video>

    <!-- button for loading game modal -->
    <div
      id="start-btn"
      :class="{'game-started': gameStarted}"
      class="start-btn"
      @click="startGame">
      {{ gameOptions }}
    </div>

  </header>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
export default {
  components: {
    Navigation
  },
  data() {
    return {
      gameOptions: "Click to play"
    };
  },
  computed: {
    gameStarted() {
      return this.$store.state.gameStarted;
    }
  },
  mounted() {
    // Autoplay Code for Phones
    // this.$refs.video = this.$store.state.video;
    this.$store.state.video = this.$refs.video;
    this.$store.state.videoMob = this.$refs.videoMob;
    this.$refs.video.play();
    console.log("video playing");
  },
  methods: {
    UnityLoaderReady() {
      window.gameInstance = UnityLoader.instantiate("gameContainer", [
        "Build/pong2018ver7.json"
      ]);
    },
    startGame() {
      this.UnityLoaderReady();
      this.$store.state.gameStarted = true;
      this.$refs.video.pause();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";
.header {
  position: relative;
  height: 100vh;
  overflow: hidden;
  max-height: 70rem;
  @include breakpoint(desktop) {
    height: 92vh;
    max-height: 77rem;
  }
  @include breakpoint(desktopLg) {
    margin-bottom: 3rem;
    height: 92vh;
    max-height: 80rem;
  }
}

.video {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 2;
  @include breakpoint(desktop) {
    width: 100%;
    top: 0;
    &--mob {
      display: none;
    }
  }
  &--desk {
    @include breakpoint(phone) {
      display: none;
    }
  }
}

.start-btn {
  @include breakpoint(phone) {
    display: none;
  }
  bottom: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 4;
  text-align: center;
  position: absolute;
  display: inline;
  font-weight: bold;
  color: $black;
  font-family: "Geomanist";
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  animation: blinker 0.8s linear infinite;
  @include breakpoint(desktopLg) {
    bottom: 11.8%;
  }
  &.game-started {
    display: none;
  }
}

@keyframes blinker {
  0%,49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
