<template>
  <main>

    <VasilyGame />

    <About />

    <Brands />

    <Jobs />

  </main>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VasilyGame from "~/components/Game/VasilyGame.vue";
import About from "~/components/About/About.vue";
import Brands from "~/components/Brands/Brands.vue";
import Jobs from "~/components/Jobs/Jobs.vue";

export default {
  components: {
    VasilyGame,
    About,
    Brands,
    Jobs
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

.title {
  font-size: 8rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  max-width: 77rem;
  margin: 0 auto;
}

.vue-logo {
  margin: 10rem 0 13rem 40%;
}
</style>

      <!-- <nuxt-link 
        tag="div" 
        to="/jobs/">
        <h1>
          Jobs Page
        </h1>
      </nuxt-link> -->