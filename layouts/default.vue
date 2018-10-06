<template>
  <main class="homepage">
    <nuxt />
  </main>
</template>

<script>
// import Navigation from "~/components/Navigation";
export default {
  components: {
    // Navigation
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";
.homepage {
  // margin-top: 6.4rem;
  width: 100%;
  @include breakpoint(desktop) {
    width: 144rem;
    margin: 0 auto;
  } 
}
</style>
