<template>
  <div>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "~/components/Footer/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>