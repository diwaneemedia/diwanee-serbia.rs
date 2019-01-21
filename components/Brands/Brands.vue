<template>
  <div class="brands">
    <div class="container l-container--grid">
      <h4 class="c-section__guide l-padded--left">Our media brands</h4>
      <h3
        class="c-section__title l-padded--left brands__title"
      >With our brands we are reaching over 10.2 million users on a monthly basis, and 25 milion page views</h3>
    </div>

    <!-- slider -->
    <Brands-Slider/>

    <div class="container l-container--grid">
      <p class="brands__info-txt">27 million fans across platforms.
        <br>110 million video views.
      </p>
    </div>
  </div>
</template>

<script>
import BrandsSlider from "~/components/Brands/BrandsSlider";
export default {
  components: {
    BrandsSlider
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/master.scss";

.brands__title {
  margin-bottom: 3.6rem;
  @include breakpoint(desktop) {
    margin-bottom: 4.8rem;
  }
}
.brands__slider {
  margin-bottom: 3.3rem;
}
.brands__info-txt {
  grid-column: 2/4;
  -ms-grid-column: 2/4;
}
</style>
