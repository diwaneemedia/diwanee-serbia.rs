<template>
  <div class="about">
    <div class="container l-container--grid">
      <h4 class="c-section__guide l-padded--left">About us</h4>

      <h3
        class="c-section__title l-padded--left about__title"
      >Our mission is to create, distribute and engage in original high-quality and trusted content</h3>

      <p
        class="about__paragraphs item2"
      >Diwanee Serbia was established in 2010 and now is a leading digital media company, building on one of the largest audiences in the Middle East and the GCC.</p>
      <p class="about__paragraphs item3">
        <span>Our mission:</span> Create, distribute and engage our audience in original, high quality and trusted content focused on life style, mainly beauty, fashion, food, family and entertainment.
      </p>

      <p class="about__paragraphs item4">
        <span>Our audience:</span> 10.2M unique users, 110M video views, 25M page views, 27M fans across platforms.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/assets/scss/master.scss";

.about {
  &__title {
    margin-bottom: 4.2rem;
    @include breakpoint(desktop) {
      margin-bottom: 5.8rem;
    }
  }
  &__paragraphs {
    margin-bottom: 1.8rem;
    span {
      font-weight: 600;
    }
  }
}

@include breakpoint(desktop) {
  .about {
    .item2 {
      grid-row: 3;
      grid-column: 2/4;
    }
    .item3 {
      grid-row: 3;
      grid-column: 4/6;
    }
    .item4 {
      grid-row: 4;
      grid-column: 4/6;
    }
  }
}
</style>