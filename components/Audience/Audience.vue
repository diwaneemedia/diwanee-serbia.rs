<template>
  <div class="audience">
    <div class="container l-container--grid">
      <h4 class="c-section__guide l-padded--left">audience</h4>
      <h3
        class="c-section__title l-padded--left audience__title"
      >We recognize our audience’s needs and utilize our expertise to help brands develop the right digital marketing strategies.</h3>
      <div class="audience__card-wrapper">
        <audience-card class="item1">
          <template slot="numbers">8</template>
          <template slot="text">milion monthly unique users</template>
        </audience-card>
        <audience-card class="item2">
          <template slot="numbers">6</template>
          <template slot="text">media brands</template>
        </audience-card>
        <audience-card class="item3">
          <template slot="numbers">29</template>
          <template slot="text">milion page views</template>
        </audience-card>
        <audience-card class="item4">
          <template slot="numbers">36</template>
          <template slot="text">milion fans across social channels</template>
        </audience-card>
      </div>
    </div>
  </div>
</template>

<script>
import AudienceCard from "~/components/Audience/AudienceCard.vue";
export default {
  components: {
    AudienceCard
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/master.scss";
.audience__title {
  margin-bottom: 4rem;
  @include breakpoint(desktop) {
    margin-bottom: 9.7rem;
  }
}
.audience__card {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 20.8rem;
  margin: 0 auto;
  margin-bottom: 3.2rem;
  @include breakpoint(desktop) {
    flex-direction: row;
    margin: 0;
    width: 100%;
    align-items: center;
    text-align: left;
  }

  &__title {
    color: $rouge;
    font-family: PlayFair;
    font-size: 6.3rem;
    font-weight: bold;
    line-height: 1.3;
    @include breakpoint(desktop) {
      margin-right: 1.8rem;
    }
  }
  &__content {
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 1.17;
    @include breakpoint(desktop) {
      padding-top: 2rem;
    }
  }
}
// Desktop Layout
@include breakpoint(desktop) {
  .audience__card-wrapper {
    grid-row: 3;
    grid-column: 2/-1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    display: -ms-grid;
    -ms-grid-row: 3;
    -ms-grid-column: 2/-1;
    -ms-display: grid;
    -ms-grid-columns: repeat(5, 1fr);
  }
  .audience {
    .item1,
    .item3 {
      grid-column: 1;
      grid-row: 1;
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    .item2,
    .item4 {
      grid-row: 2;
      -ms-grid-row: 2;
    }
    .item3 {
      grid-column: 3;
      -ms-grid-column: 3;
    }
    .item4 {
      grid-column: 3/5;
      -ms-grid-column: 3/5;
      width: 30rem;
    }
  }
}
</style>
