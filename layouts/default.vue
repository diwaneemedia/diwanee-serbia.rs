<template>
  <div class="container">
    <Navigation />
    <nuxt />
  </div>
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
.container {
  margin-top: 6.4rem;
}
</style>
