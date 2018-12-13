<template>
  <div class="brands">
    <div class="container">
      <h4 class="c-section__guide">Our media brands</h4>
      <h3
        class="c-section__title brands__title"
      >With our brands we are reaching over 10.2 million users on a monthly basis, and 25 milion page views</h3>
    </div>

    <!-- slider -->
    <Brands-Slider/>

    <div class="container">
      <p>
        27 million fans across platforms.
        110 million video views.
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

<style>
.brands__title {
  margin-bottom: 3.6rem;
}
.brands__slider {
  margin-bottom: 3.3rem;
}
</style>