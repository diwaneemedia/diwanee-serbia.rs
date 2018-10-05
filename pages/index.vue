<template>
  <div>

    <Navigation id="home" />

    <VasilyGame />

    <!-- <Animation class="animation" /> -->

    <div class="container">

      <About id="about" />

      <Brands id="brands" />

    </div>

    <Jobs id="jobs" />

    <Contact id="contact" />

    <div class="container">

      <Footer />

    </div>

  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
// import Animation from "~/components/Animation.vue";
import VasilyGame from "~/components/Game/VasilyGame.vue";
import About from "~/components/About/About.vue";
import Brands from "~/components/Brands/Brands.vue";
import Jobs from "~/components/Jobs/Jobs.vue";
import Contact from "~/components/Contact/Contact.vue";
import Footer from "~/components/Footer/Footer.vue";

export default {
  components: {
    Navigation,
    // Animation,
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

#home {
  margin-bottom: 10rem;
}

.vue-logo {
  margin: 10rem 0 13rem 40%;
}
</style>
