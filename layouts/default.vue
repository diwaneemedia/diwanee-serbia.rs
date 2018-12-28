<template>
  <div>
    <div class="container l-container--grid l-container--grid--main">
      <div class="l-container--grid__item"/>
      <div class="l-container--grid__item"/>
      <div class="l-container--grid__item l-container--grid__item--phone"/>
      <div class="l-container--grid__item"/>
      <div class="l-container--grid__item"/>
      <div class="l-container--grid__item last"/>
    </div>
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
.l-container--grid--main {
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}
@media screen and (max-width: 768px) {
  .l-container--grid__item--phone {
    height: 100%;
    width: 1px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    background-color: #eeeeee;
  }
}
</style>
