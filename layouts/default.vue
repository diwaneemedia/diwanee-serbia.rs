<template>
  <main class="homepage">
    <Navigation />
    <nuxt />
  </main>
</template>

<script>
import Navigation from "~/components/Navigation";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";
.homepage {
  margin-top: 6.4rem;
}
</style>
