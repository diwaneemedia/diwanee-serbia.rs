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
        { hid: 'canonical', name: 'canonical', content: 'http://www.diwanee-serbia.rs/game' },
        { hid: 'og:image', name: 'og:image', content: 'http://www.diwanee-serbia.rs/og/game-banner-twitt-fb.png' },
        { hid: 'og:description', name: 'og:description', content: 'Play our latest game and have some fun' },
        { hid: 'og:url', name: 'og:url', content: 'http://www.diwanee-serbia.rs/game' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'http://www.diwanee-serbia.rs/og/game-banner-twitt-fb.png' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Play our latest game and have some fun' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'http://www.diwanee-serbia.rs/game' },
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
