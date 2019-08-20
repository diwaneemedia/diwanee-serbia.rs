<template>
  <div class="b-cconsent" v-if="visible">
    <p>
      Diwanee-serbia.rs uses cookies to ensure you get the best experience on our website. <nuxt-link to="/cookies" class="link">More info</nuxt-link>   
    </p>
    <button v-on:click="okClick">OK</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      visible: this.isVisible()
    }
  },
  methods: {
    okClick() {
      this.$cookies.set("cookieConsent", 1, {maxAge: (10 * 365 * 24 * 60 * 60)});
      this.visible = false;
    },
    isVisible() {
      let cookie = this.$cookies.get("cookieConsent");
      if (typeof(cookie)!=="undefined") {
        return false;
      }
      return true;
    },
  }

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/master.scss";
.link{
  text-decoration: underline;
}
.b-cconsent {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto auto;
  z-index: 2;
  background-color: $dark;
  @include breakpoint(desktop) {
    justify-content: center;
  }
  a{
  }
  p{
    padding: 8.5px;
    text-align: left;
    letter-spacing: 0;
    color: #fff;
    @include breakpoint(desktop) {
      text-align: center;
    }
  }
  button{
    background: $rouge;
    border: 0;
    padding: 0 20px;
    color: $white;
    @include breakpoint(desktop) {
      padding: 0 8.5px;
      margin-left: 17px;
    }
  }
}
</style>
