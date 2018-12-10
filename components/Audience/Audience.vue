<template>
  <div class="audience">
    <div class="container">
      <h4 class="c-section__guide">audience</h4>
      <h3
        class="c-section__title brands__title"
      >We recognize our audience’s needs and utilize our expertise to help brands develop the right digital marketing strategies.</h3>
      <div class="audience__card-wrapper">
        <audience-card>
          <template slot="numbers">8</template>
          <template slot="text">milion monthly unique users</template>
        </audience-card>
        <audience-card>
          <template slot="numbers">6</template>
          <template slot="text">Media Brands</template>
        </audience-card>
        <audience-card>
          <template slot="numbers">29</template>
          <template slot="text">milion page views</template>
        </audience-card>
        <audience-card>
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
.audience__card {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 20.8rem;
  margin: 0 auto;
  margin-bottom: 3.2rem;

  &__title {
    color: $rouge;
    font-family: PlayFair;
    font-size: 6.3rem;
    font-weight: bold;
    line-height: 1.3;
  }
  &__content {
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 1.17;
  }
}
</style>