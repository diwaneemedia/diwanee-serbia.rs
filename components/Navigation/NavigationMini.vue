<template>
  <div class="navigation--mini">
    <div class="container navigation--mini__container">
      <a class="logo" href="/">
        <img src="~/assets/images/diwanee-logo.svg" alt="logo">
      </a>
      <div>
        <nuxt-link class="contact-link jobLink" tag="a" to="/work/">Jobs</nuxt-link>
        <a href="/" class="contact-link">Home</a>
      </div>
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
