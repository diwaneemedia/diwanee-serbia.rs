<template>
  <article class="footer">

    <div class="back-to-top">
      <a href="#home">BACK TO TOP</a>
    </div>

    <!-- img version -->
    <!-- <div class="footer__social">

      <a 
        href="#" 
        class="btn footer__social__btn">
        <img 
          src="~/static/images/facebook.svg" 
          alt="facebook">
      </a>

      <a 
        href="#" 
        class="btn footer__social__btn"> 
        <img 
          src="~/static/images/twitter.svg" 
          alt="twitter">
      </a>

      <a 
        href="#" 
        class="btn footer__social__btn"> 
        <img 
          src="~/static/images/google.svg" 
          alt="google">
      </a>

    </div> -->

    <!-- background version -->

    <Social style="margin:3.1rem auto 4rem" />

    <div class="footer__copyright">
      COPYRIGHT © DIWANEE ALL RIGHTS RESEREVED
    </div>

  </article>
</template>

<script>
import Social from "~/components/UI/Social";

export default {
  components: {
    Social
  }
};
</script>

<style scoped>
</style>