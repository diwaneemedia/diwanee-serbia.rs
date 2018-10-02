<template>
  <div>

    <Navigation />

    <VasilyGame />

    <div class="container">

      <About />

      <Brands />

    </div>

    <Jobs />

    <Contact />

    <div class="container">

      <Footer />

    </div>

  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import VasilyGame from "~/components/Game/VasilyGame.vue";
import About from "~/components/About/About.vue";
import Brands from "~/components/Brands/Brands.vue";
import Jobs from "~/components/Jobs/Jobs.vue";
import Contact from "~/components/Contact/Contact.vue";
import Footer from "~/components/Footer/Footer.vue";

export default {
  components: {
    Navigation,
    VasilyGame,
    About,
    Brands,
    Jobs,
    Contact,
    Footer
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