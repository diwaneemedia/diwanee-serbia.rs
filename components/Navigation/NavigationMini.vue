<template>
  <div class="navigation--mini">
    <div class="container navigation--mini__container">
      <nuxt-link class="logo" tag="a" to="/">
        <img src="~/assets/images/diwanee-logo.svg" alt="logo">
      </nuxt-link>
      <nuxt-link class="contact-link jobLink" tag="a" to="/work/">Jobs</nuxt-link>
      <nuxt-link class="contact-link" tag="a" to="/contact">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~/assets/scss/master.scss";
.navigation--mini {
  background-color: #17191d;
  color: $warm-grey;
  font-size: 2.1rem;
  line-height: 1.72;
  padding: 2.8rem 0;
  &__container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 9rem;
    margin-right: auto;
  }
  .jobLink {
    padding-right: 3rem;
    color: $white;
  }
}
</style>
