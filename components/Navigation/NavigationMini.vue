<template>
  <div class="navigation--mini">
    <div class="container header__container navigation--mini__container">
      <a class="logo" href="/">
        <img src="~/assets/images/diwanee-logo--black.svg" alt="logo">
      </a>
      <div>
        <a href="/" class="contact-link">Home</a>
        <!-- <nuxt-link class="contact-link jobLink" tag="a" to="/#jobs--hp">Jobs</nuxt-link> -->

      </div>
      <Social class='header__social'/>
    </div>
  </div>
</template>

<script>
import Social from "~/components/UI/Social";
export default {
  components: {
     Social
  }
}
</script>

<style lang="scss" >
@import "~/assets/scss/master.scss";

  .fb-social {
    @include breakpoint(desktop) {
      width:7px;
      fill:#17191d;
    }
    @include breakpoint(landscape) {
      width:3px;
      fill:#17191d;
    }
  }
  .tw-social {
   @include breakpoint(desktop) {
      width: 17px;
      fill:#17191d;
    }
   @include breakpoint(landscape) {
      width: 10px;
      fill:#17191d;
    }
  }


.navigation--mini {
  background-color: transparent;
  color: #17191d;
  font-size: 2.1rem;
  line-height: 1.72;
  padding: 2.8rem 0;
  padding-top: 4rem;
  @include breakpoint(phone) {
    padding-top:0;
  }
  &__container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 10fr 1fr 1fr;
    grid-template-columns: 10fr 1fr 1fr;
    align-items: center;
    @include breakpoint(phone) {
      padding-top: 2.9rem;
    }
  }
  .logo {
    width: 9rem;
    margin-right: auto;
  }
  .jobLink {
    padding-right: 3rem;

    color: $white;
  }
  .contact-link {
    position: static;
    font-size: 18px;
  }
  .social__facebook {
    svg {
      width:7px;
      fill:#17191d;
    }
  }
  .social__twitter {
    svg {
      width: 17px;
      fill:#17191d;
    }
  }
  .social {
    -ms-grid-row-align:end;
    justify-self: end;
    margin: 0;
    @include breakpoint(phone) {
      display: none;
    }
  }
}

</style>
