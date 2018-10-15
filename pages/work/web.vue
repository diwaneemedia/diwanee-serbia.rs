<template>
  <main>

    <Navigation />

    <div class="work-details">

      <div class="container">

        <h2 class="work-details-title">
          <span class="line-title" /> WEB DEVELOPER
        </h2>

        <h5 class="work-details-subheadings">
          Sorry, we are not currently looking for new Web Developers
        </h5>

      </div>

    </div>

    <Contact id="contact" />

    <Footer />

  </main>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Contact from "~/components/Contact/Contact.vue";
import Footer from "~/components/Footer/Footer.vue";

export default {
  components: {
    Navigation,
    Contact,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

#home {
  margin-bottom: 9.1rem;
  @include breakpoint(desktop) {
    margin-bottom: 15.7rem;
  }
}
.work-details-subheadings {
  margin-bottom: 15rem;
}
</style>